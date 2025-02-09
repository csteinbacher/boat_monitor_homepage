import styled, { css } from "styled-components";

export const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownMenu = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  z-index: 100;
  top: 100%;
  right: 0;
  margin-top: 6px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 150px;
  background: var(--color-background);
  border: 1px solid var(--color-outline);
  border-radius: var(--border-radius-standard);
  padding: 8px;
  transition: opacity 150ms ease-in-out;
  opacity: 0;

  ${({ $isOpen }) =>
    $isOpen
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
        `}
`;

export const DropdownItem = styled.div<{
  $selected?: boolean;
}>`
  padding: 8px;
  cursor: pointer;
  border-radius: var(--border-radius-standard);
  transition: background 150ms ease-in-out;

  &:hover {
    background: var(--color-outline);
  }

  ${({ $selected }) =>
    $selected &&
    css`
      background: var(--color-outline);
    `}
`;
