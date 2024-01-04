"use client";

import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
// import type { Metadata } from "next";
import { Poppins } from "next/font/google";
// import Drift from "react-driftjs";
import ToasterProvider from "./providers/toast-provider";
import { useEffect } from "react";
import Drift from "react-driftjs";
import Script from "next/script";
// import { useIntercom } from "react-use-intercom";
// import { IntercomProvider } from "react-use-intercom";

// const INTERCOM_APP_ID = "jcabc7e3";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// export const metadata = {
//   title: "Eloquent Exchange",
//   description:
//     "Welcome to Eloquent Exchange. Your one stop community for all cryptocurrencies 🚀.",
// };

export default function RootLayout({ children }) {
  // const { boot } = useIntercom();

  const handleInteraction = function () {
    console.log("User has just interacted with the chatbot");
  };

  <Drift
    appId="ydun5wkgkrt5"
    style={{
      bottom: "150px",
    }}
    attributes={{ email: "wittstack@gmail.com", company: "Wittstack" }}
    eventHandlers={[
      { event: "conversation:firstInteraction", function: handleInteraction },
    ]}
  />;

  // useEffect(() => {
  //   boot();
  // });
  return (
    <html lang="en-US">
      <body className={poppins.className}>
        {/* <IntercomProvider appId={INTERCOM_APP_ID}> */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ToasterProvider />
          <Drift
            appId="ydun5wkgkrt5"
            style={{
              bottom: "100px",
            }}
            attributes={{ email: "wittstack@gmail.com", company: "Wittstack" }}
            eventHandlers={[
              {
                event: "conversation:firstInteraction",
                function: handleInteraction,
              },
            ]}
          />
          {children}
        </ThemeProvider>
        {/* </IntercomProvider> */}
        {/* <Drift appId="ydun5wkgkrt5" /> */}
        {/* <script>
"use strict";

!function() {
  var t = window.driftt = window.drift = window.driftt || [];
  if (!t.init) {
    if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
    t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
    t.factory = function(e) {
      return function() {
        var n = Array.prototype.slice.call(arguments);
        return n.unshift(e), t.push(n), t;
      };
    }, t.methods.forEach(function(e) {
      t[e] = t.factory(e);
    }), t.load = function(t) {
      var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
      o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
      var i = document.getElementsByTagName("script")[0];
      i.parentNode.insertBefore(o, i);
    };
  }
}();
drift.SNIPPET_VERSION = '0.3.1';
drift.load('ydun5wkgkrt5');
        </script> */}
      </body>
    </html>
  );
}
