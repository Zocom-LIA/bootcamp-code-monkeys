import { Button, ButtonType } from "@zocom/button";
import { StyleTypes } from "@zocom/types";
import { useEffect, useState } from "react";

type TimerType = {
  timeStamp: string | undefined;
  onStop: () => void;
  status: string;
};

// elapsed time vill vi mutera som timeStamp

export const Timer = ({ timeStamp, onStop, status }: TimerType) => {
  const [startTime, setStartTime] = useState<number | undefined>(undefined);
  const [elapsedTime, setElapsedTime] = useState<number>(0);

  useEffect(() => {
    if (timeStamp) {
      const startTimestamp = new Date(timeStamp).getTime();
      setStartTime(startTimestamp);
      const intervalId = setInterval(() => {
        const currentTime = new Date().getTime();
        setElapsedTime(currentTime - startTimestamp);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [timeStamp]);

  const stopTimer = () => {
    clearInterval(startTime);
    onStop();
  };

  const formattedTime = (milliseconds: number): string => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const formattedSeconds = seconds % 60;
    return `${minutes}:${formattedSeconds < 10 ? "0" : ""}${formattedSeconds}`;
  };

  return (
    <>
      <section className="staffcard__timer">
        {status === "onGoing" ? formattedTime(elapsedTime) : timeStamp}
      </section>
      <Button
        onClick={stopTimer}
        type={ButtonType.REGULAR}
        style={StyleTypes.ALERT}
      >
        {status === "done" ? "Serverad" : "Redo att serveras"}
      </Button>
    </>
  );
};
