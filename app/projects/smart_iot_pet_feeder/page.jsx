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
          className="text-lg text-gray-700 dark:text-gray-300 mb-6"
        >
          This project features a custom-built SCARA (Selective Compliance
          Articulated Robot Arm) designed for precision pick-and-place tasks.
          The system combines mechanical engineering, embedded programming, and
          control theory into a single cohesive robotic platform.
        </motion.p>

        <div className="space-y-12">
          {/* Rendered Model */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <img
                src="/SCARA-Robot-Arm.png"
                alt="SCARA Robot Render"
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
                Arduino-Controlled SCARA Robot in Action
              </h2>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>
                  Interfaced with a custom-built control interface developed in
                  Processing.
                </li>
                <li>
                  Utilizes an Arduino microcontroller for precise motion with
                  forward and inverse kinematics.
                </li>
                <li>
                  Accepts joint parameters or Cartesian coordinates as input.
                </li>
                <li>
                  Provides real-time feedback and control over gripper
                  actuation.
                </li>
                <li>
                  Integrates embedded systems, mechanical design, and
                  user-centered software engineering.
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Animation */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <img
                src="/SCARA-Robot-Arm.gif"
                alt="SCARA Robot Animation"
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
                SCARA Robot Performing Pick-and-Place Operation
              </h2>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>
                  Demonstrates precise pick-and-place capabilities using inverse
                  kinematics and PID control.
                </li>
                <li>
                  Executes high-speed, repeatable motion driven by stepper
                  motors and microcontroller coordination.
                </li>
                <li>
                  Integrates end-effector control to perform object grasping and
                  placement with accuracy.
                </li>
                <li>
                  Operates on a pre-programmed motion sequence simulating a
                  production line task.
                </li>
                <li>
                  Highlights the real-world application of control theory,
                  embedded systems, and motion planning.
                </li>
              </ul>
            </motion.div>
          </div>

          {/* SolidWorks Snapshot */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <img
                src="/SCARA-Robot-SolidWorks.jpg"
                alt="SolidWorks Design"
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
                SolidWorks CAD View
              </h2>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>
                  CAD model developed in SolidWorks to visualize mechanical
                  structure and component layout.
                </li>
                <li>
                  Transparent view highlights internal components such as
                  motors, pulleys, lead screws, and belt systems.
                </li>
                <li>
                  Designed for modularity, 3D printing, and ease of assembly.
                </li>
                <li>
                  Emphasizes mechanical design principles including kinematic
                  constraints and actuator alignment.
                </li>
                <li>
                  Aids in verifying clearances, tolerances, and mechanical
                  integrity prior to physical prototyping.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md space-y-4 mt-12"
        >
          <h2 className="text-xl font-semibold mb-2">Tools Used</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>
              <strong>Electronics:</strong> Arduino Mega, CNC Shield, A4988
              stepper drivers, MG996R servo motor, NEMA 17 stepper motors, limit
              switches, DC power supply (12V/6A)
            </li>
            <li>
              <strong>3D Design Software:</strong> 3DEXPERIENCE SOLIDWORKS,
              xDesign, 3DMarkup
            </li>
            <li>
              <strong>Programming:</strong> Arduino IDE (C++), Processing IDE
              (Java-based), ControlP5 library
            </li>
            <li>
              <strong>Hardware:</strong> Bambu Lab X1 Carbon 3D Printer,
              PLA/PLA+ filament, linear rods, bearings, lead screws, GT2 pulleys
            </li>
            <li>
              <strong>Libraries:</strong> AccelStepper, ControlP5
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md space-y-4 mt-12"
        >
          <h2 className="text-xl font-semibold mb-2">Purpose</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Design and build a fully functional SCARA robotic arm for
            educational and experimental purposes, demonstrating core robotics
            concepts such as kinematics, motion control, and automation.
          </p>
        </motion.div>

        {/* Theory Section */}
        <div className="flex flex-col md:flex-row gap-6 items-center mt-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <img
              src="/Forward-and-Inverse-Kinematics-for-SCARA-Robot-Control.jpg"
              alt="Forward and Inverse Kinematics"
              className="w-full rounded-lg shadow-md object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-semibold mb-2">Theory</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>
                <strong>Forward Kinematics:</strong> Calculates end-effector
                position from joint angles.
              </li>
              <li>
                <strong>Inverse Kinematics:</strong> Computes joint angles for a
                specified position.
              </li>
              <li>
                <strong>Motion Control:</strong> Smooth trajectory execution via
                AccelStepper.
              </li>
              <li>
                <strong>GUI Integration:</strong> Live joint and Cartesian input
                with visual feedback.
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md space-y-4 mt-12"
        >
          <h2 className="text-xl font-semibold mb-2">Results</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>
              Demonstrated precise pick-and-place operation using inverse
              kinematics.
            </li>
            <li>Manual and automated modes with real-time GUI controls.</li>
            <li>Sequence recording and replay functionality implemented.</li>
            <li>Fully 3D printable modular design using parametric parts.</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md space-y-4 mt-12"
        >
          <h2 className="text-xl font-semibold mb-2">Conclusion</h2>
          <p className="text-gray-700 dark:text-gray-300">
            This SCARA robotic arm project served as a comprehensive
            demonstration of robotics engineering principles—bringing together
            CAD modeling, embedded systems, and control algorithms into a
            functional prototype. Through hands-on integration of hardware and
            software, the project strengthened practical skills in mechanical
            design, kinematic theory, and automation. Future improvements, such
            as integrating computer vision, will further enhance the robot’s
            autonomy and expand its application potential in industrial and
            academic settings.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md space-y-4 mt-12"
        >
          <h2 className="text-xl font-semibold mb-2">Future Work</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>
              Integrate computer vision for autonomous object detection and
              tracking.
            </li>
            <li>
              Experiment with 3D printing and laser engraving as end-effectors.
            </li>
            <li>
              Improve structural rigidity and minimize mechanical backlash.
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md space-y-4 mt-12"
        >
          <h2 className="text-xl font-semibold mb-2">Simulation & Modeling</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Custom robot models using URDF and Xacro</li>
            <li>Motion control verified through PID tuning in simulation</li>
            <li>
              Physics-based testing in Gazebo for collision and behavior
              validation
            </li>
            <li>Live robot state and path visualization in RViz2</li>
          </ul>
        </motion.div>

        <motion.a
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          href="https://github.com/Matthew-Garcia/SCARA-Robot"
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

