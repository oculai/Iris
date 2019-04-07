import React, { Component } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { Camera } from "expo";

// styles
import styles from "../../styles";

// services
import classifyService from "../../services/classify";

// components
import FadeInView from "../molecules/FadeInView";

// Screen dimensions
const Dimensions = require("Dimensions");
const { width, height } = Dimensions.get("window");

export default class ClassifyCamera extends Component {
  state = { loading: false };

  takePic = async () => {
    const { navigate } = this.props.navigation;
    const { base64 } = await this.camera.takePictureAsync({ base64: true });
    const buffer = `data:image/jpg;base64,${base64}`;

    this.setState({ loading: true });
    const response = await classifyService.classify(buffer);
    navigate("ClassifyResult", { response });
  };

  render() {
    const { loading } = this.state;
    const { navigate } = this.props.navigation;

    return loading ? (
      <View style={{ justifyContent: "center", alignItems: "center", height }}>
        <FadeInView>
          <Image
            source={require("../../assets/loader.gif")}
            style={{ height: 250, width: 250 }}
          />
        </FadeInView>
      </View>
    ) : (
      <Camera
        ref={ref => (this.camera = ref)}
        style={styles.camera}
        type={"front"}
      >
        <View
          style={{
            justifyContent: "flex-end",
            alignItems: "center",
            width,
            height
          }}
        >
          <TouchableOpacity onPress={this.takePic}>
            <Image
              source={require("../../assets/mascot.png")}
              style={{ height: 100, width: 100, marginBottom: 30 }}
            />
          </TouchableOpacity>
        </View>
      </Camera>
    );
  }
}
