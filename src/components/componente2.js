import { View, Button } from "react-native";
import styles from "../styles/component_style";

export default function Component2() {
        btn = () => {
          alert("Eu sou o Componente B");
        };

  return (
    <View style={styles.body}>
     <Button onPress={btn} title="COMPONENTE B " />
    </View>
  );
}