import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { FC } from "react";

// Определяем интерфейс для свойств кнопки
export interface ICustomButton {
  title: string; // Заголовок кнопки
  handlePress: () => void; // Функция для обработки нажатия
  buttonStyle?: object;
  textStyles?: object; // Необязательные стили текста
  isLoading?: boolean; // Необязательное свойство для состояния загрузки
  Disabled?: boolean;
}

const CustomButton: FC<ICustomButton> = ({
  title,
  handlePress,
  textStyles,
  buttonStyle,
  isLoading,
  Disabled,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.btnLogin, buttonStyle]}
      disabled={isLoading}
    >
      {isLoading ? (
        <Text style={styles.textBtn}>Загрузка...</Text> // Выводим текст загрузки
      ) : (
        <Text style={[styles.textBtn, textStyles]}>{title}</Text> // Применяем переданные стили текста
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
