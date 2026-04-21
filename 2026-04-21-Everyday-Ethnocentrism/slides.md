---
theme: seriph
background: https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Ethnocentrism Presentation
  Everyday Examples & Nacirema
drawings:
  persist: false
transition: slide-up
title: Everyday Ethnocentrism
date: 2026-04-21
defaults:
  preload: false
---

# Everyday Ethnocentrism

How language divides the world

<div class="mt-8 text-xl text-gray-300 font-serif tracking-widest font-medium">
  李冠烨 · 汤睿凡 · 马梓伦
</div>

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

---
layout: default
---

# Presentation Outline

<div class="mt-16 flex flex-col gap-8 max-w-3xl mx-auto">
  <div v-click class="flex items-start gap-6">
    <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold text-xl shrink-0 border-2 border-blue-300">1</div>
    <div>
      <div class="text-2xl font-bold text-blue-900">The Power of Language</div>
      <div class="text-gray-600 mt-1">Everyday ethnocentrism, Social Identity Theory & the Nacirema case</div>
    </div>
  </div>
  
  <div v-click class="flex items-start gap-6">
    <div class="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-800 font-bold text-xl shrink-0 border-2 border-red-300">2</div>
    <div>
      <div class="text-2xl font-bold text-red-900">Amplification & Internalization</div>
      <div class="text-gray-600 mt-1">Media, politics, algorithms and extreme historical consequences</div>
    </div>
  </div>
  
  <div v-click class="flex items-start gap-6">
    <div class="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-800 font-bold text-xl shrink-0 border-2 border-gray-300">3</div>
    <div>
      <div class="text-2xl font-bold text-gray-900">Reflection & Conclusion</div>
      <div class="text-gray-600 mt-1">Breaking free from ethnocentrism by turning the mirror upon ourselves</div>
    </div>
  </div>
</div>

---
layout: section
---

# Part 1: The Power of Language
Everyday Ethnocentrism & The Nacirema

---
layout: two-cols-header
---

# Why do we divide the world into "us" and "them"?

<div class="text-sm opacity-70 mb-4">The Absurd Internet Hook</div>

::left::

<div class="pr-8 mt-4 flex flex-col gap-6">
  <img src="/tweet2.png" class="rounded-lg shadow-lg border border-gray-300 w-full object-contain" alt="Elon Musk Tweet" />
  <img src="/tweet1.png" class="rounded-lg shadow-lg border border-gray-300 w-full object-contain" alt="Charlie Kirk Tweet" />
</div>

::right::

<div class="mt-12 flex flex-col gap-6">
  <div v-click class="text-3xl font-bold text-red-500">Us vs. Them</div>
  <div v-click class="text-3xl font-bold text-red-500">Civilized vs. Backward</div>
  <div v-click class="text-3xl font-bold text-red-500">Normal vs. Strange</div>

  <div v-click class="mt-8 text-xl italic opacity-80 border-l-4 border-gray-400 pl-4">
    Ethnocentrism often begins as a language habit.
  </div>
</div>



<!--
EN
Good morning, everyone.

Before we begin, let’s start with a familiar kind of post we often see on X. At first glance, it may seem like just another heated comment online. But if we read it carefully, the logic behind it is quite revealing.

It divides the world into two sides: on one side, “the West” is treated as the source of order, value, and civilization; on the other side, the rest of the world is implied to be dependent, troublesome, or even threatening.

And this is not an isolated example. We often see similar language online — language that turns complex issues into a simple story of “us” versus “them,” of civilization versus decline, of superiority versus danger.

So the question I want to raise today is this: why are people so ready to see their own culture as normal, advanced, and correct, while other cultures appear strange, backward, or even inferior?

中
大家好。

在正式开始之前，我们先来看一种在 X 上很常见的帖子。乍一看，它似乎只是又一条情绪化的网络发言；但如果仔细读，就会发现其中的逻辑非常典型。

