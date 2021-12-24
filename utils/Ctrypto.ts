import * as CryptoJS from "crypto-js";
const apiSecret = process.env.API_SECRET_KEY;

export const cipher = (content: string) => {
  return CryptoJS.HmacSHA256(content, apiSecret).toString();
};
