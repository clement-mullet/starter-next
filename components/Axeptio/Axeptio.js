import React, { useEffect } from 'react'
import "./axeptio.module.scss"

export default function Axeptio() {

    useEffect(() => {
        window.axeptioSettings = {
            clientId: "60a275c2e34b5e74720e5388",
            cookiesVersion: "stacky-base",
            };
            
            (function(d, s) {
                var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
                e.async = true;
                e.src = "//static.axept.io/sdk-slim.js";
                t.parentNode.insertBefore(e, t);
            })
            (document, "script");
        
        
        void 0 === window._axcb && (window._axcb = []);
        window._axcb.push(function(axeptio) {
            axeptio.on("cookies:complete", function(choices) {
            //PUSH ANALYSTIC
            })
        })
    }, [])
}
