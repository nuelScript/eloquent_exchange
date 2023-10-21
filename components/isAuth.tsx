"use client";

import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import axios from "axios";

import { verifyRoute } from "@/lib/helpers";
import { getCookie } from "@/lib/utils";
import toast from "react-hot-toast";

export let isAuthenticated = false;

export default function isAuth(Component: any) {
  return function IsAuth(props: any) {
    const accessToken = getCookie("access_token");
    const [isValidToken, setIsValidToken] = useState(true);

    useEffect(() => {
      if (accessToken) {
        axios
          .post(verifyRoute, {
            token: accessToken,
          })
          .then((response) => {
            const data = response.status;
            if (data === 200) {
              setIsValidToken(true);
            } else {
              setIsValidToken(false);
            }
          })
          .catch((error) => {
            console.error("Error checking token validity", error);
            setIsValidToken(false);
          });
      }
    }, [accessToken]);

    if (accessToken && isValidToken) {
      isAuthenticated = true;
    }

    useEffect(() => {
      if (!isAuthenticated || !accessToken || !isValidToken) {
        // setInterval(toast.loading("Loading..."), 3);
        return redirect("/sign-in");
      }
    }, [accessToken, isValidToken]);

    if (!isAuthenticated && !isValidToken) {
      return null;
    }

    return <Component {...props} />;
  };
}
