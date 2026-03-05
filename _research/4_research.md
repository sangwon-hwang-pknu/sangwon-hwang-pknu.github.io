---
layout: page
title: Deep Reinforcement Learning
description: Deep reinforcement learning (DRL) combines deep learning and reinforcement learning principles to enable agents to learn optimal actions in complex, dynamic environments.
img: assets/img/projects/DRL/figure8_0.png
importance: 4
category: milestone
---

Deep Reinforcement Learning (DRL) is a powerful framework for training intelligent agents to make optimal decisions in complex and dynamic environments. By combining the representation learning capabilities of deep neural networks with the goal-oriented learning of reinforcement learning, DRL agents can learn high-level features from raw sensory inputs and map them directly to actions that maximize cumulative rewards.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/DRL/figure4_0_1.png" title="project4_DRL_figure1" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The classic agent-environment interaction loop in Deep Reinforcement Learning.
</div>

DRL has achieved remarkable success in diverse fields, ranging from game-playing (e.g., AlphaGo) to robotics and automated industrial control. In the context of wireless communication, DRL is increasingly used to solve challenging problems like dynamic resource allocation, intelligent spectrum management, and adaptive trajectory planning for aerial vehicles. Our research focuses on developing more sample-efficient and stable DRL algorithms that can be deployed in real-world systems with safety guarantees.

We also investigate how to handle high-dimensional and continuous action spaces, which are common in engineering problems. By exploring actor-critic methods and off-policy learning, we aim to build robust agents capable of navigating the trade-offs between exploration and exploitation in highly uncertain and time-varying environments.
