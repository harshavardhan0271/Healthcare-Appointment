import { createContext, useContext, useState } from "react";

export const DoctorContext = createContext<any>(null);

export const useDoctor = () => useContext(DoctorContext);

export const DoctorProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  return (
    <DoctorContext.Provider value={{ selectedDoctor, setSelectedDoctor }}>
      {children}
    </DoctorContext.Provider>
  );
};
