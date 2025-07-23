import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { add } from "../Store/cartSlice";
import { useDispatch } from "react-redux";

const SinglePage = () => {
    const params = useParams();
    const [Product, SetProduct] = useState({});
    const [Loading, SetLoading] = useState(false);
    const [IsAdding, SetIsAdding] = useState(false);
    const Navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        try {
            SetLoading(true);
            fetch(`https://fakestoreapi.com/products/${params.id}`)
                .then(res => res.json())
                .then(data => {
                    SetProduct(data)
                    SetLoading(false)
                })

        } catch (error) {
            console.error("Failed to fetch product:", error);
            SetLoading(false);
        }
    }, [])

    const HandleAdd = (Product) => {
        SetIsAdding(true);
        dispatch(add(Product));
        setTimeout(()=>{
            SetIsAdding(false)
        }, 1000);
    }

    return (
        <>
            <button onClick={() => { Navigate(-1) }} className="hover:text-blue-600 p-4">← Back</button>
            {
                Loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <div className="flex flex-col gap-10 p-10 md:flex-row md:items-center md:justify-center">
                        <div className="sm:w-sm md:w-md lg:w-lg">
                            <img src={Product.image} alt={Product.title} className="h-100 sm:h-full"></img>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold mb-5 text-center">{Product.title}</h1>
                            <p className="text-md text-gray-700 mb-12 text-left capitalize">{Product.description}</p>
                            <p className="text-lg font-bold text-gray-800 mb-4 text-left">Price: ${Product.price}</p>
                            <button 
                            onClick={() => HandleAdd(Product)} 
                            className = {`${ IsAdding ? 'bg-green-500' : 'bg-blue-500' } 
                            cursor-pointer text-white py-2 px-6 rounded-full font-semibold transition duration-300`}>
                            Add{IsAdding ? 'ed' : ''} To Cart
                            </button>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default SinglePage