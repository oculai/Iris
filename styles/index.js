import { StyleSheet } from "react-native";

const Dimensions = require("Dimensions");
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  camera: {
    width: width,
    height: height,
    flex: 1
  },
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    borderColor: "#7252EB",
    borderBottomWidth: 5,
    borderTopWidth: 2
  },
  resultContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    flex: 1,
    borderColor: "#7252EB",
    borderBottomWidth: 5
  },

  // Results
  header: {
    backgroundColor: "#7252EB",
    width: width,
    height: height / 2.5,
    justifyContent: "flex-end",
    paddingBottom: 20,
    paddingHorizontal: 30
  },

  //   Landolt
  landoltContainer: {
    width,
    height,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  landoltSelect: {
    width: "33.33%",
    height: height / 3,
    justifyContent: "center",
    alignItems: "center"
  },
  circle: {
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
    color: "#000"
  },

  // Alert
  alert: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#7252EB",
    paddingVertical: 10,
    borderRadius: 50,
    marginBottom: 10,
    position: "absolute"
  },

  alertText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 20
  }
});
