import {
    Text,
    View,
    Image,
    SafeAreaView,
    ScrollView,
    ImageBackground,
    StyleSheet,
  } from 'react-native';

const Home = () => {
    return(
        <View>
            <ImageBackground
                style={styles.imageBackground}
                source={require('../assets/background.png')}
                resizeMode='cover'>
                <View style={styles.whiteBox}></View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    imageBackground: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    whiteBox: {
      height: 100, // 원하는 높이로 조정
      backgroundColor: 'white',
      borderRadius: 20,
    },
  });

export default Home;