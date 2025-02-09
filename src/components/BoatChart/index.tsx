import { FC } from "react";
import Card from "@/components/Card";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import BoatChartTooltip from "./BoatChartTooltip";

export type ChartData = {
  date: Date;
  value: number;
};

type BoatChartProps = {
  title: string;
  height: number;
  data: ChartData[];
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
  height,
  data,
  unitPostfix,
  dateFormatter,
}) => {
  return (
    <Card title={title}>
      <ResponsiveContainer width="100%" height={height}>
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
      </ResponsiveContainer>
    </Card>
  );
};

export default BoatChart;
