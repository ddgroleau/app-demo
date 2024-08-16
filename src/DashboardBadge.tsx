import { ReactNode, useEffect, useState } from "react";
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
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value < metric) {
      const increment = Math.ceil(metric / 10);
      const timer = setTimeout(() => {
        setValue((prevValue) => Math.min(prevValue + increment, metric));
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [value, metric]);

  return (
    <div
      className={`shadow-md md:shadow-lg border-l-4 ${border} bg-white rounded-md p-4 md:p-6 ring-1 ring-gray-200 gap-4 flex flex-col md:flex-row md:items-center justify-between w-[8rem] md:w-[20rem]`}
    >
      <div className="flex flex-col justify-center">
        <span className={`${text} uppercase text-sm font-bold tracking-tight`}>
          {title}
        </span>
        <span className="text-gray-600 text-xl font-semibold">
          {symbol === "$" ? "$" : ""}
          {value.toLocaleString()}
          {symbol === "%" ? "%" : ""}
        </span>
      </div>
      {showProgress && (
        <Progress
          value={value}
          className="h-3 md:-mb-3 ring-1 ring-gray-200 w-24 md:w-48 [&>div]:bg-info"
        />
      )}
      {icon}
    </div>
  );
}
