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

export default function Favorite({ navigation }) {
  return (
    <View style={styles.containerstatusbar}>
      <Header
        placement="center"
        backgroundColor="#f37721"
        containerStyle={{
          borderBottomWidth: 0,
          height: Platform.select({
            android: 70,
            default: 70,
          }),
        }}
        leftComponent={
          <TouchableOpacity
            onPress={() => {
              navigation.replace("Index");
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
          text: "รายการโปรด",
          style: { color: "#fff" },
        }}
        rightComponent={
          <TouchableOpacity
            onPress={() => {
              navigation.replace("Cart");
            }}
            style={styles.Cartcontainer}
          >
            <Icon
              style={styles.Cartimage}
              name="cart-outline"
              type="material-community"
              size={25}
              color="#ffffff"
            />
          </TouchableOpacity>
        }
      />
      <ScrollView>
        <View style={styles.container}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerstatusbar: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingBottom: 600,
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
  Cartcontainer: {
    position: "absolute",
    alignSelf: "flex-end",
    right: 10,
  },
  Cartimage: {
    width: 30,
    height: 30,
  },
});
