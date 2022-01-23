import { useEffect, useState } from "react";

const useTimer = (startTime: number) => {
  const [time, setTime] = useState<number>(startTime * 60);
  const [timeRemaning, setTimeRemaning] = useState<string>(`${startTime}:00`);

  const timer = () => {
    const minutes = Math.floor(time / 60);
    const sec = time % 60;
    const seconds = sec < 10 ? "0" + sec.toString() : sec.toString();

    setTimeRemaning(() => `${minutes}:${seconds}`);

    setTime(() => time - 1);
  };

  useEffect(() => {
    if (time < 0) {
      return;
    }
    const clearTimer = setInterval(timer, 1000);
    return () => {
      clearInterval(clearTimer);
    };
  }, [time]);

  return { timeRemaning, time, setTime };
};

export default useTimer;
