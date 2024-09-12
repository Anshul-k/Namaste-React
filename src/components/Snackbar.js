import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideSnackbar } from "../store/snackbarSlice";

const Snackbar = () => {
  const dispatch = useDispatch();
  const { show, message, type, time } = useSelector((state) => state.snackbar);

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        dispatch(hideSnackbar());
      }, time);
      return () => clearTimeout(timer);
    }
  }, [show, dispatch]);

  return (
    <div
      className={`fixed top-5 z-50 px-4 py-3 rounded-md shadow-sm transition-transform transform ${
        show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      } ${type === "success" ? "bg-green-500" : "bg-red-500"} text-white`}
    >
      <div className="flex items-center">
        {type === "success" ? (
          <svg
            className="w-6 h-6 text-white mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 11l3 3L22 4" />
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 text-white mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M18 6L6 18" />
            <path d="M6 6l12 12" />
          </svg>
        )}
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Snackbar;
