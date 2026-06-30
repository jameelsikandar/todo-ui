import { Tabs } from "expo-router";
import { Image, StyleSheet } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#17A2E8",
        tabBarInactiveTintColor: "#aaa",
        tabBarStyle: {
          backgroundColor: "#05243E",
          borderTopWidth: 0,
          height: 65,
          paddingBottom: 10,
        },
      }}
    >
      {/* home screen tab  */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused, size }) => (
            <Image
              source={require("@/assets/images/tabBar/Home.png")}
              style={[
                styles.icon,
                {
                  width: size,
                  height: size,
                  tintColor: color,
                },
              ]}
            />
          ),
        }}
      />
      {/* do it tasks tab  */}

      <Tabs.Screen
        name="tasks"
        options={{
          title: "Tasks",
          tabBarIcon: ({ color, focused, size }) => (
            <Image
              source={require("@/assets/images/tabBar/TodoList.png")}
              style={[
                styles.icon,
                {
                  width: size,
                  height: size,
                  tintColor: color,
                },
              ]}
            />
          ),
        }}
      />
      {/*  calendar tab  */}

      <Tabs.Screen
        name="calendar"
        options={{
          title: "Calendar",
          tabBarIcon: ({ color, focused, size }) => (
            <Image
              source={require("@/assets/images/tabBar/Calendar.png")}
              style={[
                styles.icon,
                {
                  width: size,
                  height: size,
                  tintColor: color,
                },
              ]}
            />
          ),
        }}
      />

      {/* settings tab  */}

      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, focused, size }) => (
            <Image
              source={require("@/assets/images/tabBar/Settings.png")}
              style={[
                styles.icon,
                {
                  width: size,
                  height: size,
                  tintColor: color,
                },
              ]}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  icon: {
    resizeMode: "contain",
  },
});
