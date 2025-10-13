import AcuCheckBenefits from "@/Components/AcuCheckBenifits";
import CashFlow from "@/Components/CashFlow";
import CashFlowAnalysis from "@/Components/CashFlowAnalysis";
import Clients from "@/Components/Clients";
import FAQ from "@/Components/FAQ";
import Footer from "@/Components/Footer";
import FoundingMember from "@/Components/FoundingMember";
import Header from "@/Components/Header";
import HeroSection from "@/Components/HeroSection";
import HowItWorks from "@/Components/HowItWorks";
import IndustriesWeServe from "@/Components/IndustriesWeServe";
import Testimonials from "@/Components/Testimonials";

export default function Home() {
  return (
    <main className="bg-white flex justify-center">
      <div className="w-full ">
        <Header />
        <HeroSection />
        <CashFlowAnalysis />
        <CashFlow />
        <HowItWorks />
        <AcuCheckBenefits/>
        <IndustriesWeServe/>
        <Testimonials/>
        <FAQ />
        <FoundingMember />
        <Clients />
        <Footer />
      </div>
    </main>
  );
}
