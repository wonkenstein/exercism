/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Get the first card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the first card in the deck
 */
export function getFirstCard(deck) {
  // throw new Error("Implement the getFirstCard function");
  // return [...deck].slice(0, 1);
  const [first] = deck;
  return first;
}

/**
 * Get the second card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the second card in the deck
 */
export function getSecondCard(deck) {
  // throw new Error("Implement the getSecondCard function");
  const [first, second] = deck;
  return second;
}

/**
 * Switch the position of the first two cards in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck with reordered cards
 */
export function swapTopTwoCards(deck) {
  // throw new Error("Implement the swapTopTwoCards function");
  // const updated = [...deck];
  // const first = getFirstCard(updated);
  // const second = getSecondCard(updated);

  // updated[0] = second;
  // updated[1] = first;
  // return updated;
  const [first, second, ...rest] = deck;
  return [second, first, ...rest];
  // return [getSecondCard(deck), getFirstCard(deck)].concat(deck.slice(2));
}

/**
 * Put the top card of the given deck into a separate discard pile
 *
 * @param {Card[]} deck
 *
 * @returns {[Card, Card[]]} the top card of the given
 * deck and a new deck containing all the other cards
 */
export function discardTopCard(deck) {
  // throw new Error("Implement the discardTopCard function");
  const [first, ...rest] = deck;
  return [first, rest];
  // return [getFirstCard(deck), deck.slice(1)];
}

/** @type {Card[]} **/
const FACE_CARDS = ["jack", "queen", "king"];

/**
 * Insert face cards into the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck where the second,
 * third, and fourth cards are the face cards
 */
export function insertFaceCards(deck) {
  // throw new Error("Implement the insertFaceCards function");
  const [first, rest] = discardTopCard(deck);
  return [first, ...FACE_CARDS, ...rest];
  // return [splitCards[0]].concat(FACE_CARDS).concat(splitCards[1]);
}
