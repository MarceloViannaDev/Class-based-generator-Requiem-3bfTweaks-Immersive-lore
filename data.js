window.gameData = {
  // Lista de Raças
  races: ["Nord", "Imperial", "Breton", "Redguard", "Altmer", "Bosmer", "Dunmer", "Orsimer", "Khajiit", "Argonian"],

  // Lista de Classes
  classes: ["Warrior", "Barbarian", "Ranger", "Rogue", "Nightblade", "Paladin", "Cleric", "Mage", "Conjurer", "Pyromancer", "Cryomancer", "Battlemage", "Spellsword", "Necromancer", "Assassin", "Archer", "Sorcerer"],

  // --- BANCO DE NOMES PRÓPRIOS (LORE-FRIENDLY) ---
  firstNames: {
    // 1. NORDS: Nomes curtos, fortes, com consoantes fortes (R, K, G, V) e terminações como -ar, -or, -ik, -is, -a, -e, -ra, -ta.
    "Nord": {
      "male": ["Jorund", "Hrogar", "Vigarr", "Thorgar", "Gunnvald", "Hakon", "Arnskar", "Bjaldir", "Storr", "Kjoric", "Valdar", "Ragnvald", "Orvarg", "Torbjorn", "Vikarr", "Rorik", "Halvar", "Agmundr", "Einar", "Sigfast", "Brandr", "Grimkell", "Oddgeir", "Asvald", "Ketill", "Herjolfr", "Gauti", "Refr", "Frodi", "Hrani", "Geirr", "Hogni", "Jokull", "Kolli", "Olvir", "Ragi", "Skeggi", "Sokkolfr", "Thordr", "Vali", "Vifil", "Yngvarr", "Bersi", "Draugr", "Eyvindr"],
      "female": ["Freja", "Gunnhild", "Sigrid", "Solveig", "Ragnhild", "Aslaug", "Kara", "Runa", "Ylva", "Dagny", "Hervor", "Svanhild", "Tova", "Brynhild", "Gjerd", "Hildegard", "Ingrid", "Jorunn", "Liva", "Maren", "Nanna", "Oda", "Rigmor", "Saga", "Thyra", "Vigdis", "Åse", "Birgitta", "Disa", "Edda", "Frida", "Gudrun", "Hulda", "Idunn", "Katla", "Lilja", "Magnhild", "Ragnfrid", "Signe", "Torun", "Ulvhild", "Valgerd", "Yrsa", "Bodil", "Drifa", "Eydis"]
    },
    // 2. IMPERIAIS: Nomes com sonoridade Latina (terminações -us, -ius, -a, -ia), formais e estruturados.
    "Imperial": {
      "male": ["Aemilius", "Cassianus", "Drusus", "Fabianus", "Gratian", "Hadrianus", "Junianus", "Lentulus", "Marcellus", "Numerius", "Octavius", "Pomponius", "Quirinius", "Rufrius", "Sergius", "Tiberinus", "Valens", "Vibianus", "Aurelian", "Caelian", "Domitian", "Faustian", "Galerian", "Herennius", "Isauricus", "Justian", "Laetorius", "Mamertus", "Nonius", "Opimianus", "Pescennius", "Rutilius", "Scaevola", "Tuccianus", "Ulpius", "Vettius", "Vulso"],
      "female": ["Aemilia", "Balbina", "Cassia", "Decima", "Fabiana", "Gratiana", "Hadriana", "Junia", "Laelia", "Marcia", "Nonia", "Octavia", "Petronia", "Quinta", "Rutilia", "Sestia", "Tertia", "Umbria", "Vibia", "Acilia", "Baebia", "Caecilia", "Domitia", "Egnatia", "Fulvia", "Geganina", "Hortensia", "Iunia", "Licinia", "Mettia", "Norbana", "Otacilia", "Plautia", "Rusia", "Salvia", "Titia", "Valgia", "Volumnia"]
    },
    // 3. BRETÕES: Inspiração Celta (Welsh, Gaulês) para os nativos de Skyrim e Franco-Galês para os de High Rock.
    "Breton": {
      "male": ["Madanach", "Cosnach", "Dryston", "Banning", "Amaund", "Meric", "Riocard", "Tristan", "Corvus", "Gerallt", "Iolo", "Llywelyn", "Maelog", "Owain", "Padrig", "Rhodri", "Tegid", "Yestin", "Alainn", "Benoic", "Corentin", "Erwan", "Gurvan", "Hoel", "Jorys", "Kaourintin", "Mael", "Neven", "Paol", "Rioc", "Soizic", "Tanguy", "Yann", "Armel", "Brieg", "Caradeg", "Divy", "Edern", "Fanch", "Gildas", "Ivi", "Judoc", "Kavan", "Lunet", "Morvan", "Nedeleg", "Oriant", "Perceval", "Rual", "Tudual"],
      "female": ["Aerona", "Branwen", "Cerridwen", "Dwynwen", "Eira", "Ffion", "Gwen", "Hafren", "Iona", "Jenefer", "Kerys", "Lowri", "Mair", "Nia", "Olwen", "Rhian", "Siani", "Tegan", "Anwen", "Beca", "Carys", "Dilys", "Efa", "Fflur", "Glesni", "Heledd", "Iorwen", "Jasmin", "Kelyn", "Lili", "Megan", "Nerys", "Osian", "Pili", "Rhosyn", "Seren", "Tanwen", "Urien", "Vala", "Wyn", "Xena", "Yara", "Zara", "Aderyn", "Blodwen", "Cadi", "Delyth", "Elen", "Ffion", "Gruffudd"]
    },
    // 4. REDGUARDS: Influências Árabe, Berbere e Norte-Africana, com fonemas guturais e fortes.
    "Redguard": {
      "male": ["Azadi", "Bashir", "Dahir", "Fahir", "Hassan", "Jaffar", "Khalid", "Malik", "Nasser", "Omar", "Rashid", "Samir", "Tarik", "Usama", "Yasin", "Zahir", "Azzin", "Cyrus", "Radan", "Sahan", "Barakah", "Jalal", "Karim", "Mansur", "Nabil", "Riyad", "Sadiq", "Tariq", "Walid", "Zayd", "Akil", "Basir", "Daoud", "Faisal", "Ghalib", "Hamid", "Idris", "Jibril", "Kamil", "Lutfi", "Mahir", "Nasir", "Qadir", "Rafi", "Sabir", "Tahir", "Umar", "Wasim", "Yahya", "Zaki", "Adnan", "Bilal", "Dinar", "Faruq", "Hakim"],
      "female": ["Aisha", "Bahira", "Dalila", "Fatin", "Ghalia", "Halima", "Jasmina", "Kamilah", "Layla", "Muna", "Nadia", "Oriana", "Rana", "Safiya", "Tahira", "Yasmin", "Zahra", "Amira", "Naila", "Samira", "Amina", "Bushra", "Farida", "Hana", "Jamila", "Lubna", "Nura", "Rashida", "Salma", "Zakia", "Asma", "Badiyah", "Camelia", "Dunya", "Elham", "Fatima", "Ghada", "Hind", "Iman", "Juman", "Khadija", "Latifa", "Maysa", "Nadia", "Ola", "Qamar", "Rima", "Saba", "Thana", "Ulya", "Wafa", "Xara", "Yusra", "Zaynab"]
    },
    // 5. ALTMER: Nomes fluidos e melódicos, com prefixos élficos (Ear-, Cal-, Cir-, Val-) e terminações em -il, -ril, -nwe.
    "Altmer": {
      "male": ["Calaril", "Cirion", "Earandil", "Valandur", "Faloril", "Caranir", "Elenion", "Farothil", "Alarion", "Firandir", "Corendil", "Corrilon", "Cyrellan", "Ganion", "Kalatar", "Kelkemmon", "Lillandril", "Lovithar", "Mithion", "Saruan", "Saurel", "Solinar", "Aicantar", "Calcelmo", "Elrondir", "Gelthor", "Hendil", "Karndar", "Lauriel", "Mankar", "Nerien", "Ondolemar", "Pelinal", "Quaranir", "Rulindil", "Sinderion", "Tanion", "Uulen", "Vorian", "Xercen", "Ancano", "Caelor", "Eleniel", "Gildor", "Ithilion", "Larethor", "Nimloth", "Orophin", "Rumil", "Tathar", "Vanimar"],
      "female": ["Earwen", "Calanwe", "Cirile", "Valrie", "Falile", "Caranwe", "Elarie", "Farile", "Alanya", "Firiel", "Aldanwe", "Brethil", "Calathiel", "Dioriel", "Eldalótë", "Fíriel", "Gilraen", "Híril", "Ithilwen", "Jasra", "Kíriel", "Lúthien", "Míriel", "Niphredil", "Oropheriel", "Palmir", "Quelwen", "Rían", "Silmariën", "Telperien", "Uinen", "Vanimeldë", "Wenriel", "Xilphariel", "Yavannamírë", "Alawen", "Aryon", "Celdrahil", "Eldamil", "Farin", "Galanodel", "Ilanya", "Kynareth", "Lilatha", "Miriath", "Niriel", "Olenwyn", "Quenara", "Rurelion", "Silma", "Talara", "Ursanne", "Valsirenn", "Yvara", "Zaleria"]
    },
    // 6. BOSMER: Nomes inspirados no Sindarin élfico, com suavidade, vogais abertas e consoantes fluidas (L, M, N, R).
    "Bosmer": {
      "male": ["Faelan", "Thaeryn", "Calindil", "Ravyn", "Niruin", "Anoriath", "Glarthir", "Enthir", "Malborn", "Ungolim", "Aelwin", "Bor", "Caalorn", "Elond", "Fimion", "Gaenor", "Hondros", "Indriel", "Ja'ren", "Korth", "Llandris", "Mithor", "Nimphan", "Ormond", "Pelin", "Quiron", "Silvenar", "Tandil", "Ulthorn", "Beleg", "Cirdan", "Denethor", "Eol", "Feren", "Gwindor", "Halmir", "Lenwë", "Oropher", "Saeros", "Thingol", "Aranel", "Beren", "Caranthir", "Dior", "Elenwë", "Fingon", "Gildor", "Haldir", "Imladris", "Jorund", "Keleborn", "Lomion", "Maedhros", "Neldor", "Orophin", "Peregrin", "Quen", "Rumil", "Sador", "Taurion", "Ulfang", "Vorondil", "Weland", "Xeran", "Yaveth"],
      "female": ["Nivenor", "Wylandriah", "Nimriel", "Aerin", "Gindara", "Aranwen", "Anwen", "Bravil", "Cindiri", "Deyanira", "Elanwe", "Finori", "Ghilani", "Hondara", "Ilmara", "Ja'fina", "Kesh", "Lianna", "Melys", "Niraya", "Orana", "Piri", "Quinthia", "Raelag", "Sarel", "Taminwe", "Arwen", "Bereniel", "Celebrindal", "Elanor", "Finduilas", "Gilraen", "Ithilwen", "Luthien", "Nimloth", "Silmarien", "Aredhel", "Beleril", "Círdanel", "Dís", "Eldalótë", "Fíriel", "Galadriel", "Híril", "Idril", "Jasril", "Kíriel", "Lothíriel", "Míriel", "Niphredil", "Oropheriel", "Palmiriel", "Quelwen", "Rían", "Silivren", "Tinúviel", "Uinen", "Vardamir", "Wenriel", "Xilphariel", "Yavannamírë"]
    },
    // 7. DUNMER: Nomes inspirados no Dunmeri (Ashland), com sons guturais, 'Z', 'K', 'TH' e terminações em -yn, -ni, -ra, -lo.
    "Dunmer": {
      "male": ["Dralyn", "Berel", "Faryon", "Gavis", "Hleryn", "Iver", "Karus", "Llandel", "Milyn", "Nelyn", "Olis", "Parnil", "Qorwyn", "Rulvyn", "Sondas", "Tramyn", "Ulven", "Varon", "Welyn", "Xaryn", "Yalvon", "Zerith", "Aranil", "Baryn", "Covyn", "Dralyn", "Erol", "Fervyn", "Goril", "Helvyn", "Ildyn", "Joril", "Kylor", "Andas", "Balur", "Crassius", "Daryn", "Eryndor", "Falvilo", "Galdrus", "Hlaren", "Ildari", "Kaushad", "Llaren", "Mavon", "Neloth", "Othren", "Pellus", "Relyn", "Sarethi", "Teldryn", "Uvyn", "Vilyn"],
      "female": ["Dralora", "Erenea", "Favela", "Hlavea", "Ildri", "Karena", "Llensi", "Mavani", "Nevani", "Olevi", "Pavani", "Qorana", "Ravela", "Sareni", "Talvani", "Uvani", "Veralen", "Wyni", "Xelni", "Yalni", "Zareni", "Arvani", "Beralen", "Covena", "Draleni", "Erevi", "Feralen", "Gavani", "Helani", "Iralen", "Joreni", "Kivalen", "Lloreni", "Almse", "Bravosi", "Eris", "Farena", "Gals", "Hlona", "Ilmeni", "Julan", "Karethys", "Lleraya", "Milyn", "Naryu", "Oresa", "Pellus", "Ravani", "Savani", "Teldra", "Ulyn", "Velanya"]
    },
    // 8. ORSIMER: Nomes fortes, com sílabas curtas e guturais (G, K, R, Z), passando sensação de força bruta e tradição de clã.
    "Orsimer": {
      "male": ["Bazul", "Durgash", "Ghamorz", "Ghorza", "Gul", "Khaguk", "Lurbuk", "Mogdurz", "Nagrub", "Ogrul", "Ragash", "Shagar", "Thrug", "Urzoga", "Varz", "Yagash", "Zag", "Gortwog", "Mulag", "Shuftharz", "Bolg", "Dumag", "Gorzak", "Khazgur", "Lugdush", "Mograk", "Narzug", "Oghul", "Ruzgar", "Ughash", "Azog", "Burguk", "Durgob", "Ghamul", "Horguz", "Khargol", "Lugrub", "Mogdurz", "Nargob", "Ogruk", "Pogdurz", "Razgur", "Shagrol", "Thrugob", "Uglug", "Varguk", "Wurrg", "Xurgaz", "Yargol", "Zugrub", "Azhog", "Bazgur", "Dorzog", "Gorzog", "Huzgur"],
      "female": ["Bolar", "Dulug", "Garakh", "Gorlob", "Kharag", "Lash", "Mogdurz", "Narag", "Olurb", "Pogdurz", "Razul", "Shagarz", "Thonar", "Ugor", "Vul", "Yatul", "Zurbag", "Azuk", "Borgakh", "Lash", "Bula", "Dugra", "Gorza", "Khagra", "Lorga", "Mogza", "Norga", "Olga", "Ragasha", "Ushar", "Agrub", "Borag", "Dulza", "Gorzaga", "Khagz", "Lashag", "Mogdul", "Naragob", "Olzaga", "Pogdul", "Razga", "Shagob", "Thonag", "Uzga", "Vulug", "Yatag", "Zagrub", "Azgar", "Borgul", "Dulag", "Garza", "Khazag", "Lurza", "Morga", "Narza"]
    },
    // 9. KHAJIIT: Uso de prefixos (Dar-, Dro-, Ja-, M-, Ra-, S-, Za-), apóstrofos e terminações guturais, com som fluido e exótico.
    "Khajiit": {
      "male": ["Dar'Rakki", "Dro'Zhir", "Ja'Rak", "J'zargo", "Kharjo", "Ma'Rak", "M'aiq", "Ra'Jirr", "Risaad", "S'rendarr", "Shazzar", "Tha'Ri", "Vasha", "Za'ji", "Ahzirr", "Ba'Dar", "Daro'Jir", "Do'Shir", "J'darr", "Ko'Rak", "Ma'dran", "Qa'Ren", "Ri'saad", "Sa'vir", "Ta'zir", "U'kham", "Za'resh", "Ah'varr", "Ba'Rak", "Daro'Khar", "Dro'Jah", "Ja'Khar", "J'Rak", "Khar'Dar", "Ma'Jirr", "M'Dar", "Ra'Zhir", "Ri'Daro", "Sa'Rak", "Shad'Var", "Ta'Jirr", "U'Zhar", "Va'Dar", "Xa'Jirr", "Ya'Rak", "Za'Jirr", "Ah'Zir", "Do'Rak", "Ja'Dar", "Ko'Zhir", "Ma'Sharr", "Qa'Jirr"],
      "female": ["Dar'Jah", "Dri'sa", "J'batha", "Keshu", "M'jira", "Qa'Dar", "Razhana", "S'vashni", "Shan'ri", "Tasari", "U'zara", "Vasha", "Y'zara", "Zamira", "Mizara", "Khayla", "Do'Jah", "Ja'shana", "Ko'Shira", "M'raji", "Qa'Rasha", "Ra'Zayma", "Sa'dara", "Ta'zara", "U'zasha", "Za'Kira", "Ah'Dara", "Ba'Shira", "Daro'Kira", "Dro'Jara", "Ja'Rasha", "J'Raja", "Khar'Jara", "Ma'Shara", "M'Dara", "Ra'Kira", "Ri'Zara", "Sa'Zama", "Shad'Jara", "Ta'Rasha", "U'Zama", "Va'Rasha", "Xa'Kira", "Ya'Zara", "Za'Rasha", "Ah'Zama", "Do'Kira", "Ja'Zara", "Ko'Jara", "Ma'Zama", "Qa'Shara"]
    },
    // 10. ARGONIAN: Nomes que soam como assobios ou sibilos (S, Z, X), com sílabas repetitivas e terminações como -us, -ee, -ei.
    "Argonian": {
      "male": ["Beeko", "Chuka", "Deekus", "Eejor", "Gee-Rus", "Huleeya", "Jaree-Ra", "Kaj-Ei", "Leeka", "Meele", "Nass", "Ocheeva", "Paat", "Qu'Rah", "Ree-Nak", "Sho-Rak", "Teekeeus", "Uta", "Veezara", "Wajee", "Ajee", "Breeks", "Chucks", "Daru", "Eekus", "Flaat", "Geeko", "Heeja", "Keeva", "Liz-Ra", "Meekus", "Neeja", "Oojus", "Peeja", "Qee-Ra", "Reekus", "Seeja", "Teekus", "Uujus", "Veeja", "Wee-Ra", "Xeekus", "Yeeja", "Zee-Ra", "Aru", "Beku", "Cheeja", "Dekus", "Eeru", "Fekus", "Geeja", "Hekus", "Iru", "Jeeja", "Kekus"],
      "female": ["Chana", "Deetsa", "Eecha", "Fera", "Gah-Ju", "Heeta", "Jaree", "Keerava", "Laksha", "Madesi", "Neesha", "Ocheeva", "Peesha", "Quarra", "Reesa", "Sheeva", "Teeva", "Uuthak", "Washa", "Aneeqa", "Breela", "Cheeta", "Deeka", "Eena", "Feesha", "Geeska", "Heeku", "Jeesa", "Keesha", "Leeka", "Meesha", "Neeska", "Oolee", "Peeska", "Queeka", "Reeska", "Sheeka", "Teesha", "Uulee", "Veeska", "Weesha", "Xeeka", "Yeesha", "Zeeska", "Aruka", "Beesha", "Cheeka", "Deesha", "Eeka", "Feeska", "Geesha", "Heeska", "Ieesha", "Jeeska", "Keeska"]
    }
  },

  // --- TÍTULOS E EPÍTETOS (BASEADOS NA CLASSE) ---
  classTitles: {
    "Warrior": { "male": { "en": "the Unbroken", "pt": "o Inquebrável" }, "female": { "en": "the Shield-Maiden", "pt": "a Donzela-Escudo" } },
    "Barbarian": { "male": { "en": "the Berserker", "pt": "o Berserker" }, "female": { "en": "the Savage", "pt": "a Selvagem" } },
    "Ranger": { "male": { "en": "the Stalker", "pt": "o Perseguidor" }, "female": { "en": "the Huntress", "pt": "a Caçadora" } },
    "Rogue": { "male": { "en": "the Shadow", "pt": "a Sombra" }, "female": { "en": "the Whisper", "pt": "o Sussurro" } },
    "Nightblade": { "male": { "en": "the Veil", "pt": "o Véu" }, "female": { "en": "the Shroud", "pt": "a Mortalha" } },
    "Paladin": { "male": { "en": "the Justicar", "pt": "o Justiciar" }, "female": { "en": "the Vindicator", "pt": "a Vindicadora" } },
    "Cleric": { "male": { "en": "the Devout", "pt": "o Devoto" }, "female": { "en": "the Anointed", "pt": "a Ungida" } },
    "Mage": { "male": { "en": "the Arcanist", "pt": "o Arcanista" }, "female": { "en": "the Arcanist", "pt": "a Arcanista" } },
    "Conjurer": { "male": { "en": "the Summoner", "pt": "o Invocador" }, "female": { "en": "the Summoner", "pt": "a Invocadora" } },
    "Pyromancer": { "male": { "en": "the Emberheart", "pt": "o Coração de Brasa" }, "female": { "en": "the Flame-Tongue", "pt": "a Língua de Fogo" } },
    "Cryomancer": { "male": { "en": "the Frost-Fist", "pt": "o Punho de Gelo" }, "female": { "en": "the Ice-Vein", "pt": "a Veia de Gelo" } },
    "Battlemage": { "male": { "en": "the Spell-Knight", "pt": "o Cavaleiro Arcano" }, "female": { "en": "the Spell-Knight", "pt": "a Cavaleira Arcana" } },
    "Spellsword": { "male": { "en": "the Blade-Singer", "pt": "o Dançarino de Lâminas" }, "female": { "en": "the Blade-Singer", "pt": "a Dançarina de Lâminas" } },
    "Necromancer": { "male": { "en": "the Grave-Lord", "pt": "o Senhor das Sepulturas" }, "female": { "en": "the Death-Speaker", "pt": "a Arauto da Morte" } },
    "Assassin": { "male": { "en": "the Ghost", "pt": "o Fantasma" }, "female": { "en": "the Wraith", "pt": "a Aparição" } },
    "Archer": { "male": { "en": "the Far-Shot", "pt": "o Tiro Longínquo" }, "female": { "en": "the Trueflight", "pt": "o Voo Verdadeiro" } },
    "Sorcerer": { "male": { "en": "the Rune-Master", "pt": "o Mestre das Runas" }, "female": { "en": "the Rune-Mistress", "pt": "a Senhora das Runas" } }
  },

  // --- TEXTOS DE LORE POR RAÇA ---
  loreRacial: {
    "en": {
      "Nord": "🛡️ A son/daughter of Skyrim, with a spirit as unyielding as the frozen north.",
      "Imperial": "🏛️ A citizen of the Empire, disciplined, diplomatic, and born into a legacy of order.",
      "Breton": "📜 A descendant of Druids and Elves, gifted with magical affinity and a sharp wit.",
      "Redguard": "⚔️ A warrior from Hammerfell, swift as the desert wind and resilient as the Alik'r.",
      "Altmer": "✨ An heir to the ancient Ehlnofey, a being of immense arcane power and pride.",
      "Bosmer": "🌿 A child of the Green Pact, an agile archer and master of the Valenwood wilds.",
      "Dunmer": "🔥 An Ashlander, shaped by the harsh lands of Morrowind and the will of the Reclamations.",
      "Orsimer": "💪 A follower of Malacath, forged in strength and bound by an unbreakable code of honor.",
      "Khajiit": "🌙 A clever cat-folk, guided by the moons and Jone and Jode.",
      "Argonian": "🌿 A ward of the Hist, an amphibious survivor from the root-woven cities of Black Marsh."
    },
    "pt": {
      "Nord": "🛡️ Um(a) filho(a) de Skyrim, com um espírito tão inabalável quanto o gelado norte.",
      "Imperial": "🏛️ Um(a) cidadão(ã) do Império, disciplinado(a), diplomático(a) e nascido(a) em um legado de ordem.",
      "Breton": "📜 Um(a) descendente de Druidas e Elfos, dotado(a) de afinidade mágica e inteligência arguta.",
      "Redguard": "⚔️ Um(a) guerreiro(a) de Hammerfell, rápido(a) como o vento do deserto e resiliente como o Alik'r.",
      "Altmer": "✨ Um(a) herdeiro(a) dos antigos Ehlnofey, um ser de imenso poder arcano e orgulho.",
      "Bosmer": "🌿 Um(a) filho(a) do Pacto Verde, um(a) arqueiro(a) ágil e mestre das florestas de Valenwood.",
      "Dunmer": "🔥 Um(a) Passado das Cinzas, moldado(a) pelas terras áridas de Morrowind e pela vontade dos Reclamadores.",
      "Orsimer": "💪 Um(a) seguidor(a) de Malacath, forjado(a) na força e ligado(a) a um código de honra inquebrável.",
      "Khajiit": "🌙 Um(a) astuto(a) homem-gato, guiado(a) pelas luas Jone e Jode.",
      "Argonian": "🌿 Um(a) protegido(a) do Hist, um(a) sobrevivente anfíbio(a) das cidades entrelaçadas de Black Marsh."
    }
  },

  // --- TEXTOS DE INTERFACE (UI) ---
  uiTexts: {
    "en": {
      "subtitle": "Class-based generator · Requiem + 3bfTweaks · Immersive lore",
      "race": "RACE",
      "gender": "GENDER",
      "class": "CLASS",
      "male": "Male",
      "female": "Female",
      "generateBtn": "✨ Generate New Name ✨",
      "lorePrefix": "🌿 Lore & tradition:",
      "footer": "Based on official lore · Perfect for Requiem & 3bfTweaks"
    },
    "pt": {
      "subtitle": "Gerador com classes · Requiem + 3bfTweaks · Lore imersiva",
      "race": "RAÇA",
      "gender": "GÊNERO",
      "class": "CLASSE",
      "male": "Masculino",
      "female": "Feminino",
      "generateBtn": "✨ Gerar Novo Nome ✨",
      "lorePrefix": "🌿 Lore & tradição:",
      "footer": "Baseado em lore oficial · Perfeito para Requiem e 3bfTweaks"
    }
  },
  // --- MAPAS PARA TRADUÇÃO DAS DROPDOWNS ---
  raceNames: {
    "en": {},
    "pt": {
      "Nord": "Nord",
      "Imperial": "Imperial",
      "Breton": "Bretão",
      "Redguard": "Redguard",
      "Altmer": "Altmer",
      "Bosmer": "Bosmer",
      "Dunmer": "Dunmer",
      "Orsimer": "Orsimer",
      "Khajiit": "Khajiit",
      "Argonian": "Argoniano"
    }
  },
  classNames: {
    "en": {},
    "pt": {
      "Warrior": "Guerreiro",
      "Barbarian": "Bárbaro",
      "Ranger": "Patrulheiro",
      "Rogue": "Ladino",
      "Nightblade": "Cutelo Noturno",
      "Paladin": "Paladino",
      "Cleric": "Clérigo",
      "Mage": "Mago",
      "Conjurer": "Conjurador",
      "Pyromancer": "PiroMago",
      "Cryomancer": "Criomago",
      "Battlemage": "Mago de Batalha",
      "Spellsword": "Espadachim Arcano",
      "Necromancer": "Necromante",
      "Assassin": "Assassino",
      "Archer": "Arqueiro",
      "Sorcerer": "Feiticeiro"
    }
  }
};