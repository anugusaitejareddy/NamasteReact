import React from "react";

function useOnlineStatus() {
  const [onlineStatus, setOnlineStatus] = React.useState(true);

  React.useEffect(() => {
    function handleUserOnline() {
      setOnlineStatus(true);
    }

    function handleUserOffline() {
      setOnlineStatus(false);
    }

    window.addEventListener("online", handleUserOnline);
    window.addEventListener("offline", handleUserOffline);

    return () => {
      window.removeEventListener("online", handleUserOnline);
      window.removeEventListener("offline", handleUserOffline);
    };
  }, []);

  return onlineStatus;
}

export default useOnlineStatus;
