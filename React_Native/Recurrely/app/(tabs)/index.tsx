import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center gap-5 justify-center bg-black">
      <Text className="text-xl font-bold text-success font-mono">
        Welcome to Nativewind!
      </Text>
      {/* Links */}
      <View className="flex-row gap-5 w-full flex-wrap items-center justify-center">
        <Link className="px-4 py-2 bg-white  rounded-xl font-bold capitalize text-muted-foreground" href="/Onboarding">OnBoarding</Link>
        <Link className="px-4 py-2 bg-primary  rounded-xl font-bold capitalize text-muted" href="/(auth)/SignIn">Login</Link>
        <Link className="px-4 py-2 bg-white  rounded-xl font-bold capitalize text-muted-foreground" href="/(auth)/SignUp">Register</Link>

        <Link className="px-4 py-2 bg-white  rounded-xl font-bold capitalize text-muted-foreground" href="/subscriptions/spotify">View Spotify Subscription</Link>
        <Link className="px-4 py-2 bg-white  rounded-xl font-bold capitalize text-muted-foreground" href={{ pathname: "/subscriptions/[id]", params: { id: 'claude' } }}>View Apple Subscription</Link>
      </View>
    </View>
  );
}