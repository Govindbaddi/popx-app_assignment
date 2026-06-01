import MobileContainer from "../components/MobileContainer";

const Account = () => {
  return (
    <MobileContainer>

      <div>

        <div className="border-b p-5">
          <h2 className="text-xl font-semibold">
            Account Settings
          </h2>
        </div>

        <div className="bg-[#F7F7F7] p-5">

          <div className="flex gap-4">

            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="w-20 h-20 rounded-full"
            />

            <div>
              <h3 className="font-bold">
                Marry Doe
              </h3>

              <p>
                MarryDoe@gmail.com
              </p>
            </div>

          </div>

          <p className="mt-5 text-gray-700 leading-7">
            Lorem Ipsum Dolor Sit Amet,
            Consetetur Sadipscing Elitr,
            Sed Diam Nonumy Eirmod Tempor
            Invidunt Ut Labore Et Dolore
            Magna Aliquyam Erat.
          </p>

        </div>

      </div>

    </MobileContainer>
  );
};

export default Account;