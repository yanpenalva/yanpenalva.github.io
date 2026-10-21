export const SCRAMBLE_MOVES = [
  { axis: "x", layer: 1, direction: 1 },
  { axis: "y", layer: -1, direction: 1 },
  { axis: "z", layer: 1, direction: -1 },
  { axis: "x", layer: -1, direction: 1 },
];

export const createCubeSequence = (moves = SCRAMBLE_MOVES) => [
  ...moves.map((move) => ({ ...move })),
  ...moves.slice().reverse().map((move) => ({ ...move, direction: -move.direction })),
];
