---
title: "The output is free now. Hire for the judgment."
description: "When AI makes the output cheap, the scarce thing becomes knowing whether the output is right — and what to do when it isn't."
date: "2026-10-13"
tags: ["AI", "Hiring", "DevRel", "Judgment"]
readTime: "7 min read"
---

*By Rakesh Purohit*

The worst content I ever shipped was beautifully written.

I was rebuilding the Instagram strategy for Rocket, the AI app builder I work on. I gave the model my brief, and it gave me back carousel copy that was clean, confident and on brand. It was also aimed at the wrong people. A few words I'd glossed over in my own input had pointed it at an audience that wasn't our ICP, and nothing in the output told me so. It didn't look broken. It looked finished.

So I didn't prompt harder. I stopped, went back through everything it had produced, and spent time reading about the people we were actually trying to reach until I understood them better than my brief did. Then I took a break and started again. That restart is where the account went from about 3 likes a post, mostly from my own team, to up to about 10k engagements on a single post.

I think about that week a lot, because it's the hiring problem of this decade in miniature. The model did its job. The output was fine. The failure was upstream, in judgment, and it was invisible from the artifact alone.

## When something gets cheap, the bottleneck moves

There's an old idea in economics: when the cost of something collapses, its value moves somewhere else. Cheap printing didn't make writers worthless. It made editors and publishers matter. Cheap cameras didn't kill photography. They made taste the scarce thing.

Code and copy just went through that collapse. In Stack Overflow's 2025 Developer Survey, 84% of respondents said they use or plan to use AI tools in their development process, and 51% of professional developers use them daily. The output is everywhere, and it's getting cheaper every quarter.

So the scarce thing isn't the output anymore. It's knowing whether the output is right, and what to do when it isn't.

HackerRank's CEO, Vivek Ravisankar, said it more bluntly than I would: "Anybody can create an output with AI right now. So evaluation can't be about the output anymore." In another conversation he described what technical hiring has measured for over a decade, which was whether you can convert a well-written English spec into a programming language of your choice. His verdict: "that is done."

He's right, and most hiring processes haven't caught up.

## The people using it most trust it least

Here's the number from that same survey that I find most interesting. More developers actively distrust the accuracy of AI tools (46%) than trust it (33%). Only about 3% say they highly trust it. And experienced developers are the most cautious of all.

That's not a contradiction. It's what fluency looks like. The people who use these tools hardest are the ones who have been burned by a confident wrong answer, and they've built habits around it. I use Claude Code, Codex and Cursor every day. The more I use them, the less I read their output as an answer and the more I read it as a draft from a fast, tireless colleague who has never met our users.

## We are bad at judging our own AI fluency

Here's the part that should worry every hiring manager. In 2025, METR ran a randomized controlled trial with 16 experienced open-source developers working on 246 real tasks in repositories they knew well. Before starting, the developers expected AI to make them 24% faster. When AI was allowed, they actually took 19% longer. And afterwards, having just lived through the slowdown, they still believed AI had sped them up by 20%.

METR is careful to call this a snapshot of early-2025 tools, and its later follow-up found the picture was more mixed and harder to measure as more developers started relying on agents. I don't read the study as "AI makes you slow." I read it as something sharper. People can't reliably tell, from the inside, whether AI is helping them.

If that's true for experienced engineers on their own codebases, it's true for candidates on a résumé. "Proficient in AI tools" is a self-report. Self-reports about AI are exactly the thing we now have evidence not to trust.

## What AI fluency actually is

When I look at the people I trust with these tools, including the ones in the Discord community I grew from zero to 22,000 members, fluency isn't a bag of prompt tricks. It's three habits.

**Know what you want before you ask.** My Instagram mistake wasn't a bad prompt. It was a thin understanding of the audience, written down as a prompt. The fix was reading and thinking, not prompt engineering. Good engineers do this with agents too. The ones who get great results from Claude Code are the ones who could have written a decent spec for a human.

**Notice when it's wrong, especially when it looks right.** Fluent output is the dangerous kind. The skill is reading a clean diff or a polished paragraph and asking: is this true, is this the point, would the person on the other end roll their eyes at it?

**Know when to stop prompting.** This one is underrated. Sometimes the right move is to close the chat, go read, take a walk and come back with a better picture. People who keep rerolling the same wrong idea are mistaking activity for progress.

None of these show up in a finished take-home.

## The interview is copying the wrong company again

Vivek has a good line about how tech interviews have always imitated whoever was hottest: Microsoft's brain teasers about golf balls, then Google's data structures and algorithms, then API integration rounds. Each format measured the scarce skill of its era.

The scarce skill now is judgment over a fast collaborator. So the interview has to watch the process, not grade the artifact. What did you clarify before you started? What did you ask the AI, and what did you throw away? Where did you overrule it, and why?

## What I'd hire for

If I were hiring an engineer, or a writer, in 2026, I wouldn't ask whether they use AI. Almost everyone does. I'd ask them to tell me about the last time they overruled it. I'd ask what they'd read before they prompted. I'd watch whether they can explain a choice the model made as if it were their own, and whether they notice the one they shouldn't keep.

Anyone can ship the output now. Hire the person who can tell you what's wrong with it.

---

**Sources:** Stack Overflow 2025 Developer Survey (84%/51%/46%/33% figures) · METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity" (16 developers, 246 tasks, 19% slower, expected 24% faster) · Vivek Ravisankar on X, 11 Oct 2026 · The Offline Network, Episode 99 · Instagram and Discord figures are the author's own (Rocket, @rocketdotnew).
