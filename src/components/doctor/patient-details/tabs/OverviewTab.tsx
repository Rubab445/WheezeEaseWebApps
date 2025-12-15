import { RiskTrendChart } from './overview/RiskTrendChart';
import { RecentSymptomLogs } from './overview/RecentSymptomLogs';
import { PatientInformation } from './overview/PatientInformation';
import { CurrentMedications } from './overview/CurrentMedications';
import { KnownTriggers } from './overview/KnownTriggers';
import { TodaysEnvironment } from './overview/TodaysEnvironment';

export function OverviewTab() {
  return (
    <div className="grid grid-cols-5 gap-6">
      {/* LEFT COLUMN (60% - 3 cols) */}
      <div className="col-span-3 space-y-6">
        <RiskTrendChart />
        <RecentSymptomLogs />
      </div>

      {/* RIGHT COLUMN (40% - 2 cols) */}
      <div className="col-span-2 space-y-6">
        <PatientInformation />
        <CurrentMedications />
        <KnownTriggers />
        <TodaysEnvironment />
      </div>
    </div>
  );
}
