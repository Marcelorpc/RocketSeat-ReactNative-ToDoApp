import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../../../assets/Logo.png')}
        />
      </View>

      <View style={styles.mainContent}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Crie uma nova tarefa"
            placeholderTextColor="#808080"
          />

          <TouchableOpacity 
            style={styles.button} 
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}