import { View, Text, Image, TextInput, TouchableOpacity, FlatList, Alert, Keyboard } from "react-native";
import { styles } from "./styles";
import { Tasks } from "../../components/Tasks";
import { useState } from "react";

export default function Home() {
  const [taskContent, setTaskContent] = useState<string[]>([])

  const [inputTaskContent, setInputTaskContent] = useState("")

  function handleTaskCreate() {
    if(taskContent.includes(inputTaskContent)){
      Alert.alert("Atencao!", "Essa tarefa ja foi criada!")
    } else if(inputTaskContent == "") {
      Alert.alert("Atencao!", "Voce nao pode criar uma terefa vazia!")
    } else {
      setTaskContent([...taskContent, inputTaskContent])
      setInputTaskContent("")
      Keyboard.dismiss()
    }
  }

  function handleDeleteTask(item: string) {
    Alert.alert("Remover:", "Voce tem certeza que deseja remover a tarefa?", [
      {
        text: "Sim",
        onPress: () => setTaskContent(prevState => prevState.filter(itemContent => itemContent !== item))
      },
      {
        text: "Nao"
      }
    ])
  }

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
            onChangeText={setInputTaskContent}
            value={inputTaskContent}
            placeholderTextColor="#808080"
          />

          <TouchableOpacity 
            style={styles.button} 
            activeOpacity={0.8}
            onPress={handleTaskCreate}
          >
            <Text style={styles.buttonText}>
              +
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tasksView}>
          <View style={styles.tasksHeader}>
            <View style={styles.tasksHeaderWrapper}>
              <Text style={styles.tasksHeaderTitle}>Criadas</Text>
              <Text style={styles.tasksHeaderNumber}>0</Text>
            </View>

            <View style={styles.tasksHeaderWrapper}>
              <Text style={styles.tasksHeaderTitle}>Concluídas</Text>
              <Text style={styles.tasksHeaderNumber}>0</Text>
            </View>
          </View>

          <FlatList 
            showsVerticalScrollIndicator={false}
            data={taskContent}
            keyExtractor={item => item}
            renderItem={({item}) => (
              <Tasks 
                content={item}
                onRemove={() => handleDeleteTask(item)}
              />
            )}
          />
        </View>
      </View>
    </View>
  )
}