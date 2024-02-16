// "use client"
// import React, { useState } from "react";

// const Navbar = () => {
//   const [isMenuVisible, setIsMenuVisible] = useState(true);

//   const toggleMenu = () => {
//     setIsMenuVisible(!isMenuVisible);
//   };

//   return (
//     <nav className="text-white bg-gradient-to-r from-red-800 to-orange-300">
//       <div className="flex flex-wrap items-center justify-between w-screen">
//         <div className="flex justify-center items-center lg:w-[10%]">
//           <div className="m-3 text-2xl lg:pl-0">Dbook</div>
//         </div>
//         <div className="m-5 lg:hidden" id="menu-button" onClick={toggleMenu}>
//           <img className="w-6 h-6" src="macaan.png" alt="bars" />
//         </div>
//         <div className={`h-20 w-screen lg:w-[80%] lg:clip-custom ${isMenuVisible ? "" : "hidden"}`} id="menu">
//           <div className="bg-[#A42D25]">
//             <div className="flex items-center justify-center h-8 bg-[#F2A86A]">
//               <ul className="flex gap-6 font-bold">
//                 <li><a href="#">Home</a></li>
//                 <li><a href="#">About</a></li>
//                 <li><a href="#">Contact</a></li>
//                 <li><a href="#">Support</a></li>
//               </ul>
//             </div>
//             <div className="flex items-center justify-center">
//               <ul className="flex h-12 gap-10 md:pt-[0.7rem] uppercase text-sm md:text-lg font-bold">
//                 <li><a href="#">services</a></li>
//                 <li><a href="#">career</a></li>
//                 <li><a href="#">features</a></li>
//                 <li><a href="#">gallery</a></li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="w-[10%] hidden lg:block">
//           <div className="flex items-center justify-center">
//             <img className="w-10 h-10 mr-3" src="macaan.png" alt="phone" />
//             {/* <div className="font-bold text-black">900 234-1234</div> */}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


"use client"
import React from "react";

const Navbar = () => {
  return (
    <nav className="relative flex items-center justify-between bg-gray-800 p-4 overflow-hidden">
      {/* Logo on the left */}
      <div className="flex items-center">
        <img src="macaan.png" alt="Logo" className="w-8 h-8 mr-2" />
        <span className="text-white text-lg font-semibold">Your Logo</span>
      </div>

      {/* Three words in the center with background circles */}
      <div className="flex items-center relative">
        {/* Circle 1 */}
        <div className="absolute w-32 h-32 rounded-full bg-transparent border-2 -ml-4" style={{border:"2px solid #1e1738"}}></div>
        <p className="text-white text-lg font-semibold z-10">Word1</p>

        {/* Circle 2 */}
        <div className="absolute w-32 h-32 rounded-full bg-transparent border-2 border-green-500 ml-10"></div>
        <p className="text-white text-lg font-semibold mx-4 z-10">Word2</p>

        {/* Circle 3 */}
        <div className="absolute w-32 h-32 rounded-full bg-transparent border-2 border-red-500 ml-20"></div>
        <p className="text-white text-lg font-semibold z-10">Word3</p>
      </div>

      {/* Three different color circular shapes in the background */}
      <div className="flex items-center space-x-4">
        <div className="w-8 h-8 rounded-full bg-blue-500"></div>
        <div className="w-8 h-8 rounded-full bg-green-500"></div>
        <div className="w-8 h-8 rounded-full bg-red-500"></div>
      </div>
    </nav>
  );
};

export default Navbar;

