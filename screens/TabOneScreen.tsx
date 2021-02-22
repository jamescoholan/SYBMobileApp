import * as React from 'react';
import { StyleSheet, Image, Button } from 'react-native';
import { ScrollView, } from 'react-native-gesture-handler';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View,} from '../components/Themed';


//<Text style={styles.title}>SYB</Text>

export default function TabOneScreen() {
  return (
    
    <View style={styles.container}>
      <Image
        source={require('../assets/images/SYBLogo.png')}
        style={{
          width: 200, 
          height: 60}}
      />
     
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />

      <Button
    title="Play Tunes"
    onPress={() => {
        console.log('pressed');
    }}
/>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
