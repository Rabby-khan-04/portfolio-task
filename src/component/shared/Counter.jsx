const Counter = ({ title, number }) => {
  return (
    <div className="text-center">
      <h3 className="text-secondary text-4xl font-bold">{number}</h3>
      <p className="text-light-gray2 text-base font-semibold">{title}</p>
    </div>
  );
};

export default Counter;
