import { useState } from "react";
import { ChevronDown, Download, BarChart3, Search, X } from "lucide-react";
import { SymptomKPICards } from "../../components/admin/symptom-logs/SymptomKPICards";
import { SymptomAnalytics } from "../../components/admin/symptom-logs/SymptomAnalytics";
import { TriggerMedicationCards } from "../../components/admin/symptom-logs/TriggerMedicationCards";
import { SymptomLogsTable } from "../../components/admin/symptom-logs/SymptomLogsTable";
import { LogDetailDrawer } from "../../components/admin/symptom-logs/LogDetailDrawer";

export interface SymptomLog {
  id: string;
  patientName: string;
  patientId: string;
  patientAvatar: string;
  date: string;
  time: string;
  symptoms: string[];
  severity: number;
  triggers: string[];
  medicationTaken: boolean;
  aiRiskScore: number;
}

const mockLogs: SymptomLog[] = [
  {
    id: "LOG-1248",
    patientName: "Ayesha Khan",
    patientId: "P-2054",
    patientAvatar: "AK",
    date: "Dec 13, 2025",
    time: "14:30",
    symptoms: ["Wheezing", "Shortness of breath", "Chest tightness"],
    severity: 8,
    triggers: ["Pollen", "AQI"],
    medicationTaken: true,
    aiRiskScore: 84,
  },
  {
    id: "LOG-1247",
    patientName: "Omar Farooq",
    patientId: "P-1892",
    patientAvatar: "OF",
    date: "Dec 13, 2025",
    time: "11:20",
    symptoms: ["Coughing", "Runny nose"],
    severity: 5,
    triggers: ["Dust"],
    medicationTaken: false,
    aiRiskScore: 52,
  },
  {
    id: "LOG-1246",
    patientName: "Sara Malik",
    patientId: "P-2341",
    patientAvatar: "SM",
    date: "Dec 13, 2025",
    time: "09:15",
    symptoms: ["Wheezing", "Coughing"],
    severity: 6,
    triggers: ["Pollen", "Humidity"],
    medicationTaken: true,
    aiRiskScore: 68,
  },
  {
    id: "LOG-1245",
    patientName: "Yusuf Ahmed",
    patientId: "P-1567",
    patientAvatar: "YA",
    date: "Dec 12, 2025",
    time: "18:45",
    symptoms: ["Shortness of breath", "Chest tightness"],
    severity: 9,
    triggers: ["Smoke", "AQI"],
    medicationTaken: true,
    aiRiskScore: 92,
  },
  {
    id: "LOG-1244",
    patientName: "Layla Siddiqui",
    patientId: "P-2198",
    patientAvatar: "LS",
    date: "Dec 12, 2025",
    time: "15:30",
    symptoms: ["Sneezing", "Itchy eyes"],
    severity: 3,
    triggers: ["Pollen"],
    medicationTaken: false,
    aiRiskScore: 35,
  },
  {
    id: "LOG-1243",
    patientName: "Fatima Hassan",
    patientId: "P-1723",
    patientAvatar: "FH",
    date: "Dec 12, 2025",
    time: "12:00",
    symptoms: ["Coughing", "Chest tightness"],
    severity: 7,
    triggers: ["Dust", "Weather"],
    medicationTaken: true,
    aiRiskScore: 74,
  },
  {
    id: "LOG-1242",
    patientName: "Ahmed Ali",
    patientId: "P-1456",
    patientAvatar: "AA",
    date: "Dec 11, 2025",
    time: "20:15",
    symptoms: ["Wheezing", "Difficulty breathing"],
    severity: 9,
    triggers: ["AQI", "Pollen"],
    medicationTaken: true,
    aiRiskScore: 88,
  },
  {
    id: "LOG-1241",
    patientName: "Zainab Malik",
    patientId: "P-2087",
    patientAvatar: "ZM",
    date: "Dec 11, 2025",
    time: "16:30",
    symptoms: ["Coughing"],
    severity: 4,
    triggers: ["Dust"],
    medicationTaken: false,
    aiRiskScore: 42,
  },
];

const severityFilters = [
  "All",
  "Mild (1-3)",
  "Moderate (4-6)",
  "Severe (7-10)",
];
const medicationFilters = ["All", "Taken", "Missed"];

export function SymptomLogsPage() {
  const [selectedLogs, setSelectedLogs] = useState<string[]>([]);
  const [activeSeverityFilter, setActiveSeverityFilter] = useState("All");
  const [activeMedicationFilter, setActiveMedicationFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedLog, setSelectedLog] = useState<SymptomLog | null>(null);

  const hasActiveFilters =
    activeSeverityFilter !== "All" ||
    activeMedicationFilter !== "All" ||
    searchQuery !== "";

  const clearFilters = () => {
    setActiveSeverityFilter("All");
    setActiveMedicationFilter("All");
    setSearchQuery("");
  };

  const handleViewLog = (log: SymptomLog) => {
    setSelectedLog(log);
    setDrawerOpen(true);
  };

  const toggleLog = (id: string) => {
    setSelectedLogs((prev) =>
      prev.includes(id) ? prev.filter((logId) => logId !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    setSelectedLogs((prev) =>
      prev.length === mockLogs.length ? [] : mockLogs.map((l) => l.id)
    );
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
            <span className="hover:text-purple-400 cursor-pointer transition-colors">
              Dashboard
            </span>
            <span>/</span>
            <span className="text-white">Symptom Logs</span>
          </div>
          <h1 className="text-3xl text-white">Symptom Logs</h1>
          <p className="text-gray-400 mt-1">
            Track patient symptoms and identify patterns
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition-all text-sm">
            <span>Last 30 days</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 transition-all text-sm">
            <Download className="w-4 h-4" />
            Export
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all text-sm">
            <BarChart3 className="w-4 h-4" />
            View Analytics
          </button>
        </div>
      </div>

      {/* KPI Stats Row */}
      <SymptomKPICards />

      {/* Analytics Section */}
      <div className="mt-6">
        <SymptomAnalytics />
      </div>

      {/* Secondary Row - Triggers & Medication */}
      <div className="mt-6">
        <TriggerMedicationCards />
      </div>

      {/* Filter Bar */}
      <div className="mt-6 bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-xl">
        <div className="flex flex-col gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search patient, symptom, trigger..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#141A2E] border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20"
            />
          </div>

          {/* Filters Row */}
          <div className="flex items-center gap-4 flex-wrap">
            {/* Severity Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">Severity:</span>
              {severityFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveSeverityFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    activeSeverityFilter === filter
                      ? "bg-purple-500/20 text-purple-300 border border-purple-500/50 shadow-lg shadow-purple-500/20"
                      : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Medication Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">Medication:</span>
              {medicationFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveMedicationFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    activeMedicationFilter === filter
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-lg shadow-cyan-500/20"
                      : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="ml-auto flex items-center gap-2 px-4 py-2 rounded-full text-sm text-red-400 hover:bg-red-500/10 transition-all"
              >
                <X className="w-4 h-4" />
                Clear all filters
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Symptom Logs Table */}
      <div className="mt-6">
        <SymptomLogsTable
          logs={mockLogs}
          selectedLogs={selectedLogs}
          onToggleLog={toggleLog}
          onToggleAll={toggleAll}
          onViewLog={handleViewLog}
        />
      </div>

      {/* Detail Drawer */}
      <LogDetailDrawer
        log={selectedLog}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </div>
  );
}
