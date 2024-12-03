import { useState } from "react";
import "./Bai3.scss";
import Control from "./Control";

const Bai3 = () => {
  const anhs = [
    {
      anh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4RuGVZl1-y9LRD9J82X7o0XKywcolQGoHoA&s",
    },
    {
      anh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwvM2f6d3PF2ZETLyFvfaLQzZCdWJY34-omg&s",
    },
    { anh: "https://internetviettel.vn/wp-content/uploads/2017/05/1-2.jpg" },
    {
      anh: "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/hinh-dep-19.jpg",
    },
    {
      anh: "https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg",
    },
    {
      anh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvhUJLKM7os8q4NdlMQI6_NVj1VAD_2X4dig&s",
    },
    {
      anh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvhUJLKM7os8q4NdlMQI6_NVj1VAD_2X4dig&s",
    },
    {
      anh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Nji70n0nKnujZh_As_Klbd6AKI9a9vl4Ag&s",
    },
  ];

  const [controlState, setControlState] = useState({
    className: "",
    image: "",
  });

  const handleImageClick = (image) => {
    setControlState({ className: "Control__hienthi", image });
  };

  const handleClose = () => {
    setControlState({ className: "", image: "" });
  };

  return (
    <>
      <div className="wrapper">
        {anhs.map((anh, index) => (
          <div
            key={index}
            className="wrapper__images"
            onClick={() => handleImageClick(anh.anh)}
          >
            <img src={anh.anh} alt="" />
          </div>
        ))}
      </div>
      <Control
        className={controlState.className}
        image={controlState.image}
        onClose={handleClose}
      />
    </>
  );
};

export default Bai3;
