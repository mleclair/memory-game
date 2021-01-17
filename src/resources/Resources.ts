import GameBoardName from "../models/GameBoardName";
import LanguageSetting from "../models/LanguageSetting";
import ScoreLabel from "../models/ScoreLabel";
import DisplayName from "../models/DisplayName";

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
    {
      "labelType": "game-title",
      "displayNames": [
        new DisplayName("en", "REMEMBER"),
        new DisplayName("fr", "MÉMOIRE")
      ]
    },
    {
      "labelType": "total-pairs",
      "displayNames": [
        {
          "language": "en",
          "name": "TOTAL PAIRS"
        },
        {
          "language": "fr",
          "name": "TOTAL DES PAIRES"
        }        
      ]
    },
    {
      "labelType": "found",
      "displayNames": [
        {
          "language": "en",
          "name": "FOUND"
        },
        {
          "language": "fr",
          "name": "TROUVÉ"
        }        
      ]
    },
    {
      "labelType": "remaining",
      "displayNames": [
        {
          "language": "en",
          "name": "REMAINING"
        },
        {
          "language": "fr",
          "name": "RESTANT"
        }        
      ]
    },
    {
      "labelType": "attempts",
      "displayNames": [
        {
          "language": "en",
          "name": "ATTEMPTS"
        },
        {
          "language": "fr",
          "name": "TENTATIVES"
        }        
      ]
    },
    {
      "labelType": "completion",
      "displayNames": [
        {
          "language": "en",
          "name": "COMPLETION"
        },
        {
          "language": "fr",
          "name": "COMPLET"
        }        
      ]
    },
    {
      "labelType": "accuracy",
      "displayNames": [
        {
          "language": "en",
          "name": "ACCURACY"
        },
        {
          "language": "fr",
          "name": "PRÉCISION"
        }        
      ]
    },
    {
      "labelType": "time",
      "displayNames": [
        {
          "language": "en",
          "name": "TIME"
        },
        {
          "language": "fr",
          "name": "HEURE"
        }        
      ]
    }
  ]

  /*    */
  static readonly gameBoardNames: GameBoardName[] = [
    {
      "name": "ice-cube",
      "displayNames": [
        new DisplayName("en", "Ice Cube"),
        new DisplayName("fr", "Glaçon")
      ],
      "include": true
    },
    {
      "name": "jet",
      "displayNames": [
        {
          "language": "en",
          "name": "Jet"
        },
        {
          "language": "fr",
          "name": "Jet"
        }
      ],
      "include": true
    },
    {
      "name": "letter-m",
      "displayNames": [
        {
          "language": "en",
          "name": "Letter M"
        },
        {
          "language": "fr",
          "name": "Lettre M"
        }
      ],
      "include": true
    },
    {
      "name": "numbris",
      "displayNames": [
        {
          "language": "en",
          "name": "Forgotten"
        },
        {
          "language": "fr",
          "name": "Oubliée"
        }
      ],
      "include": false
    }
  ]

  /*    */
  static readonly gameBoards = [
    {
      "name": "ice-cube",
      "circles":
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
        ]
    },
    {
      "name": "jet",
      "circles": [
        ["trans", "trans", "trans", "trans", "trans", "trans", "trans", "trans", "trans", "trans", "trans", "trans", "trans", "trans", "trans", "trans"],
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
        ["trans", "trans", "trans", "trans", "trans", "grn", "ltgry", "trans", "trans", "trans", "trans", "trans", "trans", "trans", "trans", "trans"]
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