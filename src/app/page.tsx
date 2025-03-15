"use client";
import Navbar from "../app/components/Navbar"
/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <div
      style={{ background: "linear-gradient(135deg, #0f172a, #1e293b)" }}
      className="font-sans text-white"
    >
      <Navbar />
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="flex w-full max-w-5xl flex-col-reverse lg:flex-row items-center rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 p-8 shadow-2xl gap-8">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src="/welcome.jpg"
              alt="App Screenshot"
              className="w-full max-w-sm rounded-xl shadow-lg transform transition duration-300 hover:rotate-2 hover:scale-105"
            />
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1
              className="mb-4 text-4xl lg:text-5xl font-extrabold tracking-widest"
              style={{ color: "#18a558" }}
            >
              Tell Me India
            </h1>
            <p className="mb-6 text-lg lg:text-xl text-gray-300">
              Connecting people like never before. Dive into a future where
              information defeats misinformation.
            </p>
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
              <a
                href="/tellmeindia.apk"
                className="inline-block rounded-lg bg-[#18a558] px-8 py-3 text-lg font-semibold text-white shadow-md transition duration-300 hover:scale-110 hover:bg-[#146e3e]"
              >
                Download From PlayStore
              </a>
            </div>
            <p className="mt-4">Made With ❤️ By Team TellMeIndia</p>
          </div>
        </div>
      </div>
    </div>
  );
}
