const Button = ({
  text,
  bg,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full py-3 rounded-md text-white font-semibold ${bg}`}
    >
      {text}
    </button>
  );
};

export default Button;