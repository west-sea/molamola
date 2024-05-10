import { Image, View, Text, StyleSheet } from 'react-native';
import { Border, Color, GlobalStyles, FontFamily } from '../GlobalStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Buy = ({
    productImage,
    productName,
    productContent,
    productPrice
}) => {
    return (
        <TouchableOpacity onPress={console.log("happy")}>
            <View style={{ width: '90%', alignSelf: 'center' }}>
                <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row' }}>
                    <Image
                        style={styles.squareImage}
                        source={productImage} />
                    <View style={{ width: '50%' }}>
                        <Text style={GlobalStyles.h2}>{productName}</Text>
                        <Text style={styles.content}>{productContent}</Text>
                        <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent:'flex-end' }}>
                            <Image
                                style={styles.points}
                                source={require('../assets/garden/coin.png')}
                            />
                            <Text style={{ alignSelf: 'flex-end', color: Color.yellow_700, marginBottom: 3 }}>{productPrice}</Text>

                        </View>
                    </View>
                </View>
                <View
                    style={{
                        borderBottomColor: Color.gray,
                        borderBottomWidth: 1,
                        alignSelf: 'stretch',
                        marginBottom: 10,
                    }}
                />
            </View>
        </TouchableOpacity>

    );

}
const styles = StyleSheet.create({
    squareImage: {
        width: 100,
        height: 100,
        margin: 20,
        marginBottom: 10,
        borderRadius: Border.br_lg,
    },
    content: {
        fontFamily: FontFamily.robotoMedium,
        color: Color.gray,
    },
    points: {
        marginVertical: 3,
        marginRight: 10,
        width: 15,
        height: 15,
    },
});

export default Buy;
