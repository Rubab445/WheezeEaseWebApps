import { useState } from "react";
import { Activity, Stethoscope, ArrowRight, Shield } from "lucide-react";

// Auth Components
import { UnifiedLoginPage } from "./pages/auth/shared/UnifiedLoginPage";
import { AuthDemoPage } from "./pages/AuthDemoPage";

// Admin Components
import { Sidebar } from "./components/admin/Sidebar";
import { DashboardPage } from "./pages/admin/DashboardPage";
import { UsersPage } from "./pages/admin/UsersPage";
import { AlertsPage } from "./pages/admin/AlertsPage";
import { SymptomLogsPage as AdminSymptomLogsPage } from "./pages/admin/SymptomLogsPage";
import { EnvironmentPage } from "./pages/admin/EnvironmentPage";
import { EducationPage } from "./pages/admin/EducationPage";
import { SettingsPage as AdminSettingsPage } from "./pages/admin/SettingsPage";
import { UserDetailsPage } from "./pages/admin/UserDetailsPage";
import { EditUserPage } from "./pages/admin/EditUserPage";

// Doctor Components
import { DoctorSidebar } from "./components/doctor/DoctorSidebar";
import { DoctorDashboard } from "./pages/doctor/DoctorDashboard";
import { MyPatientsPage } from "./pages/doctor/MyPatientsPage";
import { PatientDetailsPage } from "./pages/doctor/PatientDetailsPage";
import { AIRecommendationsPage } from "./pages/doctor/AIRecommendationsPage";
import { SymptomLogsPage as DoctorSymptomLogsPage } from "./pages/doctor/SymptomLogsPage";
import { AppointmentsPage } from "./pages/doctor/AppointmentsPage";
import { ResourcesPage } from "./pages/doctor/ResourcesPage";
import { SettingsPage } from "./pages/doctor/SettingsPage";
import { EnvironmentDashboardPage } from "./pages/doctor/EnvironmentDashboardPage";
import { ProfilePage } from "./pages/doctor/ProfilePage";
import { CreateAccountPage } from "./pages/doctor/auth/CreateAccountPage";
import { LoginPage } from "./pages/doctor/auth/LoginPage";
import { ForgotPasswordPage } from "./pages/doctor/auth/ForgotPasswordPage";
import { PasswordResetConfirmationPage } from "./pages/doctor/auth/PasswordResetConfirmationPage";

export type AdminPageType =
  | "dashboard"
  | "users"
  | "alerts"
  | "symptom-logs"
  | "environment"
  | "education"
  | "settings"
  | "user-details"
  | "edit-user";
export type DoctorPageType =
  | "dashboard"
  | "patients"
  | "patient-details"
  | "symptom-logs"
  | "ai-recommendations"
  | "appointments"
  | "environment"
  | "resources"
  | "settings"
  | "profile";
export type PortalType = "admin" | "doctor" | null;

export default function App() {
  const [currentPortal, setCurrentPortal] = useState<PortalType>(null);
  const [adminPage, setAdminPage] = useState<AdminPageType>("dashboard");
  const [doctorPage, setDoctorPage] = useState<DoctorPageType>("dashboard");
  const [showAuthDemo, setShowAuthDemo] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [isDoctorAuthenticated, setIsDoctorAuthenticated] = useState(false);
  const [doctorAuthPage, setDoctorAuthPage] = useState<
    "login" | "create-account" | "forgot-password" | "confirmation"
  >("login");
  const [resetPasswordEmail, setResetPasswordEmail] = useState("");

  // Show Auth Demo
  if (showAuthDemo) {
    return <AuthDemoPage onBack={() => setShowAuthDemo(false)} />;
  }

  // Unified Authentication - Show if no portal is authenticated
  if (!isAdminAuthenticated && !isDoctorAuthenticated) {
    // Handle other auth pages for doctor
    if (doctorAuthPage === "create-account") {
      return (
        <CreateAccountPage
          onNavigateToLogin={() => setDoctorAuthPage("login")}
        />
      );
    }

    if (doctorAuthPage === "forgot-password") {
      return (
        <ForgotPasswordPage
          onNavigateToLogin={() => setDoctorAuthPage("login")}
          onNavigateToConfirmation={(email) => {
            setResetPasswordEmail(email);
            setDoctorAuthPage("confirmation");
          }}
        />
      );
    }

    if (doctorAuthPage === "confirmation") {
      return (
        <PasswordResetConfirmationPage
          email={resetPasswordEmail}
          onNavigateToLogin={() => setDoctorAuthPage("login")}
        />
      );
    }

    // Default: Unified Login page
    return (
      <UnifiedLoginPage
        onNavigateToCreateAccount={() => setDoctorAuthPage("create-account")}
        onNavigateToForgotPassword={() => setDoctorAuthPage("forgot-password")}
        onLoginSuccess={(portal) => {
          setCurrentPortal(portal);
          if (portal === "admin") {
            setIsAdminAuthenticated(true);
          } else {
            setIsDoctorAuthenticated(true);
          }
        }}
      />
    );
  }

  // Admin Portal
  if (currentPortal === "admin" && isAdminAuthenticated) {
    return (
      <div className="flex h-screen bg-gradient-to-br from-[#0A0F1E] via-[#141A2E] to-[#0A0F1E]">
        <Sidebar
          currentPage={
            adminPage === "user-details" || adminPage === "edit-user"
              ? "users"
              : adminPage
          }
          onNavigate={setAdminPage}
        />

        <div className="flex-1 flex flex-col">
          {/* Admin Portal Header with Back Button */}
          <div className="bg-[#0A0F1E]/80 backdrop-blur-xl border-b border-white/5 px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-white font-semibold">WheezeEase Admin</h1>
                <p className="text-xs text-gray-400">Logged in as Admin</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setIsAdminAuthenticated(false);
                  setCurrentPortal(null);
                }}
                className="px-4 py-2 bg-purple-500/20 border border-purple-500 text-purple-300 rounded-xl text-sm font-medium hover:bg-purple-500/30 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>

          <main className="flex-1 overflow-y-auto">
            {adminPage === "dashboard" && <DashboardPage />}
            {adminPage === "users" && (
              <UsersPage onViewUser={() => setAdminPage("user-details")} />
            )}
            {adminPage === "user-details" && (
              <UserDetailsPage onBack={() => setAdminPage("users")} />
            )}
            {adminPage === "edit-user" && (
              <EditUserPage onBack={() => setAdminPage("users")} />
            )}
            {adminPage === "alerts" && <AlertsPage />}
            {adminPage === "symptom-logs" && <AdminSymptomLogsPage />}
            {adminPage === "environment" && <EnvironmentPage />}
            {adminPage === "education" && <EducationPage />}
            {adminPage === "settings" && <AdminSettingsPage />}
          </main>
        </div>
      </div>
    );
  }

  // Doctor Portal
  return (
    <div className="flex h-screen bg-[#F8F9FA]">
      <DoctorSidebar
        currentPage={doctorPage === "patient-details" ? "patients" : doctorPage}
        onNavigate={setDoctorPage}
        onLogout={() => {
          setIsDoctorAuthenticated(false);
          setCurrentPortal(null);
        }}
      />

      <div className="flex-1 flex flex-col">
        {/* Doctor Portal Header with Back Button */}
        <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-[#059669] to-[#10B981] rounded-lg flex items-center justify-center">
              <Stethoscope className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-[#1F2937]">
                WheezeEase Doctor Portal
              </h1>
              <p className="text-xs text-[#6B7280]">
                Professional Patient Care
              </p>
            </div>
          </div>
        </div>

        <main className="flex-1 overflow-y-auto bg-[#F8F9FA]">
          {doctorPage === "dashboard" && <DoctorDashboard />}
          {doctorPage === "patients" && (
            <MyPatientsPage
              onViewPatientDetails={() => setDoctorPage("patient-details")}
            />
          )}
          {doctorPage === "patient-details" && (
            <PatientDetailsPage onBack={() => setDoctorPage("patients")} />
          )}
          {doctorPage === "symptom-logs" && <DoctorSymptomLogsPage />}
          {doctorPage === "ai-recommendations" && <AIRecommendationsPage />}
          {doctorPage === "appointments" && <AppointmentsPage />}
          {doctorPage === "environment" && <EnvironmentDashboardPage />}
          {doctorPage === "resources" && <ResourcesPage />}
          {doctorPage === "settings" && <SettingsPage />}
          {doctorPage === "profile" && <ProfilePage />}
        </main>
      </div>
    </div>
  );
}
