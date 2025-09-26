import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#fefae0",
                tabBarInactiveTintColor: "#606c38",
                tabBarStyle: {
                    backgroundColor: "#283618",
                    borderTopWidth: 1,
                    borderTopColor: "yellow",
                    height: 90,
                    paddingBottom: 30,
                }, tabBarLabelStyle: {
                    fontSize: 15,
                    fontWeight: "800",
                }
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons size={size} color={color} name="home" />
                    ),
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: "Settings",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons size={size} color={color} name="settings-outline" />
                    ),
                }}
            />
        </Tabs>
    );
};

export default TabsLayout;
