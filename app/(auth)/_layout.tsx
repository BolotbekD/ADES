import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const AuthLayout: React.FC = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="sign-in/sign-in" options={{ headerShown: false }} />
        <Stack.Screen name="sign-up/sign-up" options={{ headerShown: false }} />
      </Stack>
      <StatusBar backgroundColor="transparent" style="light" />
    </>
  );
};

export default AuthLayout;
