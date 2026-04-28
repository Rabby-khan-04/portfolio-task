const BackgroundSquare = ({ count }) => {
  if (count === 2) {
    return (
      <>
        <div className="square one"></div>
        <div className="square two"></div>
      </>
    );
  }
  if (count === 4) {
    return (
      <>
        <div className="square one"></div>
        <div className="square two"></div>
        <div className="square three"></div>
        <div className="square four"></div>
      </>
    );
  } else {
    return (
      <>
        <div className="square one"></div>
        <div className="square two"></div>
        <div className="square three"></div>
        <div className="square four"></div>
        <div className="square five"></div>
        <div className="square six"></div>
      </>
    );
  }
};

export default BackgroundSquare;
