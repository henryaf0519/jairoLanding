
import type { ReactNode } from 'react';
interface AnimatedGradientButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}
const AnimatedGradientButton: React.FC<AnimatedGradientButtonProps> = ({ children, onClick, className = '' }) => {
  return (
        <button
      onClick={onClick}
      style={{
            boxShadow: `0 6px 20px rgba(255, 0, 0, 0.5)`,
      }}
      className={`
        z-20 px-8 py-4 rounded-full font-bold text-white text-lg tracking-wider
        bg-gradient-to-r from-red-800 via-[#ff0000] to-red-600
        bg-[length:200%_auto]
        hover:bg-[right_center] 
        transition-all duration-500 ease-out
        shadow-lg hover:shadow-2xl hover:shadow-[#ff0000]/50
        transform hover:-translate-y-1
        focus:outline-none focus:ring-4 focus:ring-[#ff0000] focus:ring-opacity-75
        ${className}
      `}
    >
      {children}
    </button>
  );
  
}
export default AnimatedGradientButton;

