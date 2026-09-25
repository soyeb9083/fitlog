export interface ILIBRARY {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | string;
  duration: number; // in minutes
  caloriesBurned: number;
  sets: number;
  reps: string; // e.g., "6-8"
  rating: number;
  description: string;
  instructions: string[];
}