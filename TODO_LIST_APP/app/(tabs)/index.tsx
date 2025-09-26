import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.content}>Hey </Text>
      <Text style={styles.paragraph}>I am New To Here to Create this</Text>
      <Link style={styles.link} href="/(tabs)/settings">
      <Ionicons size={25} name="settings" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    height: "100%",
    backgroundColor:"#fefae0",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {

    fontSize: 25,
    fontWeight: "bold"
  },
  link: {
    fontSize: 20,
    color: "blue",
    marginTop: 20
  },
  paragraph: {
    fontSize: 15,
    marginTop: 10
  }

})