export interface AnyObj {
    [x: string]: any
}
export interface Rule extends AnyObj {
    maxProperties?: string;
    minProperties?: string;
    maxItems?: string;
    minItems?: string;
    uniqueItems?: boolean;
    minLength?: string;
    maxLength?: string;
    pattern?: string;
    format?: string;
    multipleOf?: string | number;
    maximum?: string | number;
    exclusiveMaximum?: string | number;
    minimum?: string | number;
    exclusiveMinimum?: string | number;
}

export interface Property extends AnyObj{
    key: string;
    title?: string;
    type?: string;
    description?: string;
    is_required?: boolean;
    enum?: string[];
    rule?: Rule;
    properties?: Property[];
    items?: Item[];
}

export interface Item extends AnyObj{
    key: string;
    title?: string;
    type?: string;
    description?: string;
    is_required?: boolean;
    enum?: string[];
    rule?: Rule;
    properties?: Property[];
}

export interface InputData extends AnyObj {
    key: string;
    title?: string;
    type?: string;
    description?: string;
    is_required?: boolean;
    enum?: string[];
    rule?: Rule;
    properties?: Property[];
    items?: Item[];
}

export interface OutputProperty extends AnyObj {
    type?: string;
    description?: string;
    enum?: (string | number | boolean)[];
    minLength?: number;
    maxLength?: number;
    minimum?: number;
    maximum?: number;
    multipleOf?: number;
    items?: OutputProperty;
    properties?: OutputProperty;
    minItems?: number;
    maxItems?: number;
    uniqueItems?: boolean;
    required?: string[];
    title?: string;
}
