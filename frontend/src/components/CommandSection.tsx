import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send, Upload, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import NavigationHeader from "./NavigationHeader";
import { backendUrl, pdfEndpoint } from "@/utils/constants";

const CommandSection: React.FC = () => {
  const [input, setInput] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    localStorage.setItem("topic", input);
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      fetch(`${backendUrl}${pdfEndpoint}`, {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (!response.ok) {
            console.error("Upload failed:", response.statusText);
          }
          return response.json();
        })
        .then((jsonData) => {
          console.log("Response JSON:", jsonData);
          localStorage.setItem(
            "topic",
            localStorage.getItem("topic") || "" + jsonData.summary
          );
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
          return;
        });
    } else {
      localStorage.removeItem("file");
    }

    navigate("/characters");
  };

  return (
    <div>
      <NavigationHeader />

      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-2">
            Start Your Learning Journey
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Enter a topic or upload a PDF to begin your personalized learning
            experience.
          </p>

          <Card className="backdrop-blur-sm bg-background/80 border shadow-lg p-4">
            <div className="relative">
              <Input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Type what you want to learn here..."
                className="pr-24 py-6 text-lg"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <label htmlFor="file-upload" className="cursor-pointer">
                  <Upload className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </label>
                <Input
                  id="file-upload"
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <Button
                  onClick={handleSubmit}
                  size="icon"
                  className="rounded-full"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
            {file && (
              <div className="mt-4 flex items-center gap-2 p-2 rounded-lg bg-muted">
                <span className="text-sm truncate flex-grow">{file.name}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setFile(null)}
                  className="p-1"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            )}
          </Card>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>Examples:</p>
            <ul className="mt-2 space-y-2">
              <li>"Explain quantum entanglement in simple terms"</li>
              <li>"What are the key events of the Renaissance period?"</li>
              <li>"How does photosynthesis work?"</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CommandSection;
