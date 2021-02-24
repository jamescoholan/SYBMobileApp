import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Image,
  Button,
  ActivityIndicator,
  FlatList,
  TouchableHighlight,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { Audio, Video } from "expo-av";

export default function TabOneScreen() {
  const [sound, setSound] = React.useState();
  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/audio/Paris_1.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/1/")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/SYBLogo.png")}
          style={{
            marginTop: 70,
            width: 200,
            height: 60,
          }}
        />

        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <EditScreenInfo path="/screens/TabOneScreen.tsx" />
        <Button title="Play Song" onPress={playSound} />

        <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <Text>Loading...</Text> : 
      ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
          <Text style={{ fontSize: 20, color: 'blue', textAlign: 'center'}}>{data.name}</Text>
          <Text style={{ fontSize: 20, color: 'blue', textAlign: 'center'}}>{data.height}</Text>
          <Text style={{ fontSize: 20, color: 'blue', textAlign: 'center'}}>{data.hair_color}</Text>
          <Text style={{ fontSize: 20, color: 'blue', textAlign: 'center'}}>{data.gender}</Text>
          <Text style={{ fontSize: 20, color: 'blue', textAlign: 'center'}}>{data.eye_color}</Text>
          <Text style={{ fontSize: 20, color: 'blue', textAlign: 'center'}}>{data.skin_color}</Text>
        </View>
      )}
    </View>

        <Video
          source={{
            uri:
              "https://sybvideos.s3-us-west-1.amazonaws.com/OvertakenLV_1.mp4",
          }}
          rate={1.0}
          volume={1.0}
          isMuted={true}
          //resizeMode="cover"
          shouldPlay
          isLooping
          style={{ width: 3000, height: 250, marginTop: 40, marginBottom: 50 }}
        />
      </View>
    </ScrollView>
  );
  //http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
