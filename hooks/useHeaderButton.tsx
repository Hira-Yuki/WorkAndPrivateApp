import { useState } from "react";

export default function useHeaderButton() {
  const [working, setWorking] = useState(true);
  const travel = () => setWorking(false);
  const work = () => setWorking(true);

  return {
    working,
    travel,
    work
  }
}
