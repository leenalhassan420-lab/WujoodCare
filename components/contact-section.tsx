import type React from "react";

import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@vrmedtech.com",
      link: "mailto:contact@vrmedtech.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Office",
      value: "123 Innovation Drive, San Francisco, CA 94105",
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
            Ready to Transform Your Medical Training?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Contact us today to schedule a demo and discover how our VR
            solutions can revolutionize your healthcare education programs.
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
