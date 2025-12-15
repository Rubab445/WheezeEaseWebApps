import { ExternalLink, Download, AlertCircle, Github } from 'lucide-react';

export function AboutSection() {
  return (
    <div className="space-y-6">
      {/* System Information Card */}
      <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
            <span className="text-3xl">🫁</span>
          </div>
          <h2 className="text-2xl text-white mb-2">WheezeEase</h2>
          <p className="text-purple-400 mb-1">AI-Powered Allergy & Asthma Assistant</p>
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-sm">
            Version 1.0.0
          </span>
        </div>

        {/* System Details */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
            <span className="text-sm text-gray-400">Build Date</span>
            <span className="text-sm text-white">December 13, 2025</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
            <span className="text-sm text-gray-400">Environment</span>
            <span className="px-2 py-1 rounded bg-green-500/20 text-green-400 border border-green-500/30 text-xs">
              Production
            </span>
          </div>
          <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
            <span className="text-sm text-gray-400">License</span>
            <span className="text-sm text-white">MIT License</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
            <span className="text-sm text-gray-400">Database Version</span>
            <span className="text-sm text-white">MongoDB 7.0</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
            <span className="text-sm text-gray-400">AI Model Version</span>
            <span className="text-sm text-white">v2.0 (Latest)</span>
          </div>
        </div>

        {/* Team Credits */}
        <div className="border-t border-white/10 pt-6">
          <h3 className="text-sm text-gray-400 mb-4">Development Team</h3>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm">
                TZ
              </div>
              <div className="flex-1">
                <p className="text-sm text-white">Tehreem Zulfiqar</p>
                <p className="text-xs text-gray-400">Frontend Developer</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-sm">
                RR
              </div>
              <div className="flex-1">
                <p className="text-sm text-white">Rubab Rafeeq</p>
                <p className="text-xs text-gray-400">AI Layer Developer</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-pink-500/10 border border-pink-500/30 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white text-sm">
                KS
              </div>
              <div className="flex-1">
                <p className="text-sm text-white">Khunsha Shoab</p>
                <p className="text-xs text-gray-400">Backend Developer</p>
              </div>
            </div>
          </div>

          {/* Institution */}
          <div className="p-4 bg-white/5 rounded-lg border border-white/10 mb-4">
            <p className="text-sm text-white mb-1">University of Gujrat</p>
            <p className="text-xs text-gray-400">Department of Computer Science</p>
          </div>

          {/* Supervisor */}
          <div className="p-4 bg-white/5 rounded-lg border border-white/10">
            <p className="text-xs text-gray-400 mb-1">Project Supervisor</p>
            <p className="text-sm text-white">Dr. Muhammad Usman Ali</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="border-t border-white/10 pt-6 space-y-2">
          <button className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 transition-all">
            <ExternalLink className="w-4 h-4" />
            View Documentation
          </button>

          <button className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 text-gray-300 hover:bg-white/5 transition-all">
            <Download className="w-4 h-4" />
            Download User Manual
          </button>

          <button className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 text-gray-300 hover:bg-white/5 transition-all">
            <Github className="w-4 h-4" />
            View on GitHub
          </button>

          <button className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-orange-500/30 text-orange-300 hover:bg-orange-500/10 transition-all">
            <AlertCircle className="w-4 h-4" />
            Report an Issue
          </button>
        </div>

        {/* Check for Updates */}
        <div className="border-t border-white/10 pt-6 mt-6">
          <button className="w-full px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all">
            Check for Updates
          </button>
          <p className="text-xs text-center text-gray-500 mt-2">You're running the latest version</p>
        </div>
      </div>

      {/* Legal Information */}
      <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
        <h3 className="text-sm text-white mb-4">Legal Information</h3>
        
        <div className="space-y-2 text-xs text-gray-400">
          <p>© 2025 WheezeEase. All rights reserved.</p>
          <p>This software is provided under the MIT License.</p>
          <p className="pt-2 border-t border-white/10">
            WheezeEase is designed to assist with asthma and allergy management but should not replace professional medical advice, diagnosis, or treatment. Always consult with a qualified healthcare provider.
          </p>
        </div>

        <div className="flex gap-4 mt-4 pt-4 border-t border-white/10">
          <button className="text-xs text-purple-400 hover:text-purple-300 transition-colors">
            Privacy Policy
          </button>
          <button className="text-xs text-purple-400 hover:text-purple-300 transition-colors">
            Terms of Service
          </button>
          <button className="text-xs text-purple-400 hover:text-purple-300 transition-colors">
            HIPAA Compliance
          </button>
        </div>
      </div>
    </div>
  );
}
