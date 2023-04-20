import React from "react";

const Nav = () => {
  function Menu(e) {
    // console.log("e", e);
    // let list = document.querySelector("ul");
    // e.name === "menu" ? ((e.name = "close"), list.classNameList.add("top-[80px]"), list.classNameList.add("opacity-100")) : ((e.name = "menu"), list.classNameList.remove("top-[80px]"), list.classNameList.remove("opacity-100"));
  }

  return (
    <div className="bg-cyan-500">
      <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center ">
          <span className="text-2xl font-[Poppins] cursor-pointer">BasePlate</span>

          <span className="text-3xl cursor-pointer mx-2 md:hidden block">
            <ion-icon name="menu" onClick={() => Menu()}></ion-icon>
          </span>
        </div>

        <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
          <li className="mx-4 my-6 md:my-0">
            <a href="#" className="text-xl hover:text-cyan-500 duration-500">
              Home
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a href="#" className="text-xl hover:text-cyan-500 duration-500">
              Fetch
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a href="#" className="text-xl hover:text-cyan-500 duration-500">
              Create
            </a>
          </li>

          <button
            //
            className="bg-cyan-400 
            text-white 
            font-bold
            duration-500 
            px-6 
            py-2 
            mx-4 
            hover:bg-cyan-500 rounded "
          >
            Get started
          </button>
          <h2 className=""></h2>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
