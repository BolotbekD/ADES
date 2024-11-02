import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StyleProp,
  ViewStyle,
  KeyboardTypeOptions,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { FC, useState } from "react";
import { styles } from "./style";

export interface IFormFieldProps {
  title: string; // Исправлено на string
  value: string; // Исправлено на string
  placeholder: string; // Исправлено на string
  handleChangeText: (text: string) => void; // Тип функции для onChange
  otherStyles?: StyleProp<ViewStyle>; // Исправлено с "string" на StyleProp<ViewStyle>
  keyboardType?: KeyboardTypeOptions;
}

const FormField: FC<IFormFieldProps> = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  keyboardType,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={[styles.container, otherStyles]}>
      <Text style={styles.textTitle}>{title}</Text>
      <View style={styles.inputBox}>
        <TextInput
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#c8c8c8"
          onChangeText={handleChangeText}
          style={styles.input} // Добавляем цвет текста для наглядности
          {...props} // Пропускаем остальные пропсы
          keyboardType={keyboardType}
          secureTextEntry={title === "*Пароль" && !showPassword}
        />
        {title === "*Пароль" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={
                !showPassword
                  ? require("../../assets/images/IconEyeClose.png")
                  : require("../../assets/images/IconEyeOpen.png")
              }
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
