const InputField = ({
  label,
  placeholder,
  type = "text",
}) => {
  return (
    <div className="mb-5">
      <label className="text-[#6C25FF] text-sm font-medium">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full border rounded-md p-3 mt-1 outline-none"
      />
    </div>
  );
};

export default InputField;