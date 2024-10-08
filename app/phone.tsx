import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";

import {
  CountryPicker,
  CountryList,
  CountryButton,
} from "react-native-country-codes-picker";

type RootStackParamList = {
  Login: undefined;
  MobileVerification: undefined;
};

type MobileVerificationScreenNavigationProp = {
  goBack: () => void;
};

function ListHeaderComponent({
  setShow,
  countries,
  lang,
  onPress,
}: {
  setShow: any;
  countries: any;
  lang: any;
  onPress: any;
}) {
  return (
    <View
      style={{
        paddingBottom: 20,
      }}
    >
      <View className="flex-row bg-white w-full items-center">
        <TouchableOpacity onPress={() => setShow(false)}>
          <Image
            source={require("@/assets/icons/back.png")}
            className="w-6 h-6 m-3"
          />
        </TouchableOpacity>
        <Text className="text-left text-base text-black text-bold font-['Alexandria-Light']">
          Select a country
        </Text>
      </View>
      {countries?.map((country: any, index: any) => {
        return (
          <CountryButton
            key={index}
            item={country}
            name={country?.name?.[lang || "en"]}
            onPress={() => onPress(country)}
          />
        );
      })}
    </View>
  );
}

export default function MobileVerificationScreen() {
  const navigation = useNavigation<MobileVerificationScreenNavigationProp>();

  const [mobileNumber, setMobileNumber] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState("+1");
  const [countryFlag, setCountryFlag] = useState("🇺🇸"); // Add this line to store the country flag

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View className="flex-1 justify-center bg-white">
      {/* Back Button */}
      <View className="flex-row absolute top-10 left-4 items-center">
        <TouchableOpacity onPress={handleGoBack} className="mr-2">
          <Image
            source={require("@/assets/icons/back.png")}
            className="w-10 h-10 m-3"
          />
        </TouchableOpacity>
        <Text className="pl-10 pt-1 text-xl font-['Alexandria-Regular']">
          Mobile verification
        </Text>
      </View>

      {/* Phone Icon */}
      <View
        className="absolute bottom-0 bg-white rounded-t-[70px] pt-[70px] px-[40px] w-full items-center"
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
        <Image
          source={require("@/assets/icons/mobile_pass.png")}
          className="w-[150px] h-[150px] self-center"
        />
        {/* Instruction Text */}
        <Text className="text-center text-base my-[50px] font-['Alexandria-Light']">
          Please enter your mobile number
        </Text>

        {/* Mobile Number Input */}
        <View className="flex-row items-center my-5 gap-4">
          <TouchableOpacity
            onPress={() => setShow(true)}
            style={{
              width: "20%", // Reduced width to accommodate the phone input
              height: 60,
              backgroundColor: "white",
              padding: 10,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#8cd96e",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 24 }}>{countryFlag}</Text>
            <Text style={{ color: "black", fontSize: 16 }}>{countryCode}</Text>
          </TouchableOpacity>
          <TextInput
            style={{
              flex: 1,
              height: 60,
              backgroundColor: "white",
              padding: 10,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#8cd96e",
              fontSize: 16,
            }}
            placeholder="Enter your number"
            keyboardType="numeric"
            value={mobileNumber}
            onChangeText={(text) =>
              setMobileNumber(text.replace(/[^0-9]/g, ""))
            }
          />
          <CountryPicker
            show={show}
            lang="en"
            pickerButtonOnPress={(item: any) => {
              setCountryCode(item.dial_code);
              setCountryFlag(item.flag);
              setShow(false);
            }}
            ListHeaderComponent={() =>
              ListHeaderComponent({
                setShow,
                countries: [],
                lang: "en",
                onPress: () => {},
              })
            }
            popularCountries={["en", "ua", "pl"]}
            style={{
              modal: {
                padding: 100,
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0,0,0,0.5)",
              },
              countryName: {
                color: "black",
              },
              dialCode: {
                color: "black",
              },
            }}
          />
        </View>

        {/* Terms and Conditions */}
        <View className="flex-row items-center mb-4">
          <TouchableOpacity
            onPress={() => setIsChecked(!isChecked)}
            className="mr-2"
          >
            <View
              className={`w-6 h-6 rounded-full border-2 ${
                isChecked ? "border-[#8cd96e]" : "border-gray-300"
              } justify-center items-center`}
            >
              {isChecked && (
                <View className="w-3 h-3 rounded-full bg-[#8cd96e]" />
              )}
            </View>
          </TouchableOpacity>
          <Text className="text-sm text-black font-['Alexandria-Light']">
            I agree to the{" "}
            <Text className="text-[#8cd96e] underline">Terms & Conditions</Text>{" "}
            and <Text className="text-[#8cd96e] underline">Privacy Policy</Text>
            .
          </Text>
        </View>

        {/* Continue Button */}
        <TouchableOpacity
          className={`w-full py-3 mb-[200px] rounded-2xl items-center ${
            isChecked ? "bg-[#8cd96e]" : "bg-gray-300"
          }`}
          disabled={!isChecked}
          onPress={() => router.push("/phone-2")}
        >
          <Text className="text-white text-center font-['Alexandria-Regular']">
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
