import os, json, re
base='D:/Adaptlearn/DATA/VTU_CSE_Notes'
map_path='D:/Adaptlearn/DATA/scheme/subject_map.json'
subject_map=json.load(open(map_path,'r',encoding='utf-8'))
audit=[]
code_re=re.compile(r'^[A-Z]{3,4}\d{3}[A-Z]?$')
for root,dirs,files in os.walk(base):
    # find folder name as code
    folder=os.path.basename(root)
    if code_re.match(folder):
        # find first .txt or .pdf
        first_txt=None
        for f in files:
            if f.lower().endswith('.txt'):
                first_txt=os.path.join(root,f)
                break
        if not first_txt:
            # skip
            audit.append({'folder':folder,'path':root,'status':'no_txt','reason':'no txt'})
            continue
        # read first ~500 chars
        try:
            with open(first_txt,'r',encoding='utf-8',errors='ignore') as fh:
                snippet=fh.read(1000)
        except:
            snippet=''
        official=subject_map.get(folder,{}).get('official_name','')
        # simple check if official name appears in snippet (case-insensitive)
        match=False
        if official:
            if official.lower() in snippet.lower():
                match=True
        # also check code in folder name matches any code in map
        if folder not in subject_map:
            audit.append({'folder':folder,'path':root,'status':'unknown_code','reason':'code not in map','official':official})
        else:
            if not match:
                audit.append({'folder':folder,'path':root,'status':'mismatch','reason':'mapping','official':official,'snippet_start':snippet[:200]})
            else:
                audit.append({'folder':folder,'path':root,'status':'ok'})
# output
out_path='D:/Adaptlearn/DATA/scheme/mapping_audit.json'
json.dump(audit,open(out_path,'w',encoding='utf-8'),indent=2,ensure_ascii=False)
print('audit entries',len(audit))
mism=[a for a in audit if a['status']=='mismatch']
unknown=[a for a in audit if a['status']=='unknown_code']
print('mismatches',len(mism))
print('unknown',len(unknown))
