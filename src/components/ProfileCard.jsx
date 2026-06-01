import { Camera } from "lucide-react";

const ProfileCard = ({
  name,
  email,
  image,
  description,
}) => {
  return (
    <div className="bg-[#F7F8F9] px-5 py-6 border-b border-dashed border-gray-300">
      <div className="flex items-start gap-4">
        
        {/* Profile Image */}
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-20 h-20 rounded-full object-cover"
          />

          <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#6C25FF] rounded-full flex items-center justify-center">
            <Camera size={12} color="white" />
          </div>
        </div>

        {/* User Info */}
        <div>
          <h2 className="font-semibold text-gray-900">
            {name}
          </h2>

          <p className="text-sm text-gray-600">
            {email}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="mt-5 text-sm leading-6 text-gray-700">
        {description}
      </p>
    </div>
  );
};

export default ProfileCard;