'use client';
import { AiOutlineLike } from "react-icons/ai";
import { GiTeamIdea } from "react-icons/gi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { PiTimerDuotone } from "react-icons/pi";

export default function Commitment() {
  return (
    <div className="flex flex-col mt-10 bg-white justify-between min-h-screen items-center p-10 space-y-12 ssm:space-y-10 w-full">
      <h2 className="text-2xl font-bold">Unlock the full potential of your support efforts</h2>
      <div className="flex flex-row space-x-10">
        {/* Card 1 */}
        <div className="group flex flex-col border border-gray-300 hover:border-black space-y-10 p-6 rounded-2xl duration-300 hover:shadow-[0_10px_20px_rgba(34,197,94,1)]">
          <div className="bg-green-400 w-12 h-12 flex items-center justify-center rounded-2xl group-hover:shadow-[0_4px_20px_rgba(34,197,94,1)] duration-300">
            <AiOutlineLike className="text-2xl text-white" />
          </div>
          <h3 className="text-lg font-bold group-hover:text-green-400 duration-300">Increase customer engagement & enhance satisfaction</h3>
          <span>Deliver personalized, instant responses with AI-driven support, ensuring customers feel valued and understood, improving overall satisfaction and loyalty.</span>
        </div>

        {/* Card 2 */}
        <div className="group flex flex-col border border-gray-300 hover:border-black space-y-10 p-6 rounded-2xl duration-300 hover:shadow-[0_10px_20px_rgba(239,68,68,1)]">
          <div className="bg-red-400 w-12 h-12 flex items-center justify-center rounded-2xl group-hover:shadow-[0_4px_20px_rgba(239,68,68,1)] duration-300">
            <PiTimerDuotone className="text-2xl text-white" />
          </div>
          <h3 className="text-lg font-bold group-hover:text-red-400 duration-300">Reduce support costs while providing 24/7 availability</h3>
          <span>Cut down on operational costs by providing round-the-clock support, allowing your team to focus on complex issues while the AI handles routine queries efficiently.</span>
        </div>

        {/* Card 3 */}
        <div className="group flex flex-col border border-gray-300 hover:border-black space-y-10 p-6 rounded-2xl duration-300 hover:shadow-[0_10px_20px_rgba(251,146,60,1)]">
          <div className="bg-orange-400 w-12 h-12 flex items-center justify-center rounded-2xl group-hover:shadow-[0_4px_20px_rgba(251,146,60,1)] duration-300">
            <FaMoneyBillTrendUp className="text-2xl text-white" />
          </div>
          <h3 className="text-lg font-bold group-hover:text-orange-400 duration-300">Improve efficiency and increase revenue</h3>
          <span>Streamline workflows with automated ticket management, real-time AI recommendations, and more, boosting productivity and response times to drive more sales and revenue.</span>
        </div>

        {/* Card 4 */}
        <div className="group flex flex-col border border-gray-300 hover:border-black space-y-10 p-6 rounded-2xl duration-300 hover:shadow-[0_10px_20px_rgba(59,130,246,1)]">
          <div className="bg-blue-400 w-12 h-12 flex items-center justify-center rounded-2xl group-hover:shadow-[0_4px_20px_rgba(59,130,246,1)] duration-300">
            <GiTeamIdea className="text-2xl text-white" />
          </div>
          <h3 className="text-lg font-bold group-hover:text-blue-400 duration-300">Scale support efforts effortlessly</h3>
          <span>Grow your support capabilities easily as your business expands, without compromising on service quality, thanks to the scalable nature of AI-driven support solutions like CX Genie.</span>
        </div>
      </div>
    </div>
  );
}
