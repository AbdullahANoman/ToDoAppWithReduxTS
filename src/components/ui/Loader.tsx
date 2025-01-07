import React from "react";

interface LoaderProps {
  size?: number; // Size of the loader
  color?: string; // Color of the loader
}

const Loader: React.FC<LoaderProps> = ({ size = 40, color = "#007bff" }) => {
  const loaderStyle: React.CSSProperties = {
    width: size,
    height: size,
    border: `${size / 8}px solid ${color}`,
    borderTop: `${size / 8}px solid transparent`,
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  };

  return (
    <div className="flex items-center justify-center h-[80vh]" >
      <div style={loaderStyle}></div>
    </div>
  );
};

export default Loader;
