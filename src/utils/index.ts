export const loadWidgetScript = () => {
  const scriptId = "house-frontend-script";
  if (!document.getElementById(scriptId)) {
    const script = document.createElement("script");
    script.src =
      "https://house-frontend-mvp-test3-trygno.ujasiri.net/house-frontend.umd.js";
    script.id = scriptId;
    script.async = true;
    document.body.appendChild(script);
  }
};

export const removeWidgetScript = () => {
  const script = document.getElementById("house-frontend-script");
  if (script) {
    script.remove();
  }
};
