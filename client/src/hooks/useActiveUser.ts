import { useEffect, useState } from 'react';
import { useAuth0, User as Auth0User } from '@auth0/auth0-react';
import { useRecoilState } from 'recoil';
import { userState } from '../atoms';
import { User } from '../types';

export const useActiveUser = () => {
  const {
    user,
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    logout,
    getAccessTokenSilently,
    getAccessTokenWithPopup,
  } = useAuth0();

  const [activeUser, setActiveUser] = useRecoilState<User | null>(userState);
  const [auth0User, setAuth0User] = useState<Auth0User | null>(null);

  useEffect(() => {
    if (user) {
      setAuth0User(user);
    }
  }, [user]);

  useEffect(() => {
    if (auth0User && activeUser === null) {
      (async () => {
        try {
          let accessToken: string = '';
          if (process.env.NODE_ENV === 'development') {
            accessToken = await getAccessTokenWithPopup({
              audience: 'https://api.moma.dev',
            });
          }
          if (process.env.NODE_ENV === 'production') {
            accessToken = await getAccessTokenSilently({
              audience: 'https://api.moma.dev',
            });
          }
          const response = await fetch('http://localhost:5000/api/v1/me', {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({ auth0Id: user?.sub }),
          });
          const userFromApi = await response.json();
          setActiveUser(userFromApi);
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, [auth0User]);

  return {
    activeUser,
    auth0User,
    isLoading,
    isAuthenticated,
    loginWithRedirect,
    logout,
  };
};
