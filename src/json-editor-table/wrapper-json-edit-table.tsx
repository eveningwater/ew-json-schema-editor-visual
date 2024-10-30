import React, { useEffect, useMemo } from 'react';
import JSONEditTable from './json-editor-table.tsx';
import { state } from './state.ts';
import type { InputData, OutputProperty } from './data.d.ts';
import { parseStr, reverseTransformData, transformData } from './utils.ts';
import { isEqual, isString } from 'lodash-es';
import { useSnapshot } from 'valtio';
import MonacoEditorComponent from '../components/editor.tsx';
import { Col, Row } from 'antd';

export interface WrapperJSONEditTableProps {
    value?: string;
    onChange?: (v: string) => void;
}
const WrapperJSONEditTable = ({ value, onChange }: WrapperJSONEditTableProps) => {
    const snap = useSnapshot(state);
    const onChangeHandler = (value: InputData[]) => {
        let newValue: OutputProperty;
        if (value.length > 0) {
            newValue = transformData(value);
            onChange?.(JSON.stringify(newValue));
        }
    };

    useEffect(() => {
        onChangeHandler(state.schemaData!);
    }, [snap]);

    useEffect(() => {
        if (value && isString(value)) {
            const newValue = parseStr<OutputProperty>(value);
            if (newValue) {
                const reverseTransformRes = reverseTransformData(newValue);
                if (!isEqual(state.schemaData, reverseTransformRes)) {
                    state.schemaData = reverseTransformRes;
                }
            }
        }
    }, [value]);

    const formatValue = useMemo(() => JSON.stringify(JSON.parse(value!), null, 2),[value])
    return (
        <>
            <h1>JSON Editor</h1>
            <Row gutter={15}>
                <Col span={12}>
                    <MonacoEditorComponent value={formatValue} defaultLanguage='json' height={'100vh'} />
                </Col>
                <Col span={12}>
                    <JSONEditTable />
                </Col>
            </Row>
        </>
    );
};

export default WrapperJSONEditTable;
