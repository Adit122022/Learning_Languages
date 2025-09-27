import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useMutation, useQuery } from "convex/react";
import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode, colors } = useTheme()

  const todos = useQuery(api.todos.getTodos);
  console.log(todos)
  const addTodo = useMutation(api.todos.addTodo)
  const deleteTodo = useMutation(api.todos.deleteTodo)
  const clearAllTodos = useMutation(api.todos.DeleteAllTodos)
  return (
    <View
      style={[styles.container, { backgroundColor: colors.gradients.background[0] }]}
    >
      <Text style={styles.content}>Hey </Text>
      <Text style={styles.paragraph}>I am New To Here to Create this</Text>
      <Link style={styles.link} href="/(tabs)/settings">
        <Ionicons size={25} name="settings" />
      </Link>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Press Me</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => clearAllTodos()} >
        <Text>Clear All Todos</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => addTodo({ text: "New Todo" })} style={{ marginTop: 20, backgroundColor: "blue", padding: 10, borderRadius: 10 }}>
        <Text style={{ color: "white" }}>Add Todo</Text>
      </TouchableOpacity>
      {todos?.map((todo) => <Text onPress={() => deleteTodo({ id: todo._id })} key={todo._id} style={{ marginTop: 10, fontSize: 20 }}>{todo.text}</Text>)}
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