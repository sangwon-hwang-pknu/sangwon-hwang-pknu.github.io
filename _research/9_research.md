---
layout: page
title: Multi-Agent Deep Reinforcement Learning
description: To optimize key factors of communication systems in decentralized manner, we propose multi-agent deep reinforcement learning framework.
img: assets/img/projects/DRL/figure9_0.png
importance: 2
category: framework
---

Multi-Agent Deep Reinforcement Learning (MADRL) is a framework designed for decentralized coordination and optimization in large-scale, heterogeneous systems. In contrast to single-agent approaches, MADRL consists of multiple autonomous agents, each observing only its local state and making decisions independently to achieve individual or collective goals.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/DRL/figure9_0.png" title="project9_MADRL_figure1" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Decentralized multi-agent reinforcement learning architecture with local observations and actions.
</div>

A major challenge in MADRL is the non-stationarity of the environment, where the learning process of one agent affects the others. To address this, we focus on the **Centralized Training and Decentralized Execution (CTDE)** paradigm. This framework allows agents to share global information during the offline training phase, while maintaining fully decentralized decision-making during real-time online deployment.

In the context of 6G wireless networks, MADRL is particularly effective for managing distributed resources such as edge computing tasks, autonomous drone swarms, and massive MIMO in multi-cell scenarios. Our research investigates how to ensure scalability, communication efficiency among agents, and robustness to partial observability. By developing resilient MADRL algorithms, we aim to enable high-performance, self-organizing networks that can adapt to rapid changes in topology and user demand.
