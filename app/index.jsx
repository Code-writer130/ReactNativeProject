import { Link } from "expo-router";
import { Image, Platform, View, Text, SafeAreaView } from "react-native";
import { StatusBar } from "react-native-web";
import profileImage from "../assets/images/profile.png";
import docImage from "../assets/images/doctor-profile.png";
import rightArrow from "../assets/images/arrow-right.png";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Octicons from "@expo/vector-icons/Octicons";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import docImage1 from "../assets/images/doctor2.png";
import { SimpleLineIcons, Entypo, AntDesign } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <>
      <SafeAreaView className="m-5">
        {/* Header section */}
        <View className="flex-row justify-between align-items: center">
          <View>
            <Text className="text-[#8696BB] text-[15px] mb-2">Hello,</Text>
            <Text className="font-bold text-[20px]">Hi James</Text>
          </View>
          <View>
            <Image source={profileImage} className="w-12 h-12 rounded-full" />
          </View>
        </View>
        {/* First card */}
        <View className="pt-8">
          <View className="bg-[#4894FE] rounded-2xl pt-4 px-5 pb-5 ">
            <View className="flex-row justify-between content-center items-center">
              <View className="flex-row ">
                <Image source={docImage} />
                <View className="ml-3">
                  <Text className="leading-7 text-white font-bold text-[15px]">
                    Dr.Imran Syahir
                  </Text>
                  <Text className="text-[#CBE1FF]">General Doctor</Text>
                </View>
              </View>
              <View>
                <Image source={rightArrow} className="w-5 h-5" />
              </View>
            </View>
            <View className="h-0.5 bg-white my-4"></View>
            {/* The bottom section after the line */}
            <View className="flex-row ">
              <View className="flex-row items-center">
                <MaterialCommunityIcons
                  name="calendar-multiselect"
                  size={24}
                  color="white"
                />
                <Text className="text-white ml-2 text-[12px]">
                  Sunday,12 June
                </Text>
              </View>
              <View className="flex-row items-center ml-10">
                <Octicons name="clock" size={24} color="white" />
                <Text className="text-white ml-2 text-[12px]">
                  11:00 - 12:00 AM
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* Search section */}
        <View className="flex-row items-center mt-8 ml-4">
          <Feather name="search" size={24} color="#8696BB" />
          <Text className="text-[#8696BB] ml-2 text-[16px]">
            Search doctor or health issue
          </Text>
        </View>
        {/* Icons card */}
        <View className="flex-row justify-around mt-14">
          <View className="items-center">
            <FontAwesome6 name="virus-covid" size={24} color="#4894FE" />
            <Text className="pt-8 text-[#8696BB]">Covid 19</Text>
          </View>
          <View className="items-center">
            <FontAwesome6 name="user-doctor" size={24} color="#4894FE" />
            <Text className="pt-8 text-[#8696BB]">Doctor</Text>
          </View>
          <View className="items-center">
            <Ionicons name="bandage" size={24} color="#4894FE" />
            <Text className="pt-8 text-[#8696BB]">Medecine</Text>
          </View>
          <View className="items-center">
            <FontAwesome5 name="hospital" size={24} color="#4894FE" />
            <Text className="pt-8 text-[#8696BB]">Hospital</Text>
          </View>
        </View>
        {/* Next  section */}
        <View>
          <Text className="mt-8 font-bold text-[17px]">Near Doctor</Text>
          <View className="flex-row  items-center mt-8">
            <View className="flex-row items-center">
              <Image source={docImage1} className="ml-4 w-15 h-15" />
              <View className="ml-2 ">
                <Text className="text-[#0D1B34] font-extrabold text-[18px] mb-2 ">
                  Dr. Joseph Brostito
                </Text>
                <Text className="text-[#8696BB] text-[16px]">
                  Dental Specialist
                </Text>
              </View>
            </View>
            <View className="flex-row items-center ml-6">
              <SimpleLineIcons name="location-pin" size={28} color="#8696BB" />
              <Text className="text-[16px] text-[#8696BB] ">1.2 KM</Text>
            </View>
          </View>
          <View className="flex-row gap-6 mt-10 ml-2">
            <View className="flex-row items-center">
              <Octicons name="clock" size={24} color="#FEB052" />
              <Text className="text-[#FEB052] ml-2">4,8(120 Reviews)</Text>
            </View>
            <View className="flex-row items-center">
              <Octicons name="clock" size={24} color="#4894FE" />
              <Text className="text-[#4894FE] ml-2">Open at 17:00</Text>
            </View>
          </View>
        </View>
        {/* Footer section */}
        <View className="mt-20 flex-row justify-around items-center">
          <View className="flex-row items-center">
            <Entypo name="home" size={30} color="#63B4FF" />
            <Text className="text-[#63B4FF] ml-2 font-bold">Home</Text>
          </View>
          <View>
            <MaterialCommunityIcons
              name="calendar-multiselect"
              size={30}
              color="#63B4FF"
            />
          </View>
          <View>
            <Ionicons
              name="chatbox-ellipses-outline"
              size={30}
              color="#63B4FF"
            />
          </View>
          <View>
            <AntDesign name="user" size={30} color="#63B4FF" />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
