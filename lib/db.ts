import { z } from "zod";

export const MealSchema = z.object({
  id: z.string(),
  name: z.string(),
  carbsPer100g: z.number().min(0),
});

export type Meal = z.infer<typeof MealSchema>;

// Initial database
const defaultMeals: Meal[] = [
  { id: "1", name: "White Rice (cooked)", carbsPer100g: 28.2 },
  { id: "2", name: "Potato (boiled)", carbsPer100g: 20.1 },
  { id: "3", name: "Bread (white)", carbsPer100g: 49.4 },
  { id: "4", name: "Pasta (cooked)", carbsPer100g: 25.1 },
  { id: "5", name: "Apple", carbsPer100g: 13.8 },
];

export const db = {
  meals: {
    list: () => [...defaultMeals],
  },
};