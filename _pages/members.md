---
layout: page
title: members
permalink: /members/
nav: true
nav_order: 7
display_categories: [professor, alumni, students, co-researcher]
horizontal: false
---

<!-- pages/members.md -->
<div class="members">
{% if site.enable_member_categories and page.display_categories %}
  <!-- Display categorized members -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_members = site.members | where: "category", category %}
  {% assign sorted_members = categorized_members | sort: "importance" %}
  <!-- Generate cards for each member -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for member in sorted_members %}
      {% include members_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for member in sorted_members %}
      {% include members.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display members without categories -->

{% assign sorted_members = site.members | sort: "importance" %}

  <!-- Generate cards for each member -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for member in sorted_members %}
      {% include members_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for member in sorted_members %}
      {% include members.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>