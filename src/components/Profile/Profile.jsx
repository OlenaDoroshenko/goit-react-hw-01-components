import PropTypes from 'prop-types';

import {
  UserCard,
  UserStats,
  UserStat,
  StatLabel,
  StatQuantity,
  UserAvatar,
  UserName,
  UserTag,
} from './Profile.styled';
import { Box } from 'components/Box';

export function Profile({ username, tag, location, avatar, stats }) {
  return (
    <UserCard>
      <Box p={4} color="secondary">
        <UserAvatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <p className="location">{location}</p>
      </Box>

      <UserStats>
        <UserStat>
          <StatLabel>Followers</StatLabel>
          <StatQuantity>{stats.followers}</StatQuantity>
        </UserStat>
        <UserStat>
          <StatLabel>Views</StatLabel>
          <StatQuantity>{stats.views}</StatQuantity>
        </UserStat>
        <UserStat>
          <StatLabel>Likes</StatLabel>
          <StatQuantity>{stats.likes}</StatQuantity>
        </UserStat>
      </UserStats>
    </UserCard>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
