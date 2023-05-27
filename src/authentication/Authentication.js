import React, { useState } from "react";
import "./Authentication.css";
import Login from "./Login";
import Signup from "./Signup";

function Authentication() {
  const [active, setActive] = useState("");

  const handleChange = () => {
    setActive(active === "login" ? "sign_up" : "login");
  };
  return (
    <div className="authentication">
      <div className="left_auth">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/800px-Rick_and_Morty.svg.png" />
        <img src="https://www.sebastianburakowski.pl/wp-content/uploads/2020/10/instagramiconinstagramlogologoicon-1320184050987950067-300x300.png" />
      </div>
      <div className="rigth_auth">
        {active === "login" ? <Login /> : <Signup />}

        <div className="more_auth">
          <span>
            {" "}
            {active === "login" ? (
              <>
                Don't You Have Account ?
                <button onClick={handleChange}>Sign up</button>
              </>
            ) : (
              <>
                Have Account ?<button onClick={handleChange}>Log in</button>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
