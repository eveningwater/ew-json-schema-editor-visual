export const test = {
    "title": "aa",
    "type": "object",
    "properties": {
        "ff": {
            "type": "object",
            "description": "这是一个对象",
            "properties": {
                "gg": {
                    "type": "array",
                    "description": "这是一个数组",
                    "items": {
                        "type": "string",
                        "description": "这是一个字符串"
                    }
                },
                "aa": {
                    "type": "string",
                    "description": "这是一个字符串"
                }
            },
            "required": ["aa","gg"]
        }
    },
    "required": [
        "ff"
    ]
}