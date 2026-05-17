import { IoCheckmarkDoneOutline } from "react-icons/io5";

const Overview = () => {
  return (
    <div className="flex flex-col gap-6 mt-10">
      <h1 className="font-bold text-4xl">Course Description</h1>
      <p className="text-zinc-400 text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
        dignissimos ipsam. Neque quo delectus, fugiat illum velit aut error
        corporis assumenda veritatis ipsa eligendi amet quos magni sunt
        consectetur quis asperiores non inventore reiciendis odit doloremque
        consequuntur, deserunt aliquid. Omnis repudiandae optio impedit
        voluptatum dignissimos id hic fuga fugiat iste.
      </p>
      <div className="flex flex-col gap-5 bg-zinc-900 rounded-lg p-15">
        <h1 className="text-2xl font-semibold">What You Will Learn?</h1>
        <ul className="grid grid-cols-2 text-zinc-300">
          <li className="col-span-1 flex gap-2 items-center ">
            <IoCheckmarkDoneOutline className="text-xl" /> Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Sequi, doloribus.
          </li>
          <li className="col-span-1 flex gap-2 items-center">
            <IoCheckmarkDoneOutline className="text-xl" /> Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Sequi, doloribus.
          </li>
          <li className="col-span-1 flex gap-2 items-center">
            <IoCheckmarkDoneOutline className="text-xl" /> Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Sequi, doloribus.
          </li>
          <li className="col-span-1 flex gap-2 items-center">
            <IoCheckmarkDoneOutline className="text-xl" /> Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Sequi, doloribus.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Overview;