它把世界划分成了两个阵营：一边是被默认成秩序、价值与文明来源的“the West”，另一边则被暗示成依赖者、麻烦制造者，甚至潜在威胁。

而且，这并不是个例。我们在网上经常能看到类似的表达方式——它们会把原本复杂的问题，压缩成一个简单的叙事：“我们”与“他们”、文明与衰落、优越与危险。

所以，我今天想提出的问题是：为什么人们总是这么容易把自己的文化看成正常的、先进的、正确的，而把其他文化看成奇怪、落后，甚至低人一等？
-->

---
layout: center
---

# Social Identity Theory

<div class="flex items-center justify-center gap-4 mt-12 mb-16">
  <div v-click="1" class="flex flex-col items-center">
    <div class="w-40 h-40 rounded-full bg-blue-100 flex items-center justify-center border-2 border-blue-300 shadow-md">
      <div class="text-center">
        <div class="font-bold text-blue-800 text-lg">Group Identity</div>
        <div class="text-xs text-blue-600 mt-2">I belong to<br/>this group.</div>
      </div>
    </div>
  </div>

  <div v-click="2" class="text-2xl text-gray-400">→</div>

  <div v-click="2" class="flex flex-col items-center">
    <div class="w-40 h-40 rounded-full bg-yellow-100 flex items-center justify-center border-2 border-yellow-300 shadow-md">
      <div class="text-center">
        <div class="font-bold text-yellow-800 text-lg">In-group Bias</div>
        <div class="text-xs text-yellow-700 mt-2">My group feels<br/>normal and reasonable.</div>
      </div>
    </div>
  </div>

  <div v-click="3" class="text-2xl text-gray-400">→</div>

  <div v-click="3" class="flex flex-col items-center">
    <div class="w-40 h-40 rounded-full bg-red-100 flex items-center justify-center border-2 border-red-300 shadow-md">
      <div class="text-center">
        <div class="font-bold text-red-800 text-lg">Ethnocentric<br/>Judgment</div>
        <div class="text-xs text-red-600 mt-2">Other groups look<br/>strange or inferior.</div>
      </div>
    </div>
  </div>
</div>

<div v-click="4" class="text-center text-3xl font-bold mb-8">
  <span v-mark.underline.orange>Familiarity becomes the standard.</span>
</div>

<div v-click="5" class="absolute bottom-4 right-8 max-w-sm bg-gray-50 p-3 border border-gray-200 rounded text-xs text-gray-500 shadow-sm">
  Social identity itself is not the problem.<br/>
  It becomes a problem when group attachment becomes a rigid standard for judging others.
</div>

<div class="absolute bottom-4 left-8 text-[9px] text-gray-400 font-serif opacity-70">
  Tajfel & Turner. In <i>The Social Psychology of Intergroup Relations</i> (1979).
</div>

<!--
EN
A useful explanation comes from Social Identity Theory, proposed by Tajfel and Turner.

The basic idea is quite simple: we do not only think of ourselves as individuals; we also think of ourselves as members of groups.

Once we identify with a group, we naturally begin to defend it, value it, and take pride in it. And this often leads to what psychologists call in-group bias.

In other words, we tend to see our own group as normal, reasonable, and even superior, while other groups are easily reduced to labels and stereotypes.

But here we need to be careful: social identity itself is not the problem. It becomes a problem when group attachment turns into a rigid standard for judging others.

So ethnocentrism does not always begin with hatred. Very often, it begins with familiarity. What feels familiar becomes the standard, and what feels different starts to look suspicious.

中
一个很好用的解释来自 Tajfel 和 Turner 提出的社会认同理论。

它的基本意思其实很简单：我们不会只把自己看成独立个体，也会把自己看成某个群体的成员。

而一旦认同了某个群体，我们就会很自然地去维护它、重视它，并从中获得认同感与自豪感。这往往就会形成心理学上所说的内群体偏好。

换句话说，我们很容易把自己的群体看成正常的、合理的，甚至更优秀的；而其他群体则会被迅速简化成一些标签和刻板印象。

