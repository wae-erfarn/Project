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
  Share,
} from "react-native";
import { Icon, Header } from "react-native-elements";
import ViewSlider from "react-native-view-slider";

const { width, height } = Dimensions.get("window");

export default function Category() {
  return (
    <View style={styles.containerstatusbar}>
      <Header
        placement="center"
        backgroundColor="#f37721"
        containerStyle={{ borderBottomWidth: 0 }}
        centerComponent={{
          text: "หมวดหมู่",
          style: { color: "#fff" },
        }}
      />
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <ScrollView style={styles.scrollView}>
            {/* style={{ width: 100, height: 100, backgroundColor: "red" }} */}
            <View style={styles.categorytopbottom}>
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
                        source={require("../src/assets/metal.png")}
                      />
                      <Text style={styles.categoryBtnTxt}>เหล็ก</Text>
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
                        source={require("../src/assets/paint.png")}
                      />
                      <Text style={styles.categoryBtnTxt}>ผลิตภัณฑ์สี</Text>
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
                      <Text style={styles.categoryBtnTxt}>เครื่องมือช่าง</Text>
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
                        source={require("../src/assets/tiles.png")}
                      />
                      <Text style={styles.categoryBtnTxt}>พื้นและผนัง</Text>
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
                        source={require("../src/assets/window.png")}
                      />
                      <Text style={styles.categoryBtnTxt}>ประตูหน้าต่าง</Text>
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
                        source={require("../src/assets/electric.png")}
                      />
                      <Text style={styles.categoryBtnTxt}>อุปกรณ์ไฟฟ้า</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>

          <ScrollView style={{ width: "75%" }}>
            <View style={styles.imgname}>
              {/* <>
                <ViewSlider
                  renderSlides={
                    <>
                      <View style={styles.imgViewBox}>
                        <View style={styles.imgBtn}>
                          <View style={styles.imgIcon}>
                            <Image
                              style={styles.imgLogo}
                              source={require("../src/assets/Slide-1.png")}
                            />
                          </View>
                        </View>
                      </View>
                    </>
                  }
                  style={styles.imgSlider} //Main slider container style
                  height={100} //Height of your slider
                  slideCount={3} //How many views you are adding to slide
                  dots={true} // Pagination dots visibility true for visibile
                  dotActiveColor="#f37721" //Pagination dot active color
                  dotInactiveColor="grey" // Pagination do inactive color
                  dotsContainerStyle={styles.imgDotContainer} // Container style of the pagination dots
                  autoSlide={true} //The views will slide automatically
                  slideInterval={1000} //In Miliseconds
                />
              </> */}
              <>
                <ViewSlider
                  renderSlides={
                    <>
                      <View style={styles.viewBox}>
                        <Image
                          source={require("../src/assets/Slide-1.png")}
                          style={{ height: 50, width: 50 }}
                        />
                      </View>
                      <View style={styles.viewBox}>
                        <Image
                          source={require("../src/assets/Slide-2.png")}
                          style={{ height: 50, width: 50 }}
                        />
                      </View>
                      <View style={styles.viewBox}>
                        <Image
                          source={require("../src/assets/Slide-3.png")}
                          style={{ height: 50, width: 50 }}
                        />
                      </View>
                    </>
                  }
                  style={styles.slider} //Main slider container style
                  height={100} //Height of your slider
                  slideCount={3} //How many views you are adding to slide
                  dots={true} // Pagination dots visibility true for visibile
                  dotActiveColor="#f37721" //Pagination dot active color
                  dotInactiveColor="gray" // Pagination do inactive color
                  dotsContainerStyle={styles.dotContainer} // Container style of the pagination dots
                  // autoSlide={true} //The views will slide automatically
                  // slideInterval={1000} //In Miliseconds
                />
              </>
            </View>

            <View style={styles.categoryIconname}>
              <Text>efwfwfw</Text>
            </View>
          </ScrollView>
        </View>
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
  },
  scrollView: {
    backgroundColor: "#E4E4E4",
    width: "25%",
    // marginBottom: 10,
    // marginTop: 10,
  },
  categorytopbottom: {
    marginBottom: 5,
    marginTop: 5,
  },

  categoryViewBox: {
    width: width,
    height: 80,
  },
  categoryContainer: {
    width: "96%",
    top: 2.5,
    bottom: 2.5,
  },
  categoryBtn: {
    flex: 1,
    width: "30%",
    marginHorizontal: 0,
  },
  imgname: {
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
    left: 7,
    top: 10,
    width: "95%",
    height: 100,
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

  categoryIconname: {
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
    left: 7,
    top: 20,

    width: "95%",
    height: 465,
    marginBottom: 30,
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

  categoryIcon: {
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
    left: 7,
    width: 75,
    height: 75,
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
  imgContainer: {
    flexDirection: "row",
    width: "96%",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  imgBtn: {
    flex: 1,
    width: "30%",
    marginHorizontal: 0,
    alignSelf: "center",
  },
  imgIcon: {
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

  imgLogo: {
    width: "367%",
    height: "145%",
    top: 5,
    borderRadius: 10,
  },

  imgViewBox: {
    // width: 258,
    // height: 200,
    paddingHorizontal: 10,
    justifyContent: "center",
    width: width,
    alignItems: "center",
    height: 150,
  },
  imgSlider: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
  },
  imgDotContainer: {
    backgroundColor: "transparent",
    position: "absolute",
    bottom: -10,
  },
  viewBox: {
    paddingHorizontal: 10,
    justifyContent: "center",
    width: width,
    alignItems: "center",
    height: 100,
  },
  slider: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
    width: "100%",
    borderRadius: 8,
  },
  dotContainer: {
    backgroundColor: "transparent",
    position: "absolute",
    bottom: -10,
  },
});
