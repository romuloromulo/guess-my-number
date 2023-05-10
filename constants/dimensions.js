import { Dimensions } from "react-native";

const DeviceDimensions = {
  deviceWidth: Dimensions.get("window").width,
  deviceHeight: Dimensions.get("window").height,
};

export default DeviceDimensions;
