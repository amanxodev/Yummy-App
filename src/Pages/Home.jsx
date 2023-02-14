import Veggies from "../Components/Veggies";
import { Popular } from "../Components/Popular";
import { motion } from "framer-motion";

import React from "react";

const Home = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Veggies />
      <Popular />
    </motion.div>
  );
};

export default Home;
