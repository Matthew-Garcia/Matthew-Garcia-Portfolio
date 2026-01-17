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
                src="/lunabotics-rover.png"
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
                  Implemented MicroPython control on ESP32 (WROOM / S3) for
                  rover drive control.
                </li>
                <li>
                  WebSocket-based control interface that accepts{" "}
                  <strong>v</strong> (linear) and <strong>w</strong> (angular)
                  commands.
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

          {/* Rover Moving Demo (Text Left / Video Right) */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2 bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md"
            >
              <h2 className="text-xl font-semibold mb-2">Rover Moving Demo</h2>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Continuous driving demo during field testing, showcasing stable
                motion control and predictable handling.
              </p>

              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>
                  Consistent throttle response with v/w velocity commands.
                </li>
                <li>Smooth turns and controlled acceleration.</li>
                <li>Reliable behavior during repeated test runs.</li>
              </ul>
            </motion.div>

            {/* Right: Video */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:col-span-3 flex md:justify-end"
            >
              <video
                src="/lunabotics-rover-moving.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full max-w-md md:max-w-lg rounded-lg shadow-md object-contain"
              />
            </motion.div>
          </div>

          {/* Control / Demo (Centered) */}
          <div className="flex flex-col items-center gap-6">
            <motion.video
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              src="/lunabotics-control.webm"
              autoPlay
              loop
              muted
              playsInline
              controls
              className="w-full max-w-5xl rounded-xl shadow-lg object-cover"
            />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md max-w-3xl w-full"
            >
              <h2 className="text-xl font-semibold mb-2 text-center">
                Differential Drive with v / w Commands
              </h2>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>
                  Converts linear/angular velocity into left/right wheel
                  commands.
                </li>
                <li>PWM output (high frequency) to drive motor controllers.</li>
                <li>Safe-stop logic on disconnect or command timeout.</li>
                <li>Tunable constants for turn strength and track width.</li>
                <li>
                  Designed for reliable driving during repeated field testing.
                </li>
              </ul>
            </motion.div>
          </div>

          {/* ROS 2 / Autonomy Snapshot */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <img
                src="/Lunabotics-ROS2.jpg"
                alt="ROS 2 Integration"
                className="w-full rounded-lg shadow-md object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2 bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md"
            >
              <h2 className="text-xl font-semibold mb-2">ROS 2 Integration</h2>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>
                  ROS 2 used for higher-level autonomy and navigation workflows.
                </li>
                <li>
                  Clean command pathway supports mapping control inputs into
                  rover motion.
                </li>
                <li>
                  System designed to expand toward full autonomy over time.
                </li>
                <li>
                  Debugging focused on repeatable motion + stable power
                  delivery.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Tools Used */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md space-y-4 mt-12"
        >
          <h2 className="text-xl font-semibold mb-2">Tools Used</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>
              <strong>Embedded:</strong> ESP32-WROOM, ESP32-S3, MicroPython
            </li>
            <li>
              <strong>Comms:</strong> WebSocket control (microdot +
              microdot.websocket), Wi-Fi networking
            </li>
            <li>
              <strong>Robotics:</strong> Differential drive, v/w command model
            </li>
            <li>
              <strong>Software:</strong> ROS 2, Linux
            </li>
            <li>
              <strong>Testing:</strong> Power + drivetrain debugging during
              field testing
            </li>
          </ul>
        </motion.div>

        {/* Purpose */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md space-y-4 mt-12"
        >
          <h2 className="text-xl font-semibold mb-2">Purpose</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Contribute to a competition-ready rover platform by delivering a
            reliable embedded control stack, safe startup behavior, and a clean
            interface for higher-level robotics software.
          </p>
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md space-y-4 mt-12"
        >
          <h2 className="text-xl font-semibold mb-2">Results</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Stable remote driving using v/w velocity commands.</li>
            <li>
              Safety boot behavior prevents accidental movement at startup.
            </li>
            <li>Improved repeatability during drivetrain testing.</li>
            <li>Foundation created for future autonomy integration.</li>
          </ul>
        </motion.div>

        {/* Future Work */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md space-y-4 mt-12"
        >
          <h2 className="text-xl font-semibold mb-2">Future Work</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Sensor integration for autonomy (encoders / IMU / LiDAR).</li>
            <li>ROS 2 navigation improvements and better state estimation.</li>
            <li>More robust power distribution and load testing.</li>
          </ul>
        </motion.div>

        <motion.a
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          href="https://github.com/Matthew-Garcia/uhcl-lunar-hawks-lunabotics"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-3 bg-black text-white rounded hover:bg-gray-800"
        >
          View on GitHub →
        </motion.a>
      </main>

      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
