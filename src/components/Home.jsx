import React from "react";
import { FaPlay } from "react-icons/fa6";
import { motion } from "framer-motion";
import { LiaStarSolid } from "react-icons/lia";
import video from "../video/video.mp4";
import { Popup } from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Home = () => {
  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div>
      <div className="bg-[#F6F0F0] min-h-screen">
        <div className="flex flex-col md:flex-row gap-10 items-center text-center mx-auto md:ml-[7.5%] p-4 md:p-0">
          <motion.h1
            className="text-[50px] md:text-[80px] lg:text-[120px] font-semibold text-[#005CFE]"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.5 }}
          >
            Enhancing
          </motion.h1>
          <motion.h1
            className="text-[50px] md:text-[80px] lg:text-[120px] font-semibold"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            HealthCare
          </motion.h1>
        </div>
        <div className="flex flex-col md:flex-row items-center mx-auto md:ml-[7.5%] p-4 md:p-0">
          <motion.h1
            className="text-[50px] md:text-[80px] lg:text-[120px] font-semibold leading-[1.1]"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Access for All
          </motion.h1>
          <motion.div
            className="mt-4 md:mt-0 md:ml-[20%]"
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <button className="px-12 py-2 bg-black rounded-full text-white">
              Contact Now
            </button>
          </motion.div>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-8 mx-auto md:ml-[7.5%] p-4 md:p-0">
          <p className="text-[14px] md:text-[16px] lg:text-[18px]">
            At Medicare, we believe that everyone deserves access to
            high-quality healthcare services.
            <br className="hidden md:block" /> Our mission is to revolutionize
            the healthcare experience by combining cutting-edge technology with
            compassionate care. <br className="hidden md:block" /> Whether
            you're scheduling an appointment, consulting with our specialists,
            or accessing your medical records, we ensure a
            <br className="hidden md:block" /> seamless and personalized
            experience. Join us in our journey to make healthcare more
            accessible, efficient, and patient-centered.
          </p>
          <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0 md:ml-4">
            <motion.button
              className="h-[30px] w-[30px] bg-[#005CFE] rounded-full flex items-center justify-center"
              initial="hidden"
              animate="visible"
              variants={buttonVariants}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <Popup
                trigger={<FaPlay size={20} className="text-white" />}
                position="right center"
                modal
              >
                {(close) => (
                  <div className="video-popup">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                    <video width="800" height="500" controls>
                      <source src={video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
              </Popup>
            </motion.button>
            <motion.button
              className="px-7 py-2 mt-2 md:mt-0 md:ml-4 border-2 text-[#005CFE] border-[#005CFE] rounded-full"
              initial="hidden"
              animate="visible"
              variants={buttonVariants}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              How to Doctor
            </motion.button>
          </div>
        </div>
        <div className="flex ml-[7.5%] mt-16 items-center">
          <div className="h-[80px] w-[80px] bg-black rounded-full">
            <img
              className="rounded-full "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIV99IJOGUBMQBy9kccOQsAyq36yzt0BRYUw&s"
              alt=""
            />
          </div>
          <div className="h-[80px] w-[80px] bg-black rounded-full">
            <img
              className="rounded-full "
              src="https://www.erc.com.pk/wp-content/uploads/person4.jpg"
              alt=""
            />
          </div>
          <div className="h-[80px] w-[80px] bg-black rounded-full">
            <img
              className="rounded-full "
              src="https://www.erc.com.pk/wp-content/uploads/person6.jpg"
              alt=""
            />
          </div>
          <div className="h-[80px] w-[80px] bg-black rounded-full">
            <img
              className="rounded-full "
              src="https://immigrationspecialists.co.za/wp-content/uploads/2018/03/black-businessman-happy-expression_1194-2639.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="ml-[10%]">
          <div className="mt-4 text-[20px] font-semibold">
            <h1>1.7M Reviews</h1>
          </div>
          <div className="flex text-yellow-500">
            <LiaStarSolid size={20} />
            <LiaStarSolid size={20} />
            <LiaStarSolid size={20} />
            <LiaStarSolid size={20} />
            <LiaStarSolid size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
