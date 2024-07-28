import { useEffect, useState } from "react";

const PRIFIX = "codeopen-clone-";

function useLocalStorage(key, initialValue) {
  const prefixdKey = PRIFIX + key;

  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixdKey);

    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });
  useEffect(() => {
    localStorage.setItem(prefixdKey, JSON.stringify(value));
  }, [prefixdKey, value]);

  return [value, setValue];
}

export default useLocalStorage;
