import Chat from "../../components/chat";

interface ChatIdProps {
    id: string,
    messages: { role: string; content: string; }[],
    sqlthroughai: string;
  }
  
  const ChatId: React.FC<ChatIdProps> = ({ id, messages, sqlthroughai }) => {
    let sqlthroughaiActive = false

    if (sqlthroughai === "new") {
      sqlthroughaiActive = true
    }

    return (
        <Chat messages={messages} sqlthroughai={sqlthroughaiActive}></Chat>
    );
  };
  
  export default ChatId;