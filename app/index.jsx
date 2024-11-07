import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native";
import CustomBotton from "../components/CustomButton/CustomBotton";
import { Redirect, router, Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
const App = () => {
  return (
    <ImageBackground
      source={require("../assets/images/Graident_16.png")}
      style={styles.fullBackground}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.fullBackground}>
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <View style={styles.container}>
            <Image
              style={styles.logo}
              source={require("../assets/images/logo.png")}
            />
            <View style={styles.btns}>
              <CustomBotton
                title="Войти"
                handlePress={() => router.push("/(auth)/sign-in/sign-in")}
              />
              <CustomBotton
                title="Регистрация"
                handlePress={() => router.push("/(auth)/sign-up/sign-up")}
                buttonStyle={{
                  backgroundColor: "#fffffa",
                  borderWidth: 1,
                  bordeStyle: "solid",
                  borderColor: "#5eb147",
                }}
                textStyles={{ color: "#232323" }}
              />
            </View>
          </View>
        </ScrollView>
        <StatusBar backgroundColor="transparent" style="light" />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default App;

const styles = StyleSheet.create({
  fullBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    marginTop: 100,
    resizeMode: "contain",
    // alignSelf: "center",
  },
  container: {
    width: 288,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    flex: 1,
  },
  btns: {
    width: "100%",
    rowGap: 20,
    marginBottom: 40,
  },
  btnRegistration: {
    borderWidth: 1,
    borderColor: "#90EE90",
    backgroundColor: "#fffffa",
  },
});
