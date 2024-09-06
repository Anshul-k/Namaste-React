import { useState, useEffect, useRef } from "react";

const Description = ({ foodItem }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current.scrollHeight > contentRef.current.clientHeight) {
      setIsTruncated(true);
    }
  }, [foodItem]);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="text-gray-700 font-sans flex flex-wrap items-end w">
      <div
        ref={contentRef}
        style={{
          wordBreak: "break-all",
          width: "fit-content",
          maxHeight: isExpanded ? "none" : "3rem",
          overflow: "hidden",
        }}
        className={isExpanded ? "" : "truncated"}
      >
        {foodItem}
      </div>
      {isTruncated && !isExpanded && (
        <div
          className="border-0 bg-none cursor-pointer text-gray-700 font-bold leading-4"
          onClick={toggleContent}
        >
          more
        </div>
      )}
    </div>
  );
};

export default Description;
