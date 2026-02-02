"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function Smart_IoT_Pet_Feeder_Page() {
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
          Smart IoT Pet Feeder
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-700 dark:text-gray-300 mb-3"
        >
          A modern, 3D-printed automatic pet feeder designed for remote feeding
          via smartphone. Built using Wi-Fi-enabled microcontrollers and
          efficient 3D-printed parts, this feeder dispenses food on a
          customizable schedule or on demand using a mobile app.
        </motion.p>

        {/* quick "in progress" note */}
        <motion.p
          initial={{ opacity: 0, y: -6 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm text-gray-600 dark:text-gray-400 mb-8"
        >
          <strong>Update:</strong> I am actively updating this project page with
          improved documentation, refined portion calibration, and additional
          reliability testing.
        </motion.p>

        <div className="space-y-12">
          {/* Main Photo + Feature List */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <img
                src="/Smart_Bowl.png"
                alt="Smart IoT Pet Feeder"
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
                Smart IoT Pet Feeder Overview
              </h2>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>
                  Wi-Fi connected feeder with app-based <strong>manual dispense</strong>{" "}
                  and <strong>scheduled feeding</strong>.
                </li>
                <li>
                  Motor-driven dispensing mechanism (auger/rotary) with{" "}
                  <strong>calibrated timing</strong> for repeatable portions.
                </li>
                <li>
                  Status logging: tracks <strong>last dispense</strong>,{" "}
                  <strong>upcoming schedule</strong>, and user actions.
                </li>
                <li>
                  Reliability and safety considerations:{" "}
                  <strong>jam detection</strong>, missed-cycle handling, and manual override.
                </li>
                <li>
                  Modular 3D-printed housing for{" "}
                  <strong>easy cleaning</strong> and fast iteration on mechanical parts.
                </li>
                <li>
                  Cloud/API-ready design: supports lightweight{" "}
                  <strong>MQTT/HTTP integration hooks</strong> for smart home workflows.
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Tools Used (corrected to Pet Feeder) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md space-y-4"
          >
            <h2 className="text-xl font-semibold mb-2">Tools Used</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>
                <strong>Embedded / IoT:</strong> Wi-Fi microcontroller (ESP32-class),
                motor driver, sensors (optional for jam/level), power regulation
              </li>
              <li>
                <strong>Firmware:</strong> C/C++ (event/state logic, scheduling, device control),
                OTA update support (optional)
              </li>
              <li>
                <strong>Networking:</strong> HTTP and/or MQTT messaging, local network control
              </li>
              <li>
                <strong>Mechanical:</strong> 3D-printed parts (hopper, dispenser housing, mounts),
                iterative prototyping
              </li>
              <li>
                <strong>CAD / Prototyping:</strong> CAD modeling + 3D printing workflow
              </li>
            </ul>
          </motion.div>

          {/* Purpose (corrected) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md space-y-4"
          >
            <h2 className="text-xl font-semibold mb-2">Purpose</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Design and build a reliable, app-connected feeder that automates daily feeding while
              emphasizing repeatable portioning, safe operation, and a mechanically serviceable
              3D-printed design.
            </p>
          </motion.div>

          {/* Results (corrected) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md space-y-4"
          >
            <h2 className="text-xl font-semibold mb-2">Results</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>
                Implemented remote manual dispense and scheduled feeding control over Wi-Fi.
              </li>
              <li>
                Achieved repeatable portions through dispenser timing calibration and mechanical tuning.
              </li>
              <li>
                Added logging and basic fault handling to improve reliability and traceability.
              </li>
              <li>
                Built a modular 3D-printed enclosure that simplifies cleaning and maintenance.
              </li>
            </ul>
          </motion.div>

          {/* Conclusion (new, per your request) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md space-y-4"
          >
            <h2 className="text-xl font-semibold mb-2">Conclusion</h2>
            <p className="text-gray-700 dark:text-gray-300">
              This project demonstrates end-to-end hardware–software integration: designing a
              3D-printed mechanism, building embedded firmware to control a motor-driven dispenser,
              and enabling reliable scheduling and remote operation over Wi-Fi. It strengthened my
              skills in embedded control, IoT communication, mechanical iteration, and building systems
              that behave predictably in real-world use. I’m continuing to refine the design through
              improved calibration, reliability testing, and expanded fault detection.
            </p>
          </motion.div>
        </div>

        {/* OPTIONAL: if you have a repo for the pet feeder, swap this link in */}
        {/* 
        <motion.a
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          href="https://github.com/<your-username>/<your-pet-feeder-repo>"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-3 bg-black text-white rounded hover:bg-gray-800"
        >
          View on GitHub →
        </motion.a>
        */}
      </main>

      <Footer isDarkMode={isDarkMode} />
    </>
  );
}

