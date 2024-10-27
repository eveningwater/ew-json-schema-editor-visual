import { Radio, RadioGroupProps } from 'antd';
import React from 'react';

const { Group: RadioGroup } = Radio;
export interface ParentRadioGroupProps extends RadioGroupProps {
  [x: string]: unknown;
  trueText?: string;
  falseText?: string;
}
const ParentRadioGroup: React.FC<ParentRadioGroupProps> = ({ trueText = '是', falseText = '否', ...rest }) => {
  return (
    <RadioGroup {...rest}>
      <Radio.Button value>{trueText}</Radio.Button>
      <Radio.Button value={false}>{falseText}</Radio.Button>
    </RadioGroup>
  );
};

ParentRadioGroup.displayName = 'ParentRadioGroup';

export default ParentRadioGroup;