但这里需要注意：社会认同本身并不是问题；问题在于，当群体归属感变成评判他者的僵化标准时，它就可能滑向民族中心主义。

所以，民族中心主义并不一定从仇恨开始。很多时候，它其实只是从“熟悉感”开始。熟悉的东西慢慢成了标准，不同的东西也就开始显得可疑。
-->

---
layout: two-cols
---

# Miner’s "strange tribe"

<div class="pr-8 mt-8">
  <div class="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm text-lg font-serif italic text-gray-700 leading-relaxed">
    "...the <span class="transition-colors duration-300 px-1 rounded" :class="$slidev.nav.clicks >= 1 ? 'bg-yellow-300 text-yellow-900 font-bold' : ''">magical powders</span> and potions are kept in a small <span class="transition-colors duration-300 px-1 rounded" :class="$slidev.nav.clicks >= 1 ? 'bg-yellow-300 text-yellow-900 font-bold' : ''">shrine</span>..."
    <br/><br/>
    "...the <span class="transition-colors duration-300 px-1 rounded" :class="$slidev.nav.clicks >= 1 ? 'bg-yellow-300 text-yellow-900 font-bold' : ''">holy-mouth-man</span> performs the sacred mouth-rite..."
  </div>
</div>

::right::

# The Nacirema Mapping

<div class="mt-8">
  <table class="w-full text-left border-collapse">
    <thead>
      <tr class="bg-blue-800 text-white">
        <th class="p-3 rounded-tl-lg">Nacirema term</th>
        <th class="p-3 rounded-tr-lg">Real meaning</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b">
        <td class="p-3 font-semibold">Magical powders</td>
        <td class="p-3">Toothpaste</td>
      </tr>
      <tr class="border-b bg-gray-50">
        <td class="p-3 font-semibold">Holy-mouth-man</td>
        <td class="p-3">Dentist</td>
      </tr>
      <tr class="border-b">
        <td class="p-3 font-semibold">Shrine</td>
        <td class="p-3">Bathroom</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="absolute bottom-16 left-0 w-full text-center" v-click="2">
  <div class="text-4xl font-bold text-blue-900 mb-2">Nacirema = American, <span class="text-red-600">spelled backward.</span></div>
  <div class="text-xl text-gray-500 mt-4">Nothing changed except the description.</div>
</div>

<div class="absolute bottom-4 left-8 text-[9px] text-gray-400 font-serif opacity-70">
  Miner, H. <i>Am. Anthropol.</i> <b>58</b>, 503 (1956).
</div>

<!--
EN
This is exactly why Horace Miner’s essay Body Ritual among the Nacirema is so brilliant.

At first, Miner seems to be describing a bizarre tribe. These people use magical powders, perform private rituals, and visit a frightening specialist called the “holy-mouth-man.”

It sounds strange — even primitive.

But then comes the twist: “Nacirema” is simply “American” spelled backward.

The magical powder is toothpaste. The holy-mouth-man is a dentist. The shrine is a bathroom.

So nothing in the behavior actually changed. What changed was the description.

And that is exactly what makes the essay so powerful: it makes something ordinary look exotic, and then forces us to confront our own way of judging.

中
这也正是 Horace Miner 的文章《Nacirema 人的身体仪式》为什么如此精彩。

一开始，他好像在描述一个非常诡异的部落：这些人会使用“魔法粉末”、进行私密仪式，还会去看一个可怕的专家，叫做 “holy-mouth-man”。

听起来非常奇怪，甚至有点“原始”。

但反转很快就来了：Nacirema 其实就是 American 倒过来写。

所谓的魔法粉末，其实是牙膏；所谓的 holy-mouth-man，其实是牙医；所谓的 shrine，其实就是浴室。

所以，行为本身其实根本没有改变。真正改变的，只是描述方式。

而这也正是这篇文章最厉害的地方：它先把平常的东西写得像异域奇观，接着逼着我们回头面对自己原本的判断方式。
-->

---
layout: center
---

# Causes of Alienation

