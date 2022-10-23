import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const exchangesApiHeaders = {
  'X-RapidAPI-Key': 'd5c7fbffa0msh19772fd3f105a62p1981e9jsn7b8253be6f64',
  'X-RapidAPI-Host': 'coingecko.p.rapidapi.com',
};
const baseUrl = 'https://coingecko.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: exchangesApiHeaders });

export const exchangesApi = createApi({
  reducerPath: 'cryptoExchangesApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getExchanges: builder.query({
      query: () => createRequest(`/exchanges`),
    }),
  }),
});

export const { useGetExchangesQuery } = exchangesApi;
