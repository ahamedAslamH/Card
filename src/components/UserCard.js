import React from 'react';

const UserCard = ({ user }) => {
  if (!user) return null;

  return (
    <div className="w-[800px] h-[400px] bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200 rounded-lg shadow-lg">
      <div className="flex p-8 h-full">
        {/* Left side - Image with enhanced styling */}
        <div className="w-[300px] h-[300px] border border-gray-200 rounded-lg overflow-hidden shadow-md bg-white mr-12">
          <img
            className="w-full h-full object-cover"
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
          />
        </div>

        {/* Right side - Information boxes with formal styling */}
        <div className="flex flex-col gap-6 pt-4">
          <div className="flex gap-4">
            <div className="bg-white border border-gray-200 rounded-lg px-6 py-3 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-gray-600 font-semibold">First Name: </span>
              <span className="text-gray-800">{user.name.first}</span>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg px-6 py-3 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-gray-600 font-semibold">Last Name: </span>
              <span className="text-gray-800">{user.name.last}</span>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg px-6 py-3 shadow-sm hover:shadow-md transition-shadow w-fit">
            <span className="text-gray-600 font-semibold">Gender: </span>
            <span className="text-gray-800">{user.gender}</span>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg px-6 py-3 shadow-sm hover:shadow-md transition-shadow w-fit">
            <span className="text-gray-600 font-semibold">Phone Number: </span>
            <span className="text-gray-800">{user.phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;