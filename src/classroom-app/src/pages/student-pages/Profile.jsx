import { useState } from "react";

function Profile() {

    const [profileEditing, setProfileEditing] = useState(false);
    const [profileData, setProfileData] = useState({
        name: "John Doe",
        age: 20,
        username: "johndoe123",
        birthday: "2005-05-15",
        email: "johndoe@email.com",
    });

    const handleProfileChange = (event) => {
        const { name, value } = event.target;
        setProfileData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    };

    return (
        <div className="flex flex-col gap-6">
          <h2>Edit Your Profile</h2>
          <form className="space-y-4">
            <input
              type="text"
              name="name"
              value={profileData.name}
              onChange={handleProfileChange}
              placeholder="Name"
              className="border p-2 rounded-lg w-full"
            />
            <input
              type="number"
              name="age"
              value={profileData.age}
              onChange={handleProfileChange}
              placeholder="Age"
              className="border p-2 rounded-lg w-full"
            />
            <input
              type="text"
              name="username"
              value={profileData.username}
              onChange={handleProfileChange}
              placeholder="Username"
              className="border p-2 rounded-lg w-full"
            />
            <input
              type="date"
              name="birthday"
              value={profileData.birthday}
              onChange={handleProfileChange}
              className="border p-2 rounded-lg w-full"
            />
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleProfileChange}
              placeholder="Email"
              className="border p-2 rounded-lg w-full"
            />
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setSelectedSection("home")}
                className="bg-red-500 text-white p-2 rounded-full px-6 flex justify-center"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-green-500 text-white p-2 rounded-full px-6 flex justify-center"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      );
}

export default Profile;