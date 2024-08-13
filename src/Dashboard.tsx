import {
  Calendar,
  ClipboardList,
  DollarSign,
  Download,
  MessageCircleWarning,
} from "lucide-react";
import { Button } from "./components/ui/button";
import DashboardBadge from "./DashboardBadge";

export default function Dashboard() {
  return (
    <section className="flex flex-col gap-y-8 lg:gap-y-4">
      <div className="flex flex-wrap gap-4 justify-between">
        <h1 className="text-2xl text-gray-600">Dashboard</h1>
        <Button className="flex gap-2">
          <Download width={20} height={20} />
          Generate Report
        </Button>
      </div>
      <div className="flex flex-wrap gap-4 md:gap-8">
        <DashboardBadge
          title="Earnings (Monthly)"
          metric={40000}
          symbol="$"
          icon={<Calendar className="text-gray-300" height={36} width={36} />}
        />
        <DashboardBadge
          variant="success"
          title="Earnings (Annual)"
          metric={215000}
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
    </section>
  );
}
