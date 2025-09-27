import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Settings() {
   const { toggleDarkMode ,colors  } = useTheme()
   
  return (
    <View
      style={[styles.container, { backgroundColor: colors.gradients.background[0] }]}
    >
      <Text style={styles.content}>Settings </Text>
      <Text style={styles.paragraph}>Settings Page</Text>
      <Link style={styles.link} href="/(tabs)">
      <Ionicons size={25} name="home" />
      </Link>
      <TouchableOpacity onPress={toggleDarkMode}>
        
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    height: "100%",
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