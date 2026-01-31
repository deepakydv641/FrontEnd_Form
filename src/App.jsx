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
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const [step, setStep] = useState(1);

  const [btn, setbtn] = useState("Save & Next");

  const navigate = useNavigate();
  const location=useLocation();

  function nextStep() {
    if (step < 8) {
      const next = step + 1;
      setStep(next);
      const stepobj = steps.find((s) => s.stp === next);
      navigate(stepobj.path);
      fun1();
    }
  }

  function prevStep() {
    if (step > 1) {
      const next = step - 1; 
      setStep(next);
      const stepobj = steps.find((s) => s.stp === next);
      navigate(stepobj.path);
      fun2();
    }
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

  const steps = [
    { stp: 1, title: "Personal Details", path: "/" },
    { stp: 2, title: "Academic Profile", path: "/academic" },
    { stp: 3, title: "Employment History", path: "/employment" },
    { stp: 4, title: "Publications", path: "/publications" },
    { stp: 5, title: "Awards & Patents", path: "/awards" },
    { stp: 6, title: "References", path: "/references" },
    { stp: 7, title: "Upload Documents", path: "/documents" },
    { stp: 8, title: "Declaration", path: "/declaration" },
  ];
  useEffect(()=>{
    const stepobj=steps.find((s)=>s.path===location.pathname);
    const nextStep=stepobj.stp;
    if(stepobj){
      setStep(stepobj.stp);
    }
    if(nextStep===8){
      setbtn("Submit");
    }
    else{
      setbtn("Save & Next");
    }
  }
    ,[location.pathname]
  );
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header step={step} />
      <div className="flex flex-1">
        <div className="w-64 bg-gray-800 text-white p-4">
          <Sidebar />
        </div>
        <main className="flex-1 p-10">
          <div className="flex-1 p-6">
            <Routes>
              <Route
                path="/"
                element={
                  <Step1
                    formData={formData}
                    setFormData={setFormData}
                    step={1}
                    setStep={setStep}
                  />
                }
              />
              <Route
                path="/Academic"
                element={
                  <Step2
                    formData={formData}
                    setFormData={setFormData}
                    step={2}
                    setStep={setStep}
                  />
                }
              />
              <Route
                path="/employment"
                element={
                  <Step3
                    formData={formData}
                    setFormData={setFormData}
                    step={3}
                    setStep={setStep}
                  />
                }
              />
              <Route
                path="/publications"
                element={
                  <Step4
                    formData={formData}
                    setFormData={setFormData}
                    step={4}
                    setStep={setStep}
                  />
                }
              />
              <Route
                path="/awards"
                element={
                  <Step5
                    formData={formData}
                    setFormData={setFormData}
                    step={5}
                    setStep={setStep}
                  />
                }
              />
              <Route
                path="/references"
                element={
                  <Step6
                    formData={formData}
                    setFormData={setFormData}
                    step={6}
                    setStep={setStep}
                  />
                }
              />
              <Route
                path="/documents"
                element={
                  <Step7
                    formData={formData}
                    setFormData={setFormData}
                    step={7}
                    setStep={setStep}
                  />
                }
              />
              <Route
                path="/declaration"
                element={
                  <Step8
                    formData={formData}
                    setFormData={setFormData}
                    step={8}
                    setStep={setStep}
                  />
                }
              />
            </Routes>
          </div>
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
