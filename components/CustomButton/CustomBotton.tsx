import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { FC } from "react";

// Определяем интерфейс для свойств кнопки
export interface ICustomButton {
  title: string; // Заголовок кнопки
  handlePress: () => void; // Функция для обработки нажатия
  textStyles?: object; // Необязательные стили текста
  isLoading?: boolean; // Необязательное свойство для состояния загрузки
}

const CustomButton: FC<ICustomButton> = ({
  title,
  handlePress,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={styles.btnLogin}
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
