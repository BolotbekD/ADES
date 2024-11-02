import { FC } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";

export interface ITableIconProps {
  icon: ImageSourcePropType | undefined;
  color: string;
  name: string;
  focused: boolean;
}

export const TabIcon: FC<ITableIconProps> = ({
  icon,
  color,
  name,
  focused,
}) => {
  return (
    <View style={styles.iconMain}>
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={focused ? "#5eb147" : "gray"}
      />
      <Text
        style={[styles.mainText, { color: focused ? "#5eb147" : "silver" }]}
      >
        {name}
      </Text>
    </View>
  );
};

const colors = {
  lightGreen: "#90EE90", // Замените на нужный цвет
};

const fonts = {
  main: "sans-serif", // Замените на нужный шрифт
};
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
