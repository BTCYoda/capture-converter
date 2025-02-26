
import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { Squad } from "@/types/squad";

const SQUAD_COLORS = [
  "#9b87f5",
  "#7E69AB",
  "#6E59A5",
  "#D6BCFA",
  "#805AD5",
  "#6B46C1",
];

interface CreateSquadSheetProps {
  onSquadCreate: (squad: Squad) => void;
}

const CreateSquadSheet = ({ onSquadCreate }: CreateSquadSheetProps) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedColor, setSelectedColor] = useState(SQUAD_COLORS[0]);
  const [privacy, setPrivacy] = useState<"public" | "private">("public");

  const handleCreate = () => {
    if (!name.trim()) return;

    const newSquad: Squad = {
      id: Date.now().toString(),
      name: name.trim(),
      description: description.trim(),
      color: selectedColor,
      privacy,
      createdAt: new Date(),
      memberCount: 1,
    };

    onSquadCreate(newSquad);
    setName("");
    setDescription("");
    setSelectedColor(SQUAD_COLORS[0]);
    setPrivacy("public");
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Create Squad
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Create New Squad</SheetTitle>
        </SheetHeader>
        <div className="space-y-6 py-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Squad Name</label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter squad name..."
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Description</label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your squad..."
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Squad Color</label>
            <div className="flex gap-2">
              {SQUAD_COLORS.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-lg ${
                    selectedColor === color ? "ring-2 ring-primary ring-offset-2" : ""
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Privacy</label>
            <div className="flex gap-4">
              {["public", "private"].map((type) => (
                <button
                  key={type}
                  onClick={() => setPrivacy(type as "public" | "private")}
                  className={`px-4 py-2 rounded-md border ${
                    privacy === type
                      ? "border-primary bg-primary/10"
                      : "border-gray-200"
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <Button onClick={handleCreate} className="w-full">
            Create Squad
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CreateSquadSheet;
