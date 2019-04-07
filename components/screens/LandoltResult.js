import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";

// styles
import styles from "../../styles";

// Screen dimensions
const Dimensions = require("Dimensions");
const { width, height } = Dimensions.get("window");

export default class LandoltResult extends Component {
  render() {
    const { navigation } = this.props;
    const { navigate } = this.props.navigation;
    const result = navigation.getParam("result");
    const { level, stage } = result;

    const url = "https://www.zennioptical.com/";

    const mapping = {
      // Pretty bad
      1: {
        prescription: "20/200",
        summary:
          "If you have 20/200 visual acuity, the smallest letters you can identify from a distance of 20 feet are the size of the smallest letters a person with historically defined normal vision can see from a much greater distance — 200 feet, in this case.",
        glasses: "-2.5"
      },
      2: {
        prescription: "20/100",
        summary:
          "Having a 20/100 vision means you should be within 20 feet to see what a person with normal vision can see 100 feet away.",
        glasses: "-2"
      },
      3: {
        prescription: "20/80",
        summary:
          "Usually Patients with 20/80 vision would need glasses or contact lenses to aid them with basic tasks such as reading or writing. With 20/80 vision, patients are able to see objects at 20 feet away that those with normal or 20/20 vision can see from a distance of 80 feet.",
        glasses: "-1.75"
      },

      // Average

      4: {
        prescription: "20/50",
        summary:
          " The study defines visual impairment as visual acuity of 20/50 or worse in the better-seeing eye. Visual acuity refers to the sharpness of vision at 20 feet from an object. A person with 20/50 vision can clearly see something 20 feet away that a person with normal vision can see clearly from a distance of 50 feet.",
        glasses: "-1.5"
      },
      5: {
        prescription: "20/40",
        summary:
          "Bad distance vision was considered improved if corrections boosted visual acuity to 20/40 or better. Glasses, contact lenses, or corrective eye surgery can make such corrections.",
        glasses: "-1"
      },

      //  Very good
      6: {
        prescription: "20/25",
        summary:
          "20/25 means that at 20 feet you can see what a normal person could see at 25 feet. So a normal person can be 5 feet further away than you. So it's worse than 20/20. But not that much worse compared to someone who may have 20/200.",
        glasses: "-0.5"
      },
      7: {
        prescription: "20/20",
        summary:
          "A person with 20/20 vision can see what an average individual can see on an eye chart when they are standing 20 feet away. However, 20/20 vision is not perfect vision.",
        glasses: "No glasses required"
      },
      8: {
        prescription: "20/10",
        summary:
          "A prescription for 20/10 will certainly improve distance vision, yet it may compromise near vision. In our Moorestown optical center, our experienced optometrist will check your visual acuity carefully. ",
        glasses: "No glasses required"
      }
    };

    return (
      <View style={styles.resultContainer}>
        <View style={styles.header}>
          <Image
            source={require("../../assets/mascot.png")}
            style={{ height: 70, width: 70, marginBottom: 15 }}
          />
          <Text style={{ color: "#fff", fontWeight: "500", fontSize: 25 }}>
            Your results are in!
          </Text>
          <Text style={{ color: "#fff", fontSize: 90, fontWeight: "900" }}>
            {mapping[level].prescription}
          </Text>

          <Text style={{ fontWeight: "600", color: "#fff", fontSize: 15 }}>
            Recomended prescription: {mapping[level].glasses}
          </Text>
        </View>
        <View style={{ paddingHorizontal: 30, paddingVertical: 30 }}>
          <Text style={{ fontWeight: "900", color: "#000", fontSize: 35 }}>
            Quick summary
          </Text>
          <Text
            style={{
              marginTop: 10,
              fontWeight: "400",
              color: "#292929",
              fontSize: 20,
              letterSpacing: 0.5,
              lineHeight: 35
            }}
          >
            {mapping[level].summary}
          </Text>
        </View>

        <TouchableOpacity onPress={() => navigate("Home")}>
          <View
            style={{
              borderRadius: 50,
              borderColor: "#724BEF",
              borderWidth: 2,
              paddingHorizontal: width / 3,
              paddingVertical: 15
            }}
          >
            <Text style={{ color: "#724BEF", fontWeight: "500", fontSize: 30 }}>
              Retake
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL(url)}>
          <Text
            style={{
              textDecorationLine: "underline",
              color: "#000",
              fontWeight: "500",
              marginTop: 15
            }}
          >
            Get a pair of glasses.
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
