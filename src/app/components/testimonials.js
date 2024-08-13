import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Testimonials(props) {
  return (
    <div className="w-full flex flex-col pl-4">
      <div className="flex flex-row justify-start">
        <FontAwesomeIcon icon={faStar} className="text-yellow-400" height={35} width={35} />
        <FontAwesomeIcon icon={faStar} className="text-yellow-400" height={35} width={35} />
        <FontAwesomeIcon icon={faStar} className="text-yellow-400" height={35} width={35} />
        <FontAwesomeIcon icon={faStar} className="text-yellow-400" height={35} width={35} />
        <FontAwesomeIcon icon={faStar} className="text-yellow-400" height={35} width={35} />
      </div>
      <div className="flex flex-col justify-start mt-4">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-500">"A breeze"</h2>
      </div>
      <div className="flex flex-col justify-start mt-4">
        <p className="font-light">
          Fitted Tech is fast and efficient with amazing turnaround time. We hired them for several web development and graphic design projects for
          our growing business. I've know the owner for over seven years and they have always delivered exactly what was promised. I hope to work with
          them again soon.{" "}
        </p>
      </div>
      <div className="flex flex-col justify-start mt-4">
        <Image src="/gswtrade-owner.jpg" className="rounded-full" height={75} width={75} />
        <div className="flex flex-col justify-center pl-4">
          <h4 className="text-2xl font-extrabold tracking-tight text-gray-500">Billy Vicario</h4>
          <h4 className="text-lg font-extrabold tracking-tight text-gray-400">CEO, GSWTrade</h4>
        </div>
      </div>
    </div>
  );
}
