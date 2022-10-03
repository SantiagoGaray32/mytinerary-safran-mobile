import { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

const ProfileButton = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <View style={styles.profileContainer}>
      <TouchableOpacity
        style={styles.profileButton}
        onPress={() => setToggle(!toggle)}
      >
        <Image
          style={styles.profilePhoto}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
      </TouchableOpacity>
      {toggle && (
        <View style={styles.toggleButtonContainer}>
          <TouchableOpacity style={styles.toggleButtons}>
            <Button
              title="Login"
              color="transparent"
              accessibilityLabel="Login from page"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.toggleButtons}>
            <Button
              title="Logout"
              color="transparent"
              accessibilityLabel="Logout from page"
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    width: 100,
    height: 50,
    backgroundColor: "#7c7281",
    position: "relative",
  },
  profileButton: {
    width: 50,
    height: 50,
  },
  profilePhoto: {
    width: 50,
    height: 50,
  },
  toggleButtonContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#7c7281",
    width: 100,
    zIndex: 999,
    position: "absolute",
    top: 50,
    right: 0,
  },
});

export default ProfileButton;
