import axios from "axios"

export const API = axios.create({
    baseURL: 'https://api.spotify.com/v1',
})

export const AUTH_API = axios.create({
    baseURL: 'https://accounts.spotify.com/api',
})