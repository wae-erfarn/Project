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
import { RadioButton } from "react-native-paper";

export default function DeliveryForm({ navigation }) {
  const [checked, setChecked] = React.useState("");

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
          text: "รูปแบบการจัดส่ง",
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
          <ListItem
            bottomDivider

            // onPress={() => navigation.push("DeliveryForm")}
            // containerStyle={{ backgroundColor: "#f37721" }}
          >
            <View style={{ right: 5 }}>
              <RadioButton
                value="first"
                status={checked === "first" ? "checked" : "unchecked"}
                onPress={() => setChecked("first")}
                color="#f37721"
              />
            </View>
            <ListItem.Content>
              <ListItem.Title
                style={{
                  fontSize: 12,
                  width: "100%",
                  right: 5,
                  // color: "#ffffff",
                }}
              >
                จัดส่งสินค้าปกติ รับสินค้าภายใน 1 - 2 วันทำการ
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
          <ListItem
            bottomDivider
            // onPress={() => navigation.push("DeliveryForm")}
            // containerStyle={{ backgroundColor: "#f37721" }}
          >
            <View style={{ right: 5 }}>
              <RadioButton
                value="second"
                status={checked === "second" ? "checked" : "unchecked"}
                onPress={() => setChecked("second")}
                color="#f37721"
              />
            </View>
            <ListItem.Content>
              <ListItem.Title
                style={{
                  fontSize: 12,
                  width: "100%",
                  right: 5,
                  // color: "#ffffff",
                }}
              >
                รับสินค้าที่สำนักงานใหญ่ โคกเคียน นราธิวาส{" "}
                <Text style={{ color: "#f37721", fontWeight: "bold" }}>
                  :ฟรี{" "}
                </Text>
                ตั้งแต่เวลา 08.00-17.00 น. (ส-พฤ) | แจ้งชำระเงินภายใน 16.00 น.{" "}
                <ListItem.Title
                  style={{
                    fontSize: 12,
                    width: "100%",
                    right: 5,
                    color: "red",
                  }}
                >
                  *รอรับสินค้าหลังจากแจ้งชำระเงิน 30 นาที
                  *กรณีลูกค้าชำระเงินหลังเวลา 16.00 น.
                  สามารถรับสินค้าที่สำนักงานใหญ่ในวันถัดไป
                </ListItem.Title>
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </View>
      </ScrollView>

      <View style={{ alignItems: "center", paddingTop: 5, bottom: 5 }}>
        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>ดำเนินการต่อ</Text>
        </TouchableOpacity>
      </View>
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

  confirmButtonText: {
    marginHorizontal: 12,
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
  confirmButton: {
    display: "flex",
    flexDirection: "row",
    width: "98%",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#90c6a4",
    backgroundColor: "#f37721",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
});
