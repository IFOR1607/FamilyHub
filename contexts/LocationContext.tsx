"use client";

import { createContext, useContext, useState } from "react";
import { familyMembers } from "@/lib/dummy/family";

const LocationContext = createContext<any>(null);

export function LocationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedMember, setSelectedMember] = useState(familyMembers[0]);

  return (
    <LocationContext.Provider
      value={{
        selectedMember,
        setSelectedMember,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  return useContext(LocationContext);
}