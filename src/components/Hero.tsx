import { Button } from "@/components/ui/button";
import { MapPin, Heart, Users } from "lucide-react";
import heroPets from "@/assets/hero-pets.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-light rounded-full text-sage font-medium text-sm">
              <Heart className="w-4 h-4" />
              Join 10,000+ happy pet families
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-tight">
              Connect with pet lovers{" "}
              <span className="text-gradient">in your neighborhood</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              PawPals brings together local pet owners for playdates, advice, pet-sitting help, 
              and lasting friendships. Because every pet deserves a community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl">
                <MapPin className="w-5 h-5" />
                Find Your Community
              </Button>
              <Button variant="outline" size="xl">
                <Users className="w-5 h-5" />
                Browse Groups
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              {[
                { value: "500+", label: "Local Groups" },
                { value: "25K+", label: "Pet Profiles" },
                { value: "1.2K", label: "Events Monthly" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold font-display text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:h-[600px] animate-scale-in">
            <div className="relative h-full">
              <img
                src={heroPets}
                alt="Happy pets together in a park"
                className="w-full h-full object-cover rounded-3xl shadow-elevated"
              />
              {/* Floating cards */}
              <div className="absolute -left-4 top-1/4 bg-card p-4 rounded-2xl shadow-card animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-terracotta-light rounded-full flex items-center justify-center">
                    🐕
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Dog Park Meetup</div>
                    <div className="text-xs text-muted-foreground">Today at 4pm</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-1/4 bg-card p-4 rounded-2xl shadow-card animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-sage-light rounded-full flex items-center justify-center">
                    🐈
                  </div>
                  <div>
                    <div className="font-semibold text-sm">New neighbor!</div>
                    <div className="text-xs text-muted-foreground">Whiskers joined</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
