
import { SafeAreaView } from "react-native-safe-area-context";  
import { Text, View, Button, Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";


export default function Balance() {
  const [balance, setBalance] = useState(1000)
  const [value, setValue] = useState(0)
  const handlePlus = ()=>{
    setBalance(balance+parseInt(value))
    setValue(0)
  }
  const handleMinus = ()=>{
    setBalance(balance-parseInt(value))
    setValue(0)
  }
  return (
    <SafeAreaView>
      <View style={{ flex: 1, padding: 20, gap:20, borderColor:'black', borderWidth:1, borderRadius:10, margin:20, alignItems:'center' }}>
        <Text>Баланс</Text>
        <View>
          <Text>Всего:{balance}</Text>
        </View>
        <View style={{gap:20,alignItems:'center'}}>
          <TextInput
            placeholder="Введите сумму"
            value = {value}
            onChangeText={setValue}
            keyboardType="numeric"
            style={{
              width: 200,
              height: 40,
              borderColor: 'black',
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
            }}
            />
          <Button title="Пополнить" onPress={handlePlus} />
          <Button title="Вывести" onPress={handleMinus} />
        </View>
      </View>
      
    </SafeAreaView>
  );
}