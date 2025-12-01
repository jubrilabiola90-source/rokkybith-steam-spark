import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const CaseStudies = () => {
  const cases = [
    {
      title: "Isekai Game",
      year: "2024",
      role: "Steam page optimization & marketing direction",
      challenges: "Weak initial hook, unclear page flow, low wishlists.",
      improvements: [
        "Improved the Steam page layout and tags to better match player search intent",
        "Reworked the long description to increase clarity and retain interest",
        "Created a structured feedback list for improving the trailer pacing",
        "Provided a launch plan focusing on niche communities and anime-game subreddits"
      ],
      outcomes: [
        "Developers reported higher wishlist conversions within the first week",
        "Trailer watch-through increased after implementing the new intro structure"
      ],
      result: "A clearer, more appealing Steam presence ready for visibility."
    },
    {
      title: "Little God of Abyss",
      year: "July 2024",
      role: "Trailer & store page consultation",
      challenges: "Unclear messaging, trailer lacked pacing, store assets needed direction.",
      improvements: [
        "Trailer structure notes with specific timing recommendations",
        "Store page text clarity improvements",
        "Tag adjustments for better discoverability",
        "Screenshot prioritization and ordering strategy"
      ],
      outcomes: [
        "Stronger clarity in game messaging",
        "Improved player understanding of core gameplay loop"
      ],
      result: "Stronger clarity and improved player understanding."
    },
    {
      title: "Roomballs",
      year: "2024 – Present",
      role: "Ongoing marketing support",
      challenges: "Early-stage project needing guidance before demo release.",
      improvements: [
        "Store page improvement and optimization",
        "Tag & category analysis for Steam algorithm",
        "Trailer script suggestions and structure",
        "Wishlist-building strategy and community planning"
      ],
      outcomes: [
        "Steady wishlist improvements month-over-month",
        "Better positioning for upcoming launch"
      ],
      result: "Steady wishlist improvements and better positioning for launch."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4 glow-text">
            Case Studies
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real projects, real improvements, real results.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-3xl font-display font-bold">
                      {caseStudy.title}
                    </CardTitle>
                    <Badge variant="secondary" className="text-sm">
                      {caseStudy.year}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Role: {caseStudy.role}
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">Challenges:</h3>
                    <p className="text-muted-foreground">{caseStudy.challenges}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-primary">What I did:</h3>
                    <ul className="space-y-2">
                      {caseStudy.improvements.map((improvement, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{improvement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-primary">Outcome:</h3>
                    <ul className="space-y-2">
                      {caseStudy.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-secondary rounded-lg border-l-4 border-primary">
                    <h3 className="text-lg font-semibold mb-2">Result:</h3>
                    <p className="text-muted-foreground">{caseStudy.result}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
