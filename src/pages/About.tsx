import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Clock, Shield, Target, Zap } from "lucide-react";

const About = () => {
  const approaches = [
    {
      icon: MessageSquare,
      title: "Clear communication",
      description: "No jargon, just straightforward advice"
    },
    {
      icon: Zap,
      title: "No complicated marketing words",
      description: "Simple language that makes sense"
    },
    {
      icon: Target,
      title: "Straightforward, actionable feedback",
      description: "Advice you can implement immediately"
    },
    {
      icon: Clock,
      title: "Quick turnaround",
      description: "Fast responses when you need them"
    },
    {
      icon: Shield,
      title: "Honest guidance",
      description: "Real feedback that helps you improve"
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
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 glow-text">
            About Rokkybith
          </h1>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <p className="text-xl leading-relaxed">
              I specialize in helping indie developers make their Steam pages and trailers more appealing, readable, and effective.
            </p>
            <p className="text-lg text-muted-foreground">
              My focus is simple:
            </p>
            <p className="text-2xl font-display font-bold text-primary">
              Small improvements that create big differences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I've worked on multiple indie titles across different genres, supporting teams with store pages, trailers, and visibility strategies.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-display font-bold text-center mb-8">My Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {approaches.map((approach, index) => (
                <motion.div
                  key={approach.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 h-full">
                    <CardContent className="p-6 flex items-start space-x-4">
                      <div className="p-3 bg-secondary rounded-lg flex-shrink-0">
                        <approach.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{approach.title}</h3>
                        <p className="text-sm text-muted-foreground">{approach.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center bg-gradient-card p-12 rounded-2xl border border-border glow-border"
          >
            <p className="text-xl leading-relaxed">
              If you're a solo developer or small studio, I'm here to make your game's presentation stronger — without stress or big budgets.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
