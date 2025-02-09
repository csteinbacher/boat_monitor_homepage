import styled from "styled-components";
import Button from "@/components/UI/Button";

export const BoatMonitorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const ChartsHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ChartsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const ChartsFooterContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledButton = styled(Button)`
  gap: 8px;
`;
