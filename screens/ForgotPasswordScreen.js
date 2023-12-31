import {Image, Keyboard, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';

const ForgotPasswordScreeen = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [phoneNumber, setPhoneNumberError] = useState('');
  const [showPhoneNumberError, setshowPhoneNumberError] = useState(false);

  const validatePhoneNumber = () => {
    let regex = /^\([6-9][0-9]{2}\) [0-9]{3}-[0-9]{4}$/;
    if (!regex.test(mobileNumber)) {
      setPhoneNumberError('please enter valid number');
      setshowPhoneNumberError(true);
    } else {
      setPhoneNumberError('');
      setshowPhoneNumberError(false);
    }
  };

  const numberFormat = text => {
    //remove all the unwanted texts
    const removeText = text.replace(/[^0-9]/g, '');

    // format the number
    let formattedNumber = '';
    // let i = 0;
    const length = removeText.length;
    for (var i = 0; i < length; i++) {
      // while (i < length) {
      if (i === 0) {
        formattedNumber += '(';
      } else if (i === 3) {
        formattedNumber += ') ';
      } else if (i === 6) {
        formattedNumber += '-';
      }
      formattedNumber += removeText.charAt(i);
      // i++
    }
    return formattedNumber;
  };
  const handleMobileNumberChange = text => {
    const formattedNumber = numberFormat(text);
    setMobileNumber(formattedNumber);
  };
  const [selectedCountry, setSelectedCountry] = useState('+91 IN');
  const [isClicked, setIsClicked] = useState(false);
  const [data, setData] = useState([
    {
      itemName: '+1 US',
    },
    {
      itemName: '+91 IN',
    },
    {
      itemName: '+1 CA',
    },
  ]);

  const dissmissKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps="handled"
      onPress={dissmissKeyboard}>
      <View style={styles.container}>
        <Image source={require('../assets/images/logo1.png')} style={styles.img1} />
      </View>
      <View>
        <View style={styles.dropdownMenu}>
          <TouchableOpacity
            style={styles.dropdownSelector}
            onPress={() => {
              setIsClicked(!isClicked);
            }}>
            <Text style={styles.dropdownText}>{selectedCountry}</Text>
          </TouchableOpacity>
          <TextInput
            placeholder="Mobile Number"
            placeholderTextColor="#808B96"
            style={styles.mobileNo}
            keyboardType="phone-pad"
            maxLength={14}
            value={mobileNumber}
            onChangeText={handleMobileNumberChange}
            onFocus={() => setPhoneNumberError('')}
          />
        </View>

        <View style={styles.dropAndError}>
          {isClicked && (
            <View style={styles.dropdownArea}>
              {data.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.countryitem,
                    item.itemName == selectedCountry &&
                      styles.selectedCountryItem,
                  ]}
                  onPress={() => {
                    setSelectedCountry(item.itemName);
                    setIsClicked(false);
                  }}>
                  <Text
                    style={[
                      styles.countryText,
                      item.itemName == selectedCountry &&
                        styles.selectedCountryText,
                    ]}>
                    {item.itemName}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
          {showPhoneNumberError && (
            <Text
              style={[
                styles.errorText,
                {
                  marginLeft: isClicked ? 10 : 100,
                },
              ]}>
              {phoneNumber}
            </Text>
          )}
        </View>
      </View>
      <View style={styles.nextButton}>
        <TouchableOpacity style={styles.button} onPress={validatePhoneNumber}>
          <Text style={styles.next}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default ForgotPasswordScreeen;
const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#f6f6f6',
  },

  img1: {
    width: 180,
    height: 180,
    margin: 25,
    alignSelf: 'center',
  },
  mobileNo: {
    borderColor: '#81C0EF',
    borderRadius: 8,
    padding: 10,
    fontSize: 15,
    backgroundColor: 'white',
    width: '78%',
    color: 'black',
  },
  next: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  button: {
    marginHorizontal: 15,
    backgroundColor: '#52850f', //green
    padding: 10,
    borderRadius: 25,
    width: '90%',
  },
  errorText: {
    // left: 40,
    color: 'red',
    // right: 80,
  },
  dropdownMenu: {
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 6,
    borderColor: '#81C0EF',
    marginHorizontal: 20,
    width: '85%',
  },
  dropdownSelector: {
    width: 70,
    height: 50,
    backgroundColor: '#dadbdd',
    color: 'black',
    justifyContent: 'center',
  },
  dropdownText: {
    fontSize: 19,
    color: 'black',
  },
  dropdownArea: {
    // alignItems: 'center',
    width: 70,
    borderLeftWidth: 1,
    marginLeft: 20,
    borderRightWidth: 1,
    backgroundColor: 'white',
    borderColor: '#81C0EF',
    shadowColor: 'black',
    elevation: 8,
    // right: 40,
  },
  dropAndError: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  countryText: {
    fontSize: 20,
    padding: 1,
    color: 'black',
  },
  countryitem: {
    color: 'black',
  },
  nextButton: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
    width: '90%',
    marginTop: 20,
  },
  selectedCountryItem: {
    backgroundColor: '#52850f',
    color: 'white',
  },
  selectedCountryText: {
    color: 'white',
  },
});
