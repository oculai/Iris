import React from "react";
import { View, Text, Image } from "react-native";

// Styles
import styles from "../../styles";

export default function Alert(props) {
  return (
    <View style={styles.alert}>
      <Text style={styles.alertText}>
        {props.message || "A new test has just been added!"}
      </Text>
    </View>
  );
}
