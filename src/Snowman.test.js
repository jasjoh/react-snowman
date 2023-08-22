import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";

import img0 from "./0.png";
import img1 from "./1.png";

/*
 * Snowman Props:
 * - maxWrong: how many wrong moves is a player allowed?
 * - images: array of images for wrong guess
 * - words: array of words to pick answer from
*/

const maxWrong = 2;
const images = [img0, img1];
const words = ['to'];

/************* Basic Tests **************/

it("Tests to make sure guesses are limited.", function() {
  const { container } = render(
    <Snowman maxWrong={ maxWrong } images={ images } words={ words } />);

  const ltrA = container.querySelector('button[value="a"]');
  const ltrB = container.querySelector('button[value="b"]');

  fireEvent.click(ltrA); // 1 bad guess
  fireEvent.click(ltrB); // 2 bad guesses

  // test to make sure no buttons show AND 'You lose' is displayed.
  expect(container.querySelector('button[value="a"]')).not.toBeInTheDocument();
  expect(container.querySelector('.Snowman-result-lose')).toBeInTheDocument();
});