import { FC } from "react";
import {
  ChartContainer,
  ChartLoaderContainer,
  StyledResponsiveContainer,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Card from "@/components/Card";
import BoatChartTooltip from "./BoatChartTooltip";

export type ChartData = {
  date: Date;
  value: number;
};

type BoatChartProps = {
  title: string;
  data: ChartData[];
  isPending?: boolean;
  isFetching?: boolean;
  unitPostfix?: string;
  dateFormatter?: (value: Date) => string;
};

const LINE_COLOR = "#df0505";
const TICK_STYLE = {
  stroke: "var(--color-text-light)",
  fontSize: "0.8em",
  fontWeight: "300",
};

const BoatChart: FC<BoatChartProps> = ({
  title,
  data,
  isPending,
  isFetching,
  unitPostfix,
  dateFormatter,
}) => {
  return (
    <Card title={title}>
      <ChartContainer>
        {isPending || isFetching ? (
          <ChartLoaderContainer>
            <FontAwesomeIcon icon={faArrowsRotate} spin />
          </ChartLoaderContainer>
        ) : null}
        {!isPending ? (
          <StyledResponsiveContainer
            width="100%"
            height="100%"
            $isFetching={isFetching}
          >
            <LineChart data={data}>
              <Line
                dataKey="value"
                stroke={LINE_COLOR}
                dot={{ stroke: LINE_COLOR, fill: LINE_COLOR }}
              />
              <CartesianGrid
                stroke="var(--color-outline)"
                vertical={false}
                strokeDasharray="3 3"
              />
              <XAxis
                dataKey="date"
                tickFormatter={dateFormatter}
                tick={TICK_STYLE}
                dy={5}
              />
              <YAxis
                unit={unitPostfix}
                type="number"
                tickFormatter={(value) => value.toFixed(1)}
                tick={TICK_STYLE}
                domain={["dataMin", "auto"]}
                dx={-5}
              />
              <Tooltip
                content={(props) => (
                  <BoatChartTooltip {...props} unitPostfix={unitPostfix} />
                )}
              />
            </LineChart>
          </StyledResponsiveContainer>
        ) : null}
      </ChartContainer>
    </Card>
  );
};

export default BoatChart;
