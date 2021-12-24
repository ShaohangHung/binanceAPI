import fetch, { HeadersInit } from "node-fetch";
import * as Ctrypto from "../utils/Ctrypto";
import { URLSearchParams } from "url";

const baseUrl = process.env.BASE_URL;
const apiKey = process.env.API_KEY;

const headers: HeadersInit = {
  "X-MBX-APIKEY": apiKey,
};

export const getSystemStatus = async () => {
  const apiUrl = `/sapi/v1/system/status`;
  const response = await fetch(baseUrl + apiUrl);
  const data = await response.json();
  console.log(data);
};

export const getAllCoinsInfo = async () => {
  const apiUrl = `/sapi/v1/capital/config/getall?`;
  const nowTime = new Date().getTime() - 1000;

  const params = new URLSearchParams();
  params.append("timestamp", nowTime.toString());
  const signature = Ctrypto.cipher(params.toString());
  params.append("signature", signature);
  console.log(baseUrl + apiUrl + params.toString());
  const response = await fetch(baseUrl + apiUrl + params, {
    method: "GET",
    headers,
  });
  let data = await response.json();
  data = data.filter((coinData) => {
    if ([`BTC`, `ETH`].includes(coinData.coin)) {
      return true;
    }
  });
  console.log(data);
};

export const dailyAccountSnapshot = async () => {
  const apiUrl = `/sapi/v1/accountSnapshot?`;
  const nowTime = new Date().getTime() - 1000;

  const params = new URLSearchParams();
  params.append("timestamp", nowTime.toString());
  params.append("type", `SPOT`);
  const signature = Ctrypto.cipher(params.toString());
  params.append("signature", signature);
  console.log(baseUrl + apiUrl + params.toString());
  const response = await fetch(baseUrl + apiUrl + params, {
    method: "GET",
    headers,
  });
  let data = await response.json();
  console.log(data);
};
