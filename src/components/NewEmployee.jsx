// import { GlobalContext } from "../GlobalContext";
// import { useContext } from "react";
export const NewEmployee = () => {
  // const { TogglePopUp } = useContext(GlobalContext);
  return (
    <div className=" fixed bg-black/50  flex justify-center items-center inset-0 z-50">
      <div className="bg-white p-4 rounded-lg gap-4 w-2/5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="border-2 border-gray-200 p-2 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="position">Position</label>
          <input
            type="text"
            name="position"
            id="position"
            className="border-2 border-gray-200 p-2 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="department">Department</label>
          <input
            type="text"
            name="department"
            id="department"
            className="border-2 border-gray-200 p-2 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="status">Status</label>
          <select
            name="status"
            id="status"
            className="border-2 border-gray-200 p-2 rounded-lg"
          >
            <option value="active">Active</option>
            <option value="on leave">On Leave</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="avatar">Avatar</label>
          <input
            type="text"
            name="avatar"
            id="avatar"
            className="border-2 border-gray-200 p-2 rounded-lg"
          />
        </div>
        <button className="bg-blue-200 p-2 mt-2 rounded-lg w-full">
          Add Employee
        </button>
      </div>
    </div>
  );
};
