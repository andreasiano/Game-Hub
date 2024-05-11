import { useEffect, useState } from "react";
import logo from '../assets/6zhGBKQpPrlLNI2a7EfALNs1.webp'

// Placeholder data for testing
const placeholderGames: Game[] = [
  {
    id: 1,
    name: "The Witcher 3 Wild Hunt",
    background_image: logo,
    parent_platforms: [
      { platform: { id: 1, name: "PC", slug: "pc" } }, // Corrected structure
      { platform: { id: 2, name: "Xbox", slug: "xbox" } }, // Corrected structure
      // Add more parent platforms as needed
    ],
  },
  {
    id: 2,
    name: "God of War Ragnarok God of War Ragnarok",
    background_image: logo,
    parent_platforms: [
      { platform: { id: 1, name: "PC", slug: "pc" } }, // Corrected structure
      { platform: { id: 2, name: "Xbox", slug: "xbox" } }, // Corrected structure
      // Add more parent platforms as needed
    ],
  },
  {
    id: 3,
    name: "God of War Ragnarok",
    background_image: logo,
    parent_platforms: [
      { platform: { id: 1, name: "PC", slug: "pc" } }, // Corrected structure
      { platform: { id: 2, name: "Xbox", slug: "xbox" } }, // Corrected structure
      // Add more parent platforms as needed
    ],
  },
  {
    id: 4,
    name: "God of War Ragnarok",
    background_image: logo,
    parent_platforms: [
      { platform: { id: 1, name: "PC", slug: "pc" } }, // Corrected structure
      { platform: { id: 2, name: "Xbox", slug: "xbox" } }, // Corrected structure
      // Add more parent platforms as needed
    ],
  },
  // Add more placeholder games as needed
];

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setGames(placeholderGames);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return { games };
};

export default useGames;
