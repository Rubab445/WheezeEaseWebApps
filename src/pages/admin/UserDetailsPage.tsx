import { useState } from "react";
import {
  ChevronRight,
  Edit,
  KeyRound,
  Ban,
  Trash2,
  Calendar,
  Clock,
  AlertTriangle,
  ClipboardList,
} from "lucide-react";
import { UserDetailsHeader } from "../../components/admin/user-details/UserDetailsHeader";
import { ProfileHero } from "../../components/admin/user-details/ProfileHero";
import { TabNavigation } from "../../components/admin/user-details/TabNavigation";
import { OverviewTab } from "../../components/admin/user-details/OverviewTab";
import { ActivityTab } from "../../components/admin/user-details/ActivityTab";
import { AlertsTab } from "../../components/admin/user-details/AlertsTab";
import { RoleDetailsTab } from "../../components/admin/user-details/RoleDetailsTab";
import { PermissionsTab } from "../../components/admin/user-details/PermissionsTab";

interface UserDetailsPageProps {
  onBack: () => void;
  onEdit: () => void;
}

export function UserDetailsPage({ onBack, onEdit }: UserDetailsPageProps) {
  const [activeTab, setActiveTab] = useState("overview");
  const [userRole, setUserRole] = useState<"Patient" | "Doctor">("Patient");

  const userData = {
    Patient: {
      name: "Ayesha Khan",
      email: "ayesha.k@email.com",
      status: "Active" as const,
      createdDate: "Jan 15, 2025",
      lastLogin: "2 hours ago",
      alertsCount: 38,
      activityMetric: {
        label: "Logs (30d)",
        value: "42",
      },
    },
    Doctor: {
      name: "Dr. Ali Raza",
      email: "dr.ali@clinic.com",
      status: "Active" as const,
      createdDate: "Dec 10, 2024",
      lastLogin: "30 mins ago",
      alertsCount: 15,
      activityMetric: {
        label: "Patients",
        value: "124",
      },
    },
  };

  const currentUser = userData[userRole];

  return (
    <div className="p-8">
      {/* Breadcrumb & Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
            <button
              onClick={onBack}
              className="hover:text-purple-400 cursor-pointer transition-colors"
            >
              Users & Roles
            </button>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">User Details</span>
          </div>
          <h1 className="text-3xl text-white">User Details</h1>
          <p className="text-gray-400 mt-1">
            Viewing profile for {currentUser.name}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all text-sm"
            onClick={onEdit}
          >
            <Edit className="w-4 h-4" />
            Edit User
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 transition-all text-sm">
            <KeyRound className="w-4 h-4" />
            Reset Password
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-red-500/30 text-red-300 hover:bg-red-500/10 transition-all text-sm">
            <Ban className="w-4 h-4" />
            Suspend
          </button>
          <button className="p-2.5 rounded-full border border-red-500/30 text-red-400 hover:bg-red-500/10 transition-all">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Profile Hero */}
      <ProfileHero
        role={userRole}
        name={currentUser.name}
        email={currentUser.email}
        status={currentUser.status}
        createdDate={currentUser.createdDate}
        lastLogin={currentUser.lastLogin}
        alertsCount={currentUser.alertsCount}
        activityMetric={currentUser.activityMetric}
        onRoleSwitch={setUserRole}
      />

      {/* Tab Navigation */}
      <div className="mt-6">
        <TabNavigation
          activeTab={activeTab}
          onTabChange={setActiveTab}
          role={userRole}
        />
      </div>

      {/* Tab Content */}
      <div className="mt-6 pb-8">
        {activeTab === "overview" && <OverviewTab role={userRole} />}
        {activeTab === "activity" && <ActivityTab role={userRole} />}
        {activeTab === "alerts" && <AlertsTab />}
        {activeTab === "roleDetails" && <RoleDetailsTab role={userRole} />}
        {activeTab === "permissions" && userRole === "Doctor" && (
          <PermissionsTab />
        )}
      </div>
    </div>
  );
}
