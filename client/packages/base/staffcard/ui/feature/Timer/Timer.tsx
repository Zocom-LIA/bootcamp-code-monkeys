import { Button, ButtonType } from "@zocom/button";
import { StyleTypes } from "@zocom/types";
import { useTimer } from './timerUtils'

type TimerType = {
  timeStamp: string | undefined;
  onStop: () => void;
  status: string;
  setStopTime: (time: string) => void;
};

export const Timer = ({
  timeStamp,
  onStop,
  status,
  setStopTime,
}: TimerType) => {
  const { elapsedTime, time, formattedTime, stopTimer } = useTimer({
    timeStamp,
    status,
    setStopTime,
  });

  return (
    <>
      <section className="staffcard__timer">
        {status === "onGoing"
          ? formattedTime(elapsedTime)
          : formattedTime(time)}
      </section>
      <Button
        onClick={() => { stopTimer(), status === "onGoing" ? onStop() : console.log("onClick didn't work") }}
        type={ButtonType.REGULAR}
        style={StyleTypes.ALERT}
      >
        {status === "done" ? "Serverad" : "Redo att serveras"}
      </Button>
    </>
  );
};