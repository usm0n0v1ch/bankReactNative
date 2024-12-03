import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import styles from './style';

export default function Profile() {
  const user = {
    name: 'Dilmurod',
    email: 'dilmurod@gmail.com',
    number: '+998-90-017-03-11',
    address: 'Tashkent, Uzbekistan',
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Профиль</Text>
      <View style={styles.profileCard}>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>Имя:</Text>
          <Text>{user.name}</Text>
        </View>

        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>Email:</Text>
          <Text>{user.email}</Text>
        </View>

        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>Номер:</Text>
          <Text>{user.number}</Text>
        </View>

        <View>
          <Text style={{ fontWeight: 'bold' }}>Адрес:</Text>
          <Text>{user.address}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
