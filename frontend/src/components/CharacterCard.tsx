import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"; 

interface CharacterCardProps {
  name: string;
  image: string;
  onSelect: () => void;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ name, image, onSelect }) => {
  return (
    <Card onClick={onSelect} className="cursor-pointer hover:shadow-xl transition-all">
      <CardHeader>
        <CardTitle className="text-lg font-bold">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <img src={image} alt={name} className="w-full h-48 object-cover rounded-md" />
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
