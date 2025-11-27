import {
  Sparkles,
  Star,
  Gift,
  Tags,
  Package,
  ShoppingBag,
  Candy,
  Heart,
  Leaf,
  Flame,
  Snowflake,
  Sun,
  Palette,
  Key,
  Hand,
  Boxes,
  Baby,
  BadgePercent,
  PartyPopper,
  Rocket,
  LayoutGrid,
  ShoppingCart,
  Crown,
  Box,
} from "lucide-react";

export const iconMap = {
  // --- Pokémon ---
  pokemon: Sparkles,
  pikachu: Star,
  "eevee-evolutions": Heart,
  "starter-pokemon": Flame,

  bulbasaur: Leaf,
  charmander: Flame,
  squirtle: Snowflake,

  legendary: Crown,
  cute: Candy,
  "pokemon-mini": Baby,
  "all-pokemon": LayoutGrid,

  // --- Amigurumi ---
  amigurumi: Package,
  mini: Baby,
  medium: Box,
  large: Boxes,
  xl: Boxes,
  premium: Star,
  combo: ShoppingBag,

  // --- Accessories ---
  accessories: Hand,
  keychain: Key,
  "bag-charm": ShoppingBag,
  "decor-charm": Palette,
  "mini-figure": Sparkles,
  "desk-decor": Sun,

  // --- Gifts ---
  gifts: Gift,
  birthday: PartyPopper,
  love: Heart,
  kids: Baby,
  seasonal: Sun,

  noel: Snowflake,
  tet: Sparkles,
  valentine: Heart,

  // --- Collections ---
  collections: Crown,
  bestseller: Star,
  "new-arrivals": Sparkles,
  limited: Rocket,

  themes: Palette,
  halloween: Flame,
  christmas: Snowflake,
  summer: Sun,

  // --- Sale ---
  sale: Tags,
  "flash-sale": Flame,
  "bundle-sale": Boxes,
  clearance: BadgePercent,
};
