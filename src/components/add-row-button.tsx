import { Button } from "antd";
import React from 'react';
import type { ReactNode } from 'react';
import { PlusOutlined } from "@ant-design/icons";

const AddRowButton = ({ children, onClick, btnText = '添加一条' }: { btnText?:string;children?: ReactNode; onClick?:React.MouseEventHandler<HTMLElement>}) => {
    return (
      <div className="add-row-button-container">
        <Button size="small" type="text" icon={<PlusOutlined />} onClick={onClick}>
          {btnText}
        </Button>
        {children}
      </div>
    );
  };

  export default AddRowButton