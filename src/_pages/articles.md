---
layout      : default
permalink   : /articles/
description :
---

{% for post in site.posts %}
<div class="card my-3">
  <div class="card-body">
    <h4 class="card-title">{{ post.title }}</h4>
    <p class="card-text">{{ post.excerpt | strip_html }}</p>
    <p class="card-text"><small class="text-muted">{{ post.date | date: "%Y-%m-%d" }}</small></p>
    <p class="card-text"><a href="{{ post.url | prepend: site.baseurl }}" class="card-link">Read more...</a></p>
  </div>
</div>
{% endfor %}