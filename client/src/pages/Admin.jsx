import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

function Admin() {
  const [loan, setLoan] = useState([]);
  
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchLoan = async () => {
    try {
      const res = await axios.get(
        "https://loanmanagement-i08u.onrender.com/api/loan/all",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
      setLoan(res.data);
      setLoading(false);
    } catch (error) {
      console.error("❌ Error fetching loans:", error.message);
      setLoading(false);
    }
    }
    fetchLoan()
  }, [])
  


  const updateLoanStatus = async (id,status) => {
    try {
      const res = axios.put(
        `https://loanmanagement-i08u.onrender.com/api/loan/status/${id}`,
        {
          status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert(`Loan ${status} sucessfully`);

      // refrece list after update
      setLoan((prev) =>
        prev.map((loan) =>
          loan._id === id ? { ...loan, status: status } : loan
        )
      );
    } catch (error) {
      console.error("❌ Error updating loan:", error.message);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h2 className="text-2xl font-bold text-gray-700 mb-5">Admin Dashboard</h2>

      {loading ? (
        <p>Loading loan data...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-indigo-500 text-white">
              <tr>
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Email</th>
                <th className="py-2 px-4">Loan Type</th>
                <th className="py-2 px-4">Amount</th>
                <th className="py-2 px-4">Duration</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loan.map((loan) => (
                <tr key={loan._id} className="border-b text-center">
                  <td className="py-2 px-4">{loan.user?.name}</td>
                  <td className="py-2 px-4">{loan.user?.email}</td>
                  <td className="py-2 px-4">{loan.loanType}</td>
                  <td className="py-2 px-4">{loan.amount}</td>
                  <td className="py-2 px-4">{loan.durationMonths} months</td>
                  <td className="py-2 px-4 font-semibold">
                    <span
                      className={`px-3 py-1 rounded-full text-white ${
                        loan.status === "pending"
                          ? "bg-yellow-500"
                          : loan.status === "approved"
                          ? "bg-green-600"
                          : "bg-red-500"
                      }`}
                    >
                      {loan.status}
                    </span>
                  </td>
                  <td className="py-2 px-4 flex justify-center gap-2">
                    <button
                      onClick={() => updateLoanStatus(loan._id, "approved")}
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => updateLoanStatus(loan._id, "rejected")}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {loan.length === 0 && (
            <p className="text-center text-gray-500 mt-4">
              No loan records found.
            </p>
          )}
        </div>
      )}

      <div className=" flex items-center justify-between gap-3">
        <Link to="/create-blog">
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mt-7">
            ➕ Create New Blog
          </button>
        </Link>
        <Link to="/blog-page">
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mt-7">
            ➕ Go to Blog Page
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Admin