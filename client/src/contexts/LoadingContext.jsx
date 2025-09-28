import React, { createContext, useContext, useState } from "react";
import SpinningLoading from "@/components/common/SpinningLoading";

const LoadingContext = createContext(null);

export function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
      <SpinningLoading show={loading} />
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  return useContext(LoadingContext);
}
