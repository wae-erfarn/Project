import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function WaitForPay() {
  return (
    <View style={styles.container}>
      <Text>รอการชำระเงิน</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
});
