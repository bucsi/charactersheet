---
attributes: !file "ruby/attributes.yml"
features: !file "ruby/features.yml"
---

<article class="three columns">
<div class="card">

# Ruby

Warlock (Fiend, Pact of the Chain), Level 10

</div>

<div class="primary card">

## AC 10

## Speed 30ft

## Initiative +2

</div>

<div class="primary card">

## HP <input data-field-name="HP" type="number" value="10">/10

## Temp: <input data-field-name="tempHP" type="number" value="0"><br>

<details>
<summary>Hit Dice and Death Saves</summary>
Hit Dice: 1d8
<input data-field-name="hitDie1" type="checkbox">
<input data-field-name="hitDie2" type="checkbox">
<input data-field-name="hitDie3" type="checkbox">
<input data-field-name="hitDie4" type="checkbox">
<input data-field-name="hitDie5" type="checkbox">
<input data-field-name="hitDie6" type="checkbox">
<input data-field-name="hitDie7" type="checkbox">
<input data-field-name="hitDie8" type="checkbox">
<input data-field-name="hitDie9" type="checkbox">
<input data-field-name="hitDie10" type="checkbox">

Death Saves

-   Success: <input data-field-name="deathSaveSuccess1" type="checkbox">
    <input data-field-name="deathSaveSuccess2" type="checkbox">
    <input data-field-name="deathSaveSuccess3" type="checkbox">
-   Failures: <input data-field-name="deathSaveFailure1" type="checkbox">
    <input data-field-name="deathSaveFailure2" type="checkbox">
    <input data-field-name="deathSaveFailure3" type="checkbox">

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

## Features
{{#features}}

<details>
<summary>

**{{name}}.**  {{short_text}} {{#charges}} <input type="checkbox" data-field-name="{{key}}"> {{/charges}}
</summary>
{{description}}
[{{source_name}}]({{source_url}})
</details>


</div>

{{/features}}