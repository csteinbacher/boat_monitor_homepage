import { FC } from "react";
import type { TooltipProps } from "recharts";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import { TooltipContainer } from "./styles";

type BoatChartTooltipProps = TooltipProps<ValueType, NameType> & {
  unitPostfix?: string;
};

const BoatChartTooltip: FC<BoatChartTooltipProps> = ({
  active,
  payload,
  label,
  unitPostfix,
}) => {
  if (!active || !payload || !payload.length || !label) {
    return null;
  }
  const value = payload[0].value;

  return (
    <TooltipContainer>
      <p>{label.toLocaleString()}</p>
      <p>
        {value}
        {unitPostfix}
      </p>
    </TooltipContainer>
  );
};

export default BoatChartTooltip;
