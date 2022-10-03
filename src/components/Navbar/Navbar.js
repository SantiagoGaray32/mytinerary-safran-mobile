import {
  StyleSheet,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import ProfileButton from "../ProfileButton/ProfileButton";

const Navbar = () => (
  <View style={styles.navbar}>
    <View style={styles.navbarLinks}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
      <TouchableOpacity style={styles.navButton}>
        <Button
          title="Home"
          color="transparent"
          accessibilityLabel="Go to home page"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton}>
        <Button
          title="Cities"
          color="transparent"
          accessibilityLabel="Go to check all cities"
        />
      </TouchableOpacity>
    </View>
    <ProfileButton />
  </View>
);

const styles = StyleSheet.create({
  navbar: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 50,
    backgroundColor: "#7c7281",
  },
  navbarLinks: {
    display: "flex",
    flexDirection: "row",
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  navButton: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    width: 60,
    paddingBottom: 3,
  },
});

export default Navbar;
