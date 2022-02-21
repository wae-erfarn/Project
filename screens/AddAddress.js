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

export default function AddAddress({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [villageNo, setVillageNo] = useState("");
  const [lane, setLane] = useState("");
  const [village, setVillage] = useState("");
  const [road, setRoad] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [subdistrict, setSubdistrict] = useState("");

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
          text: "ที่อยู่ในการจัดส่ง",
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
          <View style={styles.space}></View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              height: 44,
              backgroundColor: "white",
            }}
          >
            <Text style={[styles.textStyle, { paddingLeft: 18 }]}>
              ชื่อผู้รับ<Text style={{ color: "red" }}>*</Text>
            </Text>
            <TextInput
              style={styles.inputprofile}
              // value={user.name}
              textContentType="name"
              color="#f37721"
              paddingHorizontal={15}
              autoCapitalize="none"
              onChangeText={(name) => setName(name)}
            />
          </View>
          <Divider />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              height: 44,
              backgroundColor: "white",
            }}
          >
            <Text style={[styles.textStyle, { paddingLeft: 18 }]}>
              E-mail<Text style={{ color: "red" }}>*</Text>
            </Text>
            <TextInput
              style={styles.inputprofile}
              textContentType="emailAddress"
              // value={user.email}
              color="#f37721"
              paddingHorizontal={15}
              autoCapitalize="none"
              onChangeText={(email) => setEmail(email)}
            />
          </View>
          <Divider />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              height: 44,
              backgroundColor: "white",
            }}
          >
            <Text style={[styles.textStyle, { paddingLeft: 18 }]}>
              เบอร์โทรศัพท์<Text style={{ color: "red" }}>*</Text>
            </Text>
            <TextInput
              style={styles.inputprofile}
              textContentType="telephoneNumber"
              // value={user.telephone}
              color="#f37721"
              paddingHorizontal={15}
              maxLength={10}
              minLength={10}
              keyboardType="phone-pad"
              onChangeText={(telephone) => setTelephone(telephone)}
            />
          </View>
          <Divider />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              height: 44,
              backgroundColor: "white",
            }}
          >
            <Text style={[styles.textStyle, { paddingLeft: 18 }]}>
              เลขที่<Text style={{ color: "red" }}>*</Text>
            </Text>
            <TextInput
              style={styles.inputprofile}
              textContentType="addressCity"
              color="#f37721"
              paddingHorizontal={15}
              keyboardType="numbers-and-punctuation"
              onChangeText={(houseNo) => setHouseNo(houseNo)}
            />
          </View>
          <Divider />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              height: 44,
              backgroundColor: "white",
            }}
          >
            <Text style={[styles.textStyle, { paddingLeft: 18 }]}>
              หมู่<Text style={{ color: "red" }}>*</Text>
            </Text>
            <TextInput
              style={styles.inputprofile}
              textContentType="addressCity"
              color="#f37721"
              paddingHorizontal={15}
              keyboardType="numbers-and-punctuation"
              onChangeText={(villageNo) => setVillageNo(villageNo)}
            />
          </View>
          <Divider />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              height: 44,
              backgroundColor: "white",
            }}
          >
            <Text style={[styles.textStyle, { paddingLeft: 18 }]}>ซอย</Text>
            <TextInput
              style={styles.inputprofile}
              textContentType="addressCity"
              color="#f37721"
              paddingHorizontal={15}
              keyboardType="numbers-and-punctuation"
              onChangeText={(lane) => setLane(lane)}
            />
          </View>
          <Divider />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              height: 44,
              backgroundColor: "white",
            }}
          >
            <Text style={[styles.textStyle, { paddingLeft: 18 }]}>
              หมู่บ้าน / อาคาร
            </Text>
            <TextInput
              style={styles.inputprofile}
              textContentType="addressCity"
              color="#f37721"
              paddingHorizontal={15}
              keyboardType="numbers-and-punctuation"
              onChangeText={(village) => setVillage(village)}
            />
          </View>
          <Divider />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              height: 44,
              backgroundColor: "white",
            }}
          >
            <Text style={[styles.textStyle, { paddingLeft: 18 }]}>ถนน</Text>
            <TextInput
              style={styles.inputprofile}
              textContentType="addressCity"
              color="#f37721"
              paddingHorizontal={15}
              keyboardType="numbers-and-punctuation"
              onChangeText={(road) => setRoad(road)}
            />
          </View>
          <Divider />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              height: 44,
              backgroundColor: "white",
            }}
          >
            <Text style={[styles.textStyle, { paddingLeft: 18 }]}>
              รหัสไปรษณีย์
              <Text style={{ color: "red", fontSize: 6 }}>
                {" "}
                * ใส่ตัวเลข 5 ตัว
              </Text>
            </Text>
            <TextInput
              style={styles.inputprofile}
              textContentType="addressCity"
              color="#f37721"
              paddingHorizontal={15}
              maxLength={5}
              minLength={5}
              keyboardType="phone-pad"
              onChangeText={(zipcode) => setZipcode(zipcode)}
            />
          </View>
          <Divider />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              height: 44,
              backgroundColor: "white",
            }}
          >
            <Text style={[styles.textStyle, { paddingLeft: 18 }]}>
              จังหวัด<Text style={{ color: "red", fontSize: 6 }}> *</Text>
            </Text>
            <TextInput
              style={styles.inputprofile}
              textContentType="addressCity"
              color="#f37721"
              paddingHorizontal={15}
              keyboardType="numbers-and-punctuation"
              onChangeText={(province) => setProvince(province)}
            />
          </View>
          <Divider />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              height: 44,
              backgroundColor: "white",
            }}
          >
            <Text style={[styles.textStyle, { paddingLeft: 18 }]}>
              เขต/อำเภอ<Text style={{ color: "red", fontSize: 6 }}> *</Text>
            </Text>
            <TextInput
              style={styles.inputprofile}
              textContentType="addressCity"
              color="#f37721"
              paddingHorizontal={15}
              keyboardType="numbers-and-punctuation"
              onChangeText={(district) => setDistrict(district)}
            />
          </View>
          <Divider />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              height: 44,
              backgroundColor: "white",
            }}
          >
            <Text style={[styles.textStyle, { paddingLeft: 18 }]}>
              แขวง/ตำบล<Text style={{ color: "red", fontSize: 6 }}> *</Text>
            </Text>
            <TextInput
              style={styles.inputprofile}
              textContentType="addressCity"
              color="#f37721"
              paddingHorizontal={15}
              keyboardType="numbers-and-punctuation"
              onChangeText={(subdistrict) => setSubdistrict(subdistrict)}
            />
          </View>
          <Divider />

          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title
                style={{
                  fontSize: 7,
                  marginHorizontal: 3,
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                * โปรดกรอกข้อมูลจริงให้ถูกต้อง
                เพราะมีผลต่อการจัดส่งสินค้าให้แก่ท่าน
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </View>
      </ScrollView>

      <View style={{ alignItems: "center", paddingTop: 5, bottom: 5 }}>
        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>ยืนยัน</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 10,
    color: "black",
    flex: 1,
    fontWeight: "bold",
  },
  inputprofile: {
    width: "55%",
    height: 35,
    backgroundColor: "#E4E4E4",
    borderRadius: 12,
    right: 10,
  },
  input: {
    width: "55%",
    height: 35,
    backgroundColor: "#E4E4E4",
    borderRadius: 12,
    paddingHorizontal: 10,
  },
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
  nameButtonText: {
    marginHorizontal: 12,
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    color: "#f37721",
  },
  nameButton: {
    display: "flex",
    flexDirection: "row",
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 4,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
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