<div class="grid grid-cols-3 gap-6 mt-12 mb-16 w-full max-w-4xl">
  
  <!-- Step 1 -->
  <div v-click="1" class="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm relative">
    <div class="text-center font-bold text-gray-700 text-xl mb-4 border-b pb-2">Ordinary Behavior</div>
    <ul class="space-y-3 text-gray-600 list-disc list-inside">
      <li>Brushing teeth</li>
      <li>Going to the dentist</li>
      <li>Using a bathroom</li>
    </ul>
    <div class="absolute -right-5 top-1/2 transform -translate-y-1/2 text-2xl text-gray-400 z-10 hidden md:block">→</div>
  </div>

  <!-- Step 2 -->
  <div v-click="2" class="bg-yellow-50 border border-yellow-200 rounded-lg p-6 shadow-sm relative">
    <div class="text-center font-bold text-yellow-800 text-xl mb-4 border-b border-yellow-200 pb-2">Framing Language</div>
    <ul class="space-y-3 text-yellow-700 list-disc list-inside">
      <li>Ritual</li>
      <li>Magic</li>
      <li>Shrine</li>
      <li>Holy-mouth-man</li>
    </ul>
    <div class="absolute -right-5 top-1/2 transform -translate-y-1/2 text-2xl text-gray-400 z-10 hidden md:block">→</div>
  </div>

  <!-- Step 3 -->
  <div v-click="3" class="bg-red-50 border border-red-200 rounded-lg p-6 shadow-sm">
    <div class="text-center font-bold text-red-800 text-xl mb-4 border-b border-red-200 pb-2">Reader’s Judgment</div>
    <ul class="space-y-3 text-red-700 list-disc list-inside">
      <li>Strange</li>
      <li>Primitive</li>
      <li>Irrational</li>
      <li>Uncomfortable</li>
    </ul>
  </div>

</div>

<div v-click="4" class="text-center mt-12">
  <div class="text-3xl font-bold text-blue-900 mb-3">The behavior did not change; the language did.</div>
  <div class="text-lg italic text-gray-500">Framing does not wait for judgment; it prepares judgment in advance.</div>
</div>

<div class="absolute bottom-4 left-8 text-[9px] text-gray-400 font-serif opacity-70 flex gap-3">
  <span>Shklovsky, V. <i>Russian Formalist Criticism</i> (1965).</span>
  <span>|</span>
  <span>Thibodeau & Boroditsky. <i>PLoS ONE</i> <b>6</b> (2011).</span>
</div>

<!--
EN
So why did readers feel uncomfortable?

Because Miner changed the language, not the reality.

He mainly used two tools. The first is defamiliarization, making ordinary things sound strange and unfamiliar. The second is framing, using words like “ritual,” “magic,” and “shrine” to guide the reader’s judgment in advance.

As a result, brushing teeth becomes a ceremony, and a dentist becomes a ritual specialist.

Framing does not wait for judgment; it prepares judgment in advance.

The key point is very simple: the behavior did not change; the language did. And once the language changes, perception changes as well.

中
那么，为什么读者会感到不适呢？

因为 Miner 改变的不是现实，而是语言。

他主要用了两个工具。第一个叫陌生化，也就是把原本平常的东西写得陌生、奇异；第二个叫框架效应，也就是通过 “ritual”“magic”“shrine” 这样的词，提前引导读者的判断。

于是，刷牙变成了一种仪式，牙医也变成了一种神秘的仪式执行者。

框架效应并不是在判断之后解释现实，而是在判断发生之前就预设了判断方向。

最关键的一点其实非常简单：行为没有变，变的是语言。而一旦语言改变了，我们的感知和判断，也会随之改变。
-->

---
layout: center
---

# The Dual Edge of Language

