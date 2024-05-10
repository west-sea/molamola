import React, { useState } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity, Modal, Button } from 'react-native';
import { Color, FontSize, FontFamily } from '../GlobalStyle.js';

const Item = ({
  facilityImage,
  facilityName,
  seedPrice,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleItemClick = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };
  
  const handlePurchase = () => {

  };

  return (
    <View style={{ width: '100%', marginTop: 10, marginBottom: 10}}>
      {/* Item을 클릭했을 때 모달을 토글하는 TouchableOpacity */}
      <TouchableOpacity onPress={handleItemClick}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '95%',
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ ...style.imageContainer, marginRight:20}}>
              <Image
                style={{ ...style.profileImage2 }}
                contentFit="cover"
                source={facilityImage}
              />
            </View>
            <View style={{ flexDirection: 'vertical', alignItems: 'end'}}>
              <Text
                style={{ ...style.body, marginTop:20, marginRight: 10 }}
                numberOfLines={1}
                ellipsizeMode="tail">
                {facilityName}
              </Text>
              <Text
                style={{ ...style.body2, marginTop:10, marginRight: 10 }}
                numberOfLines={1}
                ellipsizeMode="tail">
                {seedPrice}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {/* 모달 창 */}
      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={handleCloseModal}
        animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={{width:'100%', flexDirection: 'row', alignItems: 'center', justifyContent:'flex-start'}}>
              <TouchableOpacity style={styles.backButton} onPress={handleCloseModal}>
                <Image
                  source={require('../assets/chevron_left_24px.png')}/>
              </TouchableOpacity>
              <Text style={styles.modalTitle}>{facilityName}</Text>
            </View>
            <View style={{ ...style.imageContainer, width: 200, height: 200, marginTop: 20, marginBottom: 20}}>
              <Image
                style={{...style.profileImage2, width:180, height:180}}
                contentFit="cover"
                source={facilityImage}
              />
            </View>
            {/* 모달 창에 원하는 내용을 추가할 수 있습니다 */}
            <View style={{width:'100%', flexDirection: 'row', justifyContent:'flex-end'}}>
              <TouchableOpacity style={{...styles.textbutton, color: Color.green_700}} onPress={handlePurchase}>
                구매
              </TouchableOpacity>
              <TouchableOpacity style={{...styles.textbutton, color: Color.gray}} onPress={handleCloseModal}>
                취소
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export const style = StyleSheet.create({
  profileImage2: {
    width: 60,
    height: 60,
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 5,
    borderWidth: 3,
    borderColor: Color.green_700,
    padding: 10,
  },
  body: {
    fontSize: FontSize.size_mid,
    color: Color.black,
    fontWeight: '500',
    textTransform: 'capitalize',
    fontFamily: FontFamily.robotoBold,
    textAlign: 'left',
    letterSpacing: 0,
  },
  body2: {
    color: Color.darkgray,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: '500',
    textTransform: 'capitalize',
    textAlign: 'left',
    letterSpacing: 0,
  },
});

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalTitle: {
    color: Color.black,
    fontSize: FontSize.size_lgi,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: '500',
    textTransform: 'capitalize',
    textAlign: 'left',
    letterSpacing: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  textbutton: {
    backgroundColor: 'transparent',
    padding: 10,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: '500',
  },
});

export default Item;