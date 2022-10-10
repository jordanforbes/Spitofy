import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers)=>{
            headers.set('X-RapidAPI-Key',
            '559fdc3e47mshbe942c02fc66a7dp13d1edjsn0d3bdb06f8a5');

            return headers;
        },
    }),
    endpoints: (builder) =>({
        getTopCharts: builder.query({ query: () => '/charts/world'}),
    }),
});

export const {
    useGetTopChartsQuery,
} = shazamCoreApi;
