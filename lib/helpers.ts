import { absoluteUrl } from "./utils";

// A list of all the routes available from the backend

export const signInRoute = absoluteUrl("/auth/jwt/create/");
export const refreshRoute = absoluteUrl("/auth/jwt/refresh/");
export const signUpRoute = absoluteUrl("/auth/users/");
export const buyRoute = absoluteUrl("/buy/");
export const sellRoute = absoluteUrl("/sell/");
export const getRefferalRoute = absoluteUrl("/referral_code/");
export const walletRoute = absoluteUrl("/wallet/");
export const resetEmailRoute = absoluteUrl("/auth/users/set_email/");
export const resetPasswordRoute = absoluteUrl("/auth/users/set_password/");
export const getWalletListRoute = absoluteUrl("/wallet/");
export const getPackageListRoute = absoluteUrl("/package/");
export const initiatePaymentRoute = absoluteUrl("/initiate-payment/");
export const sendEmailRoute = absoluteUrl("/send-email/");
export const googleOAuth = absoluteUrl(
  "/auth/o/google-oauth2/?redirect_uri=https://eloquentexchange.org/dashboard"
);
