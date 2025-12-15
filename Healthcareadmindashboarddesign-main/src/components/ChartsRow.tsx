import { RiskMeter } from './RiskMeter';
import { RiskTrend } from './RiskTrend';

export function ChartsRow() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <RiskMeter />
      <RiskTrend />
    </div>
  );
}
