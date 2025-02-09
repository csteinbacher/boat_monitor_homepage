import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid var(--color-outline);

  > h1 {
    text-align: center;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 16px;
  width: auto;
  max-width: 1000px;
  margin: 0 auto;
`;
