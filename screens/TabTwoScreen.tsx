import * as React from 'react';
import { StyleSheet, Image, Button, ScrollView  } from 'react-native';
import EditScreenInfo2 from '../components/EditScreenInfo2';
import { Text, View, } from '../components/Themed';

export default function TabTwoScreen() {
  return (

    <ScrollView>
    <View style={styles.container}>
       <Image
        source={require('../assets/images/SYBLogo.png')}
        style={{width: 200, height: 60}}
      />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> 
      <EditScreenInfo2 path="/screens/TabTwoScreen.tsx" />

      <Button
    title="Play"
    onPress={() => {
        console.log('pressed');
    }}
/>
<Image
        source={require('../assets/images/SYBIcon.png')}
        style={{width: 400, height: 400}}
      />
      <Image
        source={require('../assets/images/SYBViz/PIIICs01.jpg')}
        style={{width: 400, height: 400}}
      />
      <Image
        source={require('../assets/images/SYBViz/PIIICs00.jpg')}
        style={{width: 400, height: 400}}
      />
      <Image
        source={require('../assets/images/SYBViz/PIIICs02.jpg')}
        style={{width: 400, height: 400}}
      />
      <Image
        source={require('../assets/images/SYBViz/PIIICs03.jpg')}
        style={{width: 400, height: 400}}
      />
      <Image
        source={require('../assets/images/SYBViz/PIIICs04.jpg')}
        style={{width: 400, height: 400}}
      />
      <Image
        source={require('../assets/images/SYBViz/PIIICs05.jpg')}
        style={{width: 400, height: 400}}
      />
      <Image
        source={require('../assets/images/SYBViz/PIIICs06.jpg')}
        style={{width: 400, height: 400}}
      />
<Image
        source={require('../assets/images/SYBViz/PIIICs07.jpg')}
        style={{width: 400, height: 400}}
      />
      <Image
        source={require('../assets/images/SYBViz/PIIICs08.jpg')}
        style={{width: 400, height: 400}}
      />
      <Image
        source={require('../assets/images/SYBViz/PIIICs09.jpg')}
        style={{width: 400, height: 400}}
      />
      <Image
        source={require('../assets/images/SYBViz/PIIICs10.jpg')}
        style={{width: 400, height: 400}}
      />
      <Image
        source={require('../assets/images/SYBViz/PIIICs11.jpg')}
        style={{width: 400, height: 400}}
      />
      <Image
        source={require('../assets/images/SYBViz/PIIICs12.jpg')}
        style={{width: 400, height: 400}}
      />
      <Image
        source={require('../assets/images/SYBViz/PIIICs17.jpg')}
        style={{width: 400, height: 400}}
      />

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 80,
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
