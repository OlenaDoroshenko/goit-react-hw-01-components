import styled from 'styled-components';

export const UserCard = styled.div`
  width: 400px;
  margin-bottom: ${p => p.theme.space[5]}px;
  text-align: center;
  background: ${p => p.theme.colors.primary};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(213, 84, 72, 1) 0px -2px 6px 0px inset;
`;

export const UserAvatar = styled.img`
  border-radius: 50%;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const UserName = styled.p`
  margin-bottom: ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.mm};
`;

export const UserTag = styled.p`
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const UserStats = styled.ul`
  display: flex;
`;

export const UserStat = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px;
  border: ${p => p.theme.borders.secondary};
`;

export const StatLabel = styled.span`
  margin-bottom: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.secondary};
`;

export const StatQuantity = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.mm};
`;
