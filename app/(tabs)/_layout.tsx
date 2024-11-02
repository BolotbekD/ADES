import { Redirect, Tabs } from "expo-router";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import { type FC } from "react";
import { TabIcon } from "./TabsIcon";

export interface ITabsLayourProps {}

const TabsLayout: FC<ITabsLayourProps> = () => {
  return (
    <>
      <Tabs screenOptions={{ tabBarShowLabel: false }}>
        <Tabs.Screen
          name="home"
          options={{
            title: "home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={require("../../assets/images/iconHome.png")}
                color={color}
                name="Главная"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="connection"
          options={{
            title: "Connection",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={require("../../assets/images/IconHelp.png")}
                color={color}
                name="Связь"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="instruction"
          options={{
            title: "Instruction",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={require("../../assets/images/IconInstruction.png")}
                color={color}
                name="Инструкция"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="account"
          options={{
            title: "Account",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={require("../../assets/images/IconAccount.png")}
                color={color}
                name="Аккаунт"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;

const colors = {
  lightGreen: "#90EE90", // Замените на нужный цвет
};

const fonts = {
  main: "sans-serif", // Замените на нужный шрифт
};

// Использование переменных в стилях
export const styles = StyleSheet.create({
  mainText: {
    fontFamily: fonts.main,
    // fontWeight: "400",
    fontSize: 12,
    textAlign: "center",
    // color: colors.lightGreen,
  },
  iconMain: { display: "flex", justifyContent: "center", alignItems: "center" },
});
