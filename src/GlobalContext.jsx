import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const URL = "http://localhost:3001/employees";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 6;
  const [popUp, setPopUp] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  // Pagination Function for prev Page
  function PrevPage() {
    setCurrentPage(currentPage - 1);
  }
  // Pagination Function for next Page
  function NextPage() {
    setCurrentPage(currentPage + 1);
  }
  const totalNumberOfPages = Math.ceil(data.length / rowsPerPage);
  console.log(totalNumberOfPages);
  // Function  to slice the number of rows to display in the table
  const displayRows = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );
  // Data Fecthing
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(URL);
        setData(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [URL]);

  // Active Employees count
  const displayActiveEmployees = data.filter(
    (employee) => employee.status === "active"
  );
  // Display all employees count
  const displayAllEmployees = data.filter((employee) => employee.status.length);
  // Display Employees on leave
  const displayEmployeesOnLeave = data.filter(
    (employee) => employee.status === "on leave"
  );
  // Function to Display inactive Employees
  const displayInactiveEmployees = data.filter(
    (employee) => employee.status === "inactive"
  );
  // Delete Function
  function handleDelete(id) {
    // Debugging

    axios
      .delete(`http://localhost:3001/employees/${id}`)
      .then(() => {
        setData((prevData) =>
          prevData.filter((employee) => employee.id !== id)
        );
      })
      .catch((err) => console.log("Delete Error:", err.response?.data || err));
  }

  // }
  // Toggle PopUp
  function TogglePopUp() {
    setPopUp(!popUp);
  }

  // Function to filter employees by department
  function filterByDepartment(department) {
    return data.filter((employee) => employee.department === department);
  }

  // Function to update employee details
  function updateEmployee(id, updatedDetails) {
    const updatedData = data.map((employee) =>
      employee.id === id ? { ...employee, ...updatedDetails } : employee
    );
    setData(updatedData);
  }

  // Function to search employees by name
  const [searchTerm, setSearchTerm] = useState("");
  const filteredEmployees = displayRows.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function DeleteConfirmation() {
    setConfirmDelete(!confirmDelete);
  }

  return (
    <GlobalContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        filteredEmployees,
        displayActiveEmployees,
        displayAllEmployees,
        displayEmployeesOnLeave,
        displayInactiveEmployees,
        data,
        setData,
        loading,
        currentPage,
        setCurrentPage,
        totalNumberOfPages,
        rowsPerPage,
        displayRows,
        NextPage,
        PrevPage,
        handleDelete,
        // deleteTask,
        TogglePopUp,
        setPopUp,
        popUp,
        filterByDepartment,
        updateEmployee,
        confirmDelete,
        setConfirmDelete,
        DeleteConfirmation,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

export { GlobalContext };
