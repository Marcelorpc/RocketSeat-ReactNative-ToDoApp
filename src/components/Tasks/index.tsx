import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { CheckBox } from '@rneui/themed'
import { useState } from "react"

export function Tasks(){
  const [isChecked, setIsChecked] = useState(true)
  return (
    <View style={styles.tasksView}>
      <View style={styles.checkboxWrapper}>
        <CheckBox 
          checked={isChecked}
          size={24}
          containerStyle={styles.checkbox}
          onPress={() => setIsChecked(!isChecked)}
        />

        <Text style={styles.checkboxText}>
          Teste Tarefa
        </Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}