import { useEffect, useRef, useState } from "react";

const App = () => {
  const [socket, setSocket] = useState();
  const inputRef = useRef();

  function sendMessage() {
    //@ts-ignore
    const message = inputRef.current.value;
    console.log(message);

    socket.send(message);
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);

    ws.onmessage = (e) => {
      alert(e.data);
    };
  }, []);
  return (
    <div>
      <input placeholder="message" ref={inputRef}></input>
      <button onClick={sendMessage}>send</button>
    </div>
  );
};

export default App;
