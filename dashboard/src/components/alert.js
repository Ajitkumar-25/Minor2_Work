import React from "react";
import Tabs from "./tabs";
import { Link } from "react-router-dom";
import { useState } from "react";

function Alert() {
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(id, message);
    // axios
    //   .post("http://localhost:5001/api_alerts", {
    //     id,
    //     message,
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     if (res.status === 200) {
    //       alert("Alert sent successfully");
    //     } else {
    //       alert("Invalid credentials");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <>
      <Tabs />
      <section
        className="bg-gray-50 dark:bg-gray-900"
        style={{
          backgroundColor: "#D9AFD9",
          backgroundImage: "linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)",
        }}
      >
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="/"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img className="w-8 h-8 mr-2" src="Assets/street.png" alt="" />
            City Care
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Fill in details To send Alerts
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handlesubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Complaint Id
                  </label>
                  <input
                    type="number"
                    name="type"
                    id="type"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter the complaint id "
                    required={true}
                    onChange={(e) => setId(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Message
                  </label>
                  <input
                    type="String "
                    name="message"
                    id="message"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter the Message "
                    required={true}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <Link
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Set Alert
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Alert;