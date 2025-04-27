import { useEffect, useRef, useState } from "react";

const LiquidButton: React.FC<{
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  activeColor?: string;
}> = ({
  children,
  isActive,
  onClick,
  className,
  activeColor = "bg-purple-500",
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [wasActive, setWasActive] = useState(isActive);
  const [currentColor, setCurrentColor] = useState("#D1BAFF");

  const brandColors = ["#D1BAFF", "#C0FAB2", "#FFA988", "#82C3FF", "#F7A7E1"];

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * brandColors.length);
    return brandColors[randomIndex];
  };

  useEffect(() => {
    if (isActive) {
      setWasActive(true);
    } else if (wasActive && !isActive) {
      setWasActive(false);
    }
  }, [isActive, wasActive]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMouseEnter = (e: any) => {
    if (!buttonRef.current || isActive) return;

    const rect = buttonRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const randomColor = getRandomColor();
    setCurrentColor(randomColor);
    setMousePosition({ x, y });
    setIsHovered(true);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMouseLeave = (e: any) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
    setIsHovered(false);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (e: any) => {
    if (onClick) onClick(e);
  };

  return (
    <button
      ref={buttonRef}
      className={`relative overflow-hidden px-6 pb-2 pt-1 rounded-full w-full sm:w-auto border border-black cursor-pointer transition-all duration-300 ${className} ${
        isActive ? activeColor + " text-white" : ""
      }`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={isActive ? {} : { background: "white" }}
    >
      {!isActive && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            overflow: "hidden",
          }}
        >
          <span
            className="absolute rounded-full"
            style={{
              width: "300%",
              height: "500%",
              top: mousePosition.y,
              left: mousePosition.x,
              transform: `translate(-50%, -50%) scale(${isHovered ? 1 : 0})`,
              transition: `transform 0.4s cubic-bezier(${
                isHovered ? "0.25, 0.46, 0.45, 0.94" : "0.55, 0.085, 0.68, 0.53"
              })`,
              borderRadius: "50%",
              backgroundColor: currentColor,
            }}
          />
        </div>
      )}

      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default LiquidButton;
