import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Gamepad2, 
  Brain, 
  TrendingUp, 
  Target, 
  CheckCircle2, 
  FileText, 
  Download,
  Zap,
  Users,
  Lightbulb,
  ArrowRight,
  DollarSign,
  Clock,
  MessageSquare,
  FileCheck
} from "lucide-react";

const GameAudit = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const reviewCategories = [
    {
      icon: Gamepad2,
      title: "Core Gameplay & Mechanics",
      items: [
        "Core loop clarity and engagement",
        "Balance, pacing, and difficulty curves",
        "Whether mechanics support your game's vision"
      ]
    },
    {
      icon: Brain,
      title: "Player Experience (UX & Feel)",
      items: [
        "First-time user experience (FTUE)",
        "Controls, feedback, and responsiveness",
        "Clarity of goals, rules, and progression"
      ]
    },
    {
      icon: TrendingUp,
      title: "Retention & Engagement",
      items: [
        "Early drop-off risks",
        "Motivation systems (rewards, progression, tension)",
        "What keeps players coming back — or pushes them away"
      ]
    },
    {
      icon: Target,
      title: "Market & Positioning",
      items: [
        "How your game compares to similar titles",
        "Whether features match player expectations",
        "What makes your game stand out (or blend in)"
      ]
    }
  ];

  const deliverables = [
    "A clear breakdown of strengths and weaknesses",
    "Specific improvement suggestions, not theory",
    "Priority recommendations (what to fix first)",
    "Practical ideas you can actually implement"
  ];

  const targetAudience = [
    "Indie game developers",
    "Small studios",
    "Solo devs feeling stuck",
    "Teams preparing for launch, Early Access, or a major update"
  ];

  const sampleAudits = [
    {
      title: "World War ToonZ",
      type: "Complete Analysis & Strategic Recommendations",
      score: "22/100",
      status: "Critical Review",
      downloadUrl: "/samples/World_War_ToonZ_Complete_Audit.pdf"
    },
    {
      title: "Isekai: FPS Hero",
      type: "Marketing Opportunity Assessment",
      score: "Strong Product",
      status: "Needs Marketing",
      downloadUrl: "/samples/Isekai_FPS_Hero_Steam_Marketing_Audit.pdf"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            {...fadeInUp}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6"
            >
              <Gamepad2 className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Game Audit for Developers</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              See What Works, Fix What Doesn't,{" "}
              <span className="text-primary">Ship Smarter</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Building a game is hard. Knowing why players drop off, what features actually matter, 
              and where to focus next is even harder. That's where the Game Audit comes in.
            </motion.p>

            <motion.p
              className="text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              I analyze your game from both a player's perspective and a developer's reality to help you understand 
              what's working, what's hurting retention or fun, and what to improve next for the biggest impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border text-lg px-8 py-6"
              >
                <a href="https://discord.com/channels/@me/1445340238934179890" target="_blank" rel="noopener noreferrer">
                  👉 Get Your Audit
                </a>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
              >
                <a href="https://discord.com/channels/@me/1445340238934179890" target="_blank" rel="noopener noreferrer">
                  💬 Contact Me to Discuss
                </a>
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-sm text-muted-foreground mt-6"
            >
              No vague feedback. No generic advice. Just clear, actionable insights.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What Is a Game Audit */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-display font-bold">What Is a Game Audit?</h2>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8">
              A game audit is a deep evaluation of your game's design, experience, and performance. 
              It helps you answer questions like:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                "Why aren't players sticking around?",
                "Is my core loop actually fun?",
                "Where do players feel confused or frustrated?",
                "What should I prioritize before launch or the next update?"
              ].map((question, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border"
                >
                  <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{question}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-lg text-primary font-semibold text-center">
              This audit is designed to save you time, money, and guesswork.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What I Review */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">What I Review</h2>
            <p className="text-lg text-muted-foreground">
              Each audit is tailored to your game, but typically covers:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {reviewCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <category.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-display font-bold">{category.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <FileText className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">What You'll Get</h2>
            <p className="text-lg text-muted-foreground mb-8">
              After the audit, you'll receive:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {deliverables.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-left">{item}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-muted-foreground italic">
              Think of it as a roadmap for smarter development, not a lecture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <DollarSign className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Simple Pricing</h2>
            <p className="text-lg text-muted-foreground">
              One price. Full audit. No hidden fees.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-lg mx-auto"
          >
            <Card className="bg-gradient-card border-primary/50 glow-border overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-primary/10 p-6 text-center border-b border-border">
                  <h3 className="text-2xl font-display font-bold mb-2">Complete Game Audit</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl md:text-6xl font-display font-bold text-primary">$50</span>
                    <span className="text-muted-foreground">/ audit</span>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <FileCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Full Professional Audit</p>
                      <p className="text-sm text-muted-foreground">Comprehensive analysis of your game</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Gameplay & Mechanics Review</p>
                      <p className="text-sm text-muted-foreground">Core loop, balance, and pacing analysis</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">UX & Player Experience</p>
                      <p className="text-sm text-muted-foreground">First-time experience, controls, clarity</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Retention & Engagement</p>
                      <p className="text-sm text-muted-foreground">Drop-off risks and motivation systems</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Market Positioning</p>
                      <p className="text-sm text-muted-foreground">Competitive analysis and differentiation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Fast Turnaround</p>
                      <p className="text-sm text-muted-foreground">Delivered within 3-5 business days</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Follow-up Support</p>
                      <p className="text-sm text-muted-foreground">Questions answered after delivery</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 pt-0">
                  <Button 
                    asChild 
                    size="lg" 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-border text-lg py-6"
                  >
                    <a href="https://discord.com/channels/@me/1445340238934179890" target="_blank" rel="noopener noreferrer">
                      👉 Get Your Audit Now
                    </a>
                  </Button>
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    Pay after you're satisfied with the audit
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Sample Audits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Download className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Sample Audits</h2>
            <p className="text-lg text-muted-foreground">
              See what a professional game audit looks like. Download these real examples:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {sampleAudits.map((audit, index) => (
              <motion.div
                key={audit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-display font-bold mb-2">{audit.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{audit.type}</p>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        {audit.score}
                      </span>
                      <span className="px-3 py-1 bg-secondary text-muted-foreground text-sm rounded-full">
                        {audit.status}
                      </span>
                    </div>
                    <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <a href={audit.downloadUrl} download>
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Users className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Who This Is For</h2>
            <p className="text-lg text-muted-foreground mb-8">
              This audit is perfect for:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {targetAudience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border"
                >
                  <Zap className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-muted-foreground">
              Whether your game is a prototype or already live, feedback at the right time can change everything.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Rokkybith */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Why Rokkybith?</h2>
            <p className="text-lg text-muted-foreground mb-4">
              I focus on <span className="text-foreground font-semibold">clarity, honesty, and usefulness</span>.
            </p>
            <p className="text-muted-foreground mb-4">
              I don't tell you what you want to hear — I tell you what helps your game succeed.
              The goal isn't to criticize your work, but to help you make it better.
            </p>
            <p className="text-lg text-primary font-semibold">
              Your game deserves feedback that's thoughtful, structured, and actionable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center bg-gradient-card p-12 rounded-2xl border border-border glow-border"
          >
            <h2 className="text-3xl font-display font-bold mb-4">Ready to Improve Your Game?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              If you want to understand your game better and make smarter decisions going forward, 
              a Game Audit is a great place to start.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border text-lg px-8 py-6"
              >
                <a href="https://discord.com/channels/@me/1445340238934179890" target="_blank" rel="noopener noreferrer">
                  👉 Get Your Audit
                </a>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
              >
                <a href="https://discord.com/channels/@me/1445340238934179890" target="_blank" rel="noopener noreferrer">
                  💬 Contact Me to Discuss
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GameAudit;
