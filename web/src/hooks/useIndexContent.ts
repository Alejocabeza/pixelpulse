import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const useIndexContent = () => {
  const pathName = usePathname();
  const [sections, setSections] = useState([]);
  useEffect(() => {
    setSections(Array.from(document.querySelectorAll(".section")));
  }, [pathName]);
  return [sections];
};
