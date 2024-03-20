import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { CheckBox, Icon } from '@rneui/themed'
import { useState } from "react"

type props = {
  content: string,
  onRemove: () => void
}
export function Tasks({content, onRemove}: props){
  const [isChecked, setIsChecked] = useState(false)

  function getTaskTextStyle() {
    if(isChecked == true) {
      return styles.checkboxTextCompleted
    } else if(isChecked == false) {
      return styles.checkboxText
    }
  }

  return (
    <View style={styles.tasksView}>
      <View style={styles.checkboxWrapper}>
        <CheckBox 
          checked={isChecked}
          size={24}
          containerStyle={styles.checkbox}
          onPress={() => setIsChecked(!isChecked)}
        />

        <Text style={getTaskTextStyle()}>
          {content}
        </Text>
      </View>

      <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={onRemove}>
        <Icon 
          size={20}
          iconStyle={styles.trashIcon} 
          name="delete"
        />
      </TouchableOpacity>
    </View>
  )
}