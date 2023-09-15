import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useRestroCards from "../hooks/useRestroCards";
import AccordianHeaderRestro from "./AccordianHeaderRestro";

function RestroMenu() {
  const { resid } = useParams();
  const resp = useRestroCards(`users/${resid}`);
  const [showHeader, setShowHeader] = useState(true);
  const [showHeaderIdx, setShowHeaderIdx] = useState(0);
  return (
    <div className="w-9/12 text-center m-auto">
      <AccordianHeaderRestro  // contrlled component
        userData={resp}
        showHeader={showHeader}
        setShowHeader={setShowHeader}
        showHeaderIdx={showHeaderIdx}
        setShowHeaderIdx={setShowHeaderIdx}
      />
    </div>
  );
}

export default RestroMenu;
