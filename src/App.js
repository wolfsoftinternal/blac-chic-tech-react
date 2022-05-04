import React, { useEffect } from "react";

// ALL CSS FILES IMPORT HERE
import "./Assets/css/bootstrap.min.css";
import "./Assets/css/all-plugin.css";
import "./Assets/css/nice-select.css";
import "./Assets/css/owl.carousel.min.css";
import "./Components/Common/style.css";
import "./Assets/css/custom.css";

import RootRoute from "./Components/Routes/RootRoute";
import LayoutProvider from "./Components/Common/Layouts/LayoutProvider";
import useScript from "./Utilities/Functions";

function App() {
  // useScript("/user/js/jquery.js");
  // useScript("/user/js/bootstrap.min.js");
  // useScript("/user/js/jquery.steps.min.js");
  // useScript("/user/js/custom.js");
  // useScript("/user/js/owl.carousel.min.js", true);
  // useScript("/user/js/iconify.min.js");

  return (
    <LayoutProvider>
      <RootRoute />
    </LayoutProvider>
  );
}

export default App;
