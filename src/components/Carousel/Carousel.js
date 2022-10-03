import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  Button,
  TouchableOpacity,
  Text,
} from "react-native";

const Carousel = ({ slides }) => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    let loop = setInterval(() => {
      foward();
    }, 4000);

    return () => {
      clearInterval(loop);
    };
  }, [position]);

  //Pos      0           1
  //   ["element1", "elemento2"]
  //   array.lengh => 2
  //   posicion 0 y posicion 1

  const foward = () => {
    setPosition(position >= slides.length - 1 ? 0 : position + 1);
  };

  const back = () => {
    setPosition(position <= 0 ? slides.length - 1 : position - 1);
  };

  if (!slides.length) {
    return null;
  }

  return (
    <View style={styles.carouselContainer}>
      <View style={styles.carouselTitle}>
        <Text style={styles.text}>Popular MYtineraries</Text>
      </View>

      <View style={styles.carouselContent}>
        <View style={styles.buttonBack}>
          <TouchableOpacity style={styles.buttonSlide}>
            <Button
              title="<"
              color="transparent"
              onPress={() => back()}
              accessibilityLabel="Prev slide"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.slideContents}>
          <View style={styles.slide}>
            <View style={styles.item}>
              <Text style={styles.citiesTitle}>{slides[position].city}</Text>
              <Image
                style={styles.carouselImage}
                source={{ uri: slides[position].photo }}
              />
            </View>
          </View>
        </View>

        <View style={styles.buttonFoward}>
          <TouchableOpacity style={styles.buttonSlide}>
            <Button
              title=">"
              color="transparent"
              onPress={() => foward()}
              accessibilityLabel="Next slide"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    border: "1px solid red",
  },
  carouselTitle: {
    padding: 16,
    backgroundColor: "#b08ec1",
  },
  text: {
    flex: 1,
    textAlign: "center",
    fontStyle: "italic",
    backgroundColor: "#0000003b",
    paddingTop: 2,
    paddingBottom: 2,
  },
  carouselContent: {
    position: "relative",
    padding: 16,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#dbd1e5",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginBottom: 20,
    marginTop: 20,
  },
  buttonFoward: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 5,
    top: "50%",
    transform: "translate(0, -50%)",
  },
  buttonBack: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 5,
    top: "50%",
    transform: "translate(0, -50%)",
  },
  buttonSlide: {
    padding: 5,
    borderRadius: 27,
    fontSize: 25,
    backgroundColor: "#793e976b",
  },
  slideContents: {
    padding: 16,
    justifyContent: "center",
  },
  slide: {
    padding: 2,
  },
  item: {
    textAlign: "center",
    margin: 16,
  },
  carouselImage: {
    width: 250,
    height: 250,
  },
});

export default Carousel;
