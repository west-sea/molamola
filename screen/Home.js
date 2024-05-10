import {
    Text,
    View,
    Image,
    SafeAreaView,
    ScrollView,
    Button,
    Modal,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
    Dimensions
} from 'react-native';
import Item from '../components/Item';
import { Color, GlobalStyles } from '../GlobalStyle';
import { GlobalContext } from '../global';
import React, { createContext, useContext, useState } from 'react';
// import YellowButton from '../components/YellowButton';


const { width, height } = Dimensions.get('window');
const whiteBoxHeight = height * 0.3;



function Home({ navigation }) {
    const dummyDataList = [
        {
            facilityImage: require('../assets/props/ivy.png'), // 이미지 경로 설정
            facilityName: '덩굴',
            seedPrice: '40',
        },
        {
            facilityImage: require('../assets/props/bicycle.png'), // 이미지 경로 설정
            facilityName: '자전거',
            seedPrice: '35',
        },
        {
            facilityImage: require('../assets/props/light.png'), // 이미지 경로 설정
            facilityName: '전구 장식',
            seedPrice: '30',
        },
        {
            facilityImage: require('../assets/props/wind.png'), // 이미지 경로 설정
            facilityName: '바람개비',
            seedPrice: '30',
        },
        {
            facilityImage: require('../assets/props/gnomes.png'), // 이미지 경로 설정
            facilityName: '정원 노움',
            seedPrice: '40',
        },
    ];

    const [modalVisible, setModalVisible] = useState(false);
    const { mileage, setMileage } = useContext(GlobalContext);
    const { elec, setElec } = useContext(GlobalContext);
    const { water, setWater } = useContext(GlobalContext);
    const { gas, setGas } = useContext(GlobalContext);
    const { tree, setTree } = useContext(GlobalContext);

    const handleModalClick = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    const renderSprouts = () => {
        const sproutNumber = mileage;
        const sprouts = [];
        for (let i = 0; i < sproutNumber; i++) {
            sprouts.push(
                <Image
                    style={{ ...styles.points, marginRight: 'undefined' }}
                    source={require('../assets/garden/sprout.png')}
                />
            );
        }
        for (let i = 0; i < 5 - sproutNumber; i++) {
            sprouts.push(
                <Image
                    style={{ ...styles.points, marginRight: 'undefined', tintColor: Color.gray }}
                    source={require('../assets/garden/sprout.png')}
                />
            );
        }
        return sprouts;
    };


    return (
        <View style={styles.container}>
            {/* <ImageBackground
                style={styles.imageBackground}
                source={require('../assets/garden/elec_safe.png')}
                resizeMode='contain'>
                <ImageBackground
                    style={styles.imageBackground}
                    source={require('../assets/garden/water_safe.png')}
                    resizeMode='contain'>
                        <ImageBackground
                        style={styles.imageBackground}
                        source={require('../assets/garden/gas_safe.png')}
                        resizeMode='contain'>
                            <View style={[styles.whiteBox, { height: whiteBoxHeight }]}>
                                                               
                                <TouchableOpacity
                                    style={styles.nutrient}
                                    // onPress={handlePress}
                                    >
                                    <Text style={styles.buttonText}>영양분 공급</Text>
                                </TouchableOpacity>

                                <View style={styles.buttonsContainer}>
                                    <TouchableOpacity
                                        style={styles.green}
                                        // onPress={handlePress}
                                        >
                                        <Text style={styles.buttonText}>꾸미기</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.green}
                                        // onPress={handlePress}
                                        >
                                        <Text style={styles.buttonText}>소품샵</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                    </ImageBackground>
                </ImageBackground>
            </ImageBackground> */}
            {
                !elec && (
                    (<Image
                        style={styles.imageBackground}
                        source={require('../assets/garden/elec_safe.png')}
                        resizeMode='cover' />)
                )
            }
            {elec &&
                (<Image
                    style={styles.imageBackground}
                    source={require('../assets/garden/elec_danger.png')}
                    resizeMode='cover' />)}
            {!water &&
                (<Image
                    style={styles.waterImage}
                    source={require('../assets/garden/water_safe.png')}
                    resizeMode='contain' />)
            }
            {water &&
                (<Image
                    style={styles.waterImage}
                    source={require('../assets/garden/water_danger.png')}
                    resizeMode='contain' />)
            }


            {(tree == 0) &&
                <Image
                    style={styles.treeImage}
                    source={require('../assets/garden/tree1.png')}
                    resizeMode='contain' />
            }

            {(tree == 1) &&

                <Image
                    style={styles.treeImage}
                    source={require('../assets/garden/tree2.png')}
                    resizeMode='contain' />
            }
            {(tree == 2) &&

                <Image
                    style={styles.treeImage}
                    source={require('../assets/garden/tree3.png')}
                    resizeMode='contain' />
            }
            {(tree == 3) &&

                <Image
                    style={styles.treeImage}
                    source={require('../assets/garden/tree4.png')}
                    resizeMode='contain' />
            }
            {(tree == 4) &&

                <Image
                    style={styles.treeImage}
                    source={require('../assets/garden/tree5.png')}
                    resizeMode='contain' />
            }
            {(tree == 5) &&

                <Image
                    style={styles.treeImage}
                    source={require('../assets/garden/tree6.png')}
                    resizeMode='contain' />
            }
            {(tree == 6) &&

                <Image
                    style={styles.treeImage}
                    source={require('../assets/garden/tree7.png')}
                    resizeMode='contain' />
            }
            {

                <Image
                    style={styles.treeImage}
                    source={require('../assets/garden/tree8.png')}
                    resizeMode='contain' />
            }

            {
                !gas &&
                (<Image
                    style={styles.foilImage}
                    source={require('../assets/garden/gas_safe.png')}
                    resizeMode='contain' />)
            }
            {
                gas &&
                (<Image
                    style={styles.foilImage}
                    source={require('../assets/garden/gas_danger.png')}
                    resizeMode='contain' />)
            }

            <View style={[styles.whiteBox, { height: whiteBoxHeight }]}>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                    <View style={{ flexDirection: 'row' }}>
                        {renderSprouts()}
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ ...styles.pointsContainer, backgroundColor: Color.yellow_100 }}>
                            <Image
                                style={styles.points}
                                source={require('../assets/garden/coin.png')} />
                            <Text >
                                100
                            </Text>
                        </View>
                        <View style={{ ...styles.pointsContainer, backgroundColor: Color.green_100, }}>
                            <Image
                                style={styles.points}
                                source={require('../assets/garden/sprout.png')} />
                            <Text >
                                {mileage}
                            </Text>
                        </View>
                    </View>

                </View>


                <TouchableOpacity
                    style={styles.nutrient}
                    onPress={() => setMileage(mileage - 1)}

                >
                    <Image
                        style={styles.points}
                        source={require('../assets/garden/sprout.png')} />
                    <Text style={styles.buttonText}>영양분 공급</Text>
                </TouchableOpacity>

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        style={styles.green}
                    // onPress={handlePress}
                    >
                        <Text style={styles.buttonText}>꾸미기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.green}
                        onPress={handleModalClick}
                    >
                        <Text style={styles.buttonText}>소품샵</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal
                visible={modalVisible}
                transparent={true}
                onRequestClose={handleCloseModal}
            >
                <View style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={handleCloseModal}>
                            <Text style={styles.backButton}>{'< 뒤로'}</Text>
                        </TouchableOpacity>
                        <Text style={styles.screenTitle}>소품샵</Text>
                    </View>

                    <ScrollView style={styles.container}
                        vertical
                        showsVerticalScrollIndicator={false}>
                        {dummyDataList.map((item, index) => (
                            <Item
                                key={index}
                                facilityImage={item.facilityImage}
                                facilityName={item.facilityName}
                                seedPrice={item.seedPrice}
                            />
                        ))}
                    </ScrollView>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        width: width,
        height: '100%',
        backgroundColor: Color.white,
    },
    imageBackground: {
        position: 'absolute',

        height: width * 1.14,
        width: width,
        aspectRatio: 1,
    },
    waterImage: {
        position: 'absolute',
        width: width,
        aspectRatio: 1,
        marginTop: width * 0.4,
    },
    treeImage: {
        position: 'absolute',
        width: width,
        height: 'undefined',
        aspectRatio: 1,
        alignSelf: 'center',
        top: width * 0.25,
    },
    foilImage: {
        position: 'absolute',
        width: width,
        height: width * 1.26,
        aspectRatio: 1,
        marginTop: width * 0.1,
    },
    whiteBox: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: width * 0.1,
        justifyContent: 'center', // 수직 가운데 정렬
        alignItems: 'center', // 수평 가운데 정렬
        position: 'absolute',
        bottom: 0,
    },
    pointsContainer: {
        flexDirection: 'row',
        padding: 5,
        paddingHorizontal: 20,
        borderRadius: 14,
        margin: 5,
        alignItems: 'center',
    },
    points: {
        marginVertical: 3,
        marginRight: 10,
        width: 15,
        height: 15,
    },
    buttonsContainer: {
        width: width * 0.8,
        flexDirection: 'row', // 수평 방향으로 아이템 배치
        justifyContent: 'space-between', // 아이템 사이에 공간을 균등하게 배치
    },
    imageContainer: {
        position: 'absolute',
        width: '100%',
        top: 0,
        left: 0,
    },
    absoluteImage: {
        width: '100%',
    },
    nutrient: {
        height: 50,
        width: width * 0.8,
        borderRadius: 16,
        backgroundColor: Color.yellow_100,
        justifyContent: 'center', // 수직 가운데 정렬
        alignItems: 'center', // 수평 가운데 정렬
        marginBottom: 20,
        flexDirection: 'row',
        paddingRight: 10,
    },
    green: {
        height: 77,
        width: width * 0.37,
        borderRadius: 16,
        backgroundColor: Color.green_100,
        justifyContent: 'center', // 수직 가운데 정렬
        alignItems: 'center', // 수평 가운데 정렬
    }
});

export default Home;