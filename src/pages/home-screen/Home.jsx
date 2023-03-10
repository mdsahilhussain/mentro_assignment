import React, { useState } from "react";
import { Slider, Button, Rating } from "../../components";
import "./home.css";
import { MdSouth } from "react-icons/md";
import { items } from "../../constants/user-data";
const Home = () => {
  const [angle, setAngle] = useState(0);
  const [user, setUser] = useState(0);
  const sectionAngle = 360 / items.length;

  const handleRightClick = () => {
    setAngle(angle - sectionAngle);
    if (user >= items.length - 1) {
      setUser(0);
      return;
    }
    setUser((current) => current + 1);
  };

  const handleLeftClick = () => {
    setAngle(angle + sectionAngle);
    if (user <= 0) {
      setUser(items.length - 1);
      return;
    }
    setUser((current) => current - 1);
  };

  return (
    <section className="home___section">
      <div className="slider___section">
        <div className="slider____border"></div>
        <Slider angle={angle} sectionAngle={sectionAngle} />
      </div>

      <div className="home___section--sliderArea">
        <div className="home___section--sliderControler">
          <div
            className="sliderControler___rightButton"
            onClick={handleRightClick}
          >
            <MdSouth />
          </div>
          <div className="home___section--profileImage">
            <img
              key={user}
              src={items[user]?.image}
              alt={items[user]?.name}
              className="rotate-in-center"
            />
          </div>
          <div
            className="sliderControler___leftButton"
            onClick={handleLeftClick}
          >
            <MdSouth />
          </div>
        </div>
        <div className="sliderArea___userButton">
          <div
            key={user}
            className="scale-in-left"
            style={{ width: "fit-content", height: "fit-content" }}
          >
            <Button
              title={items[user]?.name}
              style={{
                padding: "0.8rem 1.5rem",
                backgroundColor: "#bde1b1",
                color: "#00000",
                fontSize: "1rem",
                fontWeight: "bold",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>
      </div>

      <div className="home___section--lower">
        <div key={user} className="home___section--userInfo scale-in-left">
          <h1>{items[user]?.rating}</h1>
          <h2 style={{ color: "#609b6c" }}>
            <Rating rating={items[user]?.rating} />
          </h2>
          <h2>{items[user]?.name}</h2>
          <h3>{items[user]?.jobTitel}</h3>
          <p>{items[user]?.descption}</p>
          <Button
            title="Book a session"
            isShadow={true}
            style={{
              padding: "0.5rem 1.5rem",
              backgroundColor: "#609b6c",
              color: "#ffffff",
              fontWeight: "700",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
