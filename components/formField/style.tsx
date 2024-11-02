import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
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
    color: "#c8c8c8",
    width: 220,
    height: 37,
  },
  textTitle: {
    position: "relative",
    top: 8,
    left: 10,
    zIndex: 100,
    backgroundColor: "#fff",
    // width: "auto",
    padding: 4,
    // textAlign: "left",
    fontWeight: "400",
    fontSize: 12,
    color: "#232323",
  },
});
