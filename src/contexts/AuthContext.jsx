// Auth Context
import React, { createContext, useState, useEffect, useContext } from 'react';
import supabase from '../lib/supabase';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check Active User Sessions
    async function fetchData() {
      const session = supabase.auth.session();
      setUser(session?.user ?? null);
      setLoading(false);

      const { data: listener } = supabase.auth.onAuthStateChange(async (event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      });

      return () => {
        listener?.unsubscribe();
      };
    }
    fetchData();
  }, []);

  const value = {
    user, // User Session & State
    signOut: () => supabase.auth.signOut(),
    SignIn: async (email, password) => {
      try {
        const { user, session, error } = await supabase.auth.signIn({
          email: email,
          password: password,
        });

        if (error) {
          throw error;
        }

        // if Success Set User
        setUser(user);
        setSession(session);
        return true;
      } catch (error) {
        // Capture And Handle Errors
        console.log(error);
        throw error;
      }
    },
    SignUp: async (email, password) => {
      try {
        const { user, session, error } = await supabase.auth.signUp({
          email: email,
          password: password,
        });

        if (error) {
          throw error;
        }

        // if Success Set User
        setUser(user);
        setSession(session);
        return true;
      } catch (error) {
        // Capture And Handle Errors
        console.log(error);
        throw error;
      }
    },
  };

  return (
    <AuthContext.Provider value={{ value }}>
      {' '}
      {!loading && children}{' '}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
