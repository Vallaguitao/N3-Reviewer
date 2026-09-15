/* Authored study support for Group H book exercises.
 * Load after part2-quiz-data.js and before quiz.js. The generated source remains intact.
 * Only these 25 records are enriched; original answer keys and question types are retained.
 */
(function (root) {
  "use strict";
  if (typeof document !== "undefined" && document.body?.dataset.page !== "group-h") return;
  const support = [
  {
    "id": "gh-book-1-01",
    "hint": "Did she arrive after the speaker, or was she already at the station?",
    "translation": "We arranged to meet at the station at three. When I arrived, she was already there.",
    "correctExplanation": "The speaker reaches the agreed meeting place. もう describes her presence as already established at that moment. 来ていた means she had arrived and was there.",
    "rationales": {
      "a": "来た would introduce her arrival as a new event, rather than the already-established presence being discovered.",
      "b": "来ていた fits “had already arrived / was already there.”"
    },
    "studyGuide": {
      "reading": "きていた",
      "strongerHint": "もう and the arrival at the station frame something the speaker discovers on arrival.",
      "clue": "The other person’s arrival is earlier than the speaker’s arrival.",
      "steps": [
        "The speaker reaches the agreed meeting place.",
        "もう describes her presence as already established at that moment.",
        "来ていた means she had arrived and was there."
      ],
      "trap": "ていた is not always “was doing.” With 来る here, it describes the state resulting from an earlier arrival.",
      "reviewHref": "#gh-notice",
      "sentence": "３時に駅で待ち合わせした。駅に着くと、彼女はもう（　）。",
      "choiceTexts": {
        "a": "来た",
        "b": "来ていた"
      }
    }
  },
  {
    "id": "gh-book-1-02",
    "hint": "What does opening a drawer reveal?",
    "translation": "When I opened the drawer, there was a letter inside.",
    "correctExplanation": "Opening gives access to the contents. The letter’s presence is the discovered fact. あった states that a nonliving thing was there.",
    "rationales": {
      "a": "あった correctly states the letter’s existing presence.",
      "b": "入った would say that the letter went in when the drawer was opened, a different event."
    },
    "studyGuide": {
      "reading": "あった",
      "strongerHint": "A letter is a thing whose presence is discovered inside.",
      "clue": "The letter was already in the drawer.",
      "steps": [
        "Opening gives access to the contents.",
        "The letter’s presence is the discovered fact.",
        "あった states that a nonliving thing was there."
      ],
      "trap": "入った is an event, “entered / went in.” It does not mean “was inside” without the resulting-state form 入っていた.",
      "reviewHref": "#gh-notice",
      "sentence": "引き出しを開けると、手紙が（　）。",
      "choiceTexts": {
        "a": "あった",
        "b": "入った"
      }
    }
  },
  {
    "id": "gh-book-1-03",
    "hint": "Is the speaker reporting a film already on television, or the next action they chose to do?",
    "translation": "When I turned on the television, a film I had seen a long time ago was playing.",
    "correctExplanation": "テレビをつけたら introduces the revealing action. 昔見た modifies 映画: a film seen in the past. やっていた means it was showing on television at that moment.",
    "rationales": {
      "a": "見た would shift to the speaker deliberately watching the film, rather than discovering an ongoing broadcast.",
      "b": "やっていた correctly describes the film already being shown."
    },
    "studyGuide": {
      "reading": "やっていた",
      "strongerHint": "The television is switched on, revealing what is being broadcast.",
      "clue": "The broadcast is already in progress when the screen comes on.",
      "steps": [
        "テレビをつけたら introduces the revealing action.",
        "昔見た modifies 映画: a film seen in the past.",
        "やっていた means it was showing on television at that moment."
      ],
      "trap": "Do not let the earlier 見た pull you toward another 見た. The first is inside “a film I saw”; the blank describes what was on TV.",
      "reviewHref": "#gh-notice",
      "sentence": "テレビをつけたら、昔見た映画を（　）。",
      "choiceTexts": {
        "a": "見た",
        "b": "やっていた"
      }
    }
  },
  {
    "id": "gh-book-1-04",
    "hint": "Does the toy make a sound because it is shaken?",
    "translation": "When I tried shaking the toy, it made a pleasant sound.",
    "correctExplanation": "Identify 振ってみる as the trial action. いい音がする means make or give off a pleasant sound. した reports that sound occurring as the result.",
    "rationales": {
      "a": "した correctly reports the sound the shake produces.",
      "b": "していた would describe an already-continuing sound, which misses the trigger-and-response reading."
    },
    "studyGuide": {
      "reading": "した",
      "strongerHint": "振ってみる means trying a shake, and the sentence reports the response.",
      "clue": "The shake produces a new sound.",
      "steps": [
        "Identify 振ってみる as the trial action.",
        "いい音がする means make or give off a pleasant sound.",
        "した reports that sound occurring as the result."
      ],
      "trap": "Do not select していた just because と is followed by the past. Here the sound is produced by the action, not discovered already continuing.",
      "reviewHref": "#gh-trigger",
      "sentence": "おもちゃを振ってみると、いい音が（　）。",
      "choiceTexts": {
        "a": "した",
        "b": "していた"
      }
    }
  },
  {
    "id": "gh-book-1-05",
    "hint": "Does drinking change the person’s mood, or merely reveal an earlier wish?",
    "translation": "After I drank a little alcohol, I felt like dancing.",
    "correctExplanation": "Drinking is the trigger in this past report. 踊りたい becomes 踊りたく before なる. 踊りたくなった reports the change in feeling.",
    "rationales": {
      "a": "踊りたくなった correctly describes developing the urge to dance.",
      "b": "踊りたかった states that the person wanted to dance, without expressing the change caused by drinking."
    },
    "studyGuide": {
      "reading": "おどりたくなった",
      "strongerHint": "Look for the form that means “came to feel like doing.”",
      "clue": "The desire to dance develops after drinking.",
      "steps": [
        "Drinking is the trigger in this past report.",
        "踊りたい becomes 踊りたく before なる.",
        "踊りたくなった reports the change in feeling."
      ],
      "trap": "A reported change in desire is different from directly expressing a wish after hypothetical と. Read たくなった as a whole.",
      "reviewHref": "#gh-trigger",
      "sentence": "少しお酒を飲むと、（　）。",
      "choiceTexts": {
        "a": "踊りたくなった",
        "b": "踊りたかった"
      }
    }
  },
  {
    "id": "gh-book-1-06",
    "hint": "Which option introduces something unexpected during the walk?",
    "translation": "While I was walking along a mountain path, a snake appeared.",
    "correctExplanation": "Walking is already in progress. The second clause should bring an unplanned event into that scene. へびが出てきた makes the snake the subject that appears.",
    "rationales": {
      "a": "へびが出てきた correctly reports an unexpected appearance.",
      "b": "へびを捕まえた describes the speaker’s action of catching the snake, rather than the chance event targeted here."
    },
    "studyGuide": {
      "reading": "へびがでてきた",
      "strongerHint": "歩いていたら is the ongoing background, and が can mark the new event’s subject.",
      "clue": "The snake’s appearance is the event encountered during the walk.",
      "steps": [
        "Walking is already in progress.",
        "The second clause should bring an unplanned event into that scene.",
        "へびが出てきた makes the snake the subject that appears."
      ],
      "trap": "Compare both particle and verb: へびが出る is the snake appearing; へびを捕まえる is someone catching it.",
      "reviewHref": "#gh-chance",
      "sentence": "山道を歩いていたら、（　）。",
      "choiceTexts": {
        "a": "へびが出てきた",
        "b": "へびを捕まえた"
      }
    }
  },
  {
    "id": "gh-book-1-07",
    "hint": "What might you discover when you arrive at a library?",
    "translation": "When I went to the library, I found that it was closed that day.",
    "correctExplanation": "The first action is going to the library. 今日は休みだった states its condition on that occasion. This creates the book’s discovery reading with たら.",
    "rationales": {
      "a": "今日は休みだった correctly gives the existing fact discovered on arrival.",
      "b": "たくさん本を借りた reports borrowing many books, which misses the discovery meaning tested in this item."
    },
    "studyGuide": {
      "reading": "きょうはやすみだった",
      "strongerHint": "One option describes its existing condition that day; the other gives an action by the visitor.",
      "clue": "The visit reveals a closure already in effect.",
      "steps": [
        "The first action is going to the library.",
        "今日は休みだった states its condition on that occasion.",
        "This creates the book’s discovery reading with たら."
      ],
      "trap": "The intended contrast is discovering a state versus deliberately doing something afterward. Do not memorize “たら can never precede an action”; the context and use matter.",
      "reviewHref": "#gh-notice",
      "sentence": "図書館に行ったら、（　）。",
      "choiceTexts": {
        "a": "今日は休みだった",
        "b": "たくさん本を借りた"
      }
    }
  },
  {
    "id": "gh-book-1-08",
    "hint": "Was it already after twelve when the speaker checked?",
    "translation": "When I looked at the clock, it was already past twelve.",
    "correctExplanation": "Looking at the clock reveals the time. The clock check does not cause time to pass twelve. 過ぎていた describes the state after that threshold had been crossed.",
    "rationales": {
      "a": "過ぎた would present passing twelve as the new event, instead of the already-existing time being noticed.",
      "b": "過ぎていた correctly expresses “was already past twelve.”"
    },
    "studyGuide": {
      "reading": "すぎていた",
      "strongerHint": "もう points to a threshold that had already been passed.",
      "clue": "The time was already beyond twelve at the moment of checking.",
      "steps": [
        "Looking at the clock reveals the time.",
        "The clock check does not cause time to pass twelve.",
        "過ぎていた describes the state after that threshold had been crossed."
      ],
      "trap": "過ぎた highlights passing a point; 過ぎていた highlights already being beyond it at another past moment.",
      "reviewHref": "#gh-notice",
      "sentence": "時計を見ると、もう12時を（　）。",
      "choiceTexts": {
        "a": "過ぎた",
        "b": "過ぎていた"
      }
    }
  },
  {
    "id": "gh-book-1-09",
    "hint": "What happens while the speaker is resting on the bench?",
    "translation": "While I was resting on a park bench, an elderly man came toward me.",
    "correctExplanation": "Resting is the background activity. The second clause introduces a new event. 近づいてきた reports movement toward the speaker.",
    "rationales": {
      "a": "近づいてきた correctly introduces the approach during the rest.",
      "b": "いた merely states the man’s presence; it does not supply the chance event intended after this ongoing background."
    },
    "studyGuide": {
      "reading": "ちかづいてきた",
      "strongerHint": "休んでいると sets a continuing activity; look for an event that moves into the scene.",
      "clue": "The man approaches during the rest.",
      "steps": [
        "Resting is the background activity.",
        "The second clause introduces a new event.",
        "近づいてきた reports movement toward the speaker."
      ],
      "trap": "An existing person can be discovered with other wording. This item uses ongoing 休んでいると to frame the new event of an approach.",
      "reviewHref": "#gh-chance",
      "sentence": "公園のベンチで休んでいると、おじいさんが（　）。",
      "choiceTexts": {
        "a": "近づいてきた",
        "b": "いた"
      }
    }
  },
  {
    "id": "gh-book-1-10",
    "hint": "Why did the speaker go outside in the first place?",
    "translation": "The doorbell rang, so I went outside the entrance and found a delivery person there.",
    "correctExplanation": "チャイムが鳴った motivates going to the entrance. Coming outside reveals who rang it. いた states that the delivery person was there.",
    "rationales": {
      "a": "来た would introduce the delivery person arriving at that later moment, rather than already being there to ring.",
      "b": "いた correctly gives the person’s presence when the speaker comes outside."
    },
    "studyGuide": {
      "reading": "いた",
      "strongerHint": "The doorbell had already rung, so the visitor was there before the speaker came out.",
      "clue": "The earlier doorbell establishes the visitor’s presence before the discovery.",
      "steps": [
        "チャイムが鳴った motivates going to the entrance.",
        "Coming outside reveals who rang it.",
        "いた states that the delivery person was there."
      ],
      "trap": "Use the whole sentence, including the reason before ので. 来た would shift the arrival to the wrong point in this event sequence.",
      "reviewHref": "#gh-notice",
      "sentence": "チャイムが鳴ったので玄関の外に出ると、宅配便の人が（　）。",
      "choiceTexts": {
        "a": "来た",
        "b": "いた"
      }
    }
  },
  {
    "id": "gh-book-2-01",
    "hint": "Is the eye already red when the speaker checks it?",
    "translation": "My eye hurt, so I looked in a mirror and found that it was red.",
    "correctExplanation": "The pain is already present. Looking in the mirror is the action taken to inspect it. 見てみると introduces what the check reveals.",
    "rationales": {
      "a": "見てみると fits checking and discovering the redness.",
      "b": "見ていると sets up ongoing looking, which does not fit the focused check that reveals an already-red eye as well.",
      "c": "見ていたら also emphasizes looking already in progress; it misses the intended check-and-discovery structure."
    },
    "studyGuide": {
      "reading": "みてみると",
      "strongerHint": "目が痛いので motivates one act of checking, and 赤かった gives the discovered condition.",
      "clue": "A deliberate check reveals an existing condition.",
      "steps": [
        "The pain is already present.",
        "Looking in the mirror is the action taken to inspect it.",
        "見てみると introduces what the check reveals."
      ],
      "trap": "見てみる means try looking or check; 見ている means be looking. The shared て does not make the forms equivalent.",
      "reviewHref": "#gh-notice",
      "sentence": "目が痛いので、鏡で（　）、赤かった。",
      "choiceTexts": {
        "a": "見てみると",
        "b": "見ていると",
        "c": "見ていたら"
      }
    }
  },
  {
    "id": "gh-book-2-02",
    "hint": "What was the speaker doing when the cancellation message arrived?",
    "translation": "While I was waiting for my friend at a shop, I received a message on my mobile saying, “I can’t come today.”",
    "correctExplanation": "The friend’s message is the new event. Waiting supplies the ongoing background. 待っていると directly gives that background.",
    "rationales": {
      "a": "待つと does not explicitly set up the waiting in progress and suggests a trigger/result relationship instead.",
      "b": "待っていると correctly means “while I was waiting.”",
      "c": "待てば introduces a condition rather than this actual background activity interrupted by a message."
    },
    "studyGuide": {
      "reading": "まっていると",
      "strongerHint": "Waiting had already begun and was still in progress.",
      "clue": "The unexpected message arrives during the waiting.",
      "steps": [
        "The friend’s message is the new event.",
        "Waiting supplies the ongoing background.",
        "待っていると directly gives that background."
      ],
      "trap": "A single cancellation message is a past event encountered while waiting, not a general consequence of choosing to wait.",
      "reviewHref": "#gh-chance",
      "sentence": "店で友だちを（　）、携帯電話に「今日は行けない」という連絡が来た。",
      "choiceTexts": {
        "a": "待つと",
        "b": "待っていると",
        "c": "待てば"
      }
    }
  },
  {
    "id": "gh-book-2-03",
    "hint": "Who listens, and who then nods?",
    "translation": "After hearing what we had to say, the department head gave a big nod.",
    "correctExplanation": "Identify 部長 as the continuing subject. Read うなずいた as the following past action. 聞くと connects those actions in the immediate narrative pattern.",
    "rationales": {
      "a": "聞くと fits the same-subject sequence of hearing and then nodding.",
      "b": "聞いていたら frames listening in progress, changing the intended sequence into a background for something happening.",
      "c": "聞いていると likewise emphasizes “while listening,” rather than the book’s immediate following action."
    },
    "studyGuide": {
      "reading": "きくと",
      "strongerHint": "部長 is the actor in both clauses, and the second action is a completed response.",
      "clue": "The same person hears the explanation and then nods.",
      "steps": [
        "Identify 部長 as the continuing subject.",
        "Read うなずいた as the following past action.",
        "聞くと connects those actions in the immediate narrative pattern."
      ],
      "trap": "Listening while nodding is possible in other contexts. The book targets the sequence “heard us, then nodded,” rather than an event during ongoing listening.",
      "reviewHref": "#gh-sequence",
      "sentence": "部長はわたしたちの話を（　）、大きくうなずいた。",
      "choiceTexts": {
        "a": "聞くと",
        "b": "聞いていたら",
        "c": "聞いていると"
      }
    }
  },
  {
    "id": "gh-book-2-04",
    "hint": "Which person carries out both entering and sitting down?",
    "translation": "The woman entered the shop and immediately sat down near the window.",
    "correctExplanation": "その女性 is the subject of both actions. 座った reports a completed action after entering. 入ると supplies the book’s immediate narrative sequence.",
    "rationales": {
      "a": "入っていたら frames an already-entered or ongoing situation, rather than the transition from entering to sitting.",
      "b": "入れば gives a condition and does not fit this simple one-time action sequence.",
      "c": "入ると correctly joins the woman’s immediate successive actions."
    },
    "studyGuide": {
      "reading": "はいると",
      "strongerHint": "The sentence follows the woman’s actions inside the shop.",
      "clue": "One actor enters and then takes a seat.",
      "steps": [
        "その女性 is the subject of both actions.",
        "座った reports a completed action after entering.",
        "入ると supplies the book’s immediate narrative sequence."
      ],
      "trap": "The past ending rules out reading this as advice about what to do if she enters. Do not choose ば merely because English might use “when.”",
      "reviewHref": "#gh-sequence",
      "sentence": "その女性は店に（　）、窓の近くの席に座った。",
      "choiceTexts": {
        "a": "入っていたら",
        "b": "入れば",
        "c": "入ると"
      }
    }
  },
  {
    "id": "gh-book-2-05",
    "hint": "Does the sentence follow your brother through a quick chain of past actions?",
    "translation": "My younger brother got up in the morning and went off somewhere without even washing his face.",
    "correctExplanation": "The brother remains the subject throughout. 出かけていった reports his departure as a completed event. 起きると fits the quick same-person sequence targeted here.",
    "rationales": {
      "a": "起きたら is broader “when/after getting up”; it is not the book’s intended immediate narrative pattern in this item.",
      "b": "起きれば gives a conditional relation, not the particular past sequence being narrated.",
      "c": "起きると correctly carries the account from getting up straight to going out."
    },
    "studyGuide": {
      "reading": "おきると",
      "strongerHint": "顔も洗わないで emphasizes that he went out without even washing his face.",
      "clue": "The brother gets up and goes out with no normal preparation in between.",
      "steps": [
        "The brother remains the subject throughout.",
        "出かけていった reports his departure as a completed event.",
        "起きると fits the quick same-person sequence targeted here."
      ],
      "trap": "起きたら can occur naturally in other kinds of “when I got up” accounts. In this book item, 起きると is the keyed choice for immediate third-person narration.",
      "reviewHref": "#gh-sequence",
      "sentence": "弟は朝（　）、顔も洗わないでどこかに出かけていった。",
      "choiceTexts": {
        "a": "起きたら",
        "b": "起きれば",
        "c": "起きると"
      }
    }
  },
  {
    "id": "gh-book-2-06",
    "hint": "Is the second clause a discovery, or another action the speaker performs?",
    "translation": "I heard a strange noise, so I opened the window and looked outside.",
    "correctExplanation": "The noise supplies the reason for investigating. Opening the window and looking outside are actions by the speaker. 開けて neutrally connects them in the order performed.",
    "rationales": {
      "a": "開けたら would invite a “when I opened it, I found / something happened” reading; this sentence instead chains the speaker’s investigation actions.",
      "b": "開ければ makes opening a condition, which does not fit the plain past action sequence.",
      "c": "開けて correctly connects opening the window and looking out."
    },
    "studyGuide": {
      "reading": "あけて",
      "strongerHint": "外を見た means the speaker looked outside. It does not state what was found there.",
      "clue": "The speaker links two deliberate actions taken to investigate the sound.",
      "steps": [
        "The noise supplies the reason for investigating.",
        "Opening the window and looking outside are actions by the speaker.",
        "開けて neutrally connects them in the order performed."
      ],
      "trap": "Do not choose たら whenever you see a past verb. Compare “opened and looked” with “opened and found someone there.”",
      "reviewHref": "#gh-sequence",
      "sentence": "変な音がしたので、窓を（　）外を見た。",
      "choiceTexts": {
        "a": "開けたら",
        "b": "開ければ",
        "c": "開けて"
      }
    }
  },
  {
    "id": "gh-book-2-07",
    "hint": "What is already happening when the speaker reaches home?",
    "translation": "When I got home, my friend was waiting in front of the door.",
    "correctExplanation": "The speaker returns home. The friend’s waiting has already begun. 帰ると introduces that discovered scene.",
    "rationales": {
      "a": "帰ると correctly introduces the discovery on arrival.",
      "b": "帰るなら would mean “if going home is the case,” a premise rather than a past discovery.",
      "c": "帰って simply links clauses; it does not express the intended arrival-and-discovery relationship as と does."
    },
    "studyGuide": {
      "reading": "かえると",
      "strongerHint": "待っていた describes the friend’s ongoing waiting at the door.",
      "clue": "Returning home reveals another person already waiting there.",
      "steps": [
        "The speaker returns home.",
        "The friend’s waiting has already begun.",
        "帰ると introduces that discovered scene."
      ],
      "trap": "Identify the subject change: the speaker returns, but the friend waits. This is not the speaker doing two actions in succession.",
      "reviewHref": "#gh-notice",
      "sentence": "家に（　）、友だちがドアの前で待っていた。",
      "choiceTexts": {
        "a": "帰ると",
        "b": "帰るなら",
        "c": "帰って"
      }
    }
  },
  {
    "id": "gh-book-2-08",
    "hint": "Which two things are missing, making travel impossible?",
    "translation": "Right now I have neither free time nor money. A trip is out of the question.",
    "correctExplanation": "お金もない supplies the second negative fact. The first half needs the parallel “no free time either.” ひまもなければ completes the も…なければ…もない pairing.",
    "rationales": {
      "a": "忙しければ means “if busy” and lacks the matching first も for the intended pair.",
      "b": "ひまもなければ correctly pairs lack of free time with lack of money.",
      "c": "時間もあれば says time is available, contrary to the two shortages intended to explain why travel is impossible."
    },
    "studyGuide": {
      "reading": "ひまもなければ",
      "strongerHint": "Look at お金もない and the conclusion 旅行は無理だ.",
      "clue": "Two shortages are being listed.",
      "steps": [
        "お金もない supplies the second negative fact.",
        "The first half needs the parallel “no free time either.”",
        "ひまもなければ completes the も…なければ…もない pairing."
      ],
      "trap": "This ば means “and also” within paired facts, not “if.” Keep both negatives and both も markers.",
      "reviewHref": "#gh-both",
      "sentence": "今は（　）お金もない。旅行は無理だ。",
      "choiceTexts": {
        "a": "忙しければ",
        "b": "ひまもなければ",
        "c": "時間もあれば"
      }
    }
  },
  {
    "id": "gh-book-onepoint-01",
    "hint": "What kind of ending is 行きたい: a result, or the speaker’s wish?",
    "translation": "If I can borrow a car, I want to go for a drive.",
    "correctExplanation": "行きたい directly states a wish. 貸してもらえる describes being able to have someone lend the car. Its ば-form, 貸してもらえれば, can introduce that wish.",
    "rationales": {
      "a": "貸してもらえると uses conditional と before a direct wish, which is unsuitable in this comparison.",
      "b": "貸してもらえれば correctly uses state/potential-condition ば before 行きたい."
    },
    "studyGuide": {
      "reading": "かしてもらえれば",
      "strongerHint": "貸してもらえる is potential, so it describes whether borrowing the car is possible.",
      "clue": "A state of possibility is the condition for a wish.",
      "steps": [
        "行きたい directly states a wish.",
        "貸してもらえる describes being able to have someone lend the car.",
        "Its ば-form, 貸してもらえれば, can introduce that wish."
      ],
      "trap": "The restriction on と still applies even when its first clause is potential. The possibility allows ば here; it does not make と interchangeable.",
      "reviewHref": "#gh-onepoint",
      "sentence": "車を（　）、ドライブに行きたい。",
      "choiceTexts": {
        "a": "貸してもらえると",
        "b": "貸してもらえれば"
      }
    }
  },
  {
    "id": "gh-book-onepoint-02",
    "hint": "Check each ending separately. Does たら allow only a result, or also an invitation?",
    "translation": "If work finishes early, we can go for a drink / would you like to go for a drink?",
    "correctExplanation": "終わったら sets the condition of work finishing early. 行けるね comments on the possibility; 行きませんか makes an invitation. Both endings fit. Select both answers to complete this book item.",
    "rationales": {
      "a": "飲みに行けるね is correct: “we can go for a drink, can’t we?” states a possibility.",
      "b": "飲みに行きませんか is also correct: “would you like to go for a drink?” is an invitation permitted after たら."
    },
    "studyGuide": {
      "reading": "のみにいけるね ／ のみにいきませんか",
      "strongerHint": "One option states a possibility; the other invites someone. Consider whether either is excluded after たら.",
      "clue": "たら accommodates both a potential result and an invitation.",
      "steps": [
        "終わったら sets the condition of work finishing early.",
        "行けるね comments on the possibility; 行きませんか makes an invitation.",
        "Both endings fit. Select both answers to complete this book item."
      ],
      "trap": "Do not stop after finding one valid answer. The book explicitly allows both when both are appropriate; this review shows their different meanings.",
      "reviewHref": "#gh-onepoint",
      "sentence": "早く仕事が終わったら、（　）。",
      "choiceTexts": {
        "a": "飲みに行けるね",
        "b": "飲みに行きませんか"
      },
      "answerTranslations": {
        "a": "If work finishes early, we can go for a drink, can’t we?",
        "b": "If work finishes early, would you like to go for a drink?"
      }
    }
  },
  {
    "id": "gh-book-onepoint-03",
    "hint": "Does booking early lead to an opportunity, or state your next deliberate action?",
    "translation": "If you book early, you can get a good seat.",
    "correctExplanation": "予約する is the action in the ば condition. The book asks for a resulting possibility after that action. いい席が取れる expresses being able to get a good seat.",
    "rationales": {
      "a": "いい席を取る gives the actor’s next deliberate action, which does not fit the action-condition comparison here.",
      "b": "いい席が取れる correctly presents the potential result of booking early."
    },
    "studyGuide": {
      "reading": "いいせきがとれる",
      "strongerHint": "The contrast is 取る versus potential 取れる.",
      "clue": "Early booking makes a good seat obtainable.",
      "steps": [
        "予約する is the action in the ば condition.",
        "The book asks for a resulting possibility after that action.",
        "いい席が取れる expresses being able to get a good seat."
      ],
      "trap": "The particle matters together with the verb: 席を取る is to obtain/reserve a seat; 席が取れる is to be able to obtain one.",
      "reviewHref": "#gh-onepoint",
      "sentence": "早く予約すれば、（　）。",
      "choiceTexts": {
        "a": "いい席を取る",
        "b": "いい席が取れる"
      }
    }
  },
  {
    "id": "gh-book-onepoint-04",
    "hint": "Is 暑い an action or an adjective describing a state?",
    "translation": "If the room is hot, please open the window / I’ll open the window.",
    "correctExplanation": "暑い describes the room’s state. Change い to ければ: 暑ければ. Both the request and the offer fit this state condition; select both.",
    "rationales": {
      "a": "窓を開けてください is correct: a request can follow this adjective condition.",
      "b": "窓を開けますよ is also correct: in context it offers to open the window if the room is hot."
    },
    "studyGuide": {
      "reading": "まどをあけてください ／ まどをあけますよ",
      "strongerHint": "Evaluate a request and an offer separately after a state condition with ば.",
      "clue": "暑ければ is an adjective condition, so it can support both a request and an offer.",
      "steps": [
        "暑い describes the room’s state.",
        "Change い to ければ: 暑ければ.",
        "Both the request and the offer fit this state condition; select both."
      ],
      "trap": "The book’s action-condition restriction on ば is not a ban after every ば. Here the first predicate is an adjective.",
      "reviewHref": "#gh-onepoint",
      "sentence": "部屋が暑ければ、（　）。",
      "choiceTexts": {
        "a": "窓を開けてください",
        "b": "窓を開けますよ"
      },
      "answerTranslations": {
        "a": "If the room is hot, please open the window.",
        "b": "If the room is hot, I’ll open the window."
      }
    }
  },
  {
    "id": "gh-book-onepoint-05",
    "hint": "What does 時間がない describe: an action, or a lack of available time?",
    "translation": "If I don’t have time, I intend to give up on going shopping.",
    "correctExplanation": "時間がない describes lack of time. State-condition ば can precede the intention あきらめるつもりだ. たら can also precede it, so select both なければ and なかったら.",
    "rationales": {
      "a": "なければ is correct: ない becomes なければ, giving a state condition before the intention.",
      "b": "なかったら is also correct: ない becomes なかった + ら, and たら permits the intended ending."
    },
    "studyGuide": {
      "reading": "なければ ／ なかったら",
      "strongerHint": "つもりだ is an intention. Test whether both conditional forms can introduce it after this state.",
      "clue": "The condition is a state: having no time.",
      "steps": [
        "時間がない describes lack of time.",
        "State-condition ば can precede the intention あきらめるつもりだ.",
        "たら can also precede it, so select both なければ and なかったら."
      ],
      "trap": "The た inside なかったら does not make the sentence a past report by itself. Here the entire sentence describes a future conditional plan.",
      "reviewHref": "#gh-onepoint",
      "sentence": "時間が（　）、買い物はあきらめるつもりだ。",
      "choiceTexts": {
        "a": "なければ",
        "b": "なかったら"
      },
      "answerTranslations": {
        "a": "If I don’t have time, I intend to give up on going shopping.",
        "b": "If I don’t have time, I intend to give up on going shopping."
      }
    }
  },
  {
    "id": "gh-book-onepoint-06",
    "hint": "What will the speaker do after making the scarf?",
    "translation": "When I have made the scarf, I intend to give it to him.",
    "correctExplanation": "作る describes the action of making the scarf. あげようと思う directly states the speaker’s intention. 作ったら permits that planned next action after completion.",
    "rationales": {
      "a": "作れば uses an action condition before the same speaker’s intended next action, which the book rejects in this comparison.",
      "b": "作ったら correctly introduces the planned gift after the scarf is made."
    },
    "studyGuide": {
      "reading": "つくったら",
      "strongerHint": "あげようと思う states an intention, and 作る is the speaker’s deliberate action.",
      "clue": "The speaker plans a second action after completing the first.",
      "steps": [
        "作る describes the action of making the scarf.",
        "あげようと思う directly states the speaker’s intention.",
        "作ったら permits that planned next action after completion."
      ],
      "trap": "作る → 作った → 作ったら: the small っ belongs to the た-form. Do not select ば solely because both forms can translate as “if.”",
      "reviewHref": "#gh-onepoint",
      "sentence": "マフラーを（　）、彼にあげようと思う。",
      "choiceTexts": {
        "a": "作れば",
        "b": "作ったら"
      }
    }
  },
  {
    "id": "gh-book-onepoint-07",
    "hint": "Compare the action of looking something up with the state of knowing it.",
    "translation": "If I know the shop’s phone number, I’ll try calling it.",
    "correctExplanation": "調べる is the deliberate action of looking up information. わかる gives the state of knowing the number here. わかれば can precede the speaker’s intended action in this state-condition comparison.",
    "rationales": {
      "a": "電話番号を調べれば is an action condition before the same speaker’s planned next action; it does not fit the book’s comparison.",
      "b": "電話番号がわかれば correctly gives the state of knowing the number before the intended attempt."
    },
    "studyGuide": {
      "reading": "でんわばんごうがわかれば",
      "strongerHint": "電話してみます is the speaker’s intended attempt to call.",
      "clue": "Knowing the number is the condition that enables the intended call.",
      "steps": [
        "調べる is the deliberate action of looking up information.",
        "わかる gives the state of knowing the number here.",
        "わかれば can precede the speaker’s intended action in this state-condition comparison."
      ],
      "trap": "Two verbs can lead to similar practical outcomes but take different roles in this exercise. To mean “after I look it up, I’ll call,” use 調べたら with that action sequence.",
      "reviewHref": "#gh-onepoint",
      "sentence": "店の（　）、電話してみます。",
      "choiceTexts": {
        "a": "電話番号を調べれば",
        "b": "電話番号がわかれば"
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
