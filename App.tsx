import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Alert } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          textAlign: "center-left",
          fontSize: 50,
          fontWeight: "bold",
          color: "#1b241f",
        }}
      >
        Title!
      </Text>
      <StatusBar style="auto" />

      
    <Text style={{fontSize: 20, textAlign: "center"}}>
      Click below to get an alert:{'\n'}{'\n'}
      <Text style={{color:"red", textDecorationLine:"underline",}} 
        onPress={() => Alert.alert("You've been alerted!")}>
        Alert!{'\n'}{'\n'}
      </Text>
      Click above to get an alert!{'\n'}
    </Text>

    <Text style={{fontSize: 14, textAlign: "left"}}>

        numberOfLines={5}
        By Taylor C. Sladeczek, for Braynic
      
    </Text>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "right",
  },
});
