import { useNavigate } from "react-router-dom";
import MobileContainer from "../components/MobileContainer";
import InputField from "../components/InputField";

const Register = () => {
  const navigate = useNavigate();

  return (
    <MobileContainer>

      <div className="p-6 h-full flex flex-col">

        <h1 className="text-4xl font-bold">
          Create your
          <br />
          PopX account
        </h1>

        <div className="mt-8 flex-1">

          <InputField
            label="Full Name*"
            placeholder="Marry Doe"
          />

          <InputField
            label="Phone Number*"
            placeholder="Marry Doe"
          />

          <InputField
            label="Email Address*"
            placeholder="Marry Doe"
          />

          <InputField
            label="Password*"
            placeholder="Marry Doe"
          />

          <InputField
            label="Company Name"
            placeholder="Marry Doe"
          />

          <div>
            <p className="font-medium">
              Are you an Agency?*
            </p>

            <div className="flex gap-6 mt-3">

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="agency"
                  defaultChecked
                />
                Yes
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="agency"
                />
                No
              </label>

            </div>
          </div>

        </div>

        <button
          onClick={() => navigate("/account")}
          className="bg-[#6C25FF] text-white py-3 rounded-md font-semibold"
        >
          Create Account
        </button>

      </div>

    </MobileContainer>
  );
};

export default Register;