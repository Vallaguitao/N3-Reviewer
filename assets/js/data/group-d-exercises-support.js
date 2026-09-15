/* Authored study support for Group D book exercises.
 * Load after part2-quiz-data.js and before quiz.js. The generated source remains intact.
 * Only these 31 records are enriched; original answer keys and question types are retained.
 */
(function (root) {
  "use strict";
  if (typeof document !== "undefined" && document.body?.dataset.page !== "group-d") return;
  const support = [
  {
    "id": "gd-book-1-01",
    "hint": "The grandmother and mother share a trait. Does the sentence need a noun description or a connection between the two cases?",
    "translation": "Just as my grandmother was patient, my mother also puts up with a lot.",
    "correctExplanation": "The first clause describes the grandmother’s patience. ように connects that model to the mother’s similar behavior. 強かった remains past inside the first clause.",
    "rationales": {
      "a": "ような would directly modify a noun; here 母も starts the next clause rather than completing a noun description.",
      "b": "ように correctly connects the two comparable situations.",
      "c": "ようだ would finish a predicate without the needed connection to 母もよくがまんする."
    },
    "studyGuide": {
      "reading": "ように",
      "strongerHint": "母も introduces the second person who shares the grandmother’s patience.",
      "clue": "母もよくがまんする gives a second, similar case.",
      "steps": [
        "The first clause describes the grandmother’s patience.",
        "ように connects that model to the mother’s similar behavior.",
        "強かった remains past inside the first clause."
      ],
      "trap": "The word immediately after the blank is 母, but it is the subject of a new clause, 母もよくがまんする. Do not choose ような merely because any noun happens to come next.",
      "reviewHref": "#gd-same-example",
      "sentence": "祖母ががまん強かった（　）母もよくがまんする。",
      "choiceTexts": {
        "a": "ような",
        "b": "ように",
        "c": "ようだ"
      }
    }
  },
  {
    "id": "gd-book-1-02",
    "hint": "Find the noun whose kind is described by the clause before the blank.",
    "translation": "Could it be that the kinds of problems everyone is worried about have already been resolved?",
    "correctExplanation": "みんなが心配している describes the kind of problems. ような connects that description directly to 問題点. のではないだろうか makes the final suggestion tentative.",
    "rationales": {
      "a": "ような correctly links the describing clause to 問題点.",
      "b": "ように would connect to an action or state rather than directly describe this noun.",
      "c": "ようだ cannot directly modify 問題点 in this position."
    },
    "studyGuide": {
      "reading": "ような",
      "strongerHint": "問題点 is directly modified by みんなが心配している….",
      "clue": "問題点 is the category noun immediately modified by the よう phrase.",
      "steps": [
        "みんなが心配している describes the kind of problems.",
        "ような connects that description directly to 問題点.",
        "のではないだろうか makes the final suggestion tentative."
      ],
      "trap": "Do not let the sentence-final uncertainty distract you from the local noun connection. The blank modifies 問題点, while the ending considers whether those problems are resolved.",
      "reviewHref": "#gd-same-example",
      "sentence": "みんなが心配している（　）問題点は、もう解決したのではないだろうか。",
      "choiceTexts": {
        "a": "ような",
        "b": "ように",
        "c": "ようだ"
      }
    }
  },
  {
    "id": "gd-book-1-03",
    "hint": "Look just after the blank: から needs a completed reason clause.",
    "translation": "My brother’s way of speaking is very interesting because it is as if he has actually seen things for himself.",
    "correctExplanation": "The printed かの introduces an imagined comparison. ようだ completes the predicate “is as if…”. から then presents that resemblance as the reason his way of speaking is interesting.",
    "rationales": {
      "a": "ような requires a noun to modify; から does not supply that noun.",
      "b": "ように would modify a following action or state, not complete the reason clause before から.",
      "c": "ようだ correctly forms the predicate ようだから."
    },
    "studyGuide": {
      "reading": "ようだ",
      "strongerHint": "The comparison becomes the predicate before から: かのようだ + から.",
      "clue": "から follows the predicate of the “as if” comparison.",
      "steps": [
        "The printed かの introduces an imagined comparison.",
        "ようだ completes the predicate “is as if…”.",
        "から then presents that resemblance as the reason his way of speaking is interesting."
      ],
      "trap": "ようだ need not end the entire sentence. It can complete a clause that is followed by から or quotation と. The comparison itself does not prove the brother witnessed the events.",
      "reviewHref": "#gd-similarity",
      "sentence": "兄の話し方は実際に自分で見てきたかの（　）から、とても面白い。",
      "choiceTexts": {
        "a": "ような",
        "b": "ように",
        "c": "ようだ"
      }
    }
  },
  {
    "id": "gd-book-1-04",
    "hint": "The speaker recalls something they regularly say. Is that a goal or a reference to information?",
    "translation": "As I always say, eating properly is fundamental to good daily habits.",
    "correctExplanation": "The speaker is referring to what they usually say. ように means “as” in this known-information use. The statement about eating is the content being recalled.",
    "rationales": {
      "a": "ような would describe a following noun as a kind, rather than introduce the familiar statement.",
      "b": "ように correctly introduces previously stated information.",
      "c": "ようだ would assert a resemblance or inference instead of making the required “as…” connection."
    },
    "studyGuide": {
      "reading": "ように",
      "strongerHint": "いつも言っている introduces the statement as already familiar.",
      "clue": "いつも言っている points back to the speaker’s familiar advice.",
      "steps": [
        "The speaker is referring to what they usually say.",
        "ように means “as” in this known-information use.",
        "The statement about eating is the content being recalled."
      ],
      "trap": "The following しっかり食べること is part of a full statement. Read the discourse connection “as I always say,” not a physical comparison or an aim to say something.",
      "reviewHref": "#gd-known-hope",
      "sentence": "いつも言っている（　）しっかり食べることは生活習慣の基本なのです。",
      "choiceTexts": {
        "a": "ような",
        "b": "ように",
        "c": "ようだ"
      }
    }
  },
  {
    "id": "gd-book-1-05",
    "hint": "What unwanted result should writing the note prevent?",
    "translation": "You should write down what we discussed right now so that you do not forget it.",
    "correctExplanation": "The desired outcome is not forgetting the discussion. ように links that outcome to writing it down. 書いておいたほうがいい recommends doing it in preparation.",
    "rationales": {
      "a": "ような would require a noun modified by the no-forgetting description.",
      "b": "ように correctly expresses the intended preventive result.",
      "c": "ようだ would assert an appearance or comparison rather than the purpose of making the note."
    },
    "studyGuide": {
      "reading": "ように",
      "strongerHint": "忘れない is the desired result; writing now is the supporting action.",
      "clue": "忘れない and ノートに書いておく form a result-and-preparation relationship.",
      "steps": [
        "The desired outcome is not forgetting the discussion.",
        "ように links that outcome to writing it down.",
        "書いておいたほうがいい recommends doing it in preparation."
      ],
      "trap": "The negative is inside the desired outcome. The sentence recommends making a note; it does not prohibit writing or state that forgetting has already happened.",
      "reviewHref": "#gd-known-hope",
      "sentence": "話し合ったことを忘れない（　）今すぐノートに書いておいたほうがいい。",
      "choiceTexts": {
        "a": "ような",
        "b": "ように",
        "c": "ようだ"
      }
    }
  },
  {
    "id": "gd-book-1-06",
    "hint": "The sentence quotes a judgment about the speaker’s position. What form completes that judgment before と?",
    "translation": "Probably no one would think that my present position is just like that of a king.",
    "correctExplanation": "王様の supplies the noun comparison. ようだ completes the idea that the position is like a king’s. とは then marks that idea as the content of 思う.",
    "rationales": {
      "a": "ような would need a noun after it and cannot finish the quoted predicate here.",
      "b": "ように would change the comparison into a modifier and leave the printed とは without the intended predicate.",
      "c": "ようだ correctly completes the quoted judgment before とは."
    },
    "studyGuide": {
      "reading": "ようだ",
      "strongerHint": "王様の… forms a resemblance predicate inside the quoted content.",
      "clue": "とは introduces the content that nobody is expected to think.",
      "steps": [
        "王様の supplies the noun comparison.",
        "ようだ completes the idea that the position is like a king’s.",
        "とは then marks that idea as the content of 思う."
      ],
      "trap": "Do not choose ように just because 思う occurs later. The printed と needs a complete quoted predicate here: ようだとは.",
      "reviewHref": "#gd-similarity",
      "sentence": "わたしの今の立場がまるで王様の（　）とは、だれも思わないだろう。",
      "choiceTexts": {
        "a": "ような",
        "b": "ように",
        "c": "ようだ"
      }
    }
  },
  {
    "id": "gd-book-1-07",
    "hint": "The speaker received a warning about how to write. Which pattern reports an instruction?",
    "translation": "I ended up being told to write more neatly.",
    "correctExplanation": "書く is the action requested. ように introduces that instruction. 注意されてしまった describes receiving the warning, with an unwelcome or regretted nuance.",
    "rationales": {
      "a": "ような would modify a noun, which is not the structure before 注意された.",
      "b": "ように correctly reports the content of the instruction.",
      "c": "ようだ would describe a resemblance or inference rather than what the speaker was told to do."
    },
    "studyGuide": {
      "reading": "ように",
      "strongerHint": "注意された identifies the blank’s clause as the content of a warning.",
      "clue": "書く…注意された reports what the speaker was instructed to do.",
      "steps": [
        "書く is the action requested.",
        "ように introduces that instruction.",
        "注意されてしまった describes receiving the warning, with an unwelcome or regretted nuance."
      ],
      "trap": "Deliberate-action verbs are normal in reported instructions. Do not import the desired-state rule from purpose ように and reject 書く here.",
      "reviewHref": "#gd-request",
      "sentence": "もっと字をていねいに書く（　）注意されてしまった。",
      "choiceTexts": {
        "a": "ような",
        "b": "ように",
        "c": "ようだ"
      }
    }
  },
  {
    "id": "gd-book-1-08",
    "hint": "Someone commented on the speaker’s pronunciation. Look for the quoted predicate before と.",
    "translation": "I was told that my Japanese pronunciation sounds like French.",
    "correctExplanation": "フランス語の supplies the comparison standard. ようだ makes the statement “is like French.” と marks that statement as what someone said.",
    "rationales": {
      "a": "ような requires a noun; と does not provide one here.",
      "b": "ように would normally introduce an instruction with 言われた in a different construction, not this noun comparison followed by quotation と.",
      "c": "ようだ correctly completes the reported comparison."
    },
    "studyGuide": {
      "reading": "ようだ",
      "strongerHint": "フランス語の… completes the comparison that was reported.",
      "clue": "と言われた reports a judgment, rather than an instruction to speak differently.",
      "steps": [
        "フランス語の supplies the comparison standard.",
        "ようだ makes the statement “is like French.”",
        "と marks that statement as what someone said."
      ],
      "trap": "言われた can report either a statement or an instruction. The printed と after this blank signals quoted content: ようだと言われた.",
      "reviewHref": "#gd-similarity",
      "sentence": "わたしの日本語の発音はフランス語の（　）と言われた。",
      "choiceTexts": {
        "a": "ような",
        "b": "ように",
        "c": "ようだ"
      }
    }
  },
  {
    "id": "gd-book-1-09",
    "hint": "What ability should the book’s explanation make possible?",
    "translation": "This book explains things carefully so that anyone can easily make a doll.",
    "correctExplanation": "作る becomes potential 作れる. ように presents the ability as the intended result. The careful explanation is provided to make that result possible.",
    "rationales": {
      "a": "ような would require a directly modified noun after it.",
      "b": "ように correctly connects the desired ability to the explanation.",
      "c": "ようだ would state an appearance or inference instead of the design aim of the explanation."
    },
    "studyGuide": {
      "reading": "ように",
      "strongerHint": "作れる is potential: the reader should be able to make a doll.",
      "clue": "作れる is the desired ability; 説明してあります describes how the book supports it.",
      "steps": [
        "作る becomes potential 作れる.",
        "ように presents the ability as the intended result.",
        "The careful explanation is provided to make that result possible."
      ],
      "trap": "Do not choose ような simply because a book is mentioned. At the blank, the result clause connects to the predicate 説明してあります, not to a following noun.",
      "reviewHref": "#gd-known-hope",
      "sentence": "この本は、だれでも簡単に人形が作れる（　）ていねいに説明してあります。",
      "choiceTexts": {
        "a": "ような",
        "b": "ように",
        "c": "ようだ"
      }
    }
  },
  {
    "id": "gd-book-1-10",
    "hint": "What noun is being described as suitable for small children to eat?",
    "translation": "Do you have any menu options of the kind that even small children can eat?",
    "correctExplanation": "食べられる is potential in this context. The whole clause describes a kind of menu option. ような connects that description to the noun メニュー.",
    "rationales": {
      "a": "ような correctly modifies メニュー.",
      "b": "ように would link a desired result to a following action or state, not directly describe メニュー.",
      "c": "ようだ cannot directly modify the noun in this position."
    },
    "studyGuide": {
      "reading": "ような",
      "strongerHint": "メニュー is directly after the blank and is modified by the preceding clause.",
      "clue": "食べられる describes the kind of メニュー being requested.",
      "steps": [
        "食べられる is potential in this context.",
        "The whole clause describes a kind of menu option.",
        "ような connects that description to the noun メニュー."
      ],
      "trap": "A potential verb does not automatically require ように. Here the next noun is being modified, so the correct ending is ような.",
      "reviewHref": "#gd-same-example",
      "sentence": "小さい子どもでも食べられる（　）メニューは何かありますか。",
      "choiceTexts": {
        "a": "ような",
        "b": "ように",
        "c": "ようだ"
      }
    }
  },
  {
    "id": "gd-book-1-11",
    "hint": "The chart supplies evidence already available to the reader. Which connection means “as can be seen”?",
    "translation": "As can be seen from the chart, the university enrollment rates for men and women have become almost the same.",
    "correctExplanation": "The reader can obtain the information from the chart. ように introduces that available information. ほとんど同じになっています describes the rates becoming nearly equal.",
    "rationales": {
      "a": "ような would modify a noun rather than introduce the evidence-based statement.",
      "b": "ように correctly means “as can be understood from the chart.”",
      "c": "ようだ would assert an inference without forming the intended introductory “as…” clause."
    },
    "studyGuide": {
      "reading": "ように",
      "strongerHint": "表からわかる introduces the following information by referring to the chart.",
      "clue": "表から identifies the source from which the statement can be understood.",
      "steps": [
        "The reader can obtain the information from the chart.",
        "ように introduces that available information.",
        "ほとんど同じになっています describes the rates becoming nearly equal."
      ],
      "trap": "わかる can also appear in a desired-result sentence, but here the chart is evidence, not something being created so people will understand.",
      "reviewHref": "#gd-known-hope",
      "sentence": "表からわかる（　）男女の大学進学率はほとんど同じになっています。",
      "choiceTexts": {
        "a": "ような",
        "b": "ように",
        "c": "ようだ"
      }
    }
  },
  {
    "id": "gd-book-1-12",
    "hint": "The main verb is praying. Is the polite verb form before the blank allowed in a wish?",
    "translation": "I am praying that your injury heals soon.",
    "correctExplanation": "治る describes healing, the hoped-for outcome. ますように is natural in this wish formula. 祈っております explicitly states the act of praying.",
    "rationales": {
      "a": "ような would need a noun and would not form this prayer formula.",
      "b": "ように correctly connects the polite hoped-for outcome to 祈っております.",
      "c": "ようだ would assert a comparison or inference instead of expressing the prayer."
    },
    "studyGuide": {
      "reading": "ように",
      "strongerHint": "祈っております supports the conventional ～ますように pattern.",
      "clue": "治ります…祈っております is a polite prayer for recovery.",
      "steps": [
        "治る describes healing, the hoped-for outcome.",
        "ますように is natural in this wish formula.",
        "祈っております explicitly states the act of praying."
      ],
      "trap": "Do not reject 治ります before ように by applying the plain-form rule for comparisons. Polite wishes use ～ますように; the person with the injury is supplied by context.",
      "reviewHref": "#gd-request",
      "sentence": "早くけがが治ります（　）祈っております。",
      "choiceTexts": {
        "a": "ような",
        "b": "ように",
        "c": "ようだ"
      }
    }
  },
  {
    "id": "gd-book-1-13",
    "hint": "Which outcome is the proposed action meant to prevent?",
    "translation": "Let’s wash our hands when we return from going out so that we do not catch a cold.",
    "correctExplanation": "The desired state is not catching a cold. ように links that aim to the suggested action. 帰ったら tells when to perform the handwashing.",
    "rationales": {
      "a": "ような would need a noun that the no-cold description modifies.",
      "b": "ように correctly introduces the preventive aim.",
      "c": "ようだ would state an appearance or judgment rather than the action’s purpose."
    },
    "studyGuide": {
      "reading": "ように",
      "strongerHint": "ひかない is the intended negative outcome of the handwashing advice.",
      "clue": "かぜをひかない presents the preventive aim.",
      "steps": [
        "The desired state is not catching a cold.",
        "ように links that aim to the suggested action.",
        "帰ったら tells when to perform the handwashing."
      ],
      "trap": "The sentence contains both a purpose clause and a timing clause. 帰ったら gives the occasion; ひかないように gives the intended result.",
      "reviewHref": "#gd-known-hope",
      "sentence": "かぜをひかない（　）外出から帰ったら手を洗いましょう。",
      "choiceTexts": {
        "a": "ような",
        "b": "ように",
        "c": "ようだ"
      }
    }
  },
  {
    "id": "gd-book-2-01",
    "hint": "Leaving at six is preparation for departure. Which outcome does the speaker want to avoid?",
    "translation": "I left home at six so that I would not be late for the departure.",
    "correctExplanation": "遅れる means be late. 遅れない names the desired absence of that event. ように links avoiding lateness to leaving at six.",
    "rationales": {
      "a": "遅れる would make lateness the desired result, contrary to the preparation described.",
      "b": "遅れない correctly makes avoiding lateness the aim."
    },
    "studyGuide": {
      "reading": "おくれない",
      "strongerHint": "The aim is not being late, so check the polarity of the verb.",
      "clue": "出発の時間に names the time the speaker needs to make.",
      "steps": [
        "遅れる means be late.",
        "遅れない names the desired absence of that event.",
        "ように links avoiding lateness to leaving at six."
      ],
      "trap": "Do not choose a form only because it can grammatically attach to ように. The affirmative would say the speaker left early in order to be late.",
      "reviewHref": "#gd-known-hope",
      "sentence": "出発の時間に（　）ように６時に家を出た。",
      "choiceTexts": {
        "a": "遅れる",
        "b": "遅れない"
      }
    }
  },
  {
    "id": "gd-book-2-02",
    "hint": "The tree is positioned so it can be seen from the window. Is the target a deliberate look or visibility?",
    "translation": "I planted a cherry tree near the window so that it could be seen clearly from here.",
    "correctExplanation": "見る is an intentional act of looking. 見える describes what is visible from the window. 見えるように gives the intended state created by planting the tree there.",
    "rationales": {
      "a": "見る names a deliberate act; it does not express the visibility intended in this sentence.",
      "b": "見える correctly describes the desired visible state."
    },
    "studyGuide": {
      "reading": "みえる",
      "strongerHint": "見える describes being visible; 見る describes deliberately looking.",
      "clue": "The planting location is arranged to make the tree visible.",
      "steps": [
        "見る is an intentional act of looking.",
        "見える describes what is visible from the window.",
        "見えるように gives the intended state created by planting the tree there."
      ],
      "trap": "English “see” can translate both verbs. Choose the Japanese verb for the desired state of visibility, not the act of looking.",
      "reviewHref": "#gd-known-hope",
      "sentence": "この窓からよく（　）ように窓のそばに桜の木を植えた。",
      "choiceTexts": {
        "a": "見る",
        "b": "見える"
      }
    }
  },
  {
    "id": "gd-book-2-03",
    "hint": "A microphone helps sound reach listeners. Which verb expresses that result?",
    "translation": "Let’s use a microphone so that everyone can hear clearly.",
    "correctExplanation": "聞く describes listening. 聞こえる describes sound being heard or reaching the listener. ように connects audibility to the suggested microphone use.",
    "rationales": {
      "a": "聞く describes choosing to listen rather than the sound becoming audible.",
      "b": "聞こえる correctly gives the result the microphone is meant to enable."
    },
    "studyGuide": {
      "reading": "きこえる",
      "strongerHint": "聞こえる means be audible; 聞く is deliberate listening.",
      "clue": "Using the microphone is meant to make the speech audible.",
      "steps": [
        "聞く describes listening.",
        "聞こえる describes sound being heard or reaching the listener.",
        "ように connects audibility to the suggested microphone use."
      ],
      "trap": "A microphone does not itself make someone choose to listen. This exercise targets audibility rather than the listener’s deliberate action.",
      "reviewHref": "#gd-known-hope",
      "sentence": "よく（　）ように、マイクを使いましょう。",
      "choiceTexts": {
        "a": "聞く",
        "b": "聞こえる"
      }
    }
  },
  {
    "id": "gd-book-2-04",
    "hint": "The speaker prayed about admission to a chosen university. Is the wish framed as ability or as a planned action?",
    "translation": "I prayed to God that I would be able to get into my chosen university.",
    "correctExplanation": "入る is the action of entering. 入れる here is its potential form, “can enter.” 入れるようにと gives the hoped-for possibility in the prayer.",
    "rationales": {
      "a": "入れる correctly frames admission as the hoped-for possibility.",
      "b": "入る simply states entering as an action; the textbook’s prayer contrast calls for the potential 入れる."
    },
    "studyGuide": {
      "reading": "はいれる",
      "strongerHint": "入れる is potential: being able to enter the university.",
      "clue": "お願いした frames admission as an outcome the speaker hopes will become possible.",
      "steps": [
        "入る is the action of entering.",
        "入れる here is its potential form, “can enter.”",
        "入れるようにと gives the hoped-for possibility in the prayer."
      ],
      "trap": "Read 入れる here as はいれる, the potential of 入る, not いれる, “put in.” The same written form can hide this distinction.",
      "reviewHref": "#gd-request",
      "sentence": "希望の大学に（　）ようにと神様にお願いした。",
      "choiceTexts": {
        "a": "入れる",
        "b": "入る"
      }
    }
  },
  {
    "id": "gd-book-2-05",
    "hint": "The sentence refers back to a message from the department head. Has that communication already occurred?",
    "translation": "As the department head already informed us, today’s meeting starts at two.",
    "correctExplanation": "The announcement is the reference for the current statement. あった puts that communication in the past. ように means “as,” not “so that a message will arrive.”",
    "rationales": {
      "a": "ある would not express the earlier completed communication intended here.",
      "b": "あった correctly refers back to the message already received."
    },
    "studyGuide": {
      "reading": "あった",
      "strongerHint": "The two-o’clock meeting time is introduced as previously announced information.",
      "clue": "連絡が…ように points to the earlier communication.",
      "steps": [
        "The announcement is the reference for the current statement.",
        "あった puts that communication in the past.",
        "ように means “as,” not “so that a message will arrive.”"
      ],
      "trap": "Known-information ように does not always require past tense, but this sentence specifically recalls an announcement already made.",
      "reviewHref": "#gd-known-hope",
      "sentence": "部長から連絡が（　）ように、今日の会議は２時からです。",
      "choiceTexts": {
        "a": "ある",
        "b": "あった"
      }
    }
  },
  {
    "id": "gd-book-2-06",
    "hint": "The speaker bought liquor their father would probably enjoy drinking. Which form predicts a likely action?",
    "translation": "I bought some liquor that my father would probably be happy to drink.",
    "correctExplanation": "飲む becomes the stem 飲み before appearance/likelihood そう. 飲みそうな describes something he seems likely to drink. な connects that description to お酒.",
    "rationales": {
      "a": "飲みそうな correctly describes liquor the father seems likely to drink happily.",
      "b": "飲むかのような would suggest an “as if drinking” comparison, which does not express the intended likely preference."
    },
    "studyGuide": {
      "reading": "のみそうな",
      "strongerHint": "Use verb stem + そうな before the noun, rather than an imagined “as if” comparison.",
      "clue": "父が喜んで… describes the father’s likely response to the liquor.",
      "steps": [
        "飲む becomes the stem 飲み before appearance/likelihood そう.",
        "飲みそうな describes something he seems likely to drink.",
        "な connects that description to お酒."
      ],
      "trap": "Both choices end in な, so the noun connection alone cannot decide. Compare the meanings: a likely future action versus an imagined scene.",
      "reviewHref": "#gd-similarity",
      "sentence": "父が喜んで（　）お酒を買ってきた。",
      "choiceTexts": {
        "a": "飲みそうな",
        "b": "飲むかのような"
      }
    }
  },
  {
    "id": "gd-book-2-07",
    "hint": "The printed clause already ends in か. What completes the “as if” expression before the calm state?",
    "translation": "Even after the earthquake, my mother was calm as if nothing had happened.",
    "correctExplanation": "The printed か is part of かのように. The option must therefore supply のように. に connects the comparison to 落ち着いていた.",
    "rationales": {
      "a": "のように correctly completes the printed か to form かのように.",
      "b": "ように omits the の needed after the printed か."
    },
    "studyGuide": {
      "reading": "のように",
      "strongerHint": "The full pattern is 何もなかったかのように.",
      "clue": "何もなかった is an imagined comparison for the mother’s calmness.",
      "steps": [
        "The printed か is part of かのように.",
        "The option must therefore supply のように.",
        "に connects the comparison to 落ち着いていた."
      ],
      "trap": "Treat printed text and the option as one string. Choosing ように would leave かように, not the intended modern pattern かのように.",
      "reviewHref": "#gd-similarity",
      "sentence": "母は地震の後も何もなかったか（　）落ち着いていた。",
      "choiceTexts": {
        "a": "のように",
        "b": "ように"
      }
    }
  },
  {
    "id": "gd-book-2-08",
    "hint": "Cake and sweet bean buns are examples of what larger category?",
    "translation": "My younger sister eats only sweet foods such as cake and sweet bean buns.",
    "correctExplanation": "や lists sample foods. のような links those examples to the category noun. ばかり adds the speaker’s sense that this is almost all the sister eats.",
    "rationales": {
      "a": "のような correctly introduces the foods as examples of 甘い物.",
      "b": "らしい does not create the intended example-to-category connection after this list."
    },
    "studyGuide": {
      "reading": "のような",
      "strongerHint": "甘い物 is the category; the named foods are examples.",
      "clue": "ケーキやあんパン are examples of 甘い物.",
      "steps": [
        "や lists sample foods.",
        "のような links those examples to the category noun.",
        "ばかり adds the speaker’s sense that this is almost all the sister eats."
      ],
      "trap": "らしい can describe a typical quality, but this sentence is listing examples of sweet foods. Do not treat every English “like” as interchangeable.",
      "reviewHref": "#gd-same-example",
      "sentence": "妹はケーキやあんパン（　）甘い物ばかり食べている。",
      "choiceTexts": {
        "a": "のような",
        "b": "らしい"
      }
    }
  },
  {
    "id": "gd-book-onepoint-01",
    "hint": "Look at both the particle and the verb: someone deliberately removes the dirt.",
    "translation": "I tried a special detergent in order to remove the dirt completely.",
    "correctExplanation": "汚れ is the object marked by を. 落とす is the deliberate action of removing it. ために makes that action the goal of trying the detergent.",
    "rationales": {
      "you": "ように frames a desired state or result; the textbook instead presents the actor’s deliberate 落とす action as the goal here.",
      "tame": "ために correctly introduces the intended act of removing the dirt."
    },
    "studyGuide": {
      "reading": "ために",
      "strongerHint": "汚れを + 落とす names a transitive action intended by the person using the detergent.",
      "clue": "を落とす presents removing dirt as the intended action.",
      "steps": [
        "汚れ is the object marked by を.",
        "落とす is the deliberate action of removing it.",
        "ために makes that action the goal of trying the detergent."
      ],
      "trap": "Compare the next sentence’s 汚れが落ちる. A small change in particle and verb changes an intended action into a desired state.",
      "reviewHref": "#gd-onepoint",
      "sentence": "汚れをきれいに落とす（　）、特別な洗剤を使ってみた。",
      "choiceTexts": {
        "you": "ように",
        "tame": "ために"
      }
    }
  },
  {
    "id": "gd-book-onepoint-02",
    "hint": "Here the dirt is the subject. Does the verb mean remove it, or have it come off?",
    "translation": "I tried a special detergent so that the dirt would come off completely.",
    "correctExplanation": "汚れ is the subject of the intransitive 落ちる. The dirt coming off is the desired result. ように links that result to trying the detergent.",
    "rationales": {
      "you": "ように correctly frames the dirt coming off as the desired result.",
      "tame": "ために would not express this desired intransitive result in the purpose contrast being tested."
    },
    "studyGuide": {
      "reading": "ように",
      "strongerHint": "汚れが + 落ちる describes the dirt coming off as a result.",
      "clue": "が落ちる describes the state the speaker wants to bring about.",
      "steps": [
        "汚れ is the subject of the intransitive 落ちる.",
        "The dirt coming off is the desired result.",
        "ように links that result to trying the detergent."
      ],
      "trap": "Do not choose just because both sentences use detergent. Read を落とす versus が落ちる to distinguish action from result.",
      "reviewHref": "#gd-onepoint",
      "sentence": "汚れがきれいに落ちる（　）、特別な洗剤を使ってみた。",
      "choiceTexts": {
        "you": "ように",
        "tame": "ために"
      }
    }
  },
  {
    "id": "gd-book-onepoint-03",
    "hint": "The explanations are designed to enable a reader’s learning ability. Which form marks that intended result?",
    "translation": "The explanations in this book are carefully designed so that kanji can be learned easily.",
    "correctExplanation": "覚える becomes potential 覚えられる. The reader’s ability is the desired outcome. ように relates that outcome to the way the explanations are designed.",
    "rationales": {
      "you": "ように correctly introduces the intended ability to learn easily.",
      "tame": "ために would fit an intended action such as 覚える; the printed potential frames the target as an ability."
    },
    "studyGuide": {
      "reading": "ように",
      "strongerHint": "覚えられる is potential here: being able to remember the kanji.",
      "clue": "覚えられる describes the ability the explanation is meant to support.",
      "steps": [
        "覚える becomes potential 覚えられる.",
        "The reader’s ability is the desired outcome.",
        "ように relates that outcome to the way the explanations are designed."
      ],
      "trap": "The form られる can have several jobs, but easy learning is the potential reading here. Interpret it from the sentence rather than automatically labeling it passive.",
      "reviewHref": "#gd-onepoint",
      "sentence": "この本は、簡単に漢字が覚えられる（　）、説明が工夫されている。",
      "choiceTexts": {
        "you": "ように",
        "tame": "ために"
      }
    }
  },
  {
    "id": "gd-book-onepoint-04",
    "hint": "The writer repeats a kanji as a deliberate learning activity. How is the goal expressed?",
    "translation": "I wrote each kanji on paper many times in order to learn it thoroughly.",
    "correctExplanation": "The speaker does the repeated writing. The same speaker intends to learn the kanji. ために connects the learning goal to that practice.",
    "rationales": {
      "you": "ように would frame a desired result or ability; the textbook presents deliberate 覚える as the action goal here.",
      "tame": "ために correctly gives the purpose of the repeated writing."
    },
    "studyGuide": {
      "reading": "ために",
      "strongerHint": "覚える is the action the same person intends to accomplish.",
      "clue": "覚える presents learning as the actor’s intended action.",
      "steps": [
        "The speaker does the repeated writing.",
        "The same speaker intends to learn the kanji.",
        "ために connects the learning goal to that practice."
      ],
      "trap": "Do not confuse plain 覚える with potential 覚えられる in the previous question. The book contrasts an intended action with the ability to do it.",
      "reviewHref": "#gd-onepoint",
      "sentence": "漢字をしっかり覚える（　）、一つの漢字を何度も紙に書いた。",
      "choiceTexts": {
        "you": "ように",
        "tame": "ために"
      }
    }
  },
  {
    "id": "gd-book-onepoint-05",
    "hint": "The review is meant to prevent a loss of knowledge. What state should continue?",
    "translation": "I review from time to time so that I do not forget the kanji I have learned.",
    "correctExplanation": "覚えた漢字 names what was already learned. 忘れない gives the desired negative outcome. ように relates reviewing to maintaining that state.",
    "rationales": {
      "you": "ように naturally presents not forgetting as the desired state in this exercise.",
      "tame": "ために can occur with deliberate avoidance in other contexts, but the textbook frames this sentence as maintaining the state of not forgetting."
    },
    "studyGuide": {
      "reading": "ように",
      "strongerHint": "忘れない expresses the desired state of not forgetting.",
      "clue": "Not forgetting is the outcome supported by occasional review.",
      "steps": [
        "覚えた漢字 names what was already learned.",
        "忘れない gives the desired negative outcome.",
        "ように relates reviewing to maintaining that state."
      ],
      "trap": "This book uses ように for the preventive result. Do not turn this into a universal claim that a negative verb can never appear with ために in other contexts.",
      "reviewHref": "#gd-onepoint",
      "sentence": "覚えた漢字を忘れない（　）、ときどき復習している。",
      "choiceTexts": {
        "you": "ように",
        "tame": "ために"
      }
    }
  },
  {
    "id": "gd-book-onepoint-06",
    "hint": "The speaker hopes for recovery. Is 治る a deliberate action performed on an object?",
    "translation": "I am taking plenty of vitamin C in the hope that my cold will get better soon.",
    "correctExplanation": "The cold getting better is the hoped-for state. ように expresses that aim. とっています reports what the speaker is doing with that aim, not evidence that it achieves recovery.",
    "rationales": {
      "you": "ように correctly introduces the hoped-for recovery.",
      "tame": "ために does not supply the intended purpose connection to the non-volitional 治る in this contrast."
    },
    "studyGuide": {
      "reading": "ように",
      "strongerHint": "治る describes getting better; the recovery is a desired outcome.",
      "clue": "かぜが治る describes recovery as an intransitive result.",
      "steps": [
        "The cold getting better is the hoped-for state.",
        "ように expresses that aim.",
        "とっています reports what the speaker is doing with that aim, not evidence that it achieves recovery."
      ],
      "trap": "Distinguish 治る, get better, from 治す, treat or cure. The grammar reports the speaker’s purpose; it does not establish the effectiveness of the method.",
      "reviewHref": "#gd-onepoint",
      "sentence": "かぜが早く治る（　）、ビタミンCをたくさんとっています。",
      "choiceTexts": {
        "you": "ように",
        "tame": "ために"
      }
    }
  },
  {
    "id": "gd-book-onepoint-07",
    "hint": "The speaker makes a deliberate career choice to pursue a goal. Which action do they intend to achieve?",
    "translation": "I left the company in order to realize my dream of having my own shop.",
    "correctExplanation": "The dream is to have a shop of one’s own. 実現する names the action of making that dream real. ために links the goal to the decision to leave the company.",
    "rationales": {
      "you": "ように would frame an outcome or ability; the sentence instead presents realizing the dream as the speaker’s deliberate goal.",
      "tame": "ために correctly introduces that intended goal."
    },
    "studyGuide": {
      "reading": "ために",
      "strongerHint": "夢を実現する names an intended action by the person who leaves the company.",
      "clue": "実現する presents the speaker’s goal as something they intend to do.",
      "steps": [
        "The dream is to have a shop of one’s own.",
        "実現する names the action of making that dream real.",
        "ために links the goal to the decision to leave the company."
      ],
      "trap": "A dream may be uncertain, but uncertainty alone does not require ように. The printed 実現する frames it as the actor’s intended action.",
      "reviewHref": "#gd-onepoint",
      "sentence": "自分の店を持つという夢を実現する（　）、会社を辞めた。",
      "choiceTexts": {
        "you": "ように",
        "tame": "ために"
      }
    }
  },
  {
    "id": "gd-book-onepoint-08",
    "hint": "The curtain movement should let something happen to the room. Who or what is the subject of 入る?",
    "translation": "Please open the curtains wide so that sunlight fills the room.",
    "correctExplanation": "太陽の光 is the subject of 入る. The desired result is light entering throughout the room. ように connects that state to the requested curtain movement.",
    "rationales": {
      "you": "ように correctly frames the entry of sunlight as the intended result.",
      "tame": "ために does not fit the purpose contrast with sunlight as the non-volitional subject of 入る."
    },
    "studyGuide": {
      "reading": "ように",
      "strongerHint": "太陽の光 enters; it is not a person deliberately entering a university.",
      "clue": "Sunlight entering the room is the desired result of opening the curtains.",
      "steps": [
        "太陽の光 is the subject of 入る.",
        "The desired result is light entering throughout the room.",
        "ように connects that state to the requested curtain movement."
      ],
      "trap": "The same verb can be volitional or non-volitional in different contexts. Compare sunlight entering here with a person entering university in Question 9.",
      "reviewHref": "#gd-onepoint",
      "sentence": "太陽の光が部屋いっぱいに入る（　）、カーテンを大きく開けてください。",
      "choiceTexts": {
        "you": "ように",
        "tame": "ために"
      }
    }
  },
  {
    "id": "gd-book-onepoint-09",
    "hint": "A person prepares for a goal they intend to pursue. How is entering university framed here?",
    "translation": "I had to make many preparations in order to enter university.",
    "correctExplanation": "入る states the intended act of entering university. ために introduces that act as the goal. しなければならなかった says the preparations were necessary.",
    "rationales": {
      "you": "ように would fit an ability-focused wording such as 入れるように; the printed sentence presents the intended 入る action.",
      "tame": "ために correctly links the preparation to entering university as the goal."
    },
    "studyGuide": {
      "reading": "ために",
      "strongerHint": "大学に入る is the speaker’s intended action, not a statement of potential ability.",
      "clue": "The person preparing is also the person who intends to enter university.",
      "steps": [
        "入る states the intended act of entering university.",
        "ために introduces that act as the goal.",
        "しなければならなかった says the preparations were necessary."
      ],
      "trap": "Do not treat 入る as always non-volitional because sunlight used it in the previous question. The subject and intended meaning matter. 入れる would instead frame the goal as ability or possibility.",
      "reviewHref": "#gd-onepoint",
      "sentence": "大学に入る（　）、わたしはたくさんの準備をしなければならなかった。",
      "choiceTexts": {
        "you": "ように",
        "tame": "ために"
      }
    }
  },
  {
    "id": "gd-book-onepoint-10",
    "hint": "Who will tidy the papers, and whose unwanted behavior should that prevent?",
    "translation": "Let’s put the documents away neatly so that the child does not play with them.",
    "correctExplanation": "The child is the person who might interfere with the papers. The speaker proposes tidying them away in advance. ように connects that preparation to the child’s not doing so.",
    "rationales": {
      "you": "ように correctly introduces the desired behavior of another person.",
      "tame": "ために would present an intended action as the actor’s own goal; here the clause concerns preventing a child’s separate action."
    },
    "studyGuide": {
      "reading": "ように",
      "strongerHint": "The child is the subject of しない; the person tidying controls the preparation.",
      "clue": "子どもがいたずらをしない is the desired preventive result.",
      "steps": [
        "The child is the person who might interfere with the papers.",
        "The speaker proposes tidying them away in advance.",
        "ように connects that preparation to the child’s not doing so."
      ],
      "trap": "The desired event and supporting action have different actors. 片付けておこう expresses preparation; it does not directly order the child to behave.",
      "reviewHref": "#gd-onepoint",
      "sentence": "子どもがいたずらをしない（　）、書類をきちんと片付けておこう。",
      "choiceTexts": {
        "you": "ように",
        "tame": "ために"
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
