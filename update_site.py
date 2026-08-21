import os
from datetime import datetime

BASE_DIR = 'document/en/ps5'
CACHE_FILE = f'{BASE_DIR}/cache.appcache'
MAP_FILE = f'{BASE_DIR}/payload_map.js'
PAYLOADS_DIR = f'{BASE_DIR}/payloads'

def update():
    # 1. إضافة الأزرار
    if os.path.exists(PAYLOADS_DIR) and os.path.exists(MAP_FILE):
        files = [f for f in os.listdir(PAYLOADS_DIR) if f.endswith(('.bin', '.elf'))]
        with open(MAP_FILE, 'r', encoding='utf-8') as f:
            content = f.read()
            
        for p in files:
            if p not in content:
                title = p.split('.')[0]
                btn = f"\n    {{\n        displayTitle: '{title}',\n        description: 'Auto added',\n        fileName: '{p}',\n        author: 'Auto',\n        source: '',\n        version: '1.0'\n    }},"
                content = content.replace('\n]', btn + '\n]')
                
        with open(MAP_FILE, 'w', encoding='utf-8') as f:
            f.write(content)

    # 2. بناء الكاش الداخلي
    if not os.path.exists(BASE_DIR):
        return

    manifest_lines = [
        "CACHE MANIFEST\n",
        f"# Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n\n",
        "CACHE:\n"
    ]
    
    for root, dirs, files in os.walk(BASE_DIR):
        for file in files:
            if file == 'cache.appcache' or file.startswith('.'):
                continue
            full_path = os.path.join(root, file)
            rel_path = os.path.relpath(full_path, BASE_DIR)
            rel_path = rel_path.replace('\\', '/')
            manifest_lines.append(f"{rel_path}\n")
            
    manifest_lines.append("\nNETWORK:\n*\n")
    
    with open(CACHE_FILE, 'w', encoding='utf-8') as f:
        f.writelines(manifest_lines)

if __name__ == "__main__":
    update()
