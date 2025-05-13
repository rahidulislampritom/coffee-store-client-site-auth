import React from 'react';
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    // console.log(coffee);
    const { category, coffeeName, photo, taste, _id } = coffee

    const handleDelete = (_id) => {
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
                fetch(`http://localhost:1000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)

                        if (data.deletedCount > 0) {
                            const remaining = coffees.filter(cof => cof._id !== _id)
                            setCoffees(remaining);
                            console.log(remaining);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }

                    })


            }
        });


    }

    return (
        <div className=''>
            <div className="card card-side bg-base-100 shadow-sm items-center pr-10 md:w-xl mx-auto">
                <figure>
                    <img
                        src={photo}
                        alt="Movie" />
                </figure>
                <div className="card-body md:w-60">
                    <h2 className="card-title">{coffeeName}</h2>
                    <p>{taste}</p>
                    <p>{category}</p>
                </div>
                <div className="flex flex-col gap-2 ml-auto pr-4">
                    <button className="btn btn-circle bg-[#D2B48C] text-white hover:bg-[#c9a976]">
                        <FaEye />
                    </button>
                    <Link to={`/updateCoffee/${_id}`}>
                        <button className="btn btn-circle bg-black text-white hover:bg-gray-800">
                            <FaEdit />
                        </button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle bg-red-500 text-white hover:bg-red-600">
                        <FaTrash />
                    </button>
                </div>
            </div>

        </div>
    );
};

export default CoffeeCard;