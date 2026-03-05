---
layout: page
title: Single-Agent Deep Reinforcement Learning
description: To optimize key factors of communication systems in centralized manner, we propose single-agent deep reinforcement learning framework.
img: assets/img/projects/DRL/figure8_0.png
importance: 1
category: framework
---

Single-Agent Deep Reinforcement Learning (SADRL) serves as a foundational framework for centralized optimization in complex communication systems. In this paradigm, a single intelligent agent observes the entire state of the network and makes global decisions to maximize a unified objective, such as total network throughput, energy efficiency, or fairness among users.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/DRL/figure8_0.png" title="project8_SADRL_figure1" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Centralized Deep Reinforcement Learning architecture for global network optimization.
</div>

The primary advantage of SADRL is its ability to find globally optimal or near-optimal policies by considering the complex interdependencies between different network components. For instance, in a centralized Radio Access Network (C-RAN), an SADRL agent can jointly optimize power control, beamforming vectors, and subchannel allocation across multiple base stations. This holistic view eliminates the coordination overhead and competition issues inherent in decentralized systems.

Our research in SADRL focuses on addressing the "curse of dimensionality" when dealing with large-scale networks. We investigate techniques such as state abstraction, action space decomposition, and specialized neural network architectures (e.g., Duelling DQN, DDPG) to ensure stable convergence and efficient learning even in high-dimensional environments. We also emphasize the integration of domain-specific knowledge into the reward function design to guide the agent toward physically meaningful and reliable solutions.
