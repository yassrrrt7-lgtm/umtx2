import os
from datetime import datetime

PAYLOADS_DIR = 'document/en/ps5/payloads'
MAP_FILE = 'document/en/ps5/payload_map.js'
CACHE_FILE = 'document/en/ps5/cache.appcache'

def update():
    if not os.path.exists(PAYLOADS_DIR): return
    files = [f for f in os.listdir(PAYLOADS_DIR) if f.endswith(('.bin', '.elf'))]
    
    # 1. Update Buttons
    if os.path.exists(MAP_FILE):
        with open(MAP_FILE, 'r', encoding='utf-8') as f:
            content = f.read()
        for p in files:
            if p not in content:
                title = p.split('.')[0]
                btn = f"\n    {{\n        displayTitle: '{title}',\n        description: 'New Payload',\n        fileName: '{p}',\n        author: 'Auto',\n        source: '',\n        version: '1.0'\n    }},"
                content = content.replace('\n]', btn + '\n]')
        with open(MAP_FILE, 'w', encoding='utf-8') as f:
            f.write(content)

    # 2. Update Cache
    if os.path.exists(CACHE_FILE):
        with open(CACHE_FILE, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        new_lines = []
        for line in lines:
            if line.startswith('# Version'):
                new_lines.append(f"# Version {datetime.now().strftime('%Y%m%d_%H%M%S')}\n")
            else:
                new_lines.append(line)
        
        cache_txt = "".join(new_lines)
        for p in files:
            path = f"payloads/{p}"
            if path not in cache_txt:
                for i, l in enumerate(new_lines):
                    if "NETWORK:" in l:
                        new_lines.insert(i, f"{path}\n")
                        break
        with open(CACHE_FILE, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)

if __name__ == "__main__":
    update()
