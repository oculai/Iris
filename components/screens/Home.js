import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { Font } from "expo";

// Components
import FadeInView from "../molecules/FadeInView";
import Alert from "../molecules/Alert";

// Styles
import styles from "../../styles";

// Screen dimensions
const Dimensions = require("Dimensions");
const { width, height } = Dimensions.get("window");

export default class Home extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        {/* <FadeInView key={0}>
          <Alert />
        </FadeInView> */}

        <FadeInView key={1}>
          <TouchableOpacity onPress={() => navigate("LandoltTest")}>
            <Image
              source={require("../../assets/mascot.png")}
              style={{ width: 150, height: 150 }}
            />
          </TouchableOpacity>
        </FadeInView>

        <Image
          source={require("../../assets/rotate.gif")}
          style={{ height: 100, width: 100, marginTop: 10 }}
        />

        <Text
          style={{
            fontWeight: "500",
            fontSize: 25,
            color: "#292929",
            marginTop: 25
          }}
        >
          Tap the Oculai{"\n"}to begin testing
        </Text>

        <TouchableOpacity onPress={() => navigate("ClassifyCamera")}>
          <View
            style={{
              borderRadius: 50,
              borderColor: "#724BEF",
              borderWidth: 2,
              paddingHorizontal: 50,
              paddingVertical: 15,
              marginTop: 35
            }}
          >
            <Text style={{ color: "#724BEF", fontWeight: "500", fontSize: 20 }}>
              Classify your Oculus
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
