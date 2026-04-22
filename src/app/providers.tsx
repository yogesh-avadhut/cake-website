"use client";

import { PrimeReactProvider } from "primereact/api";
import { ReactNode } from "react";

type ProvidersProps = {
  children: ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <PrimeReactProvider value={{ ripple: true, inputStyle: "filled" }}>
      {children}
    </PrimeReactProvider>
  );
}
