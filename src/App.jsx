import { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";
import image1 from "./image1.png";

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
          Đọc thư
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center gap-4"
        >
          <img
            src={image1}
            className="w-[60vh] rounded-xl shadow-xl"
            alt="Thu"
          />

          <a
            href={image1}
            download="buc-thu.png"
            className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
          >
            Download ảnh 📥
          </a>

        </motion.div>
      )}

    </div>
  );
}

export default App;
