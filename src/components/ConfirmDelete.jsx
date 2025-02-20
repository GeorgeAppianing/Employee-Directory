import { GlobalContext } from "../GlobalContext";
import { useContext } from "react";
const ConfirmDelete = ({ id }) => {
  const { DeleteConfirmation, handleDelete } = useContext(GlobalContext);
  return (
    <div className="fixed flex justify-center items-center inset-0 z-50 bg-black/50">
      <div className="bg-white p-4 rounded-lg">
        <h3 className="text-sm font-light text-gray-400">
          Are you sure you want to delete this employee from the companies
          directory?
        </h3>
        <div className="flex justify-end gap-2 mt-4">
          <button
            className="bg-red-400 px-4 py-2 rounded-lg text-white text-sm"
            onClick={() => handleDelete(id)}
          >
            Yes
          </button>
          <button
            onClick={DeleteConfirmation}
            className="bg-blue-400 px-4 py-2 rounded-lg text-white text-sm"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
