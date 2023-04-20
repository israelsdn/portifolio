export function LoginDashboard(){
    return (
      <div 
      className='flex flex-col bg-white rounded-3xl max-sm:w-72 max-lg:w-80 w-96'>
        <h1 
        className='max-sm:text-xl max-lg:text-2xl text-3xl font-bold text-center text-gray-800 mt-8 mb-10'>
          LOGIN
        </h1>

        <input  
        placeholder='Username' 
        type="text"
        className='text-input-login mx-10 mb-5'/>

        <input  
        placeholder='Password' 
        type="password"
        className='text-input-login mx-10 mb-12 '/>
        
        <button 
        className='max-sm:text-sm max-lg:text-base text-lg bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-xl
          mx-16 mb-3'>
          SIGN-IN
        </button>

        <p 
        className='max-sm:text-xs max-lg:text-sm text-base text-[#09090B] ml-5 mb-12'>
          Don't have login?
          <button className="text-blue-700 font-semibold ml-1">Click here.</button>  
        </p>

      </div> 
    )
}