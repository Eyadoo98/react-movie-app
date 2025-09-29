import React from "react";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Link to="/" className="back-button text-white my-10">
        ← Back to Movies
      </Link>
      <div className="about-page max-w-4xl mx-auto p-6 bg-gray-800 text-white rounded-2xl shadow-lg">


        {/* Title */}
        <h1 className="text-3xl font-bold mb-4 text-yellow-400">
          About MovieApp
        </h1>

        {/* Description */}
        <p className="text-lg mb-4">
          <span className="font-semibold">MovieApp</span> is a modern web
          application that allows users to discover movies, explore details such as
          genres, ratings, trailers, and more — all powered by{" "}
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 underline hover:text-blue-300"
          >
            The Movie Database (TMDB) API
          </a>
          .
        </p>

        {/* How it was created */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">How this app was built</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>
            Built using <span className="font-semibold">React.js</span> for a fast
            and dynamic user interface.
          </li>
          <li>
            Styled with <span className="font-semibold">TailwindCSS</span> for a
            clean and responsive design.
          </li>
          <li>
            Data is fetched from the{" "}
            <span className="font-semibold">TMDB API</span> to provide live movie
            information.
          </li>
          <li>
            React Router is used for seamless navigation across pages.
          </li>
        </ul>

        {/* Author / Developer */}
        <div className="mt-8 p-4 bg-gray-700 rounded-lg">
          <h3 className="text-xl font-semibold mb-2 text-yellow-300">
            About the Developer
          </h3>
          <p>
            Created by{" "}
            <span className="font-semibold">Eyad Jafar</span>, a passionate{" "}
            <span className="italic">Software Developer</span> who loves building
            clean, efficient, and user-friendly web applications.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
