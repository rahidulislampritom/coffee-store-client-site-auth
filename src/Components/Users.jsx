import Swal from 'sweetalert2'
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { useState } from "react";

const Users = () => {
    const usersData = useLoaderData();
    // console.log(usersData);
    const [users, setUsers] = useState(usersData);
    const handleUserDelete = (_id) => {
        // console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // ..............delete from database
                fetch(`https://coffee-store-server-five-mu.vercel.app/users/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {

                        console.log('deleted successful', data)
                        if (data.deletedCount > 0) {


                            const remaining = users.filter(user => user._id !== _id);
                            setUsers(remaining);


                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }

                    })
                // ..............

            }
        });




    }
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <h2>Users:{usersData.length}</h2>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Created At</th>
                                <th>Last Login At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users.map(user => <tr key={user._id}>
                                    <th>1</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.createdAt}</td>
                                    <td>{user.lastSignInTime}</td>
                                    <td>
                                        <div className="flex gap-2 ml-auto pr-4">
                                            <button className="btn btn-circle bg-[#D2B48C] text-white hover:bg-[#c9a976]">
                                                <FaEye />
                                            </button>
                                            <Link >
                                                <button className="btn btn-circle bg-black text-white hover:bg-gray-800">
                                                    <FaEdit />
                                                </button>
                                            </Link>
                                            <button onClick={() => handleUserDelete(user._id)} className="btn btn-circle bg-red-500 text-white hover:bg-red-600">
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Users;