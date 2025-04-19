// contexts/AuthContext.tsx
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getEmailFromCookie } from '../functions/getEmailFromCookie';

// Define the context type
interface AuthContextType {
  isLoggedIn: boolean;
  userMail: string | null;
  setLoginStatus: (status: boolean) => void;
  setUserMail: (mail: string | null) => void;
  logout: () => void;
}

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create a provider component
interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userMail, setUserMail] = useState<string | null>(null);


  useEffect(() => {
    const checkLoginStatus =async () => {
      const useremail =await getEmailFromCookie()  
      if (useremail) {
        setIsLoggedIn(true);
        setUserMail(userMail);
      } else {
        setIsLoggedIn(false);
        setUserMail(null);
      }
    };

    checkLoginStatus();
  }, []);

  // Logout function
  const logout = async() => {
   
    try {
        const response = await fetch('/api/clearCookie', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include', 
        });
  
        if (!response.ok) {
          throw new Error('Logout failed');
        }
  
        // Only clear the state if the API call was successful
        setIsLoggedIn(false);
        setUserMail(null);
      } catch (error) {
        console.error('Logout error:', error);
        
  };
  }
  const value = {
    isLoggedIn,
    userMail,
    setLoginStatus: setIsLoggedIn,
    setUserMail,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook to use the auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
