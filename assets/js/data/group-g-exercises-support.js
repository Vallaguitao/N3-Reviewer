/* Authored study support for Group G book exercises.
 * Load after part2-quiz-data.js and before quiz.js. The generated source remains intact.
 * Only these 28 records are enriched; original answer keys and question types are retained.
 */
(function (root) {
  "use strict";
  if (typeof document !== "undefined" && document.body?.dataset.page !== "group-g") return;
  const support = [
  {
    "id": "gg-book-1-01",
    "hint": "Who added the hot water, and why?",
    "translation": "The soup tasted too strong, so I added hot water to dilute it.",
    "correctExplanation": "The soup’s strong taste motivates an adjustment. The speaker adds water to bring about that adjustment. 薄い becomes 薄く before した: made it weaker.",
    "rationales": {
      "a": "した highlights the deliberate adjustment made by adding hot water.",
      "b": "なった would shift the focus to the soup becoming weaker; the intended sentence describes what the speaker did to it."
    },
    "studyGuide": {
      "reading": "した",
      "strongerHint": "お湯を入れて gives the deliberate action used to change the soup’s strength.",
      "clue": "The speaker performs an action to make the soup less concentrated.",
      "steps": [
        "The soup’s strong taste motivates an adjustment.",
        "The speaker adds water to bring about that adjustment.",
        "薄い becomes 薄く before した: made it weaker."
      ],
      "trap": "A sentence ending 薄くなった could describe the soup’s resulting change in a different framing. This item continues the account of the action taken to dilute it.",
      "reviewHref": "#gg-state",
      "sentence": "スープの味が濃かったから、お湯を入れて薄く（　）。",
      "choiceTexts": {
        "a": "した",
        "b": "なった"
      }
    }
  },
  {
    "id": "gg-book-1-02",
    "hint": "Is the listener asked to paint the apple, or to wait for a change in it?",
    "translation": "When the apple turns red, you may pick it from the tree and eat it.",
    "correctExplanation": "The apple is the thing whose color changes. が marks that changing subject. 赤い becomes 赤く, and なったら means “when it has turned red.”",
    "rationales": {
      "a": "を赤くしたら describes deliberately making the apple red, which is not the ripening condition intended here.",
      "b": "が赤くなったら correctly describes the apple turning red."
    },
    "studyGuide": {
      "reading": "があかくなったら",
      "strongerHint": "Picking and eating the apple follows its turning red on the tree.",
      "clue": "The apple’s changed color is the condition for picking it.",
      "steps": [
        "The apple is the thing whose color changes.",
        "が marks that changing subject.",
        "赤い becomes 赤く, and なったら means “when it has turned red.”"
      ],
      "trap": "を赤くしたら would mean someone makes the apple red. Do not confuse a change serving as the condition with an instruction to cause that change.",
      "reviewHref": "#gg-state",
      "sentence": "りんご（　）、木から取って食べてもいいよ。",
      "choiceTexts": {
        "a": "を赤くしたら",
        "b": "が赤くなったら"
      }
    }
  },
  {
    "id": "gg-book-1-03",
    "hint": "What happened to the festival after the television coverage?",
    "translation": "Because it was featured on television, this town’s festival became famous.",
    "correctExplanation": "The television program introduces the festival. The festival then becomes famous. 有名 is a な-adjective, so 有名になった expresses that change.",
    "rationales": {
      "a": "有名にした would highlight an agent making something famous; the festival here is the thing becoming famous.",
      "b": "有名になった correctly describes the festival’s resulting state."
    },
    "studyGuide": {
      "reading": "ゆうめいになった",
      "strongerHint": "この町の祭りは is the topic that gains fame; no agent making another object famous is stated.",
      "clue": "The coverage is the cause, and the festival’s new fame is the result.",
      "steps": [
        "The television program introduces the festival.",
        "The festival then becomes famous.",
        "有名 is a な-adjective, so 有名になった expresses that change."
      ],
      "trap": "A named cause does not force する. ので can explain why a change expressed with なる occurred.",
      "reviewHref": "#gg-basic",
      "sentence": "テレビで紹介されたので、この町の祭りは（　）。",
      "choiceTexts": {
        "a": "有名にした",
        "b": "有名になった"
      }
    }
  },
  {
    "id": "gg-book-1-04",
    "hint": "The setting is a hair salon. What action is the customer requesting from the stylist?",
    "translation": "At the hair salon: “Please make it about ten centimeters shorter today.”",
    "correctExplanation": "The stylist is the person who will make the change. 短い becomes 短く before する. して + ください requests that action politely.",
    "rationales": {
      "a": "短くして correctly asks the stylist to make the hair shorter.",
      "b": "短くなって describes becoming shorter and does not fit this request for the stylist’s action."
    },
    "studyGuide": {
      "reading": "みじかくして",
      "strongerHint": "ください follows the action to be performed on the customer’s hair.",
      "clue": "The customer asks the stylist to shorten the hair.",
      "steps": [
        "The stylist is the person who will make the change.",
        "短い becomes 短く before する.",
        "して + ください requests that action politely."
      ],
      "trap": "短くなって would ask for becoming shorter rather than ask the stylist to shorten the hair. The setting supplies the omitted object.",
      "reviewHref": "#gg-state",
      "sentence": "【美容院で】今日は10センチぐらい（　）ください。",
      "choiceTexts": {
        "a": "短くして",
        "b": "短くなって"
      }
    }
  },
  {
    "id": "gg-book-1-05",
    "hint": "Is B reporting a recovery, or describing an action they performed on something?",
    "translation": "A: “How is your child’s cold?” B: “Yes, it has got much better.”",
    "correctExplanation": "The child’s condition is the focus. いい uses the stem よく before なる. よくなりました means it has improved.",
    "rationales": {
      "a": "しました would describe an actor improving something rather than simply report how the child is doing.",
      "b": "なりました correctly describes the improved condition."
    },
    "studyGuide": {
      "reading": "なりました",
      "strongerHint": "The question asks how the child’s cold is now.",
      "clue": "The reply reports an improvement in the child’s condition.",
      "steps": [
        "The child’s condition is the focus.",
        "いい uses the stem よく before なる.",
        "よくなりました means it has improved."
      ],
      "trap": "よくしました would foreground making something better. The exchange asks for the resulting condition, not the treatment actions.",
      "reviewHref": "#gg-state",
      "sentence": "A「お子さんのかぜ、いかがですか。」 B「はい、だいぶよく（　）。」",
      "choiceTexts": {
        "a": "しました",
        "b": "なりました"
      }
    }
  },
  {
    "id": "gg-book-1-06",
    "hint": "What has been decided about the library’s old books?",
    "translation": "It has been decided that the library’s old books will be discarded.",
    "correctExplanation": "Old books are the things to be discarded. 捨てられる keeps that passive viewpoint. ことになった reports the settled arrangement.",
    "rationales": {
      "a": "した would highlight someone’s own decision, but the given passive clause presents the books’ settled treatment rather than an actor choosing to discard them.",
      "b": "なった fits the reported arrangement that the books will be discarded."
    },
    "studyGuide": {
      "reading": "なった",
      "strongerHint": "捨てられる is passive: the books will be discarded.",
      "clue": "The clause reports the books’ passive role in an institutional arrangement.",
      "steps": [
        "Old books are the things to be discarded.",
        "捨てられる keeps that passive viewpoint.",
        "ことになった reports the settled arrangement."
      ],
      "trap": "To foreground a person’s decision to discard them, a different sentence could use 捨てることにした. Preserve the passive wording in the given sentence.",
      "reviewHref": "#gg-decision",
      "sentence": "図書館では古い本は捨てられることに（　）。",
      "choiceTexts": {
        "a": "した",
        "b": "なった"
      }
    }
  },
  {
    "id": "gg-book-1-07",
    "hint": "Does 退院できる describe a deliberate action alone, or a possibility that has been settled?",
    "translation": "It has been arranged that I can leave the hospital tomorrow.",
    "correctExplanation": "The subject is the speaker, but the clause includes potential できる. The speaker reports that discharge tomorrow is now possible under the arrangement. ことになりました expresses that settled outcome.",
    "rationales": {
      "a": "しました would present the matter as the speaker’s own decision; it does not fit the intended report about being able to leave.",
      "b": "なりました correctly reports the settled possibility of discharge."
    },
    "studyGuide": {
      "reading": "なりました",
      "strongerHint": "できる is already printed: the speaker reports being able to leave the hospital tomorrow.",
      "clue": "退院できる gives the possibility reported as settled.",
      "steps": [
        "The subject is the speaker, but the clause includes potential できる.",
        "The speaker reports that discharge tomorrow is now possible under the arrangement.",
        "ことになりました expresses that settled outcome."
      ],
      "trap": "A first-person topic does not automatically require する. Decide whether the speaker is choosing an action or reporting what has become possible or arranged.",
      "reviewHref": "#gg-decision",
      "sentence": "わたしはあした退院できることに（　）。",
      "choiceTexts": {
        "a": "しました",
        "b": "なりました"
      }
    }
  },
  {
    "id": "gg-book-1-08",
    "hint": "Is the speaker choosing an amount of rice, or describing rice changing into something?",
    "translation": "I want to reduce my weight, so I’ll limit my rice to one bowl per meal.",
    "correctExplanation": "One bowl is the chosen limit. Noun quantity + にする expresses that choice. しよう is the volitional form used for the speaker’s decision.",
    "rationales": {
      "a": "しよう correctly expresses choosing to limit the amount to one bowl.",
      "b": "なろう would express becoming or trying to become, not choosing this meal quantity."
    },
    "studyGuide": {
      "reading": "しよう",
      "strongerHint": "減らしたい gives a personal aim, and １杯だけ is the chosen limit.",
      "clue": "The speaker decides on a quantity for their own meals.",
      "steps": [
        "One bowl is the chosen limit.",
        "Noun quantity + にする expresses that choice.",
        "しよう is the volitional form used for the speaker’s decision."
      ],
      "trap": "The sentence practices a personal choice about an amount. なろう would mean “let’s become,” which does not express setting this limit.",
      "reviewHref": "#gg-decision",
      "sentence": "体重を減らしたいから、ご飯は毎食茶わん１杯だけに（　）。",
      "choiceTexts": {
        "a": "しよう",
        "b": "なろう"
      }
    }
  },
  {
    "id": "gg-book-1-09",
    "hint": "Is the question about the listener’s personal choice, or the settled location of an event?",
    "translation": "Where has been chosen for the next Winter Olympics?",
    "correctExplanation": "The question concerns the event’s venue. The speaker asks for the result of the selection. どこになりましたか means “where was it settled to be?”",
    "rationales": {
      "a": "しましたか would ask about someone’s act of choosing the place, which is not the viewpoint established here.",
      "b": "なりましたか correctly asks for the settled venue."
    },
    "studyGuide": {
      "reading": "なりましたか",
      "strongerHint": "The event’s location is being asked about as an arrangement.",
      "clue": "どこに asks for the location that has been settled.",
      "steps": [
        "The question concerns the event’s venue.",
        "The speaker asks for the result of the selection.",
        "どこになりましたか means “where was it settled to be?”"
      ],
      "trap": "どこにしましたか can ask someone where they personally chose. This context asks for the event’s established venue, without treating the listener as the chooser.",
      "reviewHref": "#gg-decision",
      "sentence": "今度の冬のオリンピックはどこに（　）。",
      "choiceTexts": {
        "a": "しましたか",
        "b": "なりましたか"
      }
    }
  },
  {
    "id": "gg-book-1-10",
    "hint": "Who maintains the practice of writing down important things?",
    "translation": "I make it a rule to note down anything important.",
    "correctExplanation": "Taking notes is the chosen action. ことにする can express deciding on that action. ことにしている describes maintaining it as a personal rule.",
    "rationales": {
      "a": "している correctly emphasizes the speaker’s maintained personal rule.",
      "b": "なっている would present note-taking as an established arrangement or requirement rather than the personal practice intended here."
    },
    "studyGuide": {
      "reading": "している",
      "strongerHint": "わたしは and 何でもメモする describe the speaker’s own continuing rule.",
      "clue": "The speaker describes a personal practice they keep following.",
      "steps": [
        "Taking notes is the chosen action.",
        "ことにする can express deciding on that action.",
        "ことにしている describes maintaining it as a personal rule."
      ],
      "trap": "ことになっている could describe an assigned requirement in another context. Here no external rule is stated; the speaker presents a chosen habit.",
      "reviewHref": "#gg-pattern",
      "sentence": "わたしは大事なことは何でもメモすることに（　）。",
      "choiceTexts": {
        "a": "している",
        "b": "なっている"
      }
    }
  },
  {
    "id": "gg-book-1-11",
    "hint": "Who or what establishes the restriction on fireworks?",
    "translation": "I hear that fireworks are prohibited in this park.",
    "correctExplanation": "してはいけない states the prohibition. ことになっている presents it as the established rule. そうだ adds the hearsay meaning “I hear.”",
    "rationales": {
      "a": "している would frame the restriction as someone’s maintained personal decision, rather than the reported park rule.",
      "b": "なっている correctly expresses the established prohibition."
    },
    "studyGuide": {
      "reading": "なっている",
      "strongerHint": "この公園では frames the statement as a park rule, and そうだ reports that information.",
      "clue": "The sentence reports an established prohibition applying in the park.",
      "steps": [
        "してはいけない states the prohibition.",
        "ことになっている presents it as the established rule.",
        "そうだ adds the hearsay meaning “I hear.”"
      ],
      "trap": "Keep the prohibition inside the rule. The sentence does not describe the speaker personally choosing never to use fireworks.",
      "reviewHref": "#gg-pattern",
      "sentence": "この公園では花火をしてはいけないことに（　）そうだ。",
      "choiceTexts": {
        "a": "している",
        "b": "なっている"
      }
    }
  },
  {
    "id": "gg-book-1-12",
    "hint": "What develops as children grow: an ability, or their decision to create an ability for someone else?",
    "translation": "At what age do children become able to walk?",
    "correctExplanation": "歩く becomes potential 歩ける. The question concerns the development of that ability. 歩けるようになる expresses becoming able to walk.",
    "rationales": {
      "a": "するんですか would ask about deliberately making the ability possible, which is not the developmental question intended here.",
      "b": "なるんですか correctly asks when children become able to walk."
    },
    "studyGuide": {
      "reading": "なるんですか",
      "strongerHint": "歩ける is potential, “can walk,” and the question asks when that ability develops.",
      "clue": "歩ける names the new ability being asked about.",
      "steps": [
        "歩く becomes potential 歩ける.",
        "The question concerns the development of that ability.",
        "歩けるようになる expresses becoming able to walk."
      ],
      "trap": "This sentence asks about a developmental change. ようにする would need a viewpoint of someone arranging or working to bring about the ability.",
      "reviewHref": "#gg-purpose",
      "sentence": "子どもは何歳で歩けるように（　）。",
      "choiceTexts": {
        "a": "するんですか",
        "b": "なるんですか"
      }
    }
  },
  {
    "id": "gg-book-1-13",
    "hint": "Is this an encouragement to act carefully, or a report that a new habit has developed?",
    "translation": "Let’s make a point of chewing our food well when we eat.",
    "correctExplanation": "The action is chewing well and eating. ようにする B encourages taking care to perform that action. しましょう is the polite volitional encouragement.",
    "rationales": {
      "a": "しましょう correctly encourages deliberate care in eating.",
      "b": "なりましょう would describe or urge becoming a state rather than naturally ask for this conscious practice."
    },
    "studyGuide": {
      "reading": "しましょう",
      "strongerHint": "よくかんで食べる names the deliberate action the speaker encourages.",
      "clue": "The ending is an exhortation about conscious behavior.",
      "steps": [
        "The action is chewing well and eating.",
        "ようにする B encourages taking care to perform that action.",
        "しましょう is the polite volitional encouragement."
      ],
      "trap": "Do not use なる just because the speaker hopes for a good outcome. This sentence encourages an action people can consciously carry out.",
      "reviewHref": "#gg-habit",
      "sentence": "食べ物はよくかんで食べるように（　）。",
      "choiceTexts": {
        "a": "しましょう",
        "b": "なりましょう"
      }
    }
  },
  {
    "id": "gg-book-1-14",
    "hint": "Is the sentence about the cat choosing a habit, or how its eyes function?",
    "translation": "A cat’s eyes function so that the amount of incoming light can be regulated.",
    "correctExplanation": "The topic is the cat’s eyes, not a person maintaining a habit. 調節できる expresses a functional ability. ようになっている describes the way that function is provided.",
    "rationales": {
      "a": "している would foreground deliberately arranging or maintaining conditions; this sentence explains the eyes’ built-in function.",
      "b": "なっている correctly describes how the eyes function."
    },
    "studyGuide": {
      "reading": "なっている",
      "strongerHint": "ねこの目 is the topic, and 調節できる describes the enabled function.",
      "clue": "The clause describes an ability provided by the eyes’ structure.",
      "steps": [
        "The topic is the cat’s eyes, not a person maintaining a habit.",
        "調節できる expresses a functional ability.",
        "ようになっている describes the way that function is provided."
      ],
      "trap": "The function use is not limited to human-made devices. Here the same grammar describes a biological structure, without treating it as a conscious practice.",
      "reviewHref": "#gg-purpose",
      "sentence": "ねこの目は、入ってくる光の量を調節できるように（　）。",
      "choiceTexts": {
        "a": "している",
        "b": "なっている"
      }
    }
  },
  {
    "id": "gg-book-1-15",
    "hint": "What is the teacher instructing the students to take care to avoid?",
    "translation": "Teacher: “These are important documents, so make sure you do not make mistakes when writing.”",
    "correctExplanation": "書き間違えない means not making writing mistakes. ようにする asks for deliberate care to avoid them. Sentence-final こと turns the statement into an instruction.",
    "rationales": {
      "a": "すること correctly instructs the students to make sure they avoid mistakes.",
      "b": "なること would describe a change into a state rather than tell students to exercise care."
    },
    "studyGuide": {
      "reading": "すること",
      "strongerHint": "The final こと gives an instruction; 書き間違えない is the desired avoidance.",
      "clue": "The teacher tells the students to exercise care with the documents.",
      "steps": [
        "書き間違えない means not making writing mistakes.",
        "ようにする asks for deliberate care to avoid them.",
        "Sentence-final こと turns the statement into an instruction."
      ],
      "trap": "There are two structures here: ようにする for careful action, followed by instructional こと. Do not confuse this final こと with the decision pattern ことにする.",
      "reviewHref": "#gg-habit",
      "sentence": "先生「大切な書類だから、書き間違えないように（　）。」",
      "choiceTexts": {
        "a": "すること",
        "b": "なること"
      }
    }
  },
  {
    "id": "gg-book-2-01",
    "hint": "Read why Lin is packing. Is this a decision to move once, or an effort to develop a repeated habit?",
    "translation": "I decided to move.",
    "correctExplanation": "Lin is preparing for a specific move. 引っ越しする is the action chosen. ことにした expresses the decision to carry it out.",
    "rationales": {
      "a": "ことに correctly forms the decision 引っ越しすることにした.",
      "b": "ように would shift toward arranging a result or making a practice of moving, rather than naming this decision."
    },
    "studyGuide": {
      "reading": "ことに",
      "strongerHint": "The conversation concerns a particular upcoming move.",
      "clue": "Packing is explained by a decision about the upcoming move.",
      "steps": [
        "Lin is preparing for a specific move.",
        "引っ越しする is the action chosen.",
        "ことにした expresses the decision to carry it out."
      ],
      "trap": "ようにした could describe arranging conditions or developing a practice in another setting. Here the question is the one-time decision behind the packing.",
      "reviewHref": "#gg-decision",
      "sentence": "引っ越しする（　）したんです。",
      "choiceTexts": {
        "a": "ことに",
        "b": "ように"
      }
    }
  },
  {
    "id": "gg-book-2-02",
    "hint": "Is living with the brother already a changed habit, or an arrangement that starts next month?",
    "translation": "It has been arranged that I will live with my younger brother from next month, so…",
    "correctExplanation": "The plan starts next month. 住む is the content of that arrangement. ことになった reports that it has been settled.",
    "rationales": {
      "a": "ことに correctly introduces the settled future living arrangement.",
      "b": "ように would describe a developed change in living circumstances rather than the intended report of the plan."
    },
    "studyGuide": {
      "reading": "ことに",
      "strongerHint": "来月から and the need for a larger room establish an upcoming living arrangement.",
      "clue": "The joint living plan explains why the current room is too small.",
      "steps": [
        "The plan starts next month.",
        "住む is the content of that arrangement.",
        "ことになった reports that it has been settled."
      ],
      "trap": "住むようになった can describe coming to live somewhere as a change. The dialogue instead reports the future arrangement that motivates the move.",
      "reviewHref": "#gg-decision",
      "sentence": "来月から弟といっしょに住む（　）なったので……。",
      "choiceTexts": {
        "a": "ことに",
        "b": "ように"
      }
    }
  },
  {
    "id": "gg-book-2-03",
    "hint": "Why does living farther from work make oversleeping a concern?",
    "translation": "Then you’ll have to make sure you do not oversleep.",
    "correctExplanation": "寝坊しない is the desired negative outcome. ようにする expresses taking care to achieve that outcome. しなければね leaves “must do so” understood in the conversational ending.",
    "rationales": {
      "a": "ことに would frame the issue as making a decision, rather than the precautionary advice prompted by the longer commute.",
      "b": "ように correctly expresses taking care not to oversleep."
    },
    "studyGuide": {
      "reading": "ように",
      "strongerHint": "A is advising care to prevent an unwanted result, not choosing a scheduled event.",
      "clue": "The longer commute motivates taking care not to oversleep.",
      "steps": [
        "寝坊しない is the desired negative outcome.",
        "ようにする expresses taking care to achieve that outcome.",
        "しなければね leaves “must do so” understood in the conversational ending."
      ],
      "trap": "ことにしなければ would mean needing to make a decision. This reply naturally advises ongoing care; the Japanese leaves the rest of the necessity expression implicit.",
      "reviewHref": "#gg-habit",
      "sentence": "じゃ、寝坊しない（　）しなければね。",
      "choiceTexts": {
        "a": "ことに",
        "b": "ように"
      }
    }
  },
  {
    "id": "gg-book-2-04",
    "hint": "Why is Lin getting a bicycle? Is it one purchase or a continuing shopping practice?",
    "translation": "I decided to buy a bicycle.",
    "correctExplanation": "The move creates a transport need in the dialogue. 買う is the action Lin chooses. ことにしました reports deciding on that action.",
    "rationales": {
      "a": "ことに correctly expresses the decision to buy a bicycle.",
      "b": "ように would emphasize arranging conditions or making a practice of buying, which is not this one-time choice."
    },
    "studyGuide": {
      "reading": "ことに",
      "strongerHint": "The new place is far from the station, so Lin chooses to buy a bicycle.",
      "clue": "Distance from the station provides a reason for the specific purchase decision.",
      "steps": [
        "The move creates a transport need in the dialogue.",
        "買う is the action Lin chooses.",
        "ことにしました reports deciding on that action."
      ],
      "trap": "The fact that an action has a purpose does not automatically require ようにする. This sentence directly states a purchase decision.",
      "reviewHref": "#gg-decision",
      "sentence": "自転車を買う（　）しました。",
      "choiceTexts": {
        "a": "ことに",
        "b": "ように"
      }
    }
  },
  {
    "id": "gg-book-2-05",
    "hint": "What does tomorrow morning at nine tell you about the truck’s arrival?",
    "translation": "It has been arranged that the moving truck will come tomorrow morning at nine.",
    "correctExplanation": "The truck is coming for the planned move. The scheduled event is 来る. ことになった reports that this arrangement has been settled.",
    "rationales": {
      "a": "ことに correctly marks the settled arrangement for the truck.",
      "b": "ように would describe a developed pattern of coming rather than the one scheduled arrival given in the conversation."
    },
    "studyGuide": {
      "reading": "ことに",
      "strongerHint": "A specific arrival time has been arranged for the move.",
      "clue": "The full dialogue gives a specific scheduled arrival.",
      "steps": [
        "The truck is coming for the planned move.",
        "The scheduled event is 来る.",
        "ことになった reports that this arrangement has been settled."
      ],
      "trap": "来るようになった would describe starting to come as a new pattern. Do not turn this one scheduled arrival into a repeated change.",
      "reviewHref": "#gg-decision",
      "sentence": "引っ越しのトラックが来る（　）なったんです。",
      "choiceTexts": {
        "a": "ことに",
        "b": "ように"
      }
    }
  },
  {
    "id": "gg-book-2-06",
    "hint": "Why can Lin decline the offer of help?",
    "translation": "My younger brother and his friend are scheduled to come and help shortly.",
    "correctExplanation": "Lin already has helpers arranged. 手伝いに来る is their scheduled action. ことになっている reports that the arrangement is currently in place.",
    "rationales": {
      "a": "ことに correctly introduces the existing schedule for the helpers.",
      "b": "ように would describe a function or established behavioral change, rather than the specific help arrangement in this reply."
    },
    "studyGuide": {
      "reading": "ことに",
      "strongerHint": "The brother and his friend are already scheduled to come and help.",
      "clue": "The existing help arrangement makes an additional offer unnecessary.",
      "steps": [
        "Lin already has helpers arranged.",
        "手伝いに来る is their scheduled action.",
        "ことになっている reports that the arrangement is currently in place."
      ],
      "trap": "The ending なっている does not necessarily describe a permanent rule. Here it reports an upcoming event that is already scheduled.",
      "reviewHref": "#gg-pattern",
      "sentence": "弟と弟の友だちが手伝いに来る（　）なっていますから。",
      "choiceTexts": {
        "a": "ことに",
        "b": "ように"
      }
    }
  },
  {
    "id": "gg-book-onepoint-01",
    "hint": "Is the speaker describing what they choose to eat, or an ability made possible by a setup?",
    "translation": "I try to eat fish rather than meat whenever possible.",
    "correctExplanation": "Eating fish is the chosen action. 魚を食べる gives that action and its object. ようにしている describes making a point of doing it.",
    "rationales": {
      "a": "魚を食べる correctly gives the deliberate action for this habit.",
      "b": "魚が食べられる describes ability, not the conscious choice of food intended in this sentence."
    },
    "studyGuide": {
      "reading": "さかなをたべる",
      "strongerHint": "なるべく and わたしは frame a conscious food preference.",
      "clue": "The speaker makes a deliberate practice of choosing fish.",
      "steps": [
        "Eating fish is the chosen action.",
        "魚を食べる gives that action and its object.",
        "ようにしている describes making a point of doing it."
      ],
      "trap": "魚が食べられるようにしている could describe maintaining conditions that make eating fish possible. That purpose-A reading is different from the personal habit being practiced here.",
      "reviewHref": "#gg-onepoint",
      "sentence": "わたしはなるべく肉よりも（　）ようにしている。",
      "choiceTexts": {
        "a": "魚を食べる",
        "b": "魚が食べられる"
      }
    }
  },
  {
    "id": "gg-book-onepoint-02",
    "hint": "What happens automatically after the gas has been used for a long time?",
    "translation": "Our kitchen is set up so that the flame goes out when the gas has been used for a long time.",
    "correctExplanation": "The long period of gas use is the condition. The resulting event is the flame going out. 火が消える uses the intransitive result verb before ようになっている.",
    "rationales": {
      "a": "火を消す describes an actor putting out the flame, rather than the result-focused function of the setup in this item.",
      "b": "火が消える correctly describes the flame going out."
    },
    "studyGuide": {
      "reading": "ひがきえる",
      "strongerHint": "The kitchen setup produces the result; no person extinguishing the flame is the focus.",
      "clue": "The condition triggers a result provided by the setup.",
      "steps": [
        "The long period of gas use is the condition.",
        "The resulting event is the flame going out.",
        "火が消える uses the intransitive result verb before ようになっている."
      ],
      "trap": "消す and 消える are different verbs. 火を消す foregrounds an agent extinguishing the flame; 火が消える describes the result itself.",
      "reviewHref": "#gg-onepoint",
      "sentence": "うちの台所は、長い時間ガスを使うと（　）ようになっている。",
      "choiceTexts": {
        "a": "火を消す",
        "b": "火が消える"
      }
    }
  },
  {
    "id": "gg-book-onepoint-03",
    "hint": "What does the hotel arrangement allow guests to do?",
    "translation": "The hotel is set up so that guests can make phone calls even while taking a bath.",
    "correctExplanation": "The topic is the hotel’s arrangement. The enabled ability is making a call. 電話がかけられる uses potential before ようになっている.",
    "rationales": {
      "a": "電話をかける gives the deliberate action itself, without the enabled-ability meaning this facility description needs.",
      "b": "電話がかけられる correctly states the ability provided by the setup."
    },
    "studyGuide": {
      "reading": "でんわがかけられる",
      "strongerHint": "The sentence describes an available facility, not a habit of choosing to make calls.",
      "clue": "The setup enables an action under the stated circumstances.",
      "steps": [
        "The topic is the hotel’s arrangement.",
        "The enabled ability is making a call.",
        "電話がかけられる uses potential before ようになっている."
      ],
      "trap": "The sentence describes what is possible, not a requirement that guests make calls. Read the potential ending rather than relying on the noun 電話 alone.",
      "reviewHref": "#gg-onepoint",
      "sentence": "ホテルでは、お風呂に入っていても（　）ようになっている。",
      "choiceTexts": {
        "a": "電話をかける",
        "b": "電話がかけられる"
      }
    }
  },
  {
    "id": "gg-book-onepoint-04",
    "hint": "After someone claps, what does the toy do?",
    "translation": "This toy is interesting. It is designed so that the doll moves when you clap your hands.",
    "correctExplanation": "Someone claps their hands. The doll then moves as the toy’s response. 人形が動く expresses that result before ようになっている.",
    "rationales": {
      "a": "人形を動かす describes an actor moving the doll, which changes the intended focus of the toy’s response.",
      "b": "人形が動く correctly describes the doll moving."
    },
    "studyGuide": {
      "reading": "にんぎょうがうごく",
      "strongerHint": "The clap is the trigger; the doll’s movement is the response.",
      "clue": "手をたたくと supplies the trigger for the toy’s function.",
      "steps": [
        "Someone claps their hands.",
        "The doll then moves as the toy’s response.",
        "人形が動く expresses that result before ようになっている."
      ],
      "trap": "The person clapping is not also described as manually moving the doll. Keep the trigger and the toy’s response separate.",
      "reviewHref": "#gg-onepoint",
      "sentence": "このおもちゃは面白い。手をたたくと（　）ようになっている。",
      "choiceTexts": {
        "a": "人形を動かす",
        "b": "人形が動く"
      }
    }
  },
  {
    "id": "gg-book-onepoint-05",
    "hint": "What action can the listener consciously make a point of doing?",
    "translation": "For your health, please make a point of being physically active whenever possible.",
    "correctExplanation": "The listener is asked to do something deliberately. 体を動かす means move one’s body. ようにしてください requests conscious care or practice.",
    "rationales": {
      "a": "体を動かす correctly supplies the deliberate action requested.",
      "b": "体が動く would describe the body’s movement as a result, rather than the requested conscious activity."
    },
    "studyGuide": {
      "reading": "からだをうごかす",
      "strongerHint": "してください requests deliberate behavior.",
      "clue": "The sentence asks the listener to take action with their body.",
      "steps": [
        "The listener is asked to do something deliberately.",
        "体を動かす means move one’s body.",
        "ようにしてください requests conscious care or practice."
      ],
      "trap": "体が動く describes the body moving or being able to move in a different context. Here the point is what the listener is asked to do.",
      "reviewHref": "#gg-onepoint",
      "sentence": "健康のためになるべく（　）ようにしてください。",
      "choiceTexts": {
        "a": "体を動かす",
        "b": "体が動く"
      }
    }
  },
  {
    "id": "gg-book-onepoint-06",
    "hint": "Does the door rely on outsiders choosing not to look, or prevent the inside from being visible?",
    "translation": "Through this door you can see outside from inside, but it is designed so that the inside cannot be seen from outside.",
    "correctExplanation": "The inside view outward is available. The view inward from outside is blocked by the arrangement. 中が見えない describes that lack of visibility.",
    "rationales": {
      "a": "中を見ない describes someone choosing not to look inside; a door cannot ensure that personal choice.",
      "b": "中が見えない correctly describes the visibility blocked by the door."
    },
    "studyGuide": {
      "reading": "なかがみえない",
      "strongerHint": "外からは contrasts visibility from outside with visibility from inside.",
      "clue": "The contrast concerns the door’s visibility properties.",
      "steps": [
        "The inside view outward is available.",
        "The view inward from outside is blocked by the arrangement.",
        "中が見えない describes that lack of visibility."
      ],
      "trap": "見ない means not looking by choice. 見えない describes not being visible or not being able to see. A design feature concerns the latter here.",
      "reviewHref": "#gg-onepoint",
      "sentence": "このドアは内側からは外が見えるが、外からは（　）ようになっている。",
      "choiceTexts": {
        "a": "中を見ない",
        "b": "中が見えない"
      }
    }
  },
  {
    "id": "gg-book-onepoint-07",
    "hint": "What does the speaker avoid looking at before exams, and why?",
    "translation": "Looking at the TV listings in the newspaper makes me want to watch television, so before exams I make a point of not looking at them.",
    "correctExplanation": "Seeing the listings creates a desire to watch TV. The speaker chooses not to look at the listings before exams. 見ないようにしている describes that deliberate practice.",
    "rationales": {
      "a": "見ない correctly expresses choosing not to look at the listings.",
      "b": "見えない describes lack of visibility or ability to see, not the deliberate avoidance stated here."
    },
    "studyGuide": {
      "reading": "みない",
      "strongerHint": "Looking at the TV listings creates the urge to watch television, so the speaker deliberately avoids them.",
      "clue": "The cause clause motivates a conscious avoidance strategy.",
      "steps": [
        "Seeing the listings creates a desire to watch TV.",
        "The speaker chooses not to look at the listings before exams.",
        "見ないようにしている describes that deliberate practice."
      ],
      "trap": "The omitted object is the television program listings from the first clause. Do not translate the answer as becoming unable to see.",
      "reviewHref": "#gg-onepoint",
      "sentence": "新聞のテレビ番組表を見るとテレビが見たくなるので、試験前は（　）ようにしているんです。",
      "choiceTexts": {
        "a": "見ない",
        "b": "見えない"
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
