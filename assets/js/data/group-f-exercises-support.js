/* Authored study support for Group F book exercises.
 * Load after part2-quiz-data.js and before quiz.js. The generated source remains intact.
 * Only these 25 records are enriched; original answer keys and question types are retained.
 */
(function (root) {
  "use strict";
  if (typeof document !== "undefined" && document.body?.dataset.page !== "group-f") return;
  const support = [
  {
    "id": "gf-book-1-01",
    "hint": "Look immediately after the blank. Which form is required by ばかりいる?",
    "translation": "What’s wrong? You’ve been looking at the clock over and over for a while now.",
    "correctExplanation": "The person keeps checking the clock. 見る becomes て-form 見て. 見てばかりいる describes the repeated activity.",
    "rationales": {
      "mite": "見て correctly forms 見てばかりいる.",
      "miru": "見る can precede limitation ばかり, but it does not form the printed てばかりいる pattern.",
      "mita": "見た belongs to recent completion before ばかりだ, not to this repeated-action ending."
    },
    "studyGuide": {
      "reading": "みて",
      "strongerHint": "さっきから describes a repeated action continuing for a while; the complete pattern is Vてばかりいる.",
      "clue": "The printed ばかりいる and さっきから point to repeated looking.",
      "steps": [
        "The person keeps checking the clock.",
        "見る becomes て-form 見て.",
        "見てばかりいる describes the repeated activity."
      ],
      "trap": "Do not confuse てばかりいる with たばかりだ. The final いる is already printed, so a recent-completion reading will not fit.",
      "reviewHref": "#gf-tebakari",
      "sentence": "どうしたの。さっきから時計を（　）ばかりいるね。",
      "choiceTexts": {
        "mite": "見て",
        "miru": "見る",
        "mita": "見た"
      }
    }
  },
  {
    "id": "gf-book-1-02",
    "hint": "Has the match begun, or is starting still the only remaining step?",
    "translation": "The match has only just started, so we do not know how it will turn out from here.",
    "correctExplanation": "The sentence treats the start as completed but recent. 始まる becomes past 始まった. 始まったばかりです expresses that the match has only just begun.",
    "rationales": {
      "hajimatta": "始まった correctly makes recent-completion たばかり.",
      "hajimaru": "始まる would describe a remaining start under a readiness interpretation; this item presents the match as already in its early stage.",
      "hajimatte": "始まって would need いる for the repeated-action pattern; ばかりです does not supply that structure."
    },
    "studyGuide": {
      "reading": "はじまった",
      "strongerHint": "これからどうなるかわかりません says it is too early to know how the match will develop.",
      "clue": "The match is in its early stage, and its outcome is still unknown.",
      "steps": [
        "The sentence treats the start as completed but recent.",
        "始まる becomes past 始まった.",
        "始まったばかりです expresses that the match has only just begun."
      ],
      "trap": "The later これから refers to how the match develops, not proof that the start itself is still in the future.",
      "reviewHref": "#gf-tabakari",
      "sentence": "試合は（　）ばかりですから、これからどうなるかわかりません。",
      "choiceTexts": {
        "hajimatta": "始まった",
        "hajimaru": "始まる",
        "hajimatte": "始まって"
      }
    }
  },
  {
    "id": "gf-book-1-03",
    "hint": "What kind of adjective is 便利, and are both advantages being described now?",
    "translation": "This area not only has convenient transport; it also has a pleasant environment.",
    "correctExplanation": "便利 is a な-adjective. Use 便利な or the formal 便利である before ばかりでなく. Both displayed alternatives correctly add the transport advantage to the good environment.",
    "rationales": {
      "benri": "Both 便利な and 便利である correctly connect the current な-adjective predicate to ばかりでなく.",
      "benrini": "便利に is an adverbial form and does not complete the required adjective connection here.",
      "benridatta": "便利だった changes the first feature to the past; no past-versus-present contrast is established in this sentence."
    },
    "studyGuide": {
      "reading": "べんりな",
      "strongerHint": "The second fact is 環境もいい. The first needs the present な-adjective connection before ばかりでなく.",
      "clue": "交通が便利 and 環境もいい are two current advantages.",
      "steps": [
        "便利 is a な-adjective.",
        "Use 便利な or the formal 便利である before ばかりでなく.",
        "Both displayed alternatives correctly add the transport advantage to the good environment."
      ],
      "trap": "The original choice lists two accepted forms. The completed sentence shows 便利な; 便利である also works. Use one at a time. 便利だった is valid in other contexts, but this sentence gives current features.",
      "reviewHref": "#gf-dakenaku-formation",
      "sentence": "この辺りは交通が（　）ばかりでなく、環境もいい。",
      "choiceTexts": {
        "benri": "便利な",
        "benrini": "便利に",
        "benridatta": "便利だった"
      }
    }
  },
  {
    "id": "gf-book-1-04",
    "hint": "Is the headache being described as a continuing trend or a single newly completed change?",
    "translation": "My headaches have been getting worse and worse lately, so I decided to consult a doctor.",
    "correctExplanation": "The headaches are continuing to worsen. The trend pattern takes the dictionary form of the change expression. ひどくなるばかり means the severity keeps increasing.",
    "rationales": {
      "hidokunaru": "ひどくなる correctly expresses the continuing worsening trend.",
      "hidokunatta": "ひどくなったばかり would focus on having only just worsened, rather than continued deterioration.",
      "hidokunatte": "ひどくなって does not form the change pattern with the printed ばかりなので."
    },
    "studyGuide": {
      "reading": "ひどくなる",
      "strongerHint": "最近 and the decision to consult a doctor frame a worsening trend.",
      "clue": "ひどくなる describes a change in severity.",
      "steps": [
        "The headaches are continuing to worsen.",
        "The trend pattern takes the dictionary form of the change expression.",
        "ひどくなるばかり means the severity keeps increasing."
      ],
      "trap": "A trend can have begun earlier and still use dictionary form before ばかりだ. Do not choose past form simply because 最近 concerns a recent period.",
      "reviewHref": "#gf-bakarida",
      "sentence": "最近頭痛が（　）ばかりなので、医者に相談することにした。",
      "choiceTexts": {
        "hidokunaru": "ひどくなる",
        "hidokunatta": "ひどくなった",
        "hidokunatte": "ひどくなって"
      }
    }
  },
  {
    "id": "gf-book-1-05",
    "hint": "Check the tense of the second event: 強くなった. What has happened to the rain?",
    "translation": "Not only did it start raining, but the wind also grew stronger.",
    "correctExplanation": "The rain began. 降り始める becomes past 降り始めた. ばかりでなく adds the stronger wind to that first completed change.",
    "rationales": {
      "furihajimeta": "降り始めた correctly supplies the first past event in the addition.",
      "furihajimeru": "降り始める would leave the first event nonpast despite the completed changes reported here.",
      "furihajimete": "降り始めて is not the plain-clause connection required before ばかりでなく."
    },
    "studyGuide": {
      "reading": "ふりはじめた",
      "strongerHint": "Two weather changes are reported as completed: rain started and the wind grew stronger.",
      "clue": "風も強くなった adds a second past change.",
      "steps": [
        "The rain began.",
        "降り始める becomes past 降り始めた.",
        "ばかりでなく adds the stronger wind to that first completed change."
      ],
      "trap": "た before ばかり does not always mean “just did.” The full ending ばかりでなく marks addition here.",
      "reviewHref": "#gf-dakenaku",
      "sentence": "雨が（　）ばかりでなく、風も強くなった。",
      "choiceTexts": {
        "furihajimeta": "降り始めた",
        "furihajimeru": "降り始める",
        "furihajimete": "降り始めて"
      }
    }
  },
  {
    "id": "gf-book-1-06",
    "hint": "The document has been filled in. What action remains undone?",
    "translation": "I have finished filling in the documents. All that remains is to stamp them with my seal.",
    "correctExplanation": "The documents are already written. Pressing the seal onto them is still to be done. Dictionary-form 押す + ばかりだ expresses readiness for that final step.",
    "rationales": {
      "osu": "押す correctly names the pending final action.",
      "oshita": "押した would mean the stamping has only just been completed, contradicting 後は.",
      "oshite": "押して does not form the readiness pattern before ばかりだ."
    },
    "studyGuide": {
      "reading": "おす",
      "strongerHint": "もう書き終わった and 後は establish completed preparation followed by one final step.",
      "clue": "後は marks the one remaining action after writing is complete.",
      "steps": [
        "The documents are already written.",
        "Pressing the seal onto them is still to be done.",
        "Dictionary-form 押す + ばかりだ expresses readiness for that final step."
      ],
      "trap": "The completed writing does not make the stamping completed too. Track the two actions separately.",
      "reviewHref": "#gf-bakarida",
      "sentence": "書類はもう書き終わった。後ははんこを（　）ばかりだ。",
      "choiceTexts": {
        "osu": "押す",
        "oshita": "押した",
        "oshite": "押して"
      }
    }
  },
  {
    "id": "gf-book-1-07",
    "hint": "The supplied expression is 見ている. Was the beginner doing anything besides watching?",
    "translation": "It was my first time taking part in volunteer work, so all I did was watch.",
    "correctExplanation": "The supplied 見ている describes being engaged in watching. Vている can directly precede limitation ばかり. The final だった places that limited state in the past.",
    "rationales": {
      "miteiru": "見ている preserves the supplied ongoing expression and correctly forms 見ているばかりだった.",
      "miru": "見る can occur with ばかり in other limitation contexts, but it removes the ている supplied for this exercise.",
      "mita": "見たばかり would mean a recently completed act of looking, not merely watching throughout the first volunteer experience."
    },
    "studyGuide": {
      "reading": "みている",
      "strongerHint": "ただ…ばかりだった describes the limited activity during that first experience.",
      "clue": "初めて and ただ explain the limited participation.",
      "steps": [
        "The supplied 見ている describes being engaged in watching.",
        "Vている can directly precede limitation ばかり.",
        "The final だった places that limited state in the past."
      ],
      "trap": "The book supplies 見ている rather than 見る. A dictionary-form limitation can occur elsewhere, but this form exercise retains the supplied ongoing activity. Past time is carried by だった.",
      "reviewHref": "#gf-bakari-formation",
      "sentence": "ボランティアには初めて参加したので、ただ（　）ばかりだった。",
      "choiceTexts": {
        "miteiru": "見ている",
        "miru": "見る",
        "mita": "見た"
      }
    }
  },
  {
    "id": "gf-book-1-08",
    "hint": "Which form means the early period after meeting someone?",
    "translation": "When I had only just met this person, I thought they seemed scary, but they turned out to be surprisingly interesting.",
    "correctExplanation": "The meeting has already happened in that remembered period. 会う becomes past 会った. 会ったばかりのころ means the time when the acquaintance was still new.",
    "rationales": {
      "atta": "会った correctly forms the recent-completion expression modifying ころ.",
      "au": "会う would not express the period after a newly completed meeting.",
      "atte": "会って would require another structure and does not form たばかりのころ."
    },
    "studyGuide": {
      "reading": "あった",
      "strongerHint": "のころ describes a period when the meeting was still recent.",
      "clue": "ばかりのころ modifies the period shortly after the first meeting.",
      "steps": [
        "The meeting has already happened in that remembered period.",
        "会う becomes past 会った.",
        "会ったばかりのころ means the time when the acquaintance was still new."
      ],
      "trap": "会う uses the った past form: 会った. The の after ばかり connects the recent state to ころ.",
      "reviewHref": "#gf-tabakari",
      "sentence": "（　）ばかりのころは怖い人だと思ったが、意外に面白い人だった。",
      "choiceTexts": {
        "atta": "会った",
        "au": "会う",
        "atte": "会って"
      }
    }
  },
  {
    "id": "gf-book-1-09",
    "hint": "The teacher asks students to add an action to listening. Is this advice general or a report about a past lesson?",
    "translation": "Do not only listen to what the teacher says; ask plenty of questions too.",
    "correctExplanation": "Listening is the first activity. Dictionary-form 聞く fits the general instruction. ばかりでなく adds asking questions rather than excluding listening.",
    "rationales": {
      "kiku": "聞く correctly supplies the general activity in this instruction.",
      "kiita": "聞いた would make the first activity a completed past act without that time frame being established.",
      "kiite": "聞いて is not the plain-form connection required before ばかりでなく."
    },
    "studyGuide": {
      "reading": "きく",
      "strongerHint": "質問してください adds asking questions to the activity of listening.",
      "clue": "The second clause requests an additional learning activity.",
      "steps": [
        "Listening is the first activity.",
        "Dictionary-form 聞く fits the general instruction.",
        "ばかりでなく adds asking questions rather than excluding listening."
      ],
      "trap": "Do not confuse a request to do more than listen with a claim that listening has just finished. Read the complete addition ending.",
      "reviewHref": "#gf-dakenaku",
      "sentence": "先生の話を（　）ばかりでなく、どんどん質問してください。",
      "choiceTexts": {
        "kiku": "聞く",
        "kiita": "聞いた",
        "kiite": "聞いて"
      }
    }
  },
  {
    "id": "gf-book-1-10",
    "hint": "Which habitual activity does the speaker want the listener to move beyond?",
    "translation": "Instead of just worrying about the future, why not try taking action?",
    "correctExplanation": "The unwanted habit is repeatedly worrying about what lies ahead. 悩む changes to て-form 悩んで. 悩んでばかりいないで means “do not just keep worrying.”",
    "rationales": {
      "nayande": "悩んで correctly forms the repeated-activity pattern before ばかりいないで.",
      "nayamu": "悩む does not connect to the printed repeated-action ばかりいないで.",
      "nayanda": "悩んだ would point toward recent completion and cannot form this request to stop the ongoing habit."
    },
    "studyGuide": {
      "reading": "なやんで",
      "strongerHint": "ばかりいないで is already printed; it negates a repeated-action pattern.",
      "clue": "行動してみたらどうですか proposes an alternative to constant worrying.",
      "steps": [
        "The unwanted habit is repeatedly worrying about what lies ahead.",
        "悩む changes to て-form 悩んで.",
        "悩んでばかりいないで means “do not just keep worrying.”"
      ],
      "trap": "む-verbs use んで in the て-form. The printed いないで carries the negative request; do not put the first verb into a negative or past form.",
      "reviewHref": "#gf-tebakari",
      "sentence": "先のことを（　）ばかりいないで、行動してみたらどうですか。",
      "choiceTexts": {
        "nayande": "悩んで",
        "nayamu": "悩む",
        "nayanda": "悩んだ"
      }
    }
  },
  {
    "id": "gf-book-2-01",
    "hint": "What does 握手もした add to the visit?",
    "translation": "I not only met that famous singer; I also shook hands with them.",
    "correctExplanation": "Meeting the singer is the first past action. 会ったばかりでなく introduces an addition to that action. 握手もした supplies the second past action.",
    "rationales": {
      "a": "会うばかりで restricts the action to meeting, rather than adding a handshake.",
      "b": "会ったばかりでなく correctly adds the second completed experience.",
      "c": "会ってばかりいないで tells someone not to keep meeting; it does not report the speaker’s two past experiences."
    },
    "studyGuide": {
      "reading": "あったばかりでなく",
      "strongerHint": "The speaker did two things: met the singer and shook hands.",
      "clue": "も marks the handshake as an additional completed experience.",
      "steps": [
        "Meeting the singer is the first past action.",
        "会ったばかりでなく introduces an addition to that action.",
        "握手もした supplies the second past action."
      ],
      "trap": "会った followed by ばかり does not decide the meaning alone. Here でなく makes the whole expression additive.",
      "reviewHref": "#gf-dakenaku",
      "sentence": "わたしはあの有名な歌手に（　）、握手もした。",
      "choiceTexts": {
        "a": "会うばかりで",
        "b": "会ったばかりでなく",
        "c": "会ってばかりいないで"
      }
    }
  },
  {
    "id": "gf-book-2-02",
    "hint": "What does yesterday tell you about whether the shop has opened?",
    "translation": "This shop only opened yesterday, so it still has few customers.",
    "correctExplanation": "The opening happened yesterday. 開店した is the completed action. 開店したばかりで presents its recency as relevant to the small number of customers.",
    "rationales": {
      "a": "開店ばかりして would focus on repeatedly opening shops or doing little besides opening; that does not fit this single opening yesterday.",
      "b": "開店するばかりで would say the shop is ready to open, leaving the opening pending.",
      "c": "開店したばかりで correctly presents the opening as recent."
    },
    "studyGuide": {
      "reading": "かいてんしたばかりで",
      "strongerHint": "きのう and まだお客さんが少ない link a recent opening to a small customer base.",
      "clue": "The recent opening explains the present lack of customers.",
      "steps": [
        "The opening happened yesterday.",
        "開店した is the completed action.",
        "開店したばかりで presents its recency as relevant to the small number of customers."
      ],
      "trap": "Do not choose readiness when the opening has already happened. “Just opened” and “ready to open” describe different stages.",
      "reviewHref": "#gf-tabakari",
      "sentence": "この店はきのう（　）、まだお客さんが少ない。",
      "choiceTexts": {
        "a": "開店ばかりして",
        "b": "開店するばかりで",
        "c": "開店したばかりで"
      }
    }
  },
  {
    "id": "gf-book-2-03",
    "hint": "Which behavior prevents the mother from interacting with her child?",
    "translation": "That mother keeps looking at her mobile phone and does not even talk to her child.",
    "correctExplanation": "Looking at the phone occupies the mother. 見てばかりいる describes that repeated or ongoing habit. Its final いる becomes いて to connect to the statement about not talking.",
    "rationales": {
      "a": "見たばかりで says she has only just looked; it does not describe spending her time doing little else.",
      "b": "見たばかりでなく introduces an added action, rather than the neglect of conversation caused by the phone habit.",
      "c": "見てばかりいて correctly describes the repeated behavior and connects to the following clause."
    },
    "studyGuide": {
      "reading": "みてばかりいて",
      "strongerHint": "子どもと話もしない shows what is neglected while she keeps looking at the phone.",
      "clue": "The neglected conversation supports criticism of a dominant activity.",
      "steps": [
        "Looking at the phone occupies the mother.",
        "見てばかりいる describes that repeated or ongoing habit.",
        "Its final いる becomes いて to connect to the statement about not talking."
      ],
      "trap": "Track both changes: 見る → 見て, then いる → いて. A completed glance does not explain this repeated-behavior contrast.",
      "reviewHref": "#gf-tebakari",
      "sentence": "あのお母さんは携帯電話を（　）、子どもと話もしない。",
      "choiceTexts": {
        "a": "見たばかりで",
        "b": "見たばかりでなく",
        "c": "見てばかりいて"
      }
    }
  },
  {
    "id": "gf-book-2-04",
    "hint": "Everyone has assembled. What is the only remaining step?",
    "translation": "Everyone is here, so all that remains is to wait for the party to begin.",
    "correctExplanation": "The attendees have all arrived. There is no other preparation specified as remaining. 待つばかりだ states the one remaining action.",
    "rationales": {
      "a": "待つばかりだ correctly identifies what remains after the attendees assemble.",
      "b": "待ってばかりいる would emphasize spending one’s time waiting, often critically, rather than readiness for the next stage.",
      "c": "待ったばかりだ would mean a period of waiting has just been completed; the sentence says waiting remains."
    },
    "studyGuide": {
      "reading": "まつばかりだ",
      "strongerHint": "出席者もそろった and あとは establish that the setup is complete.",
      "clue": "The gathering is ready, leaving only waiting for the start.",
      "steps": [
        "The attendees have all arrived.",
        "There is no other preparation specified as remaining.",
        "待つばかりだ states the one remaining action."
      ],
      "trap": "Waiting can also be a repeated habit, but here あとは frames it as the final stage after everything is ready.",
      "reviewHref": "#gf-bakarida",
      "sentence": "出席者もそろったので、あとはパーティーが始まるのを（　）。",
      "choiceTexts": {
        "a": "待つばかりだ",
        "b": "待ってばかりいる",
        "c": "待ったばかりだ"
      }
    }
  },
  {
    "id": "gf-book-2-05",
    "hint": "What can the husband do when he feels there is no other useful action available to him?",
    "translation": "The baby’s due date is approaching, but as the husband I feel there is nothing I can do. All I can do is watch over the situation.",
    "correctExplanation": "The speaker says he cannot do anything else. 見守る names the action he sees as available. 見守るばかりだ means “all I can do is watch over things.”",
    "rationales": {
      "a": "見守るばかりだ correctly expresses the limited available action.",
      "b": "見守ったばかりだ would describe having just finished watching over something, which is not the ongoing situation.",
      "c": "見守ってばかりいる would emphasize repeated or exclusive watching as a habit; the focus here is that the speaker sees no other action available."
    },
    "studyGuide": {
      "reading": "みまもるばかりだ",
      "strongerHint": "何もできない and ただ lead to an “all I can do” limitation.",
      "clue": "The speaker’s sense of limited ability gives ただ…ばかり its meaning.",
      "steps": [
        "The speaker says he cannot do anything else.",
        "見守る names the action he sees as available.",
        "見守るばかりだ means “all I can do is watch over things.”"
      ],
      "trap": "This is not necessarily completed preparation or blame for a repeated habit. Vるばかり can simply express the one action the speaker feels able to take.",
      "reviewHref": "#gf-bakari",
      "sentence": "子どもが生まれる日が近づいたが、夫のぼくは何もできない。ただ（　）。",
      "choiceTexts": {
        "a": "見守るばかりだ",
        "b": "見守ったばかりだ",
        "c": "見守ってばかりいる"
      }
    }
  },
  {
    "id": "gf-book-2-06",
    "hint": "Why is forgetting the name already surprising?",
    "translation": "I only just heard the name, but I have already forgotten it.",
    "correctExplanation": "Hearing the name has happened. 聞いたばかりだ presents that event as recent. が contrasts the recency with already having forgotten.",
    "rationales": {
      "a": "名前ばかり聞いた focuses on hearing only names rather than on how recently this name was heard.",
      "b": "名前を聞くばかりだ limits the activity to hearing names and does not establish a recently completed event.",
      "c": "名前を聞いたばかりだ correctly supplies the recency that makes forgetting surprising."
    },
    "studyGuide": {
      "reading": "なまえをきいたばかりだ",
      "strongerHint": "もう忘れてしまった contrasts with hearing the name only recently.",
      "clue": "もう and が connect recent learning with unexpectedly quick forgetting.",
      "steps": [
        "Hearing the name has happened.",
        "聞いたばかりだ presents that event as recent.",
        "が contrasts the recency with already having forgotten."
      ],
      "trap": "Look at the position of ばかり: 名前ばかり limits what was heard, while 聞いたばかり describes when the hearing happened.",
      "reviewHref": "#gf-tabakari",
      "sentence": "（　）が、もう忘れてしまった。",
      "choiceTexts": {
        "a": "名前ばかり聞いた",
        "b": "名前を聞くばかりだ",
        "c": "名前を聞いたばかりだ"
      }
    }
  },
  {
    "id": "gf-book-2-07",
    "hint": "On days off, does he do anything besides sleeping?",
    "translation": "He seems tired lately; on his days off he does nothing but sleep and does not do anything else.",
    "correctExplanation": "The sentence describes what dominates his days off. 寝るばかり limits that activity to sleeping. で connects the limitation to 何もしない.",
    "rationales": {
      "a": "寝るばかりで correctly means he does little else but sleep.",
      "b": "寝たばかりで means he has only just slept; it does not describe the usual pattern on days off.",
      "c": "寝るばかりでなく means “not only sleeps,” which expects an added activity and conflicts with 何もしない."
    },
    "studyGuide": {
      "reading": "ねるばかりで",
      "strongerHint": "何もしない directly supports a limitation reading.",
      "clue": "休日は and 何もしない describe a recurring lack of other activity.",
      "steps": [
        "The sentence describes what dominates his days off.",
        "寝るばかり limits that activity to sleeping.",
        "で connects the limitation to 何もしない."
      ],
      "trap": "The dictionary form can express limitation here. Do not assume every Vるばかりだ describes future readiness or continuing change.",
      "reviewHref": "#gf-bakari",
      "sentence": "最近彼は疲れているらしく、休日は（　）、何もしない。",
      "choiceTexts": {
        "a": "寝るばかりで",
        "b": "寝たばかりで",
        "c": "寝るばかりでなく"
      }
    }
  },
  {
    "id": "gf-book-2-08",
    "hint": "Since quitting smoking, is the speaker describing the focus of an increase, a continuing trend, or a recent event?",
    "translation": "Since I stopped smoking, my weight has just kept increasing.",
    "correctExplanation": "Quitting smoking provides the starting point. 体重が増える names the change in weight. 増えるばかりだ emphasizes that the increase keeps continuing.",
    "rationales": {
      "a": "体重ばかり増える emphasizes that weight alone increases, rather than the continuing trend that this item is targeting.",
      "b": "体重が増えるばかりだ correctly describes the ongoing increase.",
      "c": "体重が増えたばかりだ focuses on a recent completed increase rather than a continuing trend."
    },
    "studyGuide": {
      "reading": "たいじゅうがふえるばかりだ",
      "strongerHint": "増える is a change verb; てから gives the starting point for the developing trend.",
      "clue": "The weight increase is presented as a continuing change since the earlier event.",
      "steps": [
        "Quitting smoking provides the starting point.",
        "体重が増える names the change in weight.",
        "増えるばかりだ emphasizes that the increase keeps continuing."
      ],
      "trap": "Moving ばかり before or after the verb changes its focus. 体重ばかり narrows what increases; 増えるばかり describes the continuing direction.",
      "reviewHref": "#gf-bakarida",
      "sentence": "たばこをやめてから、（　）。",
      "choiceTexts": {
        "a": "体重ばかり増える",
        "b": "体重が増えるばかりだ",
        "c": "体重が増えたばかりだ"
      }
    }
  },
  {
    "id": "gf-book-onepoint-01",
    "hint": "What does の connect the completed birth to?",
    "translation": "We have three newborn puppies at home.",
    "correctExplanation": "The puppies have been born. The sentence describes them as newly born. 生まれたばかりの directly modifies 子犬.",
    "rationales": {
      "bakari": "ばかり correctly forms 生まれたばかりの子犬, “newborn puppies.”",
      "tokoro": "ところの does not form the recent-completion noun modifier taught here."
    },
    "studyGuide": {
      "reading": "ばかり",
      "strongerHint": "The phrase directly describes 子犬 as recently born.",
      "clue": "の子犬 requires the recent-completion noun modifier taught here.",
      "steps": [
        "The puppies have been born.",
        "The sentence describes them as newly born.",
        "生まれたばかりの directly modifies 子犬."
      ],
      "trap": "The noun connection is the decisive clue. This comparison concerns the recent-completion use, not every other possible construction containing ところの.",
      "reviewHref": "#gf-onepoint",
      "sentence": "うちには生まれた（　）の子犬が３匹います。",
      "choiceTexts": {
        "bakari": "ばかり",
        "tokoro": "ところ"
      }
    }
  },
  {
    "id": "gf-book-onepoint-02",
    "hint": "How does Takahashi’s entrance relate to the meeting’s start?",
    "translation": "Takahashi came in just as the meeting had started.",
    "correctExplanation": "The meeting has just begun. Takahashi enters at that point. 始まったところに connects the scene to the entrance.",
    "rationales": {
      "bakari": "ばかりに does not form this recent-completion scene connection. A different causal ばかりに construction would have a different meaning.",
      "tokoro": "ところ correctly combines with に to mark the just-started scene."
    },
    "studyGuide": {
      "reading": "ところ",
      "strongerHint": "The printed に connects the just-started scene to someone entering it.",
      "clue": "たところに locates the entrance at the immediate post-start scene.",
      "steps": [
        "The meeting has just begun.",
        "Takahashi enters at that point.",
        "始まったところに connects the scene to the entrance."
      ],
      "trap": "Do not choose solely from the shared English “just.” In this scene connection, the printed に favors ところ; recent-completion たばかり does not make the same construction.",
      "reviewHref": "#gf-onepoint",
      "sentence": "会議が始まった（　）に高橋さんが入ってきた。",
      "choiceTexts": {
        "bakari": "ばかり",
        "tokoro": "ところ"
      }
    }
  },
  {
    "id": "gf-book-onepoint-03",
    "hint": "What kind of update is being given over the phone?",
    "translation": "Hello, I have just boarded the Shinkansen. I think I will arrive there at eight.",
    "correctExplanation": "Boarding has just been completed. The caller gives a current location-and-progress update. 乗ったところです is the textbook’s choice for that immediate post-action scene.",
    "rationales": {
      "bakari": "ばかり would emphasize the boarding’s recency and can be natural with a different focus; it is not the textbook’s selected immediate-scene reading here.",
      "tokoro": "ところ fits the immediate phone update just after boarding and is the keyed answer."
    },
    "studyGuide": {
      "reading": "ところ",
      "strongerHint": "今 and the arrival estimate frame a report made just after boarding.",
      "clue": "The caller reports their immediate stage of travel.",
      "steps": [
        "Boarding has just been completed.",
        "The caller gives a current location-and-progress update.",
        "乗ったところです is the textbook’s choice for that immediate post-action scene."
      ],
      "trap": "乗ったばかりです can also be natural Japanese if the emphasis is on how recently the person boarded. It is not ruled out by 今; the exercise prefers the immediate scene focus of ところ.",
      "reviewHref": "#gf-onepoint",
      "sentence": "もしもし、今新幹線に乗った（　）です。そちらに８時に着くと思います。",
      "choiceTexts": {
        "bakari": "ばかり",
        "tokoro": "ところ"
      }
    }
  },
  {
    "id": "gf-book-onepoint-04",
    "hint": "Why does the computer’s poor condition surprise the speaker?",
    "translation": "I only just bought this computer, but it is already not working properly.",
    "correctExplanation": "Buying the computer is completed. The speaker stresses how new that purchase still is. 買ったばかりなのに connects subjective recency to the disappointing contrast.",
    "rationales": {
      "bakari": "ばかり correctly emphasizes a purchase still treated as recent.",
      "tokoro": "ところ would locate the statement immediately after the purchase; that specific scene is not the focus supplied here."
    },
    "studyGuide": {
      "reading": "ばかり",
      "strongerHint": "まだ買った…なのに contrasts the newness of the purchase with the malfunction.",
      "clue": "The purchase is still considered new, so poor condition is unexpected.",
      "steps": [
        "Buying the computer is completed.",
        "The speaker stresses how new that purchase still is.",
        "買ったばかりなのに connects subjective recency to the disappointing contrast."
      ],
      "trap": "ところ could work in a different scene immediately after a purchase. Here the textbook emphasizes newness and an unexpected fault, without locating the speaker at the purchase scene.",
      "reviewHref": "#gf-onepoint",
      "sentence": "このパソコンはまだ買った（　）なのに、調子が悪い。",
      "choiceTexts": {
        "bakari": "ばかり",
        "tokoro": "ところ"
      }
    }
  },
  {
    "id": "gf-book-onepoint-05",
    "hint": "Can this event be at its immediate post-action stage if it happened a month ago?",
    "translation": "I hear he came to Japan only a month ago. His Japanese is good, though.",
    "correctExplanation": "The arrival occurred one month ago. That is treated as a short period for the situation being discussed. 来たばかり expresses this subjective recency; だそうです reports the information.",
    "rationales": {
      "bakari": "ばかり allows the arrival a month ago to be presented as still recent.",
      "tokoro": "ところ does not fit an immediate post-arrival stage for an event explicitly placed a month earlier."
    },
    "studyGuide": {
      "reading": "ばかり",
      "strongerHint": "The speaker still treats one month in Japan as a short time relative to language ability.",
      "clue": "１か月前 rules out an immediate arrival scene but can still count as recent in context.",
      "steps": [
        "The arrival occurred one month ago.",
        "That is treated as a short period for the situation being discussed.",
        "来たばかり expresses this subjective recency; だそうです reports the information."
      ],
      "trap": "Do not turn the book’s definition “just after” into a fixed number of minutes. ばかり depends on the context, whereas the compared ところ use locates the immediate stage.",
      "reviewHref": "#gf-onepoint",
      "sentence": "彼は１か月前に日本に来た（　）だそうです。でも、日本語が上手ですね。",
      "choiceTexts": {
        "bakari": "ばかり",
        "tokoro": "ところ"
      }
    }
  },
  {
    "id": "gf-book-onepoint-06",
    "hint": "What finished at the same point as listening to the favorite song?",
    "translation": "Just when I finished listening to my favorite song, the lunch break ended.",
    "correctExplanation": "Listening to the song finishes. The lunch break ends right at that point. 聞き終わったところで marks the immediate scene where the second event occurs.",
    "rationales": {
      "bakari": "ばかりで would emphasize recent completion rather than clearly locating the coinciding end of lunch break.",
      "tokoro": "ところで correctly identifies the point just after listening finishes."
    },
    "studyGuide": {
      "reading": "ところ",
      "strongerHint": "ちょうど connects the end of lunch break to the exact point after finishing the song.",
      "clue": "ちょうど and で align the two endings at the same point.",
      "steps": [
        "Listening to the song finishes.",
        "The lunch break ends right at that point.",
        "聞き終わったところで marks the immediate scene where the second event occurs."
      ],
      "trap": "Both forms can be followed by で in suitable sentences. Here it is the exact coincidence of the two endings, not で alone, that supports ところ.",
      "reviewHref": "#gf-onepoint",
      "sentence": "好きな曲を聞き終わった（　）で、ちょうど昼休みが終わった。",
      "choiceTexts": {
        "bakari": "ばかり",
        "tokoro": "ところ"
      }
    }
  },
  {
    "id": "gf-book-onepoint-07",
    "hint": "What does having joined in April explain about the speaker’s current knowledge?",
    "translation": "I only joined the company this April, so I still do not understand the relationships among the people there very well.",
    "correctExplanation": "Joining the company happened in April. The speaker still considers their time there short. 入社したばかりなので gives that recency as the reason for not yet understanding the relationships.",
    "rationales": {
      "bakari": "ばかり correctly presents joining in April as still recent enough to explain unfamiliarity.",
      "tokoro": "ところ would place the statement immediately after joining, which is not the adjustment-period focus established here."
    },
    "studyGuide": {
      "reading": "ばかり",
      "strongerHint": "まだ…よくわからない makes the short time at the company relevant.",
      "clue": "Recency explains ongoing unfamiliarity with the company’s interpersonal relationships.",
      "steps": [
        "Joining the company happened in April.",
        "The speaker still considers their time there short.",
        "入社したばかりなので gives that recency as the reason for not yet understanding the relationships."
      ],
      "trap": "The sentence does not place the speaker at the exact moment after joining. It describes adjustment during the early period at the company.",
      "reviewHref": "#gf-onepoint",
      "sentence": "この４月に入社した（　）なので、まだ会社の人間関係がよくわからない。",
      "choiceTexts": {
        "bakari": "ばかり",
        "tokoro": "ところ"
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
