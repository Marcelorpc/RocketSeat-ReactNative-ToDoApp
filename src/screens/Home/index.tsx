import { View, Text, Image, TextInput, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./styles";
import { Tasks } from "../../components/Tasks";
import { useState } from "react";

export default function Home() {
  const [taskContent, setTaskContent] = useState([
    <Tasks key={1}/>,
    <Tasks key={2}/>,
    <Tasks key={3}/>,
    <Tasks key={4}/>,
    <Tasks key={5}/>,
    <Tasks key={6}/>,
    <Tasks key={7}/>,
    <Tasks key={8}/>,
    <Tasks key={9}/>,
    <Tasks key={10}/>,
    <Tasks key={11}/>,
    <Tasks key={12}/>
  ])

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
            renderItem={({task}) => (
              <Tasks />
            )}
          />
        </View>
      </View>
    </View>
  )
}