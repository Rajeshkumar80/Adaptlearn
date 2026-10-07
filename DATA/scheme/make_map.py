import re, json
txt=open('D:/Adaptlearn/DATA/scheme/38csesch.txt',encoding='utf-8').read()
lines=txt.splitlines()
cur_sem=None
sem_re=re.compile(r'(III|IV|V|VI|VII|VIII) SEMESTER')
code_re=re.compile(r'^[A-Z]{3,4}\d{3}[A-Z]?$')
mapping={}
for i,line in enumerate(lines):
    m=sem_re.search(line)
    if m:
        cur_sem=m.group(1)
    stripped=line.strip()
    if code_re.match(stripped):
        code=stripped
        title=''
        for j in range(i+1,i+6):
            if j>=len(lines): break
            cand=lines[j].strip()
            if not cand: continue
            if code_re.match(cand): continue
            if cand.startswith('TD:') or cand.startswith('PSB') or cand in ['3','2','01','03','PCC','IPCC','ESC','AEC','SEC','MC','UHV','PCCL','PROJ']:
                continue
            if sem_re.search(cand):
                break
            if len(cand)>2 and not re.fullmatch(r'[0-9]+',cand):
                title=cand
                break
        if title:
            entry=mapping.setdefault(code,{'name':'','semester':cur_sem})
            if not entry['name']:
                entry['name']=title
            if not entry.get('semester') and cur_sem:
                entry['semester']=cur_sem
fixes={
 'BCS302':'Digital Design & Computer Organization',
 'BCS501':'Software Engineering & Project Management',
 'BCS502':'Computer Networks',
 'BCS503':'Theory of Computation',
 'BCSL504':'Web Technology Lab',
 'BCS508':'Environmental Studies and E-waste Management',
 'BCS601':'Cloud Computing (Open Stack /Google)',
 'BCS602':'Machine Learning',
 'BCS701':'Internet of Things',
 'BCS702':'Parallel Computing',
 'BCS703':'Cryptography & Network Security',
 'BCS714A':'Deep Learning',
 'BCS714B':'Natural Language Processing',
 'BCS714D':'Big Data Analytics',
 'BCS613A':'Blockchain Technology',
 'BCS613B':'Computer Vision',
 'BCS613C':'Compiler Design',
 'BCS613D':'Advanced Java',
 'BCS405A':'Discrete Mathematical Structures',
 'BCS405B':'Graph Theory',
 'BCS405C':'Optimization Technique',
 'BCS405D':'Linear Algebra',
 'BCS515A':'Computer Graphics',
 'BCS515B':'Artificial Intelligence',
 'BCS515C':'Unix System Programming',
 'BCS515D':'Distributed Systems',
}
for code,name in fixes.items():
    if code in mapping:
        mapping[code]['name']=name
    else:
        mapping[code]={'name':name,'semester':'?'}
mapping['BAD714D']={'name':'Social Network Analysis (anomaly)','semester':'VII'}
out={}
for code,v in mapping.items():
    out[code]={'official_name':v.get('name',''),'semester':v.get('semester'),'type':'slot' if code.endswith('x') else 'subject'}
with open('D:/Adaptlearn/DATA/scheme/subject_map.json','w',encoding='utf-8') as f:
    json.dump(out,f,indent=2,ensure_ascii=False)
print('written',len(out))
