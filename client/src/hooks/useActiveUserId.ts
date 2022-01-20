import { User } from '@auth0/auth0-react';
import { useState, useEffect } from 'react';

const useActiveUserId = (user: User) => {
  const [activeUserId, setActiveUserId] = useState<string | null>(null);

  useEffect(() => {
    if (user !== null && user !== undefined) {
      setActiveUserId(user.sub);
    } else {
      setActiveUserId(null);
    }
  }, [user]);

  return activeUserId;
};

export { useActiveUserId };
