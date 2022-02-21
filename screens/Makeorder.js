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
import { Icon, Header, ListItem } from "react-native-elements";
import { Checkbox } from "react-native-paper";

export default function Makeorder({ navigation }) {
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);

  const [count, setCount] = React.useState(1);

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
              navigation.replace("Cart");
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
          text: "ทำการสั่งซื้อสินค้า",
          style: { color: "#fff" },
        }}
      />
      <ScrollView>
        <View style={styles.container}>
          <View style={{ paddingTop: 2.5, paddingBottom: 2.5 }}></View>
          {/* <View style={styles.listAllButton}>
            <Checkbox
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
              color="#f37721"
            />
            <Text style={styles.listAllButtonText}>เลือกสินค้าทั้งหมด</Text>
            <TouchableOpacity>
              <Icon
                name="trash-can-outline"
                type="material-community"
                size={20}
                marginHorizontal={"45%"}
              />
            </TouchableOpacity>
          </View> */}
          <View>
            <ListItem
              //   bottomDivider
              onPress={() => navigation.push("Address")}
            >
              <Icon
                name="map-marker-radius-outline"
                type="material-community"
                size={20}
                marginHorizontal={3}
              />
              <ListItem.Content>
                <ListItem.Title
                  style={{
                    fontSize: 12,
                    width: "100%",
                  }}
                >
                  ที่อยู่ในการจัดส่ง
                </ListItem.Title>
                <ListItem.Title style={{ fontSize: 10, width: "100%" }}>
                  อามีน สาและ
                </ListItem.Title>
                <ListItem.Title style={{ fontSize: 10, width: "90%" }}>
                  19/2 หมู่ 1 ซ.* หมู่บ้าน/อาคาร บ้านทอน ถ.- ต.โคกเคียน
                  อ.เมืองนราธิวาส จ.นราธิวาส 96000
                </ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
            <View style={{ paddingTop: 2.5, paddingBottom: 2.5 }}></View>

            <ListItem
              //   bottomDivider
              onPress={() => navigation.push("TaxAddress")}
            >
              <Icon
                name="checkbox-blank-circle-outline"
                type="material-community"
                size={20}
                marginHorizontal={3}
              />
              <ListItem.Content>
                <ListItem.Title
                  style={{
                    fontSize: 12,
                    width: "100%",
                  }}
                >
                  ต้องการใบกำกับภาษี
                </ListItem.Title>
                <ListItem.Title
                  style={{ fontSize: 10, width: "90%", color: "red" }}
                >
                  กรณีลูกค้าเลือกไม่รับใบกำกับภาษีแล้ว
                  หากต้องการขอใบกำกับภาษีเต็มรูป
                  สามารถขอได้ภายในวันที่ซื้อสินค้าเท่านั้น
                </ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          </View>
          <View style={{ paddingTop: 5, paddingBottom: 5 }}></View>
          <View style={styles.orderListButton}>
            <View style={{ alignItems: "center", flexDirection: "row" }}>
              <Checkbox
                status={checked1 ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked1(!checked1);
                }}
                color="#f37721"
              />
              <Image
                style={styles.tinyLogo}
                source={require("../src/assets/paint.png")}
              />
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.orderListButtonText}>
                Pumpkin Pro แปรงลูกกลิ้งทาสี ปิกัสโซ่ ขนาด 10 นิ้ว
              </Text>

              <Text style={styles.orderPriceDiscountButtonText}>
                ฿300 <Text style={styles.orderPriceButtonText}>฿350</Text>
              </Text>
            </View>
            <View style={styles.itemboxButton}>
              <TouchableOpacity
                // style={{ left: 5 }}
                onPress={() => {
                  count == 1 ? null : setCount(count - 1);
                }}
              >
                <Text
                  style={{ fontSize: 12, fontWeight: "bold", color: "#ffffff" }}
                >
                  {" "}
                  -{" "}
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  left: 18,
                  fontSize: 12,
                  fontWeight: "bold",
                  color: "#ffffff",
                }}
              >
                {count}
              </Text>
              <TouchableOpacity
                style={{ left: 35 }}
                onPress={() => setCount(count + 1)}
              >
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                    color: "#ffffff",
                  }}
                >
                  {" "}
                  +{" "}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* <View style={{ paddingTop: 2.5, paddingBottom: 2.5 }}></View> */}
          <View style={styles.orderListButton}>
            <View style={{ alignItems: "center", flexDirection: "row" }}>
              <Checkbox
                status={checked2 ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked2(!checked2);
                }}
                color="#f37721"
              />
              <Image
                style={styles.tinyLogo}
                source={require("../src/assets/paint.png")}
              />
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.orderListButtonText}>
                เขาควายห้องน้ำ YALE L5322 US15 สีสเตนเลส
              </Text>

              <Text style={styles.orderPriceDiscountButtonText}>
                ฿199 <Text style={styles.orderPriceButtonText}>฿229</Text>
              </Text>
            </View>
            <View style={styles.itemboxButton}>
              <TouchableOpacity
                // style={{ left: 5 }}
                onPress={() => {
                  count == 1 ? null : setCount(count - 1);
                }}
              >
                <Text
                  style={{ fontSize: 12, fontWeight: "bold", color: "#ffffff" }}
                >
                  {" "}
                  -{" "}
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  left: 18,
                  fontSize: 12,
                  fontWeight: "bold",
                  color: "#ffffff",
                }}
              >
                {count}
              </Text>
              <TouchableOpacity
                style={{ left: 35 }}
                onPress={() => setCount(count + 1)}
              >
                <Text
                  style={{ fontSize: 12, fontWeight: "bold", color: "#ffffff" }}
                >
                  {" "}
                  +{" "}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ paddingTop: 2.5, paddingBottom: 2.5 }}></View>
          <ListItem
            //   bottomDivider
            onPress={() => navigation.push("DeliveryForm")}
            containerStyle={{ backgroundColor: "#f37721" }}
          >
            <Icon
              name="truck-fast-outline"
              type="material-community"
              color="#ffffff"
              size={20}
              marginHorizontal={3}
            />
            <ListItem.Content>
              <ListItem.Title
                style={{
                  fontSize: 12,
                  width: "100%",
                  color: "#ffffff",
                }}
              >
                โปรดเลือก รูปแบบการจัดส่ง
              </ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron iconStyle={{ color: "white" }} />
          </ListItem>
        </View>
      </ScrollView>
      <View style={styles.PriceMakeorderButton}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ paddingLeft: 10, fontSize: 10 }}>
            รายการสั่งซื้อ (2 รายการ)
          </Text>
          <Text style={{ paddingLeft: 10, fontSize: 10 }}>฿499</Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ paddingLeft: 10, fontSize: 10 }}>ส่วนลด</Text>
          <Text style={{ paddingLeft: 10, fontSize: 10 }}>฿0</Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ paddingLeft: 10, fontSize: 10 }}>ค่าจัดส่ง</Text>
          <Text style={{ paddingLeft: 10, fontSize: 10 }}>฿0</Text>
        </View>
      </View>
      <View style={styles.MakeorderButton}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={{ paddingLeft: 10, fontSize: 12 }}>ยอดสุทธิ</Text>
          <Text
            style={{
              position: "absolute",
              paddingLeft: 95,
              color: "#f37721",
              fontSize: 12,
            }}
          >
            ฿499
          </Text>
        </View>

        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: "#f37721",
            alignItems: "center",
            justifyContent: "center", //ฟอนต์ เพิ่มตะกร้าสินค้า
            height: "246%",
            width: "210%",
            left: 15,
            // borderRadius: 10,
            borderTopLeftRadius: 50,
          }}
          onPress={() => navigation.push("PaymentChannel")}
        >
          <Text
            style={{
              fontSize: 16,
              color: "#fff",
              left: 10,
              fontWeight: "bold",
            }}
          >
            ชำระเงิน
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerstatusbar: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingBottom: "30%",
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
  listAllButtonText: {
    marginHorizontal: 12,
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
    color: "#000000",
  },
  listAllButton: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 40,
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "white",
    // top: 10,
    paddingVertical: 8,
    paddingHorizontal: 20,
    // borderRadius: 4,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  tinyLogo: {
    width: 70,
    height: 70,
    marginLeft: 15,
  },
  orderListButtonText: {
    position: "absolute",
    top: 5,
    marginHorizontal: 12,
    width: "175%",
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
    color: "#000000",
  },
  orderListButton: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 100,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "white",
    // top: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
    // borderRadius: 4,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  orderPriceDiscountButtonText: {
    top: 42,
    marginHorizontal: 12,
    fontSize: 16,
    fontWeight: "bold",
    color: "#f37721",
  },
  orderPriceButtonText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000000",
    textDecorationLine: "line-through",
  },
  itemboxButton: {
    position: "absolute",
    right: 0,
    top: 70,
    display: "flex",
    flexDirection: "row",
    width: "36%",
    height: 30,
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#f37721",
    // paddingLeft: 100,
    paddingVertical: 8,
    paddingHorizontal: 22,
    // borderRadius: 4,
    borderTopLeftRadius: 50,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  PriceMakeorderButton: {
    // alignSelf: "center",
    // alignItems: "center",
    display: "flex",
    // flexDirection: "row",
    // bottom: 5,
    width: "100%",
    height: "10%",
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 15,
    // borderRadius: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  MakeorderButton: {
    alignSelf: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    // bottom: 5,
    width: "100%",
    height: "7%",
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 15,
    // borderRadius: 10,
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
