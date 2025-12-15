import { EnvironmentOverview } from './EnvironmentOverview';
import { AIEngineStatus } from './AIEngineStatus';

export function SecondaryRow() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <EnvironmentOverview />
      <AIEngineStatus />
    </div>
  );
}
