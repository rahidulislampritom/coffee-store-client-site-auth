import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffeeData = useLoaderData()
    // console.log(coffeeData);
    const { category, coffeeName, coffeeQuantity, details, photo, supplier, taste, _id } = coffeeData;
    const handleCoffeeSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const coffeeName = form.coffeeName.value;
        const coffeeQuantity = form.coffeeQuantity.value;
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value
        const values = {
            coffeeName,
            coffeeQuantity,
            supplier,
            taste,
            details,
            category,
            photo
        }
        console.log(values);
        form.reset();

        // send data to the server 
        fetch(`http://localhost:1000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(values)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Update Successful!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                }

            })
    }
    return (
        <div className='max-w-7xl mx-auto'>

            <div className='bg-[#F4F3F0] p-6'>
                <div className='text-center pb-10 pt-10 '>
                    <h1 className='text-4xl font-bold pb-4 '>Update Coffee Information</h1>
                    <p className='w-full md:w-[932px] mx-auto'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <form onSubmit={handleCoffeeSubmit} >
                    {/* coffee name + available quantity */}
                    <div className='flex gap-16 space-y-3'>
                        <fieldset className='w-1/2 '>
                            <label className='inline-block pb-2 text-lg font-medium'>Coffee Name</label>
                            <input name='coffeeName' type="text" placeholder="coffee Name" defaultValue={coffeeName} className="input input-bordered w-full" />
                        </fieldset>
                        <fieldset className='w-1/2'>
                            <label className='inline-block pb-2 text-lg font-medium'>Available Quantity</label>
                            <input name='coffeeQuantity' type="text" placeholder="available quantity" defaultValue={coffeeQuantity} className="input input-bordered w-full" />
                        </fieldset>
                    </div>
                    {/* supplier + taste  */}
                    <div className='flex gap-16 space-y-6'>
                        <fieldset className='w-1/2'>
                            <label className='inline-block pb-2 text-lg font-medium'>Supplier</label>
                            <input name='supplier' type="text" placeholder="Enter coffee supplier" defaultValue={supplier} className="input input-bordered w-full" />
                        </fieldset>
                        <fieldset className='w-1/2'>
                            <label className='inline-block pb-2 text-lg font-medium'>Taste</label>
                            <input name='taste' type="text" placeholder="Enter coffee taste" defaultValue={taste} className="input input-bordered w-full" />
                        </fieldset>
                    </div>
                    {/* category + details  */}
                    <div className='flex gap-16 space-y-6'>
                        <fieldset className='w-1/2'>
                            <label className='inline-block pb-2 text-lg font-medium'>Category</label>
                            <input name='category' type="text" placeholder="Enter coffee category" defaultValue={category} className="input input-bordered w-full" />
                        </fieldset>
                        <fieldset className='w-1/2'>
                            <label className='inline-block pb-2 text-lg font-medium'>Details</label>
                            <input name='details' type="text" placeholder="Enter coffee details" defaultValue={details} className="input input-bordered w-full" />
                        </fieldset>
                    </div>
                    {/* photo  */}
                    <div className=''>
                        <fieldset className='w-full'>
                            <label className='inline-block pb-2 text-lg font-medium'>Photo</label>
                            <input name='photo' type="text" placeholder="Enter photo URL" defaultValue={photo} className="input input-bordered w-full" />
                        </fieldset>
                    </div>
                    {/* submit button  */}
                    <div className='text-center pt-10 '>
                        <input type="submit" value="Update Coffee" className='btn w-full bg-[#D2B48C] text-[]' />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpdateCoffee;