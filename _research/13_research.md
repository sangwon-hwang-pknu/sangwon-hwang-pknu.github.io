---
layout: page
title: Physical Layer Security
description: Physical Layer Security provides an information-theoretic approach to securing wireless communication by exploiting the physical characteristics of the wireless channel.
img: assets/img/projects/Security/figure13_0.png
importance: 13
category: scenario
---

Physical Layer Security (PLS) has emerged as a fundamental paradigm for securing wireless communications by leveraging the inherent randomness and physical characteristics of the wireless channel. Unlike traditional cryptographic methods that operate at higher network layers, PLS provides an additional layer of defense that is information-theoretically secure, making it robust against the ever-increasing computational power of potential eavesdroppers.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/Security/figure13_1.png" title="project13_security_figure0" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Overview of Physical Layer Security (PLS) techniques for secure wireless transmissions.
</div>

Our research in this domain focuses on the design and optimization of advanced signal processing techniques to ensure secure data transmission in highly dynamic and vulnerable environments. We investigate various PLS strategies, such as:
- **Artificial Noise (AN) Injection:** Strategically adding noise to the transmitted signal to degrade the eavesdropper's channel while minimizing the impact on the legitimate receiver.
- **Secure Beamforming:** Designing transmit weight vectors to maximize the secrecy rate by focusing signal energy toward the intended user and creating nulls or interference at potential eavesdropping locations.
- **Cooperative Jamming:** Utilizing friendly relays or nodes to transmit jamming signals that specifically target malicious eavesdroppers.

A significant portion of our work is dedicated to **Secure UAV Communication Systems**. Due to their line-of-sight (LoS) dominant channels and high mobility, UAVs are particularly susceptible to eavesdropping and jamming. We develop resource allocation and trajectory optimization algorithms that jointly consider communication efficiency and physical layer security to protect UAV-aided networks.

Furthermore, we are actively exploring **Covert Communications**, a specialized branch of PLS where the goal is to hide the very existence of the communication process from an adversary (the "warden"). This is achieved by carefully controlling transmission power and utilizing sophisticated embedding techniques, such as power-domain binary embedding, to ensure that the transmitted signal is indistinguishable from background noise or legitimate traffic. Our recent work in multi-antenna two-way relay systems and energy harvesting networks demonstrates the potential of covert communication in enhancing the privacy and security of next-generation wireless systems.
          