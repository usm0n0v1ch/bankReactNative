
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";

export default function Help() {
  return (
    <SafeAreaView>
      <View style={{ flex: 1, padding: 20, gap:20, borderColor:'black', borderWidth:1, borderRadius:10, margin:20 }}>
        <Text>Служба поддержки</Text>
        <Text>Добро пожаловать в раздел поддержки!</Text>
        <Text>Мы всегда готовы помочь вам в случае возникновения вопросов или трудностей при использовании нашего приложения. Ниже приведены часто задаваемые вопросы (FAQ) и рекомендации для эффективного использования приложения.</Text>
      </View>
      
    </SafeAreaView>
  );
}