import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { FC, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../../components/formField/FormField";
import { styles } from "./style";
import CustomBotton from "@/components/CustomButton/CustomBotton";
import { Redirect, router, Link } from "expo-router";
import { Svg, Path } from "react-native-svg";

const SignIn: FC = () => {
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = async () => {
    if (!form.email || !form.password) {
      setMessage("*Заполните поля");
      return;
    }
  };
  return (
    <ImageBackground
      source={require("../../../assets/images/Graident_16.png")}
      style={styles.fullBackground}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.screen}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={0} // Задайте отступ по необходимости
        >
          <ScrollView contentContainerStyle={styles.fullScroll}>
            <View style={styles.loginBox}>
              <Link style={styles.linkBack} href={"/"}>
                <View style={styles.arrowBack}>
                  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <Path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.4881 4.43057C15.8026 4.70014 15.839 5.17361 15.5694 5.48811L9.98781 12L15.5694 18.5119C15.839 18.8264 15.8026 19.2999 15.4881 19.5695C15.1736 19.839 14.7001 19.8026 14.4306 19.4881L8.43056 12.4881C8.18981 12.2072 8.18981 11.7928 8.43056 11.5119L14.4306 4.51192C14.7001 4.19743 15.1736 4.161 15.4881 4.43057Z"
                      fill="#C8C8C8"
                    />
                  </Svg>
                  <Text style={styles.arrowBackTitle}>Назад</Text>
                </View>
              </Link>
              <Text style={styles.titleLogin}>Вход в аккаунт</Text>

              <View style={styles.containerForm}>
                <View>
                  {message && (
                    <View>
                      <Text style={styles.errorTitle}>{message}</Text>
                    </View>
                  )}
                  <FormField
                    title="*Почта"
                    value={form.email}
                    handleChangeText={(e) => setForm({ ...form, email: e })}
                    otherStyles={
                      message && !form.email
                        ? {
                            borderColor: "#f40303",
                            borderWidth: 1,
                          }
                        : null
                    }
                    keyboardType="email-address"
                    placeholder="example@gmail.com"
                  />
                  <FormField
                    title="*Пароль"
                    value={form.password}
                    handleChangeText={(e) => setForm({ ...form, password: e })}
                    otherStyles={
                      message && !form.password
                        ? {
                            borderColor: "#f40303",
                            borderWidth: 1,
                          }
                        : null
                    }
                    placeholder="Введите ваш пароль"
                    keyboardType="default"
                  />
                  <Link
                    style={styles.forgotPassword}
                    href={"/(auth)/forgotPassword/ForgotPassword"}
                  >
                    Забыли пароль?
                  </Link>
                  <CustomBotton title="Войти" handlePress={submit} />
                </View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default SignIn;
