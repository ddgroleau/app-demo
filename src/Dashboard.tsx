import {
  Calendar,
  ClipboardList,
  DollarSign,
  Download,
  MessageCircleWarning,
} from "lucide-react";
import { Button } from "./components/ui/button";
import DashboardBadge from "./DashboardBadge";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "./components/ui/chart";
import {
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  XAxis,
  YAxis,
} from "recharts";
import DashboardChart from "./DashboardChart";
import { useEffect, useState } from "react";
import DashboardProgress from "./DashboardProgress";
import DashboardAnnouncement from "./DashboardAnnouncement";

const chartData = [
  { month: "January", online: 2400, inStore: 0 },
  { month: "February", online: 3650, inStore: 150 },
  { month: "March", online: 9748, inStore: 1200 },
  { month: "April", online: 13740, inStore: 5640 },
  { month: "May", online: 16800, inStore: 9000 },
  { month: "June", online: 22000, inStore: 16000 },
  { month: "July", online: 25000, inStore: 18000 },
  { month: "August", online: 29000, inStore: 19000 },
  { month: "September", online: 34000, inStore: 22000 },
  { month: "October", online: 38000, inStore: 27000 },
  { month: "November", online: 45000, inStore: 31000 },
  { month: "December", online: 50000, inStore: 36000 },
];

const chartConfig = {
  online: {
    label: "Online",
    color: "#1cc88a",
  },
  inStore: {
    label: "In-Store",
    color: "#36b9cc",
  },
} satisfies ChartConfig;

const pieChartData = [
  { name: "Direct", value: 61 },
  { name: "Social Media", value: 22 },
  { name: "Referral", value: 17 },
];

const pieChartColors = ["#4e73df", "#1cc88a", "#36b9cc"];

export default function Dashboard({ onClick }: { onClick: () => void }) {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const screenWidthListener = () => setScreenWidth(window.innerWidth);

    if (window) {
      if (screenWidth === 0) {
        screenWidthListener();
      }
      window.addEventListener("resize", screenWidthListener);
    }

    return () => window.removeEventListener("resize", screenWidthListener);
  }, [screenWidth]);
  return (
    <section className="flex flex-col gap-y-8 lg:gap-y-4 max-w-[min(75vw,1534px)]">
      <div className="flex flex-wrap gap-4 justify-between">
        <h1 className="text-2xl text-gray-600">Dashboard</h1>
        <Button className="flex gap-2" onClick={onClick}>
          <Download width={20} height={20} />
          Generate Report
        </Button>
      </div>
      <div className="flex flex-wrap xl:justify-between gap-4 md:gap-8 mt-2">
        <DashboardBadge
          title="Earnings (Monthly)"
          metric={parseInt(
            (
              chartData.reduce((p, c) => p + c.inStore + c.online, 0) /
              chartData.length
            ).toFixed(0)
          )}
          symbol="$"
          icon={<Calendar className="text-gray-300" height={36} width={36} />}
        />
        <DashboardBadge
          variant="success"
          title="Earnings (Annual)"
          metric={parseInt(
            chartData.reduce((p, c) => p + c.inStore + c.online, 0).toFixed(0)
          )}
          symbol="$"
          icon={<DollarSign className="text-gray-300" height={36} width={36} />}
        />
        <DashboardBadge
          variant="info"
          title="Tasks"
          metric={50}
          symbol="%"
          showProgress
          icon={
            <ClipboardList className="text-gray-300" height={36} width={36} />
          }
        />
        <DashboardBadge
          variant="warning"
          title="Pending Requests"
          metric={18}
          icon={
            <MessageCircleWarning
              className="text-gray-300"
              height={36}
              width={36}
            />
          }
        />
      </div>
      <div className="mt-4 flex gap-8 flex-wrap xl:flex-nowrap">
        <div className="flex-grow">
          <DashboardChart chartTitle="Earnings Overview">
            <ChartContainer
              config={chartConfig}
              className="min-h-64 sm:min-h-72 max-w-full flex items-center"
            >
              <LineChart data={chartData.slice(screenWidth > 1200 ? 0 : 6)}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <YAxis
                  dataKey={"inStore"}
                  domain={[0, 55000]}
                  tickFormatter={(v) => "$" + v.toLocaleString()}
                  tickLine={false}
                  axisLine={false}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Line dataKey="online" fill="var(--color-online)" />
                <Line dataKey="inStore" fill="var(--color-inStore)" />
              </LineChart>
            </ChartContainer>
          </DashboardChart>
        </div>
        <div className="flex-grow-0">
          <DashboardChart chartTitle="Revenue Sources">
            <ChartContainer
              config={chartConfig}
              className="min-h-64 sm:min-h-72 max-w-full flex items-center"
            >
              <PieChart className="flex min-h-fit">
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  outerRadius={screenWidth > 640 ? 100 : 65}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {pieChartData.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={pieChartColors[index % pieChartColors.length]}
                    />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
              </PieChart>
            </ChartContainer>
          </DashboardChart>
        </div>
      </div>
      <div className="mt-4 flex gap-8 flex-wrap xl:flex-nowrap min-w-fit w-full">
        <DashboardChart chartTitle="Projects">
          <div className="flex flex-col gap-4 pb-4 w-full">
            <DashboardProgress
              title="Payroll Setup"
              percentage={75}
              bgClass="bg-info"
            />
            <DashboardProgress
              title="Client Portal"
              percentage={92}
              bgClass="bg-warning"
            />
            <DashboardProgress
              title="Sales Analysis"
              percentage={87}
              bgClass="bg-primary"
            />
            <DashboardProgress
              title="Contractor Licenses"
              percentage={82}
              bgClass="bg-success"
            />
            <DashboardProgress
              title="Legal Review"
              percentage={71}
              bgClass="bg-danger"
            />
          </div>
        </DashboardChart>
        <DashboardChart chartTitle="Announcements">
          <div className="flex flex-col gap-10 pb-8 px-2">
            <DashboardAnnouncement
              title={`Conference ${new Date().getFullYear()} is Live!`}
              date="September 1st, 2024"
              onClick={onClick}
            />
            <DashboardAnnouncement
              title={"Renovations Starting in Building Five"}
              date="August 15th, 2024"
              onClick={onClick}
            />
            <DashboardAnnouncement
              title={"Mid-Year Performance Reviews Due"}
              date="July 30th, 2024"
              onClick={onClick}
            />
          </div>
        </DashboardChart>
      </div>
      <footer className="w-full text-center text-black opacity-40 pt-16">
        <span>&copy; {new Date().getFullYear()} Your Company</span>
      </footer>
    </section>
  );
}
