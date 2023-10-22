import React, { useRef, useState } from 'react'
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { HideUpdate } from '../rtk/slices/UpdateSlice';
import './style/AddNewProduct.scss';
import { updateProduct } from '../rtk/slices/productsSlice';
import { useForm } from 'react-hook-form';



const UpdateProduct = () => {
    let updateModal = useSelector(state => state.UpdateModal);
    let Categories = useSelector(state => state.categoryList);
    let dispatsh = useDispatch();

    let id = updateModal.updatingProduct.id;
    let [title, setTitle] = useState(updateModal.updatingProduct.title)
    let [price, setPrice] = useState(updateModal.updatingProduct.price)
    let [description, setDescription] = useState(updateModal.updatingProduct.description)
    let [category, setCategory] = useState(updateModal.updatingProduct.category)
    let [image, setImage] = useState(updateModal.updatingProduct.image)


    // handle image change
    const inputRef = useRef(null);
    const handleImage = () => {
        inputRef.current.click();
    }
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        console.log(file.name);
        setImage(`${process.env.PUBLIC_URL}/Images/${file.name}`);
    }

    // updated product
    let updatedProduct = { id, title, price, description, category, image };
    const handleUpdate = (updatedProduct) => {
        dispatsh(updateProduct(updatedProduct));
        dispatsh(HideUpdate());
    }

    let { register, formState: { errors }, handleSubmit } = useForm();

    let submitFun = handleSubmit((data) => {
        if (Object.keys(errors).length === 0) {
            handleUpdate(updatedProduct);
        }
    })



    return (
        <>
            <Modal show={updateModal.show} onHide={() => dispatsh(HideUpdate())}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="form login-form mt-1 mb-1" onSubmit={submitFun}>
                        {/* <div className="input d-flex flex-column mb-3">
                            <label htmlFor="product-id" className='text-black-50'>Product Id</label>
                            <input type="number" name="id" min='0' id="product-id" className='border-0 border-bottom p-1 pt-1' onChange={(e) => setId(e.target.value)} />
                        </div> */}
                        <div className="input d-flex flex-column mb-3">
                            <label htmlFor="product-title" className='text-black-50'>Title</label>
                            <input type="text" name="title" id="product-title" className='border-0 border-bottom p-1 pt-1' {...register("title", { required: "This is required" })} onChange={(e) => setTitle(e.target.value)} />
                            {errors.title?.message && <p className='m-0' style={{ color: "red", fontSize: "0.7rem" }}>{errors.title?.message}</p>}
                        </div>
                        <div className="input d-flex flex-column mb-3">
                            <label htmlFor="product-price" className='text-black-50'>Price</label>
                            <input type="number" step="0.01" min='0.00' name="price" id="product-price" className='border-0 border-bottom p-1 pt-1' {...register("price", { required: "This is required" })} onChange={(e) => setPrice(e.target.value)} />
                            {errors.price?.message && <p className='m-0' style={{ color: "red", fontSize: "0.7rem" }}>{errors.price?.message}</p>}
                        </div>
                        <div className="input d-flex flex-column mb-3">
                            <label htmlFor="product-description" className='text-black-50'>description</label>
                            <input type="text" name="description" id="product-description" className='border-0 border-bottom p-1 pt-1' {...register("description", { required: "This is required" })} onChange={(e) => setDescription(e.target.value)} />
                            {errors.description?.message && <p className='m-0' style={{ color: "red", fontSize: "0.7rem" }}>{errors.description?.message}</p>}
                        </div>
                        <div className="input d-flex flex-column mb-3">
                            <select title="Category" className='form-control' name="category" value={category} onChange={(e) => setCategory(e.target.value)} >
                                <option className='text-secondary d-block px-2 pt-1' value="">Choose Category</option>
                                {
                                    Categories.map((cat) => {
                                        return (
                                            <option key={cat} className='text-secondary d-block px-2 pt-1' value={cat}>{cat}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="img-upload d-flex flex-column align-items-center" onClick={handleImage}>
                            {image ? <img src={image} alt='not found' /> :
                                <>
                                    < p className='upload-p text-black-50 m-0 fs-5 fw-bold'>Upload Image</p>
                                    <img src={process.env.PUBLIC_URL + "/Images/upload.jpg"} alt='' />
                                </>
                            }
                            <input type="file" ref={inputRef} onChange={handleImageChange} className='d-none' />
                        </div>
                        <button type='submit' className='btn btn-primary d-block mx-auto mt-3'>Update Product</button>
                        {/*  onClick={() => handleUpdate(updatedProduct)} */}
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default UpdateProduct