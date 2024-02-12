/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component, useCallback, memo} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  SafeAreaView,
  Alert,
  View,
  Image,
  TouchableOpacity,
  NativeModules,
} from 'react-native';
import KYCSDK from 'react-native-scsoft-kycsdk';
import {
  HeadPoseDetails,
  SelfiePhotoDetails,
  NfcDetails,
  IdBackPhotoDetails,
  IdFrontPhotoDetails,
  NfcOptions,
} from 'react-native-scsoft-kycsdk';
import {
  showFrontId,
  showBackId,
  showSelfie,
  showNfc,
  showHeadPose,
} from 'react-native-scsoft-kycsdk';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'constant',
      asyncdeviceinfo: {},
      idFrontPhotoDetails: null,
      idBackPhotoDetails: null,
      nfcDetails: null,
    };
  }

  state = {
    idFrontPhotoDetails: null,
    idBackPhotoDetails: null,
    nfcDetails: null,
  };

  componentDidMount() {
    this.idFrontPhoto();
  }

  idFrontPhoto = async () => {
    try {
      const details = await KYCSDK.showFrontId();
      if (details) {
        this.setState({idFrontPhotoDetails: details});

        this.idBackPhoto();
      }
    } catch (error) {
      console.error('Error fetching ID front photo:', error);
      Alert.alert('Error', 'Failed to fetch ID front photo details.');
    }
  };

  idBackPhoto = async () => {
    try {
      const details = await KYCSDK.showBackId();
      if (details) {
        this.setState({idBackPhotoDetails: details});

        this.nfcRead();
      }
    } catch (error) {
      console.error('Error fetching ID front photo:', error);
      Alert.alert('Error', 'Failed to fetch ID front photo details.');
    }
  };

  nfcRead = async () => {
    try {
      const nfcOptions = {
        documentNumber: 'A45G25775',
        dateOfBirth: '000130',
        dateOfExpiry: '340116',
      };

      const details = await KYCSDK.showNfc(nfcOptions);
      if (details) {
        this.setState({nfcDetails: details});

        Alert.alert(
          'Akış Tamamlandı',
          'Tüm süreç başarılı bir şekilde tamamlandı.',
        );
      }
    } catch (error) {
      console.error('Error fetching ID front photo:', error);
      Alert.alert('Error', 'Failed to fetch ID front photo details.');
    }
  };

  render() {
    const {idFrontPhotoDetails} = this.state;
    const {idBackPhotoDetails} = this.state;
    const {nfcDetails} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        {idFrontPhotoDetails && idFrontPhotoDetails.base64_idFrontImage ? (
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: `data:image/jpeg;base64,${idFrontPhotoDetails.base64_idFrontImage}`,
              }}
            />
          </View>
        ) : (
          <Text>No image available</Text>
        )}
        {idBackPhotoDetails && idBackPhotoDetails.base64_idBackImage ? (
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: `data:image/jpeg;base64,${idBackPhotoDetails.base64_idBackImage}`,
              }}
            />
          </View>
        ) : (
          <Text>No image available</Text>
        )}
        {nfcDetails && nfcDetails.passportModel ? (
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: `data:image/jpeg;base64,${nfcDetails.passportModel.faceImageBase64}`,
              }}
            />
          </View>
        ) : (
          <Text>No image available</Text>
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  imageContainer: {
    width: 300,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'left',
    color: '#333333',
    margin: 5,
  },
  tabBar: {
    flexDirection: 'row',
    borderTopColor: '#333333',
    borderTopWidth: 1,
  },
  tab: {
    height: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    color: '#333333',
  },
  boldText: {
    fontWeight: '700',
  },
});
