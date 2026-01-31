function Header() {
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="px-6 h-16 flex justify-between items-center">
        {/* Left: Logo and Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">N</span>
          </div>
          <div>
            <h1 className="text-base font-bold text-gray-900 leading-tight">NIT Kurukshetra</h1>
            <p className="text-xs text-gray-500">Career Portal</p>
          </div>
        </div>

        {/* Right: User Info */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-medium text-gray-900">Dr. Applicant Name</p>
            <p className="text-xs text-gray-500">Application ID: NITK-2024-892</p>
          </div>
          <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200">
            <span className="material-symbols-outlined text-gray-600 text-xl">U</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
