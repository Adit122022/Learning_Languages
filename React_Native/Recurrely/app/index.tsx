import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-foreground">
      <Text className="text-xl font-bold text-success font-mono">
        Welcome to Nativewind!
      </Text>
      <Link className="px-2 py-4 bg-foreground  text-muted" href="/Onboarding">OnBoarding</Link>
    </View>
  );
}