/* English study support for the A–J cumulative review.
 * Load after part2-quiz-data.js and before quiz.js.
 * Enriches 13 review records while retaining original keys and types.
 */
(function (root) {
  "use strict";
  if (typeof document !== "undefined" && document.body?.dataset.page !== "review-a-j") return;
  const support = [
  {
    "id": "review-aj-01",
    "hint": "Is the predicate affirmative or negative, and what does the shop’s selection consist of?",
    "translation": "This shop has nothing but expensive goods on display.",
    "correctExplanation": "高い品物 names the kind of goods. ばかり emphasizes that the display consists of this kind. Nばかり can be followed by the affirmative 並んでいる.",
    "rationales": {
      "1": "ぐらい gives an approximate degree, example, or minimum in suitable contexts; it does not express the intended concentration of expensive items.",
      "2": "なんか marks an example or can sound dismissive; it does not give the intended “nothing but” composition of the display.",
      "3": "しか needs a negative such as 並んでいない; the printed 並んでいる is affirmative.",
      "4": "ばかり correctly expresses that expensive goods dominate the display. The wording can be emphatic rather than a literal inventory count."
    },
    "studyGuide": {
      "reading": "ばかり",
      "strongerHint": "並んでいる is affirmative. The speaker emphasizes that the displayed items are all, or overwhelmingly, expensive.",
      "clue": "The selection is concentrated in one kind of item, with an affirmative ending.",
      "steps": [
        "高い品物 names the kind of goods.",
        "ばかり emphasizes that the display consists of this kind.",
        "Nばかり can be followed by the affirmative 並んでいる."
      ],
      "trap": "Both しか and ばかり may translate as “only,” but しか needs a negative predicate in this use. Always read the sentence ending.",
      "reviewHref": "group-f-bakari.html#gf-bakari",
      "sentence": "この店には高い品物（　）並んでいる。",
      "choiceTexts": {
        "1": "ぐらい",
        "2": "なんか",
        "3": "しか",
        "4": "ばかり"
      }
    }
  },
  {
    "id": "review-aj-02",
    "hint": "Has the pile already collapsed, or does it look close to collapsing?",
    "translation": "There are so many books piled on the desk that they look about to topple over at any moment.",
    "correctExplanation": "今にも frames the collapse as just about to happen. 崩れます gives the stem 崩れ. 崩れそうだ describes the appearance of an impending collapse.",
    "rationales": {
      "1": "崩れているようだ suggests a collapse in progress or a collapsed state, rather than the imminent event marked by 今にも.",
      "2": "崩れそうだ correctly matches 今にも and the visible risk of collapse.",
      "3": "崩れてしまった reports that the collapse already happened, contradicting imminence.",
      "4": "崩れたら大変だ says a collapse would be a problem; it does not supply the impending-appearance predicate that 今にも requires here."
    },
    "studyGuide": {
      "reading": "くずれそうだ",
      "strongerHint": "今にも marks an event that looks about to happen at any moment.",
      "clue": "The visible pile suggests an imminent event.",
      "steps": [
        "今にも frames the collapse as just about to happen.",
        "崩れます gives the stem 崩れ.",
        "崩れそうだ describes the appearance of an impending collapse."
      ],
      "trap": "Appearance そうだ uses the verb stem. Dictionary-form 崩れるそうだ would report what was heard, which is a different construction.",
      "reviewHref": "group-i-fixed-adverbs.html#gi-change",
      "sentence": "机の上に本がたくさん重ねてあって、今にも（　）。",
      "choiceTexts": {
        "1": "崩れているようだ",
        "2": "崩れそうだ",
        "3": "崩れてしまった",
        "4": "崩れたら大変だ"
      }
    }
  },
  {
    "id": "review-aj-03",
    "hint": "Is the book’s damage still hypothetical, or has it already happened after repeated use?",
    "translation": "I kept carrying this book around, and it ended up falling apart. Maybe I should buy a new one.",
    "correctExplanation": "持ち歩いていた describes the repeated or continuing past activity. たら connects that activity with the result that followed. ぼろぼろになってしまった confirms actual damage, not just a warning about future wear.",
    "rationales": {
      "1": "持ち歩いていては would naturally warn that continuing to carry it around will have a bad result; the sentence reports damage that already occurred.",
      "2": "持ち歩いていれば frames a condition or hypothetical relationship, missing this straightforward account of actual accumulated wear.",
      "3": "持ち歩いていたら correctly links the past activity to the realized outcome.",
      "4": "持ち歩いているなら takes the activity as a condition or premise; it does not naturally narrate how this book became damaged."
    },
    "studyGuide": {
      "reading": "もちあるいていたら",
      "strongerHint": "ぼろぼろになってしまった states an actual result. The speaker now considers buying a replacement.",
      "clue": "Repeated carrying led to an already realized result.",
      "steps": [
        "持ち歩いていた describes the repeated or continuing past activity.",
        "たら connects that activity with the result that followed.",
        "ぼろぼろになってしまった confirms actual damage, not just a warning about future wear."
      ],
      "trap": "たら can introduce an actual sequence or discovery. It does not always mean an unreal “if.” Read the past result and the plan to replace the book.",
      "reviewHref": "group-h-conditions.html#gh-notice",
      "sentence": "この本は、いつも（　）、ぼろぼろになってしまった。新しいのを買おうかな。",
      "choiceTexts": {
        "1": "持ち歩いていては",
        "2": "持ち歩いていれば",
        "3": "持ち歩いていたら",
        "4": "持ち歩いているなら"
      }
    }
  },
  {
    "id": "review-aj-04",
    "hint": "What problem would require continuing the answer on the back of the paper?",
    "translation": "If you cannot fit your whole answer here, please continue on the back of the paper.",
    "correctExplanation": "書ききる means write the whole answer. Potential 書ききれる becomes negative 書ききれない. 場合は frames inability to finish within this space as the condition for using the back.",
    "rationales": {
      "1": "書きかける describes beginning or partly completing the writing, not the inability to fit the whole answer here.",
      "2": "書き終わる means finish writing, whereas the instruction concerns an answer that still needs more space.",
      "3": "書ききれない correctly expresses inability to complete the whole answer within the available space.",
      "4": "書き通せない emphasizes inability to continue writing through to the end; it misses the quantity/space limit signaled by ここに and 裏に続きを."
    },
    "studyGuide": {
      "reading": "かききれない",
      "strongerHint": "ここに limits the available space; 続き means there is still more to write.",
      "clue": "The available space may not hold the entire answer.",
      "steps": [
        "書ききる means write the whole answer.",
        "Potential 書ききれる becomes negative 書ききれない.",
        "場合は frames inability to finish within this space as the condition for using the back."
      ],
      "trap": "This is the ability to complete a quantity of writing in a space. 通す emphasizes sustaining an action throughout, which is not the space problem here.",
      "reviewHref": "group-j-expanding-meaning.html#gj-stage",
      "sentence": "質問の答えをここに（　）場合は、紙の裏に続きを書いてください。",
      "choiceTexts": {
        "1": "書きかける",
        "2": "書き終わる",
        "3": "書ききれない",
        "4": "書き通せない"
      }
    }
  },
  {
    "id": "review-aj-05",
    "hint": "What kind of ending completes the emphatic adverb 決して?",
    "translation": "I will surely never forget the words he said at that moment.",
    "correctExplanation": "忘れない is the negative of 忘れる. 決して combines with that negative for never or under no circumstances. だろう adds the speaker’s prediction about remembering the words into the future.",
    "rationales": {
      "1": "覚えていたい expresses a wish to keep remembering, but is affirmative and does not complete 決して in this pattern.",
      "2": "忘れないだろう correctly combines the negative of forgetting with the future prediction.",
      "3": "思い出した reports having recalled something in the past and is affirmative.",
      "4": "忘れようと思う expresses an intention to forget, opposite to the intended message and lacking the negative paired with 決して."
    },
    "studyGuide": {
      "reading": "わすれないだろう",
      "strongerHint": "The intended message firmly predicts never forgetting those words.",
      "clue": "決して strengthens the negative about forgetting.",
      "steps": [
        "忘れない is the negative of 忘れる.",
        "決して combines with that negative for never or under no circumstances.",
        "だろう adds the speaker’s prediction about remembering the words into the future."
      ],
      "trap": "覚えていたい is close in general meaning to wanting to remember, but its affirmative form does not complete the tested 決して…ない pairing.",
      "reviewHref": "group-i-fixed-adverbs.html#gi-negative",
      "sentence": "わたしはそのとき彼が言った言葉を決して（　）。",
      "choiceTexts": {
        "1": "覚えていたい",
        "2": "忘れないだろう",
        "3": "思い出した",
        "4": "忘れようと思う"
      }
    }
  },
  {
    "id": "review-aj-06",
    "hint": "Is B predicting which job is likely, or expressing enthusiasm for a desired kind of work?",
    "translation": "A: “What kind of work would you like to do in the future?” B: “I would really like to do work connected with Japan.”",
    "correctExplanation": "仕事をしたい is the desired action. ぜひ adds eagerness: really or definitely want to. と考えています reports that wish as the speaker’s current plan or aspiration.",
    "rationales": {
      "1": "どうか usually adds an earnest appeal to someone or a prayer-like wish; it is not the natural marker for this straightforward statement of personal aspiration.",
      "2": "まるで emphasizes resemblance and needs an appropriate comparison, absent here.",
      "3": "おそらく means probably and changes an eager wish into a probability judgment.",
      "4": "ぜひ correctly strengthens the speaker’s wish to work in a field connected with Japan."
    },
    "studyGuide": {
      "reading": "ぜひ",
      "strongerHint": "したいと考えています describes the speaker’s own wish for the future.",
      "clue": "The speaker expresses an eager personal wish.",
      "steps": [
        "仕事をしたい is the desired action.",
        "ぜひ adds eagerness: really or definitely want to.",
        "と考えています reports that wish as the speaker’s current plan or aspiration."
      ],
      "trap": "Do not treat strong desire as a probability prediction. ぜひ supports wanting; おそらく supports a likely judgment.",
      "reviewHref": "group-i-fixed-adverbs.html#gi-request",
      "sentence": "A「将来はどんな仕事をしたいのですか。」 B「わたしは（　）日本に関係がある仕事をしたいと考えています。」",
      "choiceTexts": {
        "1": "どうか",
        "2": "まるで",
        "3": "おそらく",
        "4": "ぜひ"
      }
    }
  },
  {
    "id": "review-aj-07",
    "hint": "Is the worker inventing a personal decision now, or explaining an established procedure?",
    "translation": "Excuse me, could I have your seal here? The rule is that I cannot hand over registered mail without receiving your seal.",
    "correctExplanation": "お渡しできない is a polite inability to hand it over without the required seal. ことになる presents the arrangement as established, rather than a personal choice. なっている describes the rule currently in force; the printed んです adds the explanation.",
    "rationales": {
      "1": "ことになっている correctly presents the handover condition as an established rule.",
      "2": "ようにしている describes the worker’s own maintained effort or practice, missing the external-procedure explanation.",
      "3": "ことにする describes a personal decision and does not give the established-rule meaning of this response.",
      "4": "ようになる describes a change in state or ability, not a rule that currently governs handover."
    },
    "studyGuide": {
      "reading": "ことになっている",
      "strongerHint": "はんこをいただかないとお渡しできない explains the reason for a procedural request.",
      "clue": "The worker explains an established rule governing the handover in this scenario.",
      "steps": [
        "お渡しできない is a polite inability to hand it over without the required seal.",
        "ことになる presents the arrangement as established, rather than a personal choice.",
        "なっている describes the rule currently in force; the printed んです adds the explanation."
      ],
      "trap": "Read the complete scope: “cannot hand it over unless…” is the content of the rule. This example describes the exercise’s procedure; it does not establish every real-world delivery requirement.",
      "reviewHref": "group-g-suru-naru.html#gg-decision",
      "sentence": "すみません。はんこをお願いします。書留ははんこをいただかないとお渡しできない（　）んです。",
      "choiceTexts": {
        "1": "ことになっている",
        "2": "ようにしている",
        "3": "ことにする",
        "4": "ようになる"
      }
    }
  },
  {
    "id": "review-aj-08",
    "hint": "Is the sentence saying intelligence is only hypothetical, or listing two good qualities Hayashi already has?",
    "translation": "Hayashi is both intelligent and good at sports, and he is popular with the girls in his class.",
    "correctExplanation": "Aも…ばBも… can add two qualities: both A and B. 頭がいい becomes 頭もよければ in this pattern; いい uses the よい stem. スポーツもできて supplies the second quality and leads to the popularity statement.",
    "rationales": {
      "1": "頭がいいと makes intelligence a condition or trigger instead of forming the paired additive construction.",
      "2": "頭もよければ correctly forms the first half of も…ば…も and uses the proper ば-form of いい.",
      "3": "頭がよかったら frames a condition instead of listing intelligence as an established quality.",
      "4": "頭もいいのなら takes intelligence as a premise and misses the fixed additive relationship with スポーツも."
    },
    "studyGuide": {
      "reading": "あたまもよければ",
      "strongerHint": "The later スポーツも pairs with an earlier も in an additive construction.",
      "clue": "The sentence lists intelligence and sporting ability as two existing qualities.",
      "steps": [
        "Aも…ばBも… can add two qualities: both A and B.",
        "頭がいい becomes 頭もよければ in this pattern; いい uses the よい stem.",
        "スポーツもできて supplies the second quality and leads to the popularity statement."
      ],
      "trap": "ば is not always hypothetical. The paired も…ば…も construction adds facts; do not translate it as “if he were intelligent.”",
      "reviewHref": "group-h-conditions.html#gh-both",
      "sentence": "林君は（　）スポーツもできて、クラスの女の子たちに人気がある。",
      "choiceTexts": {
        "1": "頭がいいと",
        "2": "頭もよければ",
        "3": "頭がよかったら",
        "4": "頭もいいのなら"
      }
    }
  },
  {
    "id": "review-aj-09",
    "hint": "Does the advice recommend replacing speaking entirely, or adding listening as well?",
    "translation": "You should make a point of listening carefully to others as well as talking about yourself.",
    "correctExplanation": "する gives the general activity of talking about oneself. ばかりでなく means not only that activity. ほかの人の話も supplies what should also be included.",
    "rationales": {
      "1": "するばかりでなく correctly introduces the activity to which listening should be added.",
      "2": "したばかりでなく uses past した, shifting the clause toward an already completed act rather than the general behavior in the advice. Vたばかり can also express recent completion in a different construction.",
      "3": "するばかりで means only talking about oneself and does not form the intended not-only addition to ほかの人の話も.",
      "4": "しないばかりで negates talking and lacks the not-only connector でなく, changing both the action and the relationship."
    },
    "studyGuide": {
      "reading": "するばかりでなく",
      "strongerHint": "ほかの人の話も signals the second activity to include alongside talking about oneself.",
      "clue": "The advice adds listening to speaking, rather than limiting interaction to one activity.",
      "steps": [
        "する gives the general activity of talking about oneself.",
        "ばかりでなく means not only that activity.",
        "ほかの人の話も supplies what should also be included."
      ],
      "trap": "The following も is a useful clue, but still check tense. General advice about behavior calls for する here, not a report of one completed act.",
      "reviewHref": "group-f-bakari.html#gf-dakenaku",
      "sentence": "自分の話を（　）、ほかの人の話もよく聞くようにしたほうがいいよ。",
      "choiceTexts": {
        "1": "するばかりでなく",
        "2": "したばかりでなく",
        "3": "するばかりで",
        "4": "しないばかりで"
      }
    }
  },
  {
    "id": "review-aj-10",
    "hint": "What does the speaker want the clothes to express about the wearer?",
    "translation": "I want to wear clothes that express who I am, rather than the same kind of clothes as everyone else.",
    "correctExplanation": "自分 identifies the person whose character matters. Characteristic らしい means fitting or expressive of that person. 自分らしい modifies the noun 服 directly.",
    "rationales": {
      "1": "みたいな compares the clothes with the speaker as an object of resemblance, missing the intended expression of personal character.",
      "2": "のつもりの concerns intention or treating something as something else, not clothing suited to one’s character.",
      "3": "らしい correctly gives 自分らしい服: clothes that feel like oneself.",
      "4": "のような expresses resemblance; it does not naturally give the intended distinctive personal-style expression here."
    },
    "studyGuide": {
      "reading": "らしい",
      "strongerHint": "みんなと同じ…ではなくて contrasts conformity with clothing that fits the speaker’s own character.",
      "clue": "The clothes should suit or express the wearer’s individual character.",
      "steps": [
        "自分 identifies the person whose character matters.",
        "Characteristic らしい means fitting or expressive of that person.",
        "自分らしい modifies the noun 服 directly."
      ],
      "trap": "らしい here is not hearsay, and the clothes are not literally a person. The expression describes a fitting quality, not identity.",
      "reviewHref": "group-j-expanding-meaning.html#gj-quality",
      "sentence": "みんなと同じような服ではなくて、自分（　）服を着たい。",
      "choiceTexts": {
        "1": "みたいな",
        "2": "のつもりの",
        "3": "らしい",
        "4": "のような"
      }
    }
  },
  {
    "id": "review-aj-11",
    "hint": "What should happen to the current soap before a new one is taken out?",
    "translation": "Let’s use up this soap before taking out a new one.",
    "correctExplanation": "使いきる means use it all up. 使いきって is its て-form; から places the next action after completion. 出そう is the volitional form: let’s take out a new one.",
    "rationales": {
      "1": "使いすぎてから has a suitable sequence connector but says after using too much, not after using up the current soap.",
      "2": "使いきってから correctly combines complete consumption with a deliberate next step.",
      "3": "使いすぎると both introduces excess and uses conditional と before a volitional proposal, which does not fit this planned sequence.",
      "4": "使いきると has the completion meaning, but conditional と is unsuitable for introducing the independent proposal 出そう here; てから gives the intended sequence."
    },
    "studyGuide": {
      "reading": "つかいきってから",
      "strongerHint": "新しいのを出そう is a deliberate next action after the current soap has been fully used.",
      "clue": "Full use of the current soap must come before the planned next step.",
      "steps": [
        "使いきる means use it all up.",
        "使いきって is its て-form; から places the next action after completion.",
        "出そう is the volitional form: let’s take out a new one."
      ],
      "trap": "There are two tests: completion versus excess, and planned sequence versus conditional と. Do not stop after recognizing きる.",
      "reviewHref": "group-j-expanding-meaning.html#gj-stage",
      "sentence": "この石けんを（　）、新しいのを出そう。",
      "choiceTexts": {
        "1": "使いすぎてから",
        "2": "使いきってから",
        "3": "使いすぎると",
        "4": "使いきると"
      }
    }
  },
  {
    "id": "review-aj-12",
    "hint": "Has Yamada not left yet, already completed leaving moments ago, or been leaving repeatedly?",
    "translation": "A: “Where is Yamada? Has Yamada gone home already?” B: “Yamada only just left, so I think you can still find them nearby.”",
    "correctExplanation": "帰った is the completed act of leaving for home. たところ identifies the moment just after completion. 帰ったところだから gives that very recent departure as the reason Yamada is probably nearby.",
    "rationales": {
      "1": "帰るばかり means only returning remains in a suitable context; it is not the Vたばかり recent-completion pattern and does not report that Yamada has just left.",
      "2": "帰っているところ describes the action in progress, rather than the just-completed departure emphasized by たった今 and だから.",
      "3": "帰ってばかり suggests repeatedly doing little but returning, not one departure moments ago.",
      "4": "帰ったところ correctly marks the instant just after leaving."
    },
    "studyGuide": {
      "reading": "かえったところ",
      "strongerHint": "たった今 points to immediate completion, while まだその辺にいる gives the nearby result.",
      "clue": "The departure has just happened, so Yamada may still be close.",
      "steps": [
        "帰った is the completed act of leaving for home.",
        "たところ identifies the moment just after completion.",
        "帰ったところだから gives that very recent departure as the reason Yamada is probably nearby."
      ],
      "trap": "帰った can mean left for home in this setting; it does not prove arrival at home. Vたばかり is also recent completion, but none of the ばかり choices here uses that form.",
      "reviewHref": "../lessons/lesson-01-toki.html",
      "sentence": "A「あれ、山田さんは？　もう帰った？」 B「山田さんならたった今（　）だから、まだその辺にいると思いますよ。」",
      "choiceTexts": {
        "1": "帰るばかり",
        "2": "帰っているところ",
        "3": "帰ってばかり",
        "4": "帰ったところ"
      }
    }
  },
  {
    "id": "review-aj-13",
    "hint": "Did the speaker cause the brightness, or discover a change that had already happened while asleep?",
    "translation": "I fell asleep without realizing it. When I woke up, it was already light outside.",
    "correctExplanation": "明るい becomes 明るく before なる. なる describes the change in brightness, rather than someone making it bright with する. なっていた presents the resulting state already established at the past moment of waking.",
    "rationales": {
      "1": "明るくした says someone made something bright, rather than describing the natural change outside.",
      "2": "明るくなった reports the change itself; なっていた better expresses the already existing result discovered on waking.",
      "3": "明るくしていた implies someone was keeping or making something bright and does not match the natural outside state.",
      "4": "明るくなっていた correctly expresses that it had already become light by the time of waking."
    },
    "studyGuide": {
      "reading": "あかるくなっていた",
      "strongerHint": "もう and the moment of waking point to an already established state outside.",
      "clue": "Daylight had arrived before the speaker noticed it on waking.",
      "steps": [
        "明るい becomes 明るく before なる.",
        "なる describes the change in brightness, rather than someone making it bright with する.",
        "なっていた presents the resulting state already established at the past moment of waking."
      ],
      "trap": "With a change verb, ていた can describe the state after a change, not only an action in progress. Here 目が覚めると introduces what the speaker discovered.",
      "reviewHref": "group-g-suru-naru.html#gg-state",
      "sentence": "いつの間にか眠ってしまって、目が覚めると、外はもう（　）。",
      "choiceTexts": {
        "1": "明るくした",
        "2": "明るくなった",
        "3": "明るくしていた",
        "4": "明るくなっていた"
      }
    }
  }
];
  const byId = new Map(support.map(item => [item.id, item]));
  root.N3QuizData = Object.freeze((root.N3QuizData || []).map(record => {
    const extra = byId.get(record.id);
    return extra ? { ...record, ...extra } : record;
  }));
}(typeof window !== "undefined" ? window : globalThis));
