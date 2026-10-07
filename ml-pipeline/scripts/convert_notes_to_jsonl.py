import argparse, json, re
from difflib import SequenceMatcher
from pathlib import Path

ROOT       = Path(__file__).resolve().parents[2]
NOTES_ROOT = ROOT / "DATA" / "VTU_CSE_Notes"
TB_ROOT    = ROOT / "DATA" / "VTU_CSE_Textbooks"
QP_ROOT    = ROOT / "DATA" / "question_papers"
OUT_DIR    = ROOT / "ml-pipeline" / "output"
OUT_NOTES  = OUT_DIR / "training_data_notes.jsonl"
OUT_QP     = OUT_DIR / "training_data_qpapers.jsonl"

SUBJECTS = {
    "BCS301":("Mathematics for Computer Science","3RD SEM"),
    "BCS302":("Digital Design and Computer Organization","3RD SEM"),
    "BCS303":("Operating Systems","3RD SEM"),
    "BCS304":("Data Structures and Applications","3RD SEM"),
    "BCS306A":("Java Programming","3RD SEM"),
    "BBOC407":("Biology for Computer Science","4TH SEM"),
    "BCS401":("Analysis and Design of Algorithms","4TH SEM"),
    "BCS402":("Microcontrollers and Embedded Systems","4TH SEM"),
    "BCS403":("Database Management Systems","4TH SEM"),
    "BCS405A":("Discrete Mathematical Structures","4TH SEM"),
    "BUHK408":("Universal Human Values","4TH SEM"),
    "BCS501":("Software Engineering and Project Management","5TH SEM"),
    "BCS502":("Computer Networks","5TH SEM"),
    "BCS503":("Theory of Computation","5TH SEM"),
    "BCS515B":("Cloud Computing and DevOps","5TH SEM"),
    "BRMK557":("Research Methodology","5TH SEM"),
    "BCS601":("Compiler Design","6TH SEM"),
    "BCS602":("Machine Learning","6TH SEM"),
    "BCS613A":("Mobile Application Development","6TH SEM"),
    "BCS613C":("Natural Language Processing","6TH SEM"),
    "BCV654C":("Computer Vision","6TH SEM"),
    "BCS701":("Big Data Analytics","7TH SEM"),
    "BCS702":("Deep Learning","7TH SEM"),
    "BCS703":("Cloud Computing","7TH SEM"),
    "BCS714D":("Blockchain Technology","7TH SEM"),
}

VISUAL_KW = {"topology","architecture","diagram","model","structure","circuit",
             "network","tree","graph","flow","protocol","memory","pipeline",
             "cache","scheduling","layer","layout","format","design","block",
             "system","organization","representation","hierarchy","framework"}

NOISE_RE = [
    re.compile(r"^\s*\d{1,3}\s*$"),
    re.compile(r"^(dept|department)\s+of",re.I),
    re.compile(r"^(dr|prof|mr|mrs)\.",re.I),
    re.compile(r"^vtu(code|resource|circle)",re.I),
    re.compile(r"^(module|chapter|unit)\s*[-:]?\s*\d+\s*$",re.I),
    re.compile(r"^\s*[-_=]{5,}\s*$"),
    re.compile(r"^(course\s+name|course\s+code|semester|contents?)\s*:",re.I),
    re.compile(r"^(figure|table)\s+\d+",re.I),
    re.compile(r"^(ref(erence)?s?|bibliography)\s*$",re.I),
]

def clean_text(raw):
    raw = raw.replace("\xa0"," ").replace("\x0c","\n")
    raw = re.sub(r"[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]","",raw)
    raw = re.sub(r"\n{3,}","\n\n",raw)
    raw = re.sub(r" {3,}","  ",raw)
    return raw.strip()

def is_noise(s):
    return any(p.match(s.strip()) for p in NOISE_RE)

def is_heading(s):
    s=s.strip()
    if not s or len(s)>130: return False
    if re.match(r"^\d+(\.\d+)*\.?\s+[A-Z]",s) and len(s)<100: return True
    nc=re.sub(r"[^A-Z\s]","",s)
    if len(nc.strip())>=4 and nc.strip()==s.strip() and len(s)<70: return True
    if re.match(r"^(What|Why|How|Explain|Define|Describe)\s+.{5,}[?]$",s,re.I): return True
    words=s.split()
    if (2<=len(words)<=8 and s[0].isupper() and not s.endswith(".")
            and not s.endswith(",")
            and not re.search(r"\b(is|are|was|were|the|a|an|of|in|to|for)\b",s)):
        return True
    return False

def strip_prefix(h):
    c=re.sub(r"^\d+(\.\d+)*\.?\s+","",h).strip().rstrip("?").strip()
    return c if c else h

def extract_terms(text,heading):
    terms=[w for w in heading.split() if len(w)>3][:2]
    for m in re.finditer(r"\b([A-Z][a-zA-Z]{3,}|[A-Z]{2,6})\b",text):
        t=m.group(1)
        if t not in terms and t.lower() not in {"this","that","they","also","each","from","with","when","where","there","these","those","such"}:
            terms.append(t)
        if len(terms)>=5: break
    return terms[:5]

def slugify(s):
    return re.sub(r"[^a-z0-9]+","-",s.lower()).strip("-")[:40]

def extract_blocks(text, module_id):
    text=clean_text(text)
    lines=text.splitlines()
    blocks=[]
    cur_h=""; cur_b=[]; cur_bl=[]; cur_ex=[]
    def commit():
        nonlocal cur_h,cur_b,cur_bl,cur_ex
        if not cur_h: return
        body=" ".join(cur_b)
        if len(body)+sum(len(x) for x in cur_bl)<40:
            cur_h="";cur_b=[];cur_bl=[];cur_ex=[];return
        sents=[s.strip() for s in re.split(r"(?<=[.!?])\s+",body) if len(s.strip())>15]
        blocks.append((cur_h,sents,[b for b in cur_bl if len(b)>10],[e for e in cur_ex if len(e)>20],module_id))
        cur_h="";cur_b=[];cur_bl=[];cur_ex=[]
    for line in lines:
        s=line.strip()
        if not s or is_noise(s): continue
        if re.match(r"^[\u2022\-\*o]\s+.{8,}",s) or re.match(r"^\d+\.\s+.{8,}",s):
            bp=re.sub(r"^[\u2022\-\*o\d\.]+\s+","",s).strip()
            if cur_h: cur_bl.append(bp)
            continue
        if re.match(r"^(Example|e\.g\.|Eg:|For example|Note:)\s*",s,re.I):
            if cur_h: cur_ex.append(s)
            continue
        if is_heading(s):
            commit()
            h=strip_prefix(s)
            if len(h)>=4 and h.lower() not in {"introduction","summary","conclusion","references","contents","overview"}:
                cur_h=h
            continue
        if cur_h and len(s)>20: cur_b.append(s)
    commit()
    return blocks

def norm(q):
    return re.sub(r"\s+"," ",re.sub(r"[^\w\s]"," ",q.lower())).strip()

def is_dup(q,seen,thresh=0.82):
    n=norm(q)
    return any(SequenceMatcher(None,n,s).ratio()>thresh for s in seen)

def make_question(h,subj_name,style):
    if style==0: return f"Explain {h} with a neat diagram."
    if style==1: return f"Define {h}. Explain its working with a suitable example."
    pw={"algorithm","protocol","process","scheduling","method","technique","mechanism","procedure"}
    if any(w in h.lower() for w in pw): return f"With a neat diagram, explain the {h} algorithm and its working."
    return f"Describe the concept of {h} in {subj_name.split()[0]} with an example."

def block_to_pairs(block,subj_code,subj_name,seen_topics):
    h,sents,bullets,examples,mod_id=block
    if not h or len(h)<4: return []
    if re.match(r"^(module|chapter|unit|figure|table|note|references?|bibliography|appendix)\b",h,re.I): return []
    hn=re.sub(r"[^\w\s]","",h.lower()).strip()
    for sv in seen_topics:
        if SequenceMatcher(None,hn,sv).ratio()>0.82: return []
    seen_topics.append(hn)
    pairs=[]
    for style in range(3):
        q=make_question(h,subj_name,style)
        secs=[]
        ct=" ".join(sents[:3])
        if not ct and bullets: ct=" ".join(bullets[:2])
        if len(ct)<25: ct=" ".join(bullets[:3])
        if len(ct)<25: continue
        secs.append({"type":"concept","heading":"Definition","text":ct[:600],"key_terms":extract_terms(ct,h)})
        dt=" ".join(sents[3:])
        if len(dt)<40: dt=" ".join(bullets[:6])
        if len(dt)<40: dt=" ".join(sents)
        if len(dt)>40:
            secs.append({"type":"detail","heading":f"{h} - Detailed Explanation","text":dt[:900],"key_terms":extract_terms(dt,h)})
        else:
            continue
        nb=[b for b in bullets if len(b)>12]
        if len(nb)>=2:
            secs.append({"type":"how_it_works","heading":"Working / Steps","text":"\n".join(f"{i+1}. {b}" for i,b in enumerate(nb[:7]))})
        ex_text=""
        if examples: ex_text=" ".join(examples[:2])[:400]
        else:
            for sent in sents:
                if re.search(r"\b(example|e\.g\.|for instance|consider|such as)\b",sent,re.I):
                    ex_text=sent; break
        if ex_text: secs.append({"type":"example","heading":"Example","text":ex_text})
        if any(kw in h.lower() for kw in VISUAL_KW):
            secs.append({"type":"diagram_ref","heading":"Diagram","diagram_tag":f"{subj_code}-{slugify(h)}-m{mod_id}-diagram"})
        secs.append({"type":"conclusion","heading":"Conclusion","text":f"{h} is a fundamental concept in {subj_name}. Understanding {h.lower()} is essential for designing efficient systems and is frequently tested in VTU examinations."})
        pairs.append({"question":q,"subject_code":subj_code,"topic":h,"module":mod_id,"related_topics":[],"sections":secs})
    return pairs

def enrich_related(pairs,all_headings):
    for p in pairs:
        tl=p["topic"].lower(); rel=[]
        for h in all_headings:
            if h==p["topic"]: continue
            r=SequenceMatcher(None,tl,h.lower()).ratio()
            if 0.20<r<0.75: rel.append(h)
            if len(rel)>=3: break
        p["related_topics"]=rel[:3]
    return pairs

_QRE=re.compile(r"^(?:Q\.?\s*\d+\s*[a-z]?[\.\)]\s*|\d+\s*[\.\)]\s*[a-z]\s*[\.\)]\s*|\d+\s*[\.\)]\s*|[a-z]\s*[\.\)]\s*)",re.I)

def extract_pyq_questions(md_text):
    results=[]; seen=[]; cur=[]; in_q=False
    def flush():
        nonlocal cur,in_q
        if not in_q or not cur: return
        q=" ".join(cur).strip()
        q=re.sub(r"\s+\d+\s+L\d\s+CO\d.*$","",q).strip()
        q=re.sub(r"\s+\d{1,2}\s*$","",q).strip()
        if _is_vq(q):
            qn=re.sub(r"[^\w\s]","",q.lower())[:60]
            if not any(SequenceMatcher(None,qn,sv).ratio()>0.85 for sv in seen):
                mk=re.search(r"\b(10|8|5|3|2)\b",q[-20:])
                results.append((q,int(mk.group(1)) if mk else 10))
                seen.append(qn)
        cur=[];in_q=False
    for line in md_text.splitlines():
        s=line.strip()
        if not s or s.startswith("#") or s.startswith("**") or s.startswith("---"):
            flush(); continue
        if _QRE.match(s):
            flush()
            t=_QRE.sub("",s).strip()
            t=re.sub(r"\s+\d+\s+L\d\s+CO\d.*$","",t).strip()
            if t: cur=[t]; in_q=True
        elif in_q:
            ch=re.sub(r"\s+\d+\s+L\d\s+CO\d.*$","",s).strip()
            if ch and len(ch)<250: cur.append(ch)
    flush()
    return results

def _is_vq(t):
    if len(t)<15 or len(t)>600: return False
    if re.match(r"^\d+\s*(marks?|M\s*\d+)?\s*$",t,re.I): return False
    if re.match(r"^(module|or\b|and\b|note:|time:|max\.?\s*marks|answer any|choose|each module)",t,re.I): return False
    return bool(re.search(r"\b(explain|define|describe|discuss|what|write|list|compare|differentiate|design|derive|state|illustrate|draw|find|evaluate|implement|outline|with\s+neat\s+diagram|algorithm|analyse|analyze|solve|show|prove|construct)\b",t,re.I))

def pyq_to_pair(question,marks,subj_code,subj_name,notes_text):
    qw=set(re.findall(r"\b[a-z]{4,}\b",question.lower()))
    best_para,best_score="",0.0
    for para in re.split(r"\n{2,}",notes_text):
        para=para.strip()
        if len(para)<60: continue
        pw=set(re.findall(r"\b[a-z]{4,}\b",para.lower()))
        if not qw: continue
        sc=len(qw&pw)/len(qw)
        if sc>best_score: best_score=sc; best_para=para
    if best_score<0.12 or len(best_para)<80: return None
    best_para=clean_text(best_para)
    sents=[s.strip() for s in re.split(r"(?<=[.!?])\s+",best_para) if len(s.strip())>15]
    if len(sents)<2: return None
    ct=" ".join(sents[:3]); dt=" ".join(sents[3:10])
    secs=[{"type":"concept","heading":"Definition / Overview","text":ct[:600],"key_terms":extract_terms(ct,question[:40])}]
    secs.append({"type":"detail","heading":"Detailed Explanation","text":(dt if len(dt)>40 else ct)[:800],"key_terms":extract_terms(dt or ct,question[:40])})
    if re.search(r"\b(algorithm|working|steps|procedure|process|derive|design)\b",question,re.I):
        ni=re.findall(r"(?:^|\n)\s*\d+\.\s+.{20,120}",best_para,re.M)
        if len(ni)>=2: secs.append({"type":"how_it_works","heading":"Algorithm / Working","text":"\n".join(n.strip() for n in ni[:6])})
    if re.search(r"(neat\s+diagram|block\s+diagram|sketch|figure|architecture)",question,re.I):
        secs.append({"type":"diagram_ref","heading":"Diagram","diagram_tag":f"{subj_code}-{slugify(question[:35])}-diagram"})
    ex=next((s for s in sents if re.search(r"\b(example|e\.g\.|for instance|consider|such as)\b",s,re.I)),"")
    if ex: secs.append({"type":"example","heading":"Example","text":ex})
    secs.append({"type":"conclusion","heading":"Conclusion","text":f"This concept is fundamental to {subj_name} and is commonly tested in VTU examinations."})
    tm=re.search(r"\b(explain|define|describe|discuss)\s+(the\s+)?([a-z][\w\s\-/]{3,40}?)(?:\s+with|\s+in\s+detail|\.)",question,re.I)
    topic=tm.group(3).strip().title() if tm else question[:50].rstrip(".")
    return {"question":question,"subject_code":subj_code,"topic":topic,"module":None,"related_topics":[],"sections":secs}

def find_notes_files(sc):
    sem=SUBJECTS[sc][1]; sd=NOTES_ROOT/sem/sc; res=[]
    if not sd.exists(): return res
    for f in sd.glob("*.txt"):
        if "question paper" in str(f.parent).lower(): continue
        m=re.search(r"module[-_](\d+)",f.name,re.I)
        if m: res.append((f,int(m.group(1))))
    res.sort(key=lambda x:x[1]); return res

def find_tb_files(sc):
    res=[]
    if not TB_ROOT.exists(): return res
    for sd in TB_ROOT.iterdir():
        if not sd.is_dir(): continue
        for dd in sd.iterdir():
            if not dd.is_dir(): continue
            if dd.name.upper().startswith(sc.upper()):
                res+=[f for f in dd.glob("*.txt") if f.stat().st_size>1000]; break
    return res

def load_notes_text(sc):
    parts=[]
    for f,_ in find_notes_files(sc):
        try: parts.append(clean_text(f.read_text(encoding="utf-8",errors="replace"))[:5000])
        except: pass
    return "\n\n".join(parts[:5])

def get_done_subjs(path):
    done=set()
    if not path.exists(): return done
    for l in path.read_text(encoding="utf-8",errors="ignore").splitlines():
        if l.strip():
            try: done.add(json.loads(l).get("subject_code",""))
            except: pass
    return done

def get_done_qs(path):
    done=set()
    if not path.exists(): return done
    for l in path.read_text(encoding="utf-8",errors="ignore").splitlines():
        if l.strip():
            try:
                q=re.sub(r"[^\w\s]","",json.loads(l).get("question","").lower())[:60]
                if q: done.add(q)
            except: pass
    return done

def process_notes(sc,sn,dry):
    files=0; total=0; seen=[]; all_h=[]
    for fp,mid in find_notes_files(sc):
        try: raw=fp.read_text(encoding="utf-8",errors="replace")
        except: continue
        blocks=extract_blocks(raw,mid)
        all_h+=[b[0] for b in blocks]
        local=[]
        for b in blocks: local+=block_to_pairs(b,sc,sn,seen)
        local=enrich_related(local,all_h)
        if not dry:
            with OUT_NOTES.open("a",encoding="utf-8") as fout:
                for p in local: fout.write(json.dumps(p,ensure_ascii=False)+"\n")
        total+=len(local); files+=1
    for fp in find_tb_files(sc):
        try: raw=fp.read_text(encoding="utf-8",errors="replace")
        except: continue
        blocks=extract_blocks(raw,0)
        all_h+=[b[0] for b in blocks]
        local=[]
        for b in blocks: local+=block_to_pairs(b,sc,sn,seen)
        local=enrich_related(local,all_h)
        if not dry:
            with OUT_NOTES.open("a",encoding="utf-8") as fout:
                for p in local: fout.write(json.dumps(p,ensure_ascii=False)+"\n")
        total+=len(local); files+=1
    return files,total

