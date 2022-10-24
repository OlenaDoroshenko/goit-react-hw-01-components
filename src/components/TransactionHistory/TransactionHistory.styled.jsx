import styled from 'styled-components';

export const Table = styled.table`
  font-weight: ${p => p.theme.fontWeights.normal};

  text-align: center;
`;

export const TableHeading = styled.th`
  padding-left: ${p => p.theme.space[6]}px;
  padding-right: ${p => p.theme.space[6]}px;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;

  border: ${p => p.theme.borders.normal};
  background-color: ${p => p.theme.colors.accent};
`;

export const TableCells = styled.td`
  padding: ${p => p.theme.space[3]}px;
  border: ${p => p.theme.borders.normal};
`;
