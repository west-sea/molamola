import {
    Text,
    View,
    Image,
    SafeAreaView,
    ScrollView,
    Button,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
    Dimensions
} from 'react-native';
import { Border, Color, GlobalStyles } from '../GlobalStyle';
// import YellowButton from '../components/YellowButton';

import Buy from '../components/Product';

const { width, height } = Dimensions.get('window');
const whiteBoxHeight = height * 0.3;

const ddimage = require('../assets/garden/circle_garden.png')

function Challenges({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={{ ...GlobalStyles.h1, marginTop: 15 }}>새싹얻기</Text>
            <Text style={{ ...GlobalStyles.h2, marginLeft: 20 }}>인증하기</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 16 }}>
                <TouchableOpacity style={styles.squareButton}>
                    <Image
                        style={styles.squareButtonImage}
                        source={require('../assets/challenges/bus.png')} />
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 6 }}>
                        <Image
                            style={styles.points}
                            source={require('../assets/garden/sprout.png')} />
                        <Text style={styles.squareButtonText}>1</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.squareButton}>
                    <Image
                        style={styles.squareButtonImage}
                        source={require('../assets/challenges/shoe.png')} />
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 6 }}>
                        <Image
                            style={styles.points}
                            source={require('../assets/garden/sprout.png')} />
                        <Text style={styles.squareButtonText}>1</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.squareButton}>
                    <Image
                        style={styles.squareButtonImage}
                        source={require('../assets/challenges/recycle.png')} />
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 6 }}>
                        <Image
                            style={styles.points}
                            source={require('../assets/garden/sprout.png')} />
                        <Text style={styles.squareButtonText}>5</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <Text style={{ ...GlobalStyles.h2, marginLeft: 20, marginTop: 25 }}>구매하기</Text>

            <ScrollView
                style={{
                    ...GlobalStyles.scroll,
                    overflow: 'hidden',
                }}
                showsVerticalScrollIndicator={false}>
                <Buy
                    productName={'왕맛있는 사과'}
                    productContent={'so tasty'}
                    productImage={ddimage}
                    productPrice={20000}
                />
                <Buy
                    productName={'왕맛있는 사과'}
                    productContent={'so tasty'}
                    productImage={ddimage}
                    productPrice={20000}
                />
                <Buy
                    productName={'왕맛있는 사과'}
                    productContent={'so tasty'}
                    productImage={ddimage}
                    productPrice={20000}
                />
                <Buy
                    productName={'왕맛있는 사과'}
                    productContent={'so tasty'}
                    productImage={ddimage}
                    productPrice={20000}
                />
                <Buy
                    productName={'왕맛있는 사과'}
                    productContent={'so tasty'}
                    productImage={ddimage}
                    productPrice={20000}
                />
                <Buy
                    productName={'왕맛있는 사과'}
                    productContent={'so tasty'}
                    productImage={ddimage}
                    productPrice={20000}
                />
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        width: width,
        height: height,
        backgroundColor: Color.white,
    },
    squareButton: {
        height: width * 0.28,
        width: width * 0.28,
        backgroundColor: Color.yellow_100,
        borderRadius: Border.br_lg,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    squareButtonImage: {
        height: 40,
        width: 40,
        margin: 10,
    },
    points: {
        marginVertical: 3,
        marginRight: 10,
        width: 15,
        height: 15,
    },
    squareButtonText: {
        color: Color.green_700,
    },
});

export default Challenges;