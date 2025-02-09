import { ResponsiveContainer } from "recharts";
import styled from "styled-components";

export const TooltipContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6px 12px;
  background-color: var(--color-background);
  border: 1px solid var(--color-outline);
  border-radius: var(--border-radius-standard);
`;

export const ChartContainer = styled.div`
  position: relative;
  height: 300px;
`;

export const ChartLoaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  > svg {
    font-size: 2em;
  }
`;

export const StyledResponsiveContainer = styled(ResponsiveContainer)<{
  $isFetching?: boolean;
}>`
  opacity: 1;
  transition: opacity 150ms ease-in-out;

  ${({ $isFetching }) =>
    $isFetching &&
    `
    opacity: 0.5;
  `}
`;
