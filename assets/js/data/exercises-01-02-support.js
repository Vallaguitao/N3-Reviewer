/* Authored study support for the Lessons 1–2 review on Lesson 2.
 * Load after part1-quiz-data.js and before quiz.js. The generated source remains intact.
 * Only these 18 records are enriched; original answer keys and question types are retained.
 */
(function (root) {
  "use strict";
  if (typeof document !== "undefined" && document.body?.dataset.page !== "lesson-02") return;
  const support = [
  {
    "id": "part1-book-01-02-q01",
    "hint": "Think about why you would make a note: what future change are you trying to avoid?",
    "translation": "You should make a note of what you heard before you forget it.",
    "correctExplanation": "Start with the desired order: make the note first, forget later. 忘れる → 忘れない. Vないうちに means “while V has not happened yet,” naturally translated here as “before V happens.” しておく adds preparation for later; たほうがいい gives advice. Together they support taking the opportunity now.",
    "rationales": {
      "wasureru": "忘れる is the dictionary form, “forget.” It does not express the still-not-forgotten state required by this advice. Dictionary form + うちに can work elsewhere, but does not fit this intended meaning.",
      "wasurenai": "This keeps the information available until you make the note: “before forgetting.”",
      "wasureteiru": "忘れている describes having forgotten. That places the note-taking opportunity after the important information has already been lost."
    },
    "studyGuide": {
      "reading": "わすれない",
      "strongerHint": "The advice is to write while the information is still in your memory, before the opportunity is lost.",
      "clue": "メモしておいたほうがいい is advice to prepare now; forgetting is the change to act before.",
      "steps": [
        "Start with the desired order: make the note first, forget later.",
        "忘れる → 忘れない. Vないうちに means “while V has not happened yet,” naturally translated here as “before V happens.”",
        "しておく adds preparation for later; たほうがいい gives advice. Together they support taking the opportunity now."
      ],
      "trap": "Do not translate the negative twice. 忘れないうちに means “before I forget,” not “before I do not forget.” 忘れる itself is an ordinary dictionary-form verb, not a passive or potential form.",
      "reviewHref": "lesson-01-toki.html#l1-uchini"
    }
  },
  {
    "id": "part1-book-01-02-q02",
    "hint": "Find the expression 気を取られる. Is the distraction continuing, or are you being told to avoid it?",
    "translation": "While I was distracted by other things, I ran out of time to eat.",
    "correctExplanation": "気を取られる means “have one’s attention taken up / be distracted.” Here 取られる is passive in this expression. 取られる → 取られている describes being distracted over a period. That period goes before うちに. The past ending なくなってしまった reports what eventually happened; the earlier clause still uses ている to show the state continuing at that past time.",
    "rationales": {
      "torareta": "取られた presents the distraction as something that happened. This exercise needs the ongoing state during which time slipped away; 取られている supplies that.",
      "torarenai": "取られない means “not be distracted” in this expression. It reverses the situation that explains losing the chance to eat; it is not a potential negative here.",
      "torareteiru": "This describes the continuing distraction while the time available for the meal disappears."
    },
    "studyGuide": {
      "reading": "とられている",
      "strongerHint": "The meal opportunity disappears during a period of distraction. The verb before うちに needs to describe that ongoing state.",
      "clue": "時間がなくなってしまった is a change that developed while the distraction continued.",
      "steps": [
        "気を取られる means “have one’s attention taken up / be distracted.” Here 取られる is passive in this expression.",
        "取られる → 取られている describes being distracted over a period. That period goes before うちに.",
        "The past ending なくなってしまった reports what eventually happened; the earlier clause still uses ている to show the state continuing at that past time."
      ],
      "trap": "Do not make every verb past just because the story is past. The form before うちに describes how the state relates to the later change.",
      "reviewHref": "lesson-01-toki.html#l1-uchini"
    }
  },
  {
    "id": "part1-book-01-02-q03",
    "hint": "The delivery happened during a longer background situation. What was the speaker doing then?",
    "translation": "It seems the delivery person came while I was in the bath.",
    "correctExplanation": "お風呂に入る means “take a bath.” 入っている describes being in the bath at the relevant time. A 間に B places the delivery person’s arrival inside that longer period. 来たようだ means “it seems someone came.” It explains why the speaker reports the visit indirectly, rather than saying they met the delivery person.",
    "rationales": {
      "hairu": "入る names taking or entering the bath. In this sentence the exercise asks for the continuing bathing period, which 入っている makes explicit.",
      "haitta": "入った says the entry or bath happened. It does not give the intended ongoing background as clearly as 入っている間に.",
      "haitteiru": "This supplies the period “while I was in the bath,” within which the delivery occurred."
    },
    "studyGuide": {
      "reading": "はいっている",
      "strongerHint": "Entering a bath starts a state: being in the bath. Choose the form that gives the delivery person time to arrive within that state.",
      "clue": "間に contains an arrival event within the period when the speaker was bathing.",
      "steps": [
        "お風呂に入る means “take a bath.” 入っている describes being in the bath at the relevant time.",
        "A 間に B places the delivery person’s arrival inside that longer period.",
        "来たようだ means “it seems someone came.” It explains why the speaker reports the visit indirectly, rather than saying they met the delivery person."
      ],
      "trap": "ている can describe a continuing state after entering, not only an action actively progressing second by second.",
      "reviewHref": "lesson-01-toki.html#l1-aida"
    }
  },
  {
    "id": "part1-book-01-02-q04",
    "hint": "Look at the final verb いた. Is the sentence presenting a stay over a period, or a separate event inside it?",
    "translation": "I stayed at my friend’s house in America during summer vacation.",
    "correctExplanation": "夏休み is the period; 友だちの家にいた is the state continuing over it. Noun + の間 is the textbook’s intended connection for that duration. Compare a completed visit: 夏休みの間に友だちの家に行った would place a visit within the vacation instead.",
    "rationales": {
      "nakade": "中で is used for settings, groups, or circumstances in other constructions. It is not the normal duration connector needed for this vacation-long stay.",
      "aida": "This presents the stay as continuing over the summer-vacation period.",
      "aidani": "間に places an event or change within a period. It is not the intended focus of the simple continuing stay expressed by いた here; it is not universally incompatible with state verbs in every context."
    },
    "studyGuide": {
      "reading": "あいだ",
      "strongerHint": "The statement describes where the speaker was staying during summer vacation. Compare “throughout that period” with “something happened within it.”",
      "clue": "家にいた presents the stay as a continuing state over the vacation period.",
      "steps": [
        "夏休み is the period; 友だちの家にいた is the state continuing over it.",
        "Noun + の間 is the textbook’s intended connection for that duration.",
        "Compare a completed visit: 夏休みの間に友だちの家に行った would place a visit within the vacation instead."
      ],
      "trap": "English “during” can translate both 間 and 間に. Choose according to how the later situation is presented, not from that English word alone. The sentence does not measure the stay minute by minute.",
      "reviewHref": "lesson-01-toki.html#l1-aida"
    }
  },
  {
    "id": "part1-book-01-02-q05",
    "hint": "Translate the final result first: 間に合わない. What condition is necessary to avoid that result?",
    "translation": "If I don’t get up at four, I won’t make it in time for the flight.",
    "correctExplanation": "起きる → 起きない → 起きなければ means “if I do not get up.” Connect the condition to the consequence: fail to get up at four → fail to reach the flight in time. てからでなければ instead emphasizes a later action being blocked until an earlier step is completed. That is a different focus from this timing warning.",
    "rationales": {
      "okinakereba": "This directly states the required condition: “If I do not get up at four, I will not make it in time.”",
      "okitekaradenakereba": "This would focus on “not until after getting up.” The sentence needs a warning about not waking at the necessary time, rather than waiting for a completed step before the next action is possible.",
      "okiraretekaradenaito": "起きられる can mean “be able to get up.” This choice adds that ability meaning and the “not until after” structure. Neither is needed for the simple failure-to-wake condition here."
    },
    "studyGuide": {
      "reading": "おきなければ",
      "strongerHint": "This is a warning about failing to get up at the needed time. Compare “if I don’t…” with “not until I have finished…”.",
      "clue": "４時に sets the needed waking time; 間に合わない is the consequence if that condition is not met.",
      "steps": [
        "起きる → 起きない → 起きなければ means “if I do not get up.”",
        "Connect the condition to the consequence: fail to get up at four → fail to reach the flight in time.",
        "てからでなければ instead emphasizes a later action being blocked until an earlier step is completed. That is a different focus from this timing warning."
      ],
      "trap": "A clock time does not grammatically forbid てから. The reason for the choice is the intended conditional relationship. Also, potential forms are not universally forbidden before てから.",
      "reviewHref": "lesson-01-toki.html#l1-tekara"
    }
  },
  {
    "id": "part1-book-01-02-q06",
    "hint": "What activity would still be unavailable until the weather gets hotter?",
    "translation": "I can’t swim in the sea until it gets hotter.",
    "correctExplanation": "Read AてからでないとB as “Until A has happened, B is not possible / acceptable.” In this exercise, warmer weather makes sea swimming practical. 泳ぐ → 泳げる → 泳げない means “cannot swim.” The intended logic is: it is not warm enough yet, so swimming in the sea is still not an option.",
    "rationales": {
      "umidewaoyogenai": "This gives the blocked activity that naturally depends on warmer conditions: sea swimming.",
      "shigotowoshitemotsukarenai": "This means “I do not get tired even when working.” It does not give the intended activity that must wait for warmer weather; a negative ending alone does not make it fit.",
      "senpukiwotsukawanakutemoii": "This means “I do not have to use a fan.” It expresses lack of necessity, not the blocked activity required here. It also fails to supply the intended warming-then-swimming relationship."
    },
    "studyGuide": {
      "reading": "うみではおよげない",
      "strongerHint": "Check both the meaning of each result and the requirement created by てからでないと. An ending containing ない is not enough by itself.",
      "clue": "もっと暑くなる is the condition that must happen first; the result should be blocked before then.",
      "steps": [
        "Read AてからでないとB as “Until A has happened, B is not possible / acceptable.”",
        "In this exercise, warmer weather makes sea swimming practical. 泳ぐ → 泳げる → 泳げない means “cannot swim.”",
        "The intended logic is: it is not warm enough yet, so swimming in the sea is still not an option."
      ],
      "trap": "使わなくてもいい means “do not have to use,” not “cannot use.” Likewise, 疲れない means “do not get tired,” not “cannot get tired.” Check the meaning of the whole ending.",
      "reviewHref": "lesson-01-toki.html#l1-tekara"
    }
  },
  {
    "id": "part1-book-01-02-q07",
    "hint": "Use 間もなく to place the event on the timeline: before, during, or after reaching two o’clock?",
    "translation": "It is just about to turn two o’clock.",
    "correctExplanation": "Vるところです places the event immediately before it happens. なる is the dictionary form, so ２時になるところです means it is about to become two o’clock. なったところ would put you just after that change instead.",
    "rationales": {
      "naru": "Dictionary form + ところ expresses the just-before stage supported by 間もなく.",
      "natta": "た-form + ところ means “has just become.” That clashes with 間もなく, which points ahead.",
      "natteiru": "This does not express the imminent change needed here. Reaching two o’clock is treated as a time point, not an ongoing action whose middle the speaker is describing."
    },
    "studyGuide": {
      "reading": "なる",
      "strongerHint": "The clock is close to two, but has not reached it yet. Check which verb form before ところ expresses that stage.",
      "clue": "間もなく means “soon / shortly,” so reaching two is still ahead.",
      "steps": [
        "Vるところです places the event immediately before it happens.",
        "なる is the dictionary form, so ２時になるところです means it is about to become two o’clock.",
        "なったところ would put you just after that change instead."
      ],
      "trap": "Do not choose ている simply because the sentence describes “now.” First locate the event’s stage.",
      "reviewHref": "lesson-01-toki.html#l1-tokoro"
    }
  },
  {
    "id": "part1-book-01-02-q08",
    "hint": "Read the final verb 見られた. Is someone arriving, giving a reason, or observing the speaker in a scene?",
    "translation": "My friend’s mother saw me while I was skipping school and playing.",
    "correctExplanation": "Vているところ identifies the exact ongoing scene: the speaker is playing after skipping school. ところを marks that scene as what is witnessed. The full connection is 遊んでいるところを見られた. 友だちのお母さんに identifies the person who saw the speaker in the passive sentence. That に has a different job from the particle after ところ.",
    "rationales": {
      "tokorode": "ところで can mark a point in time in other sentences, but this exercise needs the scene being directly witnessed with 見られた.",
      "tokoroni": "ところに commonly introduces someone or something coming into the scene. The sentence says the speaker was seen, not that the mother arrived there.",
      "tokoroo": "This connects the ongoing scene to being seen in the act: ところを見られた."
    },
    "studyGuide": {
      "reading": "ところを",
      "strongerHint": "The friend’s mother sees the speaker in the act. The missing particle connects that scene to the observation.",
      "clue": "遊んでいる gives the scene in progress; 見られた says the speaker was seen in it.",
      "steps": [
        "Vているところ identifies the exact ongoing scene: the speaker is playing after skipping school.",
        "ところを marks that scene as what is witnessed. The full connection is 遊んでいるところを見られた.",
        "友だちのお母さんに identifies the person who saw the speaker in the passive sentence. That に has a different job from the particle after ところ."
      ],
      "trap": "ところを is valid Japanese. Do not assume ところ can only end in だ／です, or that every ところで means “by the way.”",
      "reviewHref": "lesson-01-toki.html#l1-tokoro"
    }
  },
  {
    "id": "part1-book-01-02-q09",
    "hint": "What is the relationship between preparing to leave and asking someone to wait?",
    "translation": "I’m getting ready to go out now, so please wait a moment.",
    "correctExplanation": "準備をしているところ means “right in the middle of getting ready.” だから adds “because / so,” connecting that stage to the request. The whole thought is “Because I am still preparing, wait a little.”",
    "rationales": {
      "tokorode": "This does not supply the intended causal connection. The separate “even if” use would require Vたところで and a different meaning.",
      "tokoroo": "This would connect a scene to someone observing or acting on it. It does not mean “because,” which is needed to explain the request.",
      "tokorodakara": "This gives the current preparation as the reason for asking the listener to wait."
    },
    "studyGuide": {
      "reading": "ところだから",
      "strongerHint": "The first clause explains why the listener should wait. Find the connector that makes the current activity a reason.",
      "clue": "ちょっと待って is a request supported by the reason that preparation is still in progress.",
      "steps": [
        "準備をしているところ means “right in the middle of getting ready.”",
        "だから adds “because / so,” connecting that stage to the request.",
        "The whole thought is “Because I am still preparing, wait a little.”"
      ],
      "trap": "A request is a helpful clue here, not a rule that every sentence ending in a request must use だから. Check whether the earlier clause actually provides its reason.",
      "reviewHref": "lesson-01-toki.html#l1-tokoro"
    }
  },
  {
    "id": "part1-book-01-02-q10",
    "hint": "Look immediately after the blank: とおり is already printed. Does each choice attach to that exact form?",
    "translation": "Life does not go the way you expect.",
    "correctExplanation": "思う is a dictionary-form verb. 思うとおり means “as one thinks / expects.” 自分の思うとおり can be understood as 自分が思うとおり: the の before 思う marks the subject inside this modifying clause. 考え and 計画 are nouns. They need のとおり or an appropriate どおり compound, neither of which is printed immediately after the blank.",
    "rationales": {
      "kangae": "考え is a noun, “idea / thinking.” 自分の考えのとおり would need another の; 自分の考えとおり is not the required connection.",
      "keikaku": "計画 is a noun, “plan.” 計画どおり or 計画のとおり can work, but 計画とおり does not fit the printed pattern.",
      "omou": "The verb attaches directly to とおり. The sentence means life does not proceed as you expect."
    },
    "studyGuide": {
      "reading": "おもう",
      "strongerHint": "自分の belongs to the phrase before the blank. It does not supply an extra の between a noun answer and とおり.",
      "clue": "The printed ending is とおり, so the inserted word must connect to it without adding or changing anything.",
      "steps": [
        "思う is a dictionary-form verb. 思うとおり means “as one thinks / expects.”",
        "自分の思うとおり can be understood as 自分が思うとおり: the の before 思う marks the subject inside this modifying clause.",
        "考え and 計画 are nouns. They need のとおり or an appropriate どおり compound, neither of which is printed immediately after the blank."
      ],
      "trap": "Do not mentally repair an option by adding の or changing とおり to どおり. Solve the sentence as printed.",
      "reviewHref": "#l2-toori"
    }
  },
  {
    "id": "part1-book-01-02-q11",
    "hint": "Check the の already after 絵, then look at what follows the blank. Is it a noun to modify or a full statement?",
    "translation": "As this picture shows, this area was farmland thirty years ago.",
    "correctExplanation": "この絵のとおり means “as shown in this picture.” The following 30年前はこの辺は畑だった is a complete statement about the past. とおりの instead needs a following noun, as in 絵のとおりの景色, “scenery matching the picture.”",
    "rationales": {
      "toori": "This completes この絵のとおり and introduces the statement that matches what the picture shows.",
      "doori": "The の is already present. The standard connection is noun + のとおり, not noun + のどおり.",
      "toorino": "The extra の would need a noun that the phrase modifies. The following words instead start the full statement about thirty years ago."
    },
    "studyGuide": {
      "reading": "とおり",
      "strongerHint": "The picture is the reference for the statement about this area thirty years ago. No extra noun follows the blank for a final の to modify.",
      "clue": "この絵の sets up noun + のとおり; what follows is the statement matching the picture.",
      "steps": [
        "この絵のとおり means “as shown in this picture.”",
        "The following 30年前はこの辺は畑だった is a complete statement about the past.",
        "とおりの instead needs a following noun, as in 絵のとおりの景色, “scenery matching the picture.”"
      ],
      "trap": "Do not see 30年前 and treat it as the noun for とおりの. Here it sets the time of the following statement: “thirty years ago…”.",
      "reviewHref": "#l2-toori"
    }
  },
  {
    "id": "part1-book-01-02-q12",
    "hint": "Separate the insect from its name. What does 地方によって tell you about the way people name it?",
    "translation": "I hear that this insect is called different names in different regions.",
    "correctExplanation": "呼び方 means “way of calling / name used”: 呼ぶ → 呼び + 方. 違う states the difference associated with changing regions. 違うそうだ is hearsay: “I hear that it differs.” It does not mean “looks different” here.",
    "rationales": {
      "chigau": "This says the name varies by region, matching 地方によって.",
      "onajida": "This says the naming is the same, which does not give the regional variation the sentence is setting up. The form 同じだそうだ can be grammatical elsewhere.",
      "niteiru": "This says the names resemble one another. Similarity is not the intended variation relationship here; it is not rejected merely because it contains ている."
    },
    "studyGuide": {
      "reading": "ちがう",
      "strongerHint": "The region changes, and the naming is not fixed across regions. The ending そうだ reports that information.",
      "clue": "地方によって introduces regional variation in 呼び方, the way the insect is called.",
      "steps": [
        "呼び方 means “way of calling / name used”: 呼ぶ → 呼び + 方.",
        "違う states the difference associated with changing regions.",
        "違うそうだ is hearsay: “I hear that it differs.” It does not mean “looks different” here."
      ],
      "trap": "によって does not always mean “because of” or identify the person doing an action. Here the changing category and the predicate show the variation meaning.",
      "reviewHref": "#l2-niyotte"
    }
  },
  {
    "id": "part1-book-01-02-q13",
    "hint": "Pay attention to は after によって. Does the sentence describe all places together, or what can happen in certain places?",
    "translation": "It may rain in some places tomorrow.",
    "correctExplanation": "所によっては narrows the discussion to some places among the possible locations. 雨が降るかもしれない gives a possible result in those places: it might rain. The possibility ending supports this reading, but the narrower scope is the main reason the choice fits.",
    "rationales": {
      "tenkigaminachigau": "This tries to describe weather differences across the whole set of places. That broad comparison does not fit the intended “in some places…” focus of 所によっては here.",
      "dokomoamegafuru": "どこも means “everywhere.” That uniform all-places claim conflicts with the selected-places reading the sentence sets up.",
      "amegafurukamoshirenai": "This describes what might happen in the selected locations: some places may get rain."
    },
    "studyGuide": {
      "reading": "あめがふるかもしれない",
      "strongerHint": "Try “Tomorrow, in some places, …”. The continuation should describe the weather in those selected places, not switch to a claim about everywhere.",
      "clue": "所によっては selects some locations; the continuation states the possible weather there.",
      "steps": [
        "所によっては narrows the discussion to some places among the possible locations.",
        "雨が降るかもしれない gives a possible result in those places: it might rain.",
        "The possibility ending supports this reading, but the narrower scope is the main reason the choice fits."
      ],
      "trap": "Do not memorize “によっては must always end in かもしれない.” It can introduce known facts in selected cases too; these options are decided by scope and meaning.",
      "reviewHref": "#l2-niyotte"
    }
  },
  {
    "id": "part1-book-01-02-q14",
    "hint": "This textbook is testing a recurring event on each date. Which option names something that happens, rather than simply describing how someone is?",
    "translation": "She arrives late every time she goes on a date.",
    "correctExplanation": "デートのたびに sets up separate dates, with the same kind of event repeated each time. 遅れてくる means “come / arrive late.” It supplies that recurring event. The textbook contrasts this action with the descriptions 元気がない and 忙しそうだ. This is why the answer key prefers the late-arrival option.",
    "rationales": {
      "genkiganai": "This means “has no energy / is not in good spirits.” It describes a state, so it is not the repeated-event answer intended by this lesson. Its ない does not make negative grammar automatically wrong.",
      "okuretekuru": "This supplies the recurring event the exercise is targeting: she arrives late on each date.",
      "isogashisouda": "This means “seems busy,” a description of how she appears. It does not provide the repeated action the textbook is contrasting with these states."
    },
    "studyGuide": {
      "reading": "おくれてくる",
      "strongerHint": "Look for a repeatable arrival or action. The alternatives describe energy or apparent busyness.",
      "clue": "The lesson’s target is an event recurring on each occasion: a late arrival on each date.",
      "steps": [
        "デートのたびに sets up separate dates, with the same kind of event repeated each time.",
        "遅れてくる means “come / arrive late.” It supplies that recurring event.",
        "The textbook contrasts this action with the descriptions 元気がない and 忙しそうだ. This is why the answer key prefers the late-arrival option."
      ],
      "trap": "Treat this as the textbook’s targeted contrast, not proof that all descriptions or adjectives are impossible after たびに. In broader contexts, speakers can describe a recurring condition; that is not the construction this exercise is training.",
      "reviewHref": "#l2-tabini"
    }
  },
  {
    "id": "part1-book-01-02-q15",
    "hint": "Bracket the “the more…, the more…” part separately from the final 本物に見える.",
    "translation": "This painting is not genuine, but the more I look at it, the more real it looks.",
    "correctExplanation": "見る → 見れば. The paired pattern is 見れば見るほど, “the more you look.” After that completed pair, 本物に見える means “looks genuine.” The structure is ［見れば見るほど］［本物に見える］. The final 見える does not replace the second 見る in the pair.",
    "rationales": {
      "miruhodo": "This repeats 見る in dictionary form and completes 見れば見るほど.",
      "mieruhodo": "見える means “be visible / appear.” It changes the verb in the middle of the pair. Its matching conditional would be 見えれば, not 見れば.",
      "minaihodo": "見ない is negative. It does not supply the affirmative dictionary-form half matching 見れば in this pattern."
    },
    "studyGuide": {
      "reading": "みるほど",
      "strongerHint": "見れば is the conditional form of 見る. Complete that repeated-verb pair before interpreting the final result.",
      "clue": "見れば fixes the verb in the first half of the repeated pattern; 本物に見える is the separate result.",
      "steps": [
        "見る → 見れば. The paired pattern is 見れば見るほど, “the more you look.”",
        "After that completed pair, 本物に見える means “looks genuine.”",
        "The structure is ［見れば見るほど］［本物に見える］. The final 見える does not replace the second 見る in the pair."
      ],
      "trap": "見る and 見える share a kanji but are different verbs. 見えれば見えるほど is also a possible pair in an appropriate visibility context; it is not the pair that starts with 見れば.",
      "reviewHref": "#l2-hodo"
    }
  },
  {
    "id": "part1-book-01-02-q16",
    "hint": "新鮮 is a な-adjective. Check how a な-adjective forms the first half of a repeated degree pattern.",
    "translation": "Sashimi tastes better the fresher it is.",
    "correctExplanation": "The lesson’s pattern is な-adjective + なら + な-adjective + なほど. Insert 新鮮なら to make 新鮮なら新鮮なほど: “the fresher it is.” おいしい supplies the result: greater freshness is linked to better taste.",
    "rationales": {
      "shinsendato": "新鮮だと can introduce “if it is fresh” in another sentence. It does not form the matching なら…なほど pair tested here.",
      "shinsennara": "This forms the required な-adjective pair: 新鮮なら新鮮なほど.",
      "shinsendenakereba": "This means “if it is not fresh.” It reverses the first condition and does not match the affirmative degree phrase 新鮮なほど."
    },
    "studyGuide": {
      "reading": "しんせんなら",
      "strongerHint": "The second half is already 新鮮なほど. You need its matching affirmative conditional, not a different conditional relationship.",
      "clue": "The printed 新鮮なほど identifies the な-adjective version of “the more…, the more…”.",
      "steps": [
        "The lesson’s pattern is な-adjective + なら + な-adjective + なほど.",
        "Insert 新鮮なら to make 新鮮なら新鮮なほど: “the fresher it is.”",
        "おいしい supplies the result: greater freshness is linked to better taste."
      ],
      "trap": "Not every expression meaning “if” can replace the conditional half of a fixed pattern. Recognize the full combination before choosing a conditional.",
      "reviewHref": "#l2-hodo"
    }
  },
  {
    "id": "part1-book-01-02-q17",
    "hint": "What skill is being praised: doing two actions together, repeating an event, or adding an errand?",
    "translation": "Kan is good at singing while playing the piano.",
    "correctExplanation": "ながら joins simultaneous actions performed by the same person in this use. 弾く → 弾きます → 弾き + ながら. Attach ながら to the ます-stem, not directly to 弾く. The main clause 歌を歌うのが上手だ describes the combined performance skill.",
    "rationales": {
      "hikutabini": "This means “every time Kan plays.” It emphasizes repeated occasions, rather than the simultaneous performance skill described here.",
      "hikinagara": "This expresses singing at the same time as playing the piano, with the same person doing both.",
      "hikutsuideni": "This would treat singing as a convenient extra to the piano-playing task. The sentence praises simultaneous performance, not an added errand or secondary opportunity."
    },
    "studyGuide": {
      "reading": "ひきながら",
      "strongerHint": "歌を歌うのが上手だ describes skill at singing. The piano-playing phrase tells you what the same person is doing at the same time.",
      "clue": "One person performs both activities together; the main skill being described is singing with piano accompaniment.",
      "steps": [
        "ながら joins simultaneous actions performed by the same person in this use.",
        "弾く → 弾きます → 弾き + ながら. Attach ながら to the ます-stem, not directly to 弾く.",
        "The main clause 歌を歌うのが上手だ describes the combined performance skill."
      ],
      "trap": "“While” can hide three different meanings in English: at the same time, every time, or while already doing a main task. Translate the relationship, not just that word.",
      "reviewHref": "#l2-tabini"
    }
  },
  {
    "id": "part1-book-01-02-q18",
    "hint": "The bank visit is the original outing. Which continuation adds an intentional stop that fits the same trip?",
    "translation": "On the same trip as my visit to the bank, I also stopped by the flower shop.",
    "correctExplanation": "銀行に行った is the original outing. The た-form connects to ついでに. 花屋に寄った means “stopped by the flower shop.” It gives a separate, purposeful addition to that trip. The sentence does not require the bank and the flower shop to be visited at exactly the same time.",
    "rationales": {
      "guuzenriisanniatta": "偶然 means “by chance.” A chance meeting is not the intentional extra task normally expressed by this use of ついでに.",
      "jitenshaninotta": "Riding a bicycle is naturally understood here as part of making the trip, not a distinct extra purpose. A specially supplied context could make a ride an added activity, but the sentence does not provide that context.",
      "hanayaniyotta": "A purposeful stop at the flower shop is a natural extra on the bank outing."
    },
    "studyGuide": {
      "reading": "はなやによった",
      "strongerHint": "Distinguish a useful extra from an accidental meeting or simply the transportation used for the outing.",
      "clue": "ついでに presents the second action as an intentional extra made convenient by the bank trip.",
      "steps": [
        "銀行に行った is the original outing. The た-form connects to ついでに.",
        "花屋に寄った means “stopped by the flower shop.” It gives a separate, purposeful addition to that trip.",
        "The sentence does not require the bank and the flower shop to be visited at exactly the same time."
      ],
      "trap": "Past tense does not distinguish these options: all three end in た. Check the role of the second event—an intentional extra, an accident, or transport.",
      "reviewHref": "#l2-tsuideni"
    }
  }
];
  const byId = new Map(support.map(item => [item.id, item]));
  root.N3QuizData = Object.freeze((root.N3QuizData || []).map(record => {
    const extra = byId.get(record.id);
    return extra ? { ...record, ...extra } : record;
  }));
}(typeof window !== "undefined" ? window : globalThis));
