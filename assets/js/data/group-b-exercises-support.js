/* Authored study support for Group B book exercises.
 * Load after part2-quiz-data.js and before quiz.js. The generated source remains intact.
 * Only these 27 records are enriched; original answer keys and question types are retained.
 */
(function (root) {
  "use strict";
  if (typeof document !== "undefined" && document.body?.dataset.page !== "group-b") return;
  const support = [
  {
    "id": "gb-book-1-01",
    "hint": "The speaker conveys gratitude. Who receives those words?",
    "translation": "There are few opportunities to express gratitude afresh to one’s own parents.",
    "correctExplanation": "両親 names the people addressed. に対して marks the target of an action or attitude. The opportunity is to convey gratitude to those people.",
    "rationales": {
      "a": "について makes the parents the subject matter, rather than the recipients of thanks.",
      "b": "に対して correctly identifies the people toward whom the gratitude is directed.",
      "c": "によって would suggest the parents as an agent or cause; they are not the people conveying the thanks here.",
      "d": "にとって introduces an evaluation for the parents rather than the target of the words.",
      "e": "として would make parents a role in which someone acts, not the recipients of thanks."
    },
    "studyGuide": {
      "reading": "にたいして",
      "strongerHint": "Choose the target of the expression of thanks, not its topic or the person judging it.",
      "clue": "感謝の言葉を伝える directs words of thanks toward the parents.",
      "steps": [
        "両親 names the people addressed.",
        "に対して marks the target of an action or attitude.",
        "The opportunity is to convey gratitude to those people."
      ],
      "trap": "A person can be either a topic or a target. Ask whether the sentence is about discussing the parents or addressing gratitude to them.",
      "reviewHref": "#gb-ni-taishite",
      "sentence": "自分の両親（　）改めて感謝の言葉を伝える機会は、なかなかない。",
      "choiceTexts": {
        "a": "について",
        "b": "に対して",
        "c": "によって",
        "d": "にとって",
        "e": "として"
      }
    }
  },
  {
    "id": "gb-book-1-02",
    "hint": "What capacity does the father work in at the school?",
    "translation": "My father works as a mathematics teacher at a junior high school.",
    "correctExplanation": "Find the action 勤めています, works. 数学の教師 answers “as what?”. として links that role to working at the school.",
    "rationales": {
      "a": "について would make mathematics teachers a topic, not the father’s capacity.",
      "b": "に対して would make the teacher a target of an action.",
      "c": "によって would identify a teacher as an agent, cause, or means rather than the father’s own role.",
      "d": "にとって would introduce an evaluation for a teacher, but 勤める reports employment.",
      "e": "として correctly identifies his professional role."
    },
    "studyGuide": {
      "reading": "として",
      "strongerHint": "The noun 数学の教師 names his role.",
      "clue": "数学の教師 is the father’s job; 中学校に is his workplace.",
      "steps": [
        "Find the action 勤めています, works.",
        "数学の教師 answers “as what?”.",
        "として links that role to working at the school."
      ],
      "trap": "Keep role and workplace separate. The teacher is what he works as; the school is where he works.",
      "reviewHref": "#gb-toshite",
      "sentence": "父は数学の教師（　）中学校に勤めています。",
      "choiceTexts": {
        "a": "について",
        "b": "に対して",
        "c": "によって",
        "d": "にとって",
        "e": "として"
      }
    }
  },
  {
    "id": "gb-book-1-03",
    "hint": "The speaker looks up information online. What is being researched?",
    "translation": "I tried looking up this school on the Internet.",
    "correctExplanation": "調べてみた means tried researching or looking something up. The school is what the information concerns. 学校について gives that topic.",
    "rationales": {
      "a": "について correctly identifies the school as the research topic.",
      "b": "に対して would point an action or attitude toward the school rather than name the subject matter.",
      "c": "によって would make the school the means, agent, or determining factor.",
      "d": "にとって would make the school the standpoint of an evaluation.",
      "e": "として would make the school a role or function, which does not match the research."
    },
    "studyGuide": {
      "reading": "について",
      "strongerHint": "Use the expression for the topic of 調べる.",
      "clue": "この学校 is the subject of the research; インターネットで is the means.",
      "steps": [
        "調べてみた means tried researching or looking something up.",
        "The school is what the information concerns.",
        "学校について gives that topic."
      ],
      "trap": "Do not confuse what is researched with the method of researching it. The Internet already supplies the method here.",
      "reviewHref": "#gb-ni-tsuite",
      "sentence": "この学校（　）インターネットで調べてみた。",
      "choiceTexts": {
        "a": "について",
        "b": "に対して",
        "c": "によって",
        "d": "にとって",
        "e": "として"
      }
    }
  },
  {
    "id": "gb-book-1-04",
    "hint": "What makes the turbine turn and enables electricity generation?",
    "translation": "Wind power generation produces electricity by using wind energy to turn a turbine.",
    "correctExplanation": "風の力 is the resource used. によって can mark a means, not only a passive agent. The active 回して describes turning the turbine using that power.",
    "rationales": {
      "a": "について makes wind power a topic, rather than the means of turning the turbine.",
      "b": "に対して would direct an action toward the wind’s force, which is not the intended relationship.",
      "c": "によって correctly marks the power used.",
      "d": "にとって would introduce an evaluation from the wind’s perspective.",
      "e": "として would assign the role “wind power” rather than identify the resource that turns the turbine."
    },
    "studyGuide": {
      "reading": "によって",
      "strongerHint": "Choose the means or power used to perform the action.",
      "clue": "風の力 supplies the power for 回して, turning the turbine.",
      "steps": [
        "風の力 is the resource used.",
        "によって can mark a means, not only a passive agent.",
        "The active 回して describes turning the turbine using that power."
      ],
      "trap": "A passive verb is not required for every によって. This exercise tests means, while the main lesson examples emphasize passive agents.",
      "reviewHref": "#gb-ni-yotte",
      "sentence": "風力発電は風の力（　）風車を回して、電気を起こすものだ。",
      "choiceTexts": {
        "a": "について",
        "b": "に対して",
        "c": "によって",
        "d": "にとって",
        "e": "として"
      }
    }
  },
  {
    "id": "gb-book-1-05",
    "hint": "The sentence describes the writer’s status at birth. What was their position in the family?",
    "translation": "This writer was born in 1920 as the eldest son in a doctor’s family.",
    "correctExplanation": "Identify 生まれた as the birth event. 長男 gives the status at that event. として connects the status to being born.",
    "rationales": {
      "a": "について would make the eldest son the topic of discussion.",
      "b": "に対して would make him a target of an action, not the person’s birth status.",
      "c": "によって would present the eldest son as an agent or cause of the birth.",
      "d": "にとって would introduce an evaluation for the eldest son.",
      "e": "として correctly states the writer’s family status at birth."
    },
    "studyGuide": {
      "reading": "として",
      "strongerHint": "として can mark a status, not only a job chosen later.",
      "clue": "長男 names the writer’s position in the family.",
      "steps": [
        "Identify 生まれた as the birth event.",
        "長男 gives the status at that event.",
        "として connects the status to being born."
      ],
      "trap": "Roles and statuses are broader than occupations. Being born the eldest son fits として without implying a deliberate career choice.",
      "reviewHref": "#gb-toshite",
      "sentence": "この作家は1920年に医者の家の長男（　）生まれた。",
      "choiceTexts": {
        "a": "について",
        "b": "に対して",
        "c": "によって",
        "d": "にとって",
        "e": "として"
      }
    }
  },
  {
    "id": "gb-book-1-06",
    "hint": "What subject is written about in the materials being collected?",
    "translation": "I am now collecting various materials written about Japanese culture.",
    "correctExplanation": "日本文化について identifies the topic. 書いてある describes something written in the materials. The whole clause modifies 資料, which are being collected.",
    "rationales": {
      "a": "について correctly links the cultural topic to what is written.",
      "b": "に対して would emphasize an action or attitude directed at culture rather than the content of the materials.",
      "c": "によって would make culture a cause, means, or agent of the writing.",
      "d": "にとって would frame an evaluation for culture.",
      "e": "として would assign the status “Japanese culture,” not identify what the writing concerns."
    },
    "studyGuide": {
      "reading": "について",
      "strongerHint": "The verb phrase 書いてある supplies the content clue.",
      "clue": "日本文化 is the content described in the materials.",
      "steps": [
        "日本文化について identifies the topic.",
        "書いてある describes something written in the materials.",
        "The whole clause modifies 資料, which are being collected."
      ],
      "trap": "The next word is a verb phrase, not a bare noun. Use 文化について書いてある資料; についての資料 is a different noun-modifying structure.",
      "reviewHref": "#gb-ni-tsuite",
      "sentence": "今、日本文化（　）書いてある資料をいろいろ集めています。",
      "choiceTexts": {
        "a": "について",
        "b": "に対して",
        "c": "によって",
        "d": "にとって",
        "e": "として"
      }
    }
  },
  {
    "id": "gb-book-1-07",
    "hint": "The venue has been prepared. Who performed that preparation?",
    "translation": "The festival venue has already been completely prepared by the volunteers.",
    "correctExplanation": "整える becomes passive 整えられる. ボランティアの皆さん identifies the agents. によって connects those agents to the completed preparation.",
    "rationales": {
      "a": "について would make the volunteers the topic of information, not the agents of preparation.",
      "b": "に対して would make the volunteers the target rather than those doing the work.",
      "c": "によって correctly names who prepared the venue.",
      "d": "にとって would evaluate the venue for the volunteers, which the predicate does not do.",
      "e": "として would assign the role of volunteer to the venue or its description."
    },
    "studyGuide": {
      "reading": "によって",
      "strongerHint": "Use the agent of the passive 整えられました.",
      "clue": "整えられました presents the venue as prepared; the volunteers did the preparing.",
      "steps": [
        "整える becomes passive 整えられる.",
        "ボランティアの皆さん identifies the agents.",
        "によって connects those agents to the completed preparation."
      ],
      "trap": "A prepared place can be the subject while people are the agents. Do not mistake the volunteers for the people merely evaluating the venue.",
      "reviewHref": "#gb-ni-yotte",
      "sentence": "ボランティアの皆さん（　）祭りの会場はもうすっかり整えられました。",
      "choiceTexts": {
        "a": "について",
        "b": "に対して",
        "c": "によって",
        "d": "にとって",
        "e": "として"
      }
    }
  },
  {
    "id": "gb-book-1-08",
    "hint": "One person is bored; someone else finds the same thing interesting. Whose evaluation changes?",
    "translation": "Something one person finds boring can be interesting to another person.",
    "correctExplanation": "ほかの人 is the person for whom the evaluation differs. にとって marks that person’s perspective or situation. The printed は adds contrast with the first person.",
    "rationales": {
      "a": "について would make the other person the topic of the interesting content.",
      "b": "に対して would direct an attitude or action toward that person.",
      "c": "によっては can mean depending on the person in other wording, but this sentence directly states an evaluation for the other person; にとって is the textbook fit.",
      "d": "にとって correctly identifies who finds the same thing interesting.",
      "e": "として would mean in the role of another person, rather than from that person’s perspective."
    },
    "studyGuide": {
      "reading": "にとって",
      "strongerHint": "Choose the perspective from which the thing is 面白い.",
      "clue": "つまらない and 面白い contrast evaluations of the same thing.",
      "steps": [
        "ほかの人 is the person for whom the evaluation differs.",
        "にとって marks that person’s perspective or situation.",
        "The printed は adds contrast with the first person."
      ],
      "trap": "The presence of different people does not by itself require 人によって. Here the blank directly introduces whose perspective makes it interesting.",
      "reviewHref": "#gb-ni-totte",
      "sentence": "ある人がつまらないと思うことが、ほかの人（　）は面白いということがある。",
      "choiceTexts": {
        "a": "について",
        "b": "に対して",
        "c": "によって",
        "d": "にとって",
        "e": "として"
      }
    }
  },
  {
    "id": "gb-book-1-09",
    "hint": "Two kinds of fruit are compared by the climate where they are grown. Notice the の already before the blank.",
    "translation": "Mandarins are grown in warm regions, whereas apples are grown in cold regions.",
    "correctExplanation": "The first clause ends with 作られるの. に対して joins it to the contrasting apple-growing clause. The complete pattern is Aのに対してB.",
    "rationales": {
      "a": "について would make the first situation a topic rather than clearly contrast the two climates.",
      "b": "に対して correctly forms the contrast after の.",
      "c": "によって would suggest a cause or determining factor, not the intended comparison.",
      "d": "にとって would require a perspective for evaluating the second situation.",
      "e": "として would introduce an assumed status or role, not the climate contrast."
    },
    "studyGuide": {
      "reading": "にたいして",
      "strongerHint": "Use clause + のに対して for a contrast.",
      "clue": "暖かい地方 and 寒い地方 form the two contrasting situations.",
      "steps": [
        "The first clause ends with 作られるの.",
        "に対して joins it to the contrasting apple-growing clause.",
        "The complete pattern is Aのに対してB."
      ],
      "trap": "The printed の is part of the clause connection. This is the Lesson 4 contrast use, not an action directed toward mandarins.",
      "reviewHref": "#gb-ni-taishite",
      "sentence": "みかんが暖かい地方で作られるの（　）りんごは寒い地方で作られる。",
      "choiceTexts": {
        "a": "について",
        "b": "に対して",
        "c": "によって",
        "d": "にとって",
        "e": "として"
      }
    }
  },
  {
    "id": "gb-book-1-10",
    "hint": "For whom is sleep important? Look for the evaluation after the blank.",
    "translation": "Sleep is very important for growing children.",
    "correctExplanation": "成長期の子どもたち identifies the affected group. にとって relates the importance of sleep to them. This does not require the children themselves to state the judgment.",
    "rationales": {
      "a": "について would make children the topic of a discussion.",
      "b": "に対して would mark them as the target of an action or attitude, rather than those for whom sleep matters.",
      "c": "によって would make children an agent, cause, or factor.",
      "d": "にとって correctly frames the importance for growing children.",
      "e": "として would assign a role of growing children rather than relate sleep to their needs."
    },
    "studyGuide": {
      "reading": "にとって",
      "strongerHint": "大切 evaluates sleep in relation to growing children.",
      "clue": "眠ること is the thing evaluated as 大切.",
      "steps": [
        "成長期の子どもたち identifies the affected group.",
        "にとって relates the importance of sleep to them.",
        "This does not require the children themselves to state the judgment."
      ],
      "trap": "English “for” may describe a recipient, purpose, or perspective. Here it is importance for a group, not something being said to the children.",
      "reviewHref": "#gb-ni-totte",
      "sentence": "成長期の子どもたち（　）眠ることはとても大切です。",
      "choiceTexts": {
        "a": "について",
        "b": "に対して",
        "c": "によって",
        "d": "にとって",
        "e": "として"
      }
    }
  },
  {
    "id": "gb-book-1-11",
    "hint": "The design varies across historical periods. What factor does it depend on?",
    "translation": "Clothing designs change with the times.",
    "correctExplanation": "変わる describes change or variation. 時代によって means depending on the period. No passive agent is being named in this use.",
    "rationales": {
      "a": "について would make the era the subject matter, not the factor across which design varies.",
      "b": "に対して would direct an attitude or reaction toward the era.",
      "c": "によって correctly expresses variation with the period.",
      "d": "にとって would evaluate something for an era rather than state dependence.",
      "e": "として would assign an era as a role or status."
    },
    "studyGuide": {
      "reading": "によって",
      "strongerHint": "Use the dependence meaning of によって with 変わる.",
      "clue": "時代 is the factor across which the designs vary.",
      "steps": [
        "変わる describes change or variation.",
        "時代によって means depending on the period.",
        "No passive agent is being named in this use."
      ],
      "trap": "The same によって can mean by an agent or depending on a factor. Here 変わる and 時代 support dependence.",
      "reviewHref": "#gb-ni-yotte",
      "sentence": "服のデザインは時代（　）変わる。",
      "choiceTexts": {
        "a": "について",
        "b": "に対して",
        "c": "によって",
        "d": "にとって",
        "e": "として"
      }
    }
  },
  {
    "id": "gb-book-1-12",
    "hint": "The speaker is about to explain something. What is the explanation about?",
    "translation": "I will now explain the plan for our upcoming trip.",
    "correctExplanation": "説明する introduces information about a topic. 計画について marks that topic. ご説明いたします is the formal expression for the speaker’s explaining.",
    "rationales": {
      "a": "について correctly identifies the travel plan as the topic.",
      "b": "に対して would make the plan the target of a reaction rather than the subject being explained.",
      "c": "によって would make the plan a means, cause, or determining factor.",
      "d": "にとって would frame an evaluation for the plan.",
      "e": "として would mean in the capacity of a plan, which does not fit explaining it."
    },
    "studyGuide": {
      "reading": "について",
      "strongerHint": "The travel plan is the topic; ご説明いたします makes the action formal.",
      "clue": "旅行の計画 names the explanation’s subject matter.",
      "steps": [
        "説明する introduces information about a topic.",
        "計画について marks that topic.",
        "ご説明いたします is the formal expression for the speaker’s explaining."
      ],
      "trap": "Formal wording does not change the topic relationship. Do not choose a target expression just because the speaker addresses an audience.",
      "reviewHref": "#gb-ni-tsuite",
      "sentence": "これから今度の旅行の計画（　）ご説明いたします。",
      "choiceTexts": {
        "a": "について",
        "b": "に対して",
        "c": "によって",
        "d": "にとって",
        "e": "として"
      }
    }
  },
  {
    "id": "gb-book-1-13",
    "hint": "What use was assigned to coffee and tea in the past?",
    "translation": "In the past, coffee and tea were drunk as medicine.",
    "correctExplanation": "飲まれていた describes the past practice passively. 薬 names the function attributed to the drinks. として links that use to being drunk.",
    "rationales": {
      "a": "について would make medicine the topic, not the use of the drinks.",
      "b": "に対して would direct an action toward medicine.",
      "c": "によって would make medicine an agent, cause, or means of drinking rather than the assigned use.",
      "d": "にとって would introduce an evaluation for medicine.",
      "e": "として correctly means as medicine in this historical example."
    },
    "studyGuide": {
      "reading": "として",
      "strongerHint": "The noun 薬 identifies what they were taken as.",
      "clue": "薬 is the intended use, not the person performing the drinking.",
      "steps": [
        "飲まれていた describes the past practice passively.",
        "薬 names the function attributed to the drinks.",
        "として links that use to being drunk."
      ],
      "trap": "A passive ending does not force によって. First decide whether the noun is an agent or a role; medicine is the use here.",
      "reviewHref": "#gb-toshite",
      "sentence": "昔、コーヒーやお茶は薬（　）飲まれていた。",
      "choiceTexts": {
        "a": "について",
        "b": "に対して",
        "c": "によって",
        "d": "にとって",
        "e": "として"
      }
    }
  },
  {
    "id": "gb-book-1-14",
    "hint": "What development led to the change described afterward?",
    "translation": "Advances in medicine have made it possible to cure various illnesses.",
    "correctExplanation": "発達 names the advance or development. によって connects it to the resulting improvement. 治るようになってきた describes a change developing up to the present.",
    "rationales": {
      "a": "について would make medical development a topic rather than the cause of the change.",
      "b": "に対して would set up a target or contrast, not this causal relationship.",
      "c": "によって correctly connects the development to the improvement.",
      "d": "にとって would evaluate the result from the development’s perspective.",
      "e": "として would assign the role of medical development rather than identify what enabled the change."
    },
    "studyGuide": {
      "reading": "によって",
      "strongerHint": "Choose the cause of more illnesses becoming treatable.",
      "clue": "医学の発達 is linked to the resulting change in what can be cured.",
      "steps": [
        "発達 names the advance or development.",
        "によって connects it to the resulting improvement.",
        "治るようになってきた describes a change developing up to the present."
      ],
      "trap": "Do not force a passive-agent reading: 治る is intransitive. This によって supplies a cause or enabling development.",
      "reviewHref": "#gb-ni-yotte",
      "sentence": "医学の発達（　）さまざまな病気が治るようになってきた。",
      "choiceTexts": {
        "a": "について",
        "b": "に対して",
        "c": "によって",
        "d": "にとって",
        "e": "として"
      }
    }
  },
  {
    "id": "gb-book-2-01",
    "hint": "The printed について already makes the composer a topic. Which ending describes information about that topic?",
    "translation": "I do not know anything about this composer.",
    "correctExplanation": "Read the topic phrase この作曲家について. 何も + negative denies any knowledge about that topic. 知りません completes the information-related predicate.",
    "rationales": {
      "a": "とても好きです normally describes liking the composer directly, not knowledge about a topic introduced by について.",
      "b": "何も知りません naturally says the speaker knows nothing about the composer."
    },
    "studyGuide": {
      "reading": "なにもしりません",
      "strongerHint": "Choose knowing or not knowing, rather than directly liking the person.",
      "clue": "について introduces what the speaker knows about.",
      "steps": [
        "Read the topic phrase この作曲家について.",
        "何も + negative denies any knowledge about that topic.",
        "知りません completes the information-related predicate."
      ],
      "trap": "Liking someone normally uses a direct construction such as この作曲家が好きです. Mentioning a person does not make について suitable for every predicate.",
      "reviewHref": "#gb-ni-tsuite",
      "sentence": "わたしはこの作曲家について（　）",
      "choiceTexts": {
        "a": "とても好きです。",
        "b": "何も知りません。"
      }
    }
  },
  {
    "id": "gb-book-2-02",
    "hint": "The printed に対して identifies the people the service is directed toward. Which ending describes provision of the service?",
    "translation": "This service is provided to people aged eighty or older who live alone.",
    "correctExplanation": "に対して marks the target of the action. 行われる is the passive of 行う, carry out. 行われるものです describes a service carried out for that group.",
    "rationales": {
      "a": "行われるものです correctly describes a service provided to the target group.",
      "b": "とてもありがたいです evaluates its value for the group; that calls for にとって in this contrast."
    },
    "studyGuide": {
      "reading": "おこなわれるものです",
      "strongerHint": "Choose an action delivered to that group rather than their evaluation of it.",
      "clue": "The people are the target group of the service.",
      "steps": [
        "に対して marks the target of the action.",
        "行われる is the passive of 行う, carry out.",
        "行われるものです describes a service carried out for that group."
      ],
      "trap": "ありがたい would evaluate how welcome the service is for the group and would normally pair with にとって here. The target phrase already printed constrains the choice.",
      "reviewHref": "#gb-ni-taishite",
      "sentence": "このサービスは80歳以上の一人暮らしの方に対して（　）",
      "choiceTexts": {
        "a": "行われるものです。",
        "b": "とてもありがたいです。"
      }
    }
  },
  {
    "id": "gb-book-2-03",
    "hint": "The speaker personally received an invitation. Which agent marker is usual in this kind of passive?",
    "translation": "Today I went to see a film after Lee invited me.",
    "correctExplanation": "誘う becomes passive 誘われる. リーさんに marks the person who invited the speaker. The speaker then went to see the film.",
    "rationales": {
      "a": "リーさんに is the natural agent phrase for this personal invitation.",
      "b": "リーさんによって is not the usual agent choice for this everyday invitation. A passive form alone is insufficient reason to choose it."
    },
    "studyGuide": {
      "reading": "リーさんに",
      "strongerHint": "Everyday personal invitations normally use person + に + 誘われる.",
      "clue": "わたし and 誘われて describe a personal invitation received by the speaker.",
      "steps": [
        "誘う becomes passive 誘われる.",
        "リーさんに marks the person who invited the speaker.",
        "The speaker then went to see the film."
      ],
      "trap": "Do not replace every passive に with によって. The textbook contrasts a personal invitation with descriptions of works created or prepared by an agent.",
      "reviewHref": "#gb-ni-yotte",
      "sentence": "わたしは今日（　）誘われて映画を見に行った。",
      "choiceTexts": {
        "a": "リーさんに",
        "b": "リーさんによって"
      }
    }
  },
  {
    "id": "gb-book-2-04",
    "hint": "The printed にとって asks for an evaluation of the problem for the speaker. Read the ending carefully.",
    "translation": "I cannot say that this problem is easy for me.",
    "correctExplanation": "簡単だ supplies the evaluation “easy.” とは言えません means cannot say that. Together, the sentence declines to call the problem easy for the speaker.",
    "rationales": {
      "a": "よく考えなければなりません describes an obligation to think carefully, not the evaluation required by the printed phrase.",
      "b": "簡単だとは言えません correctly gives a qualified negative evaluation for the speaker."
    },
    "studyGuide": {
      "reading": "かんたんだとはいえません",
      "strongerHint": "Choose a judgment about difficulty, including its negative qualification.",
      "clue": "私にとって identifies whose experience determines the difficulty.",
      "steps": [
        "簡単だ supplies the evaluation “easy.”",
        "とは言えません means cannot say that.",
        "Together, the sentence declines to call the problem easy for the speaker."
      ],
      "trap": "Do not stop at 簡単. The final 言えません reverses an affirmative “it is easy” reading without necessarily saying the problem is impossible.",
      "reviewHref": "#gb-ni-totte",
      "sentence": "この問題はわたしにとって（　）",
      "choiceTexts": {
        "a": "よく考えなければなりません。",
        "b": "簡単だとは言えません。"
      }
    }
  },
  {
    "id": "gb-book-2-05",
    "hint": "The printed ごみとして identifies what usable things are being treated as. Which ending supplies that treatment?",
    "translation": "Things that are still usable are being thrown away as rubbish.",
    "correctExplanation": "として introduces the role or treatment “as rubbish.” 捨てる becomes passive 捨てられる. 捨てられている describes the items being discarded.",
    "rationales": {
      "a": "捨てられている correctly completes the passive treatment of the items as rubbish.",
      "b": "もったいないと思う gives a personal evaluation without the needed action connected to ごみとして."
    },
    "studyGuide": {
      "reading": "すてられている",
      "strongerHint": "Choose the action of discarding them in that category.",
      "clue": "ごみ is the category assigned to the usable items.",
      "steps": [
        "として introduces the role or treatment “as rubbish.”",
        "捨てる becomes passive 捨てられる.",
        "捨てられている describes the items being discarded."
      ],
      "trap": "もったいない expresses the speaker’s evaluation of wastefulness, but it does not complete this “treated as rubbish” structure.",
      "reviewHref": "#gb-toshite",
      "sentence": "まだ使えるものがごみとして（　）",
      "choiceTexts": {
        "a": "捨てられている。",
        "b": "もったいないと思う。"
      }
    }
  },
  {
    "id": "gb-book-onepoint-01",
    "hint": "People are gossiping. Is the teacher their listener or their subject matter?",
    "translation": "Everyone is gossiping about the new teacher.",
    "correctExplanation": "The teacher is what the gossip concerns. について marks subject matter. The teacher need not be present or hear the gossip.",
    "rationales": {
      "a": "について correctly names the gossip’s topic.",
      "b": "にとって would introduce an evaluation for the teacher.",
      "c": "に対して would make the teacher the target of speech or behavior rather than the topic of gossip."
    },
    "studyGuide": {
      "reading": "について",
      "strongerHint": "Choose the topic of the gossip.",
      "clue": "うわさをしている describes talk concerning someone.",
      "steps": [
        "The teacher is what the gossip concerns.",
        "について marks subject matter.",
        "The teacher need not be present or hear the gossip."
      ],
      "trap": "A person talked about is different from a person spoken to. Keep the topic and listener separate.",
      "reviewHref": "#gb-ni-tsuite",
      "sentence": "新しく来た先生（　）みんながうわさをしている。",
      "choiceTexts": {
        "a": "について",
        "b": "にとって",
        "c": "に対して"
      }
    }
  },
  {
    "id": "gb-book-onepoint-02",
    "hint": "The way of speaking is rude toward someone. Who receives that treatment?",
    "translation": "It is rude to speak to the teacher that way.",
    "correctExplanation": "The teacher is the person toward whom the speech is directed. に対して marks that target. 失礼だ supplies the negative evaluation of the treatment.",
    "rationales": {
      "a": "について would make the teacher the subject matter being discussed, rather than the person addressed rudely.",
      "b": "にとって would frame the teacher’s perspective; the textbook’s intended relation is rude treatment toward the teacher.",
      "c": "に対して correctly marks the target of the rude speech."
    },
    "studyGuide": {
      "reading": "にたいして",
      "strongerHint": "The teacher is the target of the attitude shown by the speech.",
      "clue": "その話し方 and 失礼 describe the way someone addresses the teacher.",
      "steps": [
        "The teacher is the person toward whom the speech is directed.",
        "に対して marks that target.",
        "失礼だ supplies the negative evaluation of the treatment."
      ],
      "trap": "An adjective alone does not guarantee にとって. Words such as 失礼 and 親切 can describe attitudes directed toward a target.",
      "reviewHref": "#gb-ni-taishite",
      "sentence": "先生（　）その話し方は失礼だ。",
      "choiceTexts": {
        "a": "について",
        "b": "にとって",
        "c": "に対して"
      }
    }
  },
  {
    "id": "gb-book-onepoint-03",
    "hint": "From whose perspective are the students like their own children?",
    "translation": "I hear that, for Professor Aoyama, the students are like their own children.",
    "correctExplanation": "Aoyama supplies the relevant perspective. にとって frames that personal meaning or relationship. だそうだ reports what the speaker has heard, rather than adding a direct observation.",
    "rationales": {
      "a": "について would make Aoyama the topic of information, not the standpoint for regarding the students as children.",
      "b": "にとって correctly identifies the teacher’s perspective.",
      "c": "に対して would make the teacher the target of the students’ action or attitude, reversing the intended relationship."
    },
    "studyGuide": {
      "reading": "にとって",
      "strongerHint": "Choose the person whose relationship to the students is being described.",
      "clue": "自分の子どものようなもの describes how the teacher regards the students.",
      "steps": [
        "Aoyama supplies the relevant perspective.",
        "にとって frames that personal meaning or relationship.",
        "だそうだ reports what the speaker has heard, rather than adding a direct observation."
      ],
      "trap": "にとって can introduce an evaluative noun phrase, not only a simple adjective. Reported そうだ belongs to the ending, not the particle choice.",
      "reviewHref": "#gb-ni-totte",
      "sentence": "青山先生（　）学生たちは自分の子どものようなものだそうだ。",
      "choiceTexts": {
        "a": "について",
        "b": "にとって",
        "c": "に対して"
      }
    }
  },
  {
    "id": "gb-book-onepoint-04",
    "hint": "Who needs time to think quietly?",
    "translation": "What I need now is time to think quietly.",
    "correctExplanation": "必要なのは identifies what is needed. にとって relates that need to the speaker. 静かに考える時間 supplies the needed thing.",
    "rationales": {
      "a": "について would introduce information about the speaker, rather than necessity for the speaker.",
      "b": "にとって correctly frames the speaker’s need.",
      "c": "に対して would make the speaker the target of an action or attitude."
    },
    "studyGuide": {
      "reading": "にとって",
      "strongerHint": "必要 evaluates what matters in the speaker’s present situation.",
      "clue": "今のわたし is the person whose current needs are evaluated.",
      "steps": [
        "必要なのは identifies what is needed.",
        "にとって relates that need to the speaker.",
        "静かに考える時間 supplies the needed thing."
      ],
      "trap": "A sentence can evaluate necessity without the word “opinion.” にとって also concerns a person’s situation or interests.",
      "reviewHref": "#gb-ni-totte",
      "sentence": "今のわたし（　）必要なのは、静かに考える時間だ。",
      "choiceTexts": {
        "a": "について",
        "b": "にとって",
        "c": "に対して"
      }
    }
  },
  {
    "id": "gb-book-onepoint-05",
    "hint": "The sentence judges what will be hardest. Who faces that difficulty?",
    "translation": "The hardest thing for that mayor will probably be getting residents to understand the plan.",
    "correctExplanation": "The mayor is the person facing the task. にとって frames the difficulty in relation to the mayor. 理解してもらう means getting the residents to understand; だろう keeps the prediction qualified.",
    "rationales": {
      "a": "について would make the mayor the topic rather than identify whose task is difficult.",
      "b": "にとって correctly marks the person facing the difficulty.",
      "c": "に対して would direct an action or attitude at the mayor instead."
    },
    "studyGuide": {
      "reading": "にとって",
      "strongerHint": "Choose the mayor as the person for whom the task is difficult.",
      "clue": "最も難しい evaluates a task for the mayor.",
      "steps": [
        "The mayor is the person facing the task.",
        "にとって frames the difficulty in relation to the mayor.",
        "理解してもらう means getting the residents to understand; だろう keeps the prediction qualified."
      ],
      "trap": "The mayor and residents have different roles. The mayor faces the difficulty; the residents must do the understanding.",
      "reviewHref": "#gb-ni-totte",
      "sentence": "あの市長（　）最も難しいのは、計画を住民に理解してもらうことだろう。",
      "choiceTexts": {
        "a": "について",
        "b": "にとって",
        "c": "に対して"
      }
    }
  },
  {
    "id": "gb-book-onepoint-06",
    "hint": "The speaker asks what the listener knows. Who is the information about?",
    "translation": "Do you know anything about that mayor?",
    "correctExplanation": "The listener has or lacks the knowledge. The mayor is what that knowledge concerns. について identifies that topic.",
    "rationales": {
      "a": "について correctly names the subject of the requested knowledge.",
      "b": "にとって would introduce an evaluation for the mayor.",
      "c": "に対して would mark a target of an action or attitude, rather than what the listener knows about."
    },
    "studyGuide": {
      "reading": "について",
      "strongerHint": "ご存じです is a respectful knowledge expression; the mayor is its topic.",
      "clue": "何かご存じですか asks for information concerning the mayor.",
      "steps": [
        "The listener has or lacks the knowledge.",
        "The mayor is what that knowledge concerns.",
        "について identifies that topic."
      ],
      "trap": "Respectful ご存じです honors the knower, not automatically the person named before the blank. Keigo does not change the topic relationship.",
      "reviewHref": "#gb-ni-tsuite",
      "sentence": "あの市長（　）何かご存じですか。",
      "choiceTexts": {
        "a": "について",
        "b": "にとって",
        "c": "に対して"
      }
    }
  },
  {
    "id": "gb-book-onepoint-07",
    "hint": "We asked someone to cancel a plan. Who received that demand?",
    "translation": "We asked the mayor to cancel the plan.",
    "correctExplanation": "求める means request or demand here. に対して marks whom that demand is directed toward. The cancellation is what the speakers ask for, not an event confirmed to have happened.",
    "rationales": {
      "a": "について would make the mayor the topic of discussion rather than the person asked.",
      "b": "にとって would evaluate something for the mayor.",
      "c": "に対して correctly names the target of the demand."
    },
    "studyGuide": {
      "reading": "にたいして",
      "strongerHint": "求めた directs the request toward the mayor.",
      "clue": "計画の中止 is the requested outcome; the mayor is the person addressed.",
      "steps": [
        "求める means request or demand here.",
        "に対して marks whom that demand is directed toward.",
        "The cancellation is what the speakers ask for, not an event confirmed to have happened."
      ],
      "trap": "Distinguish recipient from content: the mayor receives the request; cancellation is its content. A request does not prove compliance.",
      "reviewHref": "#gb-ni-taishite",
      "sentence": "わたしたちはあの市長（　）計画の中止を求めた。",
      "choiceTexts": {
        "a": "について",
        "b": "にとって",
        "c": "に対して"
      }
    }
  },
  {
    "id": "gb-book-onepoint-08",
    "hint": "The mayor acts arrogantly toward a group. Who receives that attitude?",
    "translation": "That mayor always has an arrogant attitude toward us citizens.",
    "correctExplanation": "わたしたち市民 identifies the people addressed or treated. に対して directs the attitude toward them. 偉そう describes acting self-important; it does not praise the mayor as admirable.",
    "rationales": {
      "a": "について would make citizens the topic of information or discussion.",
      "b": "にとって would introduce an evaluation for citizens; the intended construction directs the mayor’s attitude toward them.",
      "c": "に対して correctly identifies the target of the arrogant attitude."
    },
    "studyGuide": {
      "reading": "にたいして",
      "strongerHint": "態度 identifies a directed attitude, with citizens as its target.",
      "clue": "偉そうな態度 describes how the mayor treats the citizens.",
      "steps": [
        "わたしたち市民 identifies the people addressed or treated.",
        "に対して directs the attitude toward them.",
        "偉そう describes acting self-important; it does not praise the mayor as admirable."
      ],
      "trap": "Do not select にとって merely because citizens are people. Here they receive an attitude rather than supply the perspective of a stated evaluation.",
      "reviewHref": "#gb-ni-taishite",
      "sentence": "あの市長はわたしたち市民（　）いつも偉そうな態度だ。",
      "choiceTexts": {
        "a": "について",
        "b": "にとって",
        "c": "に対して"
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
