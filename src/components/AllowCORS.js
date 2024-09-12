import React from "react";
import { Link } from "react-router-dom";

const AllowCORS = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[80vh] p-4">
      <h1 className="text-3xl font-bold text-gray-600 mb-4">
        In order to see the Application you need to Allow CORS.
      </h1>
      <p className="text-lg text-orange-400">
        Please follow the below steps in order to View the Application:
      </p>
      <ul className="flex flex-col flex-wrap md:w-1/3 list-disc text-gray-600 text-lg font-medium p-6">
        <li>
          Open this{" "}
          <Link
            className="link text-orange-400 font-semibold"
            target="blank"
            to="https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en"
          >
            link.
          </Link>
        </li>
        <li>Click on the "Add to Chrome" button to install the extension.</li>
        <li>
          After installation, click the extension icon in the top-right corner
          of your Chrome browser (next to the address bar).
        </li>
        <li>Toggle the extension to turn it on.</li>
        <li>Click on the Retry button after completing all the steps.</li>
      </ul>
      <button
        onClick={() => window.location.reload()}
        className="px-4 py-2 bg-orange-400 text-white rounded-md shadow hover:bg-orange-600 focus:outline-none"
      >
        Retry
      </button>
    </div>
  );
};

export default AllowCORS;
