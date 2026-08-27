import { Stack } from "expo-router";
import "@/global.css";
export default function RootLayout() {
  return <Stack screenOptions={{
    headerShown: false,
    animation: "fade_from_bottom",
    contentStyle: {
      backgroundColor: "#141414",
    },
    
  }} />;
}
