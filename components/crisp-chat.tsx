"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("de128d7b-efbc-4dfa-9f86-b9ae4a7fbb77");
  }, []);

  return null;
};
