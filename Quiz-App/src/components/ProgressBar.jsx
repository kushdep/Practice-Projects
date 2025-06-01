import { useEffect, useState } from "react";

export default function ProgressBar({ onTimeOut, timeOut }) {
  const [remTime, setRemTime] = useState(timeOut);

  useEffect(() => {
    const timer = setTimeout(onTimeOut, timeOut);

    return () => {
      clearTimeout(timer);
    };
  }, [timeOut, onTimeOut]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemTime((prevRemTime) => prevRemTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [onTimeOut]);

  return <progress id="question-time" max={timeOut} value={remTime} />;
}
