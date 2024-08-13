import { ReactNode } from "react";
import { Progress } from "./components/ui/progress";

export default function DashboardBadge({
  icon,
  title,
  metric,
  symbol,
  variant = "primary",
  showProgress = false,
}: {
  icon: ReactNode;
  title: string;
  metric: number;
  symbol?: "$" | "%";
  variant?: "primary" | "info" | "success" | "warning";
  showProgress?: boolean;
}) {
  const border = "border-" + variant;
  const text = "text-" + variant;
  return (
    <div
      className={`shadow-md md:shadow-lg border-l-4 ${border} rounded-md p-4 md:p-6 ring-1 ring-gray-200 gap-4 flex flex-col md:flex-row md:items-center justify-between w-[8rem] md:w-[20rem]`}
    >
      <span className="hidden border-success border-info border-warning border-primary text-success text-info text-warning text-primary"></span>
      <div className="flex flex-col justify-center">
        <span className={`${text} uppercase text-sm font-bold tracking-tight`}>
          {title}
        </span>
        <span className="text-gray-600 text-xl font-semibold">
          {symbol === "$" ? "$" : ""}
          {metric.toLocaleString()}
          {symbol === "%" ? "%" : ""}
        </span>
      </div>
      {showProgress && (
        <Progress
          value={metric}
          className="h-3 md:-mb-3 ring-1 ring-gray-200 w-24 md:w-48 [&>div]:bg-info"
        />
      )}
      {icon}
    </div>
  );
}
