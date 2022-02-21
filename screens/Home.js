import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
  LogBox,
} from "react-native";
import { Icon, Header, Avatar } from "react-native-elements";

import ViewSlider from "react-native-view-slider";

const { width, height } = Dimensions.get("window");

export default function Home({ navigation }) {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState("");
  const numColumns = 2;

  const Products = () => {
    fetch("https://sricharoen-narathiwat.ml/products.php")
      .then((response) => response.json())
      .then((json) => setProducts(json))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  useEffect(() => {
    Products();
  }, []);

  return (
    <View>
      <StatusBar animated={true} />

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
          //           <Avatar
          //   size="large"
          //   icon={{name: 'rocket', color: "#f37721", type: 'font-awesome'}}
          //   overlayContainerStyle={{backgroundColor: 'white'}}
          //   onPress={() => console.log("Works!")}
          //   activeOpacity={0.7}
          //   containerStyle={{flex: 4, marginTop: 75}}
          // />
          <Avatar
            style={styles.Logo}
            source={require("../src/assets/logo.png")}
            overlayContainerStyle={{ backgroundColor: "white" }}
          />
        }
        centerComponent={
          <View style={styles.inputView}>
            <TextInput
              placeholder="ค้นหาสินค้า..."
              style={{ flex: 1, fontSize: 12 }}
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              onChangeText={(search) => setSearch(search)}
            />
            <TouchableOpacity>
              <Icon name="search" type="font-awesome" size={15} color="gray" />
            </TouchableOpacity>
          </View>
        }
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
        <View style={styles.container}>
          <>
            <ViewSlider
              renderSlides={
                <>
                  <View style={styles.viewBox}>
                    <Image
                      source={require("../src/assets/Slide-1.png")}
                      style={{ height: 200, width }}
                    />
                  </View>
                  <View style={styles.viewBox}>
                    <Image
                      source={require("../src/assets/Slide-2.png")}
                      style={{ height: 200, width }}
                    />
                  </View>
                  <View style={styles.viewBox}>
                    <Image
                      source={require("../src/assets/Slide-3.png")}
                      style={{ height: 200, width }}
                    />
                  </View>
                </>
              }
              style={styles.slider} //Main slider container style
              height={200} //Height of your slider
              slideCount={3} //How many views you are adding to slide
              dots={true} // Pagination dots visibility true for visibile
              dotActiveColor="#f37721" //Pagination dot active color
              dotInactiveColor="white" // Pagination do inactive color
              dotsContainerStyle={styles.dotContainer} // Container style of the pagination dots
              autoSlide={false} //The views will slide automatically
              slideInterval={3000} //In Miliseconds
            />
          </>

          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.textStyle, { paddingLeft: 5, paddingTop: 5 }]}>
              หมวดหมู่สินค้า
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Category");
              }}
            >
              <Text
                style={[
                  styles.textStyle,
                  { textAlign: "right", paddingRight: 5, paddingTop: 5 },
                ]}
              >
                เพิ่มเติม
              </Text>
            </TouchableOpacity>
          </View>

          <>
            <ViewSlider
              renderSlides={
                <>
                  <View style={styles.categoryViewBox}>
                    <View style={styles.categoryContainer}>
                      <TouchableOpacity
                        style={styles.categoryBtn}
                        onPress={() => {}}
                      >
                        <View style={styles.categoryIcon}>
                          <Image
                            style={styles.categoryLogo}
                            source={require("../src/assets/truck.png")}
                          />
                          <Text style={styles.categoryBtnTxt}>ปูน</Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.categoryBtn}
                        onPress={() => {}}
                      >
                        <View style={styles.categoryIcon}>
                          <Image
                            style={styles.categoryLogo}
                            source={require("../src/assets/metal.png")}
                          />
                          <Text style={styles.categoryBtnTxt}>เหล็ก</Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.categoryBtn}
                        onPress={() => {}}
                      >
                        <View style={styles.categoryIcon}>
                          <Image
                            style={styles.categoryLogo}
                            source={require("../src/assets/paint.png")}
                          />
                          <Text style={styles.categoryBtnTxt}>ผลิตภัณฑ์สี</Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.categoryBtn}
                        onPress={() => {}}
                      >
                        <View style={styles.categoryIcon}>
                          <Image
                            style={styles.categoryLogo}
                            source={require("../src/assets/toilet.png")}
                          />
                          <Text style={styles.categoryBtnTxt}>ห้องน้ำ</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.categoryViewBox}>
                    <View style={styles.categoryContainer}>
                      <TouchableOpacity
                        style={styles.categoryBtn}
                        onPress={() => {}}
                      >
                        <View style={styles.categoryIcon}>
                          <Image
                            style={styles.categoryLogo}
                            source={require("../src/assets/handtools.png")}
                          />
                          <Text style={styles.categoryBtnTxt}>
                            เครื่องมือช่าง
                          </Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.categoryBtn}
                        onPress={() => {}}
                      >
                        <View style={styles.categoryIcon}>
                          <Image
                            style={styles.categoryLogo}
                            source={require("../src/assets/tiles.png")}
                          />
                          <Text style={styles.categoryBtnTxt}>พื้นและผนัง</Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.categoryBtn}
                        onPress={() => {}}
                      >
                        <View style={styles.categoryIcon}>
                          <Image
                            style={styles.categoryLogo}
                            source={require("../src/assets/window.png")}
                          />
                          <Text style={styles.categoryBtnTxt}>
                            ประตูหน้าต่าง
                          </Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.categoryBtn}
                        onPress={() => {}}
                      >
                        <View style={styles.categoryIcon}>
                          <Image
                            style={styles.categoryLogo}
                            source={require("../src/assets/electric.png")}
                          />
                          <Text style={styles.categoryBtnTxt}>
                            อุปกรณ์ไฟฟ้า
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </>
              }
              style={styles.categorySlider} //Main slider container style
              height={100} //Height of your slider
              slideCount={2} //How many views you are adding to slide
              dots={true} // Pagination dots visibility true for visibile
              dotActiveColor="#f37721" //Pagination dot active color
              dotInactiveColor="white" // Pagination do inactive color
              dotsContainerStyle={styles.categoryDotContainer} // Container style of the pagination dots
            />
          </>

          {/* <View style={{ flexDirection: "row" }}>
            <Text style={[styles.textStyle, { paddingLeft: 5, paddingTop: 5 }]}>
              สินค้าโปรโมชั่น
            </Text>
            <TouchableOpacity>
              <Text
                style={[
                  styles.textStyle,
                  { textAlign: "right", paddingRight: 5, paddingTop: 5 },
                ]}
              >
                เพิ่มเติม
              </Text>
            </TouchableOpacity>
          </View> */}
          {/* 
          <View style={styles.promotionViewBox}>
            <View style={styles.promotionContainer}>
              <TouchableOpacity
                style={styles.promotionBtn}
                onPress={() => navigation.navigate("Products")}
              >
                <View
                  style={[styles.promotionIcon, { flexDirection: "column" }]}
                >
                  <Image
                    style={styles.promotionLogo}
                    source={require("../src/assets/green_lotus.png")}
                  />
                  <Text style={styles.promotionBtnTxt}>
                    ดอกบัว ปูนเขียว ขนาด 50 กก.
                  </Text>
                  <Text style={{ fontSize: 14, color: "#f37721" }}>฿140</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.promotionBtn} onPress={() => {}}>
                <View style={styles.promotionIcon}>
                  <Image
                    style={styles.promotionLogo}
                    source={require("../src/assets/truck.png")}
                  />
                  <Text style={styles.promotionBtnTxt}>ปูน</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View> */}

          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.textStyle, { paddingLeft: 5, paddingTop: 5 }]}>
              สินค้าทั่วไป
            </Text>
            <TouchableOpacity>
              <Text
                style={[
                  styles.textStyle,
                  { textAlign: "right", paddingRight: 5, paddingTop: 5 },
                ]}
              >
                เพิ่มเติม
              </Text>
            </TouchableOpacity>
          </View>

          {/* <View style={styles.generalViewBox}>
            <View style={styles.generalContainer}>
              <TouchableOpacity style={styles.generalBtn} onPress={() => {}}>
                <View style={styles.generalIcon}>
                  <Image
                    style={styles.generalLogo}
                    source={require("../src/assets/truck.png")}
                  />
                  <Text style={styles.generalBtnTxt}>
                    Pumpkin Pro แปรงลูกกลิ้งทาสีปิกัสโซ่ ขนาด 10 นิ้ว
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.generalBtn} onPress={() => {}}>
                <View style={styles.generalIcon}>
                  <Image
                    style={styles.generalLogo}
                    source={require("../src/assets/truck.png")}
                  />
                  <Text style={styles.generalBtnTxt}>ปูน</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>  */}

          <View style={{ paddingHorizontal: 3 }}>
            <FlatList
              data={products}
              numColumns={numColumns}
              columnWrapperStyle={{ justifyContent: "space-between" }}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.boxContainer}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Products")}
                  >
                    <View style={styles.box}>
                      <View style={styles.boxAlign}>
                        <Image
                          style={{
                            width: 125,
                            height: 150,
                          }}
                          source={{
                            uri:
                              "https://sricharoen-narathiwat.ml/img_product/" +
                              item.img,
                          }}
                        />
                        <Text
                          style={{
                            textAlign: "center",
                            fontSize: 10,
                            fontWeight: "bold",
                            paddingLeft: 5,
                            paddingRight: 5,
                          }}
                          numberOfLines={2}
                        >
                          {item.name}
                        </Text>
                        <Text
                          style={{
                            textAlign: "center",
                            fontSize: 12,
                            color: "orange",
                          }}
                        >
                          {item.price}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: "100%",
  },

  Logo: {
    width: 25,
    height: 25,
    left: 7.5,
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
    backgroundColor: "pink",
  },
  dotContainer: {
    backgroundColor: "transparent",
    position: "absolute",
    bottom: -10,
  },

  textStyle: {
    fontSize: 12,
    color: "black",
    flex: 1,
  },
  categoryContainer: {
    flexDirection: "row",
    width: "96%",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: "30%",
    marginHorizontal: 0,
    alignSelf: "center",
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 70,
    height: 70,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    shadowColor: "#000000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },

  categoryBtnTxt: {
    alignSelf: "center",
    fontSize: 8,
    color: "#000000",
  },
  categoryLogo: {
    width: "55%",
    height: "55%",
  },

  categoryViewBox: {
    width: width,
    height: 200,
  },
  categorySlider: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  categoryDotContainer: {
    backgroundColor: "transparent",
    position: "absolute",
    bottom: -15,
  },

  promotionViewBox: {
    width: width,
    height: 200,
    // backgroundColor: "#f37721",
  },
  promotionContainer: {
    flexDirection: "row",
    width: "98%",
    alignSelf: "center",
    top: 5,
  },
  promotionBtn: {
    flex: 1,
    width: "30%",
    marginHorizontal: 0,
    alignSelf: "center",
  },
  promotionIcon: {
    borderWidth: 0,
    alignItems: "center",
    alignSelf: "center",
    width: "95%",
    height: "95%",
    backgroundColor: "#ffffff",
    borderRadius: 8,
    shadowColor: "#000000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  promotionLogo: {
    top: 20,
    width: "50%",
    height: "55%",
  },
  promotionpriceBtnTxt: {
    alignSelf: "center",
    fontSize: 10,
    color: "#000000",
    paddingHorizontal: 5,
    top: 30,
  },
  promotionBtnTxt: {
    alignSelf: "center",
    fontSize: 10,
    color: "#000000",
    paddingHorizontal: 5,
    top: 30,
  },
  goBackcontainer: {
    position: "absolute",
    left: 10,
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
  inputView: {
    width: "110%",
    height: 25,
    backgroundColor: "#ffffff",
    // backgroundColor: "#dfe4ea",
    borderRadius: 10,
    paddingHorizontal: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  generalViewBox: {
    width: width,
    height: 200,
    backgroundColor: "#f37721",
  },
  generalContainer: {
    flexDirection: "row",
    width: "98%",
    alignSelf: "center",
    top: 5,
  },
  generalBtn: {
    flex: 1,
    width: "30%",
    marginHorizontal: 0,
    alignSelf: "center",
  },
  generalIcon: {
    borderWidth: 0,
    alignItems: "center",
    alignSelf: "center",
    width: "95%",
    height: "95%",
    backgroundColor: "#ffffff",
    borderRadius: 8,
    shadowColor: "#000000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  generalLogo: {
    top: 20,
    width: "50%",
    height: "55%",
  },
  generalpriceBtnTxt: {
    alignSelf: "center",
    fontSize: 10,
    color: "#000000",
    paddingHorizontal: 5,
    top: 30,
  },
  generalBtnTxt: {
    alignSelf: "center",
    fontSize: 10,
    color: "#000000",
    paddingHorizontal: 5,
    top: 30,
  },
  boxContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    padding: 3,
  },
  box: {
    height: 200,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    width: "100%",
    borderRadius: 10,
    justifyContent: "center",
  },
  boxAlign: {
    justifyContent: "center",
    alignItems: "center",
  },
});
