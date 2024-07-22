import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { randomMessageGenerator, randomNameGenerator } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //API POLLING
      dispatch(
        addMessage({
          name: randomNameGenerator(),
          message: randomMessageGenerator(25) + "🚀",
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, [dispatch]);

  return (
    <>
      <h1 className="ml-2 w-full border-2 border-black m-0 bg-white rounded-t-lg p-2 shadow-2xl">
        Top Chat👇
      </h1>
      <div className="w-full h-[500px] ml-2 border-2 border-black bg-slate-100 overflow-y-scroll flex flex-col-reverse">
        {/* <ChatMessage name="Atul Chauhan" message="Hello my dear Friends" /> */}
        {chatMessages.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className=" flex w-full p-2 ml-2 rounded-b-lg border-2  border-black"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("ON SUBMIT CHANGE IT", liveMessage);
          dispatch(
            addMessage({
              name: "Atul Chauhan",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-96 border-2 border-blue-800 rounded-md px-2"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          placeholder="Send Message"
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
