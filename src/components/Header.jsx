import React, { useState } from "react";
import { ReactComponent as Logo } from "./logo/logo.svg";
import MyLink from "./UI/nav/MyLink";
import MenyButton from "./UI/nav/MenyButton";
function Header() {
  //const [count,setCount]=useState(0)
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="header_outer">
      <div className="header_inner responsive_wrapper">
        <div className="logo">
          <Logo />
        </div>
        <MyLink isOpen={isOpen} />
        <MenyButton isActive={isOpen} onClick={() => setOpen(!isOpen)} />
      </div>
    </header>
  );
}
export default Header;
