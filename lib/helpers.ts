import { absoluteUrl } from "./utils";

// A list of all the routes available from the backend

export const signUpRoute = absoluteUrl("/auth/users/");
export const signInRoute = absoluteUrl("/auth/jwt/create/");
export const refreshRoute = absoluteUrl("/auth/jwt/refresh/");
export const verifyRoute = absoluteUrl("/auth/jwt/verify/");
export const resetEmailRoute = absoluteUrl("/auth/users/set_email/");
export const resetPasswordRoute = absoluteUrl("/auth/users/set_password/");
export const googleOAuth = absoluteUrl(
  "/auth/o/google-oauth2/?redirect_uri=https://eloquentexchange.org/dashboard"
);
export const postGoogleOAuth = absoluteUrl("/auth/o/google-oauth2/");
export const getUsers = absoluteUrl("/auth/users/");
export const getRefferalRoute = absoluteUrl("/referral_code/");
export const sendEmailRoute = absoluteUrl("/send-email/");
export const getCrypto = absoluteUrl("/crypto-transactions/");
export const getBoughtCrypto = absoluteUrl("/crypto-transactions/bought/");
export const getSoldCrypto = absoluteUrl("/crypto-transactions/sold/");
export const getWalletListRoute = absoluteUrl("/wallet/");
export const getPackageListRoute = absoluteUrl("/package/");
export const buyRoute = absoluteUrl("/buy/");
export const sellRoute = absoluteUrl("/sell/");
export const initiatePaymentRoute = absoluteUrl("/initiate-payment/");
export const getCoinList = absoluteUrl("/coin/");
