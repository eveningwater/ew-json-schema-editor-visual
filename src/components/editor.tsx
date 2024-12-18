import React, { useEffect, useRef, useState } from 'react';
import MonacoEditor, { EditorProps } from '@monaco-editor/react';
import { editor } from 'monaco-editor';
import { isString } from 'lodash-es';

export interface MonacoEditorComponentProps<T> extends Omit<EditorProps, 'value' | 'onChange'> {
  value?: T;
  onChange?: (value: T) => void;
  options?: editor.IStandaloneEditorConstructionOptions;
}
const defaultOption = {
  minimap: {
    enabled: false,
  },
  scrollBeyondLastLine: false,
  scrollbar: {
    handleMouseWheel: true,
  },
  automaticLayout: true,
};
const MonacoEditorComponent = <T extends string>({
  value,
  onChange,
  options = {},
  ...rest
}: MonacoEditorComponentProps<T>) => {
  const [text, setText] = useState<T>();
  const editorRef = useRef<editor.IStandaloneCodeEditor>();
  useEffect(() => {
    if (isString(value) && value) {
      setText(value);
    }
  }, [value]);

  const handleEditorDidMount = (e: editor.IStandaloneCodeEditor) => {
    editorRef.current = e;
  };
  return (
    <>
      {/* @ts-ignore */}
      <MonacoEditor
        theme="vs-dark"
        onChange={(value: T) => {
          setText(value);
          onChange?.(value);
        }}
        value={text}
        options={{ ...defaultOption, ...options }}
        onMount={handleEditorDidMount}
        {...rest}
      />
    </>
  );
};

export default MonacoEditorComponent;
