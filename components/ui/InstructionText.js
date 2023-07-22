import { StyleSheet, Text } from "react-native";

import Colors from "../../constants/colors";

function InstructionText({ children, style }) {
  return (
    <Text style={[styles.defaultStyle, style, styles.requiredStyle]}>
      {children}
    </Text>
  );
}

export default InstructionText;

const styles = StyleSheet.create({
  requiredStyle: {
    fontFamily: "open-sans",
    color: Colors.accent500,
  },
  defaultStyle: {
    fontSize: 24,
    marginBottom: 24,
  },
});
