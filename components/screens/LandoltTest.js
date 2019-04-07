import React, { Component } from "react";
import { View, TouchableOpacity, Image } from "react-native";

// Landolt Components
import LandoltC from "../atoms/Landolt_C";

// Components
import FadeInView from "../molecules/FadeInView";

// Styles
import styles from "../../styles";

// valid corners
const vC = {
  0: "r", //top
  45: "tr", //top-right
  90: "r", //right
  135: "br", //right-bottom
  180: "b", //bottom
  225: "bl", //bottom-left
  270: "l", //left
  315: "tl", //top-left
  360: "t" //right
};

// C Size
const cSize = {
  1: { width: 122 },
  2: { width: 112 },
  3: { width: 52 },
  4: { width: 40 },
  5: { width: 37 },
  6: { width: 26 },
  7: { width: 15 },
  8: { width: 10 }
};

export default class LandoltTest extends Component {
  state = {
    angle: 360,
    stage: 1,
    level: 1,
    size: { width: 300, height: 300 },
    correctCorner: "",
    isCorrect: "",
    correctCounter: 1
  };

  componentDidMount() {
    const { angle } = this.state;
    this.setState({ correctCorner: vC[angle] });
  }

  componentWillUnmount() {
    this.setState({
      angle: 360,
      stage: 1,
      level: 1,
      size: { width: 300, heisght: 300 },
      correctCorner: "",
      isCorrect: 0,
      correctCounter: 1
    });
  }

  setAngle() {
    const vA = [0, 45, 90, 135, 180, 225, 270, 315, 360]; // valid angles
    const rA = vA[Math.floor(Math.random() * vA.length)]; // random angle
    const cc = vC[rA]; // correct corners

    this.setState({ correctCorner: cc, angle: rA });
  }

  setSize() {
    const { size } = this.state;

    this.setState({
      size: { width: size.width + 45, height: size.height + 45 }
    });
  }

  updateStage = () => {
    let { stage, level } = this.state;

    if (level >= 8) {
      const { navigate } = this.props.navigation;
      navigate("LandoltResult", { result: { stage, level } });
    } else if (stage >= level) {
      this.setState({ stage: 1, level: level + 1, correctCounter: level + 1 });
    } else {
      this.setState({ stage: stage + 1 });
    }

    this.setAngle();
    // this.setSize();
  };

  isCorrect = async corner => {
    const { navigate } = this.props.navigation;
    let { correctCorner, correctCounter, stage, level } = this.state;

    const gotCorrect = correctCorner == corner;

    const threshhold = Math.floor(level / 2 + 1);

    if (!gotCorrect) {
      await this.setState({
        correctCounter: correctCounter - 1,
        isCorrect: false
      });
    } else {
      await this.setState({ isCorrect: true });
    }

    if (level == 1 && this.state.correctCounter == 0) {
      // navigate, lost
      navigate("LandoltResult", { result: { stage, level } });
    } else if (level == 1 && this.state.correctCounter == 1) {
      await this.log();
      await this.updateStage();
    }

    if (correctCounter < threshhold) {
      // redirect to test results
      navigate("LandoltResult", { result: { stage, level: level - 1 } });
    } else {
      await this.log();
      await this.updateStage();
    }
  };

  score = async corner => await this.isCorrect(corner);

  log() {
    const {
      stage,
      level,
      correctCorner,
      isCorrect,
      correctCounter
    } = this.state;

    const currentResult = {
      stage,
      level,
      correctCorner,
      isCorrect,
      correctCounter
    };
    const resultMapping = {
      [`${level}`]: { [`${stage}`]: { result: currentResult } }
    };

    console.log(resultMapping);
  }
  render() {
    const { size, angle, level } = this.state;

    return (
      <View style={styles.landoltContainer}>
        {/* LandoltC */}
        <TouchableOpacity
          style={styles.landoltSelect}
          onPress={() => this.score("bl")}
        >
          <View style={styles.circle} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.landoltSelect}
          onPress={() => this.score("l")}
        />
        <TouchableOpacity
          style={styles.landoltSelect}
          onPress={() => this.score("tl")}
        />
        <TouchableOpacity
          style={styles.landoltSelect}
          onPress={() => this.score("b")}
        />

        <TouchableOpacity style={styles.landoltSelect}>
          <FadeInView>
            <Image
              source={require("../../assets/landoltC.png")}
              style={{
                height: cSize[level].width,
                width: cSize[level].width,
                transform: [{ rotate: `${angle.toString()}deg` }]
              }}
            />
          </FadeInView>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.landoltSelect}
          onPress={() => this.score("t")}
        />
        <TouchableOpacity
          style={styles.landoltSelect}
          onPress={() => this.score("br")}
        />
        <TouchableOpacity
          style={styles.landoltSelect}
          onPress={() => this.score("r")}
        />
        <TouchableOpacity
          style={styles.landoltSelect}
          onPress={() => this.score("tr")}
        />
      </View>
    );
  }
}
