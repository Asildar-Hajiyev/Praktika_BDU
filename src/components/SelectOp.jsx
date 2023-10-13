import React, { useState, useEffect } from "react";
import Person2 from "../data/Person2.json";

const SelectOp = () => {
  const [data, setData] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    setData(Person2);
  }, []);

  const handleSelectChange = (event) => {
    const selectedOption = Person2.find(
      (item) => item.name === event.target.value
    );
    setSelectedValue(event.target.value);
    setShowInput(selectedOption.boolean);
  };

  return (
    <div className="grid">
      <select
        onChange={handleSelectChange}
        value={selectedValue}
        className="border p-2 font-mono mb-2  "
      >
        {/* <option value="">Select an option</option> */}
        {data.map((item, index) => (
          <option key={index} value={item.name}>
            {item.name}-{item.boolean}
          </option>
        ))}
      </select>
      <label for="fname" className="font-bold text-lg p-2">
        Mobil Nomrenizi Yazin:
      </label>
      <input
        type="tel"
        pattern="+[0-9]{3}-[0-9]{2}-[0-9]{3}"
        className="border p-2"
        placeholder="Place Write..."
        id="fname"
      />
      <small>Format: +(994)-456-7890</small>
      <label for="fmail" className="font-bold text-lg p-2 mt-2">
        Email Yazin:
      </label>
      <input
        type="email"
        id="fmail"
        className="border p-2 mb-2"
        placeholder="Place Write..."
      />

      {showInput && (
          <label for="img" className="font-bold text-lg p-2 mt-2">
            Select image:
          </label>
        ) && (
          <input
            type="file"
            className="border p-2"
            id="img"
            name="img"
            accept="image/*"
          />
        )}
      <div className=" font-thin text-xl border rounded w-[200px] p-2 mt-5 bg-black text-white cursor-pointer">
        Qeydiyyatdan kecin
      </div>
    </div>
  );
};

export default SelectOp;
