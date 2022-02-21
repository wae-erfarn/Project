import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Forgotpassword from "./screens/Forgotpassword";
import Index from "./screens/Index";
import Profile from "./screens/Profile";
import EditProfile from "./screens/EditProfile";
import Cart from "./screens/Cart";
import Makeorder from "./screens/Makeorder";
import AddressDelivery from "./screens/AddressDelivery";
import DeliveryForm from "./screens/DeliveryForm";
import NeedTax from "./screens/NeedTax";
import PaymentChannel from "./screens/PaymentChannel ";
import ContactUs from "./screens/ContactUs";
import Otp from "./screens/Otp";
import Resetpassword from "./screens/Resetpassword";
import Address from "./screens/Address";
import TaxAddress from "./screens/TaxAddress";
import FAQ from "./screens/FAQ";
import Feedback from "./screens/Feedback";
import Methodofpayment from "./screens/Methodofpayment";
import Deliveryterms from "./screens/Deliveryterms";
import Products from "./screens/Products";
import OrderList from "./screens/OrderList";

import AddAddress from "./screens/AddAddress";
import AddTaxAddress from "./screens/AddTaxAddress";

const Stack = createStackNavigator();

const horizontalAnimation = {
  gestureDirection: "horizontal",
  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={horizontalAnimation}>
        {/* <Stack.Screen name='Loading' component={Loading} options={{ 
        headerShown: false,
        title: 'โหลด',
          headerStyle: {
          backgroundColor: '#48D1CC'
          }}}/> */}
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            title: "เข้าสู่ระบบ",
            headerStyle: {
              backgroundColor: "#ffbb3b",
            },
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
            title: "สมัครสมาชิก",
            headerStyle: {
              backgroundColor: "#48D1CC",
            },
          }}
        />
        <Stack.Screen
          name="Forgotpassword"
          component={Forgotpassword}
          options={{
            headerShown: false,
            title: "ลืมรหัสผ่าน",
            headerStyle: {
              backgroundColor: "#48D1CC",
            },
          }}
        />

        <Stack.Screen
          name="Otp"
          component={Otp}
          options={{
            headerShown: false,
            title: "Otp",
            headerStyle: {
              backgroundColor: "#48D1CC",
            },
          }}
        />

        <Stack.Screen
          name="Resetpassword"
          component={Resetpassword}
          options={{
            headerShown: false,
            title: "รีเซ็ตรหัสผ่าน",
            headerStyle: {
              backgroundColor: "#48D1CC",
            },
          }}
        />
        <Stack.Screen
          name="Index"
          component={Index}
          options={{
            headerShown: false,
            title: "หน้าแรก",
            headerStyle: {
              backgroundColor: "#48D1CC",
            },
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            title: "โปรไฟล์",
            headerStyle: {
              backgroundColor: "#48D1CC",
            },
          }}
        />

        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{
            headerShown: false,
            title: "แก้ไขโปรไฟล์",
            headerBackTitle: "Back",
            headerStyle: {
              backgroundColor: "#ffffff",
            },
          }}
        />

        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            headerShown: false,
            title: "ตะกร้าสินค้า",
            headerBackTitle: "Back",
            headerStyle: {
              backgroundColor: "#ffffff",
            },
          }}
        />
        <Stack.Screen
          name="Makeorder"
          component={Makeorder}
          options={{
            headerShown: false,
            title: "ทำการสั่งซื้อสินค้า",
            headerBackTitle: "Back",
            headerStyle: {
              backgroundColor: "#ffffff",
            },
          }}
        />
        <Stack.Screen
          name="AddressDelivery"
          component={AddressDelivery}
          options={{
            headerShown: false,
            title: "ที่อยู่ในการจัดส่ง",
            headerBackTitle: "Back",
            headerStyle: {
              backgroundColor: "#ffffff",
            },
          }}
        />

        <Stack.Screen
          name="NeedTax"
          component={NeedTax}
          options={{
            headerShown: false,
            title: "ต้องการใบกำกับภาษี",
            headerBackTitle: "Back",
            headerStyle: {
              backgroundColor: "#ffffff",
            },
          }}
        />
        <Stack.Screen
          name="DeliveryForm"
          component={DeliveryForm}
          options={{
            headerShown: false,
            title: "รูปแบบการจัดส่ง",
            headerBackTitle: "Back",
            headerStyle: {
              backgroundColor: "#ffffff",
            },
          }}
        />
        <Stack.Screen
          name="PaymentChannel"
          component={PaymentChannel}
          options={{
            headerShown: false,
            title: "ช่องทางการชำระเงิน",
            headerBackTitle: "Back",
            headerStyle: {
              backgroundColor: "#ffffff",
            },
          }}
        />
        <Stack.Screen
          name="Address"
          component={Address}
          options={{
            headerShown: false,
            title: "ที่อยู่จัดส่ง",
            headerBackTitle: "Back",
            headerStyle: {
              backgroundColor: "#ffffff",
            },
          }}
        />
        <Stack.Screen
          name="TaxAddress"
          component={TaxAddress}
          options={{
            headerShown: false,
            title: "ที่อยู่ใบกำกับภาษี",
            headerBackTitle: "Back",
            headerStyle: {
              backgroundColor: "#ffffff",
            },
          }}
        />

        <Stack.Screen
          name="Feedback"
          component={Feedback}
          options={{
            headerShown: false,
            title: "ติชมบริการ",
            headerBackTitle: "Back",
            headerStyle: {
              backgroundColor: "#ffffff",
            },
          }}
        />
        <Stack.Screen
          name="Methodofpayment"
          component={Methodofpayment}
          options={{
            headerShown: false,
            title: "วิธีการชำระเงิน",
            headerBackTitle: "Back",
            headerStyle: {
              backgroundColor: "#ffffff",
            },
          }}
        />
        <Stack.Screen
          name="Deliveryterms"
          component={Deliveryterms}
          options={{
            headerShown: false,
            title: "เงื่อนไขการจัดส่ง",
            headerBackTitle: "Back",
            headerStyle: {
              backgroundColor: "#ffffff",
            },
          }}
        />
        <Stack.Screen
          name="FAQ"
          component={FAQ}
          options={{
            headerShown: false,
            title: "คำถามที่พบบ่อย",
            headerBackTitle: "Back",
            headerStyle: {
              backgroundColor: "#ffffff",
            },
          }}
        />
        <Stack.Screen
          name="ContactUs"
          component={ContactUs}
          options={{
            headerShown: false,
            title: "ติดต่อเรา",
            headerBackTitle: "Back",
            headerStyle: {
              backgroundColor: "#ffffff",
            },
          }}
        />
        <Stack.Screen
          name="Products"
          component={Products}
          options={{
            headerShown: false,
            title: "สินค้า",
            headerBackTitle: "Back",
            headerStyle: {
              backgroundColor: "#ffffff",
            },
          }}
        />
        <Stack.Screen
          name="OrderList"
          component={OrderList}
          options={{
            headerShown: false,
            title: "รายการคำสั่งซื้อของฉัน",
            headerBackTitle: "Back",
            headerStyle: {
              backgroundColor: "#ffffff",
            },
          }}
        />
        <Stack.Screen
          name="AddAddress"
          component={AddAddress}
          options={{
            headerShown: false,
            title: "ที่อยู่ในการจัดส่งใหม่",
            headerBackTitle: "Back",
            headerStyle: {
              backgroundColor: "#ffffff",
            },
          }}
        />
        <Stack.Screen
          name="AddTaxAddress"
          component={AddTaxAddress}
          options={{
            headerShown: false,
            title: "เพิ่มข้อมูลใบกำกับภาษี",
            headerBackTitle: "Back",
            headerStyle: {
              backgroundColor: "#ffffff",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
