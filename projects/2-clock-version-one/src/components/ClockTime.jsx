function ClockTime() {
  let time = new Date();

  return (
    <p className="lead">
      This is the current date & Time: {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
}

export default ClockTime;
