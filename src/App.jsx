import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Step1 from "./components/steps/Step1";
import Step2 from "./components/steps/Step2";
import Step3 from "./components/steps/Step3";
import Step4 from "./components/steps/Step4";
import Step5 from "./components/steps/Step5";
import Step6 from "./components/steps/Step6";
import Step7 from "./components/steps/Step7";
import Step8 from "./components/steps/Step8";

function App() {
  const [step, setStep] = useState(1);

  const [btn, setbtn] = useState("Save & Next");

  function nextStep() {
    if (step < 8) setStep(step + 1);
    fun1();
  }

  function prevStep() {
    if (step > 1) setStep(step - 1);
    fun2();
  }

  function fun1() {
    if (step >= 7) setbtn("Submit");
  }
  function fun2() {
    setbtn("Save & Next");
  }

  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    dob: "",
    maritalStatus: "",
    fatherName: "",
    nationality: "Indian",
    category: "",
    aadhar: "",
    pan: "",
    mobile: "",
    email: "",
    address: "",
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header step={step} />
      <div className="flex flex-1">
        <div className="w-64 bg-gray-800 text-white p-4">
          <Sidebar />
        </div>
        <main className="flex-1 p-10">
          {step === 1 && (
            <Step1
              formData={formData}
              setFormData={setFormData}
              step={step}
              setStep={setStep}
            />
          )}
          {step === 2 && (
            <Step2
              formData={formData}
              setFormData={setFormData}
              step={step}
              setStep={setStep}
            />
          )}
          {step === 3 && (
            <Step3
              formData={formData}
              setFormData={setFormData}
              step={step}
              setStep={setStep}
            />
          )}
          {step === 4 && (
            <Step4
              formData={formData}
              setFormData={setFormData}
              step={step}
              setStep={setStep}
            />
          )}
          {step === 5 && (
            <Step5
              formData={formData}
              setFormData={setFormData}
              step={step}
              setStep={setStep}
            />
          )}
          {step === 6 && (
            <Step6
              formData={formData}
              setFormData={setFormData}
              step={step}
              setStep={setStep}
            />
          )}
          {step === 7 && (
            <Step7
              formData={formData}
              setFormData={setFormData}
              step={step}
              setStep={setStep}
            />
          )}
          {step === 8 && (
            <Step8
              formData={formData}
              setFormData={setFormData}
              step={step}
              setStep={setStep}
            />
          )}

          <div className="flex gap-4 mt-6">
            {step != 1 && (
              <button
                onClick={prevStep}
                disabled={step === 1}
                className="px-4 py-2 border rounded"
              >
                Back
              </button>
            )}
            <bttn />
            <button
              onClick={nextStep}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              {btn}
            </button>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
