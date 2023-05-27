

const Newsletter = () => {
  return (
    
        <section className="py-24">
    <div className="max-w-5xl px-6 py-16 mx-auto text-center relative">
    <div className="max-w-5xl flex items-center text-9xl font-bold text-gray-100 absolute py-4 px-24 tracking-widest -z-10">Newsletter</div>
        <h1 className="text-5xl font-semibold text-gray-800 dark:text-gray-100">Subscribe Our Newsletter</h1>
        <p className="text-lg max-w-md mx-auto mt-5 text-gray-500 dark:text-gray-400">Get the latest information and promo offers directly</p>

        <div className="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">
            <input id="email" type="text" className="w-[450px] px-4 py-2 text-gray-700 bg-white border rounded-md sm:mx-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-black dark:focus:border-black focus:outline-none focus:ring focus:ring-black " placeholder="Input email address"/>

            <button className='mt-10 text-lg font-bold bg-black text-white w-32 h-[46px] flex justify-center items-center gap-2'>
                Get Started
            </button>
        </div>
    </div>
</section>
    
   
  )
}

export default Newsletter