import os
from datetime import datetime

MAP_FILE = 'document/en/ps5/payload_map.js'
PAYLOADS_DIR = 'document/en/ps5/payloads'
CACHE_FILE = 'cache.appcache'  # بناء الكاش في الواجهة الرئيسية

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

    # 2. بناء كاش شامل لكل ملفات الموقع من الخارج للداخل
    manifest_lines = [
        "CACHE MANIFEST\n",
        f"# Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n\n",
        "CACHE:\n"
    ]
    
    for root, dirs, files in os.walk('.'):
        if '.git' in root or '.github' in root:
            continue
        for file in files:
            # استثناء الملفات غير المطلوبة
            if file == 'cache.appcache' or file.startswith('.') or file.endswith(('.yml', '.py')):
                continue
            
            full_path = os.path.join(root, file)
            rel_path = full_path.replace('\\', '/').replace('./', '')
            
            if rel_path:
                manifest_lines.append(f"{rel_path}\n")
            
    manifest_lines.append("\nNETWORK:\n*\n")
    
    with open(CACHE_FILE, 'w', encoding='utf-8') as f:
        f.writelines(manifest_lines)

if __name__ == "__main__":
    update()
