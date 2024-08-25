const Signup = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-8 py-5 border-b border-gray-500">
        <div className="font-bold text-3xl">
          <ul>
            <li>Blogger</li>
          </ul>
        </div>
        <div className="flex">
          <ul className="flex gap-6">
           <button>Our Story</button>
           <button>Signin</button>
           <button>Signup</button>
           <button>Blog</button>
          </ul>
        </div>
      </nav>
      <div className="flex">
        <div className="signup h-[100%] w-[50vw] py-20 px-40">
          <h1 className="font-bold text-4xl">Create an Account</h1>
          <div className="flex px-5 py-1">
          <h2 className="text-gray-800">Already have an Account?</h2> 
          <button className="font-semibold">Login</button>
          </div>
        </div>
        <div className="text-3xl h-[100%] w-[50vw] py-40 px-10 font-bold">The Customer service I received was exceptional. The support team went above and beyond to address my concern.</div>
      </div>
    </>
  );
};

export default Signup;
