import { Progress } from "./components/ui/progress";

type DashboardProgressProps = {
  percentage: number;
  title: string;
  bgClass: string;
};

export default function DashboardProgress({
  percentage,
  title,
  bgClass,
}: DashboardProgressProps) {
  return (
    <div className="flex w-full gap-y-1 min-w-full sm:min-w-[30rem] flex-col px-2">
      <div className="flex justify-between">
        <span className="whitespace-pre text-sm">{title}</span>
        <span className="whitespace-pre text-sm text-app-secondary opacity-35 font-bold tracking-tighter">
          {percentage}%
        </span>
      </div>
      <Progress
        title={title}
        value={percentage}
        className={`[&>div]:${bgClass}`}
      />
    </div>
  );
}
