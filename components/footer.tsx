import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaYoutube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-card border-border border-t">
      <div className="mx-auto px-4 lg:px-8 py-12 lg:py-16 container">
        <div className="gap-8 grid sm:grid-cols-2 lg:grid-cols-6 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex flex-col">
                <span className="font-serif font-extrabold text-card-foreground text-xl leading-none">
                  Wujood Care
                </span>
                <span className="mt-0.5 text-[10px] text-muted-foreground leading-none">
                  Your Presence, Our Care
                </span>
              </div>
            </div>
            <p className="mb-6 text-muted-foreground text-sm leading-relaxed text-justify">
              Wujood blends science, storytelling, and sensory design to create
              VR worlds that soothe, empower, and support children through
              treatment. We help care teams make emotional well-being a core
              part of medicine - not an afterthought.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex justify-center items-center bg-muted hover:bg-primary rounded-lg w-10 h-10 text-muted-foreground hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-card-foreground">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-border border-t">
          <div className="flex sm:flex-row flex-col justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2025 Wujood Care. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Designed for children, families, and care teams worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
