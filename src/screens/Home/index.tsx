import { View, Text, Image, TextInput, TouchableOpacity, FlatList, Alert, Keyboard } from "react-native";
import { styles } from "./styles";
import { Tasks } from "../../components/Tasks";
import { Fragment, useState } from "react";
import { Icon } from "@rneui/themed";

export default function Home() {
  const [taskContent, setTaskContent] = useState<string[]>([])

  const [inputTaskContent, setInputTaskContent] = useState("")

  const [counterTasksCreated, setCounterTasksCreated] = useState(0)
  const [counterTasksCompleted, setCounterTasksCompleted] = useState(0)

  function handleTaskCreate() {
    if(taskContent.includes(inputTaskContent)){
      Alert.alert("Atencao!", "Essa tarefa ja foi criada!")
    } else if(inputTaskContent == "") {
      Alert.alert("Atencao!", "Voce nao pode criar uma terefa vazia!")
    } else {
      setTaskContent([...taskContent, inputTaskContent])
      setCounterTasksCreated(prevState => prevState + 1)
      setInputTaskContent("")
      Keyboard.dismiss()
    }
  }

  function handleDeleteTask(isChecked: boolean, item: string) {
    Alert.alert("Remover:", "Voce tem certeza que deseja remover a tarefa?", [
      {
        text: "Sim",
        onPress: () => {
          setTaskContent(prevState => prevState.filter(itemContent => itemContent !== item))
          setCounterTasksCreated(prevState => prevState - 1)
          if(isChecked == true) {
            setCounterTasksCompleted(prevState => prevState - 1)
          }
        }
      },
      {
        text: "Nao"
      }
    ])
  }

  function handleCompletedTasksNumber(checked: boolean) {
    if(checked){
      setCounterTasksCompleted(prevState => prevState + 1)
    } else if(!checked) {
      setCounterTasksCompleted(prevState => prevState - 1)
    }
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
              <Text style={styles.tasksHeaderNumber}>{counterTasksCreated}</Text>
            </View>

            <View style={styles.tasksHeaderWrapper}>
              <Text style={styles.tasksHeaderTitle}>Concluídas</Text>
              <Text style={styles.tasksHeaderNumber}>{counterTasksCompleted}</Text>
            </View>
          </View>

          <FlatList 
            showsVerticalScrollIndicator={false}
            data={taskContent}
            keyExtractor={item => item}
            renderItem={({item}) => (
              <Tasks 
                content={item}
                onRemove={(isChecked) => handleDeleteTask(isChecked, item)}
                onCheckChange={(checked) => handleCompletedTasksNumber(checked)}
              />
            )}
            ListEmptyComponent={() => (
              <View style={styles.emptyContentView}>
                <Icon 
                name="notes"
                size={50}
                iconStyle={styles.iconNotes}
                />

                <Text style={styles.emptyContentTitle}>
                  Você ainda não tem tarefas cadastradas
                </Text>

                <Text style={styles.emptyContentText}>
                  Crie tarefas e organize seus itens a fazer
                </Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  )
}