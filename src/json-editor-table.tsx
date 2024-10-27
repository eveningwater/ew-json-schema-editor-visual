import React, { useMemo, useState } from 'react';
import { Table, Form, Modal, Input, Select, InputNumber, Alert, Empty } from 'antd';
import { useTableColumn } from './use-table-column.tsx';
import { useSnapshot } from 'valtio';
import {
  SchemaValidateRuleItem,
  SchemaValidateRuleKey,
  schemaValidateRule,
  schemaTypeList,
} from './const.ts';
import ParentRadioGroup from './components/parent-radio-group.tsx';
import { addNode, deleteNode, getDeepKey, updateNode } from './utils.ts';
import { state } from './state.ts';
import type { InputData } from './data.d.ts';
import FormList from './components/form-list.tsx';
import AddRowButton from './components/add-row-button.tsx';

const FormListItemInputNumberComponent = ({ value, onChange }: { value?: number; onChange?: (value: number | null) => void; }) => (
  <InputNumber placeholder="请输入枚举值" value={value} onChange={onChange} style={{ width:'100%'}} />
);

const FormListItemInputIntergerComponent = ({
  value,
  onChange,
}: {
  value?: number;
  onChange?: (value: number | null) => void;
}) => <InputNumber placeholder="请输入枚举值" value={value} onChange={onChange} step={1} style={{ width:'100%'}}/>;

const RuleFormItem = ({ type }: { type: SchemaValidateRuleKey }) => {
  const schemaFormItemList: SchemaValidateRuleItem[] = useMemo(() => schemaValidateRule[type] || [], [type]);
  const renderChild = ({ validateType: t, validateLabel }: SchemaValidateRuleItem) => {
    if (['number', 'integer'].includes(t)) {
      return <InputNumber placeholder={`请输入${validateLabel}`} style={{ width: '100%' }} />;
    }
    if (t === 'boolean') {
      return <ParentRadioGroup />;
    }
    return <Input placeholder={`请输入${validateLabel}`} />;
  };
  const isRenderAlert = type !== 'boolean' && schemaFormItemList.length === 0;
  return (
    <>
      {schemaFormItemList?.map((item, index) => (
        <Form.Item key={`${item}-${index}`} name={["rule",`${item?.validateName}`]}>
          {renderChild(item)}
        </Form.Item>
      ))}
      {isRenderAlert && <Alert message="请先选择参数类型，选择参数类型后会自动匹配相应规则!" />}
      {type === 'boolean' && <Empty description="说明：布尔值没有相关规则" />}
    </>
  );
};

const EnumFormItem = ({ type }: { type: SchemaValidateRuleKey }) => {
  if (type === 'boolean') {
    return (
      <Form.Item name="enum" label="枚举值">
        <ParentRadioGroup trueText="true" falseText="false" />
      </Form.Item>
    );
  }
  if (type === 'string') {
    return (
      <Form.Item name="enum" label="枚举值" help={<>温馨提示: 输入枚举值需要按下enter键确定</>}>
        <Select
          mode="tags"
          allowClear
          placeholder="请输入枚举值并按下enter键确定"
        />
      </Form.Item>
    );
  }

  if (type === 'number') {
    return (
      <FormList listFormItemLabel="枚举值" listField="enum" FormListItemComponent={FormListItemInputNumberComponent} />
    );
  }
  if (type === 'integer') {
    return (
      <FormList
        listFormItemLabel="枚举值"
        listField="enum"
        FormListItemComponent={FormListItemInputIntergerComponent}
      />
    );
  }
  return null;
};

const JSONEditTableComponent = ({
  tableData,
  addKey = 'schema',
  isRoot,
}: {
  tableData?: InputData[];
  addKey?: string;
  isRoot?: boolean;
}) => {
  const [visible, setVisible] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [form] = Form.useForm();

  const removeRow = (key: string) => {
    deleteNode(key);
  };

  const addRow = () => {
    setVisible(true);
    setIsEdit(false);
  };

  const columns = useTableColumn({
    removeRow,
    editRow(row) {
      form.setFieldsValue({ ...row });
      setVisible(true);
      setIsEdit(true);
    },
    isRoot,
  });

  const onSureHandler = async () => {
    const { key, ...values } = await form.validateFields();
    const res = { ...values };
    if (['object', 'array'].includes(values.type)) {
      const deepKey = getDeepKey(values?.type);
      res[deepKey] = [];
    }
    if (isEdit) {
      updateNode(key, res);
    } else {
      addNode(
        isRoot ? '' : addKey,
        {
          key: `${addKey}-${tableData!.length + 1}`,
          ...res,
        }
      );
    }
    setVisible(false);
    form.resetFields();
  };



  return (
    <>
      <Table
        dataSource={tableData}
        columns={columns}
        scroll={{
          y: 500,
          x: 1600,
        }}
        bordered={false}
        footer={() => isRoot && tableData!.length > 0 ? null : <AddRowButton onClick={addRow}></AddRowButton>}
        expandable={{
          expandedRowRender: (record) => (
            <JSONEditTableComponent
              tableData={record.properties}
              addKey={record.key}
            />
          ),
          rowExpandable: (record) => {
            const deepKey = getDeepKey(record?.type!);
            if (
              ['object', 'array'].includes(record?.type!) &&
              Array.isArray(record[deepKey])
            ) {
              return true;
            }
            return false;
          },
        }}
      />
      <Modal
        title={`${isEdit ? '编辑' : '新增'}参数`}
        open={visible}
        onOk={onSureHandler}
        onCancel={() => {
          setVisible(false);
          form.resetFields();
        }}
        style={{
          minWidth: 700,
        }}
      >
        <Form form={form} labelCol={{ span:3 }}>
          <Form.Item name="key" label="参数key" style={{ display: 'none' }}>
            <Input />
          </Form.Item>
          <Form.Item name="title" label="参数名" rules={[{ required: true }]}>
            <Input placeholder="请输入参数名" />
          </Form.Item>
          <Form.Item name="type" label="参数类型" rules={[{ required: true }]}>
            <Select options={schemaTypeList} placeholder="请选择参数类型" />
          </Form.Item>
          <Form.Item name="description" label="参数描述" rules={[{ required: true }]}>
            <Input placeholder="请输入参数描述" />
          </Form.Item>
          {!isRoot && (
            <Form.Item name="is_required" label="是否必填" rules={[{ required: true }]}>
              <ParentRadioGroup placeholder="请选择是否必填" />
            </Form.Item>
          )}
          <Form.Item shouldUpdate noStyle>
            {({ getFieldValue }) => <EnumFormItem type={getFieldValue('type')} />}
          </Form.Item>
          <Form.Item label="规则" shouldUpdate>
            {({ getFieldValue }) => <RuleFormItem type={getFieldValue('type')} />}
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

const JSONEditTable = ({ stateKey }: { stateKey?: string }) => {
  const snap = useSnapshot(state);
  return <JSONEditTableComponent tableData={snap.schemaData! as any} addKey="schema" isRoot />;
};

export default JSONEditTable;
