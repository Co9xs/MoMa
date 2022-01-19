import { User } from '@auth0/auth0-react';
import { useState, useEffect } from 'react';

const useActiveUserId = (user: User) => {
  const [activeUserId, setActiveUserId] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      setActiveUserId(user.sub);
    }
  }, [user]);

  return activeUserId;
};

export { useActiveUserId };
