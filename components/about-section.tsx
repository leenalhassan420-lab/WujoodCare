import { Card } from "@/components/ui/card";
import { Heart, Users, Award, Zap } from "lucide-react";

export function AboutSection() {
  const values = [
    {
      icon: Heart,
      title: "Child-Centered Calm",
      description:
        "Every experience is designed around how children actually feel in the hospital - scared, bored, overwhelmed - and helps them find comfort and control.",
      color: "bg-[#c060a5]",
      lightBg: "bg-[#c060a5]/10",
    },
    {
      icon: Users,
      title: "Clinically Co-Designed",
      description:
        "Built in collaboration with pediatric oncology, anesthesia, and rehabilitation teams to align with real care pathways and procedures.",
      color: "bg-[#4eb2d0]",
      lightBg: "bg-[#4eb2d0]/10",
    },
    {
      icon: Award,
      title: "Evidence-Informed Design",
      description:
        "Grounded in research on pain perception, anxiety reduction, and sensory regulation to support better emotional and physiological outcomes.",
      color: "bg-[#f9f081]",
      lightBg: "bg-[#f9f081]/15",
    },
    {
      icon: Zap,
      title: "Adaptive, Gentle Technology",
      description:
        "AI adjusts the world's pace, light, sound, and guidance based on each child's stress and engagement level.",
      color: "bg-[#563293]",
      lightBg: "bg-[#563293]/10",
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-gradient-to-br from-[#f9f081]/5 via-background to-[#c060a5]/5 py-20 lg:py-32 overflow-hidden"
    >
      <div className="top-10 right-0 absolute bg-[#4eb2d0]/8 blur-3xl rounded-[50%_50%_40%_60%/60%_40%_60%_40%] w-[300px] h-[180px]" />
      <div className="bottom-20 left-0 absolute bg-[#c060a5]/8 blur-2xl rounded-[60%_40%_50%_50%/50%_60%_40%_50%] w-[250px] h-[150px]" />

      <div className="relative mx-auto px-4 lg:px-8 container">
        <div className="items-center gap-12 lg:gap-16 grid lg:grid-cols-2">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-[#c060a5]/20 px-4 py-2 border border-[#c060a5]/30 rounded-full font-semibold text-[#c060a5] text-sm">
                💜 About Us
              </span>
            </div>

            <h2 className="font-serif font-extrabold text-foreground text-3xl lg:text-5xl text-balance leading-tight">
              Reimagining{" "}
              <span className="text-[#c060a5]">Healing for Children</span> in
              Hospitals
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed text-justify">
              Wujood Care develops AI-driven therapeutic VR environments
              tailored specifically for pediatric oncology patients.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed text-justify">
              Our approach is grounded in deep personalization, each virtual
              world is generated uniquely for every child, adapting in real time
              to their emotional cues, behavioral responses, and clinical
              context. By supporting emotional regulation during difficult
              moments.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed text-justify">
              Co-developed with clinicians and childhood cancer survivors,
              Wujood integrates AI-based emotional profiling, procedural world
              generation, and moment-to-moment responsiveness to create
              soothing, supportive environments during chemotherapy,
              radiotherapy, infusion sessions, and long-term care. This blend of
              emotional comfort and physiological calming can help improve
              procedure tolerance and reduce the need for breaks, sedation, or
              repeat attempts.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed text-justify">
              With three pediatric oncology centers already engaged and our
              first clinical pilot launching in 2026, we are building a
              scalable, evidence-informed platform designed to reduce
              treatment-related anxiety and enhance both emotional well-being and
              physical ease throughout the care journey.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="flex justify-center items-center bg-gradient-to-br from-[#563293] to-[#c060a5] border-3 border-background rounded-full w-10 h-10"
                  >
                    <span className="font-bold text-white text-xs">M{i}</span>
                  </div>
                ))}
              </div>
              <div className="text-muted-foreground text-sm">
                Co-created with clinicians, families, and researchers
              </div>
            </div>
          </div>

          <div className="gap-6 grid sm:grid-cols-2">
            {values.map((value) => (
              <Card
                key={value.title}
                className="bg-card hover:shadow-xl p-6 border-[#f9f081]/20 border-2 hover:border-[#f9f081]/50 transition-all hover:-translate-y-2"
              >
                <div
                  className={`w-14 h-14 ${value.lightBg} rounded-xl flex items-center justify-center mb-4 border-2 border-[#f9f081]/30`}
                >
                  <value.icon
                    className={`w-7 h-7 ${value.color.replace("bg-", "text-")}`}
                  />
                </div>
                <h3 className="mb-2 font-serif font-bold text-card-foreground text-lg">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed text-justify">
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
