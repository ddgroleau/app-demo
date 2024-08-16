import { Card, CardHeader, CardTitle, CardContent } from "./components/ui/card";
import { ReactNode } from "react";

type DashboardChartProps = {
  chartTitle: string;
  children: ReactNode;
};

export default function DashboardChart({
  chartTitle,
  children,
}: DashboardChartProps) {
  return (
    <Card
      title="Revenue Summary by Month"
      className="max-w-[70vw] sm:max-w-fit w-full shadow-lg h-fit"
    >
      <CardHeader className="border-b rounded-t-lg px-3 sm:px-4 mb-4 sm:mb-8 py-2 bg-primary">
        <CardTitle className="text-sm font-bold tracking-tight uppercase text-white">
          {chartTitle}
        </CardTitle>
      </CardHeader>
      <CardContent className="pr-2 pl-0 sm:pl-4 sm:pr-6">
        {children}
      </CardContent>
    </Card>
  );
}
