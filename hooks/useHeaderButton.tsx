import { useState } from "react";

export default function useHeaderButton() {
  const [isWorking, setIsWorking] = useState(true);
  const travel = () => setIsWorking(false);
  const work = () => setIsWorking(true);

  return {
    isWorking,
    travel,
    work
  }
}
