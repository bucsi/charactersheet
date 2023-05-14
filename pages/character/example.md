---
attributes: !file "example/attributes.yml"
---

<div class="two columns">
<article>

# Example
Human Bard, Level 1

</div>
<div class="six columns">
{{#attributes}}
<div class="primary card">

## {{name}} {{modifier}}
{{value}}
</div>
{{/attributes}}

</div>