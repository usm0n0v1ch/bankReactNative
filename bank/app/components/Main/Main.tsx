
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";


export default function Main() {
  return (
    <SafeAreaView>
      <Text style={{ fontSize: 24, fontWeight: 'bold', margin: 20 }}>Главная</Text>
    </SafeAreaView>
  );
}