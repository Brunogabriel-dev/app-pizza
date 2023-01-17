import React, {useState, createContext, ReactNode } from "react";


type AuthContextData = {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
}

type UserProps = {
  id: string;
  name: string;
  email: string;
  token: string
}


type AuthProviderProps = {
  children: ReactNode
}

type SignInProps = {
  email: string;
  password: string;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({children}: AuthProviderProps){
  const [user, seUser] = useState<UserProps>({
    id: '',
    name: '',
    email: '',
    token: ''
  })

  const isAuthenticated = !!user.name;


  async function signIn({ email, password }: SignInProps){
    console.log(email)
    console.log(password)

  }


  return(
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider> 
  )
}