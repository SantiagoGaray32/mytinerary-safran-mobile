import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";

const CityCard = ({ id, name, photo }) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => console.log(id)}>
        <View style={styles.titleBox}>
          <Text style={styles.text}>{name}</Text>
        </View>
        <View style={styles.contentBox}>
          <Image
            style={styles.photo}
            source={{
              uri: photo,
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 5,
    margin: 15,
    boxShadow: "-1px 3px 13px 0px rgba(0,0,0,0.75)",
    borderRadius: 2,
  },
  titleBox: {
    padding: 10,
    textAlign: "center",
  },
  text: {
    color: "#CACACA",
    fontSize: 20,
  },
  contentBox: {
    padding: 2,
  },
  photo: {
    width: "100%",
    height: 200,
  },
});

export default CityCard;
