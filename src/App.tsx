import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";

import "./App.scss";
import WorkingVersion from "./views/WorkingVersion";
import StrictCSP from "./views/StrictCSP";
import NoHTTPRequests from "./views/NoHTTPRequests";
import NoFontsLoading from "./views/NoFontsLoading";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/working-version" element={<WorkingVersion />} />
        <Route path="/strict-csp" element={<StrictCSP />} />
        <Route path="/no-fonts" element={<NoFontsLoading />} />
        <Route path="/no-http" element={<NoHTTPRequests />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
