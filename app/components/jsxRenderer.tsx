import React, { useEffect, useRef } from "react";
import DOMPurify from "dompurify";

const JsxRenderer = ({ jsxString }) => {
  const renderRef = useRef(null);

  useEffect(() => {
    if(renderRef.current) {
      const sanitizedHTML = DOMPurify.sanitize(jsxString);
      //console.log("sanitizedHTML", sanitizedHTML)
      renderRef.current.innerHTML = sanitizedHTML;
    }
  }, [jsxString]);

  //console.log("jsxString", jsxString)

  return <div className="w-full" ref={renderRef} />;
};

export default JsxRenderer;