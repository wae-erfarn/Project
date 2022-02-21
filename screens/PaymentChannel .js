import React, { useState, useEffect } from "react";
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
import { Icon, Avatar, ListItem, Divider, Header } from "react-native-elements";

export default function PaymentChannel({ navigation }) {
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
          text: "ช่องทางการชำระเงิน",
          style: { color: "#fff" },
        }}
      />
      {/* <View
          style={{
            backgroundColor: "#f37721",
            width: "100%",
            height: "7%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", color: "white" }}>การแจ้งเตือน</Text>
        </View> */}
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.textstyle}>กรุณาเลือกวิธีการชำระเงิน</Text>
        </View>
      </ScrollView>

      {/* <View style={{ alignItems: "center", paddingTop: 5, bottom: 5 }}>
        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>ดำเนินการต่อ</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  containerstatus: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingBottom: 30,
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
  textstyle: {
    padding: 10,
    left: 10,
    fontSize: 13,
  },
  // confirmButtonText: {
  //   marginHorizontal: 12,
  //   color: "#fff",
  //   fontSize: 10,
  //   fontWeight: "bold",
  // },
  // confirmButton: {
  //   display: "flex",
  //   flexDirection: "row",
  //   width: "98%",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   // backgroundColor: "#90c6a4",
  //   backgroundColor: "#f37721",
  //   paddingVertical: 12,
  //   paddingHorizontal: 20,
  //   borderRadius: 10,
  //   elevation: 2,
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 2,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.5,
  // },
});
