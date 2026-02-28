"use client";

// IMPORTS
import { useState } from "react";
import Image from "next/image";
import { Settings } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { type MenuItem, type MenuTag } from "@/datas/placeholder-datas";

// CONSTANTS
const tagVariantMap: Record<MenuTag, "default" | "secondary" | "destructive"> =
  {
    Promo: "secondary",
    Nouveau: "secondary",
    Populaire: "secondary",
    Spicy: "destructive",
    Veggie: "secondary",
    Gazeux: "secondary",
  };

// TYPES
interface MenuItemCardProps {
  item: MenuItem;
}

// COMPONENT
export function MenuItemCard({ item }: MenuItemCardProps) {
  const [available, setAvailable] = useState<boolean>(item.available);

  return (
    <Card className="col-span-12 md:col-span-6 lg:col-span-4 hover:bg-card/70 transition-all duration-300 ease-in-out">
      <CardHeader>
        <CardTitle className="flex justify-between items-center gap-2">
          <span className="truncate text-sm xl:text-base">
            {item.name} {" - "}
            {item.price.toLocaleString("fr-FR", {
              style: "currency",
              currency: "EUR",
            })}
          </span>
          {item.tags && item.tags.length > 0 && (
            <div className="flex gap-1 shrink-0 flex-wrap">
              {item.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant={tagVariantMap[tag]}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="grow">
        <Image
          src={item.image}
          alt={item.name}
          width={300}
          height={200}
          className="w-full aspect-video object-cover mb-2 md:mb-4 rounded-sm"
          loading="eager"
        />
        <CardDescription>
          <div className="flex gap-1 md:gap-2 flex-wrap">
            {item.ingredients.map((ingredient) => (
              <Badge
                key={ingredient}
                variant="ghost"
              >
                {ingredient}
              </Badge>
            ))}
          </div>
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Switch
            id={`available-${item.id}`}
            checked={available}
            onCheckedChange={setAvailable}
          />
          <Label
            htmlFor={`available-${item.id}`}
            className="text-xs cursor-pointer"
          >
            {available ? "Disponible" : "Non disponible"}
          </Label>
        </div>
        <CardAction>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
              >
                <Settings className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-primary font-bold text-xl">
                  {item.name}
                </SheetTitle>
                <SheetDescription>
                  Modifier et appuyer sur "Enregistrer".
                </SheetDescription>
              </SheetHeader>
              <SheetFooter>
                <SheetClose asChild>
                  <Button variant="outline">Annuler</Button>
                </SheetClose>
                <Button type="submit">Enregistrer</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </CardAction>
      </CardFooter>
    </Card>
  );
}
