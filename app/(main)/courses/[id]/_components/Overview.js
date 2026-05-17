import { IoCheckmarkDoneOutline } from "react-icons/io5";

const Overview = () => {
  return (
    <div className="mt-10 flex flex-col gap-6">
      {/* heading */}
      <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
        Course Description
      </h1>

      {/* description */}
      <p className="text-base leading-7 text-zinc-400 sm:text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
        dignissimos ipsam. Neque quo delectus, fugiat illum velit aut error
        corporis assumenda veritatis ipsa eligendi amet quos magni sunt
        consectetur quis asperiores non inventore reiciendis odit doloremque
        consequuntur, deserunt aliquid. Omnis repudiandae optio impedit
        voluptatum dignissimos id hic fuga fugiat iste.
      </p>

      {/* learn section */}
      <div className="flex flex-col gap-6 rounded-xl bg-zinc-900 p-5 sm:p-8 md:p-10">
        <h1 className="text-xl font-semibold sm:text-2xl">
          What You Will Learn?
        </h1>

        <ul className="grid grid-cols-1 gap-5 text-zinc-300 md:grid-cols-2">
          <li className="flex items-start gap-3 leading-7">
            <IoCheckmarkDoneOutline className="mt-1 shrink-0 text-xl text-green-500" />

            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              doloribus.
            </span>
          </li>

          <li className="flex items-start gap-3 leading-7">
            <IoCheckmarkDoneOutline className="mt-1 shrink-0 text-xl text-green-500" />

            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              doloribus.
            </span>
          </li>

          <li className="flex items-start gap-3 leading-7">
            <IoCheckmarkDoneOutline className="mt-1 shrink-0 text-xl text-green-500" />

            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              doloribus.
            </span>
          </li>

          <li className="flex items-start gap-3 leading-7">
            <IoCheckmarkDoneOutline className="mt-1 shrink-0 text-xl text-green-500" />

            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              doloribus.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Overview;