import json

workflow = {
    "name": "Assistente Desenvolvimento Pessoal MVP",
    "versionId": "00000000-0000-0000-0000-000000000000",
    "nodes": [
        {
            "id": "1",
            "name": "WhatsApp Trigger",
            "type": "n8n-nodes-base.whatsAppBusinessCloudTrigger",
            "typeVersion": 1,
            "position": [-1600, -200],
            "parameters": {
                "events": [
                    "messages"
                ]
            }
        }
    ],
    "connections": {},
    "settings": {
        "executionOrder": "v1"
    }
}

with open(r"C:\\Users\\bruno\\Documents\\Trendly\\Claude Code\\Foquinha Ai\\Docs\\Codex\\workflow_tmp.json", "w", encoding="utf-8") as f:
    json.dump(workflow, f, ensure_ascii=False, indent=2)
