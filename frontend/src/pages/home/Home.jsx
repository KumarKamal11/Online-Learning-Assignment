import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Testimonials from "../../components/testimonials/Testimonials";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="home">
        <div className="home-content">
          <h1>Welcome to our Ed-tech Platform</h1>
          <p>Launch yourself to the top</p>
          <button onClick={() => navigate("/courses")} className="common-btn">
            Get Started
          </button>
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default Home;
