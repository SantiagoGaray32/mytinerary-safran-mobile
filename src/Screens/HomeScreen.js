import {
  View,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
  Button,
  StatusBar,
} from "react-native";
import CarouselWrapper from "../components/Carousel/CarouselWrapper";

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.background}>
          <ImageBackground
            source={require("../assets/images/backgroundHome.PNG")}
            resizeMode="cover"
            style={styles.image}
          >
            <Text style={styles.text}>
              Find your perfect trip, designed by insiders who know and love
              their cities!
            </Text>
          </ImageBackground>
        </View>
        <View style={styles.callToAction}>
          <ImageBackground
            source={require("../assets/images/backgroundHome.PNG")}
            resizeMode="cover"
            style={styles.hero}
          >
            <Text style={styles.heroText}>
              Press enter to see your next trip
            </Text>
            <TouchableOpacity style={styles.enterButton}>
              <Button
                onPress={() => {}}
                title="Enter"
                color="transparent"
                accessibilityLabel="Go to Cities"
              />
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <CarouselWrapper />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  background: {
    height: 484,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    height: 484,
  },
  text: {
    color: "#ffffff",
    fontSize: 18,
    lineHeight: 25,
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "center",
    backgroundColor: "rgba(156, 156, 161, 0.5)",
  },
  callToAction: {
    height: 484,
  },
  hero: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 484,
  },
  heroText: {
    color: "#ffffff",
    fontSize: 18,
    lineHeight: 25,
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "center",
    backgroundColor: "rgba(156, 156, 161, 0.5)",
    width: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  enterButton: {
    backgroundColor: "#7c7281",
    borderRadius: 15,
    width: 100,
  },
  scroll: {
    flex: 1,
  },
});
