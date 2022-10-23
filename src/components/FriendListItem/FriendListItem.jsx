import PropTypes from 'prop-types';
import { Friend, FriendStatus, FriendAvatar, FriendName } from './FriendListItem.styled';


export const FriendListItem = ({ friendInfo: { isOnline, avatar, name } }) => {
  return (
    <Friend>
      <FriendStatus online={isOnline}></FriendStatus>
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </Friend>
  );
};

FriendListItem.propTypes = {
  friendInfo: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
