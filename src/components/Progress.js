import React from "react";
import useStorage from "../hooks/useStorage";

function Progress({ file }) {
  const { progress, url } = useStorage(file);

  //   console.log(progress, url);
  return (
    <div>
      {progress === 100 && url ? "Done uploading" : `${Math.floor(progress)} %`}
    </div>
  );
}

export default Progress;
