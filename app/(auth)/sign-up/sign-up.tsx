import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { FC, useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../../components/formField/FormField";
import { styles } from "./style";
import CustomBotton from "@/components/CustomButton/CustomBotton";
import { Redirect, router, Link } from "expo-router";
import CustomCheckBox from "@/components/CustomCheckBox/CustomCheckBox";
import { Svg, Path } from "react-native-svg";
import { createUser } from "../../../lib/appwrite";

const SignUp: FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: "",
    surname: "",
    name: "",
    phone: "",
    city: "",
    branch: "",
  });

  const cityOptions = [
    { value: "Бишкек", label: "Бишкек" },
    { value: "Ош", label: "Ош" },
  ];

  const branchOptions: {
    [key: string]: { value: string; label: string }[];
  } = {
    Бишкек: [
      { value: "Анкара 10B", label: "Анкара 10B" },
      // Другие филиалы
    ],
    Ош: [
      { value: "Алиева 219", label: "Алиева 219" },
      // Другие филиалы
    ],
  };

  const submit = async () => {
    if (
      !form.email ||
      !form.password ||
      !form.surname ||
      !form.name ||
      !form.phone ||
      !form.city ||
      !form.branch ||
      !isChecked
    ) {
      setMessage("*Заполните поля");
      return;
    }
    if (form.password.length < 6) {
      setMessage("*Пароль должен содержать не менее 6 символов");
    }
    router.replace("/(auth)/confirmCode/ConfirmCode");
    // setIsSubmitting(true);

    // try {
    //   const result = await createUser(form.email, form.password, form.surname);
    //   router.replace("/");

    //   setForm({
    //     email: "",
    //     password: "",
    //     surname: "",
    //     name: "",
    //     phone: "",
    //     city: "",
    //     branch: "",
    //   });
    //   setMessage("");
    // } catch (error) {
    //   alert(`Error: ${(error as Error).message}`);
    // } finally {
    //   setIsSubmitting(false);
    // }
    // setForm({
    //   email: "",
    //   password: "",
    //   surname: "",
    //   name: "",
    //   phone: "",
    //   city: "",
    //   branch: "",
    // });
  };

  // const handleCityChange = (text: string) => {
  //   setForm((prevForm) => ({ ...prevForm, city: text, branch: "" }));
  // };

  const handleCityChange = (text: string) => {
    console.log("Выбран город:", text);
    setForm((prevForm) => {
      const updatedForm = { ...prevForm, city: text, branch: "" };
      console.log("Форма после обновления:", updatedForm);
      return updatedForm;
    });
  };
  // useEffect(() => {
  //   console.log("Состояние формы изменилось:", form);
  // }, [form]);
  // useEffect(() => {
  //   console.log("Текущий филиал:", form.branch);
  // }, [form.branch]);

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
          keyboardVerticalOffset={0}
        >
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
            <Text style={styles.titleLogin}>Создание аккаунта</Text>
            <ScrollView contentContainerStyle={styles.fullScroll}>
              <View style={styles.containerForm}>
                <View>
                  {message && (
                    <View>
                      <Text style={styles.errorTitle}>{message}</Text>
                    </View>
                  )}
                  <FormField
                    title="*Фамилия"
                    value={form.surname}
                    handleChangeText={(e) => setForm({ ...form, surname: e })}
                    otherStyles={
                      message && !form.surname
                        ? {
                            borderColor: "#f40303",
                            borderWidth: 1,
                          }
                        : null
                    }
                    keyboardType="default"
                    placeholder="Введите вашу фамилию"
                  />
                  <FormField
                    title="*Имя"
                    value={form.name}
                    handleChangeText={(e) => setForm({ ...form, name: e })}
                    otherStyles={
                      message && !form.name
                        ? {
                            borderColor: "#f40303",
                            borderWidth: 1,
                          }
                        : null
                    }
                    keyboardType="default"
                    placeholder="Введите ваше имя"
                  />
                  <FormField
                    title="*Номер телефона"
                    value={form.phone}
                    handleChangeText={(e) => setForm({ ...form, phone: e })}
                    otherStyles={
                      message && !form.phone
                        ? {
                            borderColor: "#f40303",
                            borderWidth: 1,
                          }
                        : null
                    }
                    keyboardType="phone-pad"
                    placeholder="+996(000)000-000"
                  />
                  <FormField
                    title="*Город"
                    value={form.city}
                    handleChangeText={handleCityChange}
                    otherStyles={
                      message && !form.city
                        ? { borderColor: "#f40303", borderWidth: 1 }
                        : null
                    }
                    keyboardType="default"
                    placeholder="Выберите из списка ваш город"
                    cities={cityOptions}
                    isDropdown
                  />
                  {form.city && (
                    <FormField
                      title="*Филиал"
                      value={form.branch}
                      handleChangeText={(branch) =>
                        setForm((prev) => ({ ...prev, branch }))
                      }
                      otherStyles={
                        message && !form.branch
                          ? { borderColor: "#f40303", borderWidth: 1 }
                          : null
                      }
                      keyboardType="default"
                      placeholder={
                        form.city
                          ? "Выберите из списка ваш филиал"
                          : "Выберите город сначала"
                      }
                      cities={branchOptions[form.city] || []}
                      isDropdown
                    />
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

                  <View style={styles.boxCheckBox}>
                    <CustomCheckBox
                      isChecked={isChecked}
                      setIsChecked={setIsChecked}
                      hasError={message !== "" && !isChecked}
                    />
                    <Text style={styles.textCheckBox}>
                      Нажимая, вы соглашаетесь с{" "}
                      <Link style={styles.linkCheckBox} href={"/"}>
                        политикой конфиденциальности
                      </Link>
                    </Text>
                  </View>
                  <CustomBotton title="Регистрация" handlePress={submit} />
                </View>
              </View>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default SignUp;
