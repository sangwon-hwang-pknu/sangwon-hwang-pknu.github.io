---
layout: page
title: Integrated Sensing and Communication
description: integrated sensing and communication description
img: assets/img/7.jpg
importance: 2
category: scenario
---

This section is about broad description of Integrated Sensing and Communication (ISAC) systems.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/figure7_1.jpg" title="project1_figure1" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This figure includes signal, communication technology, and communication scenario.
</div>

Integrated Sensing and Communication (ISAC) is rapidly emerging as a cornerstone of next-generation wireless technologies, particularly within the evolving vision of 6G networks. 
This innovative paradigm seeks to unify radar-based sensing and wireless communication functionalities within a single, co-designed system. Rather than treating sensing and communication as parallel but separate systems, ISAC proposes a convergence that enables perceptive mobile networks (PMNs), where infrastructure not only transmits data but also acquires real-time environmental awareness. 
Such integration yields substantial benefits—enhanced spectrum efficiency, hardware reuse, energy conservation—and unlocks a broad spectrum of applications, including autonomous driving, disaster response, smart manufacturing, digital twins, and the broader low-altitude economy. 
Recognized by international standards organizations such as the ITU as a core element of 6G, ISAC is poised to redefine the functional scope of wireless networks.

For researchers and developers, the technical foundation of ISAC offers a rich domain for innovation. A critical area involves the design of novel waveforms that jointly optimize sensing and communication performance, categorized into communication-centric, sensing-centric, and jointly optimized approaches. Signal processing techniques are evolving to address the complex demands of simultaneous data transfer and environmental interpretation, incorporating advanced tools for target detection, interference mitigation, and multi-parameter estimation. 
In parallel, artificial intelligence and machine learning are playing an increasingly vital role, not only in improving estimation accuracy but also in dynamically adapting system behavior to shifting network and sensing conditions. 
Furthermore, Reconfigurable Intelligent Surfaces (RIS) add a new dimension of capability by dynamically shaping the radio environment, enabling robust performance in both line-of-sight and obstructed scenarios.

From a systems and architectural perspective, ISAC research is exploring new sensing topologies, dynamic switching frameworks, and efficient multi-domain resource allocation strategies. 
These developments address key challenges in balancing the performance requirements of sensing and communication, particularly under constrained spectrum, hardware, and energy resources. 
Yet, despite significant advances, many open questions remain—how to optimize the sensing-communication trade-off, ensure data privacy and security, and create unified evaluation metrics for system benchmarking. Active efforts from global standardization bodies (e.g., 3GPP, ETSI), industry leaders, and academic research institutions are driving progress. 
For authors, ISAC represents not only a timely and impactful research opportunity but a foundational shift in how wireless systems will operate, interact with their environments, and support the next wave of intelligent applications.


Every project has a beautiful feature showcase page.
It's easy to include images in a flexible 3-column grid format.
Make your photos 1/3, 2/3, or full width.

To give your project a background in the portfolio page, just add the img tag to the front matter like so:

    ---
    layout: page
    title: project
    description: a project with a background image
    img: /assets/img/12.jpg
    ---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images.
Say you wanted to write a little bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
