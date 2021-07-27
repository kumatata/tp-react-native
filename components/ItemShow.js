import React from "react";
import Button from "./lib/Button";

function ItemShow() {
  return (
    <div>
      Item #1
      <Button title="Delete" onClick={() => alert("delete")} />
    </div>
  );
}

export default ItemShow;
