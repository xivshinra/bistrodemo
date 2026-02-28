"use client";

// IMPORTS
import { useState } from "react";
import { CategorySelector } from "@/components/admin/CategorySelector";
import { CustomFilters } from "@/components/admin/CustomFilters";
import { DisplayItems } from "@/components/admin/DisplayItems";
import { Badge } from "@/components/ui/badge";
import { menuData, type MenuItem } from "@/datas/placeholder-datas";

// CONSTANTS
const categoryLabels: Record<string, string> = {
  drinks: "Boissons",
  burgers: "Burgers",
  pizzas: "Pizzas",
};

// COMPONENT
export default function AdminPage() {
  const [category, setCategory] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>([]);

  const items: MenuItem[] = category
    ? menuData[category as keyof typeof menuData]
    : [];

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        <h1 className="text-xl font-medium">
          Gérer la carte
          {category && (
            <Badge
              variant="secondary"
              className="ml-2"
            >
              {categoryLabels[category]}
            </Badge>
          )}
        </h1>
        <CategorySelector onValueChange={setCategory} />
      </div>

      {!category && (
        <p className="text-muted-foreground text-sm lg:text-base mt-16 text-center">
          Sélectionnez une catégorie pour afficher les articles.
        </p>
      )}

      {category && (
        <>
          <CustomFilters
            items={items}
            onFilterChange={setFilteredItems}
          />
          <DisplayItems items={filteredItems} />
        </>
      )}
    </>
  );
}
