import { EwJSONSchemaEditVisual } from "../json-editor-table/index.ts";
import React, { useMemo, useState } from "react";
import { test } from './test.ts';
import MonacoEditorComponent from '../components/editor.tsx';
import { Col, Row, Typography } from 'antd';
const { Title } = Typography;

const Demo = () => {
  const [state, setState] = useState(JSON.stringify(test));
  const onChange = (value: string) => {
    // console.log(111, value);
    setState(value);
  }
  const formatValue = useMemo(() => JSON.stringify(JSON.parse(state), null, 2), [state])
  return (
    <div className="demo">
      <Title level={2} style={{ textAlign: 'center', marginBottom: 15 }}>ew-json-schema-editor-visual demo</Title>
      <Row gutter={15}>
        <Col span={8}>
          <MonacoEditorComponent value={formatValue} defaultLanguage='json' height={'100vh'} />
        </Col>
        <Col span={16}>
          <EwJSONSchemaEditVisual value={state} onChange={onChange} />
        </Col>
      </Row>
    </div>
  )
}

export default Demo;