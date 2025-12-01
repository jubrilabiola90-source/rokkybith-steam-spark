import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Zap, Target, TrendingUp, Eye, Sparkles, BarChart3, Users, MousePointer } from "lucide-react";
import heroImage from "@/assets/hero-gaming.jpg";
import wishlistMetrics from "@/assets/wishlist-metrics.jpg";

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    { icon: Target, title: "Store Page Optimization" },
    { icon: TrendingUp, title: "Wishlist Growth Strategy" },
    { icon: Sparkles, title: "Trailer Structure & Hook" },
    { icon: Eye, title: "Tag Strategy + Positioning" },
    { icon: CheckCircle2, title: "Store Assets Review" },
    { icon: Zap, title: "Demo/Launch Planning" }
  ];

  const whyWorkWithMe = [
    "Practical advice — no buzzwords",
    "Fast, clear feedback you can use immediately",
    "Indie-friendly — I work with solo devs and small teams",
    "Steam-focused knowledge (wishlists, visibility, tags, assets)",
    "Flexible and easy to talk to",
    "Experience with multiple indie projects"
  ];

  const provenImpact = [
    {
      icon: MousePointer,
      metric: "+40%",
      description: "increase in Steam page click-through after rewriting descriptions and optimizing image order"
    },
    {
      icon: Eye,
      metric: "Higher",
      description: "trailer retention by restructuring the first 8 seconds of gameplay footage"
    },
    {
      icon: Users,
      metric: "Improved",
      description: "community engagement on Discord through consistent update posting and event planning"
    },
    {
      icon: TrendingUp,
      metric: "Stronger",
      description: "launch visibility for indie titles with targeted subreddit outreach and influencer lists above 5k followers"
    }
  ];

  const projects = [
    {
      name: "Isekai",
      year: "2024",
      description: "Store page improvements, hook refinement, visibility prep."
    },
    {
      name: "Little God of Abyss",
      year: "July 2024",
      description: "Trailer notes, store asset polish, positioning tweaks."
    },
    {
      name: "Roomballs",
      year: "Ongoing",
      description: "Continuous wishlist and Steam page optimization support."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            {...fadeInUp}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-display font-bold mb-6 glow-text"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              ROKKYBITH
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Indie Game Marketing Specialist
            </motion.p>
            <motion.p 
              className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Helping solo devs and small studios improve Steam visibility, wishlist growth, and store page performance.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border text-lg px-8 py-6"
              >
                <Link to="/contact">📩 Get a Free Steam Page or Trailer Review</Link>
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Clear, practical feedback to help your game stand out.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What I Help With */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold mb-4">What I Help With</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <service.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="font-semibold text-lg">{service.title}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-lg text-muted-foreground">
              Everything I do is focused on one goal:<br />
              <span className="text-foreground font-semibold">
                Helping indie devs get more discoverability with simple, effective marketing.
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold mb-4">Why Developers Work With Me</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {whyWorkWithMe.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-3 p-4 rounded-lg bg-card border border-border"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>{reason}</span>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center text-muted-foreground italic"
            >
              I don't try to impress you with fancy marketing terms — I help you understand what will actually improve your store page and visibility.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Proven Marketing Impact */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4"
          >
            <h2 className="text-4xl font-display font-bold mb-4">Proven Marketing Impact for Indie Games</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
              Clear improvements from real projects I've worked on — across Steam presence, trailer engagement, and community growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
            {provenImpact.map((impact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-secondary rounded-lg flex-shrink-0">
                        <impact.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-2xl font-display font-bold text-primary mb-2">
                          {impact.metric}
                        </div>
                        <p className="text-muted-foreground">{impact.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-card border-border overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src={wishlistMetrics} 
                  alt="Wishlist growth metrics from indie game projects" 
                  className="w-full h-auto"
                />
              </CardContent>
            </Card>
            <p className="text-sm text-muted-foreground text-center mt-4 italic">
              Note: These results are from my hands-on work with small indie teams and solo developers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold mb-4">Featured Projects</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-display font-bold mb-2">{project.name}</h3>
                    <p className="text-sm text-primary mb-4">{project.year}</p>
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/case-studies">View All Case Studies</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Free Review CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center bg-gradient-card p-12 rounded-2xl border border-border glow-border"
          >
            <h2 className="text-3xl font-display font-bold mb-4">Free Review Offer (Limited)</h2>
            <p className="text-lg text-muted-foreground mb-8">
              If you're working on a Steam page, demo, or trailer, I'll review it for free and send you improvements you can apply instantly.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border text-lg px-8 py-6">
              <Link to="/contact">→ Request a Free Review</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
