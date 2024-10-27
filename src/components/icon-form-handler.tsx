import React from 'react';
import { Button, Form, Space, Tooltip } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { isBoolean, isNumber } from 'lodash-es';

export interface IconFormHandlerProps {
  handleIndex?: number;
  deleteText?: string;
  addText?: string;
  onDel?: () => void;
  onAdd: () => void;
  showRemoveBtn?: boolean;
}
const IconFormHandler = (props: IconFormHandlerProps) => {
  const { handleIndex, deleteText = '删除', addText = '添加', onDel, onAdd, showRemoveBtn } = props;
  return (
    <Form.Item>
      <Space>
        {(isBoolean(showRemoveBtn)
          ? showRemoveBtn
          : (isNumber(handleIndex) && handleIndex > 0) || !isNumber(handleIndex)) && (
          <Tooltip title={deleteText}>
            <Button icon={<DeleteOutlined />} shape="circle" danger onClick={() => onDel?.()}></Button>
          </Tooltip>
        )}
        <Tooltip title={addText}>
          <Button icon={<PlusOutlined />} shape="circle" onClick={() => onAdd?.()}></Button>
        </Tooltip>
      </Space>
    </Form.Item>
  );
};

export default IconFormHandler;
