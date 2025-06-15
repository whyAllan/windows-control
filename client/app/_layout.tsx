import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { useColorScheme } from "react-native";

export default function RootLayout() {
  // const [loaded] = useFonts({
  //   SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  // });

  // if (!loaded) {
  //   // Async font loading only occurs in development.
  //   return null;
  // }

  return (
    <ThemeProvider
      value={useColorScheme() === "dark" ? DarkTheme : DefaultTheme}
    >
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
