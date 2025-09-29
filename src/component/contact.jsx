import React from "react";

const Contact = () => {
  return (
    <div className="contact-page max-w-3xl mx-auto p-6 bg-gray-800 text-white rounded-2xl shadow-lg">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-yellow-400 text-center">
        Contact Me
      </h1>

      <div className="space-y-6">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/eyad-jafar-796231184/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 bg-gray-700 hover:bg-gray-600 transition rounded-lg p-4"
        >
          <span className="text-3xl">🔗</span>
          <div>
            <p className="font-semibold text-lg">LinkedIn</p>
            <p className="text-gray-300">Eyad Jafar</p>
          </div>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Eyadoo98"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 bg-gray-700 hover:bg-gray-600 transition rounded-lg p-4"
        >
          <span className="text-3xl">🐱</span>
          <div>
            <p className="font-semibold text-lg">GitHub</p>
            <p className="text-gray-300">Eyadoo98</p>
          </div>
        </a>

        {/* Phone */}
        <div className="flex items-center gap-4 bg-gray-700 rounded-lg p-4">
          <span className="text-2xl">📞</span>
          <div>
            <p className="font-semibold text-lg">Phone</p>
            <p className="text-gray-300">+962 780 177 297</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-center gap-4 bg-gray-700 rounded-lg p-4">
          <span className="text-2xl">📍</span>
          <div>
            <p className="font-semibold text-lg">Address</p>
            <p className="text-gray-300">Amman, Jordan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
