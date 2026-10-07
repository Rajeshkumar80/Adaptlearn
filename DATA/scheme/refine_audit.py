import os, json, re
base='D:/Adaptlearn/DATA/VTU_CSE_Notes'
map_path='D:/Adaptlearn/DATA/scheme/subject_map.json'
subject_map=json.load(open(map_path,'r',encoding='utf-8'))
audit=[]
exclusions=[]
code_re=re.compile(r'^[A-Z]{3,4}\d{3}[A-Z]?$')
norm=lambda s: re.sub(r'[^a-z0-9]', '', s.lower())
for root,dirs,files in os.walk(base):
    folder=os.path.basename(root)
    if not code_re.match(folder):
        continue
    # find first txt
    txt_path=None
    for f in files:
        if f.lower().endswith('.txt'):
            txt_path=os.path.join(root,f)
            break
    if not txt_path:
        exclusions.append({'subject_code':folder,'module':None,'path':root,'reason':'no_txt'})
        audit.append({'folder':folder,'path':root,'status':'excluded','reason':'no_txt'})
        continue
    try:
        with open(txt_path,'r',encoding='utf-8',errors='ignore') as fh:
            data=fh.read()
    except:
        exclusions.append({'subject_code':folder,'module':None,'path':root,'reason':'read_error'})
        audit.append({'folder':folder,'path':root,'status':'excluded','reason':'read_error'})
        continue
    first_lines=' '.join(data.splitlines()[:5])
    # extract code mention
    m=re.search(r'\b([A-Z]{3,4}\d{3}[A-Z]?)\b', first_lines)
    code_in_file=m.group(1) if m else None
    official_name=subject_map.get(folder,{}).get('official_name','')
    # normalise name match
    name_match=False
    if official_name:
        # check if official name tokens appear in first 2000 chars
        if norm(official_name) in norm(data[:2000]) or any(norm(tok) in norm(data[:2000]) for tok in official_name.split() if len(tok)>4):
            name_match=True
    # code mismatch
    if code_in_file and code_in_file!=folder:
        exclusions.append({'subject_code':folder,'module':None,'path':root,'reason':'mapping','detail':f'code_in_file={code_in_file}'})
        audit.append({'folder':folder,'path':root,'status':'excluded','reason':'mapping','code_in_file':code_in_file})
        continue
    if folder not in subject_map:
        exclusions.append({'subject_code':folder,'module':None,'path':root,'reason':'unknown_code'})
        audit.append({'folder':folder,'path':root,'status':'excluded','reason':'unknown_code'})
        continue
    # name match not required for lock, but keep note
    audit.append({'folder':folder,'path':root,'status':'ok','name_match':name_match,'official':official_name})
# write exclusions
with open('D:/Adaptlearn/exclusions.json','w',encoding='utf-8') as f:
    json.dump(exclusions,f,indent=2)
# write audit md
md_lines=['# Mapping Audit','',f'Total folders audited: {len(audit)}',f'Excluded: {len(exclusions)}','', '## Exclusions']
for e in exclusions:
    md_lines.append(f"- {e['subject_code']} {e['path']} reason={e['reason']} {e.get('detail','')}")
md=open('D:/Adaptlearn/DATA/scheme/mapping_audit.md','w',encoding='utf-8')
md.write('\n'.join(md_lines))
print('audit complete',len(audit),len(exclusions))
