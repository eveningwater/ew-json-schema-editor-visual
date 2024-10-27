import { EwJSONSchemaEditVisual } from "../json-editor-table/index.ts";
import React, { useState } from "react";

const Demo = () => {
  const [state, setState] = useState('');
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