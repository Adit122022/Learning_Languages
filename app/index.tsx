import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.content}>Hey </Text>
      <Text style={styles.paragraph}>I am New To Here to Create this</Text>
    </View>
  );
}

const styles =StyleSheet.create({
  
  container :{
    height: "100%",
    backgroundColor: "black",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
    content:{
        color: "white",
        fontSize: 25, 
        fontWeight: "bold"
      },
    paragraph:{
        color: "white",
        fontSize: 15,
        marginTop: 10
    }

})