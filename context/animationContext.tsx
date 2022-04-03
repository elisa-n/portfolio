import { createContext, useState } from 'react';

interface AnimationContextInterface {
  disableAnimations: boolean;
  toggleAnimations: () => void;
}

interface ACtxtProviderIntf {
  children: any;
}

export const AnimationContext = createContext({
  disableAnimations: false,
} as AnimationContextInterface);

export function AnimationCtxtProvider({ children }: ACtxtProviderIntf) {
  const [disableAnimations, setAnimations] = useState(false);

  const toggleAnimations = () => setAnimations(!disableAnimations);

  return (
    <AnimationContext.Provider value={{ disableAnimations, toggleAnimations }}>
      {children}
    </AnimationContext.Provider>
  );
}
