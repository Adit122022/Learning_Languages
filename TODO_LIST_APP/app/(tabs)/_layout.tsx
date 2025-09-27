import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import useTheme from "@/hooks/useTheme";

const TabsLayout = () => {
     const { colors } = useTheme()
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.textMuted,
                tabBarStyle: {
                    backgroundColor: colors.surface,
                    borderTopWidth: 1,
                    borderTopColor: colors.border,
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
