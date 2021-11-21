import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getCurrentUser } from '@/apis/auth';
import { setAuthenticated, setCurrentUser } from '@/store/slices/authSlice';
import { getToken } from '@/helpers/local-storage';
import { goURL } from '@/helpers/router';

const Auth = ({ children }) => {
  const [renderRoute, setRenderRoute] = useState(false);
  const dispatch = useDispatch();

  const fetchCurrentUser = useCallback(async () => {
    try {
      const response = await getCurrentUser();
      if (response && response.data) {
        dispatch(setAuthenticated(true));
        dispatch(setCurrentUser(response.data));
      }
    } catch (error) {
      goURL('/login');
    }
    setRenderRoute(true);
  }, [dispatch]);

  useEffect(() => {
    if (!getToken()) {
      goURL('/login');
      setRenderRoute(true);
    } else {
      fetchCurrentUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return renderRoute ? children : null;
};

export default Auth;
