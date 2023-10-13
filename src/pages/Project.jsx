import React from "react";
import Mida from "../image/large_thumbnail.png";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div className="">
      <img
        className="object-cover w-full reseption relative"
        src={Mida}
        alt="mida"
      />
      <Link to="/reseption" className="absolute mdlocation_reseption">
        <MdLocationOn size={45} />
      </Link>
      <Link to="/floors" className="absolute mdlocation_2">
        <MdLocationOn size={45} />
      </Link>
      <Link to="/floors" className="absolute mdlocation_3">
        <MdLocationOn size={45} />
      </Link>
      <Link to="/floors" className="absolute mdlocation_4">
        <MdLocationOn size={45} />
      </Link>
      <Link to="/floors" className="absolute mdlocation_5">
        <MdLocationOn size={45} />
      </Link>
    </div>
  );
};

export default Project;
