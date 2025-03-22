// CharacterPreview.tsx
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const characters = [
  {
    id: 1,
    name: "Harry Potter",
    image: "src/assets/np.jpg",
    color: "bg-blue-500",
    speciality: null,
  },
  {
    id: 2,
    name: "Star Wars",
    image: "src/assets/starwars.jpg",
    color: "bg-purple-500",
    speciality: null,
  },
  {
    id: 3,
    name: "Marvel Universe",
    image: "src/assets/marvel.jpg",
    color: "bg-green-500",
    speciality: null,
  },
  {
    id: 4,
    name: "DC Universe",
    image: "src/assets/dc.jpeg",
    color: "bg-amber-500",
    speciality: null,
  },
];

const CharacterPreview: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-3">Meet Your Learning Characters</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Choose from a variety of AI characters, each with unique teaching styles
          and expertise in different subjects.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {characters.map((character, index) => (
          <motion.div
            key={character.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden h-full border hover:shadow-lg transition-all duration-300">
              <div className={`${character.color} h-3`}></div>
              <CardContent className="p-6">
              <div className="aspect-square rounded-full overflow-hidden mb-4 mx-auto border-4 border-background shadow-lg w-28 h-28 bg-white">
                <div
                  className="w-full h-full rounded-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${character.image})` }}
                ></div>
              </div>                
                <h3 className="text-xl font-bold text-center mb-1">{character.name}</h3>
                <p className="text-center text-muted-foreground mb-4">{character.speciality}</p>
                <Button className="w-full" variant="outline" asChild>
                  <Link to={`/chat`}>Choose Character</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Button size="lg" asChild>
          <Link to="/chat">View All Characters</Link>
        </Button>
      </div>
    </div>
  );
};

export default CharacterPreview;
