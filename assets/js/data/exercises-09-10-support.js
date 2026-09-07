/* Authored study support for the Lessons 9–10 review on Lesson 10.
 * Load after part1-quiz-data.js and before quiz.js. The generated source remains intact.
 * Only these 18 records are enriched; original answer keys and question types are retained.
 */
(function (root) {
  "use strict";
  if (typeof document !== "undefined" && document.body?.dataset.page !== "lesson-10") return;
  const support = [
  {
    "id": "part1-book-09-10-q01",
    "hint": "The father took the speaker to a place. Who had wanted to go there?",
    "translation": "My father took me to a place I had wanted to visit for a long time. It was a lot of fun.",
    "correctExplanation": "行きたい expresses wanting to go oneself. 行きたかった places that desire before the visit. The clause modifies 所: the place the speaker had wanted to visit.",
    "rationales": {
      "a": "行きたかった matches the speaker’s own wish to visit.",
      "b": "行ってほしかった would want someone else to go, not express this speaker’s desired visit.",
      "c": "行ってもらいたかった would want another person to go as an action received from them, which misses the intended roles."
    },
    "studyGuide": {
      "reading": "いきたかった",
      "strongerHint": "Use the speaker’s own past desire, not a wish that another person go.",
      "clue": "父が連れていってくれた shows that the speaker received the benefit of being taken there.",
      "steps": [
        "行きたい expresses wanting to go oneself.",
        "行きたかった places that desire before the visit.",
        "The clause modifies 所: the place the speaker had wanted to visit."
      ],
      "trap": "たい and てほしい do not assign the same actor. Identify who wants to do the underlying action before choosing.",
      "reviewHref": "lesson-09-wishes.html#l9-te-moraitai"
    }
  },
  {
    "id": "part1-book-09-10-q02",
    "hint": "The speaker objects to littering but does not know who does it. What action should stop?",
    "translation": "I do not know who it is, but I wish they would not throw rubbish onto the road.",
    "correctExplanation": "捨てる becomes 捨てない. 捨てないで asks for that action not to occur. もらいたい expresses the speaker’s wish for others to refrain.",
    "rationales": {
      "a": "捨てられて adds a passive or potential form and does not request that littering stop.",
      "b": "捨てないで correctly names the action the speaker wants avoided.",
      "c": "捨てられないで introduces inability or a passive negative, rather than the straightforward request not to litter."
    },
    "studyGuide": {
      "reading": "すてないで",
      "strongerHint": "Use the ordinary negative-request pattern: verb ない-form + で + もらいたい.",
      "clue": "The unwanted action is 捨てる, performed by an unspecified person.",
      "steps": [
        "捨てる becomes 捨てない.",
        "捨てないで asks for that action not to occur.",
        "もらいたい expresses the speaker’s wish for others to refrain."
      ],
      "trap": "A negative request concerns what someone should not do, not whether they can do it. Do not add passive or potential られる without a reason.",
      "reviewHref": "lesson-09-wishes.html#l9-te-moraitai"
    }
  },
  {
    "id": "part1-book-09-10-q03",
    "hint": "The other person has graduation photographs. What would allow the speaker to see them?",
    "translation": "You took photos at the graduation ceremony, right? I would really like you to show them to me.",
    "correctExplanation": "見せる means show. 見せて is its て-form. 見せてほしい asks the other person to show the photographs.",
    "rationales": {
      "a": "見て asks the listener to look at the photos, rather than show them to the speaker.",
      "b": "見せて gives the needed action of showing the photographs.",
      "c": "見られて adds a passive or potential form and does not express the straightforward request to show them."
    },
    "studyGuide": {
      "reading": "みせて",
      "strongerHint": "The speaker wants the owner to show the photographs: 見せる, not 見る.",
      "clue": "The photo owner performs the showing; the speaker wants to see the photos.",
      "steps": [
        "見せる means show.",
        "見せて is its て-form.",
        "見せてほしい asks the other person to show the photographs."
      ],
      "trap": "見せる is the verb “show.” Do not confuse it with 見る (“see”) or the regular causative 見させる (“let/make someone see”).",
      "reviewHref": "lesson-09-wishes.html#l9-te-moraitai"
    }
  },
  {
    "id": "part1-book-09-10-q04",
    "hint": "The speaker has stomach pain. Who needs to take time off, and who is being asked to allow it?",
    "translation": "I have a stomachache today, so I would like permission to take the day off from my part-time job.",
    "correctExplanation": "休む is Group 1. 休む → 休ませる → 休ませて. 休ませていただきたい respectfully requests the opportunity to take time off.",
    "rationales": {
      "a": "休んで would ask the other person to take time off, reversing the intended roles.",
      "b": "休まれて is not the causative form needed to request permission for the speaker’s absence.",
      "c": "休ませて expresses wanting to be allowed to take time off."
    },
    "studyGuide": {
      "reading": "やすませて",
      "strongerHint": "The speaker wants permission to be absent: causative て-form + いただきたい.",
      "clue": "The speaker is the person who would rest; the listener can allow the absence.",
      "steps": [
        "休む is Group 1.",
        "休む → 休ませる → 休ませて.",
        "休ませていただきたい respectfully requests the opportunity to take time off."
      ],
      "trap": "休んでいただきたい asks the other person to rest. The causative changes the roles; it is not merely extra politeness.",
      "reviewHref": "lesson-09-wishes.html#l9-sasete-moraitai"
    }
  },
  {
    "id": "part1-book-09-10-q05",
    "hint": "The speaker did not understand. Should the listener explain, or allow the speaker to teach?",
    "translation": "I did not understand the explanation very well. I would like you to explain it again.",
    "correctExplanation": "教える means teach or explain something to someone. 教えて is the て-form. 教えてほしい makes the listener’s explaining the desired action.",
    "rationales": {
      "a": "教えて asks the listener to explain again.",
      "b": "教えさせて would ask to be allowed to teach, which does not address the speaker’s lack of understanding.",
      "c": "教わって would want the listener to receive instruction, rather than give the speaker another explanation."
    },
    "studyGuide": {
      "reading": "おしえて",
      "strongerHint": "Choose the action that gives the speaker another explanation.",
      "clue": "もう一度 asks the listener to provide the explanation again.",
      "steps": [
        "教える means teach or explain something to someone.",
        "教えて is the て-form.",
        "教えてほしい makes the listener’s explaining the desired action."
      ],
      "trap": "教える gives instruction; 教わる receives instruction. Track the direction of teaching instead of matching only the shared kanji.",
      "reviewHref": "lesson-09-wishes.html#l9-te-moraitai"
    }
  },
  {
    "id": "part1-book-09-10-q06",
    "hint": "The shop employee is addressing a customer about glass items. What restriction is the textbook’s caution intended to convey?",
    "translation": "Excuse me, could you please refrain from touching the glass items in the shop?",
    "correctExplanation": "触る is Group 1: 触る → 触らない. 触らないで expresses the action to avoid. いただきたいのですが gives the restriction a respectful request frame.",
    "rationales": {
      "a": "触って would invite the customer to touch the items, reversing the intended restriction.",
      "b": "触らせて would ask the customer to let the speaker touch them, changing both the action and the roles.",
      "c": "触らないで supplies the requested nonaction in the shop’s caution."
    },
    "studyGuide": {
      "reading": "さわらないで",
      "strongerHint": "Form the respectful request “Please refrain from touching” with a negative verb + でいただきたい.",
      "clue": "The intended shop-floor caution asks the customer not to touch the glass products.",
      "steps": [
        "触る is Group 1: 触る → 触らない.",
        "触らないで expresses the action to avoid.",
        "いただきたいのですが gives the restriction a respectful request frame."
      ],
      "trap": "The setting supplies the intended caution. Positive 触っていただきたい is grammatically possible when inviting someone to touch something, but that is a different message—not this textbook answer.",
      "reviewHref": "lesson-09-wishes.html#l9-te-moraitai"
    }
  },
  {
    "id": "part1-book-09-10-q07",
    "hint": "The trip has not started yet. Is the speaker hoping for favorable weather or responding to weather already established as good?",
    "translation": "You are going traveling from next week? I hope the weather is good.",
    "correctExplanation": "天気がいい is the hoped-for situation. と connects it to the evaluative いい. 天気がいいといいですね is natural even though いい appears twice.",
    "rationales": {
      "a": "天気がいいと completes the standard hope for favorable weather.",
      "b": "天気がいいなら responds to good weather as a premise rather than directly expressing this future hope.",
      "c": "天気がいいのは makes good weather a topic, not the conditional basis of the intended wish."
    },
    "studyGuide": {
      "reading": "てんきがいいと",
      "strongerHint": "Use the hope pattern plain clause + といい.",
      "clue": "来週から places the trip ahead, and いいですね expresses a favorable wish.",
      "steps": [
        "天気がいい is the hoped-for situation.",
        "と connects it to the evaluative いい.",
        "天気がいいといいですね is natural even though いい appears twice."
      ],
      "trap": "The first いい describes the weather; the second belongs to “it would be good if…”. The repetition has two separate grammatical jobs.",
      "reviewHref": "lesson-09-wishes.html#l9-to-ba-tara-ii"
    }
  },
  {
    "id": "part1-book-09-10-q08",
    "hint": "Congratulations suggests the result is already known. Is this a hope or happiness about a success?",
    "translation": "Congratulations! It is wonderful that you passed.",
    "correctExplanation": "合格できる means manage to pass. 合格できて connects that success to よかった. The sentence expresses pleasure about the result, not regret or an uncertain future wish.",
    "rationales": {
      "a": "合格できると does not fit this retrospective congratulation; といい would normally express a future hope.",
      "b": "合格できて welcomes the achieved result.",
      "c": "合格できればよかった would suggest that passing would have been good, conflicting with the congratulatory context."
    },
    "studyGuide": {
      "reading": "ごうかくできて",
      "strongerHint": "Use ～てよかった to welcome what actually happened.",
      "clue": "おめでとうございます frames passing as an achieved success.",
      "steps": [
        "合格できる means manage to pass.",
        "合格できて connects that success to よかった.",
        "The sentence expresses pleasure about the result, not regret or an uncertain future wish."
      ],
      "trap": "～てよかった celebrates an actual outcome. ～ばよかった can instead express regret about an unrealized alternative; do not choose solely because both end よかった.",
      "reviewHref": "lesson-09-wishes.html#l9-to-ba-tara-ii"
    }
  },
  {
    "id": "part1-book-09-10-q09",
    "hint": "The teacher is ordering the class to stop talking. Which verb group does やめる belong to?",
    "translation": "Although the teacher is saying “Stop talking,” everyone is still chatting.",
    "correctExplanation": "やめる is Group 2. Drop る and add ろ: やめろ. と言っているのに contrasts the command with the continuing chatter.",
    "rationales": {
      "a": "やめ is a stem, not the standard full imperative targeted here.",
      "b": "やめれ incorrectly applies the Group 1 imperative change to やめる.",
      "c": "やめろ is the standard Group 2 imperative."
    },
    "studyGuide": {
      "reading": "やめろ",
      "strongerHint": "Group 2 imperatives replace る with ろ.",
      "clue": "The quoted instruction requires the imperative of やめる.",
      "steps": [
        "やめる is Group 2.",
        "Drop る and add ろ: やめろ.",
        "と言っているのに contrasts the command with the continuing chatter."
      ],
      "trap": "A verb ending in る is not automatically Group 1. Standard やめる forms やめろ, not やめれ.",
      "reviewHref": "#l10-meirei-kinshi"
    }
  },
  {
    "id": "part1-book-09-10-q10",
    "hint": "The speaker objects to a demand for immediate payment. Which option actually commands payment?",
    "translation": "It puts me in a difficult position to be told to pay right now. I will definitely pay next week, so please wait.",
    "correctExplanation": "払う → 払え forms the imperative. 払えと言われても means even if I am told “Pay.” 来週必ず払います offers a later payment in response.",
    "rationales": {
      "a": "払う states the action in dictionary form rather than quoting the targeted imperative.",
      "b": "払え directly expresses the payment demand.",
      "c": "払える states ability to pay, not an order to pay."
    },
    "studyGuide": {
      "reading": "はらえ",
      "strongerHint": "払う is Group 1: change the final う to え.",
      "clue": "今すぐ and the request to wait identify an immediate payment demand being reported.",
      "steps": [
        "払う → 払え forms the imperative.",
        "払えと言われても means even if I am told “Pay.”",
        "来週必ず払います offers a later payment in response."
      ],
      "trap": "払え is a command; 払える means can pay. The extra る changes the function.",
      "reviewHref": "#l10-meirei-kinshi"
    }
  },
  {
    "id": "part1-book-09-10-q11",
    "hint": "A asks B not to laugh. Which quoted instruction keeps that negative direction?",
    "translation": "A: Please do not laugh so much. B: Even if you tell me not to laugh, it is so funny that I cannot help laughing.",
    "correctExplanation": "笑う is dictionary form. 笑うな means “Do not laugh.” 笑ってしまいます describes laughter that occurs despite the request.",
    "rationales": {
      "a": "笑って would ask for laughter rather than prohibit it.",
      "b": "笑え commands laughter, reversing A’s request.",
      "c": "笑うな keeps the negative instruction that B is responding to."
    },
    "studyGuide": {
      "reading": "わらうな",
      "strongerHint": "Use dictionary form + prohibitive な.",
      "clue": "B is reporting A’s prohibition, not being encouraged to laugh.",
      "steps": [
        "笑う is dictionary form.",
        "笑うな means “Do not laugh.”",
        "笑ってしまいます describes laughter that occurs despite the request."
      ],
      "trap": "Quoted wording may become a compact prohibition without changing the intended action. Do not replace “do not laugh” with the positive imperative “laugh.”",
      "reviewHref": "#l10-meirei-kinshi"
    }
  },
  {
    "id": "part1-book-09-10-q12",
    "hint": "The notice tells people what to do when leaving. Which form supplies the action before instructional こと?",
    "translation": "[Notice] Turn off the lights when you leave the room.",
    "correctExplanation": "電気を消す means turn off the lights. 消すこと gives the instruction. 部屋を出るとき identifies when it applies.",
    "rationales": {
      "a": "消す gives the appropriate action in dictionary form.",
      "b": "消している introduces an ongoing action or state instead of the simple switch-off action required here.",
      "c": "消した is past form and does not fit this basic written instruction."
    },
    "studyGuide": {
      "reading": "けす",
      "strongerHint": "Use dictionary form + こと for the required action.",
      "clue": "張り紙 and sentence-final こと frame a written instruction.",
      "steps": [
        "電気を消す means turn off the lights.",
        "消すこと gives the instruction.",
        "部屋を出るとき identifies when it applies."
      ],
      "trap": "The notice prescribes an action; it does not narrate a past event. Keep the dictionary form before instructional こと.",
      "reviewHref": "#l10-koto"
    }
  },
  {
    "id": "part1-book-09-10-q13",
    "hint": "A lawn sign tells readers to stay off it. Is it prohibiting entry or describing inability to enter?",
    "translation": "[Sign] Keep off the grass.",
    "correctExplanation": "入る → 入らない gives do not enter. 入らないこと makes it an impersonal instruction. The sentence ends at こと in the book’s notice pattern.",
    "rationales": {
      "a": "入らないこと correctly states the posted prohibition.",
      "b": "入れないこと does not give the ordinary negative of entering required for this sign; it suggests inability or a different verb reading.",
      "c": "入らないことだ resembles advice or an explanatory assertion rather than the book’s basic sign instruction."
    },
    "studyGuide": {
      "reading": "はいらないこと",
      "strongerHint": "Use the negative of 入る, followed by bare instructional こと.",
      "clue": "The posted rule prohibits the reader’s action of entering the lawn.",
      "steps": [
        "入る → 入らない gives do not enter.",
        "入らないこと makes it an impersonal instruction.",
        "The sentence ends at こと in the book’s notice pattern."
      ],
      "trap": "入らない is nonentry; 入れない can mean cannot enter. Adding だ creates another expression, rather than the bare rule ending targeted here.",
      "reviewHref": "#l10-koto"
    }
  },
  {
    "id": "part1-book-09-10-q14",
    "hint": "べき attaches to the verb’s dictionary form. What is the full dictionary form of “come”?",
    "translation": "Morita, you are always late. New employees should come to the office earlier.",
    "correctExplanation": "The dictionary form is 来る（くる）. 来る + べき gives 来るべき. だよ supplies the final assertion after the selected phrase.",
    "rationales": {
      "a": "来（く）べき omits る and is not the standard dictionary-form attachment here.",
      "b": "来るべき retains the full verb and is the correct modern form.",
      "c": "来（き）べき uses a stem rather than dictionary form; it is not the modern form targeted here."
    },
    "studyGuide": {
      "reading": "くるべき",
      "strongerHint": "Keep 来る, read くる, before べき.",
      "clue": "The speaker judges earlier arrival to be appropriate behavior.",
      "steps": [
        "The dictionary form is 来る（くる）.",
        "来る + べき gives 来るべき.",
        "だよ supplies the final assertion after the selected phrase."
      ],
      "trap": "The verb する has a special shortened すべき option. Do not extend that shortening to 来る in the modern N3 construction.",
      "reviewHref": "#l10-beki"
    }
  },
  {
    "id": "part1-book-09-10-q15",
    "hint": "The friend would also be troubled. Does the speaker recommend or discourage borrowing this much?",
    "translation": "You should not borrow so much money from your friend. It would probably put your friend in difficulty too.",
    "correctExplanation": "借りる is dictionary form. べきではない means should not do it. The final sentence supports a negative recommendation.",
    "rationales": {
      "a": "借りるべきではない discourages the action and matches the reason.",
      "b": "借りるべきだ recommends borrowing, contrary to the following concern.",
      "c": "借りないべきだ is not the standard negative pattern tested here."
    },
    "studyGuide": {
      "reading": "かりるべきではない",
      "strongerHint": "For “should not,” keep the verb affirmative and negate after べき.",
      "clue": "友だちも困るだろう explains why the borrowing is judged inappropriate.",
      "steps": [
        "借りる is dictionary form.",
        "べきではない means should not do it.",
        "The final sentence supports a negative recommendation."
      ],
      "trap": "For the basic N3 prohibition of an action, use 借りるべきではない. Do not mechanically attach べき to 借りない.",
      "reviewHref": "#l10-beki"
    }
  },
  {
    "id": "part1-book-09-10-q16",
    "hint": "The sentence reports what the law permits. Which option states a restriction rather than personal advice?",
    "translation": "Under Japanese law, people who have not reached age 20 are not allowed to drink alcohol.",
    "correctExplanation": "飲む → 飲める → 飲めません forms a polite potential negative. In this context it describes lack of permission, not physical inability. 二十歳になっていない identifies the under-20 group in the statement.",
    "rationales": {
      "a": "飲めません directly states that drinking is not permitted under the specified rule.",
      "b": "飲むべきではありません gives a normative judgment, which is less direct than the legal restriction asked for here. べき can discuss laws in other contexts.",
      "c": "飲むことではありません does not form the required legal prohibition; it is not the instructional 飲まないこと either."
    },
    "studyGuide": {
      "reading": "のめません",
      "strongerHint": "A potential negative can mean “not allowed” when a rule sets the limit.",
      "clue": "日本の法律では explicitly frames the sentence as a legal restriction.",
      "steps": [
        "飲む → 飲める → 飲めません forms a polite potential negative.",
        "In this context it describes lack of permission, not physical inability.",
        "二十歳になっていない identifies the under-20 group in the statement."
      ],
      "trap": "べきではない gives a judgment about what should not be done; this question directly states a restriction. The lesson’s explanation references include the current National Tax Agency source for the age context.",
      "reviewHref": "#l10-beki"
    }
  },
  {
    "id": "part1-book-09-10-q17",
    "hint": "The desk is too dark. What change can the listener actively make?",
    "translation": "Is the desk area not too dark? How about making it a little brighter?",
    "correctExplanation": "明るい becomes 明るく before する. する → したら gives the proposed action. どうですか invites consideration of that adjustment.",
    "rationales": {
      "a": "明るくなったら describes becoming brighter, not the listener making the adjustment.",
      "b": "明るくしたら proposes the relevant deliberate change.",
      "c": "明るかったら means if it were bright, describing a state rather than proposing an action."
    },
    "studyGuide": {
      "reading": "あかるくしたら",
      "strongerHint": "Use 明るくする for making something brighter, followed by たらどうですか.",
      "clue": "The suggestion asks the listener to improve the lighting.",
      "steps": [
        "明るい becomes 明るく before する.",
        "する → したら gives the proposed action.",
        "どうですか invites consideration of that adjustment."
      ],
      "trap": "明るくする is a deliberate adjustment; 明るくなる is a change of state. Advice here needs the action that addresses the problem.",
      "reviewHref": "#l10-tara-doka"
    }
  },
  {
    "id": "part1-book-09-10-q18",
    "hint": "The speaker has something to look up. Who wants to use the computer?",
    "translation": "There is something I would like to look up. May I use this computer?",
    "correctExplanation": "使う → 使って supplies the て-form. てもいいですか asks whether the action is permitted. The intended user of the computer is the speaker.",
    "rationales": {
      "a": "使ったらどうですか suggests that the other person use the computer, reversing the intended direction.",
      "b": "使うのがどうですか is not the standard permission request required by this context.",
      "c": "使ってもいいですか correctly asks to be allowed to use the computer."
    },
    "studyGuide": {
      "reading": "つかってもいいですか",
      "strongerHint": "The speaker needs permission for their own use, not advice directed at the listener.",
      "clue": "調べたいことがある identifies the speaker’s purpose in asking.",
      "steps": [
        "使う → 使って supplies the て-form.",
        "てもいいですか asks whether the action is permitted.",
        "The intended user of the computer is the speaker."
      ],
      "trap": "The object is the same, but the actor changes: 使ったらどうですか recommends use to the listener; 使ってもいいですか asks permission for the speaker.",
      "reviewHref": "#l10-tara-doka"
    }
  }
];
  const byId = new Map(support.map(item => [item.id, item]));
  root.N3QuizData = Object.freeze((root.N3QuizData || []).map(record => {
    const extra = byId.get(record.id);
    return extra ? { ...record, ...extra } : record;
  }));
}(typeof window !== "undefined" ? window : globalThis));
