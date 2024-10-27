import { Form, Row,Col, FormItemProps, RowProps } from 'antd';
import React from 'react';
import IconFormHandler, { IconFormHandlerProps } from './icon-form-handler.tsx';

export interface FormListItemComponentProps<T> {
  // onChange?: (...args: T[]) => void;
  // value?: T;
  [x: string]: unknown;
}
export interface FormListProps<T extends unknown> {
  listField: string;
  listFormItemLabel?: string;
  listFormItemProps?: FormItemProps;
  FormListItemComponent?: (...itemProps: FormListItemComponentProps<T>[]) => React.JSX.Element;
  iconFormProps?: IconFormHandlerProps;
  addItemData?: T;
  rowProps?: RowProps;
}
const FormList = <T extends unknown>(props: FormListProps<T>) => {
  const {
    listField = 'field',
    listFormItemLabel,
    FormListItemComponent = () => null,
    listFormItemProps = {},
    iconFormProps = {},
    addItemData,
    rowProps = {},
  } = props;
  const onAddFormListHandler = (add: (v?: T) => void) => {
    add?.(addItemData ? addItemData : undefined);
  };
  return (
    <Form.List name={listField}>
      {(fields, { add, remove }) => (
        <Form.Item label={listFormItemLabel} {...listFormItemProps}>
          {fields.map(({ key,...item }, index) => (
            <Row key={`${key}-${index}`} gutter={15} {...rowProps}>
              <Col span={20}>
                <Form.Item {...item}>
                  <FormListItemComponent />
                </Form.Item>
              </Col>
              <Col span={4}>
                <IconFormHandler
                  deleteText={`删除${listFormItemLabel}`}
                  addText={`添加${listFormItemLabel}`}
                  onDel={() => {
                    remove(index);
                  }}
                  onAdd={() => onAddFormListHandler(add)}
                  {...iconFormProps}
                />
              </Col>
            </Row>
          ))}
          {!fields.length && (
            <IconFormHandler
              deleteText={`删除${listFormItemLabel}`}
              addText={`添加${listFormItemLabel}`}
              showRemoveBtn={false}
              onAdd={() => onAddFormListHandler(add)}
              {...iconFormProps}
            />
          )}
        </Form.Item>
      )}
    </Form.List>
  );
};

export default FormList;
