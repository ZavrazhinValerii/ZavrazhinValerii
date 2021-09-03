import { useSelector } from "react-redux";
import CounterHOC, { Counter } from "../../Components/Counter/Counter";
import { userNameSelector } from "../../Store/Profile/selectors";

export const Chats = () => {
  const userName = useSelector(
    userNameSelector,
    (prev, next) => prev.chatList.length === next.chatList.length
  );

  return (
    <>
      <Counter qwerty />
      <CounterHOC />
      {userName}
    </>
  );
};