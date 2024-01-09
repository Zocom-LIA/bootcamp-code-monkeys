export const Timer = ( timeStamp:{ timeStamp: string | undefined } ) => {
    console.log('Time', timeStamp.timeStamp);
    const time = timeStamp.timeStamp;
    
    return (
      <section className="staffcard__timer">{time}</section>
    )
}
