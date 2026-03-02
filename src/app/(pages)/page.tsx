// IMPORTS

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

// COMPONENT
export default function Home() {
  return (
    <>
      <Card className="w-full min-h-80 relative bg-card/20 dark:bg-card/30 overflow-hidden border-none shadow-none rounded-none">
        <Image
          id="hero-image"
          src="/assets/restaurant.png"
          alt="Restaurant"
          width={1000}
          height={1000}
          className="absolute left-0 top-0 w-full h-full object-cover object-top aspect-video -z-10"
        />
        <CardHeader>
          <h3 className="lg:text-lg text-white font-medium">
            Bar, finger food et événements
          </h3>
        </CardHeader>
        <CardContent className="grid grid-cols-4 gap-4 max-sm:hidden">
          {/* Featured Foods */}
          <Card className="bg-card/70 hover:bg-card dark:bg-card/50 dark:hover:bg-card/90 shadow-xl border-0 sm:col-span-2 lg:col-span-1 transition-all duration-150">
            <CardHeader>
              <h4 className="text-lg font-semibold">Le Veggie</h4>
            </CardHeader>
            <CardContent>
              <Image
                src="/assets/burgers/burger-veggie.png"
                alt="Burger Végétarien"
                width={300}
                height={300}
                className="object-cover w-full mb-4"
              />
              <CardDescription className="lg:leading-6">
                Un délicieux burger végétarien avec un steak de légumes, du
                fromage fondant, de la laitue croquante, des tomates juteuses et
                une sauce spéciale maison, servi dans un pain brioché moelleux.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-card/70 hover:bg-card dark:bg-card/50 dark:hover:bg-card/90 shadow-xl border-0 sm:col-span-2 lg:col-span-1 transition-all duration-150">
            <CardHeader>
              <h4 className="text-lg font-semibold">Le BBQ Smoky</h4>
            </CardHeader>
            <CardContent>
              <Image
                src="/assets/burgers/burger-bbq.png"
                alt="Burger BBQ Smoky"
                width={300}
                height={300}
                className="object-cover w-full mb-4"
              />
              <CardDescription className="lg:leading-6">
                Un burger savoureux avec un steak de bœuf juteux, du bacon
                croustillant, des oignons caramélisés, du cheddar fondant et une
                sauce BBQ fumée, servi dans un pain brioché moelleux.
              </CardDescription>
            </CardContent>
          </Card>
        </CardContent>
        <CardFooter>
          <CardAction className="flex gap-2 lg:gap-4">
            <Button
              variant="default"
              asChild
            >
              <Link href="/menu">Voir les menus</Link>
            </Button>
            <Button variant="outline">Voir les événements</Button>
          </CardAction>
        </CardFooter>
      </Card>
    </>
  );
}
