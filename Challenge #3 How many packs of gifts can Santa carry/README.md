<h1>How many packs of gifts can Santa carry?</h1>

<p>
You receive a Christmas gifts pack that Santa Claus wants to deliver to the children. <span style="color: rgb(250 202 21)">Each gift inside the pack is represented by a string</span> and it has a weight equal to the number of letters in its name. Santa Claus's sleigh can only carry a <span style="color: rgb(250 202 21)">weight limit</span>.

Santa Claus also has a list of reindeer able to help him to deliver the gifts. Each reindeer has a <span style="color: rgb(250 202 21)">maximum weight limit</span> that it can carry. The maximum weight limit of each reindeer is <span style="color: rgb(250 202 21)">equal to twice the number of letters in its name</span>.

Your task is to implement a function distributeGifts(packOfGifts, reindeers) that receives a gifts pack and a list of reindeer and returns the maximum number of gifts packs that Santa Claus can deliver. <span style="color: rgb(250 202 21)">You can't split gifts packs</span>.

</p>

```
const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// pack weights 4 + 4 + 4 = 12
// reindeers can carry (2 * 6) + (2 * 6) = 24
distributeGifts(packOfGifts, reindeers) // 2
```

<p>Things to keep in mind:</p>
<ul style="color: rgb(250 202 21)">
<li>The gifts pack can't be splitted.</li>
<li>Gifts and reindeers' names length will always be greater than 0.</li>
</ul>
