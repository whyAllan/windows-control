import { Tabs } from "expo-router";
import React from "react";
import { IconSymbol } from "../../components/IconSymbol";
export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="comands"
        options={{
          title: "Comands",
          // tabBarIcon: ({ color }) => (
          //   <IconSymbol size={28} name="house.fill" color={color} />
          // ),
        }}
      />

      <Tabs.Screen
        name="mouse"
        options={{
          title: "Mouse",
          // tabBarIcon: ({ color }) => (
          //   <IconSymbol size={28} name="house.fill" color={color} />
          // ),
        }}
      />
    </Tabs>
  );
}
