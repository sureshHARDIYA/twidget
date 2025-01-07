import { useEffect } from "react";
import { Link } from "react-router-dom";
import { loadWidgetScript, removeWidgetScript } from "../utils";

const WorkingVersion = () => {
  useEffect(() => {
    loadWidgetScript();
    return () => removeWidgetScript(); // Clean up when leaving the page
  }, []);

  return (
    <div className="WorkingVersion">
      <Link to="/">Back to home </Link>
      <house-frontend></house-frontend>
    </div>
  );
};

export default WorkingVersion;
