import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { useGlobalFonts } from '@/constants/fonts';

import SelectModal from '../components/modals/SelectModal';

const LoginScreen = () => {
  const fontsLoaded = useGlobalFonts();

  const [languageModalVisible, setLanguageModalVisible] = useState(false);
  const [currencyModalVisible, setCurrencyModalVisible] = useState(false);

  // Add this function to handle language selection
  const handleLanguageSelect = (language: string) => {
    // Implement language change logic here
    console.log(`Selected language: ${language}`);
    setLanguageModalVisible(false);
  };

  const handleCurrencySelect = (currency: string) => {
    // Implement currency change logic here
    console.log(`Selected currency: ${currency}`);
    setCurrencyModalVisible(false);
  };

  if (!fontsLoaded) {
    return null; // or a loading indicator
  }

  return (
    <View className="flex-1 bg-white" id='login'>
      <StatusBar backgroundColor="#8cd96e" barStyle="light-content" />
      
      {/* Logo */}
      <View className="items-center pt-[130px]">
        <Image 
          source={require('../assets/images/logo.png')} 
          className="w-[90px] h-[90px]"
        />
      </View>

      <View className="flex-1 items-center justify-start pt-[50px] pb-[10px]">
        {/* Welcome Back Text */}
        <Text className="font-['Alexandria-Regular'] text-2xl">Welcome Back</Text>
        <Text className="font-['Alexandria-Light'] text-base text-[#777] mb-[10px]">Login to continue</Text>

        {/* Wrapped content with top rounded corners and shadow */}
        <View 
          className="absolute bottom-0 bg-white rounded-t-[60px] pt-[70px] px-[40px] w-full items-center"
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: -10,
            },
            shadowOpacity: 0.6,
            shadowRadius: 5,
            elevation: 20,
          }}
        >
        
        
          <TouchableOpacity className="bg-[#8cd96e] py-[27px] px-[80px] rounded-[30px] mb-[40px] w-full items-center"
          style={{
            shadowColor: "#777",
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowRadius: 5,
            elevation: 6,
          }}>
            <Text className="font-['Alexandria-Regular'] text-white text-base py-[20px]">Continue with Phone Number</Text>
          </TouchableOpacity>

          {/* Register Button */}
          <TouchableOpacity className="bg-white py-[25px] px-[80px] rounded-[30px] mb-[40px] w-full items-center"
          style={{
            shadowColor: "#777",
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowRadius: 5,
            elevation: 6,
          }}>
            <Text className="font-['Alexandria-Light'] text-black text-base py-[20px]">Register</Text>
          </TouchableOpacity>

          {/* Google and Facebook login options */}
          <View className="flex-row justify-between w-full px-[20px]">
            <TouchableOpacity className="bg-white flex-row items-center py-[30px] px-[60px] rounded-[50px] border border-[#ddd]"
          style={{
            shadowColor: "#777",
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowRadius: 5,
            elevation: 6,
          }}>
              <Image 
                source={require('../assets/images/google.png')} 
                className="w-[20px] h-[20px] mr-[10px]"
              />
              <Text className="font-['Alexandria-Light'] text-sm">Google</Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-white flex-row items-center py-[30px] px-[60px] rounded-[50px] border border-[#ddd]"
          style={{
            shadowColor: "#777",
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowRadius: 5,
            elevation: 6,
          }}>
              <Image 
                source={require('../assets/images/facebook.png')} 
                className="w-[20px] h-[20px] mr-[10px]"
              />
              <Text className="font-['Alexandria-Light'] text-sm">Facebook</Text>
            </TouchableOpacity>
          </View>

          {/* Footer: Language and Currency Options */}
          <View className="flex-row justify-between w-full my-[40px] px-[40px]">
            <TouchableOpacity 
              className="flex-row items-center" 
              onPress={() => setLanguageModalVisible(true)}
            >
              <Text className="font-['Alexandria-Light'] text-sm text-black mr-1">English{' '}</Text>
              <Image 
                source={require('../assets/icons/down-arrow.png')} 
                className="w-[20px] h-[20px] mr-[10px]"
              />
            </TouchableOpacity>
            <TouchableOpacity 
              className="flex-row items-center" 
              onPress={() => setCurrencyModalVisible(true)}
            >
              <Text className="font-['Alexandria-Light'] text-sm text-black mr-1">EUR{' '}</Text>
              <Image 
                source={require('../assets/icons/down-arrow.png')} 
                className="w-[20px] h-[20px] mr-[10px]"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Add SelectModal for language selection */}
      <SelectModal
        isVisible={languageModalVisible}
        onClose={() => setLanguageModalVisible(false)}
        onSelect={handleLanguageSelect}
        options={[
          { label: 'English', value: 'en' },
          { label: 'Español', value: 'es' },
          { label: 'portugués', value: 'pt' },
        ]}
        title="Select Language"
      />

      {/* Add SelectModal for currency selection */}
      <SelectModal
        isVisible={currencyModalVisible}
        onClose={() => setCurrencyModalVisible(false)}
        onSelect={handleCurrencySelect}
        options={[
          { label: 'EUR', symbol: '€', value: 'EUR' },
          { label: 'INR', symbol: '₹', value: 'USD' },
          { label: 'NGN', symbol: '₦', value: 'NGN' },
          { label: 'PLN', symbol: 'zł', value: 'PLN' },
          { label: 'RUB', symbol: '₽', value: 'RUB' },
          { label: 'THB', symbol: '฿', value: 'THB' },
          { label: 'TRY', symbol: '₺', value: 'TRY' },
          { label: 'TWD', symbol: '$', value: 'TWD' },
          { label: 'VND', symbol: '₫', value: 'VND' },
          { label: 'ZAR', symbol: 'R', value: 'ZAR' },
        ]}
        title="Select Currency"
      />
    </View>
  );
};

export default LoginScreen;