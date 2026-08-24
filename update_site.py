import os
from datetime import datetime

BASE_DIR = 'document/en/ps5'
MAP_FILE = f'{BASE_DIR}/payload_map.js'
PAYLOADS_DIR = f'{BASE_DIR}/payloads'
CACHE_FILE = f'{BASE_DIR}/cache.appcache'

def update():
    # 1. بناء ملف الأزرار بنفس هيكل الكود الأصلي (عشان الشاشة ما تطلع فاضية)
    if os.path.exists(PAYLOADS_DIR):
        files = [f for f in os.listdir(PAYLOADS_DIR) if f.endswith(('.bin', '.elf'))]
        
        # إضافة السطر السري اللي يمنع انهيار الشاشة
        js_content = "// @ts-check\n\n"
        js_content += 'const CUSTOM_ACTION_APPCACHE_REMOVE = "appcache-remove";\n\n'
        js_content += "const payload_map = [\n"
        
        for p in files:
            title = p.split('.')[0]
            js_content += f"""    {{
        displayTitle: '{title}',
        description: 'Auto Added',
        fileName: '{p}',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    }},\n"""
        
        # إضافة زر تنظيف الكاش الأصلي في النهاية
        js_content += """    {
        displayTitle: "Browser appcache remover",
        description: "Deletes for only the current user in webkit-only mode",
        fileName: "",
        author: "Storm21CH, idlesauce",
        projectSource: "",
        binarySource: "",
        version: "1.0",
        customAction: CUSTOM_ACTION_APPCACHE_REMOVE
    }
];\n"""
        
        with open(MAP_FILE, 'w', encoding='utf-8') as f:
            f.write(js_content)

    # 2. بناء ملف الكاش في نفس مسار السوني
    if os.path.exists(BASE_DIR):
        manifest_lines = [
            "CACHE MANIFEST\n",
            f"# Version {datetime.now().strftime('%Y%m%d_%H%M%S')}\n\n",
            "CACHE:\n",
            "index.html\n",
            "payload_map.js\n"
        ]
        
        if os.path.exists(PAYLOADS_DIR):
            for f in os.listdir(PAYLOADS_DIR):
                if f.endswith(('.bin', '.elf')):
                    manifest_lines.append(f"payloads/{f}\n")
                    
        for root, dirs, files in os.walk(BASE_DIR):
            for file in files:
                if file in ['cache.appcache', 'index.html', 'payload_map.js'] or file.endswith(('.bin', '.elf')):
                    continue
                full_path = os.path.join(root, file)
                rel_path = os.path.relpath(full_path, BASE_DIR).replace('\\', '/')
                manifest_lines.append(f"{rel_path}\n")
                
        manifest_lines.append("\nNETWORK:\n*\n")
        
        with open(CACHE_FILE, 'w', encoding='utf-8') as f:
            f.writelines(manifest_lines)

if __name__ == "__main__":
    update()
