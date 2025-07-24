import Products from '../Components/Products'
import Banners from '../Components/Banners'

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <Banners />
      <section className="max-w-7xl px-4 sm:px-6 lg:px-8 ml-10">
        <h3 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-indigo-500 inline-block pb-2">
          🛍️ Products
        </h3>
        <Products />
      </section>
    </div>
  )
}

export default Home