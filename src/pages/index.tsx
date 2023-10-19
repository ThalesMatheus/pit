import React, { useState } from "react";

const Iframe = ({ url }) => {
  const [iframeSrc, setIframeSrc] = useState("localhost:3001");

  return (
    <div>
      <iframe
        src={iframeSrc}
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default Iframe;