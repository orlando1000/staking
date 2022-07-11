import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";

export function Swap({ items, page, setPage }) {
  //   const [] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeIndex = (index) => {
    setPage(index);
  };

  return (
    <SwipeableViews
      springConfig={{
        duration: "0.5s",
        easeFunction: "cubic-bezier(0.15, 0.3, 0.25, 1)",
        delay: "0s",
      }}
      index={page}
      onChangeIndex={handleChangeIndex}
    >
      {items.map((n, i) => n)}
    </SwipeableViews>
  );
}
