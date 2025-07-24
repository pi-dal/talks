---
theme: academic
background: https://cover.sli.dev
title: '如何用四维矢量来解决狭义相对论问题'
slug: 'STR-Four-Vector'
date: '2025-07-22'
info: |
  ## 狭义相对论四维矢量方法
  基础的时空与碰撞变换

  物理竞赛学习参考资料
coverAuthor: 'pi-dal'
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
---

# 如何用四维矢量来解决狭义相对论问题

基础的时空与碰撞的变换

<div class="pt-12">
  <span class="px-2 py-1">
    物理竞赛学习参考资料
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub" title="源码"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

---
layout: table-of-contents
---

# 目录

<div style="columns: 2; column-gap: 3rem;">

<Toc minDepth="1" maxDepth="1" />

</div>

<div class="mt-12 text-center">

**📖 快速导航**

[🎯 核心要点总览](#核心要点总览) · [🔬 理论基础](#为什么要使用四维矢量) · [⚡ 实际应用](#相对论多普勒效应) · [💭 学习思考](#对四维矢量的思考)

</div>

---

# 核心要点总览

<div class="grid grid-cols-3 gap-8 text-center mt-16">

<div>
**🔬 理论基础**

四维矢量 · 洛伦兹协变性 · 能量-动量关系 · 闵可夫斯基时空
</div>

<div>
**⚡ 物理应用**

碰撞散射 · 康普顿效应 · 粒子产生湮灭 · 多普勒效应
</div>

<div>
**💭 学习价值**

优雅解题 · 物理洞察 · 竞赛实用 · 统一框架
</div>

</div>

<div class="mt-16 text-center">

**🎓 学习路径**

理解时空本质 → 掌握数学工具 → 应用解决问题 → 深化物理洞察

</div>

---

# 为什么要使用四维矢量

在学习STR的时候，我时常会为各种场景的"本征"状态而烦恼，很多练习题的解析甚至是题目本身存在着一定的谬误。

<v-click>

**问题根源**：我们脑中对时间、空间的理解建立在经典的**伽利略时空**，但在爱因斯坦的狭义相对论理论中时空并不是独立的。

</v-click>

<v-click>

**狭义相对论的两个公设**：

1. **光速不变原理**：真空中的光速在所有惯性参考系中都是同一个常数，与光源和观察者的运动状态无关
2. **相对性原理**：物理定律在所有惯性参考系中的形式都相同；不存在一个"绝对静止"的惯性系

</v-click>

<v-click>

**关键洞察**：
$$x^2+y^2+z^2-c^2t^2=0$$

这一结论来自光速不变，暗示我们需要一种新的时空描述方式。

</v-click>

---

# 闵可夫斯基时空的解决方案

<v-click>

由光速不变式：
$$x^2+y^2+z^2-c^2t^2=0$$

</v-click>

<v-click>

我们可以构造**第一组四维矢量**：
$$(x,y,z,ict)$$

很显然它在任何情况下模长都为0。

</v-click>

<v-click>

**核心思想**：狭义相对论本质上就是**洛伦兹群的不变式的理论**，通过构造闵可夫斯基时空，我们可以优雅地解决理解复杂度问题。

</v-click>

---

# 洛伦兹变换的矩阵推导

从一般变化式出发：

$$
\begin{pmatrix}
     x' \\
     y' \\
     z' \\
     ict'
\end{pmatrix}
=
\begin{pmatrix}
     a_{11} & a_{12} & a_{13} & a_{14} \\
     a_{21} & a_{22} & a_{23} & a_{24} \\
     a_{31} & a_{32} & a_{33} & a_{34} \\
     a_{41} & a_{42} & a_{43} & a_{44}
\end{pmatrix}
\begin{pmatrix}
     x \\
     y \\
     z \\
     ict
\end{pmatrix}
$$

<v-click>

考虑坐标原点$O$在$S'$系中的运动方程：
$$x' = a_{14} t, \quad y' = a_{24} t, \quad z'=a_{34} t, \quad t'=a_{44} t$$

因此有速度关系：$v_x'=-v$，$v_y'=0$，$v_z'=0$

</v-click>

---

# 洛伦兹变换推导 - 系数确定

<v-click>

对坐标原点$O'$，应有速度关系：
$$\begin{gathered}
a_{11}v + a_{14} = 0 \\
a_{21}v + a_{24} = 0 \\
a_{31}v + a_{34} = 0
\end{gathered}$$

其中$v_x=v$，$v_y=0$，$v_z=0$

</v-click>

<v-click>

不妨令$a_{44}=\gamma$，则可得到：
$$\begin{gathered}
x'=\gamma x+a_{12}y+a_{13}z-\gamma vt \\
y'=a_{22}y+a_{23}z \\
z'=a_{32}y+a_{33}z \\
t'=a_{41}x+a_{42}y+a_{43}z+\gamma t
\end{gathered}$$

</v-click>

---

# 洛伦兹变换推导 - 不变式条件

将变换式代入不变式条件：
$$x'^2+y'^2+z'^2-c^2t'^2=x^2+y^2+z^2-c^2t^2$$

<v-click>

加上位置空间的各向同性条件，由系数对比可知：
$$\begin{gathered}
\gamma = \frac{1}{\sqrt{1-\beta^2}}, \quad \beta=\frac{v}{c} \\
a_{41}=\frac{\gamma v}{c^2}, \quad a_{12}=a_{13}=a_{42}=a_{43}=0 \\
a_{22}=a_{33}=1, \quad a_{23}=a_{32}=0
\end{gathered}$$

</v-click>

<v-click>

又由$v=0$的变换为恒等变换可知$\gamma$为正。

</v-click>

---

# 洛伦兹变换矩阵

经过推导，得到完整的洛伦兹变换矩阵：

$$
\begin{pmatrix}
     x' \\
     y' \\
     z' \\
     ict'
\end{pmatrix}
=
\begin{pmatrix}
     \gamma & 0 & 0 & i \gamma \beta \\
     0 & 1 & 0 & 0 \\
     0 & 0 & 1 & 0 \\
     -i \gamma \beta & 0 & 0 & \gamma
\end{pmatrix}
\begin{pmatrix}
     x \\
     y \\
     z \\
     ict
\end{pmatrix}
$$

其中：$\gamma = \frac{1}{\sqrt{1-\beta^2}}$，$\beta=\frac{v}{c}$

---

# 基础四维矢量

除了时空坐标四维矢量，还有其他重要的四维矢量：

<div class="grid grid-cols-2 gap-12">
<div>

1. **四维波矢**：
   $$k_p=(k_x, k_y, k_z, i\frac{\omega}{c})$$
   通过 $kr-\omega t=0$ 来理解

<v-click>

2. **四维电流密度矢量**：
   $$j_p=(j_x, j_y, j_z, ic\rho)$$
   通过 $\nabla \cdot j + \frac{\partial \rho}{\partial t}=0$ 来理解

</v-click>

</div>
<div>

<v-click>

3. **四维动量矢量**：
   $$p_\mu = (p_x, p_y, p_z, i\frac{W}{c})$$

</v-click>

<v-click>

**重要关系**：
- 四维速度：$U_\mu = \frac{dx_\mu}{d\tau}=\gamma(u,ic)$
- $p_\mu = mU_\mu$，$j_p=\rho U_p$

</v-click>

</div>
</div>

---

# 四维矢量的洛伦兹协变性

**四维矢量内积定义**：
$$X \circ Y = x x' + y y' + z z' - c^2 tt'$$

<v-click>

**协变性证明**：设四维矢量$X$在$S$系中表示为$X$，在$S'$中表示为$X'$，通过洛伦兹变换矩阵$L$相关联：$X' = LX$，$Y' = LY$

</v-click>

<v-click>

变换后的内积为：
$$X' \circ Y' = (X')^T Y' = (LX)^T (LY) = X^T L^T L Y$$

</v-click>

<v-click>

由于洛伦兹变换矩阵$L$在虚时间坐标系中满足正交条件$L^T L = I$：
$$X^T L^T L Y = X^T I Y = X^T Y = X \circ Y$$

**结论**：$X' \circ Y' = X \circ Y$ - 内积在洛伦兹变换下保持不变！

</v-click>

---

# 洛伦兹协变性的物理意义

<div class="grid grid-cols-2 gap-12">
<div>

**数学意义**：
- 四维矢量内积是洛伦兹不变量
- 在任何惯性参考系中数值相同
- 正交矩阵性质确保变换的可逆性

<v-click>

**物理意义**：
- 物理定律在所有惯性系中形式相同
- 可通过构造不变量简化计算
- 无需担心参考系选择影响结果

</v-click>

</div>
<div>

<v-click>

**实际应用**：
- 四维矢量模长：$X \circ X = x^2+y^2+z^2-c^2t^2$
- 在任何参考系中都是不变的
- 为解决复杂相对论问题提供统一框架

</v-click>

<v-click>

这一特性使我们可以选择最方便的参考系进行计算，而不必担心物理结果的正确性。

</v-click>

</div>
</div>

---

# 特殊四维矢量的内积与守恒

<div class="grid grid-cols-2 gap-12">
<div>

1. **四维速度的内积**：
   $$U \circ U = -c^2$$

<v-click>

2. **四维动量的内积**：
   $$P \circ P = -m^2c^2$$
   
   利用洛伦兹协变性：
   $$P \circ P = -\left(\frac{E_{tot}}{c}\right)^2 + p^2$$
   
   注意到在静止系中：$P' \circ P' = -\left(\frac{E_0}{c}\right)^2 = -m^2c^2$

</v-click>

</div>
<div>

<v-click>

得到著名的**相对论能量-动量关系**：
$$E_{tot}^2 = E_0^2 + p^2c^2$$

</v-click>

<v-click>

3. **对光子**：
   $$E_{tot}=pc, \quad P \circ P = 0$$

光子必须以光速运动，不能静止。

</v-click>

</div>
</div>

---

# 相对论多普勒效应

由四维波矢的洛伦兹变换：

$$k'_x = \gamma\left(k_x - \frac{v}{c^2}\omega\right), \quad k'_y = k_y, \quad k'_z = k_z, \quad \omega' = \gamma(\omega - v k_x)$$

<v-click>

得到相对论多普勒效应：
$$\omega' = \gamma\omega\left(1 - \frac{v}{c}\cos\theta\right)$$

这是经典多普勒效应的相对论修正版本。

</v-click>

---
layout: figure-side
figureCaption: 粒子碰撞湮灭产生光子
figureUrl: '/pair_annihilation_hd.gif'
figureSide: right
---

# 粒子碰撞湮灭产生光子

各个粒子的四维动量：

1. **入射粒子**：$P_1=\gamma m \cdot (v, 0, 0, ic)$
2. **静止粒子**：$P_2=M \cdot (0, 0, 0, ic)$  
3. **垂直出射光子**：$P_3=\frac{hf_1}{c} \cdot (0, 1, 0, i)$
4. **倾斜出射光子**：$P_4=\frac{hf_2}{c} \cdot (\cos\theta, -\sin\theta, 0, i)$

<v-click>

由四维动量守恒 $P_1 + P_2 = P_3 + P_4$，得到：
$$\begin{gathered}
E_1 + E_2 = E_3 + E_4\\
E_1 \cdot \frac{v}{c} = E_4 \cdot \cos\theta \\
0 = E_3 - E_4 \cdot \sin\theta
\end{gathered}$$

经过计算可得：$E_1 = E_4$，$E_2 = E_3$

最终解出：$$\cos\theta = \frac{v}{c} = \sqrt{1 - \frac{E_2^2}{E_1^2}}$$

</v-click>

---
layout: figure-side
figureCaption: 光照射粒子产生新粒子对
figureUrl: '/pair_production_hd.gif'
figureSide: right
---

# 光照射粒子产生新粒子

四维动量分析：

1. **入射光子**：$P_1=\frac{hf}{c} \cdot (1, 0, 0, i)$
2. **静止粒子**：$P_2=M \cdot (0, 0, 0, ic)$
3. **新粒子系统**：$P_3$

<v-click>

由 $P_1 + P_2 = P_3$ 和平方守恒：
$$0 + 2hfM + (Mc)^2 \approx (M + 2m)^2c^2$$

</v-click>

<v-click>

得到阈值条件：
$$hf \approx 2mc^2\left(1 + \frac{m}{M}\right)$$

**重要结论**：入射光子能量必须至少是产生粒子静止能量的两倍！

</v-click>

---
layout: figure-side
figureCaption: 粒子的完全非弹性碰撞
figureUrl: '/relativistic_collision_hd.gif'
figureSide: right
---

# 完全非弹性碰撞

四维动量守恒：$P_1 + P_2 = P_3$

<v-click>

平方后得到新粒子质量：
$$m_1^2 + 2\gamma_1\gamma_2m_1m_2 \cdot \frac{(c^2-v_1v_2)}{c^2} + m_2^2 = m_3^2$$

</v-click>

<v-click>

新粒子速度：
$$v_3 = \frac{\gamma_1 m_1 v_1 + \gamma_2 m_2 v_2}{\gamma_1 m_1 + \gamma_2 m_2}$$

这展示了四维动量方法在处理复杂碰撞问题时的威力。

</v-click>

---
layout: figure-side
figureCaption: 粒子的完全弹性碰撞
figureUrl: '/elastic_collision_theta_alpha_hd.gif'
figureSide: right
---

# 完全弹性碰撞

更复杂的四维动量守恒问题：

四个粒子的四维动量：
1. $P_1=\gamma_1 m \cdot (v, 0, 0, ic)$ （入射）
2. $P_2=M \cdot (0, 0, 0, ic)$ （静止）
3. $P_3 = \gamma_3 M \cdot (w\cos\theta, w\sin\theta, 0, ic)$ （散射1）
4. $P_4 = \gamma_4 m \cdot (r\cos\alpha, r\sin\alpha, 0, ic)$ （散射2）

<v-click>

通过四维内积关系，可以解出散射角度和能量分布的精确关系。

</v-click>

---
layout: figure-side
figureCaption: 康普顿散射
figureUrl: '/compton_scattering_hd.gif'
figureSide: right
---

# 康普顿散射

经典的量子电动力学过程：

1. **入射光子**：$P_1=\frac{hf}{c} \cdot (1, 0, 0, i)$
2. **静止电子**：$P_2=m \cdot (0, 0, 0, ic)$
3. **散射光子**：$P_3 = \frac{hf'}{c} \cdot (\cos\theta, \sin\theta, 0, i)$
4. **反冲电子**：$P_4 = \gamma m \cdot (\vec{v}, ic)$

<v-click>

通过四维动量守恒的巧妙应用：
$$P_1 \circ P_2 = P_3 \circ P_4$$

</v-click>

<v-click>

得到康普顿散射的经典公式：
$$\lambda'-\lambda = \frac{h}{m_0c}(1-\cos\theta)$$

</v-click>

---

# 康普顿散射 - 详细推导

<v-click>

从四维动量守恒：$P_1 + P_2 = P_3 + P_4$

利用巧妙的内积关系：$P_1 \circ P_2 = P_3 \circ P_4$

</v-click>

<v-click>

左边：$P_1 \circ P_2 = m_0 c \cdot \frac{h}{\lambda}$

右边：$P_3 \circ P_4$需要详细计算

</v-click>

<v-click>

另外，从$P_1 \circ P_3 + P_2 \circ P_3 = P_3 \circ P_3 + P_4 \circ P_3$可得：
$$\frac{h}{\lambda} \cdot \frac{h}{\lambda'}(1-\cos \theta)+m_0 \cdot c \cdot \frac{h}{\lambda'}=m_0 \cdot c \cdot \frac{h}{\lambda}$$

重新整理即可得到经典的康普顿散射公式。

</v-click>

---
layout: figure-side
figureCaption: 逆康普顿散射
figureUrl: '/inverse_compton_scattering_hd.gif'
figureSide: right
---

# 逆康普顿散射

高能电子与低能光子的相互作用：

1. **入射光子**：$P_1=\frac{hf}{c} \cdot (1, 0, 0, i)$
2. **高速电子**：$P_2 = \gamma_2 m \cdot (v, 0, 0, ic)$
3. **高能光子**：$P_3 = \frac{hf'}{c} \cdot (1, 0, 0, i)$
4. **低能电子**：$P_4 = \gamma_4 m \cdot (v', 0, 0, ic)$

<v-click>

对于接近光速的电子($v \approx c$)：
$$hf' \cdot \left(\frac{1}{\gamma_2 mc^2} \cdot hf + \frac{1}{2}\left(1-\frac{v}{c}\right)\right) = hf$$

这建立了入射与出射光子频率的关系。

</v-click>

---

# 对四维矢量的思考

<div class="grid grid-cols-2 gap-12">
<div>

**四维矢量的优势**：
- 为理解相对论现象提供了统一且优雅的数学框架
- 将复杂的洛伦兹变换问题转化为简单的矢量运算
- 通过不变量自动满足相对论的协变性要求

<v-click>

**应用价值**：
- 简化复杂的粒子物理计算
- 提供深刻的物理洞察
- 统一处理各种时空变换问题

</v-click>

</div>
<div>

<v-click>

**学习建议**：
- 在物理竞赛中，对极其有把握的题目可以尝试使用
- 更重要的是用作验证经典方法的工具
- 抽象的数学工具可以大大推动我们对物理的思考

</v-click>

<v-click>

> 也许有时候，抽象的数学工具可以大大推动我们对物理的思考。

</v-click>

</div>
</div>

---
layout: end
---

# 谢谢！

希望这篇基础的介绍性文章可以给你一些启示。

四维矢量的妙用远不只于此，它为我们理解相对论世界提供了一个强大而优雅的工具。
