import {
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
import Dropdown, { OptionItem } from "../dropDown/DropDown";

export interface IFormFieldProps {
  title: string; // Исправлено на string
  value: string; // Исправлено на string
  placeholder: string; // Исправлено на string
  handleChangeText: (text: string) => void; // Тип функции для onChange
  otherStyles?: StyleProp<ViewStyle>; // Исправлено с "string" на StyleProp<ViewStyle>
  keyboardType?: KeyboardTypeOptions;
  cities?: OptionItem[]; // Массив городов с типом OptionItem для Dropdown
  isDropdown?: boolean;
  options?: OptionItem[];
}

const FormField: FC<IFormFieldProps> = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  keyboardType,
  cities,
  isDropdown = false,
  options,
  ...props
}) => {
  // const [selectedCity, setSelectedCity] = useState(value);
  const [showPassword, setShowPassword] = useState(false);

  const handleCitySelect = (city: OptionItem) => {
    // setSelectedCity(city.label);
    handleChangeText(city.label);
  };

  return (
    <View>
      <Text style={[styles.textTitle]}>{title}</Text>
      <View style={[styles.inputBox, otherStyles]}>
        {isDropdown && cities ? (
          <Dropdown
            data={cities}
            onChange={handleCitySelect}
            placeholder={placeholder}
          />
        ) : (
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
        )}
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
