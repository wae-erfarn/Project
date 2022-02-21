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
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function EditProfile({ navigation }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [password, setPassword] = useState("");
  const [idcard, setIdcard] = useState("");

  const [image, setImage] = useState(null);

  // const [user, setUser] = useState(null);

  // const Async = () => {
  //   AsyncStorage.getItem("ُEmail").then((value) => {
  //     if (value !== null) {
  //       setEmail(value);
  //     } else {
  //       setEmail("");
  //     }
  //   });
  // };
  // console.log(email);

  // const load = async () => {
  //   let email = await AsyncStorage.getItem("Email");
  //   fetch("https://sricharoen-narathiwat.ml/profile.php?email=" + email)
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       setUser(responseJson);
  //       // Showing response message coming from server after inserting records.
  //       //       Alert.alert(responseJson);
  //       // navigation.navigate('Profile');
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "android") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
    // load();
    // Async();
  }, []);
  // console.log(user);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

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
          text: "ข้อมูลส่วนตัว",
          style: { color: "#fff" },
        }}
      />

      <ScrollView>
        <View style={styles.container}>
          <View
            style={{ backgroundColor: "#f37721", width: "100%", height: "23%" }}
          >
            <View
              style={{
                paddingTop: 12,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity onPress={pickImage}>
                {image ? (
                  <Image
                    source={{ uri: image }}
                    style={{ width: 50, height: 50, borderRadius: 50 }}
                  />
                ) : (
                  <Icon
                    name="user-circle"
                    type="font-awesome"
                    size={50}
                    color="#fff"
                  />
                )}
              </TouchableOpacity>
            </View>

            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                paddingTop: 20,
              }}
            >
              <View style={styles.nameButton}>
                <Text style={styles.nameButtonText}>Test Test</Text>
              </View>
            </View>
          </View>

          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                height: 44,
                backgroundColor: "white",
              }}
            >
              <Text style={[styles.textStyle, { paddingLeft: 18 }]}>
                รหัสลูกค้า
              </Text>
              <Text
                style={{
                  color: "#f37721",
                  paddingTop: 3,
                  right: 117,
                }}
              >
                00000001
              </Text>
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
                ชื่อ-นามสกุล<Text style={{ color: "red" }}>*</Text>
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
                ยืนยันรหัสผ่าน<Text style={{ color: "red" }}>*</Text>
              </Text>
              <TextInput
                style={styles.inputprofile}
                textContentType="password"
                color="#f37721"
                paddingHorizontal={15}
                minLength={8}
                autoCapitalize="none"
                onChangeText={(password) => setPassword(password)}
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
                เลขที่บัตรประชาชน
              </Text>
              <TextInput
                style={styles.inputprofile}
                textContentType="creditCardNumber"
                color="#f37721"
                paddingHorizontal={15}
                maxLength={13}
                minLength={13}
                keyboardType="phone-pad"
                onChangeText={(idcard) => setIdcard(idcard)}
              />
            </View>
            <Divider />

            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title
                  style={{
                    fontSize: 10,
                    marginHorizontal: 3,
                    fontWeight: "bold",
                  }}
                >
                  วันเกิด
                </ListItem.Title>
              </ListItem.Content>
            </ListItem>

            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title
                  style={{
                    fontSize: 10,
                    marginHorizontal: 3,
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  * กรุณาป้อนข้อมูล
                </ListItem.Title>
              </ListItem.Content>
            </ListItem>
          </View>

          <View style={{ alignItems: "center", paddingTop: 5 }}>
            <TouchableOpacity style={styles.saveButton} disabled={true}>
              <Text style={styles.saveButtonText}>บันทึก</Text>
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: "center", paddingTop: 5 }}>
            <TouchableOpacity
              style={styles.deliveryAddressButton}
              onPress={() => {
                navigation.navigate("Address");
              }}
            >
              <Text style={styles.deliveryAddressButtonText}>
                ที่อยู่ในการจัดส่ง
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: "center", paddingTop: 5 }}>
            <TouchableOpacity
              style={styles.taxInvoiceAddressButton}
              onPress={() => {
                navigation.navigate("TaxAddress");
              }}
            >
              <Text style={styles.taxInvoiceAddressButtonText}>
                ที่อยู่ใบกำกับภาษี
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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

  saveButtonText: {
    marginHorizontal: 12,
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
  saveButton: {
    display: "flex",
    flexDirection: "row",
    width: "98%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#90c6a4",
    // backgroundColor: "#2e9b57",
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

  deliveryAddressButtonText: {
    marginHorizontal: 12,
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
  deliveryAddressButton: {
    display: "flex",
    flexDirection: "row",
    width: "98%",
    alignItems: "center",
    justifyContent: "center",
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

  taxInvoiceAddressButtonText: {
    marginHorizontal: 12,
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
  taxInvoiceAddressButton: {
    display: "flex",
    flexDirection: "row",
    width: "98%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#232428",
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
