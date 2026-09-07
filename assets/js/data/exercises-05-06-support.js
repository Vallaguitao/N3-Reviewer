/* Authored study support for the Lessons 5–6 review on Lesson 6.
 * Load after part1-quiz-data.js and before quiz.js. The generated source remains intact.
 * Only these 17 records are enriched; original answer keys and question types are retained.
 */
(function (root) {
  "use strict";
  if (typeof document !== "undefined" && document.body?.dataset.page !== "lesson-06") return;
  const support = [
  {
    "id": "part1-book-05-06-q01",
    "hint": "The computer has broken. Which continuation reports a consequence, rather than proposing or requesting an action?",
    "translation": "Because the computer broke, I could not prepare the materials.",
    "correctExplanation": "ために links the breakdown to a resulting situation. 作る → 作れる → 作れなかった means make → can make → could not make. 資料が作れなかった reports the consequence in the form targeted by the textbook.",
    "rationales": {
      "atarashii": "新しいのを買おう proposes buying a new one. It is a chosen response, not the consequence this causal-ため item asks for.",
      "shiryo": "資料が作れなかった states the resulting inability to prepare the materials.",
      "naoshite": "直してくれませんか asks someone to repair it. The direct request does not match the textbook’s intended causal-report continuation."
    },
    "studyGuide": {
      "reading": "しりょうがつくれなかった",
      "strongerHint": "This is the causal use of ために. Look for what became impossible because of the breakdown.",
      "clue": "こわれてしまった is the cause; inability to prepare the materials is its consequence.",
      "steps": [
        "ために links the breakdown to a resulting situation.",
        "作る → 作れる → 作れなかった means make → can make → could not make.",
        "資料が作れなかった reports the consequence in the form targeted by the textbook."
      ],
      "trap": "買おう is volitional (“let’s buy / I will buy”), not dictionary form. A causal ため sentence can announce a resulting action in formal contexts, but this item contrasts an outcome with a direct proposal and request.",
      "reviewHref": "lesson-05-reasons.html#l5-tame"
    }
  },
  {
    "id": "part1-book-05-06-q02",
    "hint": "Which continuation describes damage caused by the typhoon?",
    "translation": "A bridge was washed away by Typhoon No. 15.",
    "correctExplanation": "The noun naming the typhoon attaches directly to によって. 流す → 流される → 流された is passive past: was washed away. 橋が marks the thing that suffered the damage.",
    "rationales": {
      "hashiga": "橋が流された directly reports the resulting damage.",
      "ooame": "明日は大雨だろう predicts tomorrow’s weather. It does not supply the caused event targeted here; a weather prediction would need a different framing.",
      "gaishutsu": "明日は外出したくない states the speaker’s wish not to go out. It is not a report of a result caused by the typhoon."
    },
    "studyGuide": {
      "reading": "はしがながされた",
      "strongerHint": "によって here links a named cause to an event. Distinguish a resulting event from a forecast or a personal desire.",
      "clue": "台風15号 is the cause; 流された reports what happened to the bridge.",
      "steps": [
        "The noun naming the typhoon attaches directly to によって.",
        "流す → 流される → 流された is passive past: was washed away.",
        "橋が marks the thing that suffered the damage."
      ],
      "trap": "A passive form is helpful here, but causal によって does not require a passive verb in every sentence. Select the cause-and-result relationship, not a blanket rule about the ending.",
      "reviewHref": "lesson-05-reasons.html#l5-ni-yotte"
    }
  },
  {
    "id": "part1-book-05-06-q03",
    "hint": "Does advanced technology provide the method, or is it a person or report being quoted?",
    "translation": "Advanced technology has made detailed health checks possible.",
    "correctExplanation": "The sentence explains how detailed checks became possible. によって identifies the method or enabling means. できるようになった means “became able to / became possible,” so it describes a change in capability.",
    "rationales": {
      "niyotte": "によって identifies the technology through which the checks became possible.",
      "niyoreba": "によれば would present something as an information source. 技術 here supplies the means, not a report saying that checks are possible.",
      "niyoruto": "によると also introduces reported information, which is a different relationship from the means intended here."
    },
    "studyGuide": {
      "reading": "によって",
      "strongerHint": "できるようになった describes something becoming possible. The blank should connect that change to the technology enabling it.",
      "clue": "高い技術 is the enabling means, not a quoted information source.",
      "steps": [
        "The sentence explains how detailed checks became possible.",
        "によって identifies the method or enabling means.",
        "できるようになった means “became able to / became possible,” so it describes a change in capability."
      ],
      "trap": "によれば and によると often mean “according to.” Do not choose them just because they begin with the same によ sequence.",
      "reviewHref": "lesson-05-reasons.html#l5-ni-yotte"
    }
  },
  {
    "id": "part1-book-05-06-q04",
    "hint": "A major problem can develop from a small lapse. Which particle identifies the starting cause?",
    "translation": "A major problem can sometimes arise from a small careless mistake.",
    "correctExplanation": "不注意 is a noun naming the starting cause. Noun + から traces the later development back to that source. こともある means this sometimes happens; the sentence does not claim every small mistake inevitably becomes a major problem.",
    "rationales": {
      "kara": "から marks the source from which the problem develops.",
      "made": "まで marks an endpoint or limit in other uses. It does not identify the starting cause here.",
      "niwa": "には does not express the intended origin of 大問題 in this sentence."
    },
    "studyGuide": {
      "reading": "から",
      "strongerHint": "Read the direction as “from a small careless mistake → a large problem.”",
      "clue": "小さな不注意 is the origin of the problem described by 起こる.",
      "steps": [
        "不注意 is a noun naming the starting cause.",
        "Noun + から traces the later development back to that source.",
        "こともある means this sometimes happens; the sentence does not claim every small mistake inevitably becomes a major problem."
      ],
      "trap": "Small versus large does not automatically call for a “from…to…” pair. Here から marks a cause; there is no matching endpoint まで construction.",
      "reviewHref": "lesson-05-reasons.html#l5-kara-koto"
    }
  },
  {
    "id": "part1-book-05-06-q05",
    "hint": "Which continuation reports a development following the rise in bicycle accidents?",
    "translation": "Because bicycle accidents increased, the police became stricter in their warnings.",
    "correctExplanation": "自転車の事故が増えた is the fact packaged by こと. から connects that fact to the development it prompted. きびしくなった reports a change: the police’s warnings became stricter.",
    "rationales": {
      "kiwotsukeyo": "気をつけよう means “let’s be careful.” It gives a suggestion, not the reported development sought here.",
      "noritakunai": "自転車には乗りたくない states a personal desire not to ride. It does not fit this item’s explanatory-report focus.",
      "keisatsu": "警察の注意がきびしくなった gives the development prompted by the increase in accidents."
    },
    "studyGuide": {
      "reading": "けいさつのちゅういがきびしくなった",
      "strongerHint": "ことから presents the increase as a basis for what changed. Compare a factual change with a suggestion or personal desire.",
      "clue": "増えたことから introduces the fact behind the subsequent institutional response.",
      "steps": [
        "自転車の事故が増えた is the fact packaged by こと.",
        "から connects that fact to the development it prompted.",
        "きびしくなった reports a change: the police’s warnings became stricter."
      ],
      "trap": "気をつけよう is a volitional suggestion, not dictionary form. The textbook’s ことから use explains a development or conclusion rather than functioning as an interchangeable casual reason for an invitation.",
      "reviewHref": "lesson-05-reasons.html#l5-kara-koto"
    }
  },
  {
    "id": "part1-book-05-06-q06",
    "hint": "せいで assigns responsibility for an unwelcome result. Which outcome would the speaker blame the younger brother for?",
    "translation": "Because of my younger brother, I was scolded by my mother.",
    "correctExplanation": "弟 is a noun, so it takes のせいで. しかられた is the passive past of しかる: was scolded. 母に identifies the person who did the scolding; 弟 is the cause the speaker blames.",
    "rationales": {
      "tanoshikatta": "楽しかった describes enjoyment, which does not match the straightforward blame reading given here.",
      "yokuasobeta": "よく遊べた describes being able to play well or a lot, a favorable result in this context.",
      "shikarareta": "母にしかられた gives the unwanted result for which the younger brother is blamed."
    },
    "studyGuide": {
      "reading": "ははにしかられた",
      "strongerHint": "Check the result’s evaluation, not just whether the verb is past.",
      "clue": "Being scolded supplies the unfavorable result matching せいで.",
      "steps": [
        "弟 is a noun, so it takes のせいで.",
        "しかられた is the passive past of しかる: was scolded.",
        "母に identifies the person who did the scolding; 弟 is the cause the speaker blames."
      ],
      "trap": "The person blamed for the outcome is not necessarily the person performing the final action. Distinguish 弟のせいで from 母に.",
      "reviewHref": "lesson-05-reasons.html#l5-okage-sei"
    }
  },
  {
    "id": "part1-book-05-06-q07",
    "hint": "The outcome is successfully treating the illness. Is the cause being appreciated or blamed?",
    "translation": "Thanks to this medicine, I was able to treat the illness successfully.",
    "correctExplanation": "この薬 is the credited cause. Noun + のおかげで expresses a beneficial influence. 治すことができた means “was able to cure / treat successfully” in this exercise sentence.",
    "rationales": {
      "okagede": "のおかげで correctly credits the medicine for the favorable outcome.",
      "seide": "のせいで would assign blame for an unwelcome result; that evaluation is not supplied here.",
      "kara": "から does not naturally express using this medicine as the helpful means in this wording. An origin or starting-cause use would need an appropriate context."
    },
    "studyGuide": {
      "reading": "のおかげで",
      "strongerHint": "薬 is a noun. Choose the connector that both attaches correctly and credits a helpful effect.",
      "clue": "治すことができた presents a successful outcome to credit to the medicine.",
      "steps": [
        "この薬 is the credited cause.",
        "Noun + のおかげで expresses a beneficial influence.",
        "治すことができた means “was able to cure / treat successfully” in this exercise sentence."
      ],
      "trap": "おかげで can credit a thing or circumstance, not only a person. This sentence expresses the example speaker’s outcome, not a claim that a particular medicine works for everyone.",
      "reviewHref": "lesson-05-reasons.html#l5-okage-sei"
    }
  },
  {
    "id": "part1-book-05-06-q08",
    "hint": "The speaker has finally obtained a license. What present wish would that achievement support?",
    "translation": "Now that I have finally got my driving license, I want to buy a car.",
    "correctExplanation": "取れた means the speaker succeeded in obtaining the license. んだから is conversational のだから: given that this is now true. 買いたい expresses the wish to buy a car as the next response to that achievement.",
    "rationales": {
      "katta": "車を買った reports an already completed purchase, missing the current wish prompted by the achievement in this item.",
      "kaitai": "車を買いたい supplies the natural present desire supported by the newly obtained license.",
      "kawanakatta": "車は買わなかった reports not buying a car. The sentence supplies no explanation for that reversal of the expected next step."
    },
    "studyGuide": {
      "reading": "くるまをかいたい",
      "strongerHint": "やっと and んだから frame the achievement as a reason to pursue the next opportunity.",
      "clue": "The hard-won license is the established reason supporting the speaker’s current desire.",
      "steps": [
        "取れた means the speaker succeeded in obtaining the license.",
        "んだから is conversational のだから: given that this is now true.",
        "買いたい expresses the wish to buy a car as the next response to that achievement."
      ],
      "trap": "のだから does not always have to end in a desire or request. This item’s context favors a current wish; do not turn that preference into a universal ban on past-tense statements.",
      "reviewHref": "lesson-05-reasons.html#l5-no-dakara"
    }
  },
  {
    "id": "part1-book-05-06-q09",
    "hint": "The speaker apologizes to a teacher and asks permission. Which reason ending best suits that tone?",
    "translation": "Teacher, I am sorry. I have caught a cold, so please allow me to take today off.",
    "correctExplanation": "The printed かぜをひいて combines with しまったので to give ひいてしまったので. ので presents the illness as explanatory background for the request. 休ませてください asks to be allowed to rest or be absent: the speaker is the person taking the day off.",
    "rationales": {
      "shimattanode": "しまったので gives the appropriate explanatory reason before the request.",
      "shimattandesukara": "しまったんですから stresses that the listener should accept the reason, making this apologetic request sound more pressing than intended.",
      "shimatte": "しまって gives a て-form link but not the explicit reason connection selected for this request. It is not the intended textbook answer."
    },
    "studyGuide": {
      "reading": "しまったので",
      "strongerHint": "Look for a gentle explanation before the request, rather than an insistent appeal to a fact the teacher should already accept.",
      "clue": "先生、すみません and 休ませてください establish an apologetic request for permission.",
      "steps": [
        "The printed かぜをひいて combines with しまったので to give ひいてしまったので.",
        "ので presents the illness as explanatory background for the request.",
        "休ませてください asks to be allowed to rest or be absent: the speaker is the person taking the day off."
      ],
      "trap": "んですから is polite in form but can sound insistent. It is not forbidden with teachers in every situation; here ので best matches the apologetic introduction. Causal て alone is not the textbook’s preferred link to this direct permission request.",
      "reviewHref": "lesson-05-reasons.html#l5-no-dakara"
    }
  },
  {
    "id": "part1-book-05-06-q10",
    "hint": "A is worried about being late for the train. What situation is B responding to?",
    "translation": "A: I am taking the five o’clock Shinkansen. Oh, I may be late—I need to hurry. B: If you are short on time, I will take care of the cleanup, so go now.",
    "correctExplanation": "なら responds to the information in A’s line. 時間がない states the shortage of time, so 時間がないなら fits the helpful offer. やっておく means B will take care of the cleanup; 早く行って urges A to leave quickly.",
    "rationales": {
      "okurenai": "遅れない reverses the problem by saying A will not be late. It does not supply the urgency behind B’s offer.",
      "isoganai": "急がない means not hurrying. It fails to describe the time pressure established by A.",
      "jikan": "時間がない names the relevant shortage and naturally prompts the offer to handle cleanup."
    },
    "studyGuide": {
      "reading": "じかんがない",
      "strongerHint": "B offers to clean up so A can leave quickly. The condition should name the shortage that makes the offer helpful.",
      "clue": "遅れそう and 急がないと establish urgency; B’s offer removes a task that would delay departure.",
      "steps": [
        "なら responds to the information in A’s line.",
        "時間がない states the shortage of time, so 時間がないなら fits the helpful offer.",
        "やっておく means B will take care of the cleanup; 早く行って urges A to leave quickly."
      ],
      "trap": "急がないと here leaves an unwanted consequence implied: “If I do not hurry…”. It means the speaker needs to hurry. 遅れない means “will not be late,” not “cannot be late.”",
      "reviewHref": "#l6-nara"
    }
  },
  {
    "id": "part1-book-05-06-q11",
    "hint": "悪くては presents poor health as an obstacle. Which continuation names the resulting problem?",
    "translation": "If you are feeling unwell, the work probably will not progress.",
    "correctExplanation": "悪い becomes 悪くて before は. 仕事が進まない supplies the problematic result of being unwell. だろう makes that consequence probable rather than certain.",
    "rationales": {
      "susumanai": "仕事が進まないだろう states the expected difficulty with work progress.",
      "yasundemo": "仕事を休んでもいいよ grants permission. It would suit a response introduced with a suitable なら or reason clause instead.",
      "ashita": "あした仕事をしよう proposes working tomorrow. しよう is volitional, and the proposal does not provide the required unfavorable result."
    },
    "studyGuide": {
      "reading": "しごとがすすまないだろう",
      "strongerHint": "Distinguish a prediction about work progress from permission to rest or a plan for tomorrow.",
      "clue": "The textbook’s ては pattern needs an unfavorable consequence of the condition.",
      "steps": [
        "悪い becomes 悪くて before は.",
        "仕事が進まない supplies the problematic result of being unwell.",
        "だろう makes that consequence probable rather than certain."
      ],
      "trap": "A kind response is not automatically the correct grammatical continuation. “You may take time off” is permission; this sentence is structured to describe a bad consequence.",
      "reviewHref": "#l6-tewa-dewa"
    }
  },
  {
    "id": "part1-book-05-06-q12",
    "hint": "What single resource does the speaker present as sufficient for avoiding difficulty while living alone?",
    "translation": "Even when living alone, as long as one has money, one will not have difficulty.",
    "correctExplanation": "ある changes to あれば: if there is money. 困らない gives the desired result of not having difficulty. さえ adds the claim that this condition is sufficient within the speaker’s view.",
    "rationales": {
      "nakerebakomaru": "なければ困る warns about lacking money. It does not state the intended sufficient positive condition highlighted by お金さえ.",
      "arebakomaranai": "あれば困らない completes the claim that having money is enough to avoid trouble.",
      "nakerebaarubaito": "なければアルバイトをする gives an action to take if money is absent, rather than the result enabled by the sufficient condition."
    },
    "studyGuide": {
      "reading": "あればこまらない",
      "strongerHint": "The intended relationship is “having money is enough,” not a plan for what to do when money is absent.",
      "clue": "お金さえ highlights money as the condition the speaker treats as enough.",
      "steps": [
        "ある changes to あれば: if there is money.",
        "困らない gives the desired result of not having difficulty.",
        "さえ adds the claim that this condition is sufficient within the speaker’s view."
      ],
      "trap": "Saying money is enough here is the example speaker’s simplification, not a real-world guarantee. Also, さえ…ば is not the same as merely warning “without money, there will be trouble.”",
      "reviewHref": "#l6-sae"
    }
  },
  {
    "id": "part1-book-05-06-q13",
    "hint": "Repairing the handlebars is presented as the one fix needed. What should that fix make possible?",
    "translation": "If just the handlebars are repaired, this bicycle will probably still be usable.",
    "correctExplanation": "直す → 直せば is the conditional verb following the highlighted noun. 使う → 使える means use → can use. まだ adds “still.” だろう makes the judgment about continued usability probable.",
    "rationales": {
      "tsukaenai": "もう使えない says the bicycle can no longer be used, contradicting the intended usefulness of the sufficient repair.",
      "tsukaeru": "まだ使える supplies the continued usability made possible by repairing the handlebars.",
      "tsukainikui": "使いにくい says the bicycle is difficult to use. It does not supply the intended successful result of that one sufficient repair."
    },
    "studyGuide": {
      "reading": "まだつかえる",
      "strongerHint": "Check whether the result supports sufficiency: after that repair, the bicycle should still be usable.",
      "clue": "ハンドルさえ直せば treats the handlebar repair as sufficient.",
      "steps": [
        "直す → 直せば is the conditional verb following the highlighted noun.",
        "使う → 使える means use → can use. まだ adds “still.”",
        "だろう makes the judgment about continued usability probable."
      ],
      "trap": "Do not read さえ as merely “even.” Here it combines with ば to say the singled-out repair is enough for the stated result.",
      "reviewHref": "#l6-sae"
    }
  },
  {
    "id": "part1-book-05-06-q14",
    "hint": "The final clause says a proposal cannot be carried out without enough support. What favorable quality still fails to overcome that obstacle?",
    "translation": "No matter how good a proposal is, it cannot be carried out if too few people support it.",
    "correctExplanation": "いい案 is a noun phrase: a good proposal. でも follows the noun 案, completing たとえどんなにいい案でも. The final 少なければ condition explains what still blocks implementation: too few supporters.",
    "rationales": {
      "yokunai": "よくない案でも gives a bad proposal, which does not create the intended contrast with inability to carry it out.",
      "iian": "いい案でも gives the favorable condition that still cannot overcome insufficient support.",
      "kangaenakutemo": "案を考えなくても means even without thinking of a proposal. It neither supplies the intended quality scale after どんなに nor the relevant concession."
    },
    "studyGuide": {
      "reading": "いいあんでも",
      "strongerHint": "Read it as “No matter how good the proposal is, too little support prevents implementation.”",
      "clue": "The proposal’s quality does not override the separate requirement for support.",
      "steps": [
        "いい案 is a noun phrase: a good proposal.",
        "でも follows the noun 案, completing たとえどんなにいい案でも.",
        "The final 少なければ condition explains what still blocks implementation: too few supporters."
      ],
      "trap": "An even-if sentence can preserve a negative conclusion despite a favorable condition. Also, いい案でも is correct because でも follows the noun; adjective-only “even if good” would be よくても.",
      "reviewHref": "#l6-tatoe"
    }
  },
  {
    "id": "part1-book-05-06-q15",
    "hint": "What promise would remain despite leaving the country?",
    "translation": "Even if I leave the country, I will not forget you.",
    "correctExplanation": "国を離れても means even if the speaker leaves the country. 忘れない states the promise that remains true despite that change. よ emphasizes the assurance addressed to the listener.",
    "rationales": {
      "wasurenai": "忘れないよ keeps the promise unchanged despite the departure.",
      "wasureru": "忘れるかもしれない allows the distance to lead to forgetting, missing the intended reassurance in this sentence.",
      "omoidasenai": "もう思い出せない means one can no longer remember. It does not maintain the attachment that this even-if assurance expresses."
    },
    "studyGuide": {
      "reading": "わすれないよ",
      "strongerHint": "The condition considers physical distance; the result should maintain the speaker’s attachment rather than make forgetting its expected consequence.",
      "clue": "たとえ…ても sets up a possible obstacle that does not change the promise.",
      "steps": [
        "国を離れても means even if the speaker leaves the country.",
        "忘れない states the promise that remains true despite that change.",
        "よ emphasizes the assurance addressed to the listener."
      ],
      "trap": "忘れるかもしれない means “might forget,” not inability. かもしれない marks possibility. The correct choice comes from the reassuring concession, not from treating every ない ending alike.",
      "reviewHref": "#l6-tatoe"
    }
  },
  {
    "id": "part1-book-05-06-q16",
    "hint": "ああ、よかった expresses relief now. Is the speaker warning about a future possibility, or imagining a worse version of what just happened?",
    "translation": "What a relief. If we had noticed any later, there might have been a fire.",
    "correctExplanation": "遅い → 遅かった → 遅かったら forms the たら conditional for the imagined late discovery. 火事になったかもしれない means a fire might have occurred. The relief indicates that the dangerous alternative did not happen.",
    "rationales": {
      "osoito": "遅いと would naturally introduce a general or expected consequence of noticing late, not this clearly framed alternative past.",
      "osoinara": "遅いなら would take lateness as a premise for a response. It does not fit the retrospective relief as well as 遅かったら.",
      "osokattara": "遅かったら expresses the imagined later discovery that could have led to a fire."
    },
    "studyGuide": {
      "reading": "おそかったら",
      "strongerHint": "The speaker noticed in time. Choose the form that imagines noticing later and a fire that might have resulted.",
      "clue": "よかった plus なったかもしれない places the imagined danger in an alternative past.",
      "steps": [
        "遅い → 遅かった → 遅かったら forms the たら conditional for the imagined late discovery.",
        "火事になったかもしれない means a fire might have occurred.",
        "The relief indicates that the dangerous alternative did not happen."
      ],
      "trap": "The たら form does not always refer to past time. Here the surrounding relief and past possible result identify a counterfactual past. Do not translate “might have” as certainty.",
      "reviewHref": "#l6-ba-tara-nara"
    }
  },
  {
    "id": "part1-book-05-06-q17",
    "hint": "学生時代 and 今では place the speaker after the time when more studying was possible. What ending expresses regret about that missed action?",
    "translation": "Now I deeply regret not having studied more during my student days.",
    "correctExplanation": "勉強する becomes 勉強すれば. よかった completes 勉強すればよかった: studying more would have been better. The following と frames that thought, and 今ではとても残念だ tells us how the speaker feels about it now.",
    "rationales": {
      "ii": "いい does not express the retrospective evaluation required by the student-days regret.",
      "yosasouda": "よさそうだ means it seems good. It does not form the intended past-regret expression.",
      "yokatta": "よかった completes the standard expression for regretting not having studied more."
    },
    "studyGuide": {
      "reading": "よかった",
      "strongerHint": "Recognize the complete pattern ～ばよかった: “I should have…” or “It would have been better if…”.",
      "clue": "The study opportunity is in the past, and とても残念だ expresses present regret.",
      "steps": [
        "勉強する becomes 勉強すれば.",
        "よかった completes 勉強すればよかった: studying more would have been better.",
        "The following と frames that thought, and 今ではとても残念だ tells us how the speaker feels about it now."
      ],
      "trap": "いい and よかった do different work in these expressions. ～ばいい can give advice or express a wish in context; ～ばよかった looks back regretfully on what was not done.",
      "reviewHref": "#l6-ba-tara-nara"
    }
  }
];
  const byId = new Map(support.map(item => [item.id, item]));
  root.N3QuizData = Object.freeze((root.N3QuizData || []).map(record => {
    const extra = byId.get(record.id);
    return extra ? { ...record, ...extra } : record;
  }));
}(typeof window !== "undefined" ? window : globalThis));
