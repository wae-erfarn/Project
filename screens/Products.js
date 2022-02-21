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
  Share,
} from "react-native";
import { Badge, Icon, withBadge, Header } from "react-native-elements";

import ViewSlider from "react-native-view-slider";

const { width, height } = Dimensions.get("window");

const onShare = async () => {
  try {
    const result = await Share.share({
      message: "https://sricharoen-narathiwat.ml/connect.php",
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
};

export default function Products({ navigation }) {
  const [heart, setHeart] = useState(false);
  const [count, setCount] = useState(1);

  return (
    <View style={styles.containerstatusbar}>
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
          text: "รายละเอียดสินค้า",
          style: { color: "#fff" },
        }}
        rightComponent={
          <TouchableOpacity
            onPress={() => {
              navigation.push("Cart");
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
        <>
          <ViewSlider
            renderSlides={
              <>
                <View style={styles.viewBox}>
                  <Image
                    source={require("../src/assets/product1.png")}
                    style={{ height: 200, width }}
                  />
                </View>
              </>
            }
            style={styles.slider} //Main slider container style
            height={200} //Height of your slider
            slideCount={1} //How many views you are adding to slide
            dots={true} // Pagination dots visibility true for visibile
            dotActiveColor="#f37721" //Pagination dot active color
            dotInactiveColor="white" // Pagination do inactive color
            dotsContainerStyle={styles.dotContainer} // Container style of the pagination dots
            autoSlide={false} //The views will slide automatically
            slideInterval={3000} //In Miliseconds
          />
        </>
        <View style={styles.container}>
          <View
            style={{
              alignItems: "center",
              paddingTop: 5,
            }}
          >
            <View style={styles.ProductnameButton}>
              <View style={{ flex: 1, flexDirection: "column" }}>
                <Text style={{ fontSize: 16, color: "#f37721" }}>฿140</Text>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <Text
                    style={{
                      fontSize: 12,
                      textDecorationLine: "line-through",
                      textDecorationStyle: "solid",
                      color: "#000000",
                    }}
                  >
                    ฿145
                  </Text>
                  <Text style={{ left: 10, fontSize: 12 }}>-3%</Text>
                </View>

                <Text style={{ bottom: 10 }}>
                  ดอกบัว ปูนเขียว ขนาด 50 กก.ดอกบัว ปูนเขียว ขนาด 50 กก.
                </Text>

                <View style={styles.flashsale}>
                  <Text style={styles.flashsaletext}>ลดราคา</Text>
                </View>
              </View>

              <View>
                <Text
                  style={{
                    textAlign: "right",
                    fontSize: 12,
                    color: "black",
                    paddingTop: 2,
                  }}
                >
                  ยังไม่มีคะแนน
                </Text>
                <Text
                  style={{
                    textAlign: "right",
                    fontSize: 10,
                    color: "grey",
                    paddingTop: 5,
                    paddingBottom: 10,
                  }}
                >
                  คลังสินค้า: 999
                </Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                >
                  <View style={{ paddingRight: 10 }}>
                    <TouchableOpacity onPress={() => setHeart(!heart)}>
                      <Icon
                        type="material-community"
                        color="#545454"
                        name={heart ? "heart" : "heart-outline"}
                      />
                    </TouchableOpacity>
                    <Text
                      style={{
                        textAlign: "right",
                        fontSize: 10,
                        color: "grey",
                      }}
                    >
                      ถูกใจ
                    </Text>
                  </View>

                  <TouchableOpacity onPress={onShare}>
                    <Icon
                      name="share-variant"
                      type="material-community"
                      color="#545454"
                    />

                    <Text
                      style={{
                        textAlign: "right",
                        fontSize: 10,
                        color: "grey",
                      }}
                    >
                      แบ่งปัน
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              {/* <View>
                <Text style={{ textAlign: "right", fontSize: 12 }}>
                  ยังไม่มีคะแนน
                </Text>
                <Text style={{ textAlign: "right", fontSize: 12 }}>
                  คลังสินค้า 99
                </Text>
              </View> */}
            </View>
            <View style={[styles.ProductdetailsButton, { marginTop: 5 }]}>
              <View style={{ flex: 1, flexDirection: "column" }}>
                <Text style={{ fontSize: 16, color: "#f37721" }}>
                  รายละเอียดสินค้า
                </Text>
                <Text style={{ paddingTop: 10, fontSize: 12 }}>
                  ปูนซีเมนต์ผสม ตราบัวเขียว ปูนซีเมนต์ตราบัวเขียว
                  เป็นปูนซีเมนต์ผสม ที่ผลิตตามมาตรฐานผลิตภัณฑ์อุตสาหกรรม มอก.
                  80-2550 ปูนตราบัวเขียวมีคุณสมบัติเหนียวลื่น
                  ระยะเวลาแห้งตัวพอเหมาะ ยึดเกาะได้ดีเหมาะกับงานประเภทต่างๆ
                  ดังนี้{" "}
                </Text>
                <Text style={{ paddingTop: 5, fontSize: 12 }}>• งานก่ออิฐ</Text>
                <Text style={{ fontSize: 12 }}>• งานฉาบปูน </Text>
                <Text style={{ fontSize: 12 }}>• งานก่อสร้างอาคารขนาดเล็ก</Text>
              </View>
            </View>

            <View style={[styles.ProductfeatureButton, { marginTop: 5 }]}>
              <View style={{ flex: 1, flexDirection: "column" }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: "#f37721",
                    paddingBottom: 15,
                  }}
                >
                  คุณสมบัติ
                </Text>
                {/* <Text style={{ paddingTop: 10, fontSize: 12 }}>
                  ดอกบัว ปูนเขียว ขนาด 50 กก.
                </Text> */}
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.textStyle}>รุ่น</Text>
                  <Text style={[styles.textStyle, { textAlign: "left" }]}>
                    -
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.textStyle}>แบรนด์</Text>
                  <Text style={[styles.textStyle, { textAlign: "left" }]}>
                    ดอกบัว
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.textStyle}>ความกว้าง</Text>
                  <Text style={[styles.textStyle, { textAlign: "left" }]}>
                    41 เซนติเมตร
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.textStyle}>ความยาว</Text>
                  <Text style={[styles.textStyle, { textAlign: "left" }]}>
                    60 เซนติเมตร
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.textStyle}>ความสูง</Text>
                  <Text style={[styles.textStyle, { textAlign: "left" }]}>
                    12 เซนติเมตร
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.textStyle}>น้ำหนัก</Text>
                  <Text style={[styles.textStyle, { textAlign: "left" }]}>
                    50 กก.
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.textStyle}>สี</Text>
                  <Text style={[styles.textStyle, { textAlign: "left" }]}>
                    สีเทา
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.textStyle}>หน่วยนับ</Text>
                  <Text style={[styles.textStyle, { textAlign: "left" }]}>
                    ถุง
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.ProductreviewButton, { marginTop: 5 }]}>
              <View style={{ flex: 1, flexDirection: "column" }}>
                <Text style={{ fontSize: 16, color: "#f37721" }}>รีวิว</Text>
                <Text style={{ paddingTop: 10, fontSize: 12 }}>
                  ยังไม่มีรีวิว
                </Text>
                <View style={styles.hr}></View>

                <View
                  style={{
                    marginTop: 10,
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity>
                    <Text>ดูรีวิวทั้งหมด</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.AddtoCartButton}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <TouchableOpacity
            style={{ left: 10 }}
            onPress={() => {
              count == 1 ? null : setCount(count - 1);
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}> - </Text>
          </TouchableOpacity>
          <Text style={{ left: 50, fontSize: 16, fontWeight: "bold" }}>
            {count}
          </Text>
          <TouchableOpacity
            style={{ left: 90 }}
            onPress={() => setCount(count + 1)}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}> + </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: "#f37721",
            alignItems: "center",
            justifyContent: "center", //ฟอนต์ เพิ่มตะกร้าสินค้า
            height: "208%",
            width: "210%",
            left: 15,
            borderRadius: 10,
          }}
        >
          <Icon name="cart-outline" type="material-community" color="#ffffff" />

          <Text style={{ fontSize: 12, color: "#fff" }}>เพิ่มลงตะกร้า</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerstatusbar: {
    flex: 1,
    // backgroundColor: "white",
    backgroundColor: "#e4e4e4",
  },
  container: {
    flex: 1,
    paddingBottom: "12%",
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

  viewBox: {
    paddingHorizontal: 20,
    justifyContent: "center",
    width: width,
    padding: 10,
    alignItems: "center",
    height: 200,
  },
  slider: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  dotContainer: {
    backgroundColor: "transparent",
    position: "absolute",
    bottom: -12,
  },
  ProductnameButton: {
    display: "flex",
    flexDirection: "row",
    width: "96%",
    height: "23%",
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 15,
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
  ProductdetailsButton: {
    display: "flex",
    flexDirection: "row",
    width: "96%",
    height: "30%",
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 15,
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
  ProductfeatureButton: {
    display: "flex",
    flexDirection: "row",
    width: "96%",
    height: "31%",
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 15,
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
  textStyle: {
    fontSize: 12,
    color: "black",
    flex: 1,
  },
  flashsale: {
    width: "36%",
    height: "20%",
    backgroundColor: "#e7170b",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  flashsaletext: {
    fontWeight: "bold",
    fontSize: 10,
    textAlign: "center",
    color: "white",
  },
  ProductreviewButton: {
    display: "flex",
    flexDirection: "row",
    width: "96%",
    height: "16%",
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 15,
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
  hr: {
    width: "100%",
    height: 0.5,
    backgroundColor: "#444",
    marginTop: 6,
  },
  AddtoCartButton: {
    alignSelf: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    bottom: 5,
    width: "96%",
    height: "8%",
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 15,
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
