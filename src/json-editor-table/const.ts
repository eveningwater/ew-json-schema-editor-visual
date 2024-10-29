export const schemaTypeList = [
    {
        label: '数值',
        value: 'number',
    },
    {
        label: '字符串',
        value: 'string',
    },
    {
        label: '对象',
        value: 'object',
    },
    {
        label: '整数',
        value: 'integer',
    },
    {
        label: '布尔值',
        value: 'boolean',
    },
    {
        label: '数组',
        value: 'array',
    },
];


export const schemaValidateRule = {
    string: [
        {
            validateName: 'maxLength',
            validateType: 'integer',
            validateLabel: '指定字符串的最大长度',
        },
        {
            validateName: 'minLength',
            validateType: 'integer',
            validateLabel: '指定字符串的最小长度',
        },
        {
            validateName: 'pattern',
            validateType: 'string',
            validateLabel: '使用正则表达式验证字符串',
        },
        {
            validateName: 'format',
            validateType: 'string',
            validateLabel: '指定字符串的格式（如日期、电子邮件等）',
        },
    ],
    number: [
        {
            validateName: 'multipleOf',
            validateType: 'number',
            validateLabel: '指定数字必须是某个值的倍数',
        },
        {
            validateName: 'maximum',
            validateType: 'number',
            validateLabel: '指定数字的最大值',
        },
        {
            validateName: 'exclusiveMaximum',
            validateType: 'number',
            validateLabel: '指定数字的最大值（不包括该值）',
        },
        {
            validateName: 'minimum',
            validateType: 'number',
            validateLabel: '指定数字的最小值',
        },
        {
            validateName: 'exclusiveMinimum',
            validateType: 'number',
            validateLabel: '指定数字的最小值（不包括该值）',
        },
    ],
    integer: [
        {
            validateName: 'multipleOf',
            validateType: 'integer',
            validateLabel: '指定整数必须是某个值的倍数',
        },
        {
            validateName: 'maximum',
            validateType: 'integer',
            validateLabel: '指定整数的最大值',
        },
        {
            validateName: 'exclusiveMaximum',
            validateType: 'integer',
            validateLabel: '指定整数的最大值（不包括该值）',
        },
        {
            validateName: 'minimum',
            validateType: 'integer',
            validateLabel: '指定整数的最小值',
        },
        {
            validateName: 'exclusiveMinimum',
            validateType: 'integer',
            validateLabel: '指定整数的最小值（不包括该值）',
        },
    ],
    array: [
        {
            validateName: 'maxItems',
            validateType: 'integer',
            validateLabel: '指定数组的最大长度',
        },
        {
            validateName: 'minItems',
            validateType: 'integer',
            validateLabel: '指定数组的最小长度',
        },
        {
            validateName: 'uniqueItems',
            validateType: 'boolean',
            validateLabel: '指定数组中的元素是否必须唯一',
        },
    ],
    object: [
        {
            validateName: 'maxProperties',
            validateType: 'integer',
            validateLabel: '指定对象的最大属性数量',
        },
        {
            validateName: 'minProperties',
            validateType: 'integer',
            validateLabel: '指定对象的最小属性数量',
        },
    ],
    boolean: [],
};

export type SchemaValidateRuleKey = keyof typeof schemaValidateRule;

export type SchemaValidateRuleItem = {
    validateName: string;
    validateType: string;
    validateLabel: string;
};

export const cardList = ['规则名', '规则值', '规则说明'];