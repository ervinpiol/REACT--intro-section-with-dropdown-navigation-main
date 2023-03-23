import React from "react";
import AllImages from "../../constants/AllImages";
import { motion } from "framer-motion";

const FeaturesModal = () => {
  const isBigScreen = window.innerWidth >= 992; // set breakpoint to 992px, adjust as needed
  const initial = isBigScreen ? "hidden" : null;
  const whileInView = isBigScreen ? "visible" : null;

  const features = [
    [AllImages.TodoImg, "Todo List"],
    [AllImages.CalendarImg, "Calendar"],
    [AllImages.RemindersImg, "Reminders"],
    [AllImages.PlanningImg, "Planning"],
  ];

  return (
    <motion.div
      className="absolute top-[2.5rem] right-0 lg:static"
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <ul className="flex flex-col text-MediumGray bg-AlmostWhite shadow-modalShadow p-6 rounded-xl gap-3 w-[165px] lg:shadow-none lg:pb-0">
        {features.map(([icon, text], index) => (
          <li key={`features-${index}`} className="flex items-center gap-4">
            <img src={icon} alt={text} />
            <a href="#">{text}</a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default FeaturesModal;
