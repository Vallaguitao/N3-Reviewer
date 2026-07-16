window.N3QuizData = Object.freeze([
  Object.freeze({
    id: "demo-uchini",
    type: "selection",
    correct: "uchini",
    hint: "Choose the pattern that means an action should happen before the present state changes.",
    rationales: Object.freeze({
      uchini: "Correct. The photos should be taken before the daylight disappears.",
      aida: "～間 describes a continuing duration; this sentence emphasizes completing the action before a change.",
      tabini: "～たびに means every time something happens, so it cannot describe this one temporary opportunity.",
      tsuideni: "～ついでに introduces a secondary action performed during the opportunity created by a main action.",
    }),
  }),
  Object.freeze({
    id: "l1-uchini-check-01",
    type: "selection",
    correct: "uchini",
    hint: "The train is not crowded now, but that useful state may change.",
    rationales: Object.freeze({
      uchini: "Correct. ～うちに marks the opportunity to leave before the train becomes crowded.",
      aida: "～間 would make leaving continue throughout the whole uncrowded period, which does not fit one departure.",
      tabini: "～たびに means every time and would require a repeated event, not this temporary opportunity.",
    }),
  }),
  Object.freeze({
    id: "l1-uchini-check-02",
    type: "selection",
    correct: "uchini",
    hint: "A na-adjective needs な before うちに.",
    rationales: Object.freeze({
      uchini: "Correct. 元気なうちに means while one is still healthy, before that condition changes.",
      uchi: "The sentence needs に to mark the time when the walking should happen.",
      aida: "～間に can place one event inside a duration, but this sentence emphasizes acting before health changes.",
    }),
  }),
  Object.freeze({
    id: "l1-uchini-check-03",
    type: "selection",
    correct: "aidani",
    hint: "Climbing Mount Fuji happened once inside a longer study-abroad period.",
    rationales: Object.freeze({
      aidani: "Correct. ～間に places the one completed climb within the study-abroad period.",
      aida: "～間 would imply that climbing continued for the whole study-abroad period.",
      uchini: "～うちに could express an opportunity, but the past fact 一度～登った is most directly located within a duration by ～間に.",
    }),
  }),
  Object.freeze({
    id: "l1-aida-check-01",
    type: "selection",
    correct: "aida",
    hint: "The students' listening continues for the full length of the explanation.",
    rationales: Object.freeze({
      aida: "Correct. Both the explanation and the quiet listening continue over the same period.",
      aidani: "～間に would present the listening as one bounded event inside the explanation rather than a continuing action.",
      uchini: "～うちに emphasizes an opportunity or change, neither of which is intended here.",
    }),
  }),
  Object.freeze({
    id: "l1-aida-check-02",
    type: "selection",
    correct: "aidani",
    hint: "The bank trip is completed once during lunch break.",
    rationales: Object.freeze({
      aidani: "Correct. ～間に marks one completed trip inside the lunch-break period.",
      aida: "～間 would suggest going to the bank continued throughout lunch break.",
      uchini: "～うちに would stress acting before lunch break changes or ends; this question simply locates an event within it.",
    }),
  }),
  Object.freeze({
    id: "l1-aida-check-03",
    type: "selection",
    correct: "aida",
    hint: "Staying home lasts as long as the rain does.",
    rationales: Object.freeze({
      aida: "Correct. ～間 shows that staying home continued throughout the rainy period.",
      aidani: "～間に would describe a single event that happened at some point while it rained.",
      uchini: "～うちに would imply doing something before the rainy state changes, not remaining home for its duration.",
    }),
  }),
  Object.freeze({
    id: "l1-tekara-check-01", type: "selection", correct: "karadenaito",
    hint: "Registration is a required step, and the result says viewing is impossible.",
    rationales: Object.freeze({
      karadenaito: "Correct. 登録してからでないと states that registration must happen before viewing becomes possible.",
      kara: "Simple ～てから only shows sequence and does not connect naturally to this negative prerequisite meaning.",
      aida: "～間 describes a duration, not a condition that must be completed first.",
    }),
  }),
  Object.freeze({
    id: "l1-tekara-check-02", type: "selection", correct: "karadenakereba",
    hint: "Payment must be completed before entry is allowed.",
    rationales: Object.freeze({
      karadenakereba: "Correct. ～てからでなければ links the required payment to the negative result 入れない.",
      tokoro: "～ているところ would mean being in the middle of paying and cannot express the requirement here.",
      uchini: "～うちに marks a temporary opportunity, not an admission rule.",
    }),
  }),
  Object.freeze({
    id: "l1-tekara-check-03", type: "selection", correct: "kara",
    hint: "This sentence simply reports two actions in order; it does not say one is otherwise impossible.",
    rationales: Object.freeze({
      kara: "Correct. ～てから reports that eating breakfast happened before going to school.",
      karadenaito: "～てからでないと requires a negative or limiting result, but 行った is an ordinary positive fact.",
      aidani: "～間に would require a continuing period in which the school trip occurred.",
    }),
  }),
  Object.freeze({
    id: "l1-tokoro-check-01", type: "selection", correct: "iru",
    hint: "The meal is happening at this exact moment.",
    rationales: Object.freeze({
      iru: "Correct. Vているところ places the speaker in the middle of eating.",
      ita: "Vていたところ would look back on an action that had been in progress, rather than one happening now.",
      kara: "～てから means after eating and would move the timeline beyond the meal.",
    }),
  }),
  Object.freeze({
    id: "l1-tokoro-check-02", type: "selection", correct: "ta",
    hint: "たった今 signals the moment immediately after arrival.",
    rationales: Object.freeze({
      ta: "Correct. Vたところ means the arrival has just been completed.",
      teiru: "着いている describes a resulting state and misses the just-completed stage tested here.",
      ru: "着くところ would mean the speaker is about to arrive, not that they have arrived.",
    }),
  }),
  Object.freeze({
    id: "l1-tokoro-check-03", type: "selection", correct: "ru",
    hint: "これから points to an action that has not started yet.",
    rationales: Object.freeze({
      ru: "Correct. The dictionary form plus ところ marks the stage just before leaving.",
      ta: "出かけたところ means the speaker has just left, which conflicts with talking here now.",
      teita: "出かけていたところ would look back on an action in progress and does not fit これから.",
    }),
  }),

  Object.freeze({
    id: "l1-review-book-01", type: "selection", correct: "wasurenai",
    hint: "Take the note before forgetting occurs.",
    rationales: Object.freeze({
      wasureru: "The affirmative form would mean while the act of forgetting happens; the useful window is the state before forgetting.",
      wasurenai: "Correct. 忘れないうちに means before you forget, while the memory is still available.",
      wasureteiru: "This describes being in an ongoing forgotten state, when it is already too late to make the note.",
    }),
  }),
  Object.freeze({
    id: "l1-review-book-02", type: "selection", correct: "torareteiru",
    hint: "The distraction continues while the chance to eat disappears.",
    rationales: Object.freeze({
      torareta: "The simple past closes the distraction before the following event instead of making it the ongoing background.",
      torarenai: "This means not being distracted, which contradicts the reason the meal time disappeared.",
      torareteiru: "Correct. 気を取られているうちに frames distraction as the continuing state during which time ran out.",
    }),
  }),
  Object.freeze({
    id: "l1-review-book-03", type: "selection", correct: "haitteiru",
    hint: "The bath is a continuing period; the delivery happens once inside it.",
    rationales: Object.freeze({
      hairu: "The dictionary form focuses on entering, not the continuing period of being in the bath.",
      haitta: "The past form reports entry as complete and does not naturally supply the duration needed by 間に here.",
      haitteiru: "Correct. 入っている間に means during the time the speaker was in the bath.",
    }),
  }),
  Object.freeze({
    id: "l1-review-book-04", type: "selection", correct: "aida",
    hint: "The stay lasts throughout the entire summer-vacation period.",
    rationales: Object.freeze({
      nakade: "中で marks a location or a range among things, not the whole duration of the vacation.",
      aida: "Correct. 夏休みの間 presents the stay as continuing throughout summer vacation.",
      aidani: "間に would normally place a bounded event somewhere within the vacation, not a stay lasting through it.",
    }),
  }),
  Object.freeze({
    id: "l1-review-book-05", type: "selection", correct: "okitekaradenakereba",
    hint: "Waking at four is the prerequisite for making the flight.",
    rationales: Object.freeze({
      okinakereba: "This is a general unless condition, but the target pattern explicitly marks completion of a required first step.",
      okitekaradenakereba: "Correct. 起きてからでなければ makes getting up at four the necessary prerequisite.",
      okiraretekaradenaito: "The potential/passive form 起きられて does not express the intended act of getting up here.",
    }),
  }),
  Object.freeze({
    id: "l1-review-book-06", type: "selection", correct: "umidewaoyogenai",
    hint: "The result must remain impossible until the weather gets hotter.",
    rationales: Object.freeze({
      umidewaoyogenai: "Correct. 海では泳げない is the negative result that remains true until it becomes hotter.",
      shigotowoshitemotsukarenai: "Not becoming tired from work has no logical temperature prerequisite.",
      senpukiwotsukawanakutemoii: "Not needing a fan is more likely before it becomes hotter, so the time relationship is reversed.",
    }),
  }),
  Object.freeze({
    id: "l1-review-book-07", type: "selection", correct: "naru",
    hint: "The clock is immediately before reaching two.",
    rationales: Object.freeze({
      naru: "Correct. なるところ marks the stage just before it becomes two o’clock.",
      natta: "なったところ means it has just become two, which conflicts with 間もなく.",
      natteiru: "なっているところ would describe a change in progress and is not the normal way to state the approaching clock time.",
    }),
  }),
  Object.freeze({
    id: "l1-review-book-08", type: "selection", correct: "tokoroo",
    hint: "The mother saw the exact ongoing scene.",
    rationales: Object.freeze({
      tokorode: "ところで changes the function to at that point or by the way; it does not mark what was witnessed.",
      tokoroni: "ところに can mark an interruption arriving at that moment, but 見られた takes the witnessed scene with を.",
      tokoroo: "Correct. ところを marks the scene of playing hooky as the action caught or witnessed.",
    }),
  }),
  Object.freeze({
    id: "l1-review-book-09", type: "selection", correct: "tokorodakara",
    hint: "The current stage of preparation is the reason for asking the listener to wait.",
    rationales: Object.freeze({
      tokorode: "ところで does not connect the current action stage as the reason for the request.",
      tokoroo: "ところを would mark an action being observed or interrupted and cannot supply the causal link here.",
      tokorodakara: "Correct. しているところだから means because I am in the middle of preparing, so please wait.",
    }),
  }),

  Object.freeze({
    id: "l1-review-order-01", type: "ordering",
    correct: Object.freeze(["supu", "atatakai", "uchini", "nomimasho"]),
    hint: "Put the object first, then attach うちに to the warm state.",
    rationales: Object.freeze({ order: "スープを温かいうちに飲みましょう。 温かい directly modifies うち, and the main action follows." }),
  }),
  Object.freeze({
    id: "l1-review-order-02", type: "ordering",
    correct: Object.freeze(["owatte", "karadenaito", "bucho", "dekimasen"]),
    hint: "Complete the prerequisite clause before the person and negative result.",
    rationales: Object.freeze({ order: "会議が終わってからでないと部長に質問できません。 The meeting’s end is the prerequisite." }),
  }),
  Object.freeze({
    id: "l1-review-order-03", type: "ordering",
    correct: Object.freeze(["chodo", "hirugohan", "tabeteiru", "tokoro"]),
    hint: "Start with ちょうど, then build Vているところです.",
    rationales: Object.freeze({ order: "ちょうど昼ご飯を食べているところです。 Vているところ marks the action in progress." }),
  }),
  Object.freeze({
    id: "l1-review-passage-01", type: "passage-blank", correct: "uchini",
    hint: "Available preparation time will soon end.",
    rationales: Object.freeze({
      uchini: "Correct. The speaker will prepare before the available time disappears.",
      aida: "～間 would make preparation continue for the whole available period, which is not the focus.",
      tokoro: "～ところ describes a stage of a verb, not a temporary amount of time.",
    }),
  }),
  Object.freeze({
    id: "l1-review-passage-02", type: "passage-blank", correct: "karadenaito",
    hint: "The company explanation is necessary for understanding.",
    rationales: Object.freeze({
      karadenaito: "Correct. Hearing the explanation is required before the procedure can be understood.",
      kara: "Simple ～てから gives an order but does not match the negative result’s strong prerequisite meaning.",
      aidani: "～間に would need an extended listening period containing a separate event.",
    }),
  }),
  Object.freeze({
    id: "l1-review-passage-03", type: "passage-blank", correct: "aida",
    hint: "Listening and note-taking continue over the same period.",
    rationales: Object.freeze({
      aida: "Correct. Notes are taken throughout the manager’s talk.",
      aidani: "～間に would present writing as one completed event inside the talk rather than ongoing note-taking.",
      uchini: "～うちに would suggest a fading chance or change not intended in this passage.",
    }),
  }),
  Object.freeze({
    id: "l2-toori-check-01", type: "selection", correct: "toori",
    hint: "The reference point is a past verb clause: 先生が説明した.",
    rationales: Object.freeze({
      toori: "Correct. A verb in dictionary or past form attaches directly to とおり.",
      doori: "～どおり does not attach directly to a verb; it appears in established noun compounds.",
      yotte: "～によって would introduce a method, agent, cause, or category—not something to copy exactly.",
    }),
  }),
  Object.freeze({
    id: "l2-toori-check-02", type: "selection", correct: "doori",
    hint: "計画 is one of the familiar nouns that forms a direct compound.",
    rationales: Object.freeze({
      doori: "Correct. 計画どおり means according to plan and completes the adverbial phrase naturally.",
      nodoori: "The voiced compound form is どおり; のどおり is not the noun attachment pattern.",
      nitotte: "～にとって means from someone’s perspective and cannot mean according to plan.",
    }),
  }),
  Object.freeze({
    id: "l2-toori-check-03", type: "selection", correct: "notoorini",
    hint: "A regular noun takes のとおり, and に connects it to the action.",
    rationales: Object.freeze({
      notoorini: "Correct. 地図のとおりに歩いた means walking in the way shown by the map.",
      tatoorini: "The past-verb attachment requires an actual verb before たとおりに; 地図 is a noun.",
      doori: "地図どおり is less neutral than 地図のとおり, and どおりだ would end a sentence rather than modify 歩いた.",
    }),
  }),
  Object.freeze({
    id: "l2-niyotte-check-01", type: "selection", correct: "niyotte",
    hint: "The novel is passive, and the writer is the person who performed the action.",
    rationales: Object.freeze({
      niyotte: "Correct. によって marks the author as the agent of 書かれた.",
      nitsuite: "～について means about or concerning, so it would make the author a topic rather than the writer.",
      nitotte: "～にとって marks a viewpoint, not the agent in a passive sentence.",
    }),
  }),
  Object.freeze({
    id: "l2-niyotte-check-02", type: "selection", correct: "niyotte",
    hint: "A formal cause explains the delayed bus.",
    rationales: Object.freeze({
      niyotte: "Correct. によって marks the traffic accident as the cause of the delay.",
      notoori: "～のとおり means according to and would imply the delay copied an accident.",
      uchini: "～うちに marks an opportunity before a condition changes, not a cause.",
    }),
  }),
  Object.freeze({
    id: "l2-niyotte-check-03", type: "selection", correct: "niyotte",
    hint: "The sentence describes a general difference across all countries, not just exceptional cases.",
    rationales: Object.freeze({
      niyotte: "Correct. 国によって says customs vary depending on the country.",
      niyoruto: "～によると cites a source of information, so it would require a report or statement from a country.",
      nitsurete: "～につれて describes two changes developing together over time, not static category-based differences.",
    }),
  }),
  Object.freeze({
    id: "l2-tabini-check-01", type: "selection", correct: "tabini",
    hint: "The song repeatedly triggers the same memory.",
    rationales: Object.freeze({
      tabini: "Correct. 聞くたびに means the memory returns on every occasion the song is heard.",
      aida: "～間 would describe a continuing duration while the song is playing, not repeated occasions.",
      tokoro: "～ところ identifies a precise stage of hearing, not a recurring trigger.",
    }),
  }),
  Object.freeze({
    id: "l2-tabini-check-02", type: "selection", correct: "notabini",
    hint: "旅行 is a noun, so it needs a connector before たびに.",
    rationales: Object.freeze({
      notabini: "Correct. Nouns attach with Nのたびに: on every trip.",
      tabini: "A bare noun cannot attach directly to たびに in this pattern.",
      aidani: "～の間に would locate the photos inside one trip rather than state a habit on every trip.",
    }),
  }),
  Object.freeze({
    id: "l2-tabini-check-03", type: "selection", correct: "toki",
    hint: "先週 points to one specific trip, not repeated trips.",
    rationales: Object.freeze({
      toki: "Correct. ～たとき describes the one occasion last week when the speaker went to Kyoto.",
      tabini: "～たびに requires repeated occasions and normally follows the dictionary form, not this single dated event.",
      gotoni: "～ごとに distributes over recurring units or members, which is absent here.",
    }),
  }),
  Object.freeze({
    id: "l2-hodo-check-01", type: "selection", correct: "hanasu",
    hint: "After Vば, repeat the same verb in dictionary form before ほど.",
    rationales: Object.freeze({
      hanasu: "Correct. 話せば話すほど is the standard proportional verb pattern.",
      hanashita: "Past form after the conditional would break the fixed repeated-verb structure.",
      hanashite: "The て-form does not occupy the repeated position before ほど.",
    }),
  }),
  Object.freeze({
    id: "l2-hodo-check-02", type: "selection", correct: "nahodo",
    hint: "静か is a na-adjective.",
    rationales: Object.freeze({
      nahodo: "Correct. 静かなら静かなほど uses なら first and な before ほど.",
      dehodo: "でほど is not the attachment used by a na-adjective in this pattern.",
      nihodo: "にほど cannot connect 静か to the proportional expression.",
    }),
  }),
  Object.freeze({
    id: "l2-hodo-check-03", type: "selection", correct: "hodo",
    hint: "The inability to speak shows how extreme the surprise was.",
    rationales: Object.freeze({
      hodo: "Correct. 声が出ないほど uses a result to mark the degree of surprise.",
      tabini: "～たびに would mean the speaker is surprised repeatedly each time their voice fails.",
      toori: "～とおり means in the same way as and cannot express an extreme degree.",
    }),
  }),
  Object.freeze({
    id: "l2-tsuideni-check-01", type: "selection", correct: "tsuideni",
    hint: "The library trip already exists; returning the book is an added task.",
    rationales: Object.freeze({
      tsuideni: "Correct. 行くついでに uses the trip as an opportunity for the extra return.",
      tabini: "～たびに would mean the book is returned every time the speaker goes, not just on this convenient trip.",
      hodo: "～ほど marks degree or proportional change and cannot rank the two tasks.",
    }),
  }),
  Object.freeze({
    id: "l2-tsuideni-check-02", type: "selection", correct: "notsuideni",
    hint: "出張 is a noun.",
    rationales: Object.freeze({
      notsuideni: "Correct. A noun attaches as Nのついでに.",
      tsuideni: "A bare noun cannot attach directly to ついでに.",
      nagara: "～ながら attaches to a verb stem and emphasizes simultaneous actions, not an extra during a business trip.",
    }),
  }),
  Object.freeze({
    id: "l2-tsuideni-check-03", type: "selection", correct: "nagara",
    hint: "Listening and studying happen simultaneously.",
    rationales: Object.freeze({
      nagara: "Correct. 聞きながら presents listening as simultaneous with studying.",
      tsuideni: "～ついでに would require listening to create a separate convenient occasion for study, which is not the intended relationship.",
      niyotte: "～によって marks a method, agent, cause, or category and cannot join these simultaneous actions.",
    }),
  }),

  Object.freeze({
    id: "l2-review-book-01", type: "selection", correct: "omou",
    hint: "A verb clause must come directly before とおり.",
    rationales: Object.freeze({
      kangae: "考え is a noun, so it would require 考えのとおり; it cannot directly fill this verb slot.",
      keikaku: "計画 is also a noun and would normally form 計画どおり or 計画のとおり.",
      omou: "Correct. 思うとおり means in the way one thinks or wishes; the dictionary-form verb attaches directly to とおり.",
    }),
  }),
  Object.freeze({
    id: "l2-review-book-02", type: "selection", correct: "toori",
    hint: "The painting is the source showing what the area used to be like.",
    rationales: Object.freeze({
      toori: "Correct. 絵のとおり means as shown by this picture and works adverbially before the statement.",
      doori: "どおり is used in established direct noun compounds, but 絵どおり is not the intended form.",
      toorino: "とおりの must modify a following noun; here the sentence continues directly with 30年前は.",
    }),
  }),
  Object.freeze({
    id: "l2-review-book-03", type: "selection", correct: "chigau",
    hint: "によって introduces a category across which something varies.",
    rationales: Object.freeze({
      chigau: "Correct. 呼び方が違う states the expected variation from region to region.",
      onajida: "同じだ contradicts によって, which sets up a difference based on region.",
      niteiru: "似ている means the names resemble one another, not that their forms vary by region.",
    }),
  }),
  Object.freeze({
    id: "l2-review-book-04", type: "selection", correct: "amegafurukamoshirenai",
    hint: "によっては singles out some places as possible exceptions.",
    rationales: Object.freeze({
      tenkigaminachigau: "皆違う says every place is different, while によっては introduces only some exceptional places.",
      dokomoamegafuru: "どこも means everywhere, which conflicts with the limited some-places meaning of 所によっては.",
      amegafurukamoshirenai: "Correct. Some places may receive rain, a natural exceptional forecast after 所によっては.",
    }),
  }),
  Object.freeze({
    id: "l2-review-book-05", type: "selection", correct: "okuretekuru",
    hint: "たびに needs an action that happens repeatedly on every date.",
    rationales: Object.freeze({
      genkiganai: "A continuing lack of energy is not clearly an event repeated on each date.",
      okuretekuru: "Correct. Arriving late is a bounded action that happens again on every date.",
      isogashisouda: "Looking busy describes an observed state but does not form the intended recurring date event.",
    }),
  }),
  Object.freeze({
    id: "l2-review-book-06", type: "selection", correct: "miruhodo",
    hint: "Complete the repeated conditional pattern Vば Vるほど.",
    rationales: Object.freeze({
      miruhodo: "Correct. 見れば見るほど is the standard the-more-you-look pattern.",
      mieruhodo: "見えるほど would pair with 見えれば, not with the given 見れば.",
      minaihodo: "見ないほど reverses the repetition and breaks the Vば Vるほど pattern.",
    }),
  }),
  Object.freeze({
    id: "l2-review-book-07", type: "selection", correct: "shinsennara",
    hint: "A na-adjective uses なら in the conditional half and な before ほど.",
    rationales: Object.freeze({
      shinsendato: "だと does not create the required repeated na-adjective pattern before 新鮮なほど.",
      shinsennara: "Correct. 新鮮なら新鮮なほど means the fresher it is, the more delicious it is.",
      shinsendenakereba: "This means if it is not fresh and reverses the positive proportional relationship.",
    }),
  }),
  Object.freeze({
    id: "l2-review-book-08", type: "selection", correct: "hikinagara",
    hint: "The piano playing and singing happen simultaneously.",
    rationales: Object.freeze({
      hikutabini: "弾くたびに would mean every time he plays, separating repeated occasions rather than simultaneous actions.",
      hikinagara: "Correct. 弾きながら marks playing the piano and singing as simultaneous actions by the same person.",
      hikutsuideni: "弾くついでに would make singing merely a convenient extra, not the coordinated skill being described.",
    }),
  }),
  Object.freeze({
    id: "l2-review-book-09", type: "selection", correct: "hanayaniyotta",
    hint: "The second action should be a convenient extra on the same trip.",
    rationales: Object.freeze({
      guuzenriisanniatta: "An accidental meeting is not a planned or purposeful extra action, so it is a poor fit for ついでに.",
      jitenshaninotta: "Riding a bicycle describes transport and is not a useful extra task added to the bank visit.",
      hanayaniyotta: "Correct. Stopping at the flower shop is a purposeful extra that can conveniently share the same outing.",
    }),
  }),

  Object.freeze({
    id: "l2-review-order-01", type: "ordering",
    correct: Object.freeze(["setsumeisho", "toorini", "tana", "kumitateru"]),
    hint: "Put the model first, then the object and copied action.",
    rationales: Object.freeze({ order: "説明書のとおりに棚を組み立てた。 The manual is the model followed by the action." }),
  }),
  Object.freeze({
    id: "l2-review-order-02", type: "ordering",
    correct: Object.freeze(["kuni", "yotte", "shukan", "chigau"]),
    hint: "Build 国によって before stating what varies.",
    rationales: Object.freeze({ order: "国によって習慣が違う。 Country is the category across which customs vary." }),
  }),
  Object.freeze({
    id: "l2-review-order-03", type: "ordering",
    correct: Object.freeze(["kiku", "tabini", "jidai", "omoidasu"]),
    hint: "Place the recurring trigger before たびに and its result after it.",
    rationales: Object.freeze({ order: "歌を聞くたびに学生時代を思い出す。 Each hearing triggers the memory." }),
  }),
  Object.freeze({
    id: "l2-review-order-04", type: "ordering",
    correct: Object.freeze(["kaimono", "tsuideni", "ginko", "yotta"]),
    hint: "Put the main shopping trip before the convenient bank stop.",
    rationales: Object.freeze({ order: "買い物をするついでに銀行にも寄った。 The bank is the secondary stop." }),
  }),

  Object.freeze({
    id: "l2-review-passage-01", type: "passage-blank", correct: "doori",
    hint: "The actual trip matched the plan.",
    rationales: Object.freeze({
      doori: "Correct. 計画どおりに means the trip proceeded according to plan.",
      toori: "A bare noun does not attach directly to とおり; it would require 計画のとおり.",
      niyotte: "～によって would make the plan a cause or method rather than a model that was matched.",
    }),
  }),
  Object.freeze({
    id: "l2-review-passage-02", type: "passage-blank", correct: "tabini",
    hint: "Each separate temple visit deepened the same interest.",
    rationales: Object.freeze({
      tabini: "Correct. 見るたびに marks every temple viewing as another trigger.",
      tsuideni: "～ついでに would make deepening interest a deliberate extra errand.",
      hodo: "～ほど could mark degree but does not express the repeated occasions described in the trip.",
    }),
  }),
  Object.freeze({
    id: "l2-review-passage-03", type: "passage-blank", correct: "tsuideni",
    hint: "Returning to the station creates the chance to buy souvenirs.",
    rationales: Object.freeze({
      tsuideni: "Correct. The station trip is primary and the souvenir purchase is the convenient extra.",
      tabini: "～たびに would mean souvenirs were bought every time the speaker returned to the station.",
      niyotte: "～によって cannot connect a main trip with a secondary errand.",
    }),
  }),
  Object.freeze({
    id: "mixed-review-book-01", type: "selection", correct: "tokoroni",
    hint: "The person arrived at the exact moment the email was being written.",
    rationales: Object.freeze({
      madeni: "までに sets a deadline and cannot mark the exact scene into which the person arrived.",
      aida: "間 would describe something continuing for the whole email-writing period, not a punctual arrival.",
      tokoroni: "Correct. Vているところに marks an event arriving at the exact moment an action is in progress.",
    }),
  }),
  Object.freeze({
    id: "mixed-review-book-02", type: "selection", correct: "uchini",
    hint: "Understanding changes gradually during the continuing activity.",
    rationales: Object.freeze({
      uchini: "Correct. While listening continued, the speaker gradually entered a new state of understanding.",
      tabini: "たびに requires repeated separate occasions, but this describes change within one continuing explanation.",
      tokoroo: "ところを marks a scene being caught or interrupted and does not express gradual change.",
    }),
  }),
  Object.freeze({
    id: "mixed-review-book-03", type: "selection", correct: "okitatoki",
    hint: "This asks about the time at which the throat pain was noticed.",
    rationales: Object.freeze({
      okitatoki: "Correct. 起きたとき identifies the time when the speaker noticed the sore throat.",
      okitatsuideni: "ついでに would make the throat pain an extra purposeful action, which is impossible.",
      okiteiruuchini: "起きているうちに means while awake and does not match the moment of waking this morning.",
    }),
  }),
  Object.freeze({
    id: "mixed-review-book-04", type: "selection", correct: "tashikametekaradenaito",
    hint: "Seeing it personally is a necessary first step before answering.",
    rationales: Object.freeze({
      tashikametatoorini: "This means in exactly the way it was checked and does not create a prerequisite for answering.",
      tashikametekaradenaito: "Correct. 確かめてからでないと makes checking with one’s own eyes necessary before an answer is possible.",
      tashikametakarada: "This gives a completed reason, because I checked, which conflicts with the current inability to answer.",
    }),
  }),
  Object.freeze({
    id: "mixed-review-book-05", type: "selection", correct: "yoteidoori",
    hint: "The event will proceed according to the existing schedule.",
    rationales: Object.freeze({
      yoteidoori: "Correct. 予定どおり is the established noun compound meaning according to schedule.",
      yoteinouchini: "予定のうちに would mean within a plan and does not describe matching the schedule.",
      yoteiniyotte: "予定によって means depending on the schedule, not that the event proceeds as planned.",
    }),
  }),
  Object.freeze({
    id: "mixed-review-book-06", type: "selection", correct: "tabini",
    hint: "Moving house repeatedly triggers the same result.",
    rationales: Object.freeze({
      tokoroni: "ところに marks an interruption at an action stage, not a result repeated with every move.",
      tabini: "Correct. 引っ越しするたびに means that possessions increase every time the speaker moves.",
      tsuideni: "ついでに would make the increase a convenient extra action, which is not the intended relationship.",
    }),
  }),
  Object.freeze({
    id: "mixed-review-book-07", type: "selection", correct: "oitamama",
    hint: "The bag remains in the state created by putting it down.",
    rationales: Object.freeze({
      oiteiruaida: "This would mean during the period someone is actively placing or keeping it, not leaving it behind.",
      oitaitsuideni: "ついでに makes the departure a convenient extra to putting down the bag, which is illogical here.",
      oitamama: "Correct. 置いたまま means the bag was left unchanged in the state created by putting it there.",
    }),
  }),
  Object.freeze({
    id: "mixed-review-book-08", type: "selection", correct: "noborebanoboruhodo",
    hint: "The visible view expands in proportion to the climb.",
    rationales: Object.freeze({
      noborebanoboruhodo: "Correct. 登れば登るほど links more climbing with a proportionally wider view.",
      nobotteitte: "This simply says as one continues climbing and lacks the explicit proportional comparison tested here.",
      nobotteittekara: "This means after continuing to climb and places the view after the action rather than scaling with it.",
    }),
  }),
  Object.freeze({
    id: "mixed-review-book-09", type: "selection", correct: "niyottewa",
    hint: "The interpretation can vary depending on the way something is said.",
    rationales: Object.freeze({
      tooridewa: "とおりでは would refer to matching a model and cannot make the speaking style the source of variation.",
      notabini: "のたびに means every time and would require repeated occasions, not differences in manner.",
      niyottewa: "Correct. 言い方によっては means depending on how it is said, in some cases it may sound negative.",
    }),
  }),
  Object.freeze({ id: "mixed-selection-10", type: "selection", correct: "niyottewa", hint: "Some people are exceptions.", rationales: Object.freeze({ niyottewa: "Correct. 人によっては selects an exceptional subgroup.", niyoruto: "～によると cites a source of reported information.", nitsurete: "～につれて links two changes that develop together." }) }),

  Object.freeze({ id: "mixed-order-01", type: "ordering", correct: Object.freeze(["supu", "atatakai", "uchini", "nomu"]), hint: "Object, temporary condition, then action.", rationales: Object.freeze({ order: "スープを温かいうちに飲みましょう。 The soup should be drunk before it cools." }) }),
  Object.freeze({ id: "mixed-order-02", type: "ordering", correct: Object.freeze(["yomu", "karadenaito", "kikai", "tsukaenai"]), hint: "Prerequisite before negative result.", rationales: Object.freeze({ order: "説明書を読んでからでないと機械は使えない。 Reading is required before use." }) }),
  Object.freeze({ id: "mixed-order-03", type: "ordering", correct: Object.freeze(["yoho", "doori", "gogo", "yuki"]), hint: "Forecast model before result.", rationales: Object.freeze({ order: "天気予報どおり午後から雪が降った。 The weather matched the forecast." }) }),
  Object.freeze({ id: "mixed-order-04", type: "ordering", correct: Object.freeze(["nimotsu", "karui1", "karui2", "tasukaru"]), hint: "Repeat the adjective around the conditional.", rationales: Object.freeze({ order: "荷物は軽ければ軽いほど助かる。 Lower weight increases convenience." }) }),
  Object.freeze({ id: "mixed-order-05", type: "ordering", correct: Object.freeze(["eki", "tsuideni", "yoyaku", "uketotta"]), hint: "Main trip before extra pickup.", rationales: Object.freeze({ order: "駅へ行くついでに予約した切符を受け取った。 Pickup is the extra station task." }) }),

  Object.freeze({ id: "mixed-passage-01", type: "passage-blank", correct: "uchini", hint: "Available time will end.", rationales: Object.freeze({ uchini: "Correct. Preparation should happen before the free time disappears.", aida: "～間 would imply preparing continuously for the entire available period.", tokoro: "～ところ marks an action stage, not a temporary opportunity." }) }),
  Object.freeze({ id: "mixed-passage-02", type: "passage-blank", correct: "karadenaito", hint: "Explanation first, understanding second.", rationales: Object.freeze({ karadenaito: "Correct. The explanation is a prerequisite for understanding the procedure.", kara: "Simple ～てから reports order without the necessary-condition force.", aidani: "～間に would place one event inside a listening duration." }) }),
  Object.freeze({ id: "mixed-passage-03", type: "passage-blank", correct: "niyotte", hint: "Store is a category of variation.", rationales: Object.freeze({ niyotte: "Correct. Prices vary depending on the store.", niyoruto: "～によると would cite a store as an information source.", nitsurete: "～につれて requires two changing trends, not category differences." }) }),
  Object.freeze({ id: "mixed-passage-04", type: "passage-blank", correct: "tabini", hint: "Every map viewing triggers a wish.", rationales: Object.freeze({ tabini: "Correct. Each viewing repeats the trigger.", tsuideni: "～ついでに would make walking an extra errand during looking.", hodo: "～ほど would express degree but not the recurring occasions." }) }),
  Object.freeze({ id: "mixed-passage-05", type: "passage-blank", correct: "tsuideni", hint: "Station return creates the chance.", rationales: Object.freeze({ tsuideni: "Correct. Souvenir shopping is added to the station trip.", tabini: "～たびに would make the purchase a recurring habit on every return.", niyotte: "～によって does not rank a main action and secondary errand." }) }),

  Object.freeze({ id: "l3-kurai-check-01", type: "selection", correct: "hodo", hint: "The impossible result measures the intensity of the pain.", rationales: Object.freeze({ hodo: "Correct. ～ほど marks pain to the extent that standing is impossible.", nikagiru: "～に限る recommends a best choice; it does not measure intensity.", hanmen: "～反面 contrasts two sides of one subject." }) }),
  Object.freeze({ id: "l3-kurai-check-02", type: "selection", correct: "kurai", hint: "A child's ability is the concrete degree marker.", rationales: Object.freeze({ kurai: "Correct. ～くらい uses a child's ability as the measure of how easy the book is.", kurainara: "～くらいなら rejects an undesirable choice and proposes an alternative.", niyotte: "～によって marks a cause, means, agent, or category of variation." }) }),
  Object.freeze({ id: "l3-kurai-check-03", type: "selection", correct: "hodo", hint: "The rain stays below a stated threshold.", rationales: Object.freeze({ hodo: "Correct. ～ほどではない says it is not severe enough to require an umbrella.", ippo: "～一方 presents a contrasting or parallel side, not a degree threshold.", tabini: "～たびに means every time and requires a recurring occasion." }) }),

  Object.freeze({ id: "l3-kurai-wa-nai-check-01", type: "selection", correct: "hodo", hint: "Spring is ranked as the most pleasant season.", rationales: Object.freeze({ hodo: "Correct. ～ほど…はない presents spring as having no equal in the speaker's judgment.", kurainara: "～くらいなら rejects one action in favor of another.", nikagiru: "～に限る gives a best-choice recommendation, but cannot form this no-equal comparison." }) }),
  Object.freeze({ id: "l3-kurai-wa-nai-check-02", type: "selection", correct: "wanai", hint: "Complete the no-equal comparison.", rationales: Object.freeze({ wanai: "Correct. はない completes ～ぐらい…はない: nothing is as reassuring as the mother's cooking.", dewanai: "ではない simply negates an identity or description and does not complete this pattern.", ninaru: "になる means to become and would change the sentence's meaning." }) }),
  Object.freeze({ id: "l3-kurai-wa-nai-check-03", type: "selection", correct: "hodo", hint: "That day is the speaker's maximum on a scale of happiness.", rationales: Object.freeze({ hodo: "Correct. ～ほど…はない ranks the day the exam was passed as the happiest.", niyotte: "～によって marks a cause or means, not a superlative-like personal comparison.", tsuideni: "～ついでに introduces a secondary action done during a convenient opportunity." }) }),

  Object.freeze({ id: "l3-kurai-nara-check-01", type: "selection", correct: "kurainara", hint: "Reject walking in the rain and choose the taxi.", rationales: Object.freeze({ kurainara: "Correct. ～くらいなら rejects walking in the rain and introduces the preferred taxi.", hodo: "～ほど expresses degree and cannot introduce the preferred alternative here.", tabini: "～たびに means every time, which does not fit a one-time choice." }) }),
  Object.freeze({ id: "l3-kurai-nara-check-02", type: "selection", correct: "neru", hint: "The preferred alternative uses ～たほうがいい.", rationales: Object.freeze({ neru: "Correct. This option represents 寝た in the sentence, forming 寝たほうがいい as the preferred alternative.", neta: "This choice would duplicate the past ending already supplied by the sentence interface.", nereba: "The conditional 寝れば does not combine with ほうがいい in this recommendation pattern." }) }),
  Object.freeze({ id: "l3-kurai-nara-check-03", type: "selection", correct: "kurainara", hint: "The first living arrangement is strongly rejected.", rationales: Object.freeze({ kurainara: "Correct. ～ぐらいなら rejects living with an incompatible person and favors living alone.", nikagiru: "～に限る recommends the best option directly; it does not reject the preceding alternative in this form.", hanmen: "～反面 contrasts two sides of the same subject without expressing preference." }) }),

  Object.freeze({ id: "l3-ni-kagiru-check-01", type: "selection", correct: "nikagiru", hint: "Give the speaker's best choice for a hot day.", rationales: Object.freeze({ nikagiru: "Correct. ～に限る strongly recommends cold tea as the best choice.", kurainara: "～くらいなら requires an undesirable option to reject first.", hodo: "～ほど expresses degree or a no-equal comparison, not this recommendation." }) }),
  Object.freeze({ id: "l3-ni-kagiru-check-02", type: "selection", correct: "neru", hint: "Use the dictionary form before ～に限る.", rationales: Object.freeze({ neru: "Correct. The nonpast dictionary form 寝る precedes ～に限る.", neta: "The plain past 寝た is not used for this general best-choice recommendation.", netara: "The conditional 寝たら would require a different sentence structure." }) }),
  Object.freeze({ id: "l3-ni-kagiru-check-03", type: "selection", correct: "ikanai", hint: "A negative recommendation uses the nonpast negative form.", rationales: Object.freeze({ ikanai: "Correct. 行かないに限る recommends not going.", ikanakatta: "The past negative 行かなかった reports a past fact instead of general advice.", ikanakute: "The connective 行かなくて cannot stand directly before ～に限る here." }) }),

  Object.freeze({ id: "l3-review-selection-01", type: "selection", correct: "kurai", hint: "The distance at which the voice was heard measures loudness.", rationales: Object.freeze({ kurai: "Correct. ～くらい marks the degree of the loud voice.", kurainara: "～くらいなら rejects one option and proposes another.", nikagiru: "～に限る gives a best-choice recommendation." }) }),
  Object.freeze({ id: "l3-review-selection-02", type: "selection", correct: "hodo", hint: "The town is ranked as having no equal in quietness.", rationales: Object.freeze({ hodo: "Correct. ～ほど…はない makes this town the speaker's quietest example.", kurainara: "～くらいなら expresses a rejected alternative.", niyotte: "～によって marks cause, method, or variation rather than a no-equal comparison." }) }),
  Object.freeze({ id: "l3-review-selection-03", type: "selection", correct: "kurainara", hint: "Reject trying to memorize everything.", rationales: Object.freeze({ kurainara: "Correct. ～くらいなら rejects the unrealistic choice and favors reviewing key words.", hodo: "～ほど measures degree and does not introduce an alternative.", nikagiru: "～に限る recommends a best choice without this reject-then-prefer structure." }) }),
  Object.freeze({ id: "l3-review-selection-04", type: "selection", correct: "nikagiru", hint: "Choose the best drink for a hot day.", rationales: Object.freeze({ nikagiru: "Correct. ～に限る strongly recommends barley tea.", kurai: "～くらい would require a degree or approximate example.", kurainara: "～くらいなら would require an option being rejected." }) }),
  Object.freeze({ id: "l3-review-selection-05", type: "selection", correct: "hodo", hint: "Wanting to cry is the degree of difficulty.", rationales: Object.freeze({ hodo: "Correct. ～ほど gives the extreme degree of the exam's difficulty.", wanai: "はない would require a no-equal comparison frame.", nikagiru: "～に限る is a recommendation, not a degree marker." }) }),
  Object.freeze({ id: "l3-review-selection-06", type: "selection", correct: "hodo", hint: "Health is placed at the top of a personal scale.", rationales: Object.freeze({ hodo: "Correct. ～ほど…はない says nothing is as important as health.", kurainara: "～くらいなら rejects an action rather than ranking a noun.", tsuideni: "～ついでに adds a secondary action to a main one." }) }),
  Object.freeze({ id: "l3-review-selection-07", type: "selection", correct: "kurainara", hint: "Reject high rent and accept distance instead.", rationales: Object.freeze({ kurainara: "Correct. ～くらいなら rejects paying high rent and chooses the distant location.", kurai: "～くらい only expresses degree here and does not introduce preference.", nikagiru: "～に限る would directly recommend one option without the rejected premise." }) }),
  Object.freeze({ id: "l3-review-selection-08", type: "selection", correct: "yasumu", hint: "Use a dictionary-form verb before ～に限る.", rationales: Object.freeze({ yasumu: "Correct. 休むに限る recommends getting enough rest.", yasunda: "The plain past 休んだ does not express this general recommendation.", yasumeba: "The conditional 休めば requires a result clause and cannot attach this way." }) }),

  Object.freeze({ id: "l3-review-order-01", type: "ordering", correct: Object.freeze(["tonari", "kikoeru", "kurai", "koe"]), hint: "Place the location and audible result before the degree phrase and noun.", rationales: Object.freeze({ order: "となりまで・聞こえる・くらい大きな・声だった。 The audible distance measures how loud the voice was." }) }),
  Object.freeze({ id: "l3-review-order-02", type: "ordering", correct: Object.freeze(["ryoko", "kenko", "taisetsu", "nai"]), hint: "Set the context first, then the standard, description, and no-equal ending.", rationales: Object.freeze({ order: "旅行では・健康ほど・大切な・ものはない。 Nothing is as important as health when traveling." }) }),
  Object.freeze({ id: "l3-review-order-03", type: "ordering", correct: Object.freeze(["ame", "aruku", "nara", "takushi"]), hint: "State the setting, rejected action, ～くらいなら, then the preferred action.", rationales: Object.freeze({ order: "雨の中を・歩く・くらいなら・タクシーに乗ろう。 A taxi is preferred to walking in the rain." }) }),
  Object.freeze({ id: "l3-review-order-04", type: "ordering", correct: Object.freeze(["tsukareta", "hayaku", "neru", "kagiru"]), hint: "Begin with the condition, then adverb, recommended action, and ～に限る.", rationales: Object.freeze({ order: "疲れたときは・早く・寝る・に限る。 Sleeping early is the best choice when tired." }) }),

  Object.freeze({ id: "l3-review-passage-01", type: "passage-blank", correct: "hodo", hint: "Being unable to breathe measures the cold.", rationales: Object.freeze({ hodo: "Correct. ～ほど marks the mountain's extreme cold.", kurainara: "～くらいなら rejects an option and proposes a better one.", nikagiru: "～に限る makes a recommendation rather than describing degree." }) }),
  Object.freeze({ id: "l3-review-passage-02", type: "passage-blank", correct: "hodo", hint: "The mountain scenery is given no equal.", rationales: Object.freeze({ hodo: "Correct. ～ほど…はない gives the scenery the speaker's highest judgment.", kurainara: "～くらいなら is used for rejected alternatives.", nikagiru: "～に限る recommends a choice rather than forming a no-equal comparison." }) }),
  Object.freeze({ id: "l3-review-passage-03", type: "passage-blank", correct: "nikagiru", hint: "Recommend the best season for returning.", rationales: Object.freeze({ nikagiru: "Correct. ～に限る recommends autumn as the best season.", hodo: "～ほど would require a degree or no-equal comparison structure.", kurainara: "～くらいなら would reject an undesirable choice before giving an alternative." }) }),

  Object.freeze({ id: "l4-ni-taishite-check-01", type: "selection", correct: "nitaishite", hint: "The sentence compares two different people.", rationales: Object.freeze({ nitaishite: "Correct. ～に対して contrasts the older sister's morning schedule with the speaker's night schedule.", hanmen: "～反面 normally shows two sides of one subject, but this sentence has two people.", toiumori: "～というより replaces one description with a more accurate one." }) }),
  Object.freeze({ id: "l4-ni-taishite-check-02", type: "selection", correct: "nitaishite", hint: "The two years have opposite business results.", rationales: Object.freeze({ nitaishite: "Correct. ～に対して compares last year's deficit with this year's profit.", kawarini: "～かわりに suggests substitution, exchange, or compensation, not a neutral comparison between years.", kurainara: "～くらいなら rejects an undesirable action and chooses another." }) }),
  Object.freeze({ id: "l4-ni-taishite-check-03", type: "selection", correct: "nitaishite", hint: "The city and village are separate comparison subjects.", rationales: Object.freeze({ nitaishite: "Correct. 都会に対して sets the city against the quiet village.", ippo: "～一方で can present another side, but Nに対して is the direct noun-to-noun comparison required here.", hodo: "～ほど expresses degree and cannot connect these two places." }) }),

  Object.freeze({ id: "l4-hanmen-check-01", type: "selection", correct: "hanmen", hint: "Freedom and unstable income belong to the same job.", rationales: Object.freeze({ hanmen: "Correct. ～反面 presents the job's freedom and financial instability as opposite sides.", nitaishite: "～に対して normally compares two subjects, but the subject remains this job.", toiumori: "～というより corrects a label; unstable income does not rename freedom." }) }),
  Object.freeze({ id: "l4-hanmen-check-02", type: "selection", correct: "hanmen", hint: "One change has both a benefit and a drawback.", rationales: Object.freeze({ hanmen: "Correct. Greater convenience and fewer chances to exercise are reverse effects of the same change.", kawarini: "～かわりに can show a trade-off, but this explanatory sentence is framed as the reverse side of one change.", nikagiru: "～に限る recommends a best choice." }) }),
  Object.freeze({ id: "l4-hanmen-check-03", type: "selection", correct: "hanmen", hint: "Living alone has a pleasant side and a lonely side.", rationales: Object.freeze({ hanmen: "Correct. ～反面 directly reveals the drawback opposite the carefree benefit.", ippo: "～一方で can connect coexisting facts, but ～反面 more precisely signals an advantage-versus-disadvantage evaluation.", hodo: "～ほど measures degree and cannot connect the two sides." }) }),

  Object.freeze({ id: "l4-ippo-check-01", type: "selection", correct: "ippo", hint: "The same person maintains two parallel roles.", rationales: Object.freeze({ ippo: "Correct. ～一方で links working by day and studying at night.", hanmen: "～反面 would frame the second action as an opposite drawback, which studying is not.", nitaishite: "～に対して normally contrasts two subjects, but both actions belong to him." }) }),
  Object.freeze({ id: "l4-ippo-check-02", type: "selection", correct: "ippo", hint: "The sentence divides people into two groups.", rationales: Object.freeze({ ippo: "Correct. ～一方で presents people who are pleased and people who are anxious.", toiumori: "～というより corrects a description rather than introduce another group.", nikagiru: "～に限る gives a best-choice recommendation." }) }),
  Object.freeze({ id: "l4-ippo-check-03", type: "selection", correct: "ippo", hint: "Research and mentoring are simultaneous duties.", rationales: Object.freeze({ ippo: "Correct. ～一方で joins two responsibilities carried out in parallel.", kawarini: "～かわりに would make one duty a substitute or exchange for the other.", kurainara: "～くらいなら rejects one option and proposes a preferred alternative." }) }),

  Object.freeze({ id: "l4-to-iu-yori-check-01", type: "selection", correct: "toiumori", hint: "Replace the first explanation with a more accurate one.", rationales: Object.freeze({ toiumori: "Correct. ～というより corrects 'the room is small' to 'there are too many things.'", hanmen: "～反面 would describe an opposite side of the room rather than revise the cause.", nitaishite: "～に対して requires two comparison subjects." }) }),
  Object.freeze({ id: "l4-to-iu-yori-check-02", type: "selection", correct: "toiumori", hint: "Worried is more accurate than angry.", rationales: Object.freeze({ toiumori: "Correct. ～というより replaces the first emotional label with the second.", ippo: "～一方で would make anger and worry coexist instead of correcting the impression.", kawarini: "～かわりに expresses substitution or exchange between actions or conditions." }) }),
  Object.freeze({ id: "l4-to-iu-yori-check-03", type: "selection", correct: "toiumori", hint: "It was not really a holiday.", rationales: Object.freeze({ toiumori: "Correct. ～というより reclassifies the holiday as work done at home.", nikagiru: "～に限る recommends a best choice and cannot correct the label.", hodo: "～ほど expresses degree, not reclassification." }) }),

  Object.freeze({ id: "l4-kawari-ni-check-01", type: "selection", correct: "kawarini", hint: "Cooking and washing dishes are exchanged tasks.", rationales: Object.freeze({ kawarini: "Correct. ～かわりに marks washing dishes in return for the older brother cooking.", toiumori: "～というより corrects a description rather than exchange work.", nitaishite: "～に対して contrasts subjects but does not show reciprocal compensation." }) }),
  Object.freeze({ id: "l4-kawari-ni-check-02", type: "selection", correct: "kawarini", hint: "The bicycle substitutes for the train.", rationales: Object.freeze({ kawarini: "Correct. ～かわりに marks using the bicycle instead of going by train.", hanmen: "～反面 describes the reverse side of one situation, not a substituted action.", ippo: "～一方で would mean both actions coexist rather than one replacing the other." }) }),
  Object.freeze({ id: "l4-kawari-ni-check-03", type: "selection", correct: "kawarini", hint: "Low price is balanced by distance.", rationales: Object.freeze({ kawarini: "Correct. ～かわりに presents low price and inconvenient location as a trade-off.", nikagiru: "～に限る recommends the best option.", kurainara: "～くらいなら rejects an undesirable choice and proposes another." }) }),

  Object.freeze({ id: "l4-review-selection-01", type: "selection", correct: "nitaishite", hint: "The brothers are separate subjects.", rationales: Object.freeze({ nitaishite: "Correct. ～に対して contrasts the older brother's outdoor play with the younger brother's reading.", hanmen: "～反面 shows two sides of one subject; the subject changes from one brother to the other.", toiumori: "～というより would revise one description rather than compare the brothers." }) }),
  Object.freeze({ id: "l4-review-selection-02", type: "selection", correct: "hanmen", hint: "Interest and responsibility are two sides of one job.", rationales: Object.freeze({ hanmen: "Correct. ～反面 balances the job's appeal with its heavy responsibility.", nitaishite: "～に対して normally compares different subjects.", toiumori: "～というより would say one description is more accurate than another." }) }),
  Object.freeze({ id: "l4-review-selection-03", type: "selection", correct: "ippo", hint: "Work and community activity are parallel roles.", rationales: Object.freeze({ ippo: "Correct. ～一方で links two ongoing roles held by the mother.", kawarini: "～かわりに would make one activity a substitute or payment for the other.", nitaishite: "～に対して requires a second comparison subject." }) }),
  Object.freeze({ id: "l4-review-selection-04", type: "selection", correct: "toiumori", hint: "The second description corrects the first.", rationales: Object.freeze({ toiumori: "Correct. ～というより revises 'kind' to the more critical 'meddlesome.'", hanmen: "～反面 would treat the two qualities as opposing sides rather than choose the more accurate label.", ippo: "～一方で would present both qualities as coexisting facts." }) }),
  Object.freeze({ id: "l4-review-selection-05", type: "selection", correct: "kawarini", hint: "The siblings divide two household tasks.", rationales: Object.freeze({ kawarini: "Correct. ～かわりに marks cooking as the exchanged task for shopping.", nitaishite: "～に対して compares people but does not express the exchange.", toiumori: "～というより corrects wording, not responsibility." }) }),
  Object.freeze({ id: "l4-review-selection-06", type: "selection", correct: "nitaishite", hint: "The city and village are compared.", rationales: Object.freeze({ nitaishite: "Correct. ～に対して sets the convenient city against the nature-rich village.", hanmen: "～反面 would require both sides to describe one place.", kawarini: "～かわりに would suggest a trade-off within one arrangement." }) }),
  Object.freeze({ id: "l4-review-selection-07", type: "selection", correct: "ippo", hint: "Surprise and understanding coexist.", rationales: Object.freeze({ ippo: "Correct. ～一方で holds two simultaneous reactions to the statement.", toiumori: "～というより would replace surprise with understanding rather than retain both.", kawarini: "～かわりに suggests substitution or exchange." }) }),
  Object.freeze({ id: "l4-review-selection-08", type: "selection", correct: "toiumori", hint: "Report session is the more accurate label.", rationales: Object.freeze({ toiumori: "Correct. ～というより reclassifies the event from a meeting to a report session.", hanmen: "～反面 describes an opposite side of the same event.", nitaishite: "～に対して requires two subjects to compare." }) }),

  Object.freeze({ id: "l4-review-order-01", type: "ordering", correct: Object.freeze(["tokai", "da", "nitaishite", "shizuka"]), hint: "Complete the first na-adjective, attach なのに対して, then state the village result.", rationales: Object.freeze({ order: "都会はにぎやか・な・のに対して・村は静かだ。 The two places are directly contrasted." }) }),
  Object.freeze({ id: "l4-review-order-02", type: "ordering", correct: Object.freeze(["kiraku", "hanmen", "hitori", "fuben"]), hint: "State the benefit, turn to its reverse side, give the reason, then the drawback.", rationales: Object.freeze({ order: "一人旅は気楽な・反面・何でも一人なので・不便だ。 Solo travel's freedom is balanced by inconvenience." }) }),
  Object.freeze({ id: "l4-review-order-03", type: "ordering", correct: Object.freeze(["hayai", "aruku", "toiumori", "hashiru"]), hint: "Begin with the subject and manner, then replace walking with the sharper description.", rationales: Object.freeze({ order: "彼女は速く・歩く・というより・走る感じだ。 Running more accurately describes the speed." }) }),
  Object.freeze({ id: "l4-review-order-04", type: "ordering", correct: Object.freeze(["oshieru", "kawarini", "watashi", "tetsudau"]), hint: "Put the received help before かわりに and the returned help after it.", rationales: Object.freeze({ order: "英語を教えてもらう・かわりに・私は相手の・仕事を手伝う。 The two actions form an exchange." }) }),

  Object.freeze({ id: "l4-review-passage-01", type: "passage-blank", correct: "nitaishite", hint: "The new town and old town are different subjects.", rationales: Object.freeze({ nitaishite: "Correct. ～に対して compares the convenience of the new town with the calm old town.", hanmen: "～反面 would show two sides of one town.", toiumori: "～というより would correct one town's description rather than compare them." }) }),
  Object.freeze({ id: "l4-review-passage-02", type: "passage-blank", correct: "hanmen", hint: "Quietness and inconvenience are two sides of the same area.", rationales: Object.freeze({ hanmen: "Correct. ～反面 reveals the area's transportation drawback.", ippo: "～一方で is possible for broad parallel facts, but ～反面 is the precise benefit-versus-drawback evaluation here.", kawarini: "～かわりに suggests compensation or exchange more strongly than the passage intends." }) }),
  Object.freeze({ id: "l4-review-passage-03", type: "passage-blank", correct: "toiumori", hint: "Work is the more accurate classification.", rationales: Object.freeze({ toiumori: "Correct. ～というより revises the trip label to work researching the town.", nitaishite: "～に対して compares two subjects rather than two labels for one activity.", kawarini: "～かわりに would mean the work substituted for a trip, not that it was the true nature of the trip." }) }),

  Object.freeze({ id: "mixed-34-selection-01", type: "selection", correct: "hodo", hint: "The result measures an extreme degree.", rationales: Object.freeze({ hodo: "Correct. ～ほど marks nervousness so extreme that the speaker could not speak.", hanmen: "～反面 reveals another side of one subject.", nitaishite: "～に対して compares two subjects." }) }),
  Object.freeze({ id: "mixed-34-selection-02", type: "selection", correct: "hodo", hint: "Nothing equals this personal favorite.", rationales: Object.freeze({ hodo: "Correct. ～ほど…はない says nothing is as reassuring as the mother's cooking.", kawarini: "～かわりに expresses substitution, exchange, or a trade-off.", nitaishite: "～に対して requires a second comparison subject." }) }),
  Object.freeze({ id: "mixed-34-selection-03", type: "selection", correct: "kurainara", hint: "Reject the first choice and prefer the second.", rationales: Object.freeze({ kurainara: "Correct. ～くらいなら rejects forcing oneself to work and favors resting.", toiumori: "～というより corrects a description rather than choose an alternative.", kawarini: "～かわりに marks substitution or exchange without the strong rejection here." }) }),
  Object.freeze({ id: "mixed-34-selection-04", type: "selection", correct: "nikagiru", hint: "Give the speaker's best recommendation.", rationales: Object.freeze({ nikagiru: "Correct. ～に限る recommends sleeping early as the best response to a cold.", hanmen: "～反面 shows a reverse side.", ippo: "～一方で adds a parallel or contrasting fact." }) }),
  Object.freeze({ id: "mixed-34-selection-05", type: "selection", correct: "nitaishite", hint: "Two separate groups are compared.", rationales: Object.freeze({ nitaishite: "Correct. ～に対して compares young people moving away with older people remaining.", hanmen: "～反面 normally evaluates two sides of one subject.", ippo: "～一方で can divide groups, but the のに対して frame is the direct comparison required by the sentence." }) }),
  Object.freeze({ id: "mixed-34-selection-06", type: "selection", correct: "hanmen", hint: "One tool has a benefit and a drawback.", rationales: Object.freeze({ hanmen: "Correct. ～反面 balances the app's convenience with high battery use.", nitaishite: "～に対して compares separate subjects.", toiumori: "～というより would replace the first description with the second." }) }),
  Object.freeze({ id: "mixed-34-selection-07", type: "selection", correct: "ippo", hint: "Two duties continue in parallel.", rationales: Object.freeze({ ippo: "Correct. ～一方で connects research and student supervision as parallel duties.", hanmen: "～反面 would make supervision an opposite drawback.", kawarini: "～かわりに would make one duty a substitute or exchange for the other." }) }),
  Object.freeze({ id: "mixed-34-selection-08", type: "selection", correct: "toiumori", hint: "The second label is more accurate.", rationales: Object.freeze({ toiumori: "Correct. ～というより reclassifies the failure as a valuable experience.", nitaishite: "～に対して compares two subjects.", kawarini: "～かわりに means instead of or in exchange, not 'more accurately.'" }) }),
  Object.freeze({ id: "mixed-34-selection-09", type: "selection", correct: "kawarini", hint: "One favor is returned with another.", rationales: Object.freeze({ kawarini: "Correct. ～かわりに marks teaching Japanese in exchange for English lessons.", ippo: "～一方で would only make the two activities parallel, not reciprocal.", hanmen: "～反面 would present one as a drawback of the other." }) }),
  Object.freeze({ id: "mixed-34-selection-10", type: "selection", correct: "toiumori", hint: "Correct a mistaken weather description.", rationales: Object.freeze({ toiumori: "Correct. ～というより replaces 'cool' with the more accurate 'cold.'", hodo: "～ほど expresses degree.", nikagiru: "～に限る recommends a best choice." }) }),

  Object.freeze({ id: "mixed-34-order-01", type: "ordering", correct: Object.freeze(["kinou", "nemurenai", "hodo", "atsukatta"]), hint: "Put the measurable result before ほど.", rationales: Object.freeze({ order: "昨日は・眠れない・ほど・暑かった。 Not being able to sleep measures the heat." }) }),
  Object.freeze({ id: "mixed-34-order-02", type: "ordering", correct: Object.freeze(["harau", "kurainara", "yasui", "ho-ga-ii"]), hint: "Reject the expensive option before the preferred one.", rationales: Object.freeze({ order: "高い料金を払う・くらいなら・安い店を探す・ほうがいい。 The expensive option is rejected." }) }),
  Object.freeze({ id: "mixed-34-order-03", type: "ordering", correct: Object.freeze(["ani", "futsukei", "nitaishite", "ototo"]), hint: "Complete the older brother's clause before のに対して.", rationales: Object.freeze({ order: "兄は・よく話す・のに対して・弟は静かだ。 The brothers are directly compared." }) }),
  Object.freeze({ id: "mixed-34-order-04", type: "ordering", correct: Object.freeze(["sakuhin", "shosetsu", "toiumori", "kiroku"]), hint: "Put the first label immediately before というより.", rationales: Object.freeze({ order: "この作品は・小説・というより・記録に近い。 Record is the more accurate classification." }) }),
  Object.freeze({ id: "mixed-34-order-05", type: "ordering", correct: Object.freeze(["oshieru", "kawarini", "watashi", "ryori"]), hint: "Put the received favor before かわりに.", rationales: Object.freeze({ order: "勉強を教えてもらう・かわりに・私は・料理を作る。 Cooking repays the study help." }) }),

  Object.freeze({ id: "mixed-34-passage-01", type: "passage-blank", correct: "hodo", hint: "The workload reaches an extreme degree.", rationales: Object.freeze({ hodo: "Correct. ～ほど marks a week so busy there was no time to sleep.", nitaishite: "～に対して compares two subjects.", kawarini: "～かわりに expresses substitution or exchange." }) }),
  Object.freeze({ id: "mixed-34-passage-02", type: "passage-blank", correct: "nikagiru", hint: "Give the best method for improving.", rationales: Object.freeze({ nikagiru: "Correct. ～に限る recommends speaking daily as the best method.", hanmen: "～反面 introduces a reverse side.", toiumori: "～というより corrects a description." }) }),
  Object.freeze({ id: "mixed-34-passage-03", type: "passage-blank", correct: "hanmen", hint: "The same program has a benefit and a drawback.", rationales: Object.freeze({ hanmen: "Correct. ～反面 balances the practical course with its heavy homework.", ippo: "～一方で is broader, but ～反面 is the precise advantage-versus-disadvantage evaluation.", nitaishite: "～に対して requires another comparison subject." }) }),
  Object.freeze({ id: "mixed-34-passage-04", type: "passage-blank", correct: "ippo", hint: "Study and work continue in parallel.", rationales: Object.freeze({ ippo: "Correct. ～一方で links school and weekend work as parallel roles.", kawarini: "～かわりに would make work compensation or a substitute for study.", kurainara: "～くらいなら would reject one role and prefer another." }) }),
  Object.freeze({ id: "mixed-34-passage-05", type: "passage-blank", correct: "kawarini", hint: "One favor is repaid with another.", rationales: Object.freeze({ kawarini: "Correct. ～かわりに marks Japanese writing help in exchange for pronunciation correction.", toiumori: "～というより corrects a label rather than exchange help.", nitaishite: "～に対して compares separate subjects without expressing reciprocity." }) }),
]);
