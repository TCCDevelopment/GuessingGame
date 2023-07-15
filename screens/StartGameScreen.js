import { View, TextInput } from "react-native";

import PrimaryButton from "../components/PrimaryButton.js";

function StartGameScren() {
  return (
    <View>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

export default StartGameScren;
