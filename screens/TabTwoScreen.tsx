import * as React from "react";
import { StyleSheet, Image, Button, ScrollView } from "react-native";
import EditScreenInfo2 from "../components/EditScreenInfo2";
import { Text, View } from "../components/Themed";
import { Appearance } from "react-native";

export default function TabTwoScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/SYBLogo.png")}
          style={{
            marginTop: 0,
            width: 200,
            height: 60,
          }}
        />

        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <EditScreenInfo2 path="/screens/TabTwoScreen.tsx" />

        <Image
          source={{
            uri:
              "http://d1gyrc37l0ujyh.cloudfront.net/SYB Visuals/PIIICs14.jpg",
          }}
          style={{ width: 400, height: 400 }}
        />
        <Image
          source={{
            uri:
              "http://d1gyrc37l0ujyh.cloudfront.net/SYB Visuals/PIIICs13.jpg",
          }}
          style={{ width: 400, height: 400 }}
        />
        <Image
          source={{
            uri:
              "http://d1gyrc37l0ujyh.cloudfront.net/SYB Visuals/PIIICs12.jpg",
          }}
          style={{ width: 400, height: 400 }}
        />
        <Image
          source={{
            uri:
              "http://d1gyrc37l0ujyh.cloudfront.net/SYB Visuals/PIIICs11.jpg",
          }}
          style={{ width: 400, height: 400 }}
        />
        <Image
          source={{
            uri:
              "http://d1gyrc37l0ujyh.cloudfront.net/SYB Visuals/PIIICs10.jpg",
          }}
          style={{ width: 400, height: 400 }}
        />
        <Image
          source={{
            uri:
              "http://d1gyrc37l0ujyh.cloudfront.net/SYB Visuals/PIIICs09.jpg",
          }}
          style={{ width: 400, height: 400 }}
        />
        <Image
          source={{
            uri:
              "http://d1gyrc37l0ujyh.cloudfront.net/SYB Visuals/PIIICs08.jpg",
          }}
          style={{ width: 400, height: 400 }}
        />
        <Image
          source={{
            uri:
              "http://d1gyrc37l0ujyh.cloudfront.net/SYB Visuals/PIIICs07.jpg",
          }}
          style={{ width: 400, height: 400 }}
        />
        <Image
          source={{
            uri:
              "http://d1gyrc37l0ujyh.cloudfront.net/SYB Visuals/PIIICs06.jpg",
          }}
          style={{ width: 400, height: 400 }}
        />
        <Image
          source={{
            uri:
              "http://d1gyrc37l0ujyh.cloudfront.net/SYB Visuals/PIIICs05.jpg",
          }}
          style={{ width: 400, height: 400 }}
        />
        <Image
          source={{
            uri:
              "http://d1gyrc37l0ujyh.cloudfront.net/SYB Visuals/PIIICs04.jpg",
          }}
          style={{ width: 400, height: 400 }}
        />
        <Image
          source={{
            uri:
              "http://d1gyrc37l0ujyh.cloudfront.net/SYB Visuals/PIIICs03.jpg",
          }}
          style={{ width: 400, height: 400 }}
        />
        <Image
          source={{
            uri:
              "http://d1gyrc37l0ujyh.cloudfront.net/SYB Visuals/PIIICs02.jpg",
          }}
          style={{ width: 400, height: 400 }}
        />
        <Image
          source={{
            uri:
              "http://d1gyrc37l0ujyh.cloudfront.net/SYB Visuals/PIIICs01.jpg",
          }}
          style={{ width: 400, height: 400 }}
        />
        <Image
          source={{
            uri:
              "http://d1gyrc37l0ujyh.cloudfront.net/SYB Visuals/PIIICs00.jpg",
          }}
          style={{ width: 400, height: 400 }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 80,
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
