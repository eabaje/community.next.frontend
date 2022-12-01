import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "./axios";

const getByUrl = async (url) => {
  const res = await makeRequest.get(url);
  return res.data;
};

export default function fetchQueryData(url, cacheName) {
  return useQuery([cacheName, url], () => getByUrl(url));
}
