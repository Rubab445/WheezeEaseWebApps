import { useState } from 'react';
import { ChevronDown, Download, CheckCircle, Search, X, Eye, FileCheck, CheckSquare, Trash2, ChevronLeft, ChevronRight, MoreVertical } from 'lucide-react';
import { AlertsKPICards } from '../components/alerts/AlertsKPICards';
import { AlertsCharts } from '../components/alerts/AlertsCharts';
import { AlertsTable } from '../components/alerts/AlertsTable';
import { AlertDetailDrawer } from '../components/alerts/AlertDetailDrawer';

export interface Alert {
  id: string;
  patientName: string;
  patientEmail: string;
  patientAvatar: string;
  type: 'Risk prediction' | 'Missed medication' | 'Environment warning';
  riskPercent: number;
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
  trigger: 'Pollen' | 'AQI' | 'Humidity' | 'Dust' | 'Smoke' | 'Medication';
  createdDate: string;
  createdTime: string;
  status: 'New' | 'Reviewed' | 'Resolved';
}

const mockAlerts: Alert[] = [
  {
    id: 'A1048',
    patientName: 'Ayesha Khan',
    patientEmail: 'ayesha.k@email.com',
    patientAvatar: 'AK',
    type: 'Risk prediction',
    riskPercent: 92,
    severity: 'Critical',
    trigger: 'Pollen',
    createdDate: 'Dec 13, 2025',
    createdTime: '14:30',
    status: 'New'
  },
  {
    id: 'A1047',
    patientName: 'Omar Farooq',
    patientEmail: 'omar.f@email.com',
    patientAvatar: 'OF',
    type: 'Environment warning',
    riskPercent: 84,
    severity: 'High',
    trigger: 'AQI',
    createdDate: 'Dec 13, 2025',
    createdTime: '12:15',
    status: 'New'
  },
  {
    id: 'A1046',
    patientName: 'Sara Malik',
    patientEmail: 'sara.malik@email.com',
    patientAvatar: 'SM',
    type: 'Missed medication',
    riskPercent: 68,
    severity: 'Medium',
    trigger: 'Medication',
    createdDate: 'Dec 13, 2025',
    createdTime: '09:45',
    status: 'Reviewed'
  },
  {
    id: 'A1045',
    patientName: 'Yusuf Ahmed',
    patientEmail: 'yusuf.a@email.com',
    patientAvatar: 'YA',
    type: 'Risk prediction',
    riskPercent: 78,
    severity: 'High',
    trigger: 'Dust',
    createdDate: 'Dec 12, 2025',
    createdTime: '18:20',
    status: 'Reviewed'
  },
  {
    id: 'A1044',
    patientName: 'Layla Siddiqui',
    patientEmail: 'layla.s@email.com',
    patientAvatar: 'LS',
    type: 'Environment warning',
    riskPercent: 55,
    severity: 'Medium',
    trigger: 'Humidity',
    createdDate: 'Dec 12, 2025',
    createdTime: '15:30',
    status: 'Resolved'
  },
  {
    id: 'A1043',
    patientName: 'Fatima Hassan',
    patientEmail: 'dr.fatima@hospital.com',
    patientAvatar: 'FH',
    type: 'Risk prediction',
    riskPercent: 45,
    severity: 'Low',
    trigger: 'Smoke',
    createdDate: 'Dec 12, 2025',
    createdTime: '11:00',
    status: 'Resolved'
  },
  {
    id: 'A1042',
    patientName: 'Ahmed Ali',
    patientEmail: 'ahmed.a@email.com',
    patientAvatar: 'AA',
    type: 'Missed medication',
    riskPercent: 72,
    severity: 'High',
    trigger: 'Medication',
    createdDate: 'Dec 11, 2025',
    createdTime: '22:15',
    status: 'Resolved'
  },
  {
    id: 'A1041',
    patientName: 'Zainab Malik',
    patientEmail: 'zainab.m@email.com',
    patientAvatar: 'ZM',
    type: 'Environment warning',
    riskPercent: 88,
    severity: 'High',
    trigger: 'AQI',
    createdDate: 'Dec 11, 2025',
    createdTime: '16:45',
    status: 'Resolved'
  },
];

const statusFilters = ['All', 'New', 'Reviewed', 'Resolved'];
const triggerFilters = ['Pollen', 'AQI', 'Humidity', 'Dust', 'Smoke', 'Medication'];

export function AlertsPage() {
  const [selectedAlerts, setSelectedAlerts] = useState<string[]>([]);
  const [activeStatusFilter, setActiveStatusFilter] = useState('All');
  const [activeTriggers, setActiveTriggers] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedAlert, setSelectedAlert] = useState<Alert | null>(null);

  const hasActiveFilters = activeStatusFilter !== 'All' || activeTriggers.length > 0 || searchQuery !== '';

  const clearFilters = () => {
    setActiveStatusFilter('All');
    setActiveTriggers([]);
    setSearchQuery('');
  };

  const toggleTrigger = (trigger: string) => {
    setActiveTriggers(prev =>
      prev.includes(trigger) ? prev.filter(t => t !== trigger) : [...prev, trigger]
    );
  };

  const handleViewAlert = (alert: Alert) => {
    setSelectedAlert(alert);
    setDrawerOpen(true);
  };

  const toggleAlert = (id: string) => {
    setSelectedAlerts(prev =>
      prev.includes(id) ? prev.filter(alertId => alertId !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    setSelectedAlerts(prev =>
      prev.length === mockAlerts.length ? [] : mockAlerts.map(a => a.id)
    );
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
            <span className="hover:text-purple-400 cursor-pointer transition-colors">Dashboard</span>
            <span>/</span>
            <span className="text-white">Risks & Alerts</span>
          </div>
          <h1 className="text-3xl text-white">Risks & Alerts</h1>
          <p className="text-gray-400 mt-1">Monitor high-risk predictions and system notifications</p>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition-all text-sm">
            <span>Last 30 days</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition-all text-sm">
            <span>All Severity</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 transition-all text-sm">
            <Download className="w-4 h-4" />
            Export
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all text-sm">
            <CheckCircle className="w-4 h-4" />
            Mark all reviewed
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <AlertsKPICards />

      {/* Charts Row */}
      <div className="mt-6">
        <AlertsCharts />
      </div>

      {/* Filter Bar */}
      <div className="mt-6 bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-xl">
        <div className="flex flex-col gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search patient, alert ID, trigger..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#141A2E] border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20"
            />
          </div>

          {/* Status Filters */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400 mr-2">Status:</span>
            {statusFilters.map((status) => (
              <button
                key={status}
                onClick={() => setActiveStatusFilter(status)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  activeStatusFilter === status
                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/50 shadow-lg shadow-purple-500/20'
                    : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          {/* Trigger Filters */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm text-gray-400 mr-2">Triggers:</span>
            {triggerFilters.map((trigger) => (
              <button
                key={trigger}
                onClick={() => toggleTrigger(trigger)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  activeTriggers.includes(trigger)
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-lg shadow-cyan-500/20'
                    : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                {trigger}
              </button>
            ))}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="ml-auto flex items-center gap-2 px-4 py-2 rounded-full text-sm text-red-400 hover:bg-red-500/10 transition-all"
              >
                <X className="w-4 h-4" />
                Clear filters
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Alerts Table */}
      <div className="mt-6">
        <AlertsTable
          alerts={mockAlerts}
          selectedAlerts={selectedAlerts}
          onToggleAlert={toggleAlert}
          onToggleAll={toggleAll}
          onViewAlert={handleViewAlert}
        />
      </div>

      {/* Detail Drawer */}
      <AlertDetailDrawer
        alert={selectedAlert}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </div>
  );
}
