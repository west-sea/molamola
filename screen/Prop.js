import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Button,
} from 'react-native';
import Item from '../components/Item';
import FontSize from '../GlobalStyle';

const Prop = () => {
  
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


  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: 16,
  },
});

export default Prop;
