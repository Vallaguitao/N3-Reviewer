/* Authored study support for Group J book exercises.
 * Load after part2-quiz-data.js and before quiz.js. The generated source remains intact.
 * Only these 27 records are enriched; original answer keys and question types are retained.
 */
(function (root) {
  "use strict";
  if (typeof document !== "undefined" && document.body?.dataset.page !== "group-j") return;
  const support = [
  {
    "id": "gj-book-1-01",
    "hint": "What makes the duty to speak clearly difficult to carry out?",
    "translation": "Even when something is difficult to say, sometimes you probably have to say it clearly.",
    "correctExplanation": "はっきり言わなければならない expresses the need to speak clearly. ことでも introduces an obstacle that does not remove that obligation. 言いづらい supplies the awkwardness or difficulty of saying it.",
    "rationales": {
      "a": "言いやすい says it is easy to say, which removes the obstacle this concession is intended to express.",
      "b": "言いづらい correctly means difficult or uncomfortable to say.",
      "c": "言いすぎる means say too much or go too far; this is about speaking clearly despite difficulty, not excessive speech."
    },
    "studyGuide": {
      "reading": "いいづらい",
      "strongerHint": "ことでも sets up a concession: even something awkward to say sometimes needs to be said.",
      "clue": "The obligation applies despite the discomfort of speaking.",
      "steps": [
        "はっきり言わなければならない expresses the need to speak clearly.",
        "ことでも introduces an obstacle that does not remove that obligation.",
        "言いづらい supplies the awkwardness or difficulty of saying it."
      ],
      "trap": "でも does not automatically determine the answer. Find a meaningful contrast: difficulty saying something versus the obligation to say it.",
      "reviewHref": "#gj-ease",
      "sentence": "（　）ことでも、時にははっきり言わなければならないだろう。",
      "choiceTexts": {
        "a": "言いやすい",
        "b": "言いづらい",
        "c": "言いすぎる"
      }
    }
  },
  {
    "id": "gj-book-1-02",
    "hint": "What property of the dish would explain the disappointing taste?",
    "translation": "This dish is a little watery and is not very tasty.",
    "correctExplanation": "料理 is being evaluated for taste. 水っぽい is the established adjective for watery. Change its final い to くて to connect the description: 水っぽくて.",
    "rationales": {
      "a": "水らしくて would describe fitting the character of water; it does not express the ordinary criticism “watery” of this dish.",
      "b": "水がちで is not the natural combination for the watery quality of food.",
      "c": "水っぽくて correctly describes wateriness and links it to the poor taste."
    },
    "studyGuide": {
      "reading": "みずっぽくて",
      "strongerHint": "The dish tastes diluted. The quality must also connect to あまりおいしくない.",
      "clue": "The unwanted quality is wateriness.",
      "steps": [
        "料理 is being evaluated for taste.",
        "水っぽい is the established adjective for watery.",
        "Change its final い to くて to connect the description: 水っぽくて."
      ],
      "trap": "The endings are not freely interchangeable after any noun. Knowing がち as “tends to” does not make 水がち a natural word for watery.",
      "reviewHref": "#gj-quality",
      "sentence": "この料理はちょっと（　）、あまりおいしくない。",
      "choiceTexts": {
        "a": "水らしくて",
        "b": "水がちで",
        "c": "水っぽくて"
      }
    }
  },
  {
    "id": "gj-book-1-03",
    "hint": "What amount of computer use is being criticized?",
    "translation": "Using a computer too much is bad for your eyes.",
    "correctExplanation": "使います gives the stem 使い. すぎる adds excess to the action of using. の turns 使いすぎる into the activity being evaluated by 目に悪い.",
    "rationales": {
      "a": "使いかける describes starting or incomplete use, not the excessive amount being criticized.",
      "b": "使い出す describes the onset of use; beginning alone is not the targeted cause here.",
      "c": "使いすぎる correctly describes the excessive use evaluated as bad for the eyes."
    },
    "studyGuide": {
      "reading": "つかいすぎる",
      "strongerHint": "目に悪い is the consequence of going beyond a suitable amount of use.",
      "clue": "The sentence warns against excessive use.",
      "steps": [
        "使います gives the stem 使い.",
        "すぎる adds excess to the action of using.",
        "の turns 使いすぎる into the activity being evaluated by 目に悪い."
      ],
      "trap": "の is already outside the blank. Keep the verb ending before it; do not replace it with a nounlike すぎだ construction.",
      "reviewHref": "#gj-ease",
      "sentence": "パソコンを（　）のは、目に悪いですよ。",
      "choiceTexts": {
        "a": "使いかける",
        "b": "使い出す",
        "c": "使いすぎる"
      }
    }
  },
  {
    "id": "gj-book-1-04",
    "hint": "What does the encouragement ask the players to do with their ability?",
    "translation": "I want you to give your all in this match. Do your best, everyone.",
    "correctExplanation": "実力を出す means demonstrate or bring out one’s ability. Add きる to express using that ability fully: 出しきる. Before ほしい, change it to 出しきって.",
    "rationales": {
      "a": "出しすぎて makes the effort excessive, rather than the positive goal of using full ability.",
      "b": "出しきって correctly asks for full use of ability and fits てほしい.",
      "c": "出しかけて leaves the action at an unfinished stage, falling short of the encouragement."
    },
    "studyGuide": {
      "reading": "だしきって",
      "strongerHint": "実力 is to be used fully; ほしい also needs a て-form before it.",
      "clue": "The aim is to use one’s full ability.",
      "steps": [
        "実力を出す means demonstrate or bring out one’s ability.",
        "Add きる to express using that ability fully: 出しきる.",
        "Before ほしい, change it to 出しきって."
      ],
      "trap": "The base verb is 出す, but the added ending is きる. Do not select an onset meaning merely because the answer contains 出.",
      "reviewHref": "#gj-stage",
      "sentence": "この試合では実力を（　）ほしい。みんながんばれ。",
      "choiceTexts": {
        "a": "出しすぎて",
        "b": "出しきって",
        "c": "出しかけて"
      }
    }
  },
  {
    "id": "gj-book-1-05",
    "hint": "Does the example show better memory or a growing tendency to forget?",
    "translation": "As my grandfather has grown older, he has recently become forgetful. Today he forgot where the key was again.",
    "correctExplanation": "The second sentence gives a concrete memory lapse. 忘れっぽい describes a forgetful characteristic. Before なる, the い-adjective becomes 忘れっぽく: 忘れっぽくなった.",
    "rationales": {
      "a": "忘れかけに does not supply the natural adjective form for becoming forgetful; beginning to forget one thing is also different from this repeated disposition.",
      "b": "忘れにくく would mean becoming less likely to forget, the opposite of the example.",
      "c": "忘れっぽく correctly describes becoming forgetful and fits before なった."
    },
    "studyGuide": {
      "reading": "わすれっぽく",
      "strongerHint": "今日も indicates another forgotten detail. The blank also comes immediately before なった.",
      "clue": "Another lapse illustrates a forgetful disposition.",
      "steps": [
        "The second sentence gives a concrete memory lapse.",
        "忘れっぽい describes a forgetful characteristic.",
        "Before なる, the い-adjective becomes 忘れっぽく: 忘れっぽくなった."
      ],
      "trap": "Choose both the right meaning and the right connector to なる. An い-adjective uses く, not に.",
      "reviewHref": "#gj-quality",
      "sentence": "祖父は年を取って、最近（　）なった。今日もかぎの場所を忘れた。",
      "choiceTexts": {
        "a": "忘れかけに",
        "b": "忘れにくく",
        "c": "忘れっぽく"
      }
    }
  },
  {
    "id": "gj-book-1-06",
    "hint": "Why was cutting the tree back necessary?",
    "translation": "The tree planted in the garden had grown too large, so I decided to cut it back a little.",
    "correctExplanation": "大きくなる means become large. The stem なり takes すぎる to make the growth excessive. なりすぎて fits before しまった, describing the unwanted result.",
    "rationales": {
      "a": "なりすぎて correctly gives 大きくなりすぎて: having grown too large.",
      "b": "なりやすくなって describes becoming more prone to growing large, not the actual excessive size that prompted trimming.",
      "c": "なり通して is not the natural expression for this change in size; 通す targets sustained actions or stances."
    },
    "studyGuide": {
      "reading": "なりすぎて",
      "strongerHint": "The tree had already grown beyond a suitable size, so the speaker decided to trim it.",
      "clue": "Trimming is the response to excessive growth.",
      "steps": [
        "大きくなる means become large.",
        "The stem なり takes すぎる to make the growth excessive.",
        "なりすぎて fits before しまった, describing the unwanted result."
      ],
      "trap": "大きく is already printed. Build the rest from なる; do not try to attach すぎる directly to a second version of 大きい.",
      "reviewHref": "#gj-ease",
      "sentence": "庭に植えた木が大きく（　）しまったので、少し切ることにした。",
      "choiceTexts": {
        "a": "なりすぎて",
        "b": "なりやすくなって",
        "c": "なり通して"
      }
    }
  },
  {
    "id": "gj-book-1-07",
    "hint": "Was the problem starting the composition or finishing all of it in time?",
    "translation": "There was too little time, so I could not finish writing the composition.",
    "correctExplanation": "書ききる means finish writing the whole thing. Potential 書ききれる becomes negative 書ききれない. The past failure is 書ききれなかった, matching the limited time.",
    "rationales": {
      "a": "書き出せなかった means could not start writing; 最後まで instead targets finishing.",
      "b": "書ききれなかった correctly says the whole composition could not be finished.",
      "c": "書きかけられなかった focuses on inability to begin or get partway; it does not express failure to reach 最後まで."
    },
    "studyGuide": {
      "reading": "かききれなかった",
      "strongerHint": "最後まで gives the endpoint; 時間が短かった explains why it could not be reached.",
      "clue": "Limited time prevented full completion.",
      "steps": [
        "書ききる means finish writing the whole thing.",
        "Potential 書ききれる becomes negative 書ききれない.",
        "The past failure is 書ききれなかった, matching the limited time."
      ],
      "trap": "Separate “could not finish” from “did not finish.” The れ in きれなかった carries the potential meaning.",
      "reviewHref": "#gj-stage",
      "sentence": "時間が短かったので、作文を最後まで（　）。",
      "choiceTexts": {
        "a": "書き出せなかった",
        "b": "書ききれなかった",
        "c": "書きかけられなかった"
      }
    }
  },
  {
    "id": "gj-book-1-08",
    "hint": "What change in the cars’ motion normally follows a green signal?",
    "translation": "The light turned green, and the cars started moving.",
    "correctExplanation": "青に変わって describes the signal changing to green. The cars then begin to move. 走ります gives 走り, followed by 出した for the past onset.",
    "rationales": {
      "a": "走り出した correctly marks the start of movement after the light changes.",
      "b": "走り通した emphasizes continuing throughout a course or period, which the sentence does not supply.",
      "c": "走りきった emphasizes completing an entire course or distance, rather than starting at the signal."
    },
    "studyGuide": {
      "reading": "はしりだした",
      "strongerHint": "The signal provides a trigger for movement to begin.",
      "clue": "The signal marks the onset of movement.",
      "steps": [
        "青に変わって describes the signal changing to green.",
        "The cars then begin to move.",
        "走ります gives 走り, followed by 出した for the past onset."
      ],
      "trap": "急に or 突然 is not required for every onset use of 出す. The event sequence already makes the beginning clear.",
      "reviewHref": "#gj-stage",
      "sentence": "信号が青に変わって、車が（　）。",
      "choiceTexts": {
        "a": "走り出した",
        "b": "走り通した",
        "c": "走りきった"
      }
    }
  },
  {
    "id": "gj-book-1-09",
    "hint": "What does 一生 require the concealment to do?",
    "translation": "You cannot keep a lie hidden for your whole life.",
    "correctExplanation": "隠す gives the stem 隠し. 通す adds persistence through the whole period 一生. ことはできない denies the ability to maintain that concealment.",
    "rationales": {
      "a": "隠しかける leaves concealment at a beginning or unfinished stage, rather than maintaining it for life.",
      "b": "隠しすぎる means conceal too much; excess is not the issue expressed by 一生.",
      "c": "隠し通す correctly targets keeping the lie concealed throughout."
    },
    "studyGuide": {
      "reading": "かくしとおす",
      "strongerHint": "The question is whether a lie can stay hidden throughout an entire lifetime.",
      "clue": "The concealment must be maintained throughout a lifetime.",
      "steps": [
        "隠す gives the stem 隠し.",
        "通す adds persistence through the whole period 一生.",
        "ことはできない denies the ability to maintain that concealment."
      ],
      "trap": "The sentence denies lifelong concealment; it does not report that this particular lie has already been exposed.",
      "reviewHref": "#gj-stage",
      "sentence": "うそを一生（　）ことはできない。",
      "choiceTexts": {
        "a": "隠しかける",
        "b": "隠しすぎる",
        "c": "隠し通す"
      }
    }
  },
  {
    "id": "gj-book-1-10",
    "hint": "How developed was the understanding before the missed classes?",
    "translation": "I had begun to understand math a little, but after missing classes I no longer understood it again.",
    "correctExplanation": "わかりかける can describe an emerging mental state. Its て-form fits before きた: わかりかけてきた. The later setback explains why that developing understanding did not continue.",
    "rationales": {
      "a": "わかりかけて correctly describes the initial development of understanding.",
      "b": "わかりきって suggests complete or obvious understanding, which conflicts with the limited emerging understanding here.",
      "c": "わかり通して is not the natural combination for this developing comprehension; 通す does not freely attach to every verb."
    },
    "studyGuide": {
      "reading": "わかりかけて",
      "strongerHint": "少し and またわからなくなった describe understanding that had only begun to emerge and was then lost.",
      "clue": "The earlier understanding was only starting to develop.",
      "steps": [
        "わかりかける can describe an emerging mental state.",
        "Its て-form fits before きた: わかりかけてきた.",
        "The later setback explains why that developing understanding did not continue."
      ],
      "trap": "かける is not limited to visibly interrupted physical tasks. It can describe beginning to understand; it does not have to mean the person stopped on purpose.",
      "reviewHref": "#gj-stage",
      "sentence": "少し（　）きた数学が、授業を休んだせいでまたわからなくなった。",
      "choiceTexts": {
        "a": "わかりかけて",
        "b": "わかりきって",
        "c": "わかり通して"
      }
    }
  },
  {
    "id": "gj-book-2-01",
    "hint": "Would a warning about a snowy road concern frequent slipping or resistance to slipping?",
    "translation": "Snowy roads are slippery, so be careful.",
    "correctExplanation": "すべります gives the stem すべり. やすい describes slipping readily on that surface. すべりやすい fits before the reason marker から.",
    "rationales": {
      "やすい": "やすい correctly gives すべりやすい: slippery or prone to slipping.",
      "にくい": "にくい would mean resistant to slipping, weakening the stated reason for caution.",
      "すぎ": "すぎ would describe excessive slipping and would need a suitable nounlike ending before から, such as だ; it does not fit the printed form."
    },
    "studyGuide": {
      "reading": "やすい",
      "strongerHint": "The snowy surface makes slipping happen readily.",
      "clue": "The warning concerns an event that happens easily.",
      "steps": [
        "すべります gives the stem すべり.",
        "やすい describes slipping readily on that surface.",
        "すべりやすい fits before the reason marker から."
      ],
      "trap": "Easy occurrence can be dangerous. Do not assume やすい always expresses a positive ability.",
      "reviewHref": "#gj-ease",
      "sentence": "雪道はすべり（　）から、気をつけて。",
      "choiceTexts": {
        "やすい": "やすい",
        "にくい": "にくい",
        "すぎ": "すぎ"
      }
    }
  },
  {
    "id": "gj-book-2-02",
    "hint": "What behavior is expected from someone who really holds this role?",
    "translation": "If you are the company president, I want you to behave as a president should. This is an important time.",
    "correctExplanation": "社長なら frames the expectation attached to the role. Characteristic らしい expresses behavior appropriate to that role. Before 行動する, change らしい to らしく.",
    "rationales": {
      "らしく": "らしく correctly describes conduct befitting a company president and modifies 行動する.",
      "みたいに": "みたいに compares behavior with a president’s; it misses the direct role-based expectation emphasized by 社長なら.",
      "っぽく": "っぽく suggests a president-like air or quality, rather than the expected responsible conduct targeted here."
    },
    "studyGuide": {
      "reading": "らしく",
      "strongerHint": "社長なら sets up the role; 行動する asks how that person should behave.",
      "clue": "The speaker expects conduct befitting an actual role.",
      "steps": [
        "社長なら frames the expectation attached to the role.",
        "Characteristic らしい expresses behavior appropriate to that role.",
        "Before 行動する, change らしい to らしく."
      ],
      "trap": "Being an actual president is useful context here, but らしい is not a universal identity test. Its core meaning in this exercise is fitting a role’s expected qualities.",
      "reviewHref": "#gj-quality",
      "sentence": "社長なら社長（　）行動してほしいです。今は大切な時期なんですから。",
      "choiceTexts": {
        "らしく": "らしく",
        "みたいに": "みたいに",
        "っぽく": "っぽく"
      }
    }
  },
  {
    "id": "gj-book-2-03",
    "hint": "Is this task finished enough for the speaker to help with another one?",
    "translation": "I am still partway through this job, so I will help with that one once I have finished.",
    "correctExplanation": "やりかけだ describes the current unfinished state. Before ので, this nounlike predicate uses な: やりかけなので. Because やり and ので are already printed, the blank needs only かけな.",
    "rationales": {
      "かけな": "かけな correctly forms やりかけなので and explains why help must wait.",
      "きれない": "きれない would give やりきれないので, saying the job cannot be completed; the sentence instead treats finishing as the next expected step.",
      "すぎな": "すぎな would claim excessive work rather than a partly finished task and is not the natural connection for this meaning."
    },
    "studyGuide": {
      "reading": "かけな",
      "strongerHint": "まだ and 終わったら show the current task is unfinished. The printed word after the blank is ので.",
      "clue": "The task is underway but not complete.",
      "steps": [
        "やりかけだ describes the current unfinished state.",
        "Before ので, this nounlike predicate uses な: やりかけなので.",
        "Because やり and ので are already printed, the blank needs only かけな."
      ],
      "trap": "Read across both sides of the blank. かけの is used before a noun such as 仕事; かけな is needed here before ので.",
      "reviewHref": "#gj-stage",
      "sentence": "この仕事がまだやり（　）ので、終わったらそちらの仕事を手伝います。",
      "choiceTexts": {
        "かけな": "かけな",
        "きれない": "きれない",
        "すぎな": "すぎな"
      }
    }
  },
  {
    "id": "gj-book-2-04",
    "hint": "What improvement would solve the problem of this string snapping immediately?",
    "translation": "This string snaps immediately. Do you have one that does not break so easily?",
    "correctExplanation": "切れる means snap or break here, and its stem is 切れ. にくい makes that event less likely to happen. 切れにくいの uses の to stand for the kind of string being requested.",
    "rationales": {
      "やすい": "やすい would ask for string that snaps even more easily, worsening the problem.",
      "にくい": "にくい correctly asks for a more break-resistant string.",
      "かけの": "かけの would point to string already partly broken and does not fit the printed 切れ…のは structure naturally."
    },
    "studyGuide": {
      "reading": "にくい",
      "strongerHint": "The requested replacement should resist the unwanted event 切れる.",
      "clue": "The speaker wants greater resistance to snapping.",
      "steps": [
        "切れる means snap or break here, and its stem is 切れ.",
        "にくい makes that event less likely to happen.",
        "切れにくいの uses の to stand for the kind of string being requested."
      ],
      "trap": "切れ is the stem of the intransitive verb 切れる here. Read the object’s tendency to break, rather than assuming the phrase concerns a person’s cutting ability.",
      "reviewHref": "#gj-ease",
      "sentence": "このひもはすぐ切れてしまいます。もっと切れ（　）のはありませんか。",
      "choiceTexts": {
        "やすい": "やすい",
        "にくい": "にくい",
        "かけの": "かけの"
      }
    }
  },
  {
    "id": "gj-book-2-05",
    "hint": "What has accumulated because the room has not been cleaned?",
    "translation": "This room has not been cleaned for a long time, so it is full of rubbish.",
    "correctExplanation": "ごみ names the material that has accumulated. だらけ expresses being full of that unwanted material. だらけだ completes the plain sentence-ending predicate.",
    "rationales": {
      "みたいだ": "みたいだ compares something with rubbish, missing the stated accumulation inside the room.",
      "だらけだ": "だらけだ correctly expresses that the room is full of rubbish.",
      "らしい": "らしい would introduce an apparent identity or a characteristic quality; neither gives the abundance caused by not cleaning."
    },
    "studyGuide": {
      "reading": "だらけだ",
      "strongerHint": "ごみ is the unwanted material present in large amounts, and the blank ends the sentence.",
      "clue": "Lack of cleaning has produced unwanted abundance.",
      "steps": [
        "ごみ names the material that has accumulated.",
        "だらけ expresses being full of that unwanted material.",
        "だらけだ completes the plain sentence-ending predicate."
      ],
      "trap": "Identify whether the noun names the contents or a comparison. Here rubbish fills the room; the room is not simply being compared with rubbish.",
      "reviewHref": "#gj-quality",
      "sentence": "この部屋は長い間掃除をしていないので、ごみ（　）。",
      "choiceTexts": {
        "みたいだ": "みたいだ",
        "だらけだ": "だらけだ",
        "らしい": "らしい"
      }
    }
  },
  {
    "id": "gj-book-2-06",
    "hint": "Is this event characteristic of a real drama, or a real event compared with a drama?",
    "translation": "Something like a scene from a TV drama actually happened: a dog saved its owner.",
    "correctExplanation": "ドラマ supplies the comparison for the unusual rescue. みたい expresses resemblance without saying the event is itself a drama. Before こと, use the noun-modifying form みたいな.",
    "rationales": {
      "らしい": "らしい would describe a quality typical of drama or another reading of らしい; it misses the contrast between a real occurrence and a drama-like scene.",
      "みたいな": "みたいな correctly compares the event with a drama and modifies こと.",
      "だらけの": "だらけの describes being full of something, not resembling a drama in this one event."
    },
    "studyGuide": {
      "reading": "みたいな",
      "strongerHint": "実際に起こった contrasts the surprising real occurrence with a fictional scene; こと is a noun.",
      "clue": "A real event resembles a dramatic fictional situation.",
      "steps": [
        "ドラマ supplies the comparison for the unusual rescue.",
        "みたい expresses resemblance without saying the event is itself a drama.",
        "Before こと, use the noun-modifying form みたいな."
      ],
      "trap": "実際に does not automatically require らしい. The rescue really happened, but it is being compared with the kind of event seen in a drama.",
      "reviewHref": "#gj-quality",
      "sentence": "犬が飼い主を助けるというドラマ（　）ことが実際に起こった。",
      "choiceTexts": {
        "らしい": "らしい",
        "みたいな": "みたいな",
        "だらけの": "だらけの"
      }
    }
  },
  {
    "id": "gj-book-2-07",
    "hint": "What would make an item a meaningful souvenir of Kyoto?",
    "translation": "When I go to Kyoto, I would like to buy something characteristic of Kyoto as a souvenir.",
    "correctExplanation": "記念に makes the purpose buying a souvenir. 京都らしい describes a quality associated with Kyoto. らしい directly modifies the noun 物.",
    "rationales": {
      "らしい": "らしい correctly expresses a souvenir with character representative of Kyoto.",
      "みたいな": "みたいな compares an item with Kyoto itself; it is not the intended representative-souvenir reading.",
      "っぽい": "っぽい can suggest a Kyoto-like feel in casual speech, but らしい best expresses the characteristic local identity targeted by this exercise."
    },
    "studyGuide": {
      "reading": "らしい",
      "strongerHint": "The speaker wants something representative of Kyoto’s character.",
      "clue": "The item should represent the place’s distinctive character.",
      "steps": [
        "記念に makes the purpose buying a souvenir.",
        "京都らしい describes a quality associated with Kyoto.",
        "らしい directly modifies the noun 物."
      ],
      "trap": "The object is not literally the city of Kyoto. “Typical of / representative of” explains らしい better than an absolute same-identity rule.",
      "reviewHref": "#gj-quality",
      "sentence": "京都に行ったら、記念に何か京都（　）物を買いたいと思う。",
      "choiceTexts": {
        "らしい": "らしい",
        "みたいな": "みたいな",
        "っぽい": "っぽい"
      }
    }
  },
  {
    "id": "gj-book-2-08",
    "hint": "What seasonal tendency would justify caution with food?",
    "translation": "Food spoils easily at this time of year, so let’s be careful.",
    "correctExplanation": "腐ります gives the stem 腐り. やすい describes the ease with which the unwanted event happens. 腐りやすい connects directly to ので as an い-adjective.",
    "rationales": {
      "やすい": "やすい correctly describes food being prone to spoilage in the current conditions.",
      "にくい": "にくい would mean food resists spoiling, the opposite of the warning.",
      "すぎる": "すぎる would focus on excessive spoilage rather than the general seasonal susceptibility the sentence targets."
    },
    "studyGuide": {
      "reading": "やすい",
      "strongerHint": "注意しましょう follows a warning about food spoiling readily at this time of year.",
      "clue": "The conditions make spoilage happen readily.",
      "steps": [
        "腐ります gives the stem 腐り.",
        "やすい describes the ease with which the unwanted event happens.",
        "腐りやすい connects directly to ので as an い-adjective."
      ],
      "trap": "This is susceptibility to spoilage, not an action someone finds easy to perform. やすい works with naturally occurring events too.",
      "reviewHref": "#gj-ease",
      "sentence": "今の時期は食べ物が腐り（　）ので注意しましょう。",
      "choiceTexts": {
        "やすい": "やすい",
        "にくい": "にくい",
        "すぎる": "すぎる"
      }
    }
  },
  {
    "id": "gj-book-2-09",
    "hint": "Why does the speaker suggest stopping for today?",
    "translation": "You are drinking too much. Why don’t you stop for today?",
    "correctExplanation": "飲みすぎ is the nounlike expression for excessive drinking. Add です to make the polite judgment 飲みすぎですよ. Because 飲み and です are printed, insert only すぎ.",
    "rationales": {
      "すぎ": "すぎ correctly gives the excessive drinking that motivates the suggestion to stop.",
      "かけ": "かけ would mean the drink or drinking is unfinished, not that the amount is excessive.",
      "にくい": "にくい says drinking is difficult, rather than that the person has drunk too much."
    },
    "studyGuide": {
      "reading": "すぎ",
      "strongerHint": "もうやめたらどうですか responds to an amount of drinking judged excessive. です is already outside the blank.",
      "clue": "The suggestion to stop follows a judgment of excess.",
      "steps": [
        "飲みすぎ is the nounlike expression for excessive drinking.",
        "Add です to make the polite judgment 飲みすぎですよ.",
        "Because 飲み and です are printed, insert only すぎ."
      ],
      "trap": "Do not copy すぎだ from the word bank unchanged before です. The complete phrase is すぎです, not すぎだです.",
      "reviewHref": "#gj-ease",
      "sentence": "飲み（　）ですよ。今日はもうやめたらどうですか。",
      "choiceTexts": {
        "すぎ": "すぎ",
        "かけ": "かけ",
        "にくい": "にくい"
      }
    }
  },
  {
    "id": "gj-book-2-10",
    "hint": "Has this drink been fully consumed, or left unfinished?",
    "translation": "Whose unfinished can of juice is this?",
    "correctExplanation": "飲みかけ describes a drink that has been started and left unfinished. Before the noun かんジュース, connect it with の. The printed 飲み therefore needs かけの in the blank.",
    "rationales": {
      "かけの": "かけの correctly identifies a partly consumed can of juice and modifies the noun.",
      "すぎの": "すぎの would concern excessive drinking, not an unfinished drink, and does not make this intended noun phrase.",
      "やすい": "やすい would describe juice that is easy to drink; it does not identify the unfinished can in this ownership question."
    },
    "studyGuide": {
      "reading": "かけの",
      "strongerHint": "The can still contains a partly consumed drink; かんジュース is the noun after the blank.",
      "clue": "The drinking was started but not completed.",
      "steps": [
        "飲みかけ describes a drink that has been started and left unfinished.",
        "Before the noun かんジュース, connect it with の.",
        "The printed 飲み therefore needs かけの in the blank."
      ],
      "trap": "Compare やりかけなので in question 3 with 飲みかけのかんジュース here. The following structure determines な or の.",
      "reviewHref": "#gj-stage",
      "sentence": "この飲み（　）かんジュースはだれのだろう。",
      "choiceTexts": {
        "かけの": "かけの",
        "すぎの": "すぎの",
        "やすい": "やすい"
      }
    }
  },
  {
    "id": "gj-book-onepoint-01",
    "hint": "Does the speaker accept this way of talking as appropriate for an adult?",
    "translation": "You are an adult now, so stop talking like a child.",
    "correctExplanation": "もう大人だ establishes the person’s actual stage of life. 子どもみたい compares the speech to a child’s. Before しゃべり方, use みたいな.",
    "rationales": {
      "a": "らしい would emphasize a characteristic or fitting childlike quality; it misses the adult-versus-child comparison targeted by the rebuke.",
      "b": "みたいな correctly expresses the criticized resemblance and modifies しゃべり方."
    },
    "studyGuide": {
      "reading": "みたいな",
      "strongerHint": "もう大人なんだから contrasts actual adulthood with childlike speech; しゃべり方 is a noun.",
      "clue": "The speaker criticizes speech that resembles a child’s despite adulthood.",
      "steps": [
        "もう大人だ establishes the person’s actual stage of life.",
        "子どもみたい compares the speech to a child’s.",
        "Before しゃべり方, use みたいな."
      ],
      "trap": "子ども does not automatically select らしい. Here the surrounding contrast makes resemblance to a different expected age the point.",
      "reviewHref": "#gj-quality",
      "sentence": "もう大人なんだから、そんな子ども（　）しゃべり方はやめろ。",
      "choiceTexts": {
        "a": "らしい",
        "b": "みたいな"
      }
    }
  },
  {
    "id": "gj-book-onepoint-02",
    "hint": "Are the clothes for children, or is someone else imitating children?",
    "translation": "Clothes that are properly childlike really do suit children, don’t they?",
    "correctExplanation": "子どもには identifies children as the people for whom the clothes are suitable. 子どもらしい describes a fitting childlike character. らしい modifies 服 directly.",
    "rationales": {
      "a": "らしい correctly expresses childlike qualities appropriate for children’s clothing.",
      "b": "みたいな emphasizes resemblance to a child, rather than the suitability of children’s clothes intended here."
    },
    "studyGuide": {
      "reading": "らしい",
      "strongerHint": "子どもには and 似合います support clothing suitable for children themselves.",
      "clue": "The clothes have qualities suited to the people wearing them.",
      "steps": [
        "子どもには identifies children as the people for whom the clothes are suitable.",
        "子どもらしい describes a fitting childlike character.",
        "らしい modifies 服 directly."
      ],
      "trap": "The clothes themselves are not children. Here らしい means appropriate to children, showing why literal identity is not a universal rule.",
      "reviewHref": "#gj-quality",
      "sentence": "子どもにはやはり子ども（　）服が似合いますよね。",
      "choiceTexts": {
        "a": "らしい",
        "b": "みたいな"
      }
    }
  },
  {
    "id": "gj-book-onepoint-03",
    "hint": "Does the sentence deny all drops of rain, or rain substantial enough to count as proper rain?",
    "translation": "Since June began, we still have not had any proper rain.",
    "correctExplanation": "雨 appears on both sides of the blank. 雨らしい雨 means substantial or proper rain. まだ降っていない denies having had that kind of rain so far.",
    "rationales": {
      "a": "らしい correctly creates the expression 雨らしい雨: proper rain.",
      "b": "みたいな would awkwardly compare rain with rain and miss the “worthy of the name” construction."
    },
    "studyGuide": {
      "reading": "らしい",
      "strongerHint": "The repeated noun pattern is 雨…雨, followed by まだ…降っていない.",
      "clue": "NらしいN can mean a proper example worthy of the name.",
      "steps": [
        "雨 appears on both sides of the blank.",
        "雨らしい雨 means substantial or proper rain.",
        "まだ降っていない denies having had that kind of rain so far."
      ],
      "trap": "This does not necessarily mean no rain at all has fallen. It denies proper rain, and らしい is not hearsay here.",
      "reviewHref": "#gj-quality",
      "sentence": "6月に入ってからまだ雨（　）雨は降っていない。",
      "choiceTexts": {
        "a": "らしい",
        "b": "みたいな"
      }
    }
  },
  {
    "id": "gj-book-onepoint-04",
    "hint": "What is falling, and what is it being compared with?",
    "translation": "Oh, rain that looks like snow has started falling.",
    "correctExplanation": "雨が降ってきた identifies the precipitation as rain. 雪 supplies a comparison for its appearance. Before the noun 雨, use 雪みたいな.",
    "rationales": {
      "a": "らしい would target a quality characteristic of snow; it does not express the intended comparison of the rain with snow.",
      "b": "みたいな correctly modifies 雨 with the resemblance to snow."
    },
    "studyGuide": {
      "reading": "みたいな",
      "strongerHint": "雨 is the thing falling; 雪 describes what it resembles.",
      "clue": "Rain is being compared with snow.",
      "steps": [
        "雨が降ってきた identifies the precipitation as rain.",
        "雪 supplies a comparison for its appearance.",
        "Before the noun 雨, use 雪みたいな."
      ],
      "trap": "Do not swap the two nouns mentally. The sentence describes rain resembling snow, not a claim that ordinary snow has the expected character of snow.",
      "reviewHref": "#gj-quality",
      "sentence": "あれ、雪（　）雨が降ってきたよ。",
      "choiceTexts": {
        "a": "らしい",
        "b": "みたいな"
      }
    }
  },
  {
    "id": "gj-book-onepoint-05",
    "hint": "What contrast does まだ5月なのに establish?",
    "translation": "It is only May, but today was like a summer day, wasn’t it?",
    "correctExplanation": "まだ5月なのに highlights an out-of-season contrast. 夏 supplies the comparison for the day. Noun 日 requires のような, not the sentence-ending のようだ.",
    "rationales": {
      "a": "らしい would emphasize qualities fitting summer; the explicit still-May contrast makes resemblance the book’s intended choice.",
      "b": "のような correctly expresses a summerlike day and modifies 日."
    },
    "studyGuide": {
      "reading": "のような",
      "strongerHint": "It is still May, but the day feels like summer. 日 is the noun being described.",
      "clue": "The weather is compared with a season not yet expected in the context.",
      "steps": [
        "まだ5月なのに highlights an out-of-season contrast.",
        "夏 supplies the comparison for the day.",
        "Noun 日 requires のような, not the sentence-ending のようだ."
      ],
      "trap": "The contrast in this question is the clue. Do not turn it into a universal rule that のようだ can never compare two things in the same category.",
      "reviewHref": "#gj-quality",
      "sentence": "まだ5月なのに、今日は夏（　）日でしたね。",
      "choiceTexts": {
        "a": "らしい",
        "b": "のような"
      }
    }
  },
  {
    "id": "gj-book-onepoint-06",
    "hint": "What is the real building, and what does its appearance remind the speaker of?",
    "translation": "Oh, so this is the police box? It looks like a cute house from a picture book, doesn’t it?",
    "correctExplanation": "これが交番 identifies the real building. 絵本に出てくるかわいい家 supplies the visual comparison. The description ends before ね, so use のようだ.",
    "rationales": {
      "a": "らしい would give a characteristic or apparent-identity reading; it misses the visual comparison to a picture-book house.",
      "b": "のようだ correctly ends the resemblance statement before ね."
    },
    "studyGuide": {
      "reading": "のようだ",
      "strongerHint": "It is a police box, compared with a cute house in a picture book. The blank ends the description before ね.",
      "clue": "A police box resembles a picture-book house.",
      "steps": [
        "これが交番 identifies the real building.",
        "絵本に出てくるかわいい家 supplies the visual comparison.",
        "The description ends before ね, so use のようだ."
      ],
      "trap": "Do not choose のような just because 家 is nearby. 家 comes before the blank; there is no following noun to modify.",
      "reviewHref": "#gj-quality",
      "sentence": "へえ、これが交番か。絵本に出てくるかわいい家（　）ね。",
      "choiceTexts": {
        "a": "らしい",
        "b": "のようだ"
      }
    }
  },
  {
    "id": "gj-book-onepoint-07",
    "hint": "What kinds of shops would be expected in a longstanding tourist destination?",
    "translation": "Hakone has long been a tourist destination, so it has many souvenir shops typical of such a place.",
    "correctExplanation": "昔からの観光地 identifies Hakone as an established tourist destination. 観光地らしい describes features typical of that kind of place. らしい modifies お土産屋 directly.",
    "rationales": {
      "a": "らしい correctly expresses souvenir shops characteristic of a tourist destination.",
      "b": "のような would compare the shops with a tourist destination, missing the expected features of an actual one."
    },
    "studyGuide": {
      "reading": "らしい",
      "strongerHint": "観光地だから makes the location’s established character the reason for the typical shops.",
      "clue": "The shops fit the established character of a tourist destination.",
      "steps": [
        "昔からの観光地 identifies Hakone as an established tourist destination.",
        "観光地らしい describes features typical of that kind of place.",
        "らしい modifies お土産屋 directly."
      ],
      "trap": "The souvenir shops are features of the destination; they do not each have to be a tourist destination themselves. Follow the typical-quality relationship.",
      "reviewHref": "#gj-quality",
      "sentence": "箱根は昔からの観光地だから、観光地（　）お土産屋が多い。",
      "choiceTexts": {
        "a": "らしい",
        "b": "のような"
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
