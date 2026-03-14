import { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  const [openLetter, setOpenLetter] = useState(false);

  const handleOpenLetter = () => {
    setOpenLetter(true);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-pink-100">

      {!openLetter ? (
        <motion.button
          onClick={handleOpenLetter}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-8 py-4 bg-pink-500 text-white text-xl font-bold rounded-xl shadow-lg"
        >
          Đọc thư 💌
        </motion.button>
      ) : (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="flex flex-col items-center gap-4"
        >
          <img
            src="https://zpic.io/view/7RWV5oCR"
            className="w-[60vh] rounded-xl shadow-xl"
            alt="Thu"
          />

          <h2 className="text-2xl font-bold text-pink-600">
            Một bức thư dành cho em ❤️
          </h2>
        </motion.div>
      )}

    </div>
  );
}

export default App;
