import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Saturday Dog Park Meetup",
    date: "Jan 11, 2026",
    time: "10:00 AM",
    location: "Central Dog Park",
    attendees: 24,
    category: "Meetup",
    emoji: "🐕",
  },
  {
    id: 2,
    title: "Pet First Aid Workshop",
    date: "Jan 15, 2026",
    time: "2:00 PM",
    location: "Community Center",
    attendees: 18,
    category: "Workshop",
    emoji: "🏥",
  },
  {
    id: 3,
    title: "Cat Adoption Day",
    date: "Jan 18, 2026",
    time: "11:00 AM",
    location: "Local Shelter",
    attendees: 45,
    category: "Adoption",
    emoji: "🐱",
  },
];

const Events = () => {
  return (
    <section id="events" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">
              Upcoming <span className="text-gradient">Events</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Playdates, workshops, adoption days, and more happening near you
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0">
            <Calendar className="w-4 h-4" />
            View Calendar
          </Button>
        </div>

        <div className="space-y-4">
          {events.map((event, index) => (
            <Card
              key={event.id}
              variant="elevated"
              className="overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row md:items-center">
                  {/* Date block */}
                  <div className="flex-shrink-0 bg-terracotta-light p-6 md:w-32 text-center">
                    <div className="text-4xl mb-2">{event.emoji}</div>
                    <div className="text-sm font-medium text-primary">{event.category}</div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6">
                    <h3 className="text-lg font-bold font-display mb-2">{event.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {event.attendees} attending
                      </span>
                    </div>
                  </div>

                  {/* Action */}
                  <div className="p-6 pt-0 md:pt-6">
                    <Button variant="sage">RSVP</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