<div class="relative w-full max-w-4xl mx-auto h-[400px] flex items-center justify-center mt-8">

  <!-- Center -->
  <div class="absolute z-20 flex items-center justify-center w-40 h-40 bg-blue-900 rounded-full shadow-xl border-4 border-white text-3xl font-bold text-white">
    Language
  </div>

  <!-- Left: Exclusion -->
  <div v-click="1" class="absolute left-0 w-80 bg-red-50 border-2 border-red-200 rounded-xl p-6 shadow-md pl-12 translate-x-12 pr-20 pb-8 pt-8">
    <div class="text-center font-bold text-red-600 text-2xl mb-4">Excludes outsiders</div>
    <ul class="text-xl text-red-800 space-y-2 flex flex-col items-center justify-center">
      <li>Stereotype</li>
      <li>Fear</li>
      <li>Rejection</li>
    </ul>
    <div class="absolute -right-4 top-1/2 transform -translate-y-1/2">
      <div class="text-3xl text-red-300">←</div>
    </div>
  </div>

  <!-- Right: Cohesion -->
  <div v-click="2" class="absolute right-0 w-80 bg-blue-50 border-2 border-blue-200 rounded-xl p-6 shadow-md pr-12 -translate-x-12 pl-20 pb-8 pt-8">
    <div class="text-center font-bold text-blue-600 text-2xl mb-4">Creates internal unity</div>
    <ul class="text-xl text-blue-800 space-y-2 flex flex-col items-center justify-center">
      <li>Identity</li>
      <li>Belonging</li>
      <li>Loyalty</li>
    </ul>
    <div class="absolute -left-4 top-1/2 transform -translate-y-1/2">
      <div class="text-3xl text-blue-300">→</div>
    </div>
  </div>

</div>

<div v-click="3" class="text-center mt-8">
  <div class="text-2xl font-bold text-gray-800 mb-8 max-w-3xl mx-auto leading-relaxed">
    <span v-mark.underline.orange>Ethnocentric language often sounds less like prejudice, and more like common sense.</span>
  </div>
  
  <div class="bg-gray-100 p-4 rounded-lg inline-block text-gray-700 italic border border-gray-200">
    If ethnocentric language sounds like common sense, what happens when it is amplified by media, politics, and algorithms?
  </div>
</div>

<div class="absolute bottom-4 left-8 text-[9px] text-gray-400 font-serif opacity-70 flex gap-3">
  <span>Tajfel & Turner. <i>Social Psych. of Intergroup Relations</i> (1979).</span>
  <span>|</span>
  <span>Thibodeau & Boroditsky. <i>PLoS ONE</i> <b>6</b> (2011).</span>
</div>

<!--
EN
So language has a double function.

On the one hand, it excludes outsiders. If we constantly describe another group as irrational, backward, or strange, it becomes much easier to reject or look down on them.

On the other hand, language also creates internal unity. Through contrast, it tells us who “we” are, what “we” value, and who does not belong.

And this is exactly why ethnocentric language is so powerful: it often sounds less like prejudice, and more like common sense.

So language does not simply describe the world. It also helps divide the world.

If language can already shape bias at the level of daily perception, what happens when that same mechanism is scaled up by media, politics, and algorithms?

That is the question I would like to leave to my partner.

中
所以，语言其实有双重作用。

一方面，它会排斥外群体。如果我们总是把另一个群体描述成非理性、落后或奇怪，那我们就更容易拒绝他们，甚至对他们产生轻视。

但另一方面，语言也会制造内部团结。它通过对比不断告诉我们：“我们是谁”、“我们重视什么”，以及“谁不属于我们”。

而这也正是民族中心主义语言最强大的地方：它听起来常常不像偏见，反而像常识。

所以，语言并不只是描述世界。它其实也在划分世界。

如果语言已经能在日常感知层面塑造偏见，那么，当同样的机制被媒体、政治和算法进一步放大时，会发生什么？

这个问题，我想留给我的搭档继续展开。
-->


---
layout: section
---

# Part 2: Amplification & Internalization
Media, Politics, and Algorithms

<!-- P2 Starts Here -->

---
layout: two-cols
---

# Internalization of Bias

