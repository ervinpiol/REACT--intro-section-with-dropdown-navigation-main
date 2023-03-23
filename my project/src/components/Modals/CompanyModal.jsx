import React from "react";
import { motion } from "framer-motion";

const CompanyModal = () => {
  const isBigScreen = window.innerWidth >= 992; // set breakpoint to 992px, adjust as needed
  const initial = isBigScreen ? "hidden" : null;
  const whileInView = isBigScreen ? "visible" : null;

  return (
    <motion.div
      className="absolute top-[2.5rem] left-0 lg:static"
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <ul className="flex flex-col text-MediumGray bg-AlmostWhite shadow-modalShadow p-6 rounded-xl gap-3 w-[130px] lg:shadow-none lg:pb-0">
        {[["History"], ["Our Team"], ["Blog"]].map(([text], index) => (
          <li key={`company-${index}`}>
            <a
              href="#"
              className={`block hover:text-almost-black dark:hover:text-gray-400`}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default CompanyModal;
