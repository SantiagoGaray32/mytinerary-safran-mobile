import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useSelector, useDispatch } from "react-redux";
import { setNameFilter, setCities } from "../features/citiesSlices";
import { useGetCityByNameAndTypeQuery } from "../features/citiesAPI";
import { View, ScrollView, FlatList, StyleSheet } from "react-native";
import CityCard from "../components/CityCard/CityCard";

export default function Cities() {
  const nameFilter = useSelector((state) => state.cities.nameFilter);
  const cities = useSelector((state) => state.cities.cities);
  const dispatch = useDispatch();

  const { data } = useGetCityByNameAndTypeQuery({
    type: "city",
    name: nameFilter,
  });

  useEffect(() => {
    if (data) {
      console.log("data", data);
      dispatch(setCities(data));
    }
  }, [data]);

  //const handleChange = (e) => {
  //dispatch(setNameFilter(e.target.value));
  //};

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <FlatList
          data={cities}
          renderItem={({ item }) => (
            <CityCard id={item._id} photo={item.photo} name={item.city} />
          )}
          keyExtractor={(city) => city._id}
        />
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
  scroll: {
    flex: 1,
  },
});
