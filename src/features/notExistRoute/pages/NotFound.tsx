import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-location';

export type NotFoundProps = {
  redirectSec: number;
  to: string;
  pageTitle: string;
  replace?: boolean;
};
export const NotFound: React.VFC<NotFoundProps> = ({
  redirectSec,
  to,
  pageTitle,
  replace = false,
}) => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(redirectSec);

  useEffect(() => {
    const timer = setInterval(() => {
      if (countdown < 0) {
        return;
      }
      setCountdown((v) => v - 1);
      if (countdown === 1) {
        navigate({ to, replace });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [countdown, navigate, replace, to]);

  return (
    <div>
      <h1>404 NotFound!</h1>
      <p>
        {countdown}秒後に{pageTitle}へ移動します。
      </p>
    </div>
  );
};
