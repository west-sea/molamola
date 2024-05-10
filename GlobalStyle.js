import { StyleSheet } from 'react-native';

/* fonts */
export const FontFamily = {
    robotoBold: 'Roboto-Bold',
    robotoMedium: 'Roboto-Medium',
};

/* font sizes */
export const FontSize = {
    size_xl: 25,
    size_lgi: 20,
    size_mid: 19,
    size_sm: 15,
    size_xs: 13,
    size_smi: 10,
};
/* Colors */
export const Color = {
    white: '#fff',
    black: '#000',
    darkgray: '#2F322B',
    gray: '#B3B3B3',
    green_100: '#EDF9D8',
    green_700: '#A6DF3E',
    yellow_100: '#FFF8D6',
    yellow_700: '#FFDC33',
};

/* border radiuses */
export const Border = {
    br_sm: 10,
    br_base: 14,
    br_lg: 16,
};

export const GlobalStyles = StyleSheet.create({
    h1: {
        fontFamily: FontFamily.robotoBold,
        fontSize: FontSize.size_xl,
        padding: 20,
        paddingTop: 31,
    },
    h2: {
        fontFamily: FontFamily.robotoBold,
        fontSize:FontSize.size_mid,
    }
});
