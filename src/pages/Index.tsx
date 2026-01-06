import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Communities from "@/components/Communities";
import Events from "@/components/Events";
import Feed from "@/components/Feed";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Communities />
      <Events />
      <Feed />
      <Footer />
    </div>
  );
};

export default Index;
