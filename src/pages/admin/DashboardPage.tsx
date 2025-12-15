import { TopBar } from "../../components/admin/TopBar";
import { KPICards } from "../../components/admin/KPICards";
import { ChartsRow } from "../../components/admin/ChartsRow";
import { SecondaryRow } from "../../components/admin/SecondaryRow";
import { AlertsTable } from "../../components/admin/AlertsTable";

export function DashboardPage() {
  return (
    <div className="p-8">
      <TopBar />

      <div className="mt-8 space-y-6">
        <KPICards />
        <ChartsRow />
        <SecondaryRow />
        <AlertsTable />
      </div>
    </div>
  );
}
