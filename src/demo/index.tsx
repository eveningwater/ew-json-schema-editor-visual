import { EwJSONSchemaEditVisual } from "../json-editor-table/index.ts";
import React, { useState } from "react";
import { test } from './test.ts';

const Demo = () => {
  const [state, setState] = useState(JSON.stringify(test));
  const onChange = (value: string) => {
    console.log(111, value);
  }
  return (
    <div className="demo">
      <EwJSONSchemaEditVisual value={state} onChange={onChange} />
    </div>
  )
}

export default Demo;