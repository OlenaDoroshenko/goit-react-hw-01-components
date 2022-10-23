import styled from 'styled-components';

export const Friend = styled.li`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.normal};
  background-color: ${p => p.theme.colors.primary};

  :hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(213, 84, 72, 1) 0px -2px 6px 0px inset;
  }
`;

export const FriendStatus = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: ${p => (p.online ? 'green' : 'red')};
  border-radius: ${p => p.theme.radii.round};
`;

export const FriendAvatar = styled.img``;
export const FriendName = styled.p``;
