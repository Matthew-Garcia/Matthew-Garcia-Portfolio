"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function Alu64BitPage() {
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
          64-bit ALU Design (VHDL)
        </motion.h1>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-700 dark:text-gray-300 mb-6"
        >
          This project implements a synthesizable <strong>64-bit Arithmetic Logic Unit</strong>{" "}
          in <strong>VHDL</strong> with opcode-controlled arithmetic, logic, and shift operations.
          The design was verified using a structured testbench and analyzed using{" "}
          <strong>Xilinx Vivado</strong> RTL schematics and simulation waveforms.
        </motion.p>

        <div className="space-y-12">
          {/* Section 1: Schematic (Image Left / Text Right) */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <img
                src="/alu_64bit_rtl_schematic.png"
                alt="64-bit ALU RTL Schematic (Vivado)"
                className="w-full rounded-lg shadow-md object-contain bg-white dark:bg-zinc-900 p-2"
              />
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                RTL schematic generated in Vivado showing parallel functional units and opcode-controlled multiplexing.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2 bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md"
            >
              <h2 className="text-xl font-semibold mb-2">Datapath Architecture</h2>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>
                  Parallel functional units (ADD/SUB, bitwise logic, logical & arithmetic shifts).
                </li>
                <li>
                  <strong>Opcode-controlled multiplexers</strong> select both result and carry-out paths.
                </li>
                <li>
                  64-bit datapath with 65-bit internal add/sub path to compute <strong>Carry_Out</strong>.
                </li>
                <li>
                  Shift amount uses <code>Reg_B[5:0]</code> to constrain shifts to 0–63.
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Section 2: Waveform (Text Left / Image Right) */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2 bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md"
            >
              <h2 className="text-xl font-semibold mb-3">Verification & Simulation</h2>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                A dedicated VHDL testbench validates operation selection and functional correctness.
                The waveform view confirms expected output transitions when <code>Op_Sel</code> and inputs change.
              </p>

              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>
                  Deterministic opcode sequencing to cover arithmetic, logic, and shift behaviors.
                </li>
                <li>
                  Edge cases tested (carry-in behavior, sign extension on arithmetic right shift).
                </li>
                <li>
                  Visible cause → effect relationship between inputs and <code>ALU_Out</code>/<code>Carry_Out</code>.
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
                src="/alu_64bit_functional_waveform.png"
                alt="ALU 64-bit simulation waveform"
                className="w-full max-w-5xl rounded-lg shadow-md object-contain bg-white dark:bg-zinc-900 p-2"
              />
            </motion.div>
          </div>

          {/* Optional: PDF Link Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-semibold mb-2">Design Artifacts</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Download the full-resolution RTL schematic PDF for detailed inspection and zooming.
            </p>
            <a
              href="/alu_64bit_rtl_schematic.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-black text-white rounded hover:bg-gray-800"
            >
              View RTL Schematic (PDF) →
            </a>
          </motion.div>

          {/* Tools Used */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md space-y-4"
          >
            <h2 className="text-xl font-semibold mb-2">Tools Used</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>
                <strong>HDL:</strong> VHDL (IEEE <code>numeric_std</code>)
              </li>
              <li>
                <strong>FPGA Tooling:</strong> Xilinx Vivado (RTL elaboration + schematic viewer)
              </li>
              <li>
                <strong>Verification:</strong> Behavioral simulation + waveform inspection
              </li>
              <li>
                <strong>Core Concepts:</strong> datapath design, opcode selection, carry logic, shifts
              </li>
            </ul>
          </motion.div>

          {/* Purpose */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md space-y-4"
          >
            <h2 className="text-xl font-semibold mb-2">Purpose</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Build a portfolio-ready digital design project demonstrating computer architecture fundamentals:
              a clean opcode-driven ALU datapath, synthesizable RTL, and verification via simulation.
            </p>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md space-y-4"
          >
            <h2 className="text-xl font-semibold mb-2">Results</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Functional 64-bit ALU supporting arithmetic, logic, and shift operations via opcode selection.</li>
              <li>Correct carry-out behavior for increment, decrement, and addition with carry-in.</li>
              <li>Vivado RTL schematic confirms professional datapath structure and signal routing.</li>
              <li>Waveform verification demonstrates correct output transitions across multiple opcodes.</li>
            </ul>
          </motion.div>

          {/* Future Work */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md space-y-4"
          >
            <h2 className="text-xl font-semibold mb-2">Future Work</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Add assert-based self-checking in the testbench for automated pass/fail verification.</li>
              <li>Export post-synthesis schematic to show implementation mapping vs RTL structure.</li>
              <li>Extend opcode set (compare, set-less-than, barrel shifter, flags: Z/N/V/C).</li>
            </ul>
          </motion.div>
        </div>

        {/* GitHub Link */}
        <motion.a
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          href="https://github.com/Matthew-Garcia/alu-64bit-vhdl"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-3 bg-black text-white rounded hover:bg-gray-800"
        >
          View on GitHub →
        </motion.a>
      </main>

      <Footer isDarkMode={isDarkMode} />
    </>
  );
}

