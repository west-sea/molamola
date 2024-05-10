import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, TouchableOpacity, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
//import * as KakaoAuthSession from 'react-native-kakao-auth';

function Login({navigation}) {
  return (
    <LinearGradient
      style={styles.lineargradient}
      locations={[0, 1]}
      colors={["#a6df3e", "#28ad81"]}
    >
      <Image
        style={[styles.kakaoLoginLargeNarrow1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/login/kakao.png")}
      />
      <Image
        style={[styles.imageRemovebgPreview1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/login/logoCenter.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: "50%",
    position: "absolute",
  },
  kakaoLoginLargeNarrow1Icon: {
    marginLeft: -96,
    top: 542,
    width: 192,
    height: 48,
  },
  imageRemovebgPreview1Icon: {
    marginTop: -199,
    marginLeft: -124,
    top: "50%",
    width: 248,
    height: 248,
  },
  lineargradient: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
});

export default Login;
