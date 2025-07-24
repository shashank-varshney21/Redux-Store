const Banners = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <img
                    src="/INSTAGRAM POST 1.png"
                    alt="img1"
                    className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                />
                <img
                    src="/INSTAGRAM POST 2.png"
                    alt="img2"
                    className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                />
                <img
                    src="/INSTAGRAM POST 3.png"
                    alt="img3"
                    className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                />
                <img
                    src="/INSTAGRAM POST 4.png"
                    alt="img4"
                    className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                />
            </div>
        </div>


    )
}

export default Banners