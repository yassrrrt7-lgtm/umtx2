import os
import subprocess

PAYLOADS_DIR = 'document/en/ps5/payloads'
MAP_FILE = 'document/en/ps5/payload_map.js'

def update():
    # 1. إضافة الأزرار للواجهة
    if os.path.exists(PAYLOADS_DIR) and os.path.exists(MAP_FILE):
        files = [f for f in os.listdir(PAYLOADS_DIR) if f.endswith(('.bin', '.elf'))]
        with open(MAP_FILE, 'r', encoding='utf-8') as f:
            content = f.read()
        
        for p in files:
            if p not in content:
                title = p.split('.')[0]
                btn = f"\n    {{\n        displayTitle: '{title}',\n        description: 'New Payload',\n        fileName: '{p}',\n        author: 'Auto',\n        source: '',\n        version: '1.0'\n    }},"
                content = content.replace('\n]', btn + '\n]')
        
        with open(MAP_FILE, 'w', encoding='utf-8') as f:
            f.write(content)

    # 2. بناء الكاش عن طريق السكربت الرسمي للمطور لضمان عدم وجود أخطاء
    if os.path.exists('appcache_manifest_generator.py'):
        print("جاري تشغيل سكربت الكاش الرسمي...")
        subprocess.run(['python', 'appcache_manifest_generator.py'])
    else:
        print("لم يتم العثور على سكربت الكاش!")

if __name__ == "__main__":
    update()
