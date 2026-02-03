"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function LPC4088EmbeddedFirmwarePage() {
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
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-4"
        >
          LPC4088 Embedded Firmware System
        </motion.h1>

        {/* Overview */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-700 dark:text-gray-300 mb-6"
        >
          Bare-metal embedded firmware developed for the NXP LPC4088
          microcontroller. This project demonstrates low-level hardware control,
          deterministic real-time behavior, and multi-peripheral integration
          without an operating system.
        </motion.p>

        <div className="space-y-12">
          {/* System Overview */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <img
                src="/lpc4088-board.jpg"
                alt="LPC4088 Development Board"
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
                Bare-Metal Firmware Architecture
              </h2>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>
                  Programmed the LPC4088 using ARM assembly and C++ at the
                  register level.
                </li>
                <li>
                  No RTOS — firmware executes deterministically using interrupts
                  and polling.
                </li>
                <li>
                  Direct control of GPIO, timers, UART, and I2C peripherals.
                </li>
                <li>
                  Designed a structured main loop with interrupt-driven events.
                </li>
                <li>
                  Emphasis on predictability, timing, and hardware awareness.
                </li>
              </ul>
            </motion.div>
          </div>

          {/* I2C + UI Section */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2 bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md"
            >
              <h2 className="text-xl font-semibold mb-3">
                I2C Peripheral Integration
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The firmware integrates multiple I2C devices on a shared bus,
                coordinated through low-level driver logic and a simple
                user-interface system.
              </p>

              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>
                  <strong>RTC:</strong> DS1337 real-time clock with alarm support.
                </li>
                <li>
                  <strong>Temperature Sensor:</strong> DS1631 digital temperature
                  sensor.
                </li>
                <li>
                  <strong>LCD:</strong> 4×20 character LCD via PCF8574T I/O
                  expander.
                </li>
                <li>
                  <strong>Input:</strong> Matrix keypad for menu navigation and
                  control.
                </li>
                <li>
                  Event-driven updates using timer interrupts and keypad input.
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:col-span-3 flex md:justify-end"
            >
              <img
                src="/lpc4088-lcd-ui.png"
                alt="LPC4088 LCD Interface"
                className="w-full max-w-md md:max-w-lg rounded-lg shadow-md object-contain"
              />
            </motion.div>
          </div>

          {/* Features */}
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">
              System Features
            </h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Real-time clock display and alarm handling.</li>
              <li>Temperature monitoring with periodic updates.</li>
              <li>Menu-driven UI using keypad + LCD.</li>
              <li>Interrupt-driven timing using hardware timers.</li>
              <li>Clean separation between drivers and application logic.</li>
            </ul>
          </div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md space-y-4"
          >
            <h2 className="text-xl font-semibold mb-2">Tools Used</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>
                <strong>MCU:</strong> NXP LPC4088 (ARM Cortex-M4)
              </li>
              <li>
                <strong>Languages:</strong> ARM Assembly, C++
              </li>
              <li>
                <strong>Peripherals:</strong> GPIO, UART, I2C, Timers, Interrupts
              </li>
              <li>
                <strong>IDE:</strong> Keil µVision 5
              </li>
              <li>
                <strong>Debug:</strong> JTAG / Serial Debugging
              </li>
            </ul>
          </motion.div>

          {/* Purpose */}
          <motion.div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Purpose</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Demonstrate a strong understanding of low-level embedded systems
              by building a complete, bare-metal firmware application that
              interfaces directly with hardware and behaves deterministically.
            </p>
          </motion.div>

          {/* Results */}
          <motion.div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Results</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Fully functional multi-device I2C system.</li>
              <li>Stable UI with predictable timing.</li>
              <li>Demonstrated register-level hardware control.</li>
              <li>Reusable firmware structure for future projects.</li>
            </ul>
          </motion.div>

          {/* GitHub */}
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            href="https://github.com/Matthew-Garcia/lpc4088-embedded-firmware"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 bg-black text-white rounded hover:bg-gray-800"
          >
            View on GitHub →
          </motion.a>
        </div>
      </main>

      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
