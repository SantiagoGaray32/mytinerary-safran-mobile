import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const citiesAPI = createApi({
  reducerPath: "citiesAPI",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/",
  }),
  endpoints: (builder) => ({
    getAllCities: builder.query({
      query: () => "/cities",
    }),
    getCitiesById: builder.query({
      query: (id) => `/cities/${id}`,
    }),
    getCityByName: builder.query({
      query: (city) => `cities?city=${city}`,
    }),
    getCityByNameAndType: builder.query({
      query: ({ type, name }) => `cities?type=${type}&name=${name}`,
    }),
  }),
});

export default citiesAPI;
export const {
  useGetAllCitiesQuery,
  useGetCitiesByIdQuery,
  useGetCityByNameQuery,
  useGetCityByNameAndTypeQuery,
  useGetPostNewCityMutation,
} = citiesAPI;
