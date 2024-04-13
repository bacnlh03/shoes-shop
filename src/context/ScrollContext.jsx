import { createContext, useContext, useRef } from "react";

const ScrollContext = createContext();

export const useScroll = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }) => {
  const scrollRef = useRef(null);

  const scrollToData = () => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ScrollContext.Provider value={{ scrollRef, scrollToData }}>
      {children}
    </ScrollContext.Provider>
  );
}