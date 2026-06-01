import MobileContainer from "../components/MobileContainer";
import InputField from "../components/InputField";

const Login = () => {
  return (
    <MobileContainer>
      <div className="p-6">

        <h1 className="text-4xl font-bold leading-tight">
          Signin to your
          <br />
          PopX account
        </h1>

        <p className="text-gray-500 mt-4">
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>

        <div className="mt-8">

          <InputField
            label="Email Address"
            placeholder="Enter email address"
          />

          <InputField
            label="Password"
            placeholder="Enter password"
            type="password"
          />

          <button className="w-full py-3 bg-gray-300 text-white rounded-md font-semibold">
            Login
          </button>

        </div>

      </div>
    </MobileContainer>
  );
};

export default Login;