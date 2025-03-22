import React from "react";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="text-center my-6">
      <h1 className="text-4xl font-extrabold text-white">{title}</h1>
      {subtitle && <p className="mt-2 text-xl text-white">{subtitle}</p>}
    </header>
  );
};

export default Header;
