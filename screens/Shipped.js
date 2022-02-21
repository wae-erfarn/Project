import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Shipped() {
  return (
    <View style={styles.container}>
      <Text>จัดส่งแล้ว</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
});
