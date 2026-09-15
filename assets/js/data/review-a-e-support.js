/* English study support for the A–E cumulative review.
 * Load after part2-quiz-data.js and before quiz.js.
 * Enriches 13 review records while retaining original keys and types.
 */
(function (root) {
  "use strict";
  if (typeof document !== "undefined" && document.body?.dataset.page !== "review-a-e") return;
  const support = [
  {
    "id": "review-ae-01",
    "hint": "Are the students the topic of a discussion, an evaluator’s viewpoint, or the people receiving an attitude?",
    "translation": "I want teachers to treat every student with the same attitude.",
    "correctExplanation": "態度をとる is directed toward the students. に対して marks the target of that attitude. どの生徒に対しても means toward every student, regardless of which student.",
    "rationales": {
      "1": "にとって means from someone’s standpoint or for someone in an evaluation; it does not direct the teacher’s attitude toward the students.",
      "2": "に向いて can describe orientation or suitability in other constructions, but it does not give the intended target-of-attitude expression or complete the inclusive どの…も pattern.",
      "3": "に対しても correctly identifies every student as a recipient of the same treatment.",
      "4": "についても would make students a topic of discussion or information, rather than recipients of treatment."
    },
    "studyGuide": {
      "reading": "にたいしても",
      "strongerHint": "態度をとる describes how the teacher treats people. どの needs an ending that includes every student.",
      "clue": "The students receive the teacher’s attitude, and どの…も includes them all.",
      "steps": [
        "態度をとる is directed toward the students.",
        "に対して marks the target of that attitude.",
        "どの生徒に対しても means toward every student, regardless of which student."
      ],
      "trap": "Do not select にとって simply because the noun is a person. Ask whether that person supplies a viewpoint or receives an action or attitude.",
      "reviewHref": "group-b-particle-like-words.html#gb-ni-taishite",
      "sentence": "先生にはどの生徒（　）同じような態度をとってもらいたい。",
      "choiceTexts": {
        "1": "にとって",
        "2": "に向いて",
        "3": "に対しても",
        "4": "についても"
      }
    }
  },
  {
    "id": "review-ae-02",
    "hint": "Does the final cost merely seem similar to something, or match an earlier calculation?",
    "translation": "A: “I’m glad the move is over. How much did it cost in the end?” B: “It was 35,000 yen in total—just as I had calculated.”",
    "correctExplanation": "計算していた describes the calculation already made. とおり follows the verb clause to mean as calculated. だった reports that the final cost matched the estimate.",
    "rationales": {
      "1": "よう would give a resemblance or inference reading, rather than the exact agreement with a prior calculation intended here.",
      "2": "わけ introduces an explanation or conclusion; it does not express “as calculated” in this phrase.",
      "3": "ばかり can mark limitation or approximate quantity elsewhere, but it does not express agreement after 計算していた.",
      "4": "とおり correctly links the actual cost to the prior calculation."
    },
    "studyGuide": {
      "reading": "とおり",
      "strongerHint": "計算していた is the earlier estimate; the speaker confirms that the actual amount matched it.",
      "clue": "The actual result agrees with the earlier calculation.",
      "steps": [
        "計算していた describes the calculation already made.",
        "とおり follows the verb clause to mean as calculated.",
        "だった reports that the final cost matched the estimate."
      ],
      "trap": "Read both speakers. The reported amount is a confirmed result, not merely an impression about the cost.",
      "reviewHref": "../lessons/lesson-02-kankei.html#l2-toori",
      "sentence": "A「引っ越し、終わってよかったね。結局いくらかかったの。」 B「全部で３万５千円だった。計算していた（　）だったよ。」",
      "choiceTexts": {
        "1": "よう",
        "2": "わけ",
        "3": "ばかり",
        "4": "とおり"
      }
    }
  },
  {
    "id": "review-ae-03",
    "hint": "Is the speaker describing a standing personal rule or a single past decision?",
    "translation": "I make it a rule not to eat anything after 9 p.m.",
    "correctExplanation": "食べない names the action to avoid. ことにする expresses choosing a rule or course of action. している shows that the chosen rule is being maintained: 食べないことにしている.",
    "rationales": {
      "1": "食べないことにしている correctly states the ongoing rule of not eating after that time.",
      "2": "食べていないことにした changes the content and time to a past decision about a not-eating state; it does not express this maintained daily rule.",
      "3": "食べたくないのにしている does not form the fixed decision pattern ことにしている; たくない also changes the content to lack of desire.",
      "4": "食べていないのにした does not form the intended personal-rule expression; こと cannot simply be replaced with の here."
    },
    "studyGuide": {
      "reading": "たべないことにしている",
      "strongerHint": "夜９時を過ぎたら sets the recurring situation; 何も goes with a negative eating rule.",
      "clue": "The speaker maintains a self-chosen rule.",
      "steps": [
        "食べない names the action to avoid.",
        "ことにする expresses choosing a rule or course of action.",
        "している shows that the chosen rule is being maintained: 食べないことにしている."
      ],
      "trap": "Distinguish the rule itself from a report about a current state. 食べない is the action avoided; 食べていない describes not having eaten or not currently eating.",
      "reviewHref": "group-c-koto-no.html#gc-koto-only",
      "sentence": "わたしは夜９時を過ぎたら何も（　）。",
      "choiceTexts": {
        "1": "食べないことにしている",
        "2": "食べていないことにした",
        "3": "食べたくないのにしている",
        "4": "食べていないのにした"
      }
    }
  },
  {
    "id": "review-ae-04",
    "hint": "Is falling asleep an intentional policy, or something that sometimes happens when tired?",
    "translation": "When I am tired, I sometimes doze off for a little while in front of the computer.",
    "correctExplanation": "眠ってしまう presents dozing off as an unintended event. Verb dictionary form + こともある means sometimes the event happens. The full phrase is 眠ってしまうこともある.",
    "rationales": {
      "1": "のもある does not supply the fixed occasional-occurrence pattern used with this verb clause.",
      "2": "こともある correctly expresses that dozing off sometimes happens.",
      "3": "ことにする makes it an intentional decision, conflicting with the accidental event described here.",
      "4": "ようにする expresses a deliberate effort or arrangement, rather than an occasional unintended doze."
    },
    "studyGuide": {
      "reading": "こともある",
      "strongerHint": "疲れているとき and 眠ってしまう describe an occasional, unplanned occurrence.",
      "clue": "The speaker reports something that happens on some occasions.",
      "steps": [
        "眠ってしまう presents dozing off as an unintended event.",
        "Verb dictionary form + こともある means sometimes the event happens.",
        "The full phrase is 眠ってしまうこともある."
      ],
      "trap": "こともある describes occasional occurrence. Do not confuse it with Vたことがある, which reports past experience, or ことにする, which expresses a decision.",
      "reviewHref": "group-c-koto-no.html#gc-koto-only",
      "sentence": "疲れているときはパソコンの前で少し眠ってしまう（　）。",
      "choiceTexts": {
        "1": "のもある",
        "2": "こともある",
        "3": "ことにする",
        "4": "ようにする"
      }
    }
  },
  {
    "id": "review-ae-05",
    "hint": "What does the speaker admit about the evidence for this opinion?",
    "translation": "I have not actually asked Lee in person, but I think Lee did not want to do this job.",
    "correctExplanation": "聞いた names the possible direct act of asking. わけではない denies that this is what actually happened. が then contrasts that lack of direct confirmation with the speaker’s opinion.",
    "rationales": {
      "1": "聞いたわけではない correctly clarifies that the speaker did not actually ask Lee.",
      "2": "聞いたようではない would concern an appearance or impression; it does not naturally state this limit on the speaker’s own direct evidence.",
      "3": "聞くだけではない means more than merely asking and changes the statement to additional actions.",
      "4": "聞くはずではない concerns an expectation or arrangement about asking, not whether direct confirmation actually occurred."
    },
    "studyGuide": {
      "reading": "きいたわけではない",
      "strongerHint": "本人に directly concerns asking Lee in person; と思う gives the speaker’s own conclusion.",
      "clue": "The speaker limits the basis of the opinion: no direct confirmation from Lee.",
      "steps": [
        "聞いた names the possible direct act of asking.",
        "わけではない denies that this is what actually happened.",
        "が then contrasts that lack of direct confirmation with the speaker’s opinion."
      ],
      "trap": "わけではない does not always translate neatly as “not always.” Here it denies a specific assumption: that the speaker actually asked Lee.",
      "reviewHref": "group-e-wake.html#ge-wake",
      "sentence": "実際に本人に（　）が、リーさんはこの仕事はしたくなかったと思う。",
      "choiceTexts": {
        "1": "聞いたわけではない",
        "2": "聞いたようではない",
        "3": "聞くだけではない",
        "4": "聞くはずではない"
      }
    }
  },
  {
    "id": "review-ae-06",
    "hint": "Who would walk, and who is responsible for allowing it?",
    "translation": "We cannot let a small child walk alone along a dark road. Someone has to go and meet them.",
    "correctExplanation": "歩く becomes the causative 歩かせる: let or make someone walk. 小さい子どもに identifies the person who would do the walking. 歩かせるわけにはいかない means we cannot responsibly allow that to happen.",
    "rationales": {
      "1": "歩くわけにはいかない would normally concern the subject’s own walking and does not express allowing the child to walk in this construction.",
      "2": "歩かせるわけにはいかない correctly rejects letting the child walk alone.",
      "3": "歩かせたらいいだろう suggests that letting the child walk would be fine, contradicting the need to collect them.",
      "4": "歩いたらどうだろう proposes walking and does not express the adult’s responsibility to prevent the child’s solitary walk."
    },
    "studyGuide": {
      "reading": "あるかせるわけにはいかない",
      "strongerHint": "The child would walk. The adults reject letting that happen and say someone must collect the child.",
      "clue": "The adult refuses to allow the child’s action for a practical or moral reason.",
      "steps": [
        "歩く becomes the causative 歩かせる: let or make someone walk.",
        "小さい子どもに identifies the person who would do the walking.",
        "歩かせるわけにはいかない means we cannot responsibly allow that to happen."
      ],
      "trap": "Causative does not always mean force. Here 歩かせる is about letting the child walk; the following sentence explains why an adult must intervene.",
      "reviewHref": "group-e-wake.html#ge-wake-niwa",
      "sentence": "小さい子どもに暗い道を一人で（　）。だれか迎えに行かなくては。",
      "choiceTexts": {
        "1": "歩くわけにはいかない",
        "2": "歩かせるわけにはいかない",
        "3": "歩かせたらいいだろう",
        "4": "歩いたらどうだろう"
      }
    }
  },
  {
    "id": "review-ae-07",
    "hint": "What condition does the speaker use to treat the amount as small enough?",
    "translation": "My doctor has told me not to drink alcohol, but just a little should be all right.",
    "correctExplanation": "ちょっと presents the amount as small. ぐらい reinforces that limited degree. なら means if it is only that much, linking the small amount to the speaker’s いいだろう judgment.",
    "rationales": {
      "1": "だけでは means with only that much / that alone, often leading to insufficiency; it does not express the intended allowance for a small amount.",
      "2": "だけでも means even just that much, shifting the emphasis from a limited condition to inclusion of a small amount.",
      "3": "ぐらいなら correctly gives “if it is only about that much.”",
      "4": "などなら uses exemplification or dismissal and is not the natural way to build this ちょっと-based amount condition."
    },
    "studyGuide": {
      "reading": "ぐらいなら",
      "strongerHint": "ちょっと minimizes the amount, while なら frames the limited case being judged by いいだろう.",
      "clue": "The speaker downplays the amount and makes that small amount a condition.",
      "steps": [
        "ちょっと presents the amount as small.",
        "ぐらい reinforces that limited degree.",
        "なら means if it is only that much, linking the small amount to the speaker’s いいだろう judgment."
      ],
      "trap": "This is a small-amount condition, not the separate Vぐらいなら construction meaning “rather than do V.” The judgment belongs to the speaker in the exercise.",
      "reviewHref": "group-a-particles.html#ga-gurai",
      "sentence": "医者にお酒を止められているが、ちょっと（　）いいだろう。",
      "choiceTexts": {
        "1": "だけでは",
        "2": "だけでも",
        "3": "ぐらいなら",
        "4": "などなら"
      }
    }
  },
  {
    "id": "review-ae-08",
    "hint": "Is B denying a mistake, or suggesting one as an explanation for being unable to find the house?",
    "translation": "A: “That’s strange. I’m sure Tanaka’s house is somewhere around here…” B: “That is odd. Could we have taken a wrong turn on the way?”",
    "correctExplanation": "間違えた identifies a possible wrong turn already taken. のでは joins the printed ないですか. 間違えたのではないですか tentatively suggests that a mistake may have occurred.",
    "rationales": {
      "1": "間違えたのでは correctly completes the tentative explanatory question.",
      "2": "間違えるはずでは would produce an expectation-related statement about going wrong, not the intended suggestion of a past mistake.",
      "3": "間違えるようでは would introduce an if/in-that-condition reading that does not complete this natural explanatory question.",
      "4": "間違えたことでは does not form the explanatory のではないですか pattern."
    },
    "studyGuide": {
      "reading": "まちがえたのでは",
      "strongerHint": "The printed ending is ないですか. Complete a tentative “could it be that…?” suggestion.",
      "clue": "B proposes a possible past mistake as the explanation.",
      "steps": [
        "間違えた identifies a possible wrong turn already taken.",
        "のでは joins the printed ないですか.",
        "間違えたのではないですか tentatively suggests that a mistake may have occurred."
      ],
      "trap": "Do not count ない and assume the speaker says no mistake happened. The whole question のではないですか can put forward an explanation.",
      "reviewHref": "group-c-koto-no.html#gc-no-only",
      "sentence": "A「あれ、おかしいなあ。田中さんのうちは、確かこの近くなのですが…」 B「変ですね。途中で道を（　）ないですか。」",
      "choiceTexts": {
        "1": "間違えたのでは",
        "2": "間違えるはずでは",
        "3": "間違えるようでは",
        "4": "間違えたことでは"
      }
    }
  },
  {
    "id": "review-ae-09",
    "hint": "What new information makes the neighbor understand the student’s late-night studying?",
    "translation": "Student: “My university entrance exams are coming up soon.” Neighbor: “Ah, that explains why you are studying until late every day.”",
    "correctExplanation": "もうすぐ大学試験 supplies the reason. 毎日遅くまで勉強をしている is the behavior being explained. わけですね expresses the resulting understanding: so that is why.",
    "rationales": {
      "1": "しているわけです correctly presents the studying as the explained conclusion.",
      "2": "していることです states or nominalizes a fact but misses the “now I understand why” function of ああ、それで.",
      "3": "しないわけではないんです means it is not that the person does not study, a qualified denial unrelated to the neighbor’s realization.",
      "4": "しないことではないんです does not provide the intended explanatory conclusion and adds an unnecessary negative construction."
    },
    "studyGuide": {
      "reading": "しているわけです",
      "strongerHint": "ああ、それで signals “Ah, that explains it.” The exam gives the reason for an already observed habit.",
      "clue": "The neighbor connects a known behavior with its newly understood reason.",
      "steps": [
        "もうすぐ大学試験 supplies the reason.",
        "毎日遅くまで勉強をしている is the behavior being explained.",
        "わけですね expresses the resulting understanding: so that is why."
      ],
      "trap": "Positive わけだ can explain a conclusion without denying anything. Do not choose a double negative just because you recognize わけではない.",
      "reviewHref": "group-e-wake.html#ge-wake",
      "sentence": "学生「もうすぐ大学試験なんですよ。」 となりの家の人「ああ、それで毎日遅くまで勉強を（　）ね。」",
      "choiceTexts": {
        "1": "しているわけです",
        "2": "していることです",
        "3": "しないわけではないんです",
        "4": "しないことではないんです"
      }
    }
  },
  {
    "id": "review-ae-10",
    "hint": "Is the speaker defining a quoted expression, or describing the general nature of a thing?",
    "translation": "The expression “乞うご期待” means “Please look forward to it.”",
    "correctExplanation": "「乞うご期待」 is the expression being explained. というのは makes that expression the topic of the definition. The explanation then ends with 「期待していてください」という意味です.",
    "rationales": {
      "1": "というのは correctly introduces the phrase whose meaning will be defined.",
      "2": "というものは points toward a general statement about a kind of thing, rather than this ordinary quoted-expression definition.",
      "3": "ということでは does not supply the topic frame needed before the stated meaning.",
      "4": "というのでは uses では and does not naturally introduce this direct definition with という意味です."
    },
    "studyGuide": {
      "reading": "というのは",
      "strongerHint": "The second half explicitly says という意味です: “means…”",
      "clue": "A quoted phrase is introduced for a definition.",
      "steps": [
        "「乞うご期待」 is the expression being explained.",
        "というのは makes that expression the topic of the definition.",
        "The explanation then ends with 「期待していてください」という意味です."
      ],
      "trap": "というものは often introduces a general claim about the nature of something. For the meaning of a quoted word or expression, recognize XというのはYという意味です.",
      "reviewHref": "group-c-koto-no.html#gc-no-only",
      "sentence": "「乞うご期待」（　）、「期待していてください」という意味です。",
      "choiceTexts": {
        "1": "というのは",
        "2": "というものは",
        "3": "ということでは",
        "4": "というのでは"
      }
    }
  },
  {
    "id": "review-ae-11",
    "hint": "What is supposed to happen to 意味, and why does the speaker recommend choosing words carefully?",
    "translation": "Let’s use the correct words so that our meaning gets across accurately.",
    "correctExplanation": "伝わる is intransitive: 意味が伝わる, the meaning gets across. ように introduces that desired result. 正しい言葉を使いましょう gives the action proposed to achieve it.",
    "rationales": {
      "1": "伝えるために would suit a deliberate act of conveying something, but would normally need 意味を; the printed 意味が calls for the intransitive result.",
      "2": "伝わるように correctly expresses the desired outcome with 意味が.",
      "3": "伝わることで frames getting the meaning across as a means or cause, reversing its intended role as the goal of careful word choice.",
      "4": "伝えることで presents conveying as a means and also mismatches the printed subject 意味が for this intended sentence."
    },
    "studyGuide": {
      "reading": "つたわるように",
      "strongerHint": "意味が is the subject: the meaning should get across. The following advice is the means of achieving that result.",
      "clue": "The intended result is for the meaning to be communicated correctly.",
      "steps": [
        "伝わる is intransitive: 意味が伝わる, the meaning gets across.",
        "ように introduces that desired result.",
        "正しい言葉を使いましょう gives the action proposed to achieve it."
      ],
      "trap": "Check が versus を before deciding between 伝わる and 伝える. The sentence has 意味が, so treating it as an object of 伝える breaks the role assignment.",
      "reviewHref": "group-d-you.html#gd-known-hope",
      "sentence": "意味が正しく（　）、正しい言葉を使いましょう。",
      "choiceTexts": {
        "1": "伝えるために",
        "2": "伝わるように",
        "3": "伝わることで",
        "4": "伝えることで"
      }
    }
  },
  {
    "id": "review-ae-12",
    "hint": "Is one meeting enough to understand someone’s character?",
    "translation": "You cannot tell what kind of person someone is just from meeting them once.",
    "correctExplanation": "会った describes the completed meeting. だけ limits the basis to that one meeting. では presents that limited basis as insufficient before わからない.",
    "rationales": {
      "1": "ほどなら does not form the intended “only one meeting is insufficient” construction after 会った.",
      "2": "ことでも could introduce an even-that-event reading in another context, but does not express this limited basis naturally.",
      "3": "だけでも emphasizes even just meeting once; it misses the intended insufficient-evidence reading.",
      "4": "だけでは correctly links the single meeting to the inability to judge someone’s character."
    },
    "studyGuide": {
      "reading": "だけでは",
      "strongerHint": "一度 limits the experience, and わからない says that limited basis is insufficient.",
      "clue": "A single meeting is not enough evidence.",
      "steps": [
        "会った describes the completed meeting.",
        "だけ limits the basis to that one meeting.",
        "では presents that limited basis as insufficient before わからない."
      ],
      "trap": "だけでは…ない means that alone is not enough. だけでも means even just that, which often emphasizes sufficiency or a worthwhile minimum instead.",
      "reviewHref": "group-a-particles.html#ga-dake",
      "sentence": "一度会った（　）どんな人物かわからない。",
      "choiceTexts": {
        "1": "ほどなら",
        "2": "ことでも",
        "3": "だけでも",
        "4": "だけでは"
      }
    }
  },
  {
    "id": "review-ae-13",
    "hint": "Is the money the topic to learn about, or the target of an attitude?",
    "translation": "When you go abroad, you should at least learn about that country’s currency beforehand.",
    "correctExplanation": "お金について means about the currency. ぐらい presents this topic as at least a basic minimum to know. 知っておく adds learning or knowing it in preparation for the trip.",
    "rationales": {
      "1": "についてさえ has the right topic marker, but さえ emphasizes even an unexpected case rather than the ordinary minimum preparation recommended here.",
      "2": "に対してさえ both misidentifies the relationship as a target and adds an even-this emphasis instead of the intended topic and minimum.",
      "3": "についてぐらい correctly combines the topic of knowledge with the minimum-preparation meaning.",
      "4": "に対してぐらい has the minimum marker but makes money a target of an attitude or action rather than the topic of 知る."
    },
    "studyGuide": {
      "reading": "についてぐらい",
      "strongerHint": "知っておいたほうがいい recommends at least a basic topic of preparation: the country’s currency.",
      "clue": "The currency is a topic of knowledge presented as a minimum preparation.",
      "steps": [
        "お金について means about the currency.",
        "ぐらい presents this topic as at least a basic minimum to know.",
        "知っておく adds learning or knowing it in preparation for the trip."
      ],
      "trap": "Two choices must be made inside one option: topic について versus target に対して, then minimum ぐらい versus surprising inclusion さえ.",
      "reviewHref": "group-b-particle-like-words.html#gb-ni-tsuite",
      "sentence": "外国に行くときは、その国のお金（　）知っておいたほうがいい。",
      "choiceTexts": {
        "1": "についてさえ",
        "2": "に対してさえ",
        "3": "についてぐらい",
        "4": "に対してぐらい"
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
