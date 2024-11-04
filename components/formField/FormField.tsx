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
import ModalPicker from "react-native-modal-picker";

export interface IFormFieldProps {
  title: string; // Исправлено на string
  value: string; // Исправлено на string
  placeholder: string; // Исправлено на string
  handleChangeText: (text: string) => void; // Тип функции для onChange
  otherStyles?: StyleProp<ViewStyle>; // Исправлено с "string" на StyleProp<ViewStyle>
  keyboardType?: KeyboardTypeOptions;
  cities?: string[];
}

const FormField: FC<IFormFieldProps> = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  keyboardType,
  cities,
  ...props
}) => {
  const [selectedCity, setSelectedCity] = useState(value);
  const [showPassword, setShowPassword] = useState(false);

  const handleCitySelect = (option: { key: string; label: string }) => {
    setSelectedCity(option.label);
    handleChangeText(option.label);
  };

  // Преобразуем массив городов для использования в ModalPicker
  const cityOptions =
    cities?.map((city, index) => ({
      key: index.toString(),
      label: city,
    })) || [];

  return (
    <View style={[styles.container]}>
      <Text style={[styles.textTitle]}>{title}</Text>
      <View style={[styles.inputBox, otherStyles]}>
        {cities ? (
          <ModalPicker
            data={cityOptions}
            initValue={placeholder}
            onChange={handleCitySelect}
            style={styles.modalPicker}
          >
            <TouchableOpacity>
              <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor="#c8c8c8"
                value={selectedCity}
                editable={false} // Поле недоступно для редактирования, так как оно открывает модальное окно
              />
            </TouchableOpacity>
          </ModalPicker>
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
