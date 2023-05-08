import CurrencyInput from 'react-native-currency-input'
import { colors } from "../../../global_styles";
import { useState } from 'react';
import { TextInputProps } from 'react-native/types';

interface Props extends TextInputProps {
  onChangeValue?: (value: number) => number
}

const CurrencyInputComponent = (props: Props) => {
  const { onChangeValue } = props

  const [value, setValue] = useState(0);

  return (
    <CurrencyInput
      style={[
        {
          color: colors.secondary,
          width: '100%'
        },
        props.style
      ]}
      value={value}
      onChangeValue={(newValue: number) => setValue(newValue)}
      prefix='R$ '
      delimiter="."
      separator=","
      precision={2}
      minValue={0}
      onChangeText={(formattedValue) => {
        !value && setValue(0)
        
        onChangeValue && onChangeValue(value)
      }}
    />
  );
}

export default CurrencyInputComponent