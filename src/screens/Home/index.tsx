import { View, Text, Image } from "react-native";
import { styles } from "./styles";

export default function Home() {
  return (
    <View style={styles.headerContainer}>
      <Image
        style={styles.logo}
        source={require('../../../assets/Logo.png')}
      />
    </View>
  )
}