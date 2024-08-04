import { ReactNode } from "react";
import { View } from "react-native";
import { styles } from "../styles/styleSheet";

interface HeaderPropsType {
  children: ReactNode
}

export default function Header({ children }: HeaderPropsType) {

  return (
    <View style={styles.header}>
      {children}
    </View>
  )
}
