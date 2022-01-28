import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

const useSocket = () => {
  const [socket, setSocket] = useState<Socket<any>>();

  useEffect(() => {
    const s = io("http://localhost:5000");

    setSocket(s);

    return () => {
      s.disconnect();
    };
  }, []);

  return socket;
};

export default useSocket;
