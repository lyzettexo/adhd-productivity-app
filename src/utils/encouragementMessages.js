export const encouragementMessages = [
  "You started. That's the hardest part.",
  "One small step is enough.",
  "You're in motion now.",
  "You showed up. Keep going.",
  "The first step is done.",
  "You don't have to finish it all right now.",
  "Small start. Real progress.",
];

export function getRandomEncouragement() {
  const randomIndex = Math.floor(Math.random() * encouragementMessages.length);

  return encouragementMessages[randomIndex];
}
