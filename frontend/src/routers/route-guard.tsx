import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const RouteGuard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLogin = true;

    if (!isLogin) {
      navigate('/login');
    }
  }, [navigate]);

  return <Outlet />;
};

export default RouteGuard;
