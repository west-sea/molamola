import { Image, View, Text, StyleSheet } from 'react-native';
import { Border, Color, GlobalStyles, FontFamily } from '../GlobalStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';

const EnergyInput = ({
    EnergyType,
}) => {

    const { width, height } = Dimensions.get('window');

    return (
        <View style={{width: width, height: height, backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>

        </View>
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

export default EnergyInput;
