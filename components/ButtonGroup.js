import React, { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Button from "./lib/Button";
import {Text} from "react-native";

const elems = [];
const item = {};
const ready = false;

function ButtonGroup() {
  const { toggleTheme } = useContext(ThemeContext);
  const [visible, setVisible] = useState(true);
  return (
    <>
      <Button
        title={`${(visible && "Hide") || "Display"} buttons`}
        onClick={() => setVisible(!visible)}
      />
      {visible && (
        <>
          <Button title="coucou" onClick={() => alert("coucou")} />
          <Button title="foo" onClick={() => alert("foo")} />
          <Button title={true} />
          <Button variant="icon" title={10} size={40} />
          {elems.length > 0 && (
            <Text>
              Loaded item
            </Text>
          )}
          {!elems.length && ready && <Text>"No Elements"</Text>}
          {!elems.length && !ready && <Text>"Loading"</Text>}
          <Button title={(() => "ToggleTheme")()} onClick={toggleTheme} />
          <Button variant="rounded" title={["test", "test2"]} />
        </>
      )}
    </>
  );
}

export default ButtonGroup;
