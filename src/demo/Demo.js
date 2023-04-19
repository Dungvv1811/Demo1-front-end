import React, { useEffect, useState } from "react";

function Demo() {
  const [title, setTitle] = useState("");
  useEffect(() => {
    document.title = title;
  });

  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
    </div>
  );
}

export default Demo;
