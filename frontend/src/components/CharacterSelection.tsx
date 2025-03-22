import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "./ui/button";
import NavigationHeader from "@/components/NavigationHeader";
import { Spinner } from "./LoadingSpinner";
import { backendUrl, charactersEndpoint } from "@/utils/constants";
import { Check } from "lucide-react";

interface Character {
  name: string;
  voice_id: string;
  photo_url: string;
}

const CharacterSelection: React.FC = () => {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCharacters, setSelectedCharacters] = useState<string[]>([]);

  useEffect(() => {
    fetch(`${backendUrl}${charactersEndpoint}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  const handleCharacterSelect = (characterName: string) => {
    setSelectedCharacters((prev) => {
      if (prev.includes(characterName)) {
        return prev.filter((name) => name !== characterName);
      } else if (prev.length < 2) {
        return [...prev, characterName];
      }
      return prev;
    });
  };

  const proceed = () => {
    if (selectedCharacters.length === 2) {
      localStorage.setItem("character_1", selectedCharacters[0]);
      localStorage.setItem("character_2", selectedCharacters[1]);
      navigate("/explain");
    }
  };

  if (isLoading) return <Spinner />;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary/10 to-secondary/10">
      <NavigationHeader />
      <div className="container mx-auto px-6 py-24 flex-grow">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-2">
            Choose Your Learning Mentors
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Select two characters to embark on your learning adventure
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {characters.map((character) => {
              const isSelected = selectedCharacters.includes(character.name);
              const selectedIndex = selectedCharacters.indexOf(character.name);

              return (
                <motion.div
                  key={character.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative w-full max-w-xs"
                >
                  <Card
                    className={`relative overflow-hidden h-[350px] w-[220px] cursor-pointer transition-all duration-300 ${
                      isSelected
                        ? "ring-4 ring-primary shadow-lg scale-105"
                        : "hover:border-primary hover:shadow-md"
                    }`}
                    onClick={() => handleCharacterSelect(character.name)}
                  >
                    <div className="relative w-full h-full flex items-center justify-center">
                      {/* Character image with overlay for selected state */}
                      <div className="relative w-full h-full">
                        <img
                          src={character.photo_url}
                          alt={character.name}
                          className={`w-full h-full  rounded-lg transition-all duration-300 ${
                            isSelected ? "brightness-90" : ""
                          }`}
                        />

                        {/* Overlay for selected state */}
                        {isSelected && (
                          <div className="absolute inset-0 bg-primary/20 rounded-lg" />
                        )}
                      </div>

                      {/* Selection badge */}
                      {isSelected && (
                        <div className="absolute -top-3 right-3 bg-primary text-black text-lg font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-md z-10">
                          {selectedIndex + 1}
                        </div>
                      )}

                      {/* Selection checkmark */}
                      {isSelected && (
                        <div className="absolute -top-3 left-3 bg-primary text-black rounded-full p-1 shadow-md z-10">
                          <Check size={18} />
                        </div>
                      )}
                    </div>

                    {/* Character name */}
                    <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 text-white">
                      <h3 className="text-lg font-bold">{character.name}</h3>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <Button
              variant="default"
              size="lg"
              className={`rounded-full font-semibold transition-all duration-300 ${
                selectedCharacters.length === 2
                  ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md scale-105 cursor-pointer"
                  : "opacity-50"
              }`}
              onClick={proceed}
              disabled={selectedCharacters.length !== 2}
            >
              {selectedCharacters.length === 2
                ? "Continue with Selected Characters"
                : `Select ${2 - selectedCharacters.length} more character${
                    selectedCharacters.length === 1 ? "" : "s"
                  }`}
            </Button>
            {selectedCharacters.length > 0 && (
              <p className="text-sm text-muted-foreground mt-2">
                Selected: {selectedCharacters.join(" & ")}
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CharacterSelection;
