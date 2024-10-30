import { Button, Card, Descriptions, Modal, Space, TableColumnProps } from 'antd';
import React from 'react';
import { SchemaValidateRuleItem, SchemaValidateRuleKey, cardList, schemaValidateRule } from './const.ts';
import type { InputData } from './data.d.ts';
import { isBoolean, isNull, isUndefined } from 'lodash-es';

export interface useTableColumnProps {
    removeRow?: (k: string) => void;
    editRow?: (row: InputData) => void;
    isRoot?: boolean;
}

export const useTableColumn = ({ removeRow, editRow, isRoot }: useTableColumnProps) => {
    const columns: TableColumnProps<InputData>[] = [
        {
            title: '参数名称',
            dataIndex: 'title',
            render(col) {
                return col || '-';
            },
        },
        {
            title: '参数类型',
            dataIndex: 'type',
            render(col) {
                return col || '-';
            },
        },
        {
            title: '参数描述',
            dataIndex: 'description',
            render(col) {
                return col || '-';
            },
        },
        {
            title: '是否必填',
            dataIndex: 'is_required',
            render(col) {
                return isBoolean(col) ? (col ? '是' : '否') : '-';
            },
        },

        {
            title: '枚举值',
            dataIndex: 'enum',
            render(col) {
                return Array.isArray(col) && col.length > 0 ? col?.join(',') : col || '-';
            },
        },
        {
            title: '规则',
            dataIndex: 'rule',
            width: 200,
            render(rule, record) {
                const onSeeRuleDetail = () => {
                    const dataKey = record?.type as SchemaValidateRuleKey;
                    const data: SchemaValidateRuleItem[] = schemaValidateRule[dataKey] || [];
                    const descriptionList = data.map(item => ({
                        label: `参数类型:${record.type}`,
                        children: (
                            <Card hoverable title="详细规则">
                                <Space>
                                    {cardList.map((v, index) => (
                                        <Card key={`${v}-${index}`} title={v}>
                                            {index === 0 && item.validateName}
                                            {index === 1 && !isNull(rule?.[item.validateName]) && !isUndefined(rule?.[item.validateName]) ? String(rule?.[item.validateName]) : '-'}
                                            {index === 2 && item.validateLabel}
                                        </Card>
                                    ))}
                                </Space>
                            </Card>
                        ),
                    }));
                    Modal.confirm({
                        title: '规则详情',
                        content: (
                            <Descriptions
                                column={1}
                                items={descriptionList}
                                style={{ marginBottom: 20 }}
                                labelStyle={{ paddingRight: 36 }}
                            />
                        ),
                        style: {
                            minWidth: 700,
                        },
                        icon: null,
                    });
                };

                return (
                    <Button onClick={onSeeRuleDetail} type="primary">
                        查看规则详情
                    </Button>
                );
            },
        },
        {
            title: '操作',
            dataIndex: 'op',
            fixed: 'right',
            width: 200,
            render: (_, record) => (
                <Space>
                    <Button onClick={() => editRow?.(record)} type="primary">
                        编辑
                    </Button>
                    <Button onClick={() => removeRow?.(record.key)} type="primary" danger>
                        删除
                    </Button>
                </Space>
            ),
        },
    ];
    return isRoot ? columns.filter(item => item.dataIndex !== 'is_required') : columns;
};
