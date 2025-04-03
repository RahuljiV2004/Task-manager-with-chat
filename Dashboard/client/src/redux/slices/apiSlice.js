import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define your API base URL
const API_URL = "http://localhost:8800/api"; // Update if deployed

// Configure the base query with credentials enabled
const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  credentials: "include", // ✅ Ensures cookies (JWT token) are sent with requests
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: [], // Add your tag types if needed for caching
  endpoints: (builder) => ({}),
});
