import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

import { loadWidgetScript, removeWidgetScript } from "../utils";

const NoFontsLoading = () => {
  useEffect(() => {
    loadWidgetScript();
    return () => removeWidgetScript();
  }, []);

  return (
    <div className="NoFontsLoading">
      <Helmet>
        <meta http-equiv="Content-Security-Policy" content="font-src 'self';" />
      </Helmet>
      <Link to="/">Back to home</Link>
      <p>Check your browser console</p>
      <house-frontend></house-frontend>
    </div>
  );
};

export default NoFontsLoading;
