import { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  const [reFuseCount, setRefusedCount] = useState(0);
  const [accpeted, setAccepted] = useState(false);
  const HandleNoClick = () => {
    setRefusedCount((prev) => prev + 1);
  };
  const HandleYesClick = () => {
    setAccepted(true);
  };
  const getRandomPosition = () => {
    const x = Math.random() * 450 - 250;
    const y = Math.random() * 450 - 250;
    return { x, y };
  };
  return (
    <>
      <div className="relative w-full h-full flex justify-center">
        <img
          src="https://iili.io/FXy52ZN.png"
          className="w-[90vh] h-auto absolute z-0 left-0 top-9"
          alt=""
        />
        <img
          src="https://iili.io/Fh9dtXR.png"
          className="w-[90vh] h-auto absolute z-0 right-0  top-96 xl:top-9"
          alt=""
        />
        {!accpeted ? (
          <div className="w-[50vh] h-[60vh]  xl:w-[80vh] xl:h-[60vh] bg-sky-100 border-4 border-sky-950 rounded-3xl shadow-2xl flex flex-col items-center py-5 gap-5 absolute top-[150px] xl:top-[9vw] ">
            <h1 className="text-blue-950 font-bold text-[18px] lg:text-[19px] xl:text-[22px]">
              Em có thích anh khongggg
            </h1>
            <img
              src="https://iili.io/FXvmDbe.png"
              className="w-[30vh] h-auto"
              alt=""
            />
            <div className="w-full flex items-center justify-center gap-16 mt-5">
              <motion.button
                onClick={HandleYesClick}
                className="w-[15vh] h-[5vh] border-[2px] border-gray-700 bg-sky-800 text-yellow-100 flex justify-center items-center font-bold rounded-lg shadow-2xl hover:bg-sky-950 transition-all duration-300"
                style={{
                  transform: `scale(${1 + reFuseCount * 0.2})`,
                }}
              >
                Cóooo 💞{" "}
              </motion.button>
              <motion.button
                onClick={HandleNoClick}
                className="w-[15vh] h-[5vh] border-[2px] border-gray-700 bg-sky-800 text-yellow-100 flex justify-center items-center font-bold rounded-lg shadow-2xl"
                animate={
                  reFuseCount >= 2 ? getRandomPosition() : { x: 0, y: 0 }
                }
                transition={{ type: "tween", duration: 0.1, ease: "easeInOut" }}
              >
                Không 😏{" "}
              </motion.button>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-center p-6 rounded-xl shadow-xl bg-gray-300 mt-[20vh] xl:mt-8 z-10 flex flex-col justify-center items-center"
          >
            <img src="https://iili.io/FhHO9Rf.jpg"
            className="w-[50vh] h-auto" alt="" />
            <h2 className="text-2xl font-bold text-pink-500 mt-2">
              Kaka anh biết mà 🥰
            </h2>
          </motion.div>
        )}
      </div>
    </>
  );
}

export default App;
