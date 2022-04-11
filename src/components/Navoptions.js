import React, { useState, useEffect } from "react";
import NavCard from "./NavCard.js";
import "../styles/NavOption.css";

const Navoptions = ({
  miphones,
  redmiphones,
  audio,
  home,
  laptop,
  tv,
  fitnessAndLifestyle,
  accessories,
}) => {
  const [miphonesToggle, setmiphonesToggle] = useState(false);
  const [redmiphonesToggle, setredmiphonesToggle] = useState(false);
  const [tvToggle, settvToggle] = useState(false);
  const [laptopToggle, setLaptopToggle] = useState(false);
  const [fitnessAndLifestyleToggle, setFitnessToggle] = useState(false);
  const [homeToggle, sethomeToggle] = useState(false);
  const [audioToggle, setaudioToggle] = useState(false);
  const [accessoriesToggle, setaccessoriesToggle] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/Xaiomi%20Phones") {
      return setmiphonesToggle(true);
    }
    if (window.location.pathname === "/Redmi%20Phones") {
      return setredmiphonesToggle(true);
    }
    if (window.location.pathname === "/Tv") {
      return settvToggle(true);
    }
    if (window.location.pathname === "/Laptop") {
      return setLaptopToggle(true);
    }
    if (window.location.pathname === "/Fitness") {
      return setFitnessToggle(true);
    }
    if (window.location.pathname === "/Home") {
      return sethomeToggle(true);
    }
    if (window.location.pathname === "/Audio") {
      return setaudioToggle(true);
    }
    if (window.location.pathname === "/Accessories") {
      return setaccessoriesToggle(true);
    }
  }, []);

  return (
    <div className="navoptions">
      {miphonesToggle
        ? miphones.map((item) => (
            <NavCard name={item.name} price={item.price} image={item.image} />
          ))
        : null}

      {redmiphonesToggle
        ? redmiphones.map((item) => (
            <NavCard name={item.name} price={item.price} image={item.image} />
          ))
        : null}

      {tvToggle
        ? tv.map((item) => (
            <NavCard name={item.name} price={item.price} image={item.image} />
          ))
        : null}

      {laptopToggle
        ? laptop.map((item) => (
            <NavCard name={item.name} price={item.price} image={item.image} />
          ))
        : null}

      {fitnessAndLifestyleToggle
        ? fitnessAndLifestyle.map((item) => (
            <NavCard name={item.name} price={item.price} image={item.image} />
          ))
        : null}

      {homeToggle
        ? home.map((item) => (
            <NavCard name={item.name} price={item.price} image={item.image} />
          ))
        : null}

      {audioToggle
        ? audio.map((item) => (
            <NavCard name={item.name} price={item.price} image={item.image} />
          ))
        : null}

      {accessoriesToggle
        ? accessories.map((item) => (
            <NavCard name={item.name} price={item.price} image={item.image} />
          ))
        : null}
    </div>
  );
};

export default Navoptions;
