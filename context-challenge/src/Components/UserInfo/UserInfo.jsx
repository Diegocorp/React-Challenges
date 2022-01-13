import React from "react";
import "./UserInfo.css";

function UserInfo() {
  return (
    <div className="userinfo-styles">
      <p>Display User Info Here 👇</p>
      <p>
        These two children components will receive data. These could be nested
        components.
      </p>
      <div>
        <p>Name: {}</p>
        <p>Location: {}</p>
      </div>
    </div>
  );
}

export default UserInfo;
