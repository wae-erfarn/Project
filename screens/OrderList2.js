import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
  Keyboard,
  StatusBar,
  Alert,
  SafeAreaView,
  ScrollView,
  Button,
} from "react-native";
import { Icon, Header } from "react-native-elements";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import WaitForPay from "./WaitForPay";
import PayDone from "./PayDone";
import Shipped from "./Shipped";

const Tab = createMaterialTopTabNavigator();

export default function OrderList2({ navigation }) {
  return (
    <View style={styles.containerstatus}>
      <Header
        placement="center"
        backgroundColor="#f37721"
        containerStyle={{ borderBottomWidth: 0 }}
        leftComponent={
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.goBackcontainer}
          >
            <Icon
              style={styles.goBackimage}
              name="angle-left"
              type="font-awesome"
              size={25}
              color="#fff"
            />
          </TouchableOpacity>
        }
        centerComponent={{
          text: "รายการคำสั่งซื้อของฉัน",
          style: { color: "#fff" },
        }}
      />
      <Tab.Navigator
        // initialRouteName="Shipped"
        tabBarOptions={{
          activeTintColor: "#FFFFFF",
          inactiveTintColor: "#F8F8F8",
          style: {
            backgroundColor: "#f37721",
          },
          labelStyle: {
            textAlign: "center",
          },
          indicatorStyle: {
            borderBottomColor: "#ffffff",
            borderBottomWidth: 2,
            width: 80,
            left: "5.5%",
          },
        }}
      >
        <Tab.Screen
          name="WaitForPay"
          component={WaitForPay}
          options={{
            title: "รอชำระเงิน",
            headerShown: false,
            tabBarLabel: "รอชำระเงิน",
            // tabBarIcon: ({ color, size }) => (
            //   <MaterialCommunityIcons name="heart" color={color} size={size} />
            // ),
          }}
        />
        <Tab.Screen
          name="PayDone"
          component={PayDone}
          options={{
            title: "ชำระเงินแล้ว",
            headerShown: false,
            tabBarLabel: "ชำระเงินแล้ว",
            // tabBarIcon: ({ color, size }) => (
            //   <MaterialCommunityIcons name="heart" color={color} size={size} />
            // ),
          }}
        />
        <Tab.Screen
          name="Shipped"
          component={Shipped}
          options={{
            title: "ส่งสินค้าแล้ว",
            headerShown: false,
            tabBarLabel: "ส่งสินค้าแล้ว",
            // tabBarIcon: ({ color, size }) => (
            //   <MaterialCommunityIcons name="heart" color={color} size={size} />
            // ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  containerstatus: {
    flex: 1,
  },
  container: {
    flex: 1,
    // paddingBottom: 600,
    backgroundColor: "#e4e4e4",
  },
  goBackcontainer: {
    position: "absolute",
    left: 15,
    top: -2,
  },
  goBackimage: {
    width: 30,
    height: 30,
  },
  textStyle: {
    fontSize: 14,
    color: "black",
    flex: 1,
  },
  hr: {
    width: "21%",
    height: 2,
    backgroundColor: "#f37721",
    marginTop: 6,
    marginLeft: 15,
  },
});
