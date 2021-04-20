import React, { useState } from "react";
import Popover from "@jonny/popover";
import Tooltip from "@jonny/tooltip";

export const App: React.FC = () => {
  const [popover, setPopover] = useState(false);
  return (
    <div>
      <div>Hello World!</div>
      <Popover
        tip={<div>hi there!</div>}
        preferredPlacement="bottom"
        popupVisible={popover}
        onClose={() => setPopover(false)}
      >
        <button onClick={() => setPopover(true)}>Click for popover</button>
      </Popover>
      <Tooltip preferredPlacement="bottom" tip="hi">
        <button>Hover</button>
      </Tooltip>
    </div>
  );
};