<div class="mt-12 flex flex-col gap-6">
  <div v-click="1" class="text-xl text-gray-700 font-medium bg-gray-50 p-4 border-l-4 border-blue-500 shadow-sm">
    Childhood socialization
  </div>
  <div v-click="2" class="text-xl text-gray-700 font-medium bg-gray-50 p-4 border-l-4 border-blue-500 shadow-sm">
    Culturally given answers
  </div>
</div>

::right::

<div class="flex flex-col gap-6 mt-8 pl-8 items-center justify-center h-full">
  <img v-click="1" src="/p2/image1.jpeg" class="rounded shadow-md max-h-48 object-cover w-full" />
  <img v-click="2" src="/p2/image2.png" class="rounded shadow-md max-h-48 object-contain w-full" />
</div>

---
layout: default
---

# The Power of Arbitrary Categorization

<div class="text-2xl text-red-600 font-bold mt-8 mb-8 text-center">
  Mere social categorization triggers in-group favoritism and out-group discrimination.
</div>

<div class="flex justify-center mt-8">
  <img src="/p2/images.jpg" class="rounded-lg shadow-lg max-h-[350px] object-contain" />
</div>

<div class="absolute bottom-4 left-8 text-[9px] text-gray-400 font-serif opacity-70">
  Tajfel, H., et al. <i>Eur. J. Soc. Psychol.</i> <b>1</b>, 149–178 (1971).
</div>

---
layout: two-cols
---

# Conspiracy of Media and Power

<div class="mt-16 flex flex-col gap-8 pr-4">
  <div v-click="1" class="text-2xl font-bold text-red-800 border-b-2 border-red-200 pb-2">
    Loyalty vs. Betrayal simplification
  </div>
  <div v-click="2" class="text-2xl font-bold text-blue-800 border-b-2 border-blue-200 pb-2">
    Tool for legitimacy
  </div>
</div>

::right::

<div class="flex flex-col gap-6 mt-8 pl-8 items-center justify-center">
  <img v-click="1" src="/p2/image4.jpeg" class="rounded shadow-lg max-h-44 object-contain" />
  <img v-click="2" src="/p2/image5.jpeg" class="rounded shadow-lg max-h-44 object-contain" />
</div>

---
layout: center
---

# Entering the Algorithmic Era

<div class="mt-8 flex justify-center w-full">
  <img v-click src="/p2/image6.png" class="rounded-xl shadow-xl max-h-[400px] object-contain" />
</div>

---
layout: center
class: bg-red-950 text-white
---

# Extreme Historical Tragedies

<div class="flex justify-center gap-8 mt-12 items-center">
  <img v-click src="/p2/image7.png" class="rounded shadow-2xl border-2 border-red-500/50 max-h-[320px] object-contain" />
  <img v-click src="/p2/image8.png" class="rounded shadow-2xl border-2 border-red-500/50 max-h-[320px] object-contain" />
</div>

<div class="absolute bottom-4 left-8 text-[9px] text-gray-400 font-serif opacity-70">
  Zuo, Y. <i>Liberation Daily</i> (2015).
</div>

---
layout: statement
---

# HOW DO WE BREAK FREE?

<div v-click class="flex justify-center mt-12">
  <img src="/p2/image9.png" class="rounded shadow-xl max-h-[250px] object-contain" />
</div>

<div class="absolute bottom-4 left-8 text-[9px] text-gray-400 font-serif opacity-70">
  Sun, X. <i>People's Tribune: Frontiers</i> (2022).
</div>

<!-- P3 Starts Here -->

---
layout: section
---

# Part 3: Reflection & Conclusion
Breaking Free from Ethnocentrism

---
layout: two-cols
---

<div class="flex items-center justify-center h-full pr-4">
  <img v-click src="/p3/image1.png" class="rounded-lg shadow-xl max-h-[350px] object-contain" />
</div>

::right::

<div class="flex items-center justify-center h-full pl-4">
  <img v-click src="/p3/image2.png" class="rounded-lg shadow-xl max-h-[350px] object-contain" />
</div>

---
layout: center
---

<div class="flex flex-col items-center gap-8 w-full max-w-5xl mx-auto mt-4">
  <!-- Top Title Image -->
  <img v-click src="/p3/image3.png" class="h-24 object-contain" alt="China <-> Anihc" />
  
  <!-- Three Column Images -->
  <div class="grid grid-cols-3 gap-6 w-full items-center">
    <img v-click src="/p3/image4.png" class="rounded-lg shadow-md w-full object-cover aspect-square" />
    <img v-click src="/p3/image5.png" class="rounded-lg shadow-md w-full object-cover aspect-square" />
    <img v-click src="/p3/image6.png" class="rounded-lg shadow-md w-full object-cover aspect-square bg-white" />
  </div>
</div>

---
layout: quote
---

<div class="flex justify-center mb-8">
  <img src="/p3/image7.png" class="rounded shadow-lg max-h-[150px] object-contain" />
</div>

<div class="text-4xl leading-relaxed text-blue-900 font-serif mb-8 text-center">
  "True national glory lies in making the world a better place."
</div>

<div class="text-right text-2xl text-gray-600 font-bold pr-12">
  —— Blaise Pascal
</div>

---
layout: center
---

<div class="grid grid-cols-3 gap-8 w-full items-center">
  <img v-click src="/p3/image8.png" class="rounded-xl shadow-xl max-h-[250px] object-contain" />
  <img v-click src="/p3/image9.png" class="rounded-xl shadow-xl max-h-[250px] object-contain" />
  <img v-click src="/p3/image10.png" class="rounded-xl shadow-xl max-h-[250px] object-contain" />
</div>

---
layout: center
---

<div class="max-w-4xl text-center">
  <div class="text-4xl leading-loose font-serif text-gray-800">
    Only by <span class="font-bold text-blue-700 bg-blue-50 px-2 rounded">turning the mirror upon ourselves</span> can we truly break free and embrace a broader world.
  </div>
</div>

---
layout: center
---

# References

<div class="text-[12px] leading-relaxed mt-8 space-y-4 font-serif text-gray-600 max-w-4xl mx-auto text-left">
  <p>[1] Musk, E. Post on X: “The same people who blame the West for everything also consider it a human rights violation to stop the rest of Earth from moving here.” X, 14 June 2025.</p>
  <p>[2] Kirk, C. Post on X quoting JD Vance on Europe and “civilizational suicide.” X, 30 July 2025.</p>
  <p>[3] Tajfel, H. & Turner, J. C. An integrative theory of intergroup conflict. In <i>The Social Psychology of Intergroup Relations</i> (eds Austin, W. G. & Worchel, S.) 33–47 (Brooks/Cole, 1979).</p>
  <p>[4] Miner, H. Body ritual among the Nacirema. <i>Am. Anthropol.</i> <b>58</b>, 503–507 (1956).</p>
  <p>[5] Shklovsky, V. Art as technique. In <i>Russian Formalist Criticism: Four Essays</i> (eds Lemon, L. T. & Reis, M. J.) 3–24 (University of Nebraska Press, 1965).</p>
  <p>[6] Thibodeau, P. H. & Boroditsky, L. Metaphors we think with: the role of metaphor in reasoning. <i>PLoS ONE</i> <b>6</b>, e16782 (2011).</p>
  <p>[7] Tajfel, H., Billig, M. G., Bundy, R. P., & Flament, C. Social categorization and intergroup behaviour. <i>Eur. J. Soc. Psychol.</i> <b>1</b>, 149–178 (1971).</p>
  <p>[8] Zuo, Y. The Formation of Reactionary Regimes: A Retrospective on Fascism. <i>Liberation Daily</i> (15 Apr. 2015). Accessed via SJTU News.</p>
  <p>[9] Sun, X. Beyond Western-Centric Perspectives: Modernization and Knowledge System Construction. <i>People's Tribune: Frontiers</i> <b>2022(1)</b> (2022).</p>
</div>
