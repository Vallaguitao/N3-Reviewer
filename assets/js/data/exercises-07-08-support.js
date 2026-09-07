/* Authored study support for the Lessons 7–8 review on Lesson 8.
 * Load after part1-quiz-data.js and before quiz.js. The generated source remains intact.
 * Only these 16 records are enriched; original answer keys and question types are retained.
 */
(function (root) {
  "use strict";
  if (typeof document !== "undefined" && document.body?.dataset.page !== "lesson-08") return;
  const support = [
  {
    "id": "part1-book-07-08-q01",
    "hint": "What part of the opening tells us where the information came from?",
    "translation": "According to the teacher’s explanation, “zubon” is a word that came from French.",
    "correctExplanation": "先生の説明 names the source. では frames the following content as what that explanation says. 言葉だ remains a complete noun predicate before ということです.",
    "rationales": {
      "a": "先生の説明は makes the explanation a topic but does not clearly supply the intended “according to” relationship.",
      "b": "先生の説明では correctly presents the explanation as the source of the report.",
      "c": "先生の説明からは suggests drawing something from the explanation; that inferential framing is not the direct source introduction sought here."
    },
    "studyGuide": {
      "reading": "せんせいのせつめいでは",
      "strongerHint": "The ending reports a statement. Choose an opening meaning “according to the teacher’s explanation.”",
      "clue": "ということです reports information, and the opening should identify its source.",
      "steps": [
        "先生の説明 names the source.",
        "では frames the following content as what that explanation says.",
        "言葉だ remains a complete noun predicate before ということです."
      ],
      "trap": "Do not confuse the source of information with a conclusion inferred from it. The sentence relays the teacher’s explanation; it is not analyzing evidence to reach a new conclusion.",
      "reviewHref": "lesson-07-hearsay.html#l7-toiu-koto"
    }
  },
  {
    "id": "part1-book-07-08-q02",
    "hint": "Is the newspaper a source of news or the cause of the product launch?",
    "translation": "According to this morning’s newspaper, a new pain-relief medicine will be released.",
    "correctExplanation": "The newspaper is the source, not the means of manufacturing or releasing the medicine. によると attaches directly to the source noun. 発売される is passive nonpast: will be released in this context.",
    "rationales": {
      "a": "によって can express a cause or means, not the intended “according to the newspaper” link.",
      "b": "によったら is not the standard source-reporting expression needed in this sentence.",
      "c": "によると introduces the newspaper as the source."
    },
    "studyGuide": {
      "reading": "によると",
      "strongerHint": "Use the established “according to…” expression before the reported information.",
      "clue": "今朝の新聞 supplies the information being relayed with ということだ.",
      "steps": [
        "The newspaper is the source, not the means of manufacturing or releasing the medicine.",
        "によると attaches directly to the source noun.",
        "発売される is passive nonpast: will be released in this context."
      ],
      "trap": "The similar beginnings によっ and による do not make the endings interchangeable. Identify source, cause, or means first.",
      "reviewHref": "lesson-07-hearsay.html#l7-toiu-koto"
    }
  },
  {
    "id": "part1-book-07-08-q03",
    "hint": "The ending presents a circulating account of the house’s age. Which opening qualifies that account without turning it into a particular person’s message?",
    "translation": "It is not certain, but this house is said to have been built about 300 years ago.",
    "correctExplanation": "と言われている is the book’s general-report pattern. 確かではないが admits uncertainty about the account. 建てられた is passive past, and ぐらい keeps the age approximate.",
    "rationales": {
      "a": "確かではないが naturally qualifies the uncertain historical report.",
      "b": "山川さんの話では frames a specific person’s account. A direct message ending would better match that focus in this exercise.",
      "c": "林さんから聞いたのだが foregrounds personally hearing the information from Hayashi, rather than the general-report framing targeted here."
    },
    "studyGuide": {
      "reading": "たしかではないが",
      "strongerHint": "The writer is unsure of the historical claim and reports what is generally said.",
      "clue": "確かではないが qualifies the claim’s certainty, while と言われている reports the circulating account.",
      "steps": [
        "と言われている is the book’s general-report pattern.",
        "確かではないが admits uncertainty about the account.",
        "建てられた is passive past, and ぐらい keeps the age approximate."
      ],
      "trap": "A named person can report what people generally say in a longer context. The other openings are not universally impossible; the textbook chooses the opening that directly matches its general-report focus.",
      "reviewHref": "lesson-07-hearsay.html#l7-iwareteiru"
    }
  },
  {
    "id": "part1-book-07-08-q04",
    "hint": "The speaker has just received tomorrow’s forecast. Is this fresh news or a general belief circulating among people?",
    "translation": "I just saw the weather forecast on TV: apparently it will rain nationwide tomorrow.",
    "correctExplanation": "The quoted content is あしたは全国的に雨だ. そうだ attaches after that plain clause: 雨だそうだ. This is hearsay そうだ, not the appearance form 降りそうだ.",
    "rationales": {
      "a": "と聞いている presents information already held from reports; it fits this just-seen forecast less directly than そうだ.",
      "b": "と言われている presents a circulating view, not the most natural relay of this specific forecast just seen.",
      "c": "そうだ directly relays the newly received forecast."
    },
    "studyGuide": {
      "reading": "そうだ",
      "strongerHint": "雨だ is already a complete noun predicate. Add the hearsay ending that gives “I hear it will rain.”",
      "clue": "今、テレビの天気予報で見た establishes a specific, freshly received forecast.",
      "steps": [
        "The quoted content is あしたは全国的に雨だ.",
        "そうだ attaches after that plain clause: 雨だそうだ.",
        "This is hearsay そうだ, not the appearance form 降りそうだ."
      ],
      "trap": "Hearsay grammar includes information read or seen in a broadcast. Do not choose by the English word “hear” alone; source, timing, and reporting style determine the best fit.",
      "reviewHref": "lesson-07-hearsay.html#l7-toiu-koto"
    }
  },
  {
    "id": "part1-book-07-08-q05",
    "hint": "とか already provides the tentative-report ending. What form of the adjective should come immediately before it?",
    "translation": "I hear that exposing the soles of your feet to sunlight is good for your health. I wonder if that is true.",
    "correctExplanation": "健康にいい is the reported assessment. いい attaches directly to とか. 本当だろうか adds the speaker’s doubt; the exercise reports a claim rather than endorsing it.",
    "rationales": {
      "a": "いい supplies the plain adjective required for the simple report.",
      "b": "いいです adds a polite form inside what this exercise presents as an ordinary plain-clause report.",
      "c": "いいそうだ introduces another report inside とか without a context requiring that extra layer."
    },
    "studyGuide": {
      "reading": "いい",
      "strongerHint": "Use the plain い-adjective without adding politeness or another hearsay layer.",
      "clue": "本当だろうか questions the truth of the claim introduced with とか.",
      "steps": [
        "健康にいい is the reported assessment.",
        "いい attaches directly to とか.",
        "本当だろうか adds the speaker’s doubt; the exercise reports a claim rather than endorsing it."
      ],
      "trap": "Do not assume a hearsay statement verifies a health claim. Also, layered reports can exist, but this sentence needs only the reporting layer already supplied by とか.",
      "reviewHref": "lesson-07-hearsay.html#l7-toka"
    }
  },
  {
    "id": "part1-book-07-08-q06",
    "hint": "B reacts to tomorrow’s weather news. Which ending lets A finish a casual report?",
    "translation": "A: I hear it will be hot tomorrow. B: Ugh, I do not like that. I have baseball practice tomorrow.",
    "correctExplanation": "暑い is the reported adjective. って lets the reporting verb remain understood. B’s complaint explains why the forecast matters.",
    "rationales": {
      "a": "暑いと leaves an ordinary quotation or conditional connection without the intended complete casual report.",
      "b": "暑いって naturally ends A’s hearsay statement.",
      "c": "暑くって gives a connective form rather than the intended report of tomorrow’s weather."
    },
    "studyGuide": {
      "reading": "あついって",
      "strongerHint": "暑い keeps its い before conversational hearsay って.",
      "clue": "The exchange is casual, and B treats A’s line as weather information.",
      "steps": [
        "暑い is the reported adjective.",
        "って lets the reporting verb remain understood.",
        "B’s complaint explains why the forecast matters."
      ],
      "trap": "暑いって reports “hot.” 暑くって is a conversational connective related to 暑くて; it does not supply this hearsay meaning.",
      "reviewHref": "lesson-07-hearsay.html#l7-tte"
    }
  },
  {
    "id": "part1-book-07-08-q07",
    "hint": "The sentence already ends with written hearsay という. Which option supplies just the historical content?",
    "translation": "It is said that this region once had an unusual custom.",
    "correctExplanation": "あった is the plain past of ある. あったという reports that the custom existed. No additional hearsay ending is needed inside this report.",
    "rationales": {
      "a": "あった supplies the plain past content for という.",
      "b": "あったそうだ adds an unnecessary hearsay layer before the written reporting ending.",
      "c": "あったんだって introduces a casual report inside the written report, with no reason for that nesting here."
    },
    "studyGuide": {
      "reading": "あった",
      "strongerHint": "昔 requires the reported custom to be placed in the past: “there was.”",
      "clue": "昔 and sentence-final という frame a concise written report about the past.",
      "steps": [
        "あった is the plain past of ある.",
        "あったという reports that the custom existed.",
        "No additional hearsay ending is needed inside this report."
      ],
      "trap": "Do not stack reporting expressions simply because they all mean “I hear.” Nested reports are possible when context calls for them; this item asks for one straightforward written report.",
      "reviewHref": "lesson-07-hearsay.html#l7-toiu"
    }
  },
  {
    "id": "part1-book-07-08-q08",
    "hint": "The land-price forecast is inside a written report. Which option keeps that prediction in plain form?",
    "translation": "It is said that land prices in this area probably will not rise very much in the future either.",
    "correctExplanation": "高くなる means become expensive or rise in price. あまり高くならない means not rise very much. だろう preserves probability within the reported forecast.",
    "rationales": {
      "a": "なりません is polite, not the plain prediction targeted before this written という.",
      "b": "ならないでしょう is a polite prediction; this exercise calls for its plain counterpart.",
      "c": "ならないだろう gives the plain negative prediction and preserves uncertainty."
    },
    "studyGuide": {
      "reading": "ならないだろう",
      "strongerHint": "でしょう has a plain counterpart: だろう. Keep the negative and the uncertainty together.",
      "clue": "ならないだろう is a plain negative prediction that can be reported with という.",
      "steps": [
        "高くなる means become expensive or rise in price.",
        "あまり高くならない means not rise very much.",
        "だろう preserves probability within the reported forecast."
      ],
      "trap": "Ordinary indirect reports use plain content here, but direct quotations can preserve polite wording. Do not turn this exercise’s form choice into “polite Japanese can never be quoted.”",
      "reviewHref": "lesson-07-hearsay.html#l7-toiu"
    }
  },
  {
    "id": "part1-book-07-08-q09",
    "hint": "The speaker’s confidence about being careful supports which conclusion about illness?",
    "translation": "I take such care of my health. There is no way I will get sick.",
    "correctExplanation": "病気になる means become ill. はずがない rejects that event. The result expresses the speaker’s strong belief, not an objective guarantee about health.",
    "rationales": {
      "a": "病気になる is the event the speaker believes cannot happen.",
      "b": "病気にならない would reject not getting sick, implying confidence in becoming ill—the opposite of the intended conclusion.",
      "c": "病気ではない would reject not being ill, again conflicting with the speaker’s intended reassurance."
    },
    "studyGuide": {
      "reading": "びょうきになる",
      "strongerHint": "はずがない already supplies the denial. Put the event the speaker rules out inside it.",
      "clue": "The speaker rules out becoming ill, based on their own confidence about taking care.",
      "steps": [
        "病気になる means become ill.",
        "はずがない rejects that event.",
        "The result expresses the speaker’s strong belief, not an objective guarantee about health."
      ],
      "trap": "An extra negative would reverse the conclusion. Read the whole sentence rather than choosing the option with the most ない endings.",
      "reviewHref": "#l8-hazu-wake"
    }
  },
  {
    "id": "part1-book-07-08-q10",
    "hint": "The speaker told Tanaka last week. Does that support knowledge or ignorance?",
    "translation": "I told Tanaka about it last week, so there is no way Tanaka does not know.",
    "correctExplanation": "知らない means does not know. 知らないわけがない rules out that ignorance. The speaker therefore strongly expects Tanaka to know.",
    "rationales": {
      "a": "知るわけがない rejects coming to know the information, which conflicts with the given reason.",
      "b": "知っているわけがない rules out knowing, reversing the intended inference.",
      "c": "知らないわけがない rejects ignorance and matches the fact that the information was given."
    },
    "studyGuide": {
      "reading": "しらないわけがない",
      "strongerHint": "Reject “does not know” with the strong outer denial わけがない.",
      "clue": "先週話したのだから is the reason for confidence that Tanaka knows.",
      "steps": [
        "知らない means does not know.",
        "知らないわけがない rules out that ignorance.",
        "The speaker therefore strongly expects Tanaka to know."
      ],
      "trap": "知らないわけがない is strong confidence, not the cautious “might know” conveyed by some other double-negative constructions.",
      "reviewHref": "#l8-hazu-wake"
    }
  },
  {
    "id": "part1-book-07-08-q11",
    "hint": "They are weak, but the speaker wants to leave them a chance. Which absolute claim should be challenged?",
    "translation": "They are not a strong team, but that does not mean they have absolutely no chance of winning.",
    "correctExplanation": "勝てない is the negative potential: cannot win. 絶対 strengthens that claim inside the statement being challenged. とは限らない removes the certainty of inability; it does not guarantee victory.",
    "rationales": {
      "a": "絶対勝てない is the pessimistic claim whose certainty the speaker rejects.",
      "b": "必ず勝てる would merely say that victory is not guaranteed, failing to provide the intended encouraging contrast.",
      "c": "絶対負けない would say that avoiding defeat is not guaranteed; this also misses the intended turn toward a chance of winning."
    },
    "studyGuide": {
      "reading": "ぜったいかてない",
      "strongerHint": "Put “absolutely cannot win” inside “not necessarily.” That leaves winning possible.",
      "clue": "が signals a turn away from the pessimistic implication of not being strong.",
      "steps": [
        "勝てない is the negative potential: cannot win.",
        "絶対 strengthens that claim inside the statement being challenged.",
        "とは限らない removes the certainty of inability; it does not guarantee victory."
      ],
      "trap": "A possibility of winning is not the same as certain victory. Keep the scope as ［絶対勝てない］とは限らない.",
      "reviewHref": "#l8-toha-kagiranai"
    }
  },
  {
    "id": "part1-book-07-08-q12",
    "hint": "The speaker plans to join from day two. What misunderstanding about taking the trip is being corrected?",
    "translation": "It is not that I am not going on the trip; I intend to join from the second day.",
    "correctExplanation": "行かない is the assumption being rejected. わけではなく links the correction to the actual plan. 参加するつもり states an intention to join; it does not say participation has already happened.",
    "rationales": {
      "a": "行ける would deny an assumption of ability, which does not explain the stated plan as directly.",
      "b": "行かない names the mistaken assumption corrected by joining on day two.",
      "c": "行きたい would deny wanting to go, while the following clause explains timing rather than desire."
    },
    "studyGuide": {
      "reading": "いかない",
      "strongerHint": "The correction is “It is not that I am not going.”",
      "clue": "二日目から参加するつもり explains that participation is delayed, not canceled.",
      "steps": [
        "行かない is the assumption being rejected.",
        "わけではなく links the correction to the actual plan.",
        "参加するつもり states an intention to join; it does not say participation has already happened."
      ],
      "trap": "Do not interpret every negative as refusal. Here the outer denial rejects the inner “not going.”",
      "reviewHref": "#l8-wake-dewa-nai"
    }
  },
  {
    "id": "part1-book-07-08-q13",
    "hint": "The first clause cautiously admits that the siblings get along. Which continuation supplies a clear reservation?",
    "translation": "It is not that we siblings get along badly, but we rarely spend time together.",
    "correctExplanation": "仲がよくない means not get along well. ことはない denies that negative assessment, giving a qualified positive. いっしょにいることは少ない adds that spending time together is infrequent.",
    "rationales": {
      "a": "いつもいっしょにいる strongly supports closeness instead of qualifying it.",
      "b": "いっしょにいることもある says they sometimes spend time together. It can be meaningful elsewhere, but gives a less clear reservation than the explicit rarity in the selected answer.",
      "c": "いっしょにいることは少ない supplies the clear limitation following the qualified affirmation."
    },
    "studyGuide": {
      "reading": "いっしょにいることはすくない",
      "strongerHint": "Look for a limitation on how much time they spend together.",
      "clue": "よくないことはない weakly affirms the relationship; が introduces the reservation.",
      "steps": [
        "仲がよくない means not get along well.",
        "ことはない denies that negative assessment, giving a qualified positive.",
        "いっしょにいることは少ない adds that spending time together is infrequent."
      ],
      "trap": "A cautious positive is not an enthusiastic “we are inseparable.” The choice should provide the clear qualification sought after が.",
      "reviewHref": "#l8-nai-koto-wa-nai"
    }
  },
  {
    "id": "part1-book-07-08-q14",
    "hint": "The address is on record, but may be outdated. Which form repeats the entire admitted state?",
    "translation": "Yamada’s address is indeed written here, but it is from ten years ago.",
    "correctExplanation": "書いてある describes the resulting written record. 書いてあります is the same expression in polite form. 10年前のです qualifies the record’s usefulness: it is old.",
    "rationales": {
      "a": "書きました switches to the completed act of writing rather than repeating the admitted state.",
      "b": "書いています does not repeat the てある result-state expression used before ことは.",
      "c": "書いてあります repeats the full predicate with a polite ending."
    },
    "studyGuide": {
      "reading": "かいてあります",
      "strongerHint": "Echo 書いてある using the polite ending, rather than changing it to an act of writing.",
      "clue": "書いてあることは repeats the state of an address having been written down.",
      "steps": [
        "書いてある describes the resulting written record.",
        "書いてあります is the same expression in polite form.",
        "10年前のです qualifies the record’s usefulness: it is old."
      ],
      "trap": "Match the full expression, not just the kanji 書. 書きました reports an action, while 書いてあります describes the resulting record.",
      "reviewHref": "#l8-koto-wa-ga"
    }
  },
  {
    "id": "part1-book-07-08-q15",
    "hint": "The speaker grants that it is a little cold. Which continuation limits the practical importance of that cold?",
    "translation": "It is a little cold, admittedly, but heating is not necessary.",
    "correctExplanation": "少し sets a mild degree of cold. The repeated 寒い confirms that the speaker accepts that description. 暖房は必要ない says the cold does not justify heating in this context.",
    "rationales": {
      "a": "暖房は必要ない qualifies the admitted cold by limiting its consequence.",
      "b": "暖房を入れよう proposes turning on heating, which naturally follows from cold rather than providing the intended qualification.",
      "c": "暖房を入れた reports turning on heating, also supporting the cold instead of providing the expected contrast."
    },
    "studyGuide": {
      "reading": "だんぼうはひつようない",
      "strongerHint": "Choose the contrast “cold, but not enough to require heating.”",
      "clue": "寒いことは寒い grants the cold; the following が calls for a qualification.",
      "steps": [
        "少し sets a mild degree of cold.",
        "The repeated 寒い confirms that the speaker accepts that description.",
        "暖房は必要ない says the cold does not justify heating in this context."
      ],
      "trap": "が in a concession needs a meaningful contrast here. Do not choose a natural response to cold if it merely reinforces the first clause.",
      "reviewHref": "#l8-koto-wa-ga"
    }
  },
  {
    "id": "part1-book-07-08-q16",
    "hint": "ニュース番組だけ limits the programs watched. What must the first clause admit?",
    "translation": "I do watch television, but only news programs.",
    "correctExplanation": "見る supplies the admitted activity. 見ることは見る confirms it by repeating the predicate. ニュース番組だけ gives the qualification: the viewing is limited to news.",
    "rationales": {
      "a": "見ることは見ない mixes affirmation and negation instead of granting the activity.",
      "b": "見ないことは見ない repeats a negative claim, which conflicts with watching news programs.",
      "c": "見ることは見る admits the activity and leaves room for the news-only limitation."
    },
    "studyGuide": {
      "reading": "みることはみる",
      "strongerHint": "Repeat the affirmative verb: the speaker does watch television, but only one kind of program.",
      "clue": "だけ limits the scope of an activity that the speaker admits doing.",
      "steps": [
        "見る supplies the admitted activity.",
        "見ることは見る confirms it by repeating the predicate.",
        "ニュース番組だけ gives the qualification: the viewing is limited to news."
      ],
      "trap": "“Only news” means some television is watched. An opening that denies watching would contradict that scope.",
      "reviewHref": "#l8-koto-wa-ga"
    }
  }
];
  const byId = new Map(support.map(item => [item.id, item]));
  root.N3QuizData = Object.freeze((root.N3QuizData || []).map(record => {
    const extra = byId.get(record.id);
    return extra ? { ...record, ...extra } : record;
  }));
}(typeof window !== "undefined" ? window : globalThis));
