import axios from "axios";

// Maplytic replaces the placeholder with its own address
export const connection = axios.create({
    baseURL: 'https://lurajon.maplytic.no/',
});