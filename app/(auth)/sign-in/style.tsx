import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  linkBack: {
    marginTop: 10,
    marginLeft: 8,
  },
  titleLogin: {
    textAlign: "center",
    marginTop: 59,
    marginBottom: 55,
    fontWeight: "500",
    fontSize: 24,
    color: "#fffffa",
  },
  fullBackground: {
    flex: 1,
  },
  containerForm: {
    alignItems: "center",
    width: "100%",
    height: 418,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  loginBox: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  screen: {
    flex: 1,
  },
  fullScroll: {
    flexGrow: 1,
  },
  forgotPassword: {
    fontWeight: "400",
    fontSize: 12,
    textAlign: "right",
    color: "#f40303",
    marginTop: 10,
    marginBottom: 25,
    alignSelf: "flex-end",
  },
  arrowBack: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrowBackTitle: {
    fontWeight: "400",
    fontSize: 12,
    color: "#c8c8c8",
  },
  errorTitle: {
    color: "#f40303",
    fontWeight: "400",
    fontSize: 12,
    textAlign: "right",
  },
});
