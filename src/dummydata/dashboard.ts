import type { CardPropsModel } from "../models";

export const scheduleCardElements: CardPropsModel[] = [
  {
    firstElement: "Monday",
    secondElement: "Push Day",
    thirdElement: "6 exercises",
  },
  {
    firstElement: "Tuesday",
    secondElement: "Pull Day",
    thirdElement: "5 exercises",
  },
  {
    firstElement: "Wednesday",
    secondElement: "Leg Day",
    thirdElement: "7 exercises",
  },
];

export const goalsCardElements: CardPropsModel[] = [
  {
    firstElement: "Lose Weight",
    secondElement: "Burn fat and stay in calorie deficit",
    thirdElement: "5 kg",
  },
  {
    firstElement: "Build Muscle",
    secondElement: "Increase strength and muscle mass",
    thirdElement: "+3 kg muscle",
  },
  {
    firstElement: "Improve Endurance",
    secondElement: "Run longer without fatigue",
    thirdElement: "5 km non-stop",
  },
];


export const workouts = [
  {
    workout: "Chest Day",
    type: "Strength",
    time: "01:00 PM",
    duration: "60 min",
    calories: 420,
    effort: "High",
  },
  {
    workout: "Leg Day",
    type: "Strength",
    time: "03:30 PM",
    duration: "75 min",
    calories: 600,
    effort: "Very High",
  },
  {
    workout: "HIIT Cardio",
    type: "Cardio",
    time: "10:00 AM",
    duration: "30 min",
    calories: 350,
    effort: "Very High",
  },
  {
    workout: "Back & Biceps",
    type: "Strength",
    time: "05:00 PM",
    duration: "65 min",
    calories: 480,
    effort: "High",
  },
  {
    workout: "Light Cardio",
    type: "Cardio",
    time: "08:00 AM",
    duration: "40 min",
    calories: 250,
    effort: "Medium",
  },
];

export const WorkoutHeadElements = Object.keys(workouts[0]);

export const popularExercises = [
  {
    title: "Bench Press",
    description: "34 people used it",
  },
  {
    title: "Chest Press",
    description: "20 people used it",
  },
  {
    title: "Squad",
    description: "16 people used it",
  },
  {
    title: "Seated Row",
    description: "10 people used it",
  },
];
