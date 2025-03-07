import { GlobalContext } from "../GlobalContext";
import { useContext, useState } from "react";
import axios from "axios";
export const NewEmployee = () => {
  const { TogglePopUp, setData, URL } = useContext(GlobalContext);
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");
  const [status, setStatus] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !position || !department || !status || !avatar)
      return alert("All fields needed");

    const newData = {
      id: Date.now(),
      name,
      position,
      department,
      status,
      avatar,
    };

    axios
      .post(`${URL}`, newData)
      .then((res) => {
        setData((prevData) => [...prevData, res.data]);
        console.log(res.data);
        setName("");
        setDepartment("");
        setPosition("");
        setAvatar("");
        TogglePopUp(); // Close the modal
      })
      .catch((err) => {
        console.error("Error adding employee:", err.response?.data || err);
      });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        action=""
        className=" fixed bg-black/50  flex justify-center items-center inset-0 z-50"
      >
        <div className="bg-white p-4 rounded-lg gap-4 w-2/5 ">
          <div className="flex flex-col gap-2 ">
            <div
              className="inline-block w-fit bg-black p-2 rounded-full text-white font-bold"
              onClick={TogglePopUp}
            >
              X
            </div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="border-2 border-gray-200 p-2 rounded-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="position">Position</label>
            <input
              type="text"
              name="position"
              id="position"
              className="border-2 border-gray-200 p-2 rounded-lg"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="department">Department</label>
            <input
              type="text"
              name="department"
              id="department"
              className="border-2 border-gray-200 p-2 rounded-lg"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="status">Status</label>
            <select
              name="status"
              id="status"
              className="border-2 border-gray-200 p-2 rounded-lg"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="" disabled>
                Select Status
              </option>
              <option value="active">Active</option>
              <option value="on leave">On Leave</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="avatar">Avatar</label>
            <input
              type="file"
              name="avatar"
              id="avatar"
              className="border-2 border-gray-200 p-2 rounded-lg"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
          </div>
          <button className="bg-blue-200 p-2 mt-2 rounded-lg w-full">
            Add Employee
          </button>
        </div>
      </form>
    </div>
  );
};
