import { useState, useEffect } from "react";

export const CountdownTimer = () => {
  const [minutes, setMinutes] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      if (minutes > 0) {
        setMinutes(minutes - 1);
      } else {
        clearInterval(interval);
      }
    }, 60000);

    return () => clearInterval(interval);
  }, [minutes]);

  return <h3>{`ETA ${minutes.toString()} min`}</h3>;
};
