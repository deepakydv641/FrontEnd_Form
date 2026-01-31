const steps = [
  "Personal Details",
  "Academic Profile",
  "Employment History",
  "Publications",
  "Awards & Patents",
  "References",
  "Upload Documents",
  "Declaration",
];

function Sidebar({ step, setStep }) {
  return (
    <aside className="w-64 hidden lg:block">
      <div className="sticky top-24">
        {steps.map((title, index) => {
          const stepNumber = index + 1;
          const active = step === stepNumber;

          return (
            <button
              key={title}
              onClick={() => setStep(stepNumber)}
              className={`w-full text-left px-4 py-3 mb-2 rounded-lg transition-all flex items-center space-x-3 ${
                active
                  ? "bg-red-50 text-red-600 font-semibold border-l-4 border-red-600"
                  : "text-gray-400 hover:bg-gray-50"
              }`}
            >
              <span className="flex-shrink-0 w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-sm">
                {stepNumber}
              </span>
              <span>{title}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}

export default Sidebar;
