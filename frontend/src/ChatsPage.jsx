
import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style= {{ height: '100vh'}}>
        <PrettyChatWindow
          projectId='97004b8c-0424-4e3e-a3ca-42a9b0f517dc'
          username={props.user.username}
          secret= {props.user.secret}
          style={{ height: '100%'}}
          />
    </div>
  );
};

export default ChatsPage;