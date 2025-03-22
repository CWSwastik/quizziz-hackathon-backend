// FeaturesSection.tsx
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Sparkles, Clock, FileText, UserRound, BookOpen } from "lucide-react";

const features = [
  {
    icon: <Brain className="h-10 w-10" />,
    title: "AI-Powered Characters",
    description: "Learn from AI tutors with unique teaching styles and personalities"
  },
  {
    icon: <Sparkles className="h-10 w-10" />,
    title: "Personalized Learning",
    description: "Content adapts to your learning pace and style for optimal results"
  },
  {
    icon: <Clock className="h-10 w-10" />,
    title: "Learn at Your Pace",
    description: "Self-paced learning that fits into your schedule"
  },
  {
    icon: <UserRound className="h-10 w-10" />,
    title: "Interactive Sessions",
    description: "Engage in dynamic, conversation-based learning experiences"
  },
  {
    icon: <FileText className="h-10 w-10" />,
    title: "PDF Learning",
    description: "Upload PDFs and transform them into interactive lessons"
  },
  {
    icon: <BookOpen className="h-10 w-10" />,
    title: "Wide Range of Subjects",
    description: "From science to arts, learn virtually any subject with your character"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const FeaturesSection: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-3">Features that Transform Learning</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          PersonaEd combines cutting-edge AI with personalized learning approaches to 
          make education more engaging and effective.
        </p>
      </div>
      
      <motion.div 
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {features.map((feature, index) => (
          <motion.div key={index} variants={item}>
            <Card className="h-full border hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-1 w-12 bg-primary/50 rounded-full"></div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FeaturesSection;
