// IMPORTS
import { type MenuItem } from "@/datas/placeholder-datas";
import { MenuItemCard } from "@/components/admin/MenuItemCard";

// TYPES
interface DisplayItemsProps {
  items: MenuItem[];
}

// COMPONENT
export function DisplayItems({ items }: DisplayItemsProps) {
  if (items.length === 0) {
    return (
      <p className="text-muted-foreground text-sm mt-8 text-center">
        Aucun article ne correspond à votre recherche.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-12 gap-2 md:gap-4 lg:gap-8 my-4 lg:my-8">
      {items.map((item) => (
        <MenuItemCard
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}
