import { useState } from "react";
import Demo from "./Demo";

function DemoApp() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Demo />}
    </div>
  );
}

export default DemoApp;
