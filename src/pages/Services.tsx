import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Film, TrendingUp, Image as ImageIcon, Lightbulb } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Steam Page Optimization",
      items: [
        "Your headline",
        "Short description",
        "Long description",
        "Tags",
        "Capsule clarity",
        "Screenshot selection",
        "Page order & hook placement"
      ],
      goal: "Increase wishlist conversion and Steam visibility."
    },
    {
      icon: Film,
      title: "Trailer Feedback & Structure",
      items: [
        "First 3 seconds (critical hook)",
        "Pacing",
        "Gameplay clarity",
        "Emotional beats",
        "Text cards & messaging",
        "CTA placement"
      ],
      goal: "Make your trailer instantly understandable and engaging."
    },
    {
      icon: TrendingUp,
      title: "Wishlist Growth Strategy",
      items: [
        "How to increase organic discoverability",
        "Steam events + timing",
        "Social post formats that work for devs",
        "Lightweight community tactics",
        "Early demo visibility planning"
      ],
      goal: "Increase wishlists without paid ads."
    },
    {
      icon: ImageIcon,
      title: "Store Asset Review",
      items: [
        "Capsule art",
        "Logo",
        "Screenshots",
        "Store banner",
        "Color clarity",
        "Readability"
      ],
      goal: "Improve first impressions and Click-Through Rate."
    },
    {
      icon: Lightbulb,
      title: "Positioning & Hook Clarity",
      items: [
        "What makes your game stand out",
        "How to communicate that in 1–2 sentences",
        "How to place hooks on your page and trailer"
      ],
      goal: "Make players instantly understand why your game is worth wishlisting."
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
            Services for Indie & Solo Developers
          </h1>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-4">
                    <div className="p-3 bg-secondary rounded-lg">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-display font-bold">{index + 1}. {service.title}</h2>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h3 className="font-semibold mb-3">I help you improve:</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg border-l-4 border-primary">
                    <p className="font-semibold mb-1">Goal:</p>
                    <p className="text-muted-foreground">{service.goal}</p>
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

export default Services;
