import MainTitle from "./text/MainTitle";
import ThankyouIcon from "../assets/images/icon-thank-you.svg";

export default function Thankyou() {
  return (
    <>
      <div className="absolute w-11/12 top-24 left-1/2 translate-x-[-50%] bg-white rounded-[10px] px-4 py-8 mx-auto unset">
        <div className="text-center flex flex-col justify-center items-center py-16">
          <img src={ThankyouIcon} alt="Thankyou icon" className="mb-6" />
          <MainTitle
            title="Thank you!"
            description="Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com."
          />
        </div>
      </div>
    </>
  );
}
