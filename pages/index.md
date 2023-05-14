---
characters: !file index.yml
---

<section class="two columns">
{{#characters}}
<a href="{{url}}">
<div class="primary card">
<img src="{{image}}">
<strong>{{name}}</strong>
</div>
{{/characters}}
</section>