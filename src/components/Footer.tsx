import { Youtube, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-semibold mb-4">
              Heritage <span className="text-heritage-gold">Baptist</span>
            </h3>
            <p className="font-body text-sm text-primary-foreground/60 leading-relaxed mb-4">
              Worshipping Christ in Community.
              <br />
              Learning · Loving · Looking · Longing
            </p>
            <p className="font-body text-sm text-primary-foreground/60">
              5200 Heidorn Ranch Rd
              <br />
              Antioch, CA 94531
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-sm font-semibold tracking-wider uppercase mb-4 text-heritage-gold">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Home", href: "#home" },
                { label: "Why Heritage", href: "#why-heritage" },
                { label: "Our Commitments", href: "#commitments" },
                { label: "Our Pastor", href: "#pastor" },
                { label: "Visit Us", href: "#visit" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="font-body text-sm text-primary-foreground/60 hover:text-heritage-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-body text-sm font-semibold tracking-wider uppercase mb-4 text-heritage-gold">
              Connect
            </h4>
            <div className="font-body text-sm text-primary-foreground/60 space-y-3">
              <a
                href="mailto:pastorevan@heritagebaptistacademy.com"
                className="block hover:text-heritage-gold transition-colors break-all"
              >
                pastorevan@heritagebaptistacademy.com
              </a>
              <a
                href="https://www.youtube.com/@heritageantioch"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-heritage-gold transition-colors"
              >
                <Youtube size={16} />
                Watch Sermons
              </a>
              <a
                href="https://forms.ministryforms.net/embed.aspx?formId=e9132e67-1d8e-4c8a-8ae8-7388b81cd3b5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-heritage-gold transition-colors"
              >
                <Heart size={16} />
                Give Online
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <p className="font-body text-xs text-primary-foreground/40 text-center">
            © {currentYear} Heritage Baptist Church. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
