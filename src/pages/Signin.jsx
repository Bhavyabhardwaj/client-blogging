import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-8 py-5 border-b border-gray-500">
        <div className="font-bold text-3xl">
          <ul>
            <li>Medium</li>
          </ul>
        </div>
        <div className="flex">
          <ul className="flex gap-6">
            <button>Our Story</button>
            <button><Link to="/signin">Signin</Link></button>
            <button>Signup</button>
            <button>Blog</button>
          </ul>
        </div>
      </nav>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="signin w-full md:w-1/2 py-20 px-10 md:px-40">
          <h1 className="font-bold text-4xl">Login to your account</h1>
          <div className="flex px-5 py-1">
            <h2 className="text-gray-800">Don't have an Account?</h2>
            <button className="font-semibold">
              <Link to="/signup" >Sign up</Link>
            </button>
          </div>
          <form>
            <div>
              <label>Email</label>
              <input type="email" placeholder="Enter your email" className="w-full py-2 px-3 border rounded mt-2" />
            </div>
            <div className="mt-4">
              <label>Password</label>
              <input type="password" placeholder="Enter your password" className="w-full py-2 px-3 border rounded mt-2" />
            </div>
            <button className="w-full py-2 px-4 bg-black text-white mt-6 rounded">Sign in</button>
          </form>
        </div>
        <div className="hidden md:flex text-3xl h-full w-1/2 py-40 px-10 font-bold bg-gray-100 justify-center items-center">
          <blockquote className="text-center">
            "The Customer service I received was exceptional. The support team went above and beyond to address my concern."
            <br />
            <cite className="block mt-4 text-lg text-gray-700">Jules Winfield, CEO, Acme Inc</cite>
          </blockquote>
        </div>
      </div>
    </>
  );
};

export default Signin;
