import { createContext, useContext } from "react";

export const authcontext = createContext();

export function useAuthContext() {
  return useContext(authcontext);
}
