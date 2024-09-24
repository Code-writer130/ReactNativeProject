import { Link } from "expo-router";
import { Image, Platform, View, Text, SafeAreaView } from "react-native";
import { StatusBar } from "react-native-web";
import profileImage from "../assets/images/profile.png";

export default function HomeScreen() {
  return (
    <>
      <SafeAreaView className="m-3">
        {/* Header section */}
        <View className="flex-row justify-between align-items: center">
          <View>
            <Text className="text-[#8696BB] text-[15px]">Hello,</Text>
            <Text className="font-bold text-[20px]">Hi James</Text>
          </View>
          <View>
            <Image source={profileImage} className="w-12 h-12 rounded-full" />
          </View>
        </View>
        {/* First card */}
        <View></View>
      </SafeAreaView>
    </>
  );
}
