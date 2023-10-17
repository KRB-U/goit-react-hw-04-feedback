import { PMessageError } from './Notification.styled';

const Notification = ({ message }) => {
  return <PMessageError>{message}</PMessageError>;
};

export { Notification };
