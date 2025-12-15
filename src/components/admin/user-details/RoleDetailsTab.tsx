import { Heart, Pill, AlertCircle, Phone, FileText, Stethoscope, Building2, Award, File, CheckCircle, Clock, ExternalLink } from 'lucide-react';

interface RoleDetailsTabProps {
  role: 'Patient' | 'Doctor';
}

export function RoleDetailsTab({ role }: RoleDetailsTabProps) {
  if (role === 'Patient') {
    return (
      <div className="space-y-6">
        {/* Medical Profile Card */}
        <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl text-white flex items-center gap-2">
              <Heart className="w-5 h-5 text-pink-400" />
              Medical Profile
            </h2>
            <button className="px-4 py-2 rounded-xl border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 transition-all text-sm flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Edit Medical Profile
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Asthma Type */}
            <div>
              <label className="text-sm text-gray-400 mb-3 block flex items-center gap-2">
                <Heart className="w-4 h-4 text-cyan-400" />
                Asthma Type
              </label>
              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4">
                <p className="text-white">Allergic Asthma</p>
                <p className="text-xs text-gray-400 mt-1">Triggered by environmental allergens</p>
              </div>
            </div>

            {/* Emergency Contact */}
            <div>
              <label className="text-sm text-gray-400 mb-3 block flex items-center gap-2">
                <Phone className="w-4 h-4 text-pink-400" />
                Emergency Contact
              </label>
              <div className="bg-pink-500/10 border border-pink-500/30 rounded-xl p-4">
                <p className="text-white">Ali Khan (Brother)</p>
                <p className="text-xs text-gray-400 mt-1">+92 321 9876543</p>
              </div>
            </div>

            {/* Known Allergies */}
            <div>
              <label className="text-sm text-gray-400 mb-3 block flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-yellow-400" />
                Known Allergies
              </label>
              <div className="flex flex-wrap gap-2">
                {['Pollen', 'Dust mites', 'Pet dander', 'Mold', 'Tree pollen'].map((allergy) => (
                  <span
                    key={allergy}
                    className="px-3 py-2 rounded-lg bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 text-sm"
                  >
                    {allergy}
                  </span>
                ))}
              </div>
            </div>

            {/* Current Medications */}
            <div>
              <label className="text-sm text-gray-400 mb-3 block flex items-center gap-2">
                <Pill className="w-4 h-4 text-purple-400" />
                Current Medications
              </label>
              <div className="flex flex-wrap gap-2">
                {['Albuterol (Inhaler)', 'Montelukast 10mg', 'Fluticasone'].map((med) => (
                  <span
                    key={med}
                    className="px-3 py-2 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm"
                  >
                    {med}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Notes Section */}
          <div className="mt-6 pt-6 border-t border-white/5">
            <label className="text-sm text-gray-400 mb-3 block flex items-center gap-2">
              <FileText className="w-4 h-4 text-cyan-400" />
              Clinical Notes
            </label>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-sm text-gray-300 leading-relaxed">
                Patient has a history of seasonal allergic asthma, primarily triggered by high pollen counts in spring and fall. 
                Symptoms are well-controlled with current medication regimen. Patient has been advised to monitor AQI and pollen 
                levels daily and use rescue inhaler as needed. Last pulmonary function test (Dec 2024) showed FEV1 at 88% predicted.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Doctor Profile
  return (
    <div className="space-y-6">
      {/* Doctor Profile & Verification */}
      <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl text-white flex items-center gap-2">
            <Stethoscope className="w-5 h-5 text-purple-400" />
            Doctor Profile & Verification
          </h2>
          <span className="px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-sm flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            Verified
          </span>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Specialty */}
          <div>
            <label className="text-sm text-gray-400 mb-3 block flex items-center gap-2">
              <Award className="w-4 h-4 text-purple-400" />
              Specialty
            </label>
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
              <p className="text-white">Pulmonologist</p>
              <p className="text-xs text-gray-400 mt-1">Respiratory medicine specialist</p>
            </div>
          </div>

          {/* Hospital/Clinic */}
          <div>
            <label className="text-sm text-gray-400 mb-3 block flex items-center gap-2">
              <Building2 className="w-4 h-4 text-cyan-400" />
              Hospital/Clinic
            </label>
            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4">
              <p className="text-white">Aga Khan University Hospital</p>
              <p className="text-xs text-gray-400 mt-1">Karachi, Pakistan</p>
            </div>
          </div>

          {/* License ID */}
          <div>
            <label className="text-sm text-gray-400 mb-3 block flex items-center gap-2">
              <Award className="w-4 h-4 text-pink-400" />
              License/Registration ID
            </label>
            <div className="bg-pink-500/10 border border-pink-500/30 rounded-xl p-4">
              <p className="text-white font-mono">PMC-52184</p>
              <p className="text-xs text-gray-400 mt-1">Pakistan Medical Council</p>
            </div>
          </div>

          {/* Credentials */}
          <div>
            <label className="text-sm text-gray-400 mb-3 block flex items-center gap-2">
              <File className="w-4 h-4 text-blue-400" />
              Credentials Uploaded
            </label>
            <div className="space-y-2">
              {['Medical Degree (MBBS).pdf', 'Specialty Certificate.pdf', 'License Copy.pdf'].map((file) => (
                <div
                  key={file}
                  className="flex items-center justify-between p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg hover:bg-blue-500/20 transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <File className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-white">{file}</span>
                  </div>
                  <CheckCircle className="w-4 h-4 text-green-400" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Verification Status */}
        <div className="mt-6 pt-6 border-t border-white/5">
          <div className="flex items-center justify-between p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <div>
                <p className="text-white">Verification Complete</p>
                <p className="text-xs text-gray-400 mt-0.5">Verified by Admin on Dec 1, 2024</p>
              </div>
            </div>
            <button className="px-4 py-2 rounded-lg bg-green-500/20 border border-green-500/30 text-green-300 hover:bg-green-500/30 transition-all text-sm">
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* Assigned Patients Card */}
      <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl text-white">Assigned Patients</h2>
          <button className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors px-3 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
            View all (124)
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-3">
          {[
            { name: 'Sara Malik', lastVisit: '2 days ago', risk: 'High', avatar: 'SM' },
            { name: 'Omar Farooq', lastVisit: '5 days ago', risk: 'Medium', avatar: 'OF' },
            { name: 'Fatima Hassan', lastVisit: '1 week ago', risk: 'Low', avatar: 'FH' },
            { name: 'Yusuf Ahmed', lastVisit: '1 week ago', risk: 'Medium', avatar: 'YA' },
            { name: 'Layla Siddiqui', lastVisit: '2 weeks ago', risk: 'Low', avatar: 'LS' },
          ].map((patient, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <span className="text-xs text-white">{patient.avatar}</span>
                </div>
                <div>
                  <p className="text-sm text-white">{patient.name}</p>
                  <p className="text-xs text-gray-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    Last visit: {patient.lastVisit}
                  </p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs ${
                patient.risk === 'High' 
                  ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                  : patient.risk === 'Medium'
                  ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  : 'bg-green-500/20 text-green-400 border border-green-500/30'
              }`}>
                {patient.risk} Risk
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
