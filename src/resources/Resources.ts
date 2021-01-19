import GameBoardName from "../models/GameBoardName";
import LanguageSetting from "../models/LanguageSetting";
import ScoreLabel from "../models/ScoreLabel";
import DisplayName from "../models/DisplayName";
import GameBoardCard from "../models/GameBoardCard"

export default class Resources {

  /*  Full list of icons to be used  */
  static readonly icons: string[] = [
    "airplane", "american-football", "aperture", "basketball", "beer", "bicycle", "bonfire", "book", "build", "bulb", "cafe", "cellular", "cog", "compass",  "construct", "cube", "female", "fitness", "flag", "flame", "flash", "flask", "football", "gift", "glasses", "globe", "hammer", "heart", "home", "hourglass", "ice-cream", "infinite", "jet", "leaf", "male", "megaphone", "mic", "moon", "musical-notes", "nuclear", "nutrition", "paw", "pin", "pizza", "photos", "planet", "pulse", "rainy", "recording", "restaurant", "ribbon", "rocket", "school", "send", "shirt", "shuffle", "snow", "speedometer", "star-outline", "sunny", "tennisball", "thermometer", "thumbs-up", "thunderstorm", "timer", "train", "transgender", "trophy", "tv", "umbrella", "unlock", "videocam", "volume-off", "walk", "wallet", "wifi", "wine", "woman"
  ];

  static readonly languageSettings: LanguageSetting[] = [
    new LanguageSetting("en", "English"),
    new LanguageSetting("fr", "Français")
  ]

  static readonly scoreLabels: ScoreLabel[] = [
    new ScoreLabel("game-title", [ new DisplayName("en", "Remember"), new DisplayName("fr", "Mémoire") ]),
    new ScoreLabel("total-pairs", [ new DisplayName("en", "Total Pairs"), new DisplayName("fr", "Total des paires") ]),
    new ScoreLabel("found", [ new DisplayName("en", "Found") , new DisplayName("fr", "Trouvé") ]),
    new ScoreLabel("remaining", [ new DisplayName("en", "Remaining") , new DisplayName("fr", "Restant") ]),
    new ScoreLabel("attempts", [ new DisplayName("en", "Attempts") , new DisplayName("fr", "Tentatives") ]),
    new ScoreLabel("completion", [ new DisplayName("en", "Completion") , new DisplayName("fr", "Complet") ]),
    new ScoreLabel("accuracy", [ new DisplayName("en", "Accuracy") , new DisplayName("fr", "Précision") ]),
    new ScoreLabel("time", [ new DisplayName("en", "Time") , new DisplayName("fr", "Heure") ])
  ]

  /*    */
  static readonly gameBoardNames: GameBoardName[] = [
    new GameBoardName("ice-cube", [ new DisplayName("en", "Ice Cube"), new DisplayName("fr", "Glaçon")], true),
    new GameBoardName("jet", [ new DisplayName("en", "Jet"), new DisplayName("fr", "Jet")], true),
    new GameBoardName("letter-m", [ new DisplayName("en", "Letter M"), new DisplayName("fr", "Lettre M")], true),
    new GameBoardName("numbirs", [ new DisplayName("en", "Forgotten"), new DisplayName("fr", "Oubliée")], false)

  ]

