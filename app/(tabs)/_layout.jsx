import { View, Text } from "react-native";
import { Tabs, Redirect } from "expo-router";

const TabIcon = () => {
  return <View></View>;
};

const TabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
