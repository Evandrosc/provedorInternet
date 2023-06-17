import styled from "styled-components"

export const MarginDisplay = styled.div`
  margin: 0 5vw;
`;

export const ContainerContato = styled.div`
  display: flex;
  align-items: center;
`;

export const ContainerContatoImg = styled.div`
  border-radius: 50%;
  position: relative;

  & > svg {
    width: 50%;
    height: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;