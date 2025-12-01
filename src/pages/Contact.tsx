import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "Discord",
      detail: "@Rokkybith",
      description: "Fastest way to reach me"
    },
    {
      icon: Mail,
      title: "Email",
      detail: "contact@rokkybith.com",
      description: "For detailed inquiries"
    },
    {
      icon: MapPin,
      title: "Location",
      detail: "UK",
      description: "Remote work available"
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
            Let's Improve Your Steam Page or Trailer
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're preparing for a demo, showing at an event, or polishing your store page…
            <br />
            <span className="text-foreground font-semibold">
              I'll help you understand what needs to be improved and why.
            </span>
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex p-4 bg-secondary rounded-full mb-4">
                      <method.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-lg mb-2">{method.title}</h3>
                    <p className="text-primary font-semibold mb-2">{method.detail}</p>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="bg-gradient-card border-border glow-border">
              <CardHeader>
                <CardTitle className="text-3xl font-display font-bold text-center">
                  Free Review
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6 pb-8">
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Click below to request a free Steam page or trailer review.
                  <br />
                  I'll respond quickly with practical notes you can apply immediately.
                </p>
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border text-lg px-12 py-6"
                  onClick={() => window.open('https://discord.com', '_blank')}
                >
                  → Request Free Review
                </Button>
                <p className="text-sm text-muted-foreground">
                  Limited availability • Quick turnaround • No commitment required
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <Card className="bg-secondary border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-display font-bold mb-4">What to Expect</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <p className="font-semibold text-primary mb-2">1. Send Your Materials</p>
                    <p className="text-muted-foreground">Share your Steam page link or trailer</p>
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-2">2. Get Feedback</p>
                    <p className="text-muted-foreground">Receive clear, actionable notes</p>
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-2">3. Implement Changes</p>
                    <p className="text-muted-foreground">Apply improvements immediately</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
