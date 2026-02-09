import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./FeatureCard.scss";

export default function FeatureCard({
  icon,
  title,
  description,
  accent = "#38BDF8",
}) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: false,
    margin: "-100px",
    amount: 0.3,
  });
  // Container animation variants for stagger effect
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  // Item animation variants for child elements
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  // Icon specific animation with rotation
  const iconVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      rotate: -10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <motion.article
      ref={ref}
      className="featureCard"
      style={{ "--accent": accent }}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 20,
        duration: 0.6,
      }}
      whileHover={{
        y: -8,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 25,
        },
      }}
    >
      <motion.div
        className="content"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div
          className="iconWrap"
          variants={iconVariants}
          whileHover={{
            rotate: 5,
            scale: 1.1,
            transition: {
              type: "spring",
              stiffness: 500,
              damping: 15,
            },
          }}
        >
          <div className="icon">{icon ?? <DefaultIcon />}</div>
        </motion.div>

        <motion.h3 className="title" variants={itemVariants}>
          {title}
        </motion.h3>

        <motion.p className="desc" variants={itemVariants}>
          {description}
        </motion.p>

        <motion.div
          className="ctaRow"
          variants={itemVariants}
          whileHover={{
            x: 4,
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 20,
            },
          }}
        >
          <motion.span
            className="ctaDot"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <span className="ctaText">Learn more</span>
          <motion.svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="ctaArrow"
            initial={{ x: 0 }}
            whileHover={{ x: 3 }}
          >
            <path
              d="M6 3l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </motion.div>
      </motion.div>
    </motion.article>
  );
}

function DefaultIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
