import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
const QRCodeGenerator = () => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="container mx-auto ">
      <div className="col justify-items-center items-center text-center mt-40">
        <h1 className="font-bold tracking-wide text-3xl text-blue-700 ">
          QR Code Generator
        </h1>
        <input
          className="mt-7 cursor-pointer duration-700 shadow-md border-2 rounded border-gray-600 border-solid
            outline-none text-slate-800 w-96 h-12 p-3"
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="task....."
        />
        <div className="mt-6 ">
          <QRCodeCanvas value={input} className="shadow-md" />
        </div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
