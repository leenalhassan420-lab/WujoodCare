import { Card } from "@/components/ui/card";
import { Heart, Users, Award, Zap } from "lucide-react";

export function AboutSection() {
  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description:
        "Our VR solutions prioritize patient comfort and outcomes, creating compassionate healthcare experiences.",
    },
    {
      icon: Users,
      title: "Collaborative Innovation",
      description:
        "Working alongside healthcare professionals to develop practical, effective training solutions.",
    },
    {
      icon: Award,
      title: "Clinical Excellence",
      description:
        "Backed by research and validated by leading medical institutions worldwide.",
    },
    {
      icon: Zap,
      title: "Cutting-Edge Technology",
      description:
        "Leveraging the latest VR advancements to deliver unparalleled medical training experiences.",
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-muted/30 py-20 lg:py-32 overflow-hidden"
    >
      <div className="top-10 right-0 absolute bg-accent/5 blur-2xl rounded-[50%_50%_40%_60%/60%_40%_60%_40%] w-[300px] h-[180px]" />
      <div className="bottom-20 left-0 absolute bg-secondary/5 blur-2xl rounded-[60%_40%_50%_50%/50%_60%_40%_50%] w-[250px] h-[150px]" />

      <div className="relative mx-auto px-4 lg:px-8 container">
        <div className="items-center gap-12 lg:gap-16 grid lg:grid-cols-2">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-secondary/10 px-4 py-2 rounded-full font-semibold text-secondary text-sm">
                About Us
              </span>
            </div>

            <h2 className="font-serif font-extrabold text-foreground text-3xl lg:text-5xl text-balance leading-tight">
              Pioneering the Future of Medical Education
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Founded by healthcare professionals and technology innovators,
              we&apos;re on a mission to revolutionize medical training through
              immersive virtual reality experiences.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Our platform combines cutting-edge VR technology with
              evidence-based medical practices, enabling healthcare
              professionals to train in realistic, risk-free environments. From
              surgical simulations to patient interaction scenarios, we&apos;re
              transforming how medicine is taught and practiced.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="flex justify-center items-center bg-primary/20 border-2 border-background rounded-full w-10 h-10"
                  >
                    <span className="font-medium text-primary text-xs">
                      M{i}
                    </span>
                  </div>
                ))}
              </div>
              <div className="text-muted-foreground text-sm">
                Trusted by leading medical institutions globally
              </div>
            </div>
          </div>

          <div className="gap-6 grid sm:grid-cols-2">
            {values.map((value) => (
              <Card
                key={value.title}
                className="bg-card hover:shadow-lg p-6 border-border transition-shadow"
              >
                <div className="flex justify-center items-center bg-primary/10 mb-4 rounded-lg w-12 h-12">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-card-foreground text-lg">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
