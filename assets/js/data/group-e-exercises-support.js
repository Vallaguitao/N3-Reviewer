/* Authored study support for Group E book exercises.
 * Load after part2-quiz-data.js and before quiz.js. The generated source remains intact.
 * Only these 21 records are enriched; original answer keys and question types are retained.
 */
(function (root) {
  "use strict";
  if (typeof document !== "undefined" && document.body?.dataset.page !== "group-e") return;
  const support = [
  {
    "id": "ge-book-1-01",
    "hint": "What feature of the apartment explains the surprising amount mentioned next?",
    "translation": "It certainly is a wonderful apartment. That explains why the rent is so high.",
    "correctExplanation": "The speaker recognizes that the apartment is impressive. High rent follows naturally from that assessment in this context. 家賃が高いわけですね means “that explains the high rent,” with ね checking shared understanding.",
    "rationales": {
      "a": "Cheap rent would normally contrast with such quality; this sentence presents a natural explanation without extra contrast.",
      "b": "High rent is the fact the apartment’s quality explains.",
      "c": "Lowering the rent is an action, not the high level of rent being explained by こんなに."
    },
    "studyGuide": {
      "reading": "やちんがたかい",
      "strongerHint": "それで connects the apartment’s impressive quality to its rent.",
      "clue": "すばらしい and それで frame the rent as understandable once the quality is known.",
      "steps": [
        "The speaker recognizes that the apartment is impressive.",
        "High rent follows naturally from that assessment in this context.",
        "家賃が高いわけですね means “that explains the high rent,” with ね checking shared understanding."
      ],
      "trap": "Do not treat それで as an automatic answer signal. Identify which conclusion the earlier fact supports.",
      "reviewHref": "#ge-wake",
      "sentence": "確かにすばらしいマンションですね。それで、こんなに（　）わけですね。",
      "choiceTexts": {
        "a": "家賃が安い",
        "b": "家賃が高い",
        "c": "家賃を下げる"
      }
    }
  },
  {
    "id": "ge-book-1-02",
    "hint": "The speaker calculates a daily total. Which expression packages that conclusion before わけ?",
    "translation": "So the part-time job pays 1,000 yen an hour for four hours a day? That means a day’s work brings in 4,000 yen.",
    "correctExplanation": "Multiply the hourly rate by the daily hours. The result is 4,000 yen, as stated before the blank. というわけですね presents that whole result as what the information means.",
    "rationales": {
      "a": "とある can report what a text says in other contexts, but no written source is being quoted here.",
      "b": "とする can mean assume or decide in other patterns; the speaker is calculating the stated pay, not setting an assumption.",
      "c": "という correctly introduces the summarized conclusion before わけですね."
    },
    "studyGuide": {
      "reading": "という",
      "strongerHint": "1,000 yen per hour × four hours gives 4,000 yen per day.",
      "clue": "The figures support a calculation, followed by a restatement.",
      "steps": [
        "Multiply the hourly rate by the daily hours.",
        "The result is 4,000 yen, as stated before the blank.",
        "というわけですね presents that whole result as what the information means."
      ],
      "trap": "Here という is part of the conclusion pattern. Translating it simply as “called” misses its job in this sentence.",
      "reviewHref": "#ge-wake-formation",
      "sentence": "時給1,000円で、１日４時間のアルバイトですか。１日働くと4,000円もらえる（　）わけですね。",
      "choiceTexts": {
        "a": "とある",
        "b": "とする",
        "c": "という"
      }
    }
  },
  {
    "id": "ge-book-1-03",
    "hint": "Read the second sentence: who can actually do this job?",
    "translation": "Not just anyone can do this job. Only someone with experience can do it.",
    "correctExplanation": "The job requires experience. だれでもやれる means “anyone can do it.” わけではない rejects that unrestricted claim while allowing experienced people to do it.",
    "rationales": {
      "a": "Denying やれる人がいる would deny that anyone able to do it exists, conflicting with the qualification stated next.",
      "b": "Denying だれでもやれる correctly limits the job to people with experience.",
      "c": "Denying だれもやれない says it is not impossible for everyone; it does not directly express the intended restriction “not just anyone.”"
    },
    "studyGuide": {
      "reading": "だれでもやれる",
      "strongerHint": "経験がある人でなければできない limits the job to experienced people.",
      "clue": "The second sentence restricts who is qualified.",
      "steps": [
        "The job requires experience.",
        "だれでもやれる means “anyone can do it.”",
        "わけではない rejects that unrestricted claim while allowing experienced people to do it."
      ],
      "trap": "だれでも here means “anyone,” not “or something” or “even if.” Also, rejecting “nobody can do it” is different from rejecting “anyone can do it.”",
      "reviewHref": "../lessons/lesson-08-negation.html#l8-wake-dewa-nai",
      "sentence": "この仕事は（　）わけではない。経験がある人でなければできない。",
      "choiceTexts": {
        "a": "やれる人がいる",
        "b": "だれでもやれる",
        "c": "だれもやれない"
      }
    }
  },
  {
    "id": "ge-book-1-04",
    "hint": "What property does the wife find implausible for a children’s toy?",
    "translation": "Husband: “How do you play with this toy? I don’t really understand.” Wife: “What? It’s for children, so surely it can’t be that difficult…”",
    "correctExplanation": "The toy is intended for children. The wife therefore rejects the idea that it is very difficult. 難しいわけがない expresses her strong judgment, softened in delivery by んだけど…….",
    "rationales": {
      "a": "簡単なわけがない means it cannot be easy, the opposite of the wife’s reasoning.",
      "b": "難しいわけがない correctly rejects excessive difficulty.",
      "c": "使えるわけがない rejects the possibility of using it; the wife is questioning difficulty, not declaring the toy unusable."
    },
    "studyGuide": {
      "reading": "むずかしい",
      "strongerHint": "子どもの物だから supplies the reason for rejecting a high level of difficulty.",
      "clue": "The wife disputes the difficulty implied by her husband’s reaction.",
      "steps": [
        "The toy is intended for children.",
        "The wife therefore rejects the idea that it is very difficult.",
        "難しいわけがない expresses her strong judgment, softened in delivery by んだけど……."
      ],
      "trap": "A grammatically possible connection is not enough: 簡単な fits before わけ, but denying simplicity reverses the intended meaning.",
      "reviewHref": "../lessons/lesson-08-negation.html#l8-hazu-wake",
      "sentence": "夫「このおもちゃ、どうやって遊ぶの？　よくわからない。」妻「え？　子どもの物だから、そんなに（　）わけがないんだけど……。」",
      "choiceTexts": {
        "a": "簡単な",
        "b": "難しい",
        "c": "使える"
      }
    }
  },
  {
    "id": "ge-book-1-05",
    "hint": "The listener is a doll. What ability is the speaker rejecting?",
    "translation": "Even if you tell a doll a story, there is no way it will understand, is there?",
    "correctExplanation": "The listener is a doll. The clause to reject is わかる, “understand.” わかるわけがない expresses that rejection strongly.",
    "rationales": {
      "a": "わかる correctly supplies the understanding that the speaker rules out.",
      "b": "わからない would create “there is no way it will not understand,” reversing the intended belief.",
      "c": "わかりにくい would create “there is no way it is difficult to understand,” rather than rejecting the doll’s understanding."
    },
    "studyGuide": {
      "reading": "わかる",
      "strongerHint": "Put “there is no way that…” around each candidate clause.",
      "clue": "人形 is the supposed listener, and 聞かせても means “even if you tell it.”",
      "steps": [
        "The listener is a doll.",
        "The clause to reject is わかる, “understand.”",
        "わかるわけがない expresses that rejection strongly."
      ],
      "trap": "わからないわけがない would reject NOT understanding and imply it surely understands. The inner negative reverses the conclusion.",
      "reviewHref": "../lessons/lesson-08-negation.html#l8-hazu-wake",
      "sentence": "人形に話を聞かせても（　）わけがないでしょう。",
      "choiceTexts": {
        "a": "わかる",
        "b": "わからない",
        "c": "わかりにくい"
      }
    }
  },
  {
    "id": "ge-book-1-06",
    "hint": "Does the waiting family give the speaker a reason to return or a reason to stay away?",
    "translation": "My family is waiting back home, so I have to return for New Year.",
    "correctExplanation": "The family’s waiting makes staying away unacceptable to the speaker. 帰らない means “not return.” 帰らないわけにはいかない rejects that option, producing “I have to return.”",
    "rationales": {
      "a": "帰るわけにはいかない would mean the speaker cannot return, contradicting the family-based obligation.",
      "b": "帰れる adds ability; it does not form the intended “cannot avoid returning” pattern.",
      "c": "帰らない correctly creates the obligation to return."
    },
    "studyGuide": {
      "reading": "かえらない",
      "strongerHint": "The required outcome is returning home. Check what happens when a negative verb comes before わけにはいかない.",
      "clue": "家族が待っている creates a personal obligation to return.",
      "steps": [
        "The family’s waiting makes staying away unacceptable to the speaker.",
        "帰らない means “not return.”",
        "帰らないわけにはいかない rejects that option, producing “I have to return.”"
      ],
      "trap": "帰る is a godan verb: its negative is 帰らない. 帰れる is potential, “can return,” and does not supply the required inner negative.",
      "reviewHref": "#ge-nai-wake-niwa",
      "sentence": "国で家族が待っているから、正月には国へ（　）わけにはいかない。",
      "choiceTexts": {
        "a": "帰る",
        "b": "帰れる",
        "c": "帰らない"
      }
    }
  },
  {
    "id": "ge-book-1-07",
    "hint": "Heavy luggage tempts the speaker to do what? Which action is nevertheless unacceptable?",
    "translation": "The luggage is heavy, but I cannot leave it here.",
    "correctExplanation": "The speaker acknowledges that carrying the luggage is difficult. The rejected action is leaving it here, 置いていく. Its dictionary form attaches to わけにはいかない.",
    "rationales": {
      "a": "置いていく correctly names the action that the speaker cannot accept doing.",
      "b": "置いていける means “can leave it”; adding potential does not express the intended restraint directly.",
      "c": "置いていかない creates “cannot avoid leaving it,” reversing the intended action."
    },
    "studyGuide": {
      "reading": "おいていく",
      "strongerHint": "けれど introduces a contrast: it is heavy, but leaving it here is not an option.",
      "clue": "重いけれど contrasts the inconvenience with the restraint on leaving the luggage.",
      "steps": [
        "The speaker acknowledges that carrying the luggage is difficult.",
        "The rejected action is leaving it here, 置いていく.",
        "Its dictionary form attaches to わけにはいかない."
      ],
      "trap": "Do not change to potential just because English uses “cannot.” The Japanese construction itself provides the situational restraint.",
      "reviewHref": "#ge-wake-niwa",
      "sentence": "荷物が重いけれど、ここに（　）わけにはいかない。",
      "choiceTexts": {
        "a": "置いていく",
        "b": "置いていける",
        "c": "置いていかない"
      }
    }
  },
  {
    "id": "ge-book-1-08",
    "hint": "Which reason would stop someone who is able to read from choosing to read this?",
    "translation": "This is my friend’s diary, so I cannot read it.",
    "correctExplanation": "The ending expresses restraint due to the circumstances. A friend’s diary creates a privacy-based reason not to read. The speaker could read but feels they should not do so.",
    "rationales": {
      "a": "Not seeing the letters is a physical obstacle; 読めない would naturally express that inability.",
      "b": "A friend’s diary supplies the social or personal reason for holding back.",
      "c": "An unfamiliar foreign language creates a comprehension problem; 読めない would express that inability."
    },
    "studyGuide": {
      "reading": "ともだちのにっきだ",
      "strongerHint": "Distinguish a privacy concern from being unable to see or understand the writing.",
      "clue": "読むわけにはいかない calls for a reason that makes reading inappropriate.",
      "steps": [
        "The ending expresses restraint due to the circumstances.",
        "A friend’s diary creates a privacy-based reason not to read.",
        "The speaker could read but feels they should not do so."
      ],
      "trap": "All three choices can explain an English “can’t read.” Only one matches the specific Japanese distinction between restraint and inability.",
      "reviewHref": "#ge-wake-niwa-compare",
      "sentence": "（　）から、これは読むわけにはいかない。",
      "choiceTexts": {
        "a": "暗くて字が見えない",
        "b": "友だちの日記だ",
        "c": "知らない外国語で書いてある"
      }
    }
  },
  {
    "id": "ge-book-1-09",
    "hint": "Is the speaker imposing an obligation, qualifying a claim, or ruling out attendance?",
    "translation": "She is not in Japan now, so there is no way she will come to tomorrow’s gathering.",
    "correctExplanation": "The speaker treats her being abroad as incompatible with attending tomorrow. 来る is the possibility being rejected. 来るわけがない expresses that strong judgment.",
    "rationales": {
      "a": "来るわけがない correctly rules out her coming.",
      "b": "来ないわけにはいかない says she must come; no such obligation is being explained.",
      "c": "来るというわけではない only denies or qualifies the claim that she will come, rather than expressing the strong exclusion intended here."
    },
    "studyGuide": {
      "reading": "くるわけがない",
      "strongerHint": "Her current absence from Japan is presented as grounds for a strong negative conclusion.",
      "clue": "日本にいないのだから supplies the speaker’s reason for ruling out her coming.",
      "steps": [
        "The speaker treats her being abroad as incompatible with attending tomorrow.",
        "来る is the possibility being rejected.",
        "来るわけがない expresses that strong judgment."
      ],
      "trap": "This is the speaker’s conclusion from the exercise’s context. Read the stated reasoning rather than inventing travel arrangements or attendance obligations.",
      "reviewHref": "../lessons/lesson-08-negation.html#l8-hazu-wake",
      "sentence": "彼女は今、日本にいないのだから、あしたの会に（　）。",
      "choiceTexts": {
        "a": "来るわけがない",
        "b": "来ないわけにはいかない",
        "c": "来るというわけではない"
      }
    }
  },
  {
    "id": "ge-book-1-10",
    "hint": "What does the speaker judge about a three-year-old’s ability to solve this problem?",
    "translation": "There is no way a three-year-old could solve such a difficult problem.",
    "correctExplanation": "できる supplies the ability to solve the problem. The speaker rejects that ability in this situation. できるわけがない means “there is no way the child can do it.”",
    "rationales": {
      "a": "できるわけがない correctly denies the possibility of solving it.",
      "b": "できるわけにはいかない would concern an unacceptable circumstance, not the child’s lack of ability described here.",
      "c": "できないわけがない means “there is no way the child cannot do it,” reversing the intended judgment."
    },
    "studyGuide": {
      "reading": "できるわけがない",
      "strongerHint": "The difficult problem and the child’s age support rejection of ability, not a social prohibition.",
      "clue": "こんな難しい問題 and ３歳の子どもに establish the ability contrast.",
      "steps": [
        "できる supplies the ability to solve the problem.",
        "The speaker rejects that ability in this situation.",
        "できるわけがない means “there is no way the child can do it.”"
      ],
      "trap": "できないわけがない rejects inability, so it strongly implies the child CAN do it. Trace the inner clause before interpreting the outer negative.",
      "reviewHref": "../lessons/lesson-08-negation.html#l8-hazu-wake",
      "sentence": "こんな難しい問題が３歳の子どもに（　）。",
      "choiceTexts": {
        "a": "できるわけがない",
        "b": "できるわけにはいかない",
        "c": "できないわけがない"
      }
    }
  },
  {
    "id": "ge-book-2-01",
    "hint": "The switch is on, but the light is not behaving as expected. What does the speaker find impossible?",
    "translation": "I turned on the switch, so there is no way the red light should fail to come on. That’s strange.",
    "correctExplanation": "Turning on the switch should make the light come on. つかない names the failure to light up. つかないわけがない rejects that failure as contrary to the speaker’s expectation.",
    "rationales": {
      "a": "つかないわけにはいかない would frame lighting up as an unavoidable obligation, which does not match this equipment-based expectation.",
      "b": "つかないわけではない would qualify or deny the claim of not lighting up; it does not convey the strong puzzled expectation here.",
      "c": "つかないわけがない correctly means the light surely should come on."
    },
    "studyGuide": {
      "reading": "わけがない",
      "strongerHint": "つかない is already negative: the speaker rejects the possibility of the light NOT coming on.",
      "clue": "変だなあ reveals a conflict between the expected behavior and what the speaker sees.",
      "steps": [
        "Turning on the switch should make the light come on.",
        "つかない names the failure to light up.",
        "つかないわけがない rejects that failure as contrary to the speaker’s expectation."
      ],
      "trap": "A light does not have a personal duty to shine. Do not select an obligation pattern simply because two negatives yield a positive outcome.",
      "reviewHref": "../lessons/lesson-08-negation.html#l8-hazu-wake",
      "sentence": "スイッチを入れたんだから、赤いランプがつかない（　）。変だなあ。",
      "choiceTexts": {
        "a": "わけにはいかない",
        "b": "わけではない",
        "c": "わけがない"
      }
    }
  },
  {
    "id": "ge-book-2-02",
    "hint": "The speaker praises the temple but limits the basis of that claim. What are they admitting?",
    "translation": "It’s not that I’ve actually seen it myself, but that temple really is magnificent.",
    "correctExplanation": "The speaker does not claim to have personally seen the temple. というわけではない qualifies the source of the speaker’s knowledge. The praise can still stand even without firsthand observation.",
    "rationales": {
      "a": "わけにはいかない concerns restraint on an action, not a qualification of the claim “I saw it myself.”",
      "b": "わけではない correctly denies the firsthand-experience claim.",
      "c": "わけがない would strongly reject the possibility of having seen it, which is stronger and different from this modest qualification."
    },
    "studyGuide": {
      "reading": "わけではない",
      "strongerHint": "自分で実際に見たという introduces the claim of having personally seen it.",
      "clue": "けど connects a qualification about firsthand knowledge to the praise.",
      "steps": [
        "The speaker does not claim to have personally seen the temple.",
        "というわけではない qualifies the source of the speaker’s knowledge.",
        "The praise can still stand even without firsthand observation."
      ],
      "trap": "The past 見た belongs to the claim being denied. Do not turn this into a future refusal to visit or a statement that seeing it is impossible.",
      "reviewHref": "../lessons/lesson-08-negation.html#l8-wake-dewa-nai",
      "sentence": "自分で実際に見たという（　）けど、あの寺は本当に立派だよ。",
      "choiceTexts": {
        "a": "わけにはいかない",
        "b": "わけではない",
        "c": "わけがない"
      }
    }
  },
  {
    "id": "ge-book-2-03",
    "hint": "The child’s fever changes what the speaker feels they must do. Read the verb just before the blank.",
    "translation": "I’m sorry. My child has developed a fever, so I have to go home right away.",
    "correctExplanation": "The speaker needs to respond to the child’s situation. 帰らない means not going home. 帰らないわけにはいかない rejects staying away and expresses the obligation to return.",
    "rationales": {
      "a": "わけにはいかない correctly completes the double-negative obligation.",
      "b": "わけではない would merely deny that the speaker is not returning, without expressing the required necessity.",
      "c": "わけがない would express certainty that the speaker will return, rather than the personal obligation being explained."
    },
    "studyGuide": {
      "reading": "わけにはいかない",
      "strongerHint": "帰らない is already printed; combine it with an ending that makes returning unavoidable.",
      "clue": "子どもが熱を出してしまった creates the personal responsibility, and 帰らない supplies the inner negative.",
      "steps": [
        "The speaker needs to respond to the child’s situation.",
        "帰らない means not going home.",
        "帰らないわけにはいかない rejects staying away and expresses the obligation to return."
      ],
      "trap": "Do not add or mentally remove the printed ない. The blank contains only the ending; the complete construction begins at 帰らない.",
      "reviewHref": "#ge-nai-wake-niwa",
      "sentence": "すみません。子どもが熱を出してしまったんで、すぐ帰らない（　）んです。",
      "choiceTexts": {
        "a": "わけにはいかない",
        "b": "わけではない",
        "c": "わけがない"
      }
    }
  },
  {
    "id": "ge-book-2-04",
    "hint": "Is the speaker banning games completely, or making a more limited recommendation?",
    "translation": "It’s not that playing games is wrong, but children should play outside more.",
    "correctExplanation": "ゲームはいけない is the claim that games are unacceptable. というわけではない denies that blanket claim. が then introduces the more limited advice to play outside more.",
    "rationales": {
      "a": "わけにはいかない does not form the intended qualification of the claim about games.",
      "b": "わけではない correctly rejects the blanket judgment while leaving room for advice.",
      "c": "わけがない would strongly reject the possibility that games are unacceptable, rather than make this measured qualification."
    },
    "studyGuide": {
      "reading": "わけではない",
      "strongerHint": "もっと外で遊んだほうがいい recommends more outdoor play while softening a blanket rejection of games.",
      "clue": "The advice is qualified rather than a total ban on games.",
      "steps": [
        "ゲームはいけない is the claim that games are unacceptable.",
        "というわけではない denies that blanket claim.",
        "が then introduces the more limited advice to play outside more."
      ],
      "trap": "The first いけない is inside the statement being qualified. The final わけではない does not mean that playing outdoors is unnecessary.",
      "reviewHref": "../lessons/lesson-08-negation.html#l8-wake-dewa-nai",
      "sentence": "ゲームはいけないという（　）が、子どもはもっと外で遊んだほうがいい。",
      "choiceTexts": {
        "a": "わけにはいかない",
        "b": "わけではない",
        "c": "わけがない"
      }
    }
  },
  {
    "id": "ge-book-2-05",
    "hint": "What result does the speaker rule out if no action is taken?",
    "translation": "Let’s try it, anyway. There is no way we can succeed if we do nothing.",
    "correctExplanation": "何もしなければ means “if we do nothing.” 成功する is the possibility considered under that condition. 成功するわけがない strongly rules it out and supports trying.",
    "rationales": {
      "a": "わけにはいかない would suggest succeeding is unacceptable, not that success is impossible without action.",
      "b": "わけではない would only deny or qualify a claim of success, weakening the strong logic intended here.",
      "c": "わけがない correctly rejects success under the condition of doing nothing."
    },
    "studyGuide": {
      "reading": "わけがない",
      "strongerHint": "何もしなければ gives the condition; 成功する is the result being rejected under it.",
      "clue": "やってみよう encourages an attempt because inaction rules out success in the speaker’s reasoning.",
      "steps": [
        "何もしなければ means “if we do nothing.”",
        "成功する is the possibility considered under that condition.",
        "成功するわけがない strongly rules it out and supports trying."
      ],
      "trap": "The conditional negative is in 何もしなければ. 成功する remains positive before the ending that rejects its possibility.",
      "reviewHref": "../lessons/lesson-08-negation.html#l8-hazu-wake",
      "sentence": "とにかくやってみよう。何もしなければ成功する（　）んだから。",
      "choiceTexts": {
        "a": "わけにはいかない",
        "b": "わけではない",
        "c": "わけがない"
      }
    }
  },
  {
    "id": "ge-book-onepoint-01",
    "hint": "Has the good result already happened, or is the speaker asking the listener to anticipate it?",
    "translation": "I tried changing the way we conduct the experiment. It should succeed this time. Please look forward to the result.",
    "correctExplanation": "The method has been changed. The speaker expects that change to bring success. はずです expresses confidence in the expected outcome.",
    "rationales": {
      "hazu": "はず correctly expresses the speaker’s confident expectation of success.",
      "wake": "わけ would present success as an understood consequence or explanation; here the speaker is anticipating an outcome still to come."
    },
    "studyGuide": {
      "reading": "はず",
      "strongerHint": "期待していてください points forward to an expected result.",
      "clue": "今度はきっと and 期待していてください frame success as a confident expectation.",
      "steps": [
        "The method has been changed.",
        "The speaker expects that change to bring success.",
        "はずです expresses confidence in the expected outcome."
      ],
      "trap": "きっと is a clue to confidence, not a guaranteed はず trigger. The request to look forward to the result confirms the predictive stance.",
      "reviewHref": "#ge-onepoint",
      "sentence": "実験のやり方を変えてみたんです。今度はきっと成功する（　）です。期待していてください。",
      "choiceTexts": {
        "hazu": "はず",
        "wake": "わけ"
      }
    }
  },
  {
    "id": "ge-book-onepoint-02",
    "hint": "What does the past 出た tell you about the good result?",
    "translation": "I tried changing the way we conduct the experiment. That is why we got such a good result.",
    "correctExplanation": "The good result has occurred: いい結果が出た. The speaker explains it through the changed method. わけです presents that explanation as making sense.",
    "rationales": {
      "hazu": "はず would express an expectation about a result rather than explain the actual good result presented here.",
      "wake": "わけ correctly explains why the observed result was so good."
    },
    "studyGuide": {
      "reading": "わけ",
      "strongerHint": "The sentence explains the good result that was obtained after changing the method.",
      "clue": "だから links the change of method to the observed result.",
      "steps": [
        "The good result has occurred: いい結果が出た.",
        "The speaker explains it through the changed method.",
        "わけです presents that explanation as making sense."
      ],
      "trap": "Past tense alone does not require わけ. Here it is the explanatory relationship between the method and the observed result that decides.",
      "reviewHref": "#ge-onepoint",
      "sentence": "実験のやり方を変えてみたんです。だから、こんなにいい結果が出た（　）です。",
      "choiceTexts": {
        "hazu": "はず",
        "wake": "わけ"
      }
    }
  },
  {
    "id": "ge-book-onepoint-03",
    "hint": "Does B confirm seeing the scissors, or tell A where they are expected to be?",
    "translation": "A: “Where are the scissors?” B: “They should be in the usual drawer. Look carefully.”",
    "correctExplanation": "B knows where the scissors are normally kept. B expects them to be there now. あるはずだよ expresses that expectation and naturally leads to asking A to look.",
    "rationales": {
      "hazu": "はず correctly expresses an expected present location.",
      "wake": "わけ would present the location as a conclusion now explained or understood; no new explanation for the scissors’ location is being accepted here."
    },
    "studyGuide": {
      "reading": "はず",
      "strongerHint": "いつもの引き出し and よく探してみて show an expectation based on the usual location.",
      "clue": "The usual storage place supports an expectation that still needs checking.",
      "steps": [
        "B knows where the scissors are normally kept.",
        "B expects them to be there now.",
        "あるはずだよ expresses that expectation and naturally leads to asking A to look."
      ],
      "trap": "This is a present location, so “future = はず” would miss it. Identify the expectation rather than using tense as the rule.",
      "reviewHref": "#ge-onepoint",
      "sentence": "A「はさみはどこ？」B「いつもの引き出しの中にある（　）だよ。よく探してみて。」",
      "choiceTexts": {
        "hazu": "はず",
        "wake": "わけ"
      }
    }
  },
  {
    "id": "ge-book-onepoint-04",
    "hint": "What evidence supports waiting, and has the person arrived yet?",
    "translation": "He said, “I’ll definitely come,” so he should be coming. Let’s wait a little longer.",
    "correctExplanation": "The person said he would definitely attend. The speaker relies on that promise to expect his arrival. 来るはずですよ expresses this confidence and motivates waiting.",
    "rationales": {
      "hazu": "はず correctly expresses expected arrival based on the promise.",
      "wake": "わけ would frame coming as an understood consequence; here the speaker is reassuring others about an unconfirmed arrival."
    },
    "studyGuide": {
      "reading": "はず",
      "strongerHint": "The promise to come supports an expectation; もう少し待ちましょう shows the arrival is still awaited.",
      "clue": "The earlier promise supplies grounds for believing he will arrive.",
      "steps": [
        "The person said he would definitely attend.",
        "The speaker relies on that promise to expect his arrival.",
        "来るはずですよ expresses this confidence and motivates waiting."
      ],
      "trap": "のだから can support either an expectation or a conclusion. Read the follow-up about waiting to identify the speaker’s stance.",
      "reviewHref": "#ge-onepoint",
      "sentence": "彼は「必ず行くよ。」と言っていたのだから、来る（　）ですよ。もう少し待ちましょう。",
      "choiceTexts": {
        "hazu": "はず",
        "wake": "わけ"
      }
    }
  },
  {
    "id": "ge-book-onepoint-05",
    "hint": "What new information explains the early arrival that the speaker has noticed?",
    "translation": "Oh, you are helping with preparations for this event too, Yamakawa? That explains why you came so early.",
    "correctExplanation": "Yamakawa has already arrived early. The preparation role supplies an explanation for that fact. 来たわけですね expresses the speaker’s new understanding.",
    "rationales": {
      "hazu": "はず would express an expectation about having arrived, whereas the speaker is explaining the observed early arrival.",
      "wake": "わけ correctly marks the “now I see why” realization."
    },
    "studyGuide": {
      "reading": "わけ",
      "strongerHint": "Learning that Yamakawa is helping with preparations makes the early arrival understandable.",
      "clue": "それで connects the newly learned role to the observed early arrival.",
      "steps": [
        "Yamakawa has already arrived early.",
        "The preparation role supplies an explanation for that fact.",
        "来たわけですね expresses the speaker’s new understanding."
      ],
      "trap": "Do not treat それで alone as proof. It is the combination of an observed arrival and newly learned background that supports わけ.",
      "reviewHref": "#ge-onepoint",
      "sentence": "山川さんもこの大会の準備係ですか。それで、こんなに早く来た（　）ですね。",
      "choiceTexts": {
        "hazu": "はず",
        "wake": "わけ"
      }
    }
  },
  {
    "id": "ge-book-onepoint-06",
    "hint": "What does B infer about Kawaguchi’s current location from the trip two days ago?",
    "translation": "A: “Do you think Kawaguchi will attend today’s gathering?” B: “Oh? I don’t expect Kawaguchi to be in Japan now. He went to America the day before yesterday.”",
    "correctExplanation": "Kawaguchi left for America two days ago. B infers that he is not in Japan now. いないはずです keeps the negative inside the expected state.",
    "rationales": {
      "hazu": "はず correctly expresses a confident expectation that he is currently outside Japan.",
      "wake": "わけ would present the absence as an understood consequence or explanation, rather than the inferred current whereabouts given in this reply."
    },
    "studyGuide": {
      "reading": "はず",
      "strongerHint": "B expects Kawaguchi still to be abroad; this is not a report of checking today’s location.",
      "clue": "The earlier trip provides the basis for a confident inference about the present.",
      "steps": [
        "Kawaguchi left for America two days ago.",
        "B infers that he is not in Japan now.",
        "いないはずです keeps the negative inside the expected state."
      ],
      "trap": "いないはずだ means “I expect him not to be there,” not “he ought not to be there” as a moral judgment. It is also different from いるはずがない, which strongly rejects being there.",
      "reviewHref": "#ge-onepoint",
      "sentence": "A「今日、川口さんも会に出席するでしょうか。」B「え？　川口さんは今、日本にはいない（　）ですよ。おとといアメリカに行ったんです。」",
      "choiceTexts": {
        "hazu": "はず",
        "wake": "わけ"
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
