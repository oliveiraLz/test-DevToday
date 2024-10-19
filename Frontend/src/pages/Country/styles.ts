import styled from 'styled-components';

export const ContainerCountry = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  flex: 1;
`;

export const ContainerReturn = styled.div`
  display: flex;
  align-items: center;
`;

export const Flag = styled.figure`
  width: 80px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ContainerBorders = styled.div``;

export const ContainerChart = styled.div`
  margin-top: 7rem;
  padding: 0 20px;
`;
