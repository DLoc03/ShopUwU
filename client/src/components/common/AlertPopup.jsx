import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function AlertPopup({
  type = "info", // success | error | warning | info
  message = "",
  onClose,
  className = "",
  duration = 2000, // ms
}) {
  const [progress, setProgress] = useState(100);

  const typeStyles = {
    success: "bg-white text-primary border-primary",
    error: "bg-red-100 text-red-700 border-red-400",
    warning: "bg-yellow-100 text-yellow-700 border-yellow-400",
    info: "bg-blue-100 text-blue-700 border-blue-400",
  };

  useEffect(() => {
    const interval = 50;
    const step = 100 / (duration / interval);
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          setTimeout(() => {
            onClose?.();
          }, 0);
          return 0;
        }
        return prev - step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [duration, onClose]);

  return (
    <div
      className={`animate-fadeIn fixed bottom-4 left-4 z-50 flex w-80 flex-col rounded-lg border shadow-lg ${typeStyles[type]} ${className}`}
    >
      <div className="flex items-center justify-between px-4 py-2 text-sm font-medium">
        <span>{message}</span>
        {onClose && (
          <button onClick={onClose} className="ml-2">
            <X size={16} />
          </button>
        )}
      </div>
      <div className="h-1 w-full overflow-hidden rounded-b-lg bg-black/10">
        <div
          className="h-full bg-current transition-all duration-75"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