def process_pyqs(sc,sn,nt,done_qs,dry):
    sem=SUBJECTS[sc][1]; qd=QP_ROOT/sem/sc
    if not qd.exists(): return 0
    total=0
    for mn in ["previous_papers.md","model_papers.md","important_questions.md"]:
        mp=qd/mn
        if not mp.exists(): continue
        try: mt=mp.read_text(encoding="utf-8",errors="replace")
        except: continue
        for q,mk in extract_pyq_questions(mt):
            qk=re.sub(r"[^\w\s]","",q.lower())[:60]
            if qk in done_qs: continue
            p=pyq_to_pair(q,mk,sc,sn,nt)
            if p is None: continue
            if not dry:
                with OUT_QP.open("a",encoding="utf-8") as fout:
                    fout.write(json.dumps(p,ensure_ascii=False)+"\n")
            done_qs.add(qk); total+=1
    return total

def main():
    ap=argparse.ArgumentParser(description="Convert VTU notes to training JSONL (no LLM)")
    ap.add_argument("--subject",help="Single subject e.g. BCS502")
    ap.add_argument("--fresh",action="store_true")
    ap.add_argument("--dry-run",action="store_true")
    ap.add_argument("--notes-only",action="store_true")
    ap.add_argument("--pyq-only",action="store_true")
    args=ap.parse_args()

    OUT_DIR.mkdir(parents=True,exist_ok=True)
    if args.fresh and not args.dry_run:
        OUT_NOTES.unlink(missing_ok=True); OUT_QP.unlink(missing_ok=True)
        print("Output files cleared.")

    done_ns=set() if args.fresh else get_done_subjs(OUT_NOTES)
    done_qs=set() if args.fresh else get_done_qs(OUT_QP)
    subjects=[args.subject] if args.subject else sorted(SUBJECTS.keys())

    tf=0; tn=0; tq=0
    print(f"\n{'='*60}")
    print(f"  VTU Notes -> JSONL  (no Ollama, pure Python)")
    print(f"  Subjects: {len(subjects)}  dry-run: {args.dry_run}")
    print(f"{'='*60}\n")

    for sc in subjects:
        if sc not in SUBJECTS: print(f"  [{sc}] unknown - skip"); continue
        sn=SUBJECTS[sc][0]
        if not args.pyq_only:
            if sc in done_ns and not args.fresh:
                print(f"  [{sc}] notes: already done - skip")
            else:
                f,p=process_notes(sc,sn,args.dry_run)
                tf+=f; tn+=p
                tag="(dry)" if args.dry_run else ""
                print(f"  [{sc}] notes: {f} files, {p:4d} pairs  {tag}")
        if not args.notes_only:
            nt=load_notes_text(sc)
            nq=process_pyqs(sc,sn,nt,done_qs,args.dry_run)
            tq+=nq
            if nq>0:
                tag="(dry)" if args.dry_run else ""
                print(f"  [{sc}] PYQs : {nq:4d} pairs  {tag}")

    print(f"\n{'='*60}")
    print(f"  Files      : {tf}")
    print(f"  Notes pairs: {tn}")
    print(f"  PYQ pairs  : {tq}")
    print(f"  TOTAL NEW  : {tn+tq}")
    if not args.dry_run:
        cn=sum(1 for l in OUT_NOTES.read_text(encoding="utf-8",errors="ignore").splitlines() if l.strip()) if OUT_NOTES.exists() else 0
        cq=sum(1 for l in OUT_QP.read_text(encoding="utf-8",errors="ignore").splitlines() if l.strip()) if OUT_QP.exists() else 0
        print(f"\n  training_data_notes.jsonl  : {cn} total")
        print(f"  training_data_qpapers.jsonl: {cq} total")
    print(f"\n  Next: python data_gen/generate_combined_dataset.py --merge-only")
    print(f"  Then: py -3.11 training/train_lora.py --data output/train.jsonl --val output/val.jsonl")
    print(f"{'='*60}\n")

if __name__=="__main__":
    main()