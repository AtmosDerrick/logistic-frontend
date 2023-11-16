import React, { useEffect, useState } from "react";
import ViewOrder from "./ViewOrder";
import CreateOrder from "./CreateOrder";
import Shipped from "./Shipped";

function Details({ functionality }) {
  const [showFunctionality, setShowFunctionality] = useState("view");
  useEffect(() => {
    console.log({ functionality });
    switch (functionality) {
      case "view":
        setShowFunctionality("view");
        break;
      case "create":
        setShowFunctionality("create");
        break;
      case "shipped":
        setShowFunctionality("shipped");
        break;
      case "Delivered":
        setShowFunctionality("create");
        break;
    }
  }, [functionality]);

  console.log({ showFunctionality });
  if (showFunctionality === "view") {
    return <ViewOrder />;
  } else if (showFunctionality === "create") {
    return <CreateOrder />;
  } else if (showFunctionality === "shipped") {
    return <Shipped />;
  }
}

export default Details;
