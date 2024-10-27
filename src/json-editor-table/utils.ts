import type { InputData, OutputProperty, Property } from './data.d.ts';
import { isBoolean, isEmpty } from 'lodash-es';
import { state } from './state.ts';
import { message } from 'antd';

export const getDeepKey = (type: string) => (type === 'object' ? 'properties' : type === 'array' ? 'items' : '');

export const addNode = <T extends Partial<InputData> & { key: string }>(parentKey: string, newNode: T) => {
  const findNode = (nodes: Partial<InputData>[]) => {
    if (!parentKey) {
      nodes.push(newNode);
      return true;
    }
    for (const node of nodes) {
      const deepKey = getDeepKey(node?.type!);
      if (node?.key === parentKey) {
        if (['object', 'array'].includes(node?.type!) && deepKey) {
          // 数组仅支持单一类型的嵌套
          if (node?.type === 'array' && nodes.length > 0) {
            message.error('数组当前仅支持单一类型的嵌套,无法继续添加,如想继续增加，可修改嵌套子类型为对象!');
            return true;
          } else {
            node[deepKey]!.push(newNode);
          }
        }
        return true;
      }
      if (deepKey && node[deepKey] && findNode(node[deepKey]!)) {
        return true;
      }
    }
    return false;
  };
  findNode(state.schemaData!);
};

export const updateNode = <T extends InputData>(key: string, newObj: T) => {
  const findNode = (nodes: Partial<InputData>[]) => {
    for (const node of nodes) {
      const deepKey = getDeepKey(node?.type!);
      if (node.key === key) {
        Object.keys(newObj).forEach(k => {
          node[k] = newObj[k];
        });
        return true;
      }
      if (deepKey && Array.isArray(node[deepKey]) && findNode(node[deepKey]!)) {
        return true;
      }
    }
    return false;
  };
  findNode(state.schemaData!);
};

export const deleteNode = (key: string) => {
  const findAndDeleteNode = (nodes: Partial<InputData>[]) => {
    for (let i = 0; i < nodes.length; i++) {
      const deepKey = getDeepKey(nodes[i]?.type!);
      if (nodes[i].key === key) {
        nodes.splice(i, 1);
        return true;
      }
      if (deepKey && Array.isArray(nodes[i][deepKey]) && findAndDeleteNode(nodes[i][deepKey]!)) {
        return true;
      }
    }
    return false;
  };
  findAndDeleteNode(state.schemaData!);
};

export const transformData = (input: InputData[]) => {
  const deepProcessProperties = (
    properties: Property[],
  ): {
    result: OutputProperty;
    requiredFields: string[];
  } => {
    const result = {} as OutputProperty;
    const requiredFields: string[] = [];

    properties.forEach(property => {
      const { title, properties: itemProperties = [], items, ...rest } = property;
      const { is_required, rule, type, description, enum: enumValue } = rest || {};
      const propertyObject = {} as OutputProperty;
      if (type) {
        propertyObject.type = type;
      }
      if (description) {
        propertyObject.description = description;
      }
      if ((Array.isArray(enumValue) && enumValue.length > 0) || isBoolean(enumValue)) {
        propertyObject.enum = enumValue;
      }
      if (type === 'object' && itemProperties) {
        const { result: nestedResult, requiredFields: nestedRequiredFields } = deepProcessProperties(itemProperties);
        propertyObject.properties = nestedResult;
        if (is_required) {
          propertyObject.required = nestedRequiredFields;
        }
      }

      if (rest?.type === 'array' && items!.length > 0) {
        const { result: nestedResult } = deepProcessProperties(items!);
        const nestedResultValue = nestedResult[items![0]?.title!];
        // 目前数组仅支持单一类型
        propertyObject.items = nestedResultValue;
        // 也不需要增加必填，如果是多个类型，就需要加
        // if (is_required) {
        //   propertyObject.required = nestedRequiredFields;
        // }
      }

      if (!isEmpty(rule)) {
        Object.keys(rule).forEach(k => {
          if (rule[k]) {
            propertyObject[k] = rule[k];
          }
        });
      }

      if (is_required) {
        requiredFields.push(title!);
      }
      if (title) {
        result[title] = propertyObject;
      }
    });
    return { result, requiredFields };
  };

  const res = {} as OutputProperty;

  input.forEach(item => {
    const { properties = [], items = [], rule, ...rest } = item;
    const deepKey = getDeepKey(rest?.type!);
    Object.keys(rest).forEach(k => {
      if (rest[k] && !['is_required', 'key'].includes(k)) {
        res[k] = rest[k];
      }
    });
    if (!isEmpty(rule)) {
      Object.keys(rule).forEach(k => {
        if (rule[k]) {
          res[k] = rule[k];
        }
      });
    }
    if (deepKey && (properties.length || items.length)) {
      const { result, requiredFields } = deepProcessProperties(item[deepKey]!);
      res[deepKey] = result;
      res['required'] = requiredFields;
    }
  });

  return res;
};

export const reverseTransformData = (output: OutputProperty) => {
  const deepKey = getDeepKey(output.type!);

  const convertProperties = (properties: OutputProperty): Partial<OutputProperty> => {
    return Object.entries<OutputProperty>(properties).map(([key, prop], index) => {
      if (!prop) {
        return {};
      }
      const {
        type,
        description,
        enum: enumValue,
        properties,
        items,
        ...rest
      } = prop || {};
      const res: OutputProperty = {
        title: key,
        key: `schema-1-${index + 1}`,
        is_required: required!.includes(key),
        type,
        description,
        enum: enumValue,
        rule: {
          ...rest,
        },
      };
      if (properties) {
        res['properties'] = convertProperties(properties);
      }
      if (items) {
        res['items'] = convertProperties(items);
      }
      return res;
    });
  };

  const { title, type, description, required, ...rest } = output;

  const converted: Partial<InputData> & { key?: string } = {
    title,
    type,
    description,
    key: 'schema-1',
  };

  if (deepKey) {
    converted[deepKey] = output[deepKey] ? (convertProperties(output[deepKey]!)) as any : [];
  }
  if (rest) {
    converted.rule = {};
    Object.keys(rest).forEach(k => {
      if (rest[k] && !['properties', 'items'].includes(k)) {
        converted.rule![k] = rest[k];
      }
    });
  }
  return [converted] as InputData[];
};

export enum parseStrType {
  EVAL = 'eval',
  JSON = 'json'
}
export const parseStr = <T>(str: string, type: parseStrType = parseStrType.JSON) => {
  const parseMethod = {
    [parseStrType.EVAL]: <T>(v: string): T => new Function(`return ${v}`)(),
    [parseStrType.JSON]: JSON.parse
  }
  let res: T | null = null;
  try {
    const method = parseMethod[type];
    if (method) {
      res = method(str);
    }
  } catch (error) {
    console.error(`[parse data error]:${error}`);
  }
  return res;
}