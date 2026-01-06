import { PawPrint, Heart } from "lucide-react";

const Footer = () => {
  const links = {
    community: ["Find Groups", "Events", "Pet Profiles", "Success Stories"],
    support: ["Help Center", "Safety Tips", "Pet Care Guide", "Community Guidelines"],
    company: ["About Us", "Careers", "Blog", "Press"],
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <a href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <PawPrint className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold font-display">PawPals</span>
            </a>
            <p className="text-background/70 text-sm">
              Connecting pet owners, building communities, and making the pet ownership journey better together.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              {links.community.map((link) => (
                <li key={link}>
                  <a href="#" className="text-background/70 hover:text-background text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {links.support.map((link) => (
                <li key={link}>
                  <a href="#" className="text-background/70 hover:text-background text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-background/70 hover:text-background text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/60 text-sm">
            © 2026 PawPals. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-background/60 text-sm">
            Made with <Heart className="w-4 h-4 text-primary fill-current" /> for pet lovers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