  /*    */
  static readonly gameBoardCards: GameBoardCard[] = [
    new GameBoardCard("ice-cube",
    [
      ["trans", "trans", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "trans", "trans"],
      ["trans", "trans", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "trans", "trans"],
      ["trans", "trans", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "trans", "trans"],
      ["trans", "trans", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "trans", "trans"],
      ["trans", "trans", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "trans", "trans"],
      ["trans", "trans", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "trans", "trans", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "trans", "trans"],
      ["trans", "trans", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "trans", "trans", "skyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "trans", "trans"],
      ["trans", "trans", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "skyblu", "skyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "trans", "trans"],
      ["trans", "trans", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "skyblu", "trans", "trans"],
      ["trans", "trans", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "skyblu", "trans", "trans"],
      ["trans", "trans", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "skyblu", "trans", "trans"],
      ["trans", "trans", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "ltskyblu", "skyblu", "skyblu", "skyblu", "ltskyblu", "trans", "trans"]
    ]),
    {
      "name": "jet",
      "circles": [
        ["trans", "trans", "trans", "trans", "trans", "rd", "ltgry", "trans", "trans", "trans", "trans", "trans", "trans", "trans", "trans", "trans"],
        ["trans", "trans", "trans", "trans", "trans", "trans", "ltgry", "ltgry", "trans", "trans", "trans", "trans", "trans", "trans", "trans", "trans"],
        ["trans", "trans", "ltgry", "trans", "trans", "trans", "ltgry", "ltgry", "ltgry", "trans", "trans", "trans", "trans", "trans", "trans", "trans"],
        ["trans", "trans", "ltgry", "ltgry", "trans", "trans", "ltgry", "ltgry", "ltgry", "ltgry", "trans", "trans", "trans", "trans", "trans", "trans"],
        ["orng", "ltgry", "ltgry", "ltgry", "ltgry", "ltgry", "ltgry", "ltgry", "ltgry", "ltgry", "ltgry", "ltgry", "ltgry", "ltgry", "trans", "trans"],
        ["trans", "trans", "ltgry", "ltgry", "ltgry", "ltgry", "ltgry", "ltgry", "ltgry", "ltgry", "ltskyblu", "ltskyblu", "ltskyblu", "ltgry", "ltgry", "ltgry"],
        ["orng", "ltgry", "ltgry", "ltgry", "ltgry", "ltgry", "ltgry", "ltgry", "ltgry", "ltgry", "ltgry", "ltgry", "ltgry", "ltgry", "trans", "trans"],
        ["trans", "trans", "ltgry", "ltgry", "trans", "trans", "ltgry", "ltgry", "ltgry", "ltgry", "trans", "trans", "trans", "trans", "trans", "trans"],
        ["trans", "trans", "ltgry", "trans", "trans", "trans", "ltgry", "ltgry", "ltgry", "trans", "trans", "trans", "trans", "trans", "trans", "trans"],
        ["trans", "trans", "trans", "trans", "trans", "trans", "ltgry", "ltgry", "trans", "trans", "trans", "trans", "trans", "trans", "trans", "trans"],
        ["trans", "trans", "trans", "trans", "trans", "grn", "ltgry", "trans", "trans", "trans", "trans", "trans", "trans", "trans", "trans", "trans"],
        ["trans", "trans", "trans", "trans", "trans", "trans", "trans", "trans", "trans", "trans", "trans", "trans", "trans", "trans", "trans", "trans"]
      ]
    },
    {
      "name": "letter-m",
      "circles": [
        ["navy", "navy", "navy", "navy", "trans", "trans", "trans", "trans", "trans", "trans", "trans", "trans", "navy", "navy", "navy", "navy"],
        ["navy", "navy", "navy", "navy", "navy", "trans", "trans", "trans", "trans", "trans", "trans", "navy", "navy", "navy", "navy", "navy"],
        ["navy", "navy", "navy", "navy", "navy", "navy", "trans", "trans", "trans", "trans", "navy", "navy", "navy", "navy", "navy", "navy"],
        ["navy", "navy", "navy", "navy", "navy", "navy", "navy", "trans", "trans", "navy", "navy", "navy", "navy", "navy", "navy", "navy"],
        ["navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy"],
        ["navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy"],
        ["navy", "navy", "navy", "navy", "trans", "navy", "navy", "navy", "navy", "navy", "navy", "trans", "navy", "navy", "navy", "navy"],
        ["navy", "navy", "navy", "navy", "trans", "trans", "navy", "navy", "navy", "navy", "trans", "trans", "navy", "navy", "navy", "navy"],
        ["navy", "navy", "navy", "navy", "trans", "trans", "trans", "navy", "navy", "trans", "trans", "trans", "navy", "navy", "navy", "navy"],
        ["navy", "navy", "navy", "navy", "trans", "trans", "trans", "trans", "trans", "trans", "trans", "trans", "navy", "navy", "navy", "navy"],
        ["navy", "navy", "navy", "navy", "trans", "trans", "trans", "trans", "trans", "trans", "trans", "trans", "navy", "navy", "navy", "navy"],
        ["navy", "navy", "navy", "navy", "trans", "trans", "trans", "trans", "trans", "trans", "trans", "trans", "navy", "navy", "navy", "navy"]
      ]
    },
    {
      "name": "numbris",
      "circles":
        [
          ["trans", "trans", "aqua", "grn", "trans", "navy", "navy", "navy", "trans", "trans", "trans", "trans", "navy", "navy", "navy", "navy"],
          ["trans", "trans", "trans", "ltgrn", "ltblu", "navy", "ltblu", "navy", "navy", "trans", "trans", "trans", "navy", "grn", "navy", "navy"],
          ["ltgrn", "trans", "grn", "trans", "grn", "navy", "navy", "ltblu", "navy", "grn", "trans", "trans", "navy", "navy", "navy", "navy"],
          ["trans", "trans", "trans", "ltblu", "navy", "grn", "navy", "navy", "ltblu", "navy", "navy", "trans", "ltblu", "navy", "navy", "navy"],
          ["trans", "trans", "grn", "ltblu", "ltblu", "navy", "ltgrn", "navy", "navy", "navy", "navy", "navy", "navy", "ltgrn", "navy", "navy"],
          ["ltgrn", "trans", "trans", "grn", "navy", "ltblu", "navy", "ltblu", "ltblu", "navy", "navy", "navy", "navy", "navy", "grn", "navy"],
          ["trans", "ltgrn", "ltblu", "trans", "navy", "ltgrn", "ltblu", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy"],
          ["trans", "trans", "trans", "trans", "ltblu", "ltblu", "navy", "grn", "navy", "navy", "navy", "ltblu", "navy", "ltblu", "navy", "navy"],
          ["ltblu", "trans", "grn", "trans", "grn", "navy", "navy", "navy", "trans", "navy", "ltgrn", "navy", "navy", "navy", "grn", "navy"],
          ["trans", "trans", "ltgrn", "ltblu", "trans", "navy", "navy", "ltblu", "trans", "trans", "navy", "ltblu", "navy", "ltblu", "navy", "navy"],
          ["trans", "trans", "trans", "trans", "grn", "navy", "ltblu", "navy", "trans", "trans", "trans", "navy", "ltblu", "navy", "navy", "navy"],
          ["trans", "ltgrn", "ltblu", "trans", "navy", "navy", "navy", "ltgrn", "trans", "trans", "trans", "trans", "navy", "navy", "ltblu", "navy"]
        ]
    }
  ];
}