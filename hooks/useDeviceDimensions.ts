import { useState, useEffect } from "react";

interface DeviceDimensions {
  screenWidth: number;
  screenHeight: number;
  aspectRatio: number;
  isMobile: boolean;
}

const useDeviceDimensions = (): DeviceDimensions => {
  const [dimensions, setDimensions] = useState<DeviceDimensions>({
    screenWidth: 0,
    screenHeight: 0,
    aspectRatio: 1,
    isMobile: false,
  });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        aspectRatio:
          window.innerHeight == 0 ? 1 : window.innerWidth / window.innerHeight,
        isMobile: window.innerWidth < 768,
      });
    };

    // Initial call to set dimensions
    updateDimensions();

    // Event listener to update dimensions on resize
    window.addEventListener("resize", updateDimensions);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return dimensions;
};

export default useDeviceDimensions;
