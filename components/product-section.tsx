import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Microscope, Stethoscope, Brain, Activity } from "lucide-react";
import Image from "next/image";

export function ProductSection() {
  const features = [
    "Realistic surgical simulations",
    "Patient interaction scenarios",
    "Anatomy visualization in 3D",
    "Emergency response training",
    "Collaborative learning environments",
    "Progress tracking & analytics",
  ];

  const modules = [
    {
      icon: Microscope,
      title: "Surgical Training",
      description:
        "Practice complex procedures in a risk-free virtual environment with haptic feedback.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Stethoscope,
      title: "Clinical Diagnosis",
      description:
        "Develop diagnostic skills through interactive patient case studies and examinations.",
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: Brain,
      title: "Anatomy Education",
      description:
        "Explore detailed 3D anatomical models with layer-by-layer visualization.",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: Activity,
      title: "Emergency Response",
      description:
        "Train for critical situations with realistic emergency scenarios and protocols.",
      color: "bg-chart-4/20 text-chart-4",
    },
  ];

  return (
    <section id="product" className="py-20 lg:py-32">
      <div className="mx-auto px-4 lg:px-8 container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="inline-block mb-4">
            <span className="bg-accent/10 px-4 py-2 rounded-full font-medium text-accent text-sm">
              Our Product
            </span>
          </div>
          <h2 className="mb-6 font-bold text-foreground text-3xl lg:text-5xl text-balance">
            Comprehensive VR Medical Training Platform
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A complete suite of immersive training modules designed to enhance
            medical education and improve patient outcomes through hands-on
            virtual experience.
          </p>
        </div>

        <div className="items-center gap-12 lg:gap-16 grid lg:grid-cols-2 mb-20">
          <div className="relative order-2 lg:order-1">
            <div className="relative bg-muted rounded-2xl aspect-[4/3] overflow-hidden">
              <Image
                src="/vr-medical-training-interface-with-3d-anatomy-visu.jpg"
                alt="VR Medical Training Platform"
                className="w-full h-full object-cover"
                fill
              />
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <h3 className="font-bold text-foreground text-2xl lg:text-3xl">
              Advanced Features for Modern Healthcare
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Our platform integrates the latest VR technology with proven
              medical training methodologies, providing an unparalleled learning
              experience.
            </p>

            <div className="gap-4 grid sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <div className="flex flex-shrink-0 justify-center items-center bg-primary/10 mt-0.5 rounded-full w-5 h-5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 mt-4 text-primary-foreground"
            >
              Explore Features
            </Button>
          </div>
        </div>

        <div className="gap-6 grid sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((module) => (
            <Card
              key={module.title}
              className="bg-card hover:shadow-lg p-6 border-border transition-all hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 ${module.color} rounded-xl flex items-center justify-center mb-4`}
              >
                <module.icon className="w-7 h-7" />
              </div>
              <h3 className="mb-3 font-semibold text-card-foreground text-xl">
                {module.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {module.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
