import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 500;
  border-radius: var(--border-radius-standard);
  border: 1px solid var(--color-outline);
  transition: background 150ms ease-in-out;

  &:hover {
    background: var(--color-outline);
  }
`;
