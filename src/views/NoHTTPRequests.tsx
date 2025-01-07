import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

import { loadWidgetScript, removeWidgetScript } from "../utils";

const NoHTTPRequests = () => {
  useEffect(() => {
    loadWidgetScript();
    return () => removeWidgetScript(); // Clean up when leaving the page
  }, []);

  return (
    <div className="NoHTTPRequests">
      <Helmet>
        <meta
          http-equiv="Content-Security-Policy"
          content="connect-src 'self';"
        />
      </Helmet>
      <Link to="/">Back to home</Link>
      <p>Check your browser console</p>
      <house-frontend></house-frontend>
    </div>
  );
};

export default NoHTTPRequests;
