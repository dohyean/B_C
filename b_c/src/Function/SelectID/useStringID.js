import { useState, useEffect } from "react";

const useStringID = (String_ID) => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    if (String_ID) {
      const optionsArray = String_ID.split("\n")
        .map((id) => id.replace(/\r/g, ""))
        .filter(Boolean);
      setOptions(optionsArray);
      if (optionsArray.length > 0) {
        setSelectedOption(optionsArray[0]);
      }
    }
  }, [String_ID]);

  return { options, selectedOption, setSelectedOption };
};

export default useStringID;
