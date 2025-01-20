import { useState, useEffect } from "react";
//import useEventListener from "./useEventListener";

export default function useHover2(ref) {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (ref == null) return;
    const node = ref.current;
    node.addEventListener("mouseover", () => setHovered(true));
    return () => node.removeEventListener("mouseover", () => setHovered(true));
  }, [ref]);

  useEffect(() => {
    if (ref == null) return;
    const node = ref.current;
    node.addEventListener("mouseout", () => setHovered(false));
    return () => node.removeEventListener("mouseout", () => setHovered(false));
  }, [ref]);

  return hovered;
}
