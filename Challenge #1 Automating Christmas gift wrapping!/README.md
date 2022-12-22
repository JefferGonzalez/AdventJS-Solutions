<h1>Automating Christmas gift wrapping!</h1>

<p>
The elves bought a gift-wrapping machine this year. But it's not programmed! <span style="color: rgb(250 202 21)">We need to create an algorithm that helps it in the task.</span>

The machine receives an array of gifts. Each gift is a string. We need the machine to wrap each gift in wrapping paper and place it in an array of wrapped gifts.

The wrapping paper is the <code>\*</code> symbol, and in order to wrap a gift, you need to place it surrounding the string. For example:

</p>

```
const gifts = ["book", "game", "socks"];
const wrapped = wrapping(gifts);
console.log(wrapped);
/* [
  "******\n*book*\n******",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
] */
```

<p>
As you can see, the wrapping paper wraps the string. On top and bottom, so as not to leave any gaps, the corners are also covered with wrapping paper.

<span style="color: rgb(250 202 21)">Note:</span> The <code>\n</code> represents a line break.

Watch out! Make sure you put the right number of <code>\*</code> symbols to wrap completely the string.

<span style="color: rgb(250 202 21)">And do not mutate the original array!</span>

</p>
