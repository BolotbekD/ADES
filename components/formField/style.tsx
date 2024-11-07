import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  inputBox: {
    width: 288,
    height: 37,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderColor: "#c8c8c8",
    borderWidth: 1,
    color: "#c8c8c8",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 15,
    paddingLeft: 15,
  },
  input: {
    fontWeight: "400",
    fontSize: 14,
    color: "#232323",
    width: 230,
    height: 37,
  },
  textTitle: {
    position: "relative",
    top: 6,
    left: 10,
    zIndex: 100,
    backgroundColor: "#fff",
    fontWeight: "400",
    fontSize: 12,
    color: "#232323",
    alignSelf: "flex-start",
    paddingHorizontal: 4,
  },
});
