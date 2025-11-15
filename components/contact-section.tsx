import type React from "react";

import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "wujoodcare@gmail.com",
      link: "mailto:wujoodcare@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "00962796733980",
      link: "tel:00962796733980",
    },
    {
      icon: MapPin,
      title: "Office",
      value: "Remote-first, partnering with hospitals and clinics worldwide",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="bg-muted/30 py-20 lg:py-32">
      <div className="mx-auto px-4 lg:px-8 container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="inline-block mb-4">
            <span className="bg-primary/10 px-4 py-2 rounded-full font-medium text-primary text-sm">
              Get In Touch
            </span>
          </div>
          <h2 className="mb-6 font-bold text-foreground text-3xl lg:text-5xl text-balance">
            Ready to Bring Wujood to Your Patients?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed text-justify">
            Partner with us to introduce Wujood in your hospital or clinic and
            help children experience treatment with more calm, trust, and
            emotional safety. Schedule a demo to explore our therapeutic
            worlds, workflows, and integration options for your care team.
          </p>
        </div>

        <div className="flex flex-wrap justify-between items-center gap-6 mx-auto max-w-6xl">
          {contactInfo.map((info) => (
            <Card
              key={info.value}
              className="bg-card hover:shadow-lg p-6 border-border w-full transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="flex flex-shrink-0 justify-center items-center bg-primary/10 rounded-lg w-12 h-12">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-card-foreground">
                    {info.title}
                  </h3>
                  <a
                    href={info.link}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {info.value}
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
