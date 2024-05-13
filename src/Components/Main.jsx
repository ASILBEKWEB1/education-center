import { Button } from "@mui/material";
import React from "react";
import Main_img from "../img/img.png";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import Microsoft from "../img/microsoft.png";
import Fiver from "../img/Fiver.png";
import Udemy from "../img/udemy.png";
import byjus from "../img/byjus.png";
import Steps from "../img/steps.png";
import img1 from "../img/img1.png";
import Profile from "../img/profile.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
const Main = () => {
  return (
    <div>
      {/* Main  */}
      <div className="p-[40px] bg-[#E4F5EB] ">
        <div className="flex justify-between items-center bg-[#E4F5EB]">
          <div className="w-[50%] ">
            <div className="Text">
              <h1 className="text-[80px] font-[700] text-[#242323]">
                Anytime,anywhere Develop your skill by Online
              </h1>
              <p className="text-[27px] text-[#6C6C6A] font-[500]">
                Online education is a form of education where students use their
                home computers through the internet. For many nontraditional
                students, among them all those who want to continue.
              </p>
            </div>
            <div className=" w-[300px]  flex justify-between items-center ml-[100px] mt-[30px]">
              <Button className=" h-[50px] " variant="contained">
                All courses
              </Button>
              <Button className="h-[50px] ">
                <PlayCircleOutlineIcon /> play video
              </Button>
            </div>
          </div>
          <div className="Main_img">
            <img src={Main_img} alt="" />
          </div>
        </div>
      </div>
      {/* Get started */}
      <div>
        <div className="  mt-[70px] w-[90%] flex justify-between  items-center ">
          <div className="p-[40px]">
            <p className=" w-[400px] text-[40px] font-bold text-[#575859]">
              Trusted by 30,000+ satisfied students
            </p>
          </div>
          <div className="flex justify-between items-center w-[50%]">
            <img src={Udemy} alt="" />
            <img src={Fiver} alt="" />
            <img src={byjus} alt="" />
            <img src={Microsoft} alt="" />
          </div>
        </div>

        <div className="flex justify-center items-center ">
          <div>
            <img src={Steps} alt="" />
          </div>
          <div>
            <h1 className="w-[340px] text-[50px] font-bold ">
              Get Started in 4 Easy Steps
            </h1>
            <p className="text-[25px] w-[700px] font-bold text-[#6C6C6A] mt-[20px]">
              Proper and good education is very important for all of us. It
              facilitates quality learning all through the life among people of
              any age group, cast, creed, religion and region.
            </p>
            <p className="text-[25px] w-[700px] font-bold text-[#6C6C6A] mt-[20px] mb-[20px]">
              It is the process of achieving knowledge, values, skills, beliefs,
              and moral habits.Education is the process of facilitating
              learning, or the acquisiof knowledge, skills, values.
            </p>
            <Button variant="contained">
              <PlayCircleFilledWhiteIcon />{" "}
              <p className=" ml-[5px] underline text-[25px]">
                See how it works
              </p>
            </Button>
          </div>
        </div>
      </div>
      {/* our Courses */}
      <div className=" block m-[0 auto] mt-[40px] p-[40px] bg-[#E4F5EB]">
        <h1 className="text-[70px] font-bold text-center">
          Our popular courses
        </h1>
        <div className="flex justify-between items-center flex-wrap  gap-10 border">
          <div className="w-[450px] h-[630px]  bg-white m-[30px] scale-90">
            <img
              src={img2}
              alt=""
              className="rounded-t-lg w-[450px] h-[300px]"
            />
            <div className="p-[20px]">
              <h2 className="text-[35px] font-semibold text-[#242323]">
                Digital Marketing|How to Manage Market{" "}
              </h2>
              <div className="flex justify-between items-center  w-[400px] h-[80px]  border-b-2">
                <div className="flex justify-between items-center w-[150px] ">
                  <PlayCircleFilledWhiteIcon fontSize="large" color="primary" />
                  <p className="text-[20px] font-bold text-[#6C6C6A]">
                    30 Lectures
                  </p>
                </div>
                <p className="text-[20px] font-bold text-[#6C6C6A]">
                  12k+Learners
                </p>
              </div>
              <div className=" flex justify-between items-center mt-[15px]">
                <div className=" flex justify-center items-center">
                  <img src={Profile} alt="" />
                  <p className="pl-[10px] font-bold">Kumaniya Martin</p>
                </div>
                <h1 className="text-[30px] font-bold text-[#4C68FF]">$100</h1>
              </div>
            </div>
          </div>
          <div className="w-[450px] h-[630px]  bg-white scale-100  ">
            <img
              src={img1}
              alt=""
              className="rounded-t-lg w-[450px] h-[300px]"
            />
            <div className="p-[20px]">
              <h2 className="text-[35px] font-semibold text-[#242323]">
                Digital Marketing|How to Manage Market{" "}
              </h2>
              <div className="flex justify-between items-center  w-[400px] h-[80px]  border-b-2">
                <div className="flex justify-between items-center w-[150px] ">
                  <PlayCircleFilledWhiteIcon fontSize="large" color="primary" />
                  <p className="text-[20px] font-bold text-[#6C6C6A]">
                    30 Lectures
                  </p>
                </div>
                <p className="text-[20px] font-bold text-[#6C6C6A]">
                  12k+Learners
                </p>
              </div>
              <div className=" flex justify-between items-center mt-[15px]">
                <div className=" flex justify-center items-center">
                  <img src={Profile} alt="" />
                  <p className="pl-[10px] font-bold">Kumaniya Martin</p>
                </div>
                <h1 className="text-[30px] font-bold text-[#4C68FF]">$100</h1>
              </div>
            </div>
          </div>
          <div className="w-[450px] h-[630px]  bg-white scale-90 ">
            <img
              src={img3}
              alt=""
              className="rounded-t-lg w-[450px] h-[300px]"
            />
            <div className="p-[20px]">
              <h2 className="text-[35px] font-semibold text-[#242323]">
                Digital Marketing|How to Manage Market{" "}
              </h2>
              <div className="flex justify-between items-center  w-[400px] h-[80px]  border-b-2">
                <div className="flex justify-between items-center w-[150px] ">
                  <PlayCircleFilledWhiteIcon fontSize="large" color="primary" />
                  <p className="text-[20px] font-bold text-[#6C6C6A]">
                    30 Lectures
                  </p>
                </div>
                <p className="text-[20px] font-bold text-[#6C6C6A]">
                  12k+Learners
                </p>
              </div>
              <div className=" flex justify-between items-center mt-[15px]">
                <div className=" flex justify-center items-center">
                  <img src={Profile} alt="" />
                  <p className="pl-[10px] font-bold">Kumaniya Martin</p>
                </div>
                <h1 className="text-[30px] font-bold text-[#4C68FF]">$100</h1>
              </div>
            </div>
          </div>
          <div className="w-[450px] h-[630px]  bg-white scale-90">
            <img
              src={img2}
              alt=""
              className="rounded-t-lg w-[450px] h-[300px]"
            />
            <div className="p-[20px]">
              <h2 className="text-[35px] font-semibold text-[#242323]">
                Digital Marketing|How to Manage Market{" "}
              </h2>
              <div className="flex justify-between items-center  w-[400px] h-[80px]  border-b-2">
                <div className="flex justify-between items-center w-[150px] ">
                  <PlayCircleFilledWhiteIcon fontSize="large" color="primary" />
                  <p className="text-[20px] font-bold text-[#6C6C6A]">
                    30 Lectures
                  </p>
                </div>
                <p className="text-[20px] font-bold text-[#6C6C6A]">
                  12k+Learners
                </p>
              </div>
              <div className=" flex justify-between items-center mt-[15px]">
                <div className=" flex justify-center items-center">
                  <img src={Profile} alt="" />
                  <p className="pl-[10px] font-bold">Kumaniya Martin</p>
                </div>
                <h1 className="text-[30px] font-bold text-[#4C68FF]">$100</h1>
              </div>
            </div>
          </div>
          <div className="w-[450px] h-[630px]  bg-white scale-100">
            <img
              src={img3}
              alt=""
              className="rounded-t-lg w-[450px] h-[300px]"
            />
            <div className="p-[20px]">
              <h2 className="text-[35px] font-semibold text-[#242323]">
                Digital Marketing|How to Manage Market{" "}
              </h2>
              <div className="flex justify-between items-center  w-[400px] h-[80px]  border-b-2">
                <div className="flex justify-between items-center w-[150px] ">
                  <PlayCircleFilledWhiteIcon fontSize="large" color="primary" />
                  <p className="text-[20px] font-bold text-[#6C6C6A]">
                    30 Lectures
                  </p>
                </div>
                <p className="text-[20px] font-bold text-[#6C6C6A]">
                  12k+Learners
                </p>
              </div>
              <div className=" flex justify-between items-center mt-[15px]">
                <div className=" flex justify-center items-center">
                  <img src={Profile} alt="" />
                  <p className="pl-[10px] font-bold">Kumaniya Martin</p>
                </div>
                <h1 className="text-[30px] font-bold text-[#4C68FF]">$100</h1>
              </div>
            </div>
          </div>
          <div className="w-[450px] h-[630px]  bg-white scale-90">
            <img
              src={img1}
              alt=""
              className="rounded-t-lg w-[450px] h-[300px]"
            />
            <div className="p-[20px]">
              <h2 className="text-[35px] font-semibold text-[#242323]">
                Digital Marketing|How to Manage Market{" "}
              </h2>
              <div className="flex justify-between items-center  w-[400px] h-[80px]  border-b-2">
                <div className="flex justify-between items-center w-[150px] ">
                  <PlayCircleFilledWhiteIcon fontSize="large" color="primary" />
                  <p className="text-[20px] font-bold text-[#6C6C6A]">
                    30 Lectures
                  </p>
                </div>
                <p className="text-[20px] font-bold text-[#6C6C6A]">
                  12k+Learners
                </p>
              </div>
              <div className=" flex justify-between items-center mt-[15px]">
                <div className=" flex justify-center items-center">
                  <img src={Profile} alt="" />
                  <p className="pl-[10px] font-bold">Kumaniya Martin</p>
                </div>
                <h1 className="text-[30px] font-bold text-[#4C68FF]">$100</h1>
              </div>
            </div>
          </div>
         
        </div>
        <div className="flex justify-center items-center mt-[30px]">
        <Button variant="contained" size="large"   style={{background : "#4caf50"}}>View All courses</Button>
        </div>
      </div>
      
    </div>
  );
};

export default Main;
