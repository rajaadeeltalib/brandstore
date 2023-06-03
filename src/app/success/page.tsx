import Wrapper from "../components/Wrapper";
import {BsBagCheckFill} from "react-icons/bs"

const Success = () => {
  return (
    <Wrapper>
    <main >
      
      <div className="bg-[#f1f1f1] rounded-xl flex flex-col items-center justify-center text-center p-24 mt-12">
        <p className="text-[#008000] text-[80px]">
          <BsBagCheckFill />
        </p>
        <h1 className="text-5xl font-bold my-4">Thank you for your order!</h1>
        <p className="text-lg mb-6">Check your email inbox for the receipt</p>
        <p className="text-lg mb-12">
          If you have any questions, please email <span>

          <a href="mailto:admin@example.com" className="text-red-600">admin@example.com</a>
          </span>
        </p>
        <a href="/">
          <button className="bg-black text-white p-4 font-bold text-lg w-[400px] rounded-xl" >
            Continue Shopping
          </button>
        </a>
      </div>
    </main>
    </Wrapper>
  );
};

export default Success;
