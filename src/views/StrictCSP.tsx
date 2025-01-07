import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

import { loadWidgetScript, removeWidgetScript } from "../utils";

const StrictCSP = () => {
  useEffect(() => {
    loadWidgetScript();
    return () => removeWidgetScript(); // Clean up when leaving the page
  }, []);

  return (
    <div className="StrictCSP">
      <Helmet>
        <meta
          http-equiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self'; style-src 'self'; font-src 'self';"
        />
      </Helmet>
      <Link to="/">Back to home</Link>
      <p>Check your browser console</p>
      <house-frontend></house-frontend>
    </div>
  );
};

export default StrictCSP;
