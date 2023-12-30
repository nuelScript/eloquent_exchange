"use client";

import AboutSection from "./components/about";
import AcademySection from "./components/academy";
import Seperation from "./components/border";
import ContactSection from "./components/contact";
import Footer from "./components/footer";
import HomeSection from "./components/home";
import ReferralSection from "./components/referral";
import ReviewSection from "./components/reviews";
import React, { useEffect, useRef, useState } from "react";

// const INTERCOM_APP_ID = "jcabc7e3";

const LandingPage = () => {
  // const { boot } = useIntercom();

  useEffect(() => {
    // Intercom code snippet
    (function () {
      var w = window;
      var ic = w.Intercom;
      if (typeof ic === "function") {
        ic("reattach_activator");
        ic("update", w.intercomSettings);
      } else {
        var d = document;
        var i = function () {
          i.c(arguments);
        };
        i.q = [];
        i.c = function (args) {
          i.q.push(args);
        };
        w.Intercom = i;
        var l = function () {
          var s = d.createElement("script");
          s.type = "text/javascript";
          s.async = true;
          s.src = "https://widget.intercom.io/widget/your_app_id";
          var x = d.getElementsByTagName("script")[0];
          x.parentNode.insertBefore(s, x);
        };
        if (w.attachEvent) {
          w.attachEvent("onload", l);
        } else {
          w.addEventListener("load", l, false);
        }
      }
    })();

    // Call boot method
    (window as any).Intercom("boot", {
      app_id: "your_app_id",
    });
  }, []);

  // useEffect(() => {
  //   boot();
  // });
  return (
    <div className="min-h-screen flex flex-col">
      <HomeSection />
      <Seperation />
      <AboutSection />
      <Seperation />
      <AcademySection />
      <Seperation />
      <ReferralSection />
      <Seperation />
      <ReviewSection />
      <Seperation />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
