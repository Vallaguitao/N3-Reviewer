/* Authored study support for the Lessons 3–4 review on Lesson 4.
 * Load after part1-quiz-data.js and before quiz.js. The generated source remains intact.
 * Only these 18 records are enriched; original answer keys and question types are retained.
 */
(function (root) {
  "use strict";
  if (typeof document !== "undefined" && document.body?.dataset.page !== "lesson-04") return;
  const support = [
  {
    "id": "part1-book-03-04-q01",
    "hint": "What does たくさんのごちそう tell you about the amount of food?",
    "translation": "There was so much delicious food at the party that we could not eat it all.",
    "correctExplanation": "The first sentence says a lot of food was served. The second gives its degree. 食べる → 食べられる → 食べられない means eat → can eat → cannot eat here. 全部は食べられない means not being able to eat all of it. The negative plain form connects to ほどだった. The final だった places that degree in the past.",
    "rationales": {
      "a": "全部食べた says someone ate everything. It reports a completed action rather than the intended inability to finish such a large amount.",
      "b": "全部食べられる says it is possible to eat everything. That does not convey the amount exceeding what the diners could manage.",
      "c": "全部は食べられない gives the intended limit: there was more than could all be eaten."
    },
    "studyGuide": {
      "reading": "ぜんぶはたべられない",
      "strongerHint": "The second sentence illustrates how large the amount was. Look for a limit that the diners could not manage.",
      "clue": "たくさん establishes abundance; ほどだった needs an image that measures that abundance.",
      "steps": [
        "The first sentence says a lot of food was served. The second gives its degree.",
        "食べる → 食べられる → 食べられない means eat → can eat → cannot eat here. 全部は食べられない means not being able to eat all of it.",
        "The negative plain form connects to ほどだった. The final だった places that degree in the past."
      ],
      "trap": "全部は…ない means “not all,” not necessarily “none.” 食べられる is potential in this context; do not list passive or honorific meanings without deciding which meaning actually fits.",
      "reviewHref": "lesson-03-degree.html#l3-kurai"
    }
  },
  {
    "id": "part1-book-03-04-q02",
    "hint": "Read 食事する時間もない as one phrase. What kind of situation leaves no time even for meals?",
    "translation": "Recently, I have been so busy that I do not even have time to eat.",
    "correctExplanation": "Bracket ［食事する時間もないほど］［忙しい］. ほど connects the vivid consequence to the state being described: so busy that even meals cannot fit into the schedule. も emphasizes that even something as basic as time to eat is missing.",
    "rationales": {
      "a": "忙しい supplies the intense state that naturally leaves no time for meals.",
      "b": "ひまだ means having free time. It conflicts with the stated lack of time for eating in this context.",
      "c": "あまり食べない means not eating much. It describes food consumption, not the degree of a state that leaves no time."
    },
    "studyGuide": {
      "reading": "いそがしい",
      "strongerHint": "The phrase before ほど illustrates the degree of the state after it. You need a state whose intensity explains the lack of time.",
      "clue": "時間もない means there is not even time; it measures the degree of busyness.",
      "steps": [
        "Bracket ［食事する時間もないほど］［忙しい］.",
        "ほど connects the vivid consequence to the state being described: so busy that even meals cannot fit into the schedule.",
        "も emphasizes that even something as basic as time to eat is missing."
      ],
      "trap": "The sentence is about lacking time, not simply eating little. Do not choose an answer merely because it also mentions food.",
      "reviewHref": "lesson-03-degree.html#l3-kurai"
    }
  },
  {
    "id": "part1-book-03-04-q03",
    "hint": "Is the body reported as actually frozen, or is freezing an image of how the cold felt?",
    "translation": "Yesterday it was so cold that I felt as if my body might freeze.",
    "correctExplanation": "凍る is “freeze.” 凍るかと思う describes the thought that it might freeze. Put the complete thought before くらいだった: ［体が凍るかと思う］くらいだった. だった gives the past setting. The expression can use 思う inside the degree phrase even though the experience was yesterday.",
    "rationales": {
      "a": "凍った says the freezing happened. It does not express the intended “I thought I might freeze” image of the cold.",
      "b": "凍るかと思う provides the vivid imagined outcome used to describe the degree of cold.",
      "c": "凍るかどうか means “whether it freezes or not.” That unresolved question does not provide the thought or reaction required by this degree expression."
    },
    "studyGuide": {
      "reading": "こおるかとおもう",
      "strongerHint": "The intended expression describes being so cold that the speaker thought freezing might happen. Distinguish a thought from “whether or not.”",
      "clue": "本当に寒くて sets up an intense sensation; かと思う supplies an imagined outcome to measure it.",
      "steps": [
        "凍る is “freeze.” 凍るかと思う describes the thought that it might freeze.",
        "Put the complete thought before くらいだった: ［体が凍るかと思う］くらいだった.",
        "だった gives the past setting. The expression can use 思う inside the degree phrase even though the experience was yesterday."
      ],
      "trap": "かと思う and かどうか are different constructions. かどうか means “whether or not,” usually inside a question or a clause such as “I do not know whether…”.",
      "reviewHref": "lesson-03-degree.html#l3-kurai"
    }
  },
  {
    "id": "part1-book-03-04-q04",
    "hint": "Is the speaker saying Kyoto’s autumn leaves have equals, or that nothing else reaches their beauty?",
    "translation": "Nothing else is as beautiful as the autumn leaves in Kyoto.",
    "correctExplanation": "Read ［京都の紅葉ほど］［美しいものは］［ほかにない］. ほかに means elsewhere or other than this. ない denies the existence of another thing at that level. The result is a strong personal evaluation of the leaves’ beauty, not a report that beautiful things do not exist at all.",
    "rationales": {
      "a": "ほかにもある says equally beautiful things exist elsewhere too. That creates a different claim from the no-equal ranking this exercise tests.",
      "b": "ほかにない completes “there is nothing else as beautiful.”",
      "c": "ほかにも少ない does not naturally complete the intended expression. 少ない would describe a small number rather than deny an equal."
    },
    "studyGuide": {
      "reading": "ほかにない",
      "strongerHint": "Look at the whole construction: Aほど + beautiful things + は…. The lesson’s expressive ranking denies an equal elsewhere.",
      "clue": "京都の紅葉 is the standard; 美しいもの is the category of comparable things.",
      "steps": [
        "Read ［京都の紅葉ほど］［美しいものは］［ほかにない］.",
        "ほかに means elsewhere or other than this. ない denies the existence of another thing at that level.",
        "The result is a strong personal evaluation of the leaves’ beauty, not a report that beautiful things do not exist at all."
      ],
      "trap": "少ない means “few”; it is an い-adjective, not a negative verb just because it ends in ない. “Few equals” and “no equals” are different claims.",
      "reviewHref": "lesson-03-degree.html#l3-kurai-wa-nai"
    }
  },
  {
    "id": "part1-book-03-04-q05",
    "hint": "The book presents this pattern as a personal evaluation. Which choice supplies the quality the speaker is admiring?",
    "translation": "I think no mountain in Japan is as beautiful as Mount Fuji.",
    "correctExplanation": "富士山 is the comparison standard, and 山 is the category being considered. きれい is a な-adjective. Before 山 it becomes きれいな山. きれいな matches the textbook’s personal-evaluation use; はないと思う means the speaker thinks no other mountain reaches that beauty.",
    "rationales": {
      "a": "きれいな supplies the intended personal judgment of beauty and correctly modifies 山 with な.",
      "b": "高い would change the quality to height. It fits before 山 grammatically, but it is not the personal-evaluation answer targeted by this textbook item. This is a context-and-lesson distinction, not a conjugation error.",
      "c": "ほかの means “other.” It does not provide a quality such as beauty for ぐらい to compare; ほかの山 alone leaves that degree unspecified."
    },
    "studyGuide": {
      "reading": "きれいな",
      "strongerHint": "Check both the lesson’s subjective-ranking focus and the adjective’s form immediately before 山. と 思う supports an opinion reading.",
      "clue": "The textbook’s intended focus is an impression of beauty, expressed as “nothing else compares.”",
      "steps": [
        "富士山 is the comparison standard, and 山 is the category being considered.",
        "きれい is a な-adjective. Before 山 it becomes きれいな山.",
        "きれいな matches the textbook’s personal-evaluation use; はないと思う means the speaker thinks no other mountain reaches that beauty."
      ],
      "trap": "Do not learn “高い is grammatically impossible with ほど…ない.” Height comparisons are possible in Japanese, and と 思う does not forbid facts. The key here follows the textbook’s intended subjective-evaluation exercise, not a universal ban on measurable adjectives.",
      "reviewHref": "lesson-03-degree.html#l3-kurai-wa-nai"
    }
  },
  {
    "id": "part1-book-03-04-q06",
    "hint": "What option is the speaker unwilling to choose in order to improve their standard of living?",
    "translation": "Rather than take a demanding job, I will make do with my current standard of living.",
    "correctExplanation": "Label A the rejected option and B the accepted alternative. きつい仕事をする is an action in dictionary form, so it connects to くらいなら. The speaker prefers tolerating the current standard of living to doing demanding work.",
    "rationales": {
      "a": "いい仕事がない means no good job exists. It states a situation rather than the dictionary-form action rejected in this pattern.",
      "b": "仕事がほしい describes wanting a job. It does not supply the unwanted action the speaker would rather avoid.",
      "c": "きつい仕事をする gives the rejected action and the required dictionary-form connection."
    },
    "studyGuide": {
      "reading": "きついしごとをする",
      "strongerHint": "くらいなら presents an unwanted action; 今の生活レベルでがまんしよう accepts the current situation as the preferable alternative.",
      "clue": "がまんしよう expresses accepting the present lifestyle instead of choosing an undesirable job.",
      "steps": [
        "Label A the rejected option and B the accepted alternative.",
        "きつい仕事をする is an action in dictionary form, so it connects to くらいなら.",
        "The speaker prefers tolerating the current standard of living to doing demanding work."
      ],
      "trap": "Do not reduce くらいなら to any English “if.” In this preference pattern, the clause before it presents the unwanted action being compared with an alternative.",
      "reviewHref": "lesson-03-degree.html#l3-kurai-nara"
    }
  },
  {
    "id": "part1-book-03-04-q07",
    "hint": "The first option is doing nothing and regretting it. What alternative would the advice favor?",
    "translation": "Rather than do nothing and regret it later, it is better to try, even if you fail.",
    "correctExplanation": "くらいなら rejects inaction followed by regret. 失敗しても means “even if you fail.” やってみる means “try doing it.” やってみた joins the printed ほうがいい to form やってみたほうがいい: advice to try, not a report that the attempt already happened.",
    "rationales": {
      "a": "何も残念がらない means not regretting anything. It does not supply the intended positive alternative to taking no action.",
      "b": "あまりがんばらない advises not trying very hard, which misses the contrast with doing nothing and later regretting it.",
      "c": "失敗してもやってみた forms the advice to attempt the action even at the risk of failure."
    },
    "studyGuide": {
      "reading": "しっぱいしてもやってみた",
      "strongerHint": "The printed ending is ほうがいい. Choose the phrase that both contrasts with doing nothing and forms natural advice with that ending.",
      "clue": "何もしないで後で残念がる is the rejected choice; trying supplies a meaningful alternative.",
      "steps": [
        "くらいなら rejects inaction followed by regret.",
        "失敗しても means “even if you fail.” やってみる means “try doing it.”",
        "やってみた joins the printed ほうがいい to form やってみたほうがいい: advice to try, not a report that the attempt already happened."
      ],
      "trap": "The た-form in ～たほうがいい can give advice about a future action. Do not reject it simply because the speaker has not tried yet.",
      "reviewHref": "lesson-03-degree.html#l3-kurai-nara"
    }
  },
  {
    "id": "part1-book-03-04-q08",
    "hint": "What is being recommended as the best way to find a good place to eat?",
    "translation": "If you want to find a good place to eat while traveling, the best thing is to ask the local people.",
    "correctExplanation": "知りたければ means “if you want to know.” It introduces the goal. 聞く is the dictionary form used directly before the recommendation pattern に限る. The first に marks the people being asked. The later に belongs to に限る; they have different jobs.",
    "rationales": {
      "a": "聞く supplies the recommended action in the required basic form.",
      "b": "聞いた is past. It does not form the dictionary-form best-method recommendation tested here.",
      "c": "聞いている describes asking or listening as an ongoing state. The question calls for the action to choose, 聞くに限る."
    },
    "studyGuide": {
      "reading": "きく",
      "strongerHint": "に限る follows a recommended action in dictionary form here. The sentence is advice, rather than a report of an already completed inquiry.",
      "clue": "その土地の人に identifies whom to ask; に限る presents asking as the best method.",
      "steps": [
        "知りたければ means “if you want to know.” It introduces the goal.",
        "聞く is the dictionary form used directly before the recommendation pattern に限る.",
        "The first に marks the people being asked. The later に belongs to に限る; they have different jobs."
      ],
      "trap": "For this best-method pattern, keep the verb in dictionary form. A polite sentence changes the end to に限ります, not the action to 聞きます.",
      "reviewHref": "lesson-03-degree.html#l3-ni-kagiru"
    }
  },
  {
    "id": "part1-book-03-04-q09",
    "hint": "Which choice names something the speaker could recommend when unable to sleep?",
    "translation": "When I cannot sleep, I think nothing beats warm milk.",
    "correctExplanation": "眠れないときは sets the situation: when unable to sleep. 温かいミルク is a noun phrase and connects directly to に限る. The context supplies the idea of drinking it. The grammar expresses the speaker’s recommendation, not a promise that it works for everyone.",
    "rationales": {
      "a": "４、５時間 means four or five hours. No action is given for that duration, so it does not supply the intended recommendation.",
      "b": "温かいミルク names the recommended choice and fits noun + に限る.",
      "c": "朝、起きられない means being unable to get up in the morning. That is another difficulty, not an action the speaker recommends choosing."
    },
    "studyGuide": {
      "reading": "あたたかいミルク",
      "strongerHint": "に限る can follow a noun directly. A length of time or another problem does not by itself supply the intended best choice.",
      "clue": "The sentence is a personal best-choice recommendation in a sleeplessness situation.",
      "steps": [
        "眠れないときは sets the situation: when unable to sleep.",
        "温かいミルク is a noun phrase and connects directly to に限る.",
        "The context supplies the idea of drinking it. The grammar expresses the speaker’s recommendation, not a promise that it works for everyone."
      ],
      "trap": "A noun phrase can be enough before に限る; a verb is not compulsory. Conversely, a phrase containing ない is not automatically advice to avoid an action.",
      "reviewHref": "lesson-03-degree.html#l3-ni-kagiru"
    }
  },
  {
    "id": "part1-book-03-04-q10",
    "hint": "前の introduces the previous apartment. What comparison does that wording most naturally set up?",
    "translation": "My previous apartment was warm even in winter, whereas my current apartment is very cold.",
    "correctExplanation": "The entire former-apartment statement ends in のに対して. The second side supplies the contrasting current apartment and its cold temperature. The contrast is clear without inventing further context: former home warm, current home cold.",
    "rationales": {
      "a": "今のアパート completes the expected previous-versus-current apartment comparison.",
      "b": "わたしの職場 introduces the workplace. Such a comparison is possible with supporting context, but it misses the natural pair signaled by 前の here.",
      "c": "山川さんの家 introduces another person’s home without explaining its relevance. It is less directly connected than the current apartment."
    },
    "studyGuide": {
      "reading": "いまのアパート",
      "strongerHint": "Compare the same feature—warmth—across the speaker’s former and current homes. Avoid adding an unexplained setting.",
      "clue": "前の pairs naturally with 今の, and both apartments are compared on warmth.",
      "steps": [
        "The entire former-apartment statement ends in のに対して.",
        "The second side supplies the contrasting current apartment and its cold temperature.",
        "The contrast is clear without inventing further context: former home warm, current home cold."
      ],
      "trap": "に対して does not universally forbid comparing an apartment with a workplace or another person’s house. Those comparisons can be grammatical; this exercise favors the most naturally established pair.",
      "reviewHref": "#l4-ni-taishite"
    }
  },
  {
    "id": "part1-book-03-04-q11",
    "hint": "The old product sells well. Which option supplies a clear difference in the new product’s market reception?",
    "translation": "The old product has sold well for a long time, whereas this new product is not very popular.",
    "correctExplanation": "旧製品 and 新製品 are the two products being compared. 長い間よく売れている gives the first product’s successful sales record. あまり + negative means “not very / not much,” so あまり人気がない expresses the new product’s lack of popularity.",
    "rationales": {
      "a": "あした発売になる gives a launch date. It does not directly contrast the product’s popularity with the old product’s strong sales.",
      "b": "あまり人気がない gives the intended weak market response in contrast to the old product’s success.",
      "c": "すぐに売りきれた says it sold out quickly, which also suggests strong demand. A contrast in sales duration could be built in another context, but that is not the intended success-versus-low-popularity comparison here."
    },
    "studyGuide": {
      "reading": "あまりにんきがない",
      "strongerHint": "Focus on sales or popularity, rather than merely old-versus-new timing. The second side should contrast with success.",
      "clue": "よく売れている establishes commercial success; あまり人気がない supplies the contrasting weak response.",
      "steps": [
        "旧製品 and 新製品 are the two products being compared.",
        "長い間よく売れている gives the first product’s successful sales record.",
        "あまり + negative means “not very / not much,” so あまり人気がない expresses the new product’s lack of popularity."
      ],
      "trap": "Do not select an option only because it differs in tense or date. Identify the feature the contrast is about.",
      "reviewHref": "#l4-ni-taishite"
    }
  },
  {
    "id": "part1-book-03-04-q12",
    "hint": "The overall topic is this town. Which option reveals its other seasonal face?",
    "translation": "This town is lively with many tourists in summer, but it has few people in winter.",
    "correctExplanation": "Keep この町 as the shared topic; the seasons show different aspects of it. にぎやか is a な-adjective, so the printed connection is にぎやかな反面. 冬は人が少ない supplies the contrasting low number of people.",
    "rationales": {
      "a": "冬は人が少ない contrasts with the summer crowds and completes the town’s two seasonal aspects.",
      "b": "冬もスキー客が多い adds another busy season. It does not provide the intended contrast in how crowded the town is.",
      "c": "一年中人が来る extends the presence of visitors across the year instead of showing the opposite aspect."
    },
    "studyGuide": {
      "reading": "ふゆはひとがすくない",
      "strongerHint": "夏は and にぎやか establish a busy summer. Look for the opposite tendency in winter.",
      "clue": "反面 asks for an opposing aspect of the town: crowded summer versus quiet winter.",
      "steps": [
        "Keep この町 as the shared topic; the seasons show different aspects of it.",
        "にぎやか is a な-adjective, so the printed connection is にぎやかな反面.",
        "冬は人が少ない supplies the contrasting low number of people."
      ],
      "trap": "反面 does not require both aspects to occur at the same moment. Nor must you force “few tourists” to be objectively bad; the opposing seasonal tendency is enough here.",
      "reviewHref": "#l4-hanmen"
    }
  },
  {
    "id": "part1-book-03-04-q13",
    "hint": "Automation reduces human labor. What contrasting effect on people’s ingenuity does this sentence set against that benefit?",
    "translation": "Automation reduces human labor, but it also ends up weakening people’s ability to devise solutions.",
    "correctExplanation": "人の工夫する能力 means people’s ability to devise ideas or solutions. 低い → 低くする means make lower; してしまう presents this result as undesirable here. 一方で connects the benefit with that contrasting effect. The sentence makes this claim as an exercise example; the grammar does not prove a general fact about automation.",
    "rationales": {
      "a": "変えてくれる only says the ability is changed in a beneficial way. It does not specify the intended contrasting decline.",
      "b": "高くしてくれる describes improving the ability, adding another benefit. 一方で can add facts elsewhere, but this is not the contrast targeted here.",
      "c": "低くしてしまう expresses the unwelcome lowering of ability set against labor reduction."
    },
    "studyGuide": {
      "reading": "ひくくしてしまう",
      "strongerHint": "Compare the favorable tone of てくれる with the regrettable result suggested by てしまう. Check the direction of the ability change.",
      "clue": "減らしてくれる presents a benefit; the exercise contrasts it with an unwelcome loss of ability.",
      "steps": [
        "人の工夫する能力 means people’s ability to devise ideas or solutions.",
        "低い → 低くする means make lower; してしまう presents this result as undesirable here.",
        "一方で connects the benefit with that contrasting effect. The sentence makes this claim as an exercise example; the grammar does not prove a general fact about automation."
      ],
      "trap": "一方で does not always require a drawback. This item selects one because of the intended benefit-versus-cost comparison. てくれる marks a favor or benefit; it is not a potential, passive, or honorific form.",
      "reviewHref": "#l4-ippo"
    }
  },
  {
    "id": "part1-book-03-04-q14",
    "hint": "The second side is quietly reading books. Which first side gives a distinct aspect of Yamaguchi’s interests?",
    "translation": "Yamaguchi says that, while he gets absorbed in soccer, he also likes quietly reading books.",
    "correctExplanation": "に夢中になる means to become absorbed in or enthusiastic about something. 一方で places that interest alongside 静かに本を読むのも好きだ. Both interests can belong to the same person; there is no claim that he plays soccer while physically reading a book.",
    "rationales": {
      "a": "よく図書館に行く reinforces the reading interest rather than supplying the distinct active side intended here.",
      "b": "サッカーに夢中になる supplies a sporting interest that contrasts naturally with quiet reading.",
      "c": "本をたくさん買う also stays within the book-and-reading theme, so it gives a less distinct second aspect."
    },
    "studyGuide": {
      "reading": "サッカーにむちゅうになる",
      "strongerHint": "Compare an active sporting interest with quiet reading. Two facts that simply repeat the reading theme provide less of a second side.",
      "clue": "Soccer enthusiasm and quiet reading present two distinct interests in the same person.",
      "steps": [
        "に夢中になる means to become absorbed in or enthusiastic about something.",
        "一方で places that interest alongside 静かに本を読むのも好きだ.",
        "Both interests can belong to the same person; there is no claim that he plays soccer while physically reading a book."
      ],
      "trap": "Neither side needs to be a disadvantage. 一方で can present two roles or interests. The other choices are not rejected because they have the wrong verb form.",
      "reviewHref": "#l4-ippo"
    }
  },
  {
    "id": "part1-book-03-04-q15",
    "hint": "寒かった is the description the speaker settles on. Which milder description is being corrected?",
    "translation": "The temperature suddenly dropped today; it was cold rather than just cool.",
    "correctExplanation": "Read B first: 寒かった is the preferred description and places the experience in the past. 涼しい is a plausible milder description on the same cooling scale. 涼しいというより寒かった says that “cold” fits the experience better than “cool.”",
    "rationales": {
      "a": "涼しい gives the natural milder label that the speaker corrects to 寒かった.",
      "b": "暖かい means warm. The sudden drop and final cold description do not establish why “warm” would be the initial label here.",
      "c": "暑い means hot. It is not the plausible understatement of cold required by this exercise."
    },
    "studyGuide": {
      "reading": "すずしい",
      "strongerHint": "The temperature suddenly dropped. Think “not merely cool; actually cold,” rather than two unrelated temperatures.",
      "clue": "というより corrects an understatement of the cold.",
      "steps": [
        "Read B first: 寒かった is the preferred description and places the experience in the past.",
        "涼しい is a plausible milder description on the same cooling scale.",
        "涼しいというより寒かった says that “cold” fits the experience better than “cool.”"
      ],
      "trap": "というより is not a mechanical antonym connector. Corrections involving opposites can exist, but the first description needs a reason to have been suggested in the actual context.",
      "reviewHref": "#l4-to-iu-yori"
    }
  },
  {
    "id": "part1-book-03-04-q16",
    "hint": "ペット is the label being reconsidered. How does this household really see Chiro?",
    "translation": "In our household, our dog Chiro is more a member of the family than a pet.",
    "correctExplanation": "The same dog is being described before and after というより. 家族 names the preferred category: family rather than merely a pet. なんです adds explanatory tone after the noun. The expression does not deny that Chiro is literally a dog.",
    "rationales": {
      "a": "家族なんです supplies the intended warmer relationship label for the same dog.",
      "b": "動物なんです gives a broader biological category. It misses the household’s intended personal reclassification.",
      "c": "かわいいんです adds the quality “cute.” It does not explain how the household regards Chiro more accurately than the label ペット."
    },
    "studyGuide": {
      "reading": "かぞくなんです",
      "strongerHint": "Choose a more fitting relationship label, rather than a biological category or an extra compliment.",
      "clue": "うちでは frames the household’s view; 家族 replaces ペット with a more meaningful relationship.",
      "steps": [
        "The same dog is being described before and after というより.",
        "家族 names the preferred category: family rather than merely a pet.",
        "なんです adds explanatory tone after the noun. The expression does not deny that Chiro is literally a dog."
      ],
      "trap": "A true statement about the subject is not necessarily a suitable correction. “An animal” and “cute” can both be true without improving the relationship label in this context.",
      "reviewHref": "#l4-to-iu-yori"
    }
  },
  {
    "id": "part1-book-03-04-q17",
    "hint": "The job is demanding. Which choice supplies a benefit that balances that drawback?",
    "translation": "This part-time job is demanding, but the pay is good in return.",
    "correctExplanation": "きつい is an い-adjective and connects directly to かわりに. 給料がいい supplies a concrete benefit that balances the demanding work. Both facts describe the same job. The sentence does not say the good pay replaces the hard work.",
    "rationales": {
      "a": "休みがない adds another drawback. It provides no balancing benefit in this sentence.",
      "b": "給料がいい supplies the compensation that makes the trade-off clear.",
      "c": "やってみたい says the speaker wants to try it. That desire is not itself the compensating feature of the job."
    },
    "studyGuide": {
      "reading": "きゅうりょうがいい",
      "strongerHint": "This is the trade-off use of かわりに. Both the difficult work and its compensating advantage are true.",
      "clue": "きつい is the cost; good pay is the compensating benefit.",
      "steps": [
        "きつい is an い-adjective and connects directly to かわりに.",
        "給料がいい supplies a concrete benefit that balances the demanding work.",
        "Both facts describe the same job. The sentence does not say the good pay replaces the hard work."
      ],
      "trap": "Do not translate this かわりに as “instead of being demanding.” This is compensation, not substitution.",
      "reviewHref": "#l4-kawari-ni"
    }
  },
  {
    "id": "part1-book-03-04-q18",
    "hint": "The speaker studies early in the morning. What evening choice does that morning study make up for?",
    "translation": "I go to bed early at night, but make up for it by getting up early and studying in the morning.",
    "correctExplanation": "早く寝る is the dictionary-form action before かわりに. The speaker goes to bed early and gets up early to study; both parts of the routine happen. Morning study compensates for ending the evening early. This is not “getting up early instead of going to bed early.”",
    "rationales": {
      "a": "遅く帰る says the speaker comes home late. On its own it does not establish the intended balanced sleep-and-study arrangement.",
      "b": "眠くなる describes becoming sleepy, not the chosen evening routine balanced by morning study.",
      "c": "早く寝る pairs naturally with getting up early: the speaker ends the evening early and makes time to study in the morning."
    },
    "studyGuide": {
      "reading": "はやくねる",
      "strongerHint": "The intended routine moves study time to the morning: an early bedtime at night is balanced by an early start the next day.",
      "clue": "夜 and 朝 frame a balancing daily arrangement: early bedtime, early-morning study.",
      "steps": [
        "早く寝る is the dictionary-form action before かわりに.",
        "The speaker goes to bed early and gets up early to study; both parts of the routine happen.",
        "Morning study compensates for ending the evening early. This is not “getting up early instead of going to bed early.”"
      ],
      "trap": "Ask whether both actions happen before translating かわりに. Here they do. Do not describe the correct answer as eliminating the early bedtime.",
      "reviewHref": "#l4-kawari-ni"
    }
  }
];
  const byId = new Map(support.map(item => [item.id, item]));
  root.N3QuizData = Object.freeze((root.N3QuizData || []).map(record => {
    const extra = byId.get(record.id);
    return extra ? { ...record, ...extra } : record;
  }));
}(typeof window !== "undefined" ? window : globalThis));
