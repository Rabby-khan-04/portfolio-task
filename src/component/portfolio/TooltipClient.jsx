"use client";

import { Tooltip } from "react-tooltip";

const TooltipClient = ({ id }) => {
  return <Tooltip id={id} place="bottom" variant="light" />;
};

export default TooltipClient;
