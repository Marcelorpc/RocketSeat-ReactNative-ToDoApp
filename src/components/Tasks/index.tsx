import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { CheckBox, CheckBoxProps, Icon } from '@rneui/themed'
import { ChangeEvent, useState } from "react"

type props = {
  content: string,
  onRemove: (isChecked: boolean) => void,
  onCheckChange: (checked: boolean) => void
}
export function Tasks({content, onRemove, onCheckChange}: props){
  const [isChecked, setIsChecked] = useState(false)

  function getTaskTextStyle() {
    if(isChecked == true) {
      return styles.checkboxTextCompleted
    } else if(isChecked == false) {
      return styles.checkboxText
    }
  }

  function handleCheckChange(checked: boolean) {
    setIsChecked(checked)
    onCheckChange(checked)
  }

  return (
    <View style={styles.tasksView}>
      <View style={styles.checkboxWrapper}>
        <CheckBox 
          checked={isChecked}
          size={24}
          containerStyle={styles.checkbox}
          onPress={() => handleCheckChange(!isChecked)}
        />

        <Text style={getTaskTextStyle()}>
          {content}
        </Text>
      </View>

      <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => onRemove(isChecked)}>
        <Icon 
          size={20}
          iconStyle={styles.trashIcon} 
          name="delete"
        />
      </TouchableOpacity>
    </View>
  )
}