import React from "react";
import { NavigationDots, SocialMedia } from "../components";
const wrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />
          <div className="copyright">
            <p className="p-text">@2022 IkramKhan</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>

        <NavigationDots active={idName} />
      </div>
    );
  };

export default wrap;

// import React from "react";
// import { NavigationDots, SocialMedia } from "../components";

// const Wrap = (Component, idName, classNames) =>
//   function HOC() {
//     return (
//       <div id={idName} className={`app__container ${classNames}`}>
//         <SocialMedia />
//         <div className="app__wrapper app__flex">
//           <Component />

//           <div className="copyright">
//             <p className="p-text">@2020 IKRAM</p>
//             <p className="p-text">All rights reserved</p>
//           </div>
//         </div>
//         <NavigationDots active={idName} />
//       </div>
//     );
//   };

// export default Wrap;
