import React from "react";

const Modal: React.FC<{ children: React.ReactNode; onClose: () => void }> = ({
  children,
  onClose,
}) => {
  return (
    <div className="fixed insert-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow relative">{children}</div>

      <button
        className="absolute top-2 right-2 text-gray-500"
        onClick={onClose}
      >
        X
      </button>
    </div>
  );
};

export default Modal;
