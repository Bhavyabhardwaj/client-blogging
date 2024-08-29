import { Link } from "react-router-dom";

const Home = () => {
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
            <button>
              <Link to="/signin">Signin</Link>
            </button>
            <button>Signup</button>
            <button>Blog</button>
          </ul>
        </div>
      </nav>
      <div className="text-center flex items-center justify-center flex-col mt-40">
        <h2 className="text-5xl font-bold">A Community Space for Shared Reflections and Thoughts</h2>
        <p className="mt-4 text-xl text-gray-600">
          "Voices of the Valley" - Where your thoughts find their echo. A tapestry of insights woven from the voices of many, awaiting your unique thread.
        </p>
        <div className="mt-8">
          <Link to="/signup"><button className="bg-black text-white py-2 px-6 rounded-full font-semibold">Sign Up</button></Link>
        </div>
        <p className="mt-4 text-gray-500 text-sm">
          Sign up to get notified when we launch. <Link to="/terms" className="underline">Terms & Conditions</Link>
        </p>
      </div>
    </>
  );
};

export default Home;
