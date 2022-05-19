import HttpClient from "../utils/httpClient";

export const products = () => {
  return HttpClient.doGet("/products", {});
};

export const product = (alias: string) => {
  return HttpClient.doGet(`/products/${alias}`, {});
};
