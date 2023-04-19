import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons'
import { colors } from '../../global_styles';
import styles from './styles';

type Option = {
  label: string
  value: number
  icon: string
}

type Props = {
  options: Option[]
  onSelect: (item: Option) => void
}

const RadioList = (props: Props) => {
  const { options, onSelect } = props

  const [selectedOption, setSelectedOption] = useState<Option | null>(null)

  const handleOptionSelect = (option: Option) => {
    setSelectedOption(option)
    
    onSelect(option)
  }

  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleOptionSelect(option)}
          style={styles.button}
        >
          <View style={styles.view_icon_left}>
            <Feather
              name={option.icon}
              size={28}
              color={colors.primary}
            />
          </View>

          <Text style={styles.label}>
            {option.label}
          </Text>

          <View style={{ marginLeft: 'auto' }}>
            {selectedOption === option && (
              <AntDesign
                name={'checkcircle'}
                size={28}
                color={colors.secondary}
              />
            )}

            {selectedOption !== option && (
              <Feather
                name={'circle'}
                size={28}
                color={colors.secondary}
              />
            )}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export { Option }

export default RadioList;