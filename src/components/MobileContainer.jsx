const MobileContainer = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f7f7]">
      <div className="w-[375px] h-[812px] bg-white border overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default MobileContainer;