import React, { useEffect, useState } from "react";
import {Text,View} from 'react-native'
export default function CountDown({ minutes = 0, seconds = 0,over,setOver }) {
  const [time, setTime] =useState({
    minutes: parseInt(minutes),
    seconds: parseInt(seconds)
  });

  const tick = () => {
    if (over) return;
    if ( time.minutes == 0 && time.seconds == 0) setOver(true);
    else if (time.minutes == 0 && time.seconds == 0)
      setTime({
        minutes: 59,
        seconds: 59
      });
    else if (time.seconds == 0)
      setTime({
        minutes: time.minutes - 1,
        seconds: 59
      });
    else
      setTime({
        minutes: time.minutes,
        seconds: time.seconds - 1
      });
  };

  React.useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <View>
      <Text>{`${time.minutes.toString().padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')}s`}</Text>
    </View>
  );
}