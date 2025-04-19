import React, { createContext, useContext, useState, ReactNode } from 'react';

type UserSignupData = {
  firstName: string;
  lastName: string;
  nickname?: string;
  email: string;
  password: string;
  phone: string;
  age: number;
  gender: string;
  bday: string;
  bio?: string;
  location?: string;
  pfpurl?: string;
};

type UserSignupContextType = {
  userData: Partial<UserSignupData>;
  updateUserData: (data: Partial<UserSignupData>) => void;
};

const UserSignupContext = createContext<UserSignupContextType | undefined>(undefined);

export const UserSignupProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<Partial<UserSignupData>>({});

  const updateUserData = (data: Partial<UserSignupData>) => {
    setUserData((prev) => ({ ...prev, ...data }));
  };

  return (
    <UserSignupContext.Provider value={{ userData, updateUserData }}>
      {children}
    </UserSignupContext.Provider>
  );
};

export const useUserSignup = () => {
  const context = useContext(UserSignupContext);
  if (!context) {
    throw new Error('useUserSignup must be used within a UserSignupProvider');
  }
  return context;
};
