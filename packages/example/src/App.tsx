import React, { useState } from "react";
import Popover from "@jonny/popover";

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
    </div>
  );
};
