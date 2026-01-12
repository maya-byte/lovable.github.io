import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Users, ArrowRight } from "lucide-react";

const communities = [
  {
    id: 1,
    name: "Riverside Dog Lovers",
    location: "Riverside Park Area",
    members: 342,
    emoji: "🐕",
    description: "Daily walks, training tips, and fun times!",
    color: "bg-terracotta-light",
  },
  {
    id: 2,
    name: "Downtown Cat Crew",
    location: "Downtown District",
    members: 189,
    emoji: "🐱",
    description: "Indoor cat care, vet recommendations, and cat-sitting",
    color: "bg-sage-light",
  },
  {
    id: 3,
    name: "Small Pets Society",
    location: "West Side",
    members: 97,
    emoji: "🐹",
    description: "Rabbits, hamsters, guinea pigs and more!",
    color: "bg-amber-light",
  },
  {
    id: 4,
    name: "Multi-Pet Families",
    location: "Citywide",
    members: 256,
    emoji: "🐾",
    description: "Tips for homes with multiple furry friends",
    color: "bg-terracotta-light",
  },
];

const Communities = () => {
  return (
    <section id="communities" className="py-24 bg-warm-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">
            Find Your Local <span className="text-gradient">Pet Community</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join neighborhood groups, share experiences, and connect with pet owners who understand
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {communities.map((community, index) => (
            <Card
              key={community.id}
              variant="interactive"
              className="group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 ${community.color} rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                  {community.emoji}
                </div>
                <CardTitle className="text-lg">{community.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{community.description}</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    {community.location}
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Users className="w-3 h-3" />
                    {community.members}
                  </span>
                </div>
                <Button variant="warm" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Join Group
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Explore All Communities
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Communities;
