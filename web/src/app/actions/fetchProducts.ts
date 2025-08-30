'use server'

import axios from 'axios'

const BASE_URL =  'http://localhost:3001/api'

export async function fetchProducts(params?: Record<string, string>) {
  const query = new URLSearchParams(params).toString()
  const { data } = await axios.get(`/products?${query}`, {
    baseURL: BASE_URL,
  })
  return data
}