/* Authored study support for Group I book exercises.
 * Load after part2-quiz-data.js and before quiz.js. The generated source remains intact.
 * Only these 27 records are enriched; original answer keys and question types are retained.
 */
(function (root) {
  "use strict";
  if (typeof document !== "undefined" && document.body?.dataset.page !== "group-i") return;
  const support = [
  {
    "id": "gi-book-1-01",
    "hint": "Is illness abroad being reported as a fact, or considered as a possible problem?",
    "translation": "What should I do if I happen to become ill while abroad?",
    "correctExplanation": "外国で病気になった場合は means in the event of becoming ill abroad. The speaker asks for a response to that contingency. 万一 supplies the “if it should happen” framing.",
    "rationales": {
      "a": "万一 correctly frames the possible illness as a contingency.",
      "b": "ちょうど means just/exactly and does not set up the contingency required here.",
      "c": "どうか introduces an earnest appeal, not the imagined condition 病気になった場合は."
    },
    "studyGuide": {
      "reading": "まんいち",
      "strongerHint": "場合は introduces a contingency, and the speaker asks how to respond if it happens.",
      "clue": "The question prepares for a possible unwanted event.",
      "steps": [
        "外国で病気になった場合は means in the event of becoming ill abroad.",
        "The speaker asks for a response to that contingency.",
        "万一 supplies the “if it should happen” framing."
      ],
      "trap": "どうすればいいでしょうか is the question about what to do afterward. Choose the adverb for the illness condition, not simply a word associated with polite requests.",
      "reviewHref": "#gi-condition",
      "sentence": "（　）外国で病気になった場合は、どうすればいいでしょうか。",
      "choiceTexts": {
        "a": "万一",
        "b": "ちょうど",
        "c": "どうか"
      }
    }
  },
  {
    "id": "gi-book-1-02",
    "hint": "Does the ending predict the meeting’s length or express a wish?",
    "translation": "Today’s meeting will probably take a long time.",
    "correctExplanation": "The speaker estimates how long the meeting will take. There is no request or wish to make it long. おそらく naturally pairs with だろう for a probable judgment.",
    "rationales": {
      "a": "そう means so/that way in this position; it does not supply the probability meaning the sentence targets.",
      "b": "ぜひ fits an eager wish or encouragement, not this duration prediction.",
      "c": "おそらく correctly gives “probably” with だろう."
    },
    "studyGuide": {
      "reading": "おそらく",
      "strongerHint": "長くかかるだろう presents a probable judgment about duration.",
      "clue": "だろう marks a prediction.",
      "steps": [
        "The speaker estimates how long the meeting will take.",
        "There is no request or wish to make it long.",
        "おそらく naturally pairs with だろう for a probable judgment."
      ],
      "trap": "ぜひ adds eagerness, not probability. Do not use the same English idea of “strongly” for both a strong wish and a likely prediction.",
      "reviewHref": "#gi-judgment",
      "sentence": "今日の会議は（　）長くかかるだろう。",
      "choiceTexts": {
        "a": "そう",
        "b": "ぜひ",
        "c": "おそらく"
      }
    }
  },
  {
    "id": "gi-book-1-03",
    "hint": "What degree of cold would explain not needing a jacket?",
    "translation": "It isn’t very cold today, so I don’t think I need a jacket.",
    "correctExplanation": "寒くない is the negative of 寒い. The lack of much cold explains why the jacket is unnecessary. たいして pairs with the negative for “not very cold.”",
    "rationales": {
      "a": "ただ gives “only/merely” and does not express this degree of cold.",
      "b": "たいして correctly combines with 寒くない for “not very cold.”",
      "c": "なんとかして means finding some way to accomplish something, not evaluating how cold the day is."
    },
    "studyGuide": {
      "reading": "たいして",
      "strongerHint": "寒くない is already negative, and 上着は要らない explains the practical conclusion.",
      "clue": "The sentence mildly denies a high degree of cold.",
      "steps": [
        "寒くない is the negative of 寒い.",
        "The lack of much cold explains why the jacket is unnecessary.",
        "たいして pairs with the negative for “not very cold.”"
      ],
      "trap": "Not very cold does not mean hot. Preserve the mild degree of the statement instead of exaggerating it into a complete opposite.",
      "reviewHref": "#gi-negative",
      "sentence": "今日は（　）寒くないので、上着は要らないと思う。",
      "choiceTexts": {
        "a": "ただ",
        "b": "たいして",
        "c": "なんとかして"
      }
    }
  },
  {
    "id": "gi-book-1-04",
    "hint": "What does the speaker want to do after hearing that the sunrise is beautiful?",
    "translation": "I hear that the sunrise seen from the top of Mount Fuji is very beautiful. I would really like to see it.",
    "correctExplanation": "美しいそうだ reports what the speaker has heard. 見てみたい then gives the speaker’s own wish. ぜひ strengthens that wish naturally.",
    "rationales": {
      "a": "ぜひ correctly adds eagerness to 見てみたい.",
      "b": "決して calls for a negative in the emphatic-denial use, but 見てみたい is affirmative.",
      "c": "どんなに needs a suitable degree/concession construction, which this standalone wish does not provide."
    },
    "studyGuide": {
      "reading": "ぜひ",
      "strongerHint": "見てみたい is the speaker’s desire to see it firsthand.",
      "clue": "The second sentence expresses an eager wish.",
      "steps": [
        "美しいそうだ reports what the speaker has heard.",
        "見てみたい then gives the speaker’s own wish.",
        "ぜひ strengthens that wish naturally."
      ],
      "trap": "The first sentence’s hearsay ending does not determine the second sentence’s function. Read the clause containing the blank.",
      "reviewHref": "#gi-request",
      "sentence": "富士山の山頂から見る日の出は、とても美しいそうだ。（　）見てみたい。",
      "choiceTexts": {
        "a": "ぜひ",
        "b": "決して",
        "c": "どんなに"
      }
    }
  },
  {
    "id": "gi-book-1-05",
    "hint": "Is the person literally a king, or behaving like one?",
    "translation": "That person causes trouble by ordering people around as if they were a king.",
    "correctExplanation": "The person gives orders to others. 王様のように describes how that behavior appears. まるで emphasizes the as-if comparison.",
    "rationales": {
      "a": "たとえ introduces an even-if condition and needs a suitable concessive ending, not this resemblance clause.",
      "b": "たいして pairs with negation in this meaning; 命令する is an affirmative behavior description.",
      "c": "まるで correctly gives “as if a king” with 王様のように."
    },
    "studyGuide": {
      "reading": "まるで",
      "strongerHint": "王様のように compares the person’s way of giving orders to a king’s.",
      "clue": "のように introduces a comparison of behavior.",
      "steps": [
        "The person gives orders to others.",
        "王様のように describes how that behavior appears.",
        "まるで emphasizes the as-if comparison."
      ],
      "trap": "ように can express purpose elsewhere. Here noun + のように followed by behavior is resemblance, not a goal to become a king.",
      "reviewHref": "#gi-request",
      "sentence": "あの人は（　）王様のように人に命令するから困る。",
      "choiceTexts": {
        "a": "たとえ",
        "b": "たいして",
        "c": "まるで"
      }
    }
  },
  {
    "id": "gi-book-1-06",
    "hint": "Is the sound changing over time or remaining at one level?",
    "translation": "The sound of the ambulance gradually grew quieter.",
    "correctExplanation": "小さい becomes 小さく before なる. なっていった follows the reduction as it continues. 次第に matches that gradual progression.",
    "rationales": {
      "a": "次第に correctly describes the gradual fading of the sound.",
      "b": "おそらく marks a probable judgment; the sentence instead narrates a change that occurred.",
      "c": "せっかく highlights effort or opportunity, neither of which is the point of this fading sound."
    },
    "studyGuide": {
      "reading": "しだいに",
      "strongerHint": "小さくなっていった describes a gradual reduction as the sound fades.",
      "clue": "The predicate describes development from louder to quieter.",
      "steps": [
        "小さい becomes 小さく before なる.",
        "なっていった follows the reduction as it continues.",
        "次第に matches that gradual progression."
      ],
      "trap": "With 音, 小さくなる means become quieter, not that the ambulance physically shrinks. Read the subject with the changing adjective.",
      "reviewHref": "#gi-change",
      "sentence": "救急車の音は、（　）小さくなっていった。",
      "choiceTexts": {
        "a": "次第に",
        "b": "おそらく",
        "c": "せっかく"
      }
    }
  },
  {
    "id": "gi-book-1-07",
    "hint": "Is the speaker considering an explanation for a mistake, or setting a condition for a later action?",
    "translation": "Perhaps he got the meeting place wrong.",
    "correctExplanation": "間違えた names a possible past mistake. かもしれない keeps that mistake as a possibility. もしかしたら is the natural matching adverb.",
    "rationales": {
      "a": "万一 normally frames an eventuality and its consequence; it does not give the intended maybe-judgment here.",
      "b": "もしも introduces a hypothetical condition, while this sentence ends with a possibility judgment.",
      "c": "もしかしたら correctly pairs with かもしれない."
    },
    "studyGuide": {
      "reading": "もしかしたら",
      "strongerHint": "のかもしれない leaves the possible mistake uncertain.",
      "clue": "The whole sentence raises a possible explanation.",
      "steps": [
        "間違えた names a possible past mistake.",
        "かもしれない keeps that mistake as a possibility.",
        "もしかしたら is the natural matching adverb."
      ],
      "trap": "もしも and もしかしたら look similar. もしも introduces an if-condition; this item speculates about what may already have happened.",
      "reviewHref": "#gi-judgment",
      "sentence": "（　）彼は約束の場所を間違えたのかもしれない。",
      "choiceTexts": {
        "a": "万一",
        "b": "もしも",
        "c": "もしかしたら"
      }
    }
  },
  {
    "id": "gi-book-1-08",
    "hint": "Is the speaker discussing any possible amount of laughter, or objecting to this much laughter?",
    "translation": "There’s no need to laugh that much, is there?",
    "correctExplanation": "Read 笑わなくてもいい as no need to laugh. The speaker objects to the degree of laughter. そんなに supplies “that much” in this negative expression.",
    "rationales": {
      "a": "いくら would set up a no-matter-how-much reading, rather than this complaint about a particular amount.",
      "b": "そんなに correctly means “that much” in the speaker’s negative response.",
      "c": "どんなに also sets up degree across possible cases and does not fit this situational “not that much” complaint."
    },
    "studyGuide": {
      "reading": "そんなに",
      "strongerHint": "笑わなくてもいい means there is no need to laugh; the complaint concerns the degree.",
      "clue": "The speaker reacts to the amount of laughter in the situation.",
      "steps": [
        "Read 笑わなくてもいい as no need to laugh.",
        "The speaker objects to the degree of laughter.",
        "そんなに supplies “that much” in this negative expression."
      ],
      "trap": "Do not select いくら or どんなに just because you see ても. Here なくてもいい is a whole expression meaning “do not have to,” not the targeted no-matter-how concession.",
      "reviewHref": "#gi-negative",
      "sentence": "（　）笑わなくてもいいじゃありませんか。",
      "choiceTexts": {
        "a": "いくら",
        "b": "そんなに",
        "c": "どんなに"
      }
    }
  },
  {
    "id": "gi-book-1-09",
    "hint": "What attitude does the speaker express toward forgiving misconduct?",
    "translation": "I will never forgive his misconduct.",
    "correctExplanation": "許さない is the negative of 許す. The sentence is a firm statement of resolve. 決して strengthens that negative to “never / under no circumstances.”",
    "rationales": {
      "a": "ぜひ expresses eagerness or encouragement and does not fit this emphatic negative refusal.",
      "b": "決して correctly strengthens 許さない.",
      "c": "なんとかして focuses on finding a way to achieve a goal; it does not give the intended categorical refusal."
    },
    "studyGuide": {
      "reading": "けっして",
      "strongerHint": "許さない is a firm negative decision.",
      "clue": "The speaker emphatically refuses to forgive.",
      "steps": [
        "許さない is the negative of 許す.",
        "The sentence is a firm statement of resolve.",
        "決して strengthens that negative to “never / under no circumstances.”"
      ],
      "trap": "Decide whether the sentence states low frequency or strong refusal. This is a refusal to forgive, not a description of how often forgiving happens.",
      "reviewHref": "#gi-negative",
      "sentence": "わたしは彼の不正を（　）許さない。",
      "choiceTexts": {
        "a": "ぜひ",
        "b": "決して",
        "c": "なんとかして"
      }
    }
  },
  {
    "id": "gi-book-1-10",
    "hint": "What did the person do, and what did they not do?",
    "translation": "Today I was just looking at the goods; I didn’t buy anything.",
    "correctExplanation": "見ていた describes the activity of looking. だけ says that was all the person did. ただ reinforces the “just / merely” limitation.",
    "rationales": {
      "a": "ただ correctly supports the limitation expressed by だけ.",
      "b": "いくら concerns amount or degree and does not supply “merely looking” here.",
      "c": "せっかく would introduce effort or a valuable opportunity; the sentence simply limits the shopping activity to looking."
    },
    "studyGuide": {
      "reading": "ただ",
      "strongerHint": "見ていただけ limits the activity to looking, while nothing was bought.",
      "clue": "だけ limits the activity to looking.",
      "steps": [
        "見ていた describes the activity of looking.",
        "だけ says that was all the person did.",
        "ただ reinforces the “just / merely” limitation."
      ],
      "trap": "Divide 見ていただけ as 見ていた + だけ. This is not the humble/request verb いただく.",
      "reviewHref": "#gi-condition",
      "sentence": "今日は（　）品物を見ていただけで、何も買わなかった。",
      "choiceTexts": {
        "a": "ただ",
        "b": "いくら",
        "c": "せっかく"
      }
    }
  },
  {
    "id": "gi-book-1-11",
    "hint": "Does the sentence describe the person’s usual manner or a prediction about later?",
    "translation": "That person always looks serious and rarely laughs.",
    "correctExplanation": "The serious expression is presented as habitual. 笑わない is negative. めったに combines with it to mean rarely laughs.",
    "rationales": {
      "a": "ますます describes increasing degree, which does not fit the intended frequency statement.",
      "b": "そのうち looks ahead to an eventual event, while this sentence describes the person’s usual manner.",
      "c": "めったに correctly gives the low-frequency meaning with 笑わない."
    },
    "studyGuide": {
      "reading": "めったに",
      "strongerHint": "いつもまじめな顔 sets up an observation about habitual behavior.",
      "clue": "The sentence describes how infrequently the person laughs.",
      "steps": [
        "The serious expression is presented as habitual.",
        "笑わない is negative.",
        "めったに combines with it to mean rarely laughs."
      ],
      "trap": "Rarely is not never. めったに describes low frequency and allows occasional laughter.",
      "reviewHref": "#gi-negative",
      "sentence": "あの人はいつもまじめな顔をして、（　）笑わない。",
      "choiceTexts": {
        "a": "ますます",
        "b": "そのうち",
        "c": "めったに"
      }
    }
  },
  {
    "id": "gi-book-1-12",
    "hint": "Is the speaker denying a connection mildly or completely?",
    "translation": "I have absolutely nothing to do with that incident.",
    "correctExplanation": "その事件とは identifies the incident in question. 関係がない is the denial of involvement or connection. 全く strengthens it to “none at all.”",
    "rationales": {
      "a": "全く correctly emphasizes complete lack of connection.",
      "b": "万一 introduces an unlikely eventuality, not a direct denial about the speaker.",
      "c": "ちょうど expresses exactness or a close match and does not fit the emphatic denial."
    },
    "studyGuide": {
      "reading": "まったく",
      "strongerHint": "関係がない states that there is no connection with the incident.",
      "clue": "The connection is being completely denied.",
      "steps": [
        "その事件とは identifies the incident in question.",
        "関係がない is the denial of involvement or connection.",
        "全く strengthens it to “none at all.”"
      ],
      "trap": "全く in this item belongs to the negative pairing. The word can have affirmative uses elsewhere, so learn the full phrase 全く関係がない.",
      "reviewHref": "#gi-negative",
      "sentence": "わたしはその事件とは（　）関係がない。",
      "choiceTexts": {
        "a": "全く",
        "b": "万一",
        "c": "ちょうど"
      }
    }
  },
  {
    "id": "gi-book-1-13",
    "hint": "Is the speaker drawing an impression or pleading with the listener?",
    "translation": "Please listen to what I have to say without getting angry.",
    "correctExplanation": "怒らないで asks the listener not to get angry. 聞いてください asks them to listen. どうか adds an earnest “please” to the appeal.",
    "rationales": {
      "a": "どうか correctly strengthens the earnest appeal.",
      "b": "どうも is not the request marker in this construction; its inference use pairs with endings such as ようだ.",
      "c": "どんなに requires a suitable degree or concession structure, not this direct request."
    },
    "studyGuide": {
      "reading": "どうか",
      "strongerHint": "聞いてください directly asks the listener to hear the speaker out.",
      "clue": "The sentence makes an earnest request.",
      "steps": [
        "怒らないで asks the listener not to get angry.",
        "聞いてください asks them to listen.",
        "どうか adds an earnest “please” to the appeal."
      ],
      "trap": "どうか and どうも differ by only one kana but have different roles here. A request takes どうか; an impression can use どうも…ようだ.",
      "reviewHref": "#gi-request",
      "sentence": "（　）怒らないでわたしの話を聞いてください。",
      "choiceTexts": {
        "a": "どうか",
        "b": "どうも",
        "c": "どんなに"
      }
    }
  },
  {
    "id": "gi-book-1-14",
    "hint": "Was the train’s departure earlier or later than arrival at the station?",
    "translation": "By the time I arrived at the station, the train had already left.",
    "correctExplanation": "駅に着いたとき establishes the past reference point. 出ていた means the train had departed by then. すでに expresses that earlier completion.",
    "rationales": {
      "a": "今に anticipates a later event and conflicts with this earlier departure.",
      "b": "すでに correctly means already by the time of arrival.",
      "c": "まるで introduces an as-if comparison, but the sentence reports the actual earlier departure."
    },
    "studyGuide": {
      "reading": "すでに",
      "strongerHint": "出ていた describes the state after the train had left at that past moment.",
      "clue": "Departure happened before arrival at the station.",
      "steps": [
        "駅に着いたとき establishes the past reference point.",
        "出ていた means the train had departed by then.",
        "すでに expresses that earlier completion."
      ],
      "trap": "今に looks ahead and 今にも describes imminent appearance. Neither means “had already” in this past discovery.",
      "reviewHref": "#gi-negative",
      "sentence": "駅に着いたときには、電車は（　）出ていた。",
      "choiceTexts": {
        "a": "今に",
        "b": "すでに",
        "c": "まるで"
      }
    }
  },
  {
    "id": "gi-book-2-01",
    "hint": "Is dropping the wallet confirmed, or only one explanation for why it cannot be found?",
    "translation": "I can’t find my wallet. Maybe I dropped it somewhere.",
    "correctExplanation": "The speaker knows only that the wallet cannot be found. Dropping it somewhere is a possibility. 落としたかもしれない is the book’s natural partner for もしかすると.",
    "rationales": {
      "a": "落としただろう gives a probable judgment; it misses the open-possibility pairing targeted with もしかすると.",
      "b": "落としたと思う presents the speaker’s view more directly; it is not the book’s preferred possibility ending here.",
      "c": "落としたかもしれない correctly leaves dropping the wallet as one possible explanation."
    },
    "studyGuide": {
      "reading": "おとしたかもしれない",
      "strongerHint": "もしかすると introduces an open possibility.",
      "clue": "The loss is being considered as a possible explanation.",
      "steps": [
        "The speaker knows only that the wallet cannot be found.",
        "Dropping it somewhere is a possibility.",
        "落としたかもしれない is the book’s natural partner for もしかすると."
      ],
      "trap": "A past action can sit inside a present uncertain judgment. 落とした does not make the dropping a confirmed fact when followed by かもしれない.",
      "reviewHref": "#gi-judgment",
      "sentence": "財布が見つからない。もしかするとどこかで（　）。",
      "choiceTexts": {
        "a": "落としただろう",
        "b": "落としたと思う",
        "c": "落としたかもしれない"
      }
    }
  },
  {
    "id": "gi-book-2-02",
    "hint": "Which choice actually describes a change in temperature?",
    "translation": "The temperature will probably rise gradually this afternoon.",
    "correctExplanation": "次第に means gradually. 気温 is the thing that changes. 上がる describes rising and fits before でしょう.",
    "rationales": {
      "a": "上がる correctly gives the change that 次第に describes.",
      "b": "高い is a static “high”; it does not state gradual development by itself.",
      "c": "変わらない says there is no change, which conflicts with the intended gradual trend."
    },
    "studyGuide": {
      "reading": "あがる",
      "strongerHint": "次第に needs gradual development in this sentence, not just a static level.",
      "clue": "The sentence predicts a developing increase.",
      "steps": [
        "次第に means gradually.",
        "気温 is the thing that changes.",
        "上がる describes rising and fits before でしょう."
      ],
      "trap": "High and rising are not the same. 高い describes a level; 上がる describes movement to a higher level.",
      "reviewHref": "#gi-change",
      "sentence": "今日の午後は次第に気温が（　）でしょう。",
      "choiceTexts": {
        "a": "上がる",
        "b": "高い",
        "c": "変わらない"
      }
    }
  },
  {
    "id": "gi-book-2-03",
    "hint": "Look both before and after the blank: what does 今にも suggest, and what does 顔 require?",
    "translation": "The child who fell had a face that looked about to burst into tears.",
    "correctExplanation": "今にも points to something about to happen at that moment. 泣く becomes stem 泣き before appearance そうだ. Before the noun 顔, use 泣きそうな.",
    "rationales": {
      "a": "泣いた says the child cried already; it does not express the imminent appearance signaled by 今にも.",
      "b": "泣きそうな correctly gives “looks about to cry” and modifies 顔 with な.",
      "c": "泣くような gives an as-if/like description, but misses the 今にも…そうだ imminence pattern tested here."
    },
    "studyGuide": {
      "reading": "なきそうな",
      "strongerHint": "The child looks close to crying, and the expression must modify a noun.",
      "clue": "An imminent appearance modifies 顔.",
      "steps": [
        "今にも points to something about to happen at that moment.",
        "泣く becomes stem 泣き before appearance そうだ.",
        "Before the noun 顔, use 泣きそうな."
      ],
      "trap": "The sentence ends in the past, but the crying only looked imminent at that past moment. Do not turn the appearance into an already-completed cry.",
      "reviewHref": "#gi-change",
      "sentence": "転んだ子どもは今にも（　）顔をしていた。",
      "choiceTexts": {
        "a": "泣いた",
        "b": "泣きそうな",
        "c": "泣くような"
      }
    }
  },
  {
    "id": "gi-book-2-04",
    "hint": "Has the attendance threshold already been crossed, or is it only expected later?",
    "translation": "The number of visitors to this exhibition has already exceeded ten thousand.",
    "correctExplanation": "１万人を超える means exceed ten thousand people. すでに tells us that the threshold has already been passed. 超えた reports that completed crossing.",
    "rationales": {
      "a": "超えた correctly states the threshold has already been exceeded.",
      "b": "超えるだろう predicts a later crossing rather than reporting it already achieved.",
      "c": "超えていない denies that the threshold has been crossed, so it does not supply the already-completed result intended here."
    },
    "studyGuide": {
      "reading": "こえた",
      "strongerHint": "すでに marks an established result by now.",
      "clue": "The count has passed the threshold.",
      "steps": [
        "１万人を超える means exceed ten thousand people.",
        "すでに tells us that the threshold has already been passed.",
        "超えた reports that completed crossing."
      ],
      "trap": "Do not translate すでに as “soon.” A prediction about exceeding the number later is a different time relationship.",
      "reviewHref": "#gi-negative",
      "sentence": "この展覧会に来た人はすでに１万人を（　）。",
      "choiceTexts": {
        "a": "超えた",
        "b": "超えるだろう",
        "c": "超えていない"
      }
    }
  },
  {
    "id": "gi-book-2-05",
    "hint": "Is hospitalization assumed to have happened, or being imagined as a condition?",
    "translation": "If it turns out that I have to be hospitalized, I will have to take time off work.",
    "correctExplanation": "入院することになる means it is decided or turns out that hospitalization will happen. The situation is introduced with もしも, so it is hypothetical. なったら completes the condition before the consequence.",
    "rationales": {
      "a": "なって merely connects clauses and does not supply the conditional ending needed here.",
      "b": "なったら correctly gives the imagined condition after もしも.",
      "c": "なったから gives an established reason instead of the hypothetical condition."
    },
    "studyGuide": {
      "reading": "なったら",
      "strongerHint": "もしも needs the clause to introduce what would happen if that situation arose.",
      "clue": "Hospitalization is the imagined condition for taking leave.",
      "steps": [
        "入院することになる means it is decided or turns out that hospitalization will happen.",
        "The situation is introduced with もしも, so it is hypothetical.",
        "なったら completes the condition before the consequence."
      ],
      "trap": "なったから means “because it has been decided,” which treats the reason as established. Do not substitute that for the hypothetical なったら.",
      "reviewHref": "#gi-condition",
      "sentence": "もしも入院することに（　）、仕事を休まなければならない。",
      "choiceTexts": {
        "a": "なって",
        "b": "なったら",
        "c": "なったから"
      }
    }
  },
  {
    "id": "gi-book-2-06",
    "hint": "Is bringing the camera being treated as a wasted effort or a chance to take photos?",
    "translation": "Since we’ve gone to the trouble of bringing a camera, let’s take a photo together.",
    "correctExplanation": "せっかく highlights the effort or opportunity of bringing the camera. みんなで写真を撮ろう proposes a worthwhile next action. 持ってきたのだから makes the established opportunity the reason for that proposal.",
    "rationales": {
      "a": "持ってきて just links the action and does not express the opportunity-based reason targeted here.",
      "b": "持ってきたら would make bringing the camera a condition; the sentence treats the camera’s presence as already established.",
      "c": "持ってきたのだから correctly means “since we have brought it, let’s make use of it.”"
    },
    "studyGuide": {
      "reading": "もってきたのだから",
      "strongerHint": "写真を撮ろう is a proposal to make use of the camera that has been brought.",
      "clue": "The camera is already here, so the speaker proposes using the opportunity.",
      "steps": [
        "せっかく highlights the effort or opportunity of bringing the camera.",
        "みんなで写真を撮ろう proposes a worthwhile next action.",
        "持ってきたのだから makes the established opportunity the reason for that proposal."
      ],
      "trap": "せっかく does not always lead to のに or disappointment. Here the speaker wants to make the effort worthwhile.",
      "reviewHref": "#gi-condition",
      "sentence": "せっかくカメラを（　）、みんなで写真を撮ろう。",
      "choiceTexts": {
        "a": "持ってきて",
        "b": "持ってきたら",
        "c": "持ってきたのだから"
      }
    }
  },
  {
    "id": "gi-book-2-07",
    "hint": "What negative form answers the question about whether the film was interesting?",
    "translation": "A: “How was this film? Was it interesting?” B: “It wasn’t very interesting.”",
    "correctExplanation": "The question supplies 面白い as the quality being evaluated. Its negative past is 面白くなかった. たいして面白くなかった means it was not very interesting.",
    "rationales": {
      "a": "面白かったよ is affirmative “was interesting,” so it lacks the negative needed for this たいして pairing.",
      "b": "面白くなかったよ correctly gives the negative past “was not interesting,” softened to “not very” by たいして.",
      "c": "つまらなかったよ evaluates the film as boring; it does not form the intended mild denial “not very interesting.”"
    },
    "studyGuide": {
      "reading": "おもしろくなかったよ",
      "strongerHint": "たいして gives “not very” when paired with the negative of 面白い.",
      "clue": "The response mildly denies the degree of interest asked about.",
      "steps": [
        "The question supplies 面白い as the quality being evaluated.",
        "Its negative past is 面白くなかった.",
        "たいして面白くなかった means it was not very interesting."
      ],
      "trap": "つまらなかった normally means “was boring.” Despite the ending’s appearance, do not substitute that evaluation for the clear negative conjugation 面白くなかった in this not-very pattern.",
      "reviewHref": "#gi-negative",
      "sentence": "A「この映画どうだった？　面白かった？」 B「たいして（　）。」",
      "choiceTexts": {
        "a": "面白かったよ",
        "b": "面白くなかったよ",
        "c": "つまらなかったよ"
      }
    }
  },
  {
    "id": "gi-book-2-08",
    "hint": "Does the speaker predict success, deny the ability, or express determination to achieve it?",
    "translation": "I want to find a way to finish this job today. Let’s do our best.",
    "correctExplanation": "なんとかして focuses on finding a way to accomplish the task. The deadline is the end of today. 終わらせたい states the desired result, matching the encouragement that follows.",
    "rationales": {
      "a": "終わらせたい correctly expresses the goal the speaker is determined to reach.",
      "b": "終わらせられない says the task cannot be finished; it conflicts with the affirmative determination expressed here.",
      "c": "終わらせるだろう predicts completion rather than expressing the desire that fits なんとかして and がんばろう."
    },
    "studyGuide": {
      "reading": "おわらせたい",
      "strongerHint": "今日中に sets a deadline, and がんばろう is encouragement to make the effort.",
      "clue": "The sentence expresses a desired achievement despite difficulty.",
      "steps": [
        "なんとかして focuses on finding a way to accomplish the task.",
        "The deadline is the end of today.",
        "終わらせたい states the desired result, matching the encouragement that follows."
      ],
      "trap": "A probable outcome and a desired outcome are different. だろう predicts; たい says what the speaker wants to achieve.",
      "reviewHref": "#gi-request",
      "sentence": "今日中になんとかしてこの仕事を（　）。がんばろう。",
      "choiceTexts": {
        "a": "終わらせたい",
        "b": "終わらせられない",
        "c": "終わらせるだろう"
      }
    }
  },
  {
    "id": "gi-book-2-09",
    "hint": "Does heavy snow cancel the obligation, or does the obligation remain despite it?",
    "translation": "Even if there is heavy snow, I have to go to work.",
    "correctExplanation": "たとえ introduces an even-if situation. A noun takes でも for this connection. 大雪でも leaves the obligation in the main clause unchanged.",
    "rationales": {
      "a": "大雪でも correctly gives “even if there is heavy snow.”",
      "b": "大雪では does not supply the even-if concession needed after たとえ.",
      "c": "大雪なのに gives an although-style contrast with a given situation, rather than the targeted hypothetical concession."
    },
    "studyGuide": {
      "reading": "おおゆきでも",
      "strongerHint": "たとえ asks for an even-if connection, and 大雪 is a noun.",
      "clue": "The obligation remains even under the imagined difficult condition.",
      "steps": [
        "たとえ introduces an even-if situation.",
        "A noun takes でも for this connection.",
        "大雪でも leaves the obligation in the main clause unchanged."
      ],
      "trap": "のに can express an unexpected contrast with a given fact. This sentence instead uses たとえ to imagine a condition.",
      "reviewHref": "#gi-condition",
      "sentence": "たとえ（　）会社には行かなければならない。",
      "choiceTexts": {
        "a": "大雪でも",
        "b": "大雪では",
        "c": "大雪なのに"
      }
    }
  },
  {
    "id": "gi-book-2-10",
    "hint": "Has the match actually been won yet, or are the people celebrating as if it had?",
    "translation": "Although the match is still in progress, everyone is celebrating as if they have already won.",
    "correctExplanation": "The match has not finished. まるで introduces an as-if comparison. 勝ったように modifies the way everyone is celebrating.",
    "rationales": {
      "a": "勝ったので says they celebrate because they won, contradicting the intended as-if contrast while the game continues.",
      "b": "勝ったように correctly compares their behavior to that of people who have already won.",
      "c": "勝ったらしく suggests they apparently won, shifting from comparison to inferred fact."
    },
    "studyGuide": {
      "reading": "かったように",
      "strongerHint": "まだ試合の途中 explicitly says the match is still underway.",
      "clue": "The behavior resembles a celebration after victory, before victory is established.",
      "steps": [
        "The match has not finished.",
        "まるで introduces an as-if comparison.",
        "勝ったように modifies the way everyone is celebrating."
      ],
      "trap": "Do not treat a resemblance as evidence of an actual win. ように fits the comparison; らしく would suggest a judgment that they apparently won.",
      "reviewHref": "#gi-request",
      "sentence": "まだ試合の途中なのに、まるでもう（　）みんな大喜びしている。",
      "choiceTexts": {
        "a": "勝ったので",
        "b": "勝ったように",
        "c": "勝ったらしく"
      }
    }
  },
  {
    "id": "gi-book-2-11",
    "hint": "Where is the negative needed for “not that useful”?",
    "translation": "This material probably won’t be that useful.",
    "correctExplanation": "役に立つ means be useful. 役に立たない is its negative. そんなに役に立たないだろう combines not-that-useful with a probable judgment.",
    "rationales": {
      "a": "役に立つかもしれない presents possible usefulness but lacks the negative needed for the targeted degree denial.",
      "b": "役に立つはずだ expresses an expectation that it is useful, rather than denying the degree.",
      "c": "役に立たないだろう correctly includes the negative and the probable judgment."
    },
    "studyGuide": {
      "reading": "やくにたたないだろう",
      "strongerHint": "そんなに concerns degree here. Look inside the ending, not just at its last word.",
      "clue": "The sentence predicts a limited degree of usefulness.",
      "steps": [
        "役に立つ means be useful.",
        "役に立たない is its negative.",
        "そんなに役に立たないだろう combines not-that-useful with a probable judgment."
      ],
      "trap": "だろう does not erase the negative inside the clause. A sentence can contain both the adverb’s negative pairing and a prediction ending.",
      "reviewHref": "#gi-negative",
      "sentence": "この資料はそんなに（　）。",
      "choiceTexts": {
        "a": "役に立つかもしれない",
        "b": "役に立つはずだ",
        "c": "役に立たないだろう"
      }
    }
  },
  {
    "id": "gi-book-2-12",
    "hint": "Does the sentence describe a static ability or progress since study began?",
    "translation": "Since I started studying Japanese, I have gradually improved.",
    "correctExplanation": "少しずつ indicates progress in small steps. 上手になる means become better at something. 上手になってきた traces that development up to the reference point.",
    "rationales": {
      "a": "話せる states an ability by itself and does not express the development targeted after 始めてから and 少しずつ.",
      "b": "上手になってきた correctly describes gradual improvement since study began.",
      "c": "わからない denies understanding and does not supply the gradual development intended here."
    },
    "studyGuide": {
      "reading": "じょうずになってきた",
      "strongerHint": "始めてから gives the starting point and 少しずつ signals gradual development.",
      "clue": "The improvement develops from the start of study up to now.",
      "steps": [
        "少しずつ indicates progress in small steps.",
        "上手になる means become better at something.",
        "上手になってきた traces that development up to the reference point."
      ],
      "trap": "話せる alone means “can speak.” To focus on developing that ability, Japanese could use 話せるようになってきた, but that is not the option printed here.",
      "reviewHref": "#gi-change",
      "sentence": "日本語の勉強を始めてから、少しずつ（　）。",
      "choiceTexts": {
        "a": "話せる",
        "b": "上手になってきた",
        "c": "わからない"
      }
    }
  },
  {
    "id": "gi-book-2-13",
    "hint": "Is the speaker making an earnest request of the listener, or stating their own wish?",
    "translation": "Please don’t forget me, even after you return to your country.",
    "correctExplanation": "国に帰っても means the appeal still applies after returning home. 忘れないでください is a negative request to the listener. どうか adds an earnest please. The object of 忘れる is omitted; “me” is a natural contextual reading.",
    "rationales": {
      "a": "忘れないでください correctly makes the earnest request supported by どうか.",
      "b": "手紙を書きたいです expresses the speaker’s own wish to write a letter, rather than an appeal to the listener.",
      "c": "遊びに来ませんか makes an invitation, for which ぜひ is the usual encouraging partner; the book targets an earnest どうか…ください request here."
    },
    "studyGuide": {
      "reading": "わすれないでください",
      "strongerHint": "どうか naturally supports a direct appeal about what the listener should do or avoid.",
      "clue": "The speaker appeals to the listener not to forget.",
      "steps": [
        "国に帰っても means the appeal still applies after returning home.",
        "忘れないでください is a negative request to the listener.",
        "どうか adds an earnest please. The object of 忘れる is omitted; “me” is a natural contextual reading."
      ],
      "trap": "The subject of the desired action matters: 書きたい says the speaker wants to write, while 忘れないでください asks the listener not to forget.",
      "reviewHref": "#gi-request",
      "sentence": "国に帰ってもどうか（　）。",
      "choiceTexts": {
        "a": "忘れないでください",
        "b": "手紙を書きたいです",
        "c": "遊びに来ませんか"
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
