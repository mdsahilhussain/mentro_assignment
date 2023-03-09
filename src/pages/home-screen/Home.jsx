import React, { useState } from "react";
import { Slider, Button } from "../../components";
import "./home.css";
import { MdSouth, MdStar } from "react-icons/md";
import { items } from "../../constants/user-data";
const Home = () => {
  const [angle, setAngle] = useState(0);
  const [user, setUser] = useState(0);
  const sectionAngle = 360 / items.length;
  const handleRightClick = () => {
    setAngle(angle - sectionAngle);
    setUser((current) => current + 1);
  };

  const handleLeftClick = () => {
    setAngle(angle + sectionAngle);
    setUser((current) => current - 1);
  };

  return (
    <section className="home___section">
      <div className="slider___section">
        <Slider
          style={{ position: "relative" }}
          angle={angle}
          sectionAngle={sectionAngle}
        />
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
            <img src={items[0].image} alt="" />
          </div>
          <div
            className="sliderControler___leftButton"
            onClick={handleLeftClick}
          >
            <MdSouth />
          </div>
        </div>
        <div className="sliderArea___userButton">
          <Button
            title="Book a session"
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

      <div className="home___section--lower">
        <div className="home___section--userInfo">
          <h1>5.0</h1>
          <h2>Ankita</h2>
          <h3>ML Engineer @Firework</h3>
          <p>
            Working my way to build the world's future product. Machine Learning
            Engineer, Data and Technology Evangelist I breathe in developing
            software with intelligence. I have been involved with startups like
            DailyHunt, Firework Hq, MagilHub to build the AI end of their
            products.
          </p>
          <Button
            title="Book a session"
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
