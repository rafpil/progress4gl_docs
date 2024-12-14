import React from "react";

const UserIcon = () => {
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-[#191e24] rounded-box z-[1] mt-3 w-52 p-2 shadow"
      >
        <li>
          <a className="justify-between">
            Profil
            {/* <span className="badge">New</span> */}
          </a>
        </li>
        <li>
          <a>Ustawienia</a>
        </li>
        <li>
          <a>Wyloguj</a>
        </li>
      </ul>
    </div>
  );
};

export default UserIcon;
