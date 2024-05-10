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
    Dimensions,
    TextInput,
} from 'react-native';
import { useState } from 'react';
import {
    LineChart
} from "react-native-chart-kit";
import { Border, Color, GlobalStyles, FontFamily } from '../GlobalStyle';
// import YellowButton from '../components/YellowButton';

import { EnergyInput } from '../components/EnergyInput';

const { width, height } = Dimensions.get('window');
const whiteBoxHeight = height * 0.3;

const ddimage = require('../assets/garden/circle_garden.png')

function Statistics({ navigation }) {

    const [elecvisible, setElecVisible] = useState(false);
    const toggleElecOverlay = () => {
        setElecVisible(!elecvisible);
    };

    const [watervisible, setWaterVisible] = useState(false);
    const toggleWaterOverlay = () => { setWaterVisible(!watervisible); };

    const [gasvisible, setGasVisible] = useState(false);
    const toggleGasOverlay = () => { setGasVisible(!gasvisible); };

    return (
        <View style={styles.container}>
            {elecvisible && (
                <View style={styles.overlay}>
                    <View style={{ width: '100%', height: '100%', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                        <TextInput
                            style={{ ...GlobalStyles.h2, textAlign: 'center' }}
                            placeholder="사용량"
                            autoCapitalize="none"
                        />
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={{ padding: 20, }}>
                                <Text style={{ ...GlobalStyles.h2, color: Color.yellow_700 }}>
                                    입력
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ padding: 20 }} onPress={toggleElecOverlay}>
                                <Text style={{ ...GlobalStyles.h2, color: Color.gray }}>
                                    취소
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )}
            {watervisible && (
                <View style={styles.overlay}>
                    <View style={{ width: '100%', height: '100%', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                        <TextInput
                            style={{ ...GlobalStyles.h2, textAlign: 'center' }}
                            placeholder="사용량"
                            autoCapitalize="none"
                        />
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={{ padding: 20, }}>
                                <Text style={{ ...GlobalStyles.h2, color: Color.yellow_700 }}>
                                    입력
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ padding: 20 }} onPress={toggleWaterOverlay}>
                                <Text style={{ ...GlobalStyles.h2, color: Color.gray }}>
                                    취소
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )}
            {gasvisible && (
                <View style={styles.overlay}>
                    <View style={{ width: '100%', height: '100%', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                        <TextInput
                            style={{ ...GlobalStyles.h2, textAlign: 'center' }}
                            placeholder="사용량"
                            autoCapitalize="none"
                        />
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={{ padding: 20, }}>
                                <Text style={{ ...GlobalStyles.h2, color: Color.yellow_700 }}>
                                    입력
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ padding: 20 }} onPress={toggleGasOverlay}>
                                <Text style={{ ...GlobalStyles.h2, color: Color.gray }}>
                                    취소
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )}
            <ScrollView
                style={{
                    ...GlobalStyles.scroll,
                    overflow: 'hidden',
                }}
                showsVerticalScrollIndicator={false}>
                <Text style={{ ...GlobalStyles.h1, marginTop: 15 }}>나의 사용량</Text>
                <Text style={{ ...GlobalStyles.h2, marginLeft: 20 }}>전력</Text>
                <View style={{ alignSelf: 'center' }}>
                    <LineChart
                        data={{
                            labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                            datasets: [
                                {
                                    data: [
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100
                                    ]
                                }
                            ]
                        }}
                        width={Dimensions.get("window").width * 0.90} // from react-native
                        height={180}
                        yAxisLabel="$"
                        yAxisSuffix="k"
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                            backgroundColor: Color.yellow_100,
                            backgroundGradientFrom: Color.yellow_100,
                            backgroundGradientTo: Color.yellow_100,
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            style: {
                                borderRadius: 16
                            },
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: Color.yellow_700
                            }
                        }}
                        bezier
                        style={{
                            marginVertical: 8,
                            borderRadius: 16
                        }}
                    />
                </View>
                <TouchableOpacity style={{ alignSelf: 'flex-end', marginRight: 20 }} onPress={
                    () => {
                        toggleElecOverlay();
                    }}>
                    <Text style={styles.content}>인증하기</Text>
                </TouchableOpacity>

                <Text style={{ ...GlobalStyles.h2, marginLeft: 20 }}>수도</Text>
                <View style={{ alignSelf: 'center' }}>
                    <LineChart
                        data={{
                            labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                            datasets: [
                                {
                                    data: [
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100
                                    ]
                                }
                            ]
                        }}
                        width={Dimensions.get("window").width * 0.90} // from react-native
                        height={180}
                        yAxisLabel="$"
                        yAxisSuffix="k"
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                            backgroundColor: Color.yellow_100,
                            backgroundGradientFrom: Color.yellow_100,
                            backgroundGradientTo: Color.yellow_100,
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            style: {
                                borderRadius: 16
                            },
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: Color.yellow_700
                            }
                        }}
                        bezier
                        style={{
                            marginVertical: 8,
                            borderRadius: 16
                        }}
                    />
                </View>
                <TouchableOpacity style={{ alignSelf: 'flex-end', marginRight: 20 }}>
                    <Text style={styles.content} onPress={
                        () => {
                            toggleWaterOverlay();
                        }}>인증하기</Text>
                </TouchableOpacity>

                <Text style={{ ...GlobalStyles.h2, marginLeft: 20 }}>가스</Text>
                <View style={{ alignSelf: 'center' }}>
                    <LineChart
                        data={{
                            labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                            datasets: [
                                {
                                    data: [
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100
                                    ]
                                }
                            ]
                        }}
                        width={Dimensions.get("window").width * 0.90} // from react-native
                        height={180}
                        yAxisLabel="$"
                        yAxisSuffix="k"
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                            backgroundColor: Color.yellow_100,
                            backgroundGradientFrom: Color.yellow_100,
                            backgroundGradientTo: Color.yellow_100,
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            style: {
                                borderRadius: 16
                            },
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: Color.yellow_700
                            }
                        }}
                        bezier
                        style={{
                            marginVertical: 8,
                            borderRadius: 16
                        }}
                    />
                </View>
                <TouchableOpacity style={{ alignSelf: 'flex-end', marginRight: 20 }} onPress={
                    () => {
                        toggleGasOverlay();
                    }}>
                    <Text style={styles.content}>인증하기</Text>
                </TouchableOpacity>
            </ScrollView>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        width: width,
        height: '100%',
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
    content: {
        fontFamily: FontFamily.robotoMedium,
        color: Color.gray,
    },
    overlay: {
        width: width,
        height: height,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'centers'
    }
});

export default Statistics;