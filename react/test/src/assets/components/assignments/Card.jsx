import React from "react";

const Card = ({ isDark }) => {
  return (
    <div className={`w-xl p-5 m-10 rounded-lg ${isDark
    ? "bg-black text-white"
    : "bg-gray-200 text-black"
    }`}>
      <h1 className="text-4xl">Card</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia ipsa sit dolorum maxime modi nostrum, doloremque amet dolores exercitationem dolorem libero blanditiis harum distinctio similique dicta deserunt? Cupiditate, fuga inventore!
      </p>
    </div>
  );
};

export default Card;
