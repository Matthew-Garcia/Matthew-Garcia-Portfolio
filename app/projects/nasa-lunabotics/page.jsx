"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function NasaLunaboticsPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDarkMode]);

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <main className="max-w-7xl mx-auto px-6 pt-48 pb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-4"
        >
          NASA Lunabotics Autonomous Rover
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-700 dark:text-gray-300 mb-6"
        >
          This project focuses on building and testing an autonomous rover for
          the NASA Lunabotics competition. My work spans embedded motor control,
          rover safety behavior, and software integration for differential drive
          motion using linear and angular velocity commands.
        </motion.p>

        <div className="space-y-12">
          {/* Rover Photo */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <img
                src="/Lunabotics-Rover.png"
                alt="NASA Lunabotics Rover"
                className="w-full rounded-lg shadow-md object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2 bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md"
            >
              <h2 className="text-xl font-semibold mb-2">
                Embedded Control + Rover Safety
              </h2>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>
                  Implemented MicroPython control on ESP32 (WROOM / S3) for rover
                  drive control.
                </li>
                <li>
                  WebSocket-based control interface that accepts <strong>v</strong>{" "}
                  (linear) and <strong>w</strong> (angular) commands.
                </li>
                <li>
                  Differential drive conversion to left/right wheel commands and
                  PWM control.
                </li>
                <li>
                  Safety behavior on boot: force motor pins LOW to prevent
                  unintended motion.
                </li>
                <li>
                  Supported testing & debugging of drivetrain behavior and power
                  stability.
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Control / Demo */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <img
                src="/Lunabotics-Control.gif"
                alt="Lunabotics Control Demo"
                className="w-full rounded-lg shadow-md object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2 bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md"
            >
              <h2 className="text-xl font-semibold mb-2">
                Differential Drive with v / w Commands
              </h2>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>
                  Converts linear/angular velocity into left/right wheel speed
                  commands.
                </li>
                <li>
                  PWM output (high frequency) to drive motor controllers.
                </li>
                <li>
                  Safe-stop logic when connection drops or commands timeout.
                </li>
                <li>
                  Tunable constants for turn strength and track width.
                </li>
                <li>
                  Designed for reliable driving during repeated field testing.
                </li>
              </ul>
            </motion.div>
          </div>

          {/* ROS 2 / Autonomy Snapshot */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <motion.div

