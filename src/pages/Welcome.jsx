import { useNavigate } from "react-router-dom";
import MobileContainer from "../components/MobileContainer";
import Button from "../components/Button";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <MobileContainer>
      <div className="h-full flex flex-col justify-end p-6 pb-10">

        <h1 className="text-3xl font-bold">
          Welcome to PopX
        </h1>

        <p className="text-gray-500 mt-2">
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>

        <div className="mt-8">
          <Button
            text="Create Account"
            bg="bg-[#6C25FF]"
            onClick={() => navigate("/register")}
          />
        </div>

        <div className="mt-3">
          <button
            onClick={() => navigate("/login")}
            className="w-full py-3 rounded-md bg-[#E7D7FF] font-semibold"
          >
            Already Registered? Login
          </button>
        </div>

      </div>
    </MobileContainer>
  );
};

export default Welcome;