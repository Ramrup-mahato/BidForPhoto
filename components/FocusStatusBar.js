import { StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/core";

const FocusStatusBar = ({ background }) => {
  const isFocused = useIsFocused();
  return isFocused ? (
    <StatusBar animated={true} backgroundColor={background} />
  ) : null;
};

export default FocusStatusBar;
