"use client";

import { ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";

interface CategoryCardProps {
  emoticon: string;
  label: string;
  onClick?: () => void;
}

export function CategoryCard({ emoticon, label, onClick }: CategoryCardProps) {
  return (
    <Card
      onClick={onClick}
      className="flex flex-row items-center justify-between px-4 py-3 cursor-pointer border border-border transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <span className="text-lg font-mono transition-transform duration-300 ease-out group-hover:scale-110">
          {emoticon}
        </span>
        <span className="text-sm font-medium text-foreground">{label}</span>
      </div>
      <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 ease-out group-hover:translate-x-1" />
    </Card>
  );
}
