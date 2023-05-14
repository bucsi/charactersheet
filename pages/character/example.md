---
attributes: !file "example/attributes.yml"
---

<article class="three columns">
<div class="card">

# Example

Human Bard, Level 1

</div>

<div class="primary card">

## AC 10

## Speed 30ft

## Initiative +2

</div>

<div class="primary card">

## HP <input type="number" value="10">/10

## Temp: <input type="number" value="0"><br>

<details>
<summary>Hit Dice and Death Saves</summary>
Hit Dice: 1d8 <input type="checkbox" name="" id=""><input type="checkbox" name="" id=""><input type="checkbox" name="" id=""><input type="checkbox" name="" id=""><input type="checkbox" name="" id="">

Death Saves

-   Success: <input type="checkbox" name="" id=""><input type="checkbox" name="" id=""><input type="checkbox" name="" id="">
-   Failures: <input type="checkbox" name="" id=""><input type="checkbox" name="" id=""><input type="checkbox" name="" id="">

</details>

</div>

</article>

</section>
<div class="six columns">
{{#attributes}}
<div class="primary card">

## {{name}} {{modifier}}

{{value}}

</div>
{{/attributes}}

</div>
