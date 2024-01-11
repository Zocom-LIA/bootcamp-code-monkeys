import { useEffect, useState } from "react";

type TimerUtilsType = {
  timeStamp: string | undefined;
  status: string;
  setStopTime: (time: string) => void;
};

export function useTimer({
  timeStamp,
  status,
  setStopTime,
}: TimerUtilsType) {
  const [startTime, setStartTime] = useState<number | undefined>(undefined);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    if (status === "onGoing" && timeStamp) {
      const startTimestamp = new Date(timeStamp).getTime();
      setStartTime(startTimestamp);
      const intervalId = setInterval(() => {
        const currentTime = new Date().getTime();
        setElapsedTime(currentTime - startTimestamp);
      }, 1000);
      return () => clearInterval(intervalId);
    } else if (status === "done" && timeStamp) {
      const convertedTime = parseFloat(timeStamp);
      setTime(convertedTime);
    }
  }, [status, timeStamp]);

  useEffect(() => {
    if (status === "onGoing" && elapsedTime > 0) {
      setStopTime(elapsedTime.toString());
    }
  }, [status, elapsedTime]);

  const stopTimer = () => {
    clearInterval(startTime);
  };

  const formattedTime = (milliseconds: number): string => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const formattedSeconds = seconds % 60;
    return `${minutes}:${formattedSeconds < 10 ? "0" : ""}${formattedSeconds}`;
  };

  return {
    elapsedTime,
    time,
    formattedTime,
    stopTimer,
  };
}