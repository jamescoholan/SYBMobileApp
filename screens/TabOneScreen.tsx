import * as React from 'react';
import { StyleSheet, Image, Button } from 'react-native';
import { ScrollView, } from 'react-native-gesture-handler';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View,} from '../components/Themed';
import { Audio,Video } from 'expo-av';

export default function TabOneScreen() {
  const [sound, setSound] = React.useState();
  
  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       require('../assets/audio/Paris_1.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync(); }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

  return (
    
    <ScrollView>
    <View style={styles.container}>

      <Image
        source={require('../assets/images/SYBLogo.png')}
        style={{
          marginTop: 70,
          width: 200, 
          height: 60}}
      />
     
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
      <Button title="Play Song" onPress={playSound} />
      <Video
  source={{ uri: 'https://sybvideos.s3-us-west-1.amazonaws.com/Overtaken+Final+Jan+29+mp4.mp4' }}
  rate={1.0}
  volume={1.0}
  isMuted={true}
  resizeMode="cover"
  shouldPlay
  isLooping
  style={{ width: 300, height:200, marginTop:40,marginBottom:50, }}
/>
<Video
  source={{ uri: 'https://sybvideos.s3-us-west-1.amazonaws.com/Overtaken+Final+Jan+29+mp4.mp4' }}
  rate={1.0}
  volume={1.0}
  isMuted={true}
  resizeMode="cover"
  shouldPlay
  isLooping
  style={{ width: 300, height:200, marginTop:40,marginBottom:50, }}
/>
<Video
  source={{ uri: 'https://sybvideos.s3-us-west-1.amazonaws.com/Overtaken+Final+Jan+29+mp4.mp4' }}
  rate={1.0}
  volume={1.0}
  isMuted={true}
  resizeMode="cover"
  shouldPlay
  isLooping
  style={{ width: 300, height:200, marginTop:40,marginBottom:50, }}
/>
    </View>
    </ScrollView>
  );
 //http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4
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