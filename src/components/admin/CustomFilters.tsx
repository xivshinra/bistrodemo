"use client";

// IMPORTS
import { useEffect, useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { type MenuItem } from "@/datas/placeholder-datas";

// TYPES
interface CustomFiltersProps {
  items: MenuItem[];
  onFilterChange: (filtered: MenuItem[]) => void;
}

// COMPONENT
export function CustomFilters({ items, onFilterChange }: CustomFiltersProps) {
  const [search, setSearch] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  // Derive available filter options from the current item list
  const availableTags = useMemo(() => {
    const tags = new Set<string>();
    items.forEach((item) => item.tags?.forEach((tag) => tags.add(tag)));
    return Array.from(tags);
  }, [items]);

  const availableIngredients = useMemo(() => {
    const ingredients = new Set<string>();
    items.forEach((item) =>
      item.ingredients.forEach((ing) => ingredients.add(ing)),
    );
    return Array.from(ingredients).sort();
  }, [items]);

  // Reset filters when the item list changes (category switch)
  useEffect(() => {
    setSearch("");
    setSelectedTags([]);
    setSelectedIngredients([]);
  }, [items]);

  // Apply filters whenever state changes
  useEffect(() => {
    let filtered = items;

    if (search.trim()) {
      const q = search.toLowerCase();
      filtered = filtered.filter((item) => item.name.toLowerCase().includes(q));
    }

    if (selectedTags.length > 0) {
      filtered = filtered.filter((item) =>
        selectedTags.some((tag) => item.tags?.includes(tag as never)),
      );
    }

    if (selectedIngredients.length > 0) {
      filtered = filtered.filter((item) =>
        selectedIngredients.some((ing) => item.ingredients.includes(ing)),
      );
    }

    onFilterChange(filtered);
  }, [search, selectedTags, selectedIngredients, items, onFilterChange]);

  const hasActiveFilters =
    search.trim() !== "" ||
    selectedTags.length > 0 ||
    selectedIngredients.length > 0;

  function resetFilters() {
    setSearch("");
    setSelectedTags([]);
    setSelectedIngredients([]);
  }

  return (
    <div className="flex flex-col md:items-end gap-4 my-4 lg:mb-8">
      {/* Search */}
      <div className="relative md:w-90">
        <Search
          size={14}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
        />
        <Input
          placeholder="Rechercher un produit..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9 placeholder:italic"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Effacer la recherche"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* Tags + Ingredients */}
      <div className="flex flex-wrap items-center gap-2">
        {availableTags.length > 0 && (
          <>
            <ToggleGroup
              type="multiple"
              value={selectedTags}
              onValueChange={setSelectedTags}
              variant="outline"
              size="sm"
            >
              {availableTags.map((tag) => (
                <ToggleGroupItem
                  key={tag}
                  value={tag}
                  size="sm"
                >
                  {tag}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </>
        )}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
            >
              <SlidersHorizontal size={14} />
              Ingrédients
              {selectedIngredients.length > 0 && (
                <Badge
                  variant="secondary"
                  className="ml-1"
                >
                  {selectedIngredients.length}
                </Badge>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="max-h-90 overflow-y-auto w-56"
          >
            <DropdownMenuLabel>Filtrer par ingrédient</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {availableIngredients.map((ingredient) => (
              <DropdownMenuCheckboxItem
                key={ingredient}
                checked={selectedIngredients.includes(ingredient)}
                onCheckedChange={(checked) =>
                  setSelectedIngredients((prev) =>
                    checked
                      ? [...prev, ingredient]
                      : prev.filter((i) => i !== ingredient),
                  )
                }
              >
                {ingredient}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={resetFilters}
          >
            <X size={14} />
            Réinitialiser
          </Button>
        )}
      </div>
    </div>
  );
}
