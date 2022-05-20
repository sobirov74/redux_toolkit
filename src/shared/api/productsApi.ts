import HttpClient from "../utils/httpClient";

export const products = () => {
  return HttpClient.doGet("/products", {});
};

export const product = ({ query }: { query: string }) => {
  return HttpClient.doGet(`/products/${query}`, {});
};
