import { StyleSheet, View, Text, Pressable } from "react-native";

function PrimaryButton({ children }) {
  function buttonPressed(){
    console.log('Pressed!!!');
  }
  return (
    <Pressable onPress={buttonPressed}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 4, 
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 28, 
    backgroundColor: '#72063c',
    elevation: 2
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  }
});