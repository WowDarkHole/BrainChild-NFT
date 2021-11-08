import { useRef, useEffect } from "react";

export function usePrevious(value) {
  const ref = useRef(0);
  useEffect(() => {
    console.log(ref.current, '--- ', value, ' ---')
    ref.current = value;
  }, [value]);
  return ref.current;
}