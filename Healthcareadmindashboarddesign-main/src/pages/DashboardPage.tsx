import { TopBar } from '../components/TopBar';
import { KPICards } from '../components/KPICards';
import { ChartsRow } from '../components/ChartsRow';
import { SecondaryRow } from '../components/SecondaryRow';
import { AlertsTable } from '../components/AlertsTable';

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
