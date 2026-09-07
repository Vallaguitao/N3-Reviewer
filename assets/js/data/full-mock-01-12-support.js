/* Authored study support for the Lessons 1–12 cumulative mock.
 * Load after part1-quiz-data.js and before quiz.js. The generated source remains intact.
 * Only these 13 records are enriched; original answer keys and question types are retained.
 */
(function (root) {
  "use strict";
  if (typeof document !== "undefined" && document.body?.dataset.page !== "part1-full-mock") return;
  const support = [
  {
    "id": "part1-book-full-q01",
    "hint": "The speaker wants to join the tour. Who would go, and who can allow it?",
    "translation": "Manager, I would like to be allowed to join the upcoming factory tour too. Would that be all right?",
    "correctExplanation": "行く is Group 1: 行く → 行かせる → 行かせて. 行かせていただく presents the speaker as receiving permission to go. たい expresses the speaker’s wish; んですが introduces it gently before asking for approval.",
    "rationales": {
      "1": "行ってほしい wants another person to go, instead of asking permission for the speaker to join.",
      "2": "行っていただきたい respectfully wants another person to go. The recipient viewpoint does not make the speaker the traveler.",
      "3": "行かせたい means wanting to let or make someone go; it does not express receiving permission to go oneself.",
      "4": "行かせていただきたい correctly combines the speaker’s participation with a respectful permission request."
    },
    "studyGuide": {
      "reading": "いかせていただきたい",
      "strongerHint": "Combine the causative て-form with いただきたい to ask respectfully to be allowed to go.",
      "clue": "わたしも identifies the speaker as the additional participant; いいでしょうか asks for approval.",
      "steps": [
        "行く is Group 1: 行く → 行かせる → 行かせて.",
        "行かせていただく presents the speaker as receiving permission to go.",
        "たい expresses the speaker’s wish; んですが introduces it gently before asking for approval."
      ],
      "trap": "Compare Lesson 9’s two roles: 行っていただきたい asks someone else to go; 行かせていただきたい asks to be allowed to go oneself. Extra politeness alone does not explain the difference.",
      "reviewHref": "lesson-09-wishes.html#l9-sasete-moraitai"
    }
  },
  {
    "id": "part1-book-full-q02",
    "hint": "The reason is wanting more Japanese practice. What continuing behavior would help achieve that?",
    "translation": "Because I want to speak plenty of Japanese, I make an effort not to use my own language in class.",
    "correctExplanation": "使う → 使わない names the action to avoid. ようにする means take care or make an effort to do that. している shows that the effort is being maintained.",
    "rationales": {
      "1": "使うとは限らない means the speaker does not necessarily use it. It limits a generalization rather than describing deliberate avoidance.",
      "2": "使わないようにしている gives the ongoing effort that supports the stated learning goal.",
      "3": "使うことではない does not form the intended expression for a maintained effort or a personal rule.",
      "4": "使わないわけではない means it is not that the speaker never uses it. This qualified denial does not express the intended effort to avoid it."
    },
    "studyGuide": {
      "reading": "つかわないようにしている",
      "strongerHint": "Choose a deliberate effort not to use the home language, rather than a qualified denial about using it.",
      "clue": "話したいから gives a purpose for managing classroom behavior.",
      "steps": [
        "使う → 使わない names the action to avoid.",
        "ようにする means take care or make an effort to do that.",
        "している shows that the effort is being maintained."
      ],
      "trap": "Count the meaning of the negatives, not just the number of ない forms. 使わないわけではない allows that the speaker does use the language; it is not a commitment to avoid it.",
      "reviewHref": "lesson-11-intentions.html#l11-you-ni-suru"
    }
  },
  {
    "id": "part1-book-full-q03",
    "hint": "The speaker uses the airport call as evidence. Is this a prediction, an intention, or a judgment about what someone ought to do?",
    "translation": "Since they called from the airport around five, they should be arriving home about now.",
    "correctExplanation": "着く names the event expected to occur soon. はず follows the plain verb: 着くはず. はずだ presents the arrival as the speaker’s reasoned expectation, not a confirmed fact.",
    "rationales": {
      "1": "着くばかりだ can describe only arrival remaining in an appropriate preparation context. It does not express the evidence-based expectation from the call here.",
      "2": "着くつもりだ states an intention, rather than the speaker’s deduction about someone’s travel progress.",
      "3": "着くはずだ correctly expresses a supported expectation.",
      "4": "着くべきだ says the person ought to arrive, turning the prediction into a judgment or obligation."
    },
    "studyGuide": {
      "reading": "はず",
      "strongerHint": "Choose the expression for a reasonable expectation based on known information.",
      "clue": "電話があったのだから supplies evidence; そろそろ points to the expected arrival time.",
      "steps": [
        "着く names the event expected to occur soon.",
        "はず follows the plain verb: 着くはず.",
        "はずだ presents the arrival as the speaker’s reasoned expectation, not a confirmed fact."
      ],
      "trap": "English “should” can mean expectation or advice. はずだ predicts from evidence; べきだ judges what ought to be done. Read the reason before translating the blank.",
      "reviewHref": "lesson-08-negation.html#l8-hazu-wake"
    }
  },
  {
    "id": "part1-book-full-q04",
    "hint": "The library employee is speaking. Is the library borrowing the material or lending it to the visitor?",
    "translation": "[At a library] Ah, that material may not be taken out, so we cannot lend it to you.",
    "correctExplanation": "貸す means lend; 借りる means borrow. The employee describes the library’s action toward the visitor, so use humble お貸しする. お貸しできません expresses being unable to provide that loan under the restriction.",
    "rationales": {
      "1": "お借りできません means cannot borrow, making the speaker’s side the borrower rather than the lender.",
      "2": "お貸しできません correctly describes the library’s inability to lend the material to the visitor.",
      "3": "お借りしません means will not borrow. Both the transfer direction and the intended inability are wrong.",
      "4": "お貸しになりません respectfully describes someone’s not lending. It does not humbly state the library’s inability to lend to this visitor."
    },
    "studyGuide": {
      "reading": "おかしできません",
      "strongerHint": "Use 貸す in the humble potential pattern: お + ます-stem + できません.",
      "clue": "持ち出し禁止 explains why the library cannot lend this material for use outside.",
      "steps": [
        "貸す means lend; 借りる means borrow.",
        "The employee describes the library’s action toward the visitor, so use humble お貸しする.",
        "お貸しできません expresses being unable to provide that loan under the restriction."
      ],
      "trap": "Check direction before keigo: the library lends and the visitor borrows. Then distinguish “cannot lend” from “does not lend” and from a respectful verb honoring the lender.",
      "reviewHref": "lesson-12-keigo.html#l12-kenjougo-1"
    }
  },
  {
    "id": "part1-book-full-q05",
    "hint": "B agrees and offers the dictionary. What did A need permission to do?",
    "translation": "A: Excuse me, may I borrow that dictionary for a moment? B: Certainly. Here you are.",
    "correctExplanation": "借りる → 借りて gives the て-form. 借りてもいいですか asks whether A’s borrowing is allowed. ちょっと softens the request or suggests brief use; B grants it.",
    "rationales": {
      "1": "借りてもいいですか correctly asks permission for A to borrow the dictionary.",
      "2": "借りたらどうですか suggests that B borrow it, reversing the intended borrower.",
      "3": "借りてほしいんですが wants B to borrow it. It does not ask B to allow A’s borrowing.",
      "4": "借りるといいですよ advises B to borrow it. B’s offer of the dictionary instead answers a permission request."
    },
    "studyGuide": {
      "reading": "かりてもいいですか",
      "strongerHint": "The intended borrower is A. Use the て-form + もいいですか permission question.",
      "clue": "いいですよ。どうぞ responds naturally to A’s request to use the dictionary.",
      "steps": [
        "借りる → 借りて gives the て-form.",
        "借りてもいいですか asks whether A’s borrowing is allowed.",
        "ちょっと softens the request or suggests brief use; B grants it."
      ],
      "trap": "A dictionary can appear in both advice and permission questions. Decide who will borrow it: たらどうですか and といいですよ normally recommend an action to the listener here.",
      "reviewHref": "lesson-10-advice.html#l10-tara-doka"
    }
  },
  {
    "id": "part1-book-full-q06",
    "hint": "The teacher gives the class a firm instruction about an important document.",
    "translation": "Teacher: Everyone, this document is important, so you must not lose it under any circumstances. Is that clear?",
    "correctExplanation": "なくす → なくさない gives the action to avoid. Sentence-final こと makes it a firm instruction in this context. なくさないこと tells the students not to lose the document.",
    "rationales": {
      "1": "なくすわけではありません denies or qualifies an interpretation that someone loses it. It does not instruct the class to keep it safe.",
      "2": "なくさないべき is not the standard negative べき construction taught here. For “should not lose,” use なくすべきではない.",
      "3": "なくすことはありません can deny losing it or suggest no need to do so. It does not deliver the teacher’s intended prohibition.",
      "4": "なくさないこと correctly gives the firm negative instruction."
    },
    "studyGuide": {
      "reading": "なくさないこと",
      "strongerHint": "Use Vない + こと at the end of the instruction to tell the students what not to do.",
      "clue": "絶対に and わかりましたか reinforce an instruction, rather than a prediction or explanation.",
      "steps": [
        "なくす → なくさない gives the action to avoid.",
        "Sentence-final こと makes it a firm instruction in this context.",
        "なくさないこと tells the students not to lose the document."
      ],
      "trap": "Distinguish three jobs: わけではない corrects an interpretation; ことはない can express lack of need or occurrence; Vないこと gives an instruction. The standard negative advice pattern is Vるべきではない.",
      "reviewHref": "lesson-10-advice.html#l10-koto"
    }
  },
  {
    "id": "part1-book-full-q07",
    "hint": "The manager stops the speaker at the moment of leaving. Focus on the stage of the action.",
    "translation": "Just as I was about to leave the office, the section manager called out and stopped me.",
    "correctExplanation": "出る → 出よう gives the volitional form. 出ようとしたら locates the next event at the attempt or point just before leaving. 課長に呼び止められた supplies the passive interruption by the manager.",
    "rationales": {
      "1": "出るようにしたら concerns taking steps or arranging to leave, rather than the precise departure moment highlighted here.",
      "2": "出ている間 describes a period of being out. It misses the intended moment before leaving when the manager stops the speaker.",
      "3": "出ようとしたら correctly connects imminent departure with the interruption.",
      "4": "出ているうちに puts the event during a state of being out, rather than at the interrupted start of leaving."
    },
    "studyGuide": {
      "reading": "でようとしたら",
      "strongerHint": "Use the volitional + としたら for being about to do something when another event occurs.",
      "clue": "呼び止められた means was called to a stop, placing the interruption at departure.",
      "steps": [
        "出る → 出よう gives the volitional form.",
        "出ようとしたら locates the next event at the attempt or point just before leaving.",
        "課長に呼び止められた supplies the passive interruption by the manager."
      ],
      "trap": "Compare 出るようにする, an effort or arrangement, with 出ようとする, an attempt or imminent action. ～ようとしたら does not itself guarantee failure; this sentence’s manager supplies the interruption.",
      "reviewHref": "lesson-11-intentions.html#l11-you-to-suru"
    }
  },
  {
    "id": "part1-book-full-q08",
    "hint": "Tanaka is asking to visit the listener’s home. Identify both the traveler and the destination.",
    "translation": "A: Hello, this is Tanaka. Would it be all right if I came to your home now? B: Yes, certainly. I will be waiting.",
    "correctExplanation": "伺う humbly describes visiting the other person. 伺う → 伺って → 伺っても provides the required connection. てもよろしいですか is a more formal permission question corresponding to てもいいですか.",
    "rationales": {
      "1": "おいでになっても honors the person traveling. That would wrongly elevate A’s own visit in this permission request.",
      "2": "伺っても correctly humbles A’s visit and connects to よろしいですか.",
      "3": "いらっしゃっても also honors the traveler, giving the wrong direction for A’s own action.",
      "4": "お目にかかっても means meet someone. It would need a person as its meeting partner, such as 先生に; お宅に here names the house to visit."
    },
    "studyGuide": {
      "reading": "うかがっても",
      "strongerHint": "Choose humble 伺う for visiting someone, then its て-form + も before よろしいですか.",
      "clue": "お宅に is the listener’s home as a destination; B’s waiting confirms that A will come.",
      "steps": [
        "伺う humbly describes visiting the other person.",
        "伺う → 伺って → 伺っても provides the required connection.",
        "てもよろしいですか is a more formal permission question corresponding to てもいいですか."
      ],
      "trap": "Two checks are needed: whose action receives keigo, and which ordinary verb fits the complement. お目にかかる is humble too, but means meet a person, not visit a house.",
      "reviewHref": "lesson-12-keigo.html#l12-kenjougo-1"
    }
  },
  {
    "id": "part1-book-full-q09",
    "hint": "The child refuses to open their mouth. Who is trying to get whom to take the medicine?",
    "translation": "A: Doesn’t your Ko-chan take medicine? B: That’s right. Even when I try to get the child to take it, they resist and won’t open their mouth.",
    "correctExplanation": "飲ませる means make or get someone to drink or take medicine. 飲ませようとする means try to get them to take it. しても adds even when / even if, followed by the child’s resistance.",
    "rationales": {
      "1": "飲むことにしても describes deciding or making it a practice to take medicine. It does not identify the adult’s attempt to get the child to take it.",
      "2": "飲むつもりでも describes the drinker’s intention, which does not capture the adult’s attempt and the child’s refusal.",
      "3": "飲ませたつもりでも means even if the adult thinks they already got the child to take it. That completed-action assessment conflicts with the ongoing refusal to open the mouth.",
      "4": "飲ませようとしても correctly expresses the adult’s attempt despite the child’s resistance."
    },
    "studyGuide": {
      "reading": "のませようとしても",
      "strongerHint": "Build the causative first, then the volitional attempt: 飲む → 飲ませる → 飲ませようとする.",
      "clue": "いやがって口を開けない describes the child resisting the adult’s attempt.",
      "steps": [
        "飲ませる means make or get someone to drink or take medicine.",
        "飲ませようとする means try to get them to take it.",
        "しても adds even when / even if, followed by the child’s resistance."
      ],
      "trap": "Keep the adult’s attempt separate from the child’s drinking. Causative + たつもり would assess something believed already done; causative + ようとする describes the attempt now being resisted.",
      "reviewHref": "lesson-11-intentions.html#l11-you-to-suru"
    }
  },
  {
    "id": "part1-book-full-q10",
    "hint": "The match is tomorrow. B is responding with encouragement about A’s performance.",
    "translation": "A: I am competing in a judo match tomorrow. B: I see. I hope you can show your full ability.",
    "correctExplanation": "力を出す means bring out or demonstrate one’s ability. 出す → 出せる expresses being able to do so; 力が works with the potential form here. 出せるといいですね expresses a supportive hope for the upcoming performance.",
    "rationales": {
      "1": "出せるといいですね naturally hopes that A can demonstrate their ability tomorrow.",
      "2": "出せたらどうですか frames the possibility as a suggestion, rather than offering the supportive wish intended here.",
      "3": "出るといいですよ uses the intransitive 出る and an advice-like ending. It does not give the idiomatic potential expression for A showing their ability.",
      "4": "出ればよかったですね looks back on an unrealized desirable outcome. The match is still tomorrow, so past regret does not fit."
    },
    "studyGuide": {
      "reading": "だせるといいですね",
      "strongerHint": "Use the potential of 出す with といいですね to hope that A can demonstrate their ability.",
      "clue": "あした places the match in the future; 自分の力 points to performing to one’s ability.",
      "steps": [
        "力を出す means bring out or demonstrate one’s ability.",
        "出す → 出せる expresses being able to do so; 力が works with the potential form here.",
        "出せるといいですね expresses a supportive hope for the upcoming performance."
      ],
      "trap": "Identify the purpose of the reply: encouragement, advice, or regret. A potential form does not automatically make a phrase a hope; read the ending as well.",
      "reviewHref": "lesson-09-wishes.html#l9-to-ba-tara-ii"
    }
  },
  {
    "id": "part1-book-full-q11",
    "hint": "The speaker arrived too late and looks back on a better choice. Is this an expectation or regret?",
    "translation": "I wanted to enter the shop, but it was already closing time. I should have come earlier.",
    "correctExplanation": "来る stays in dictionary form before べき. The printed だった makes the judgment retrospective. 来るべきだった expresses regret about not coming earlier.",
    "rationales": {
      "1": "ほど expresses degree or extent and does not form the needed statement of regret.",
      "2": "来るはずだった would report an expectation or arrangement to come earlier, rather than judging that earlier arrival was the better choice.",
      "3": "来ることだった alone does not form the intended “should have come” expression. Decision and arrangement patterns need further structure, such as ことにする or ことになる.",
      "4": "来るべきだった correctly expresses regret over the action that should have been taken."
    },
    "studyGuide": {
      "reading": "べき",
      "strongerHint": "Use Vる + べきだった for an advisable action that was not taken.",
      "clue": "もう閉店時間だった reveals the missed opportunity; もっと早く identifies the better action.",
      "steps": [
        "来る stays in dictionary form before べき.",
        "The printed だった makes the judgment retrospective.",
        "来るべきだった expresses regret about not coming earlier."
      ],
      "trap": "Compare the airport question: はずだ expresses an expectation. Here べきだった judges the speaker’s earlier choice. The English word “should” alone cannot distinguish them.",
      "reviewHref": "lesson-10-advice.html#l10-beki"
    }
  },
  {
    "id": "part1-book-full-q12",
    "hint": "A museum employee asks a visitor about their destination. Who is moving, and toward where?",
    "translation": "[At an art museum] Excuse me, where are you going? Only authorized personnel may enter beyond this point.",
    "correctExplanation": "The ordinary verb needed is 行く, go. 行く → 行かれる gives its respectful form here. 行かれますか asks politely about the visitor’s destination before explaining the restriction.",
    "rationales": {
      "1": "行かれますか correctly honors the visitor’s going toward a destination.",
      "2": "参りますか uses a formal humble verb for movement on the speaker’s side, rather than honoring the visitor.",
      "3": "おられますか concerns presence, not the destination of going asked by どちらへ here.",
      "4": "見えますか can concern visibility or respectfully coming in other contexts. It does not fit this question about where the visitor is going."
    },
    "studyGuide": {
      "reading": "いかれますか",
      "strongerHint": "Use the respectful れる form of 行く for the visitor’s going.",
      "clue": "お客様 identifies the respected visitor; どちらへ asks for a direction of movement.",
      "steps": [
        "The ordinary verb needed is 行く, go.",
        "行く → 行かれる gives its respectful form here.",
        "行かれますか asks politely about the visitor’s destination before explaining the restriction."
      ],
      "trap": "Match the ordinary verb before judging politeness. Presence, coming, and going are not interchangeable. れる here honors the visitor; it does not mean the visitor is passively “gone.”",
      "reviewHref": "lesson-12-keigo.html#l12-sonkeigo"
    }
  },
  {
    "id": "part1-book-full-q13",
    "hint": "The speaker encourages the listener to keep trying. Are they denying a past fact or advising against a future choice?",
    "translation": "You should not give up just because you failed once. Keep trying a little longer.",
    "correctExplanation": "あきらめる means give up. べきではない advises against taking that action. The negative advice naturally supports the following encouragement.",
    "rationales": {
      "1": "あきらめたわけがない strongly denies that someone gave up. It is a claim about what happened, not advice to keep trying.",
      "2": "あきらめたはずがない rejects the possibility that someone gave up based on expectation. It does not advise against giving up now.",
      "3": "あきらめるわけではない says it is not that someone is giving up. It corrects an interpretation rather than recommending persistence.",
      "4": "あきらめるべきではない gives the negative advice that fits the encouragement."
    },
    "studyGuide": {
      "reading": "あきらめるべきではない",
      "strongerHint": "Use Vる + べきではない to say that giving up would be the wrong course of action.",
      "clue": "一度…だけ minimizes the reason for quitting; もう少しがんばって explicitly encourages continued effort.",
      "steps": [
        "あきらめる means give up.",
        "べきではない advises against taking that action.",
        "The negative advice naturally supports the following encouragement."
      ],
      "trap": "はずがない and わけがない strongly reject a possibility; わけではない qualifies or denies an interpretation. None automatically means “you should not.” Match the speaker’s intention to advise.",
      "reviewHref": "lesson-10-advice.html#l10-beki"
    }
  }
];
  const byId = new Map(support.map(item => [item.id, item]));
  root.N3QuizData = Object.freeze((root.N3QuizData || []).map(record => {
    const extra = byId.get(record.id);
    return extra ? { ...record, ...extra } : record;
  }));
}(typeof window !== "undefined" ? window : globalThis));
