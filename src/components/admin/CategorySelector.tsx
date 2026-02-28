// IMPORTS
import { Field, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// TYPES
interface CategorySelectorProps {
  onValueChange?: (value: string) => void;
}

// COMPONENT
export function CategorySelector({ onValueChange }: CategorySelectorProps) {
  return (
    <Field className="md:w-90">
      <Select onValueChange={onValueChange}>
        <SelectTrigger>
          <SelectValue placeholder="Sélectionnez une catégorie" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem
              id="drinks"
              value="drinks"
            >
              Les boissons
            </SelectItem>
            <SelectItem
              id="burgers"
              value="burgers"
            >
              Les burgers
            </SelectItem>
            <SelectItem
              id="pizzas"
              value="pizzas"
            >
              Les pizzas
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  );
}
