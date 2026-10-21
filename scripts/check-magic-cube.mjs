import assert from "node:assert/strict";
import { createCubeSequence, SCRAMBLE_MOVES } from "../src/three/magicCubeMoves.mjs";

const sequence = createCubeSequence();
assert.equal(sequence.length, SCRAMBLE_MOVES.length * 2);
assert.deepEqual(sequence.slice(0, SCRAMBLE_MOVES.length), SCRAMBLE_MOVES);
for (let index = 0; index < SCRAMBLE_MOVES.length; index += 1) {
  const move = SCRAMBLE_MOVES[SCRAMBLE_MOVES.length - index - 1];
  assert.deepEqual(sequence[SCRAMBLE_MOVES.length + index], { ...move, direction: -move.direction });
}
