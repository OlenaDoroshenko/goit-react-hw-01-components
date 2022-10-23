import styled from 'styled-components';

export const StatHeader = styled.h2`
padding: ${p => p.theme.space[3]}px;
width: 477px; 
text-align center;
border: ${p => p.theme.borders.normal};
background: ${p => p.theme.colors.primary};
`;

export const StatList = styled.ul`
  display: flex;
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 65px;
  padding: ${p => p.theme.space[4]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  border: ${p => p.theme.borders.normal};
  background: ${p => p.random && getRandomHexColor()};
`;

export const Label = styled.span`
  margin-bottom: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.m};
`;

export const Percentage = styled.span`
  font-size: ${p => p.theme.fontSizes.l};
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
