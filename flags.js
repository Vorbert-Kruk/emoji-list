const flags = {
  chequeredFlag: '🏁',
  triangularFlag: '🚩',
  crossedFlags: '🎌',
  blackFlag: '🏴',
  whiteFlag: '🏳',
  rainbowFlag: '🏳️‍🌈',
  transgenderFlag: '🏳️‍⚧️',
  pirateFlag: '🏴‍☠️',
  flagAscensionIsland: '🇦🇨',
  flagAndorra: '🇦🇩',
  flagUnitedArabEmirates: '🇦🇪',
  flagAfghanistan: '🇦🇫',
  flagAntiguaAndBarbuda: '🇦🇬',
  flagAnguilla: '🇦🇮',
  flagAlbania: '🇦🇱',
  flagArmenia: '🇦🇲',
  flagAngola: '🇦🇴',
  flagAntarctica: '🇦🇶',
  flagArgentina: '🇦🇷',
  flagAmericanSamoa: '🇦🇸',
  flagAustria: '🇦🇹',
  flagAustralia: '🇦🇺',
  flagAruba: '🇦🇼',
  flagÅlandIslands: '🇦🇽',
  flagAzerbaijan: '🇦🇿',
  flagBosniaAndHerzegovina: '🇧🇦',
  flagBarbados: '🇧🇧',
  flagBangladesh: '🇧🇩',
  flagBelgium: '🇧🇪',
  flagBurkinaFaso: '🇧🇫',
  flagBulgaria: '🇧🇬',
  flagBahrain: '🇧🇭',
  flagBurundi: '🇧🇮',
  flagBenin: '🇧🇯',
  flagStBarthélemy: '🇧🇱',
  flagBermuda: '🇧🇲',
  flagBrunei: '🇧🇳',
  flagBolivia: '🇧🇴',
  flagCaribbeanNetherlands: '🇧🇶',
  flagBrazil: '🇧🇷',
  flagBahamas: '🇧🇸',
  flagBhutan: '🇧🇹',
  flagBouvetIsland: '🇧🇻',
  flagBotswana: '🇧🇼',
  flagBelarus: '🇧🇾',
  flagBelize: '🇧🇿',
  flagCanada: '🇨🇦',
  flagCocosKeelingIslands: '🇨🇨',
  flagCongoKinshasa: '🇨🇩',
  flagCentralAfricanRepublic: '🇨🇫',
  flagCongoBrazzaville: '🇨🇬',
  flagSwitzerland: '🇨🇭',
  flagCôtedIvoire: '🇨🇮',
  flagCookIslands: '🇨🇰',
  flagChile: '🇨🇱',
  flagCameroon: '🇨🇲',
  flagChina: '🇨🇳',
  flagColombia: '🇨🇴',
  flagClippertonIsland: '🇨🇵',
  flagCostaRica: '🇨🇷',
  flagCuba: '🇨🇺',
  flagCapeVerde: '🇨🇻',
  flagCuraçao: '🇨🇼',
  flagChristmasIsland: '🇨🇽',
  flagCyprus: '🇨🇾',
  flagCzechia: '🇨🇿',
  flagGermany: '🇩🇪',
  flagDiegoGarcia: '🇩🇬',
  flagDjibouti: '🇩🇯',
  flagDenmark: '🇩🇰',
  flagDominica: '🇩🇲',
  flagDominicanRepublic: '🇩🇴',
  flagAlgeria: '🇩🇿',
  flagCeutaAndMelilla: '🇪🇦',
  flagEcuador: '🇪🇨',
  flagEstonia: '🇪🇪',
  flagEgypt: '🇪🇬',
  flagWesternSahara: '🇪🇭',
  flagEritrea: '🇪🇷',
  flagSpain: '🇪🇸',
  flagEthiopia: '🇪🇹',
  flagEuropeanUnion: '🇪🇺',
  flagFinland: '🇫🇮',
  flagFiji: '🇫🇯',
  flagFalklandIslands: '🇫🇰',
  flagMicronesia: '🇫🇲',
  flagFaroeIslands: '🇫🇴',
  flagFrance: '🇫🇷',
  flagGabon: '🇬🇦',
  flagUnitedKingdom: '🇬🇧',
  flagGrenada: '🇬🇩',
  flagGeorgia: '🇬🇪',
  flagFrenchGuiana: '🇬🇫',
  flagGuernsey: '🇬🇬',
  flagGhana: '🇬🇭',
  flagGibraltar: '🇬🇮',
  flagGreenland: '🇬🇱',
  flagGambia: '🇬🇲',
  flagGuinea: '🇬🇳',
  flagGuadeloupe: '🇬🇵',
  flagEquatorialGuinea: '🇬🇶',
  flagGreece: '🇬🇷',
  flagSouthGeorgiaAndSouthSandwichIslands: '🇬🇸',
  flagGuatemala: '🇬🇹',
  flagGuam: '🇬🇺',
  flagGuineaBissau: '🇬🇼',
  flagGuyana: '🇬🇾',
  flagHongKongSARChina: '🇭🇰',
  flagHeardAndMcDonaldIslands: '🇭🇲',
  flagHonduras: '🇭🇳',
  flagCroatia: '🇭🇷',
  flagHaiti: '🇭🇹',
  flagHungary: '🇭🇺',
  flagCanaryIslands: '🇮🇨',
  flagIndonesia: '🇮🇩',
  flagIreland: '🇮🇪',
  flagIsrael: '🇮🇱',
  flagIsleofMan: '🇮🇲',
  flagIndia: '🇮🇳',
  flagBritishIndianOceanTerritory: '🇮🇴',
  flagIraq: '🇮🇶',
  flagIran: '🇮🇷',
  flagIceland: '🇮🇸',
  flagItaly: '🇮🇹',
  flagJersey: '🇯🇪',
  flagJamaica: '🇯🇲',
  flagJordan: '🇯🇴',
  flagJapan: '🇯🇵',
  flagKenya: '🇰🇪',
  flagKyrgyzstan: '🇰🇬',
  flagCambodia: '🇰🇭',
  flagKiribati: '🇰🇮',
  flagComoros: '🇰🇲',
  flagStKittsAndNevis: '🇰🇳',
  flagNorthKorea: '🇰🇵',
  flagSouthKorea: '🇰🇷',
  flagKuwait: '🇰🇼',
  flagCaymanIslands: '🇰🇾',
  flagKazakhstan: '🇰🇿',
  flagLaos: '🇱🇦',
  flagLebanon: '🇱🇧',
  flagStLucia: '🇱🇨',
  flagLiechtenstein: '🇱🇮',
  flagSriLanka: '🇱🇰',
  flagLiberia: '🇱🇷',
  flagLesotho: '🇱🇸',
  flagLithuania: '🇱🇹',
  flagLuxembourg: '🇱🇺',
  flagLatvia: '🇱🇻',
  flagLibya: '🇱🇾',
  flagMorocco: '🇲🇦',
  flagMonaco: '🇲🇨',
  flagMoldova: '🇲🇩',
  flagMontenegro: '🇲🇪',
  flagStMartin: '🇲🇫',
  flagMadagascar: '🇲🇬',
  flagMarshallIslands: '🇲🇭',
  flagNorthMacedonia: '🇲🇰',
  flagMali: '🇲🇱',
  flagMyanmarBurma: '🇲🇲',
  flagMongolia: '🇲🇳',
  flagMacaoSarChina: '🇲🇴',
  flagNorthernMarianaIslands: '🇲🇵',
  flagMartinique: '🇲🇶',
  flagMauritania: '🇲🇷',
  flagMontserrat: '🇲🇸',
  flagMalta: '🇲🇹',
  flagMauritius: '🇲🇺',
  flagMaldives: '🇲🇻',
  flagMalawi: '🇲🇼',
  flagMexico: '🇲🇽',
  flagMalaysia: '🇲🇾',
  flagMozambique: '🇲🇿',
  flagNamibia: '🇳🇦',
  flagNewCaledonia: '🇳🇨',
  flagNiger: '🇳🇪',
  flagNorfolkIsland: '🇳🇫',
  flagNigeria: '🇳🇬',
  flagNicaragua: '🇳🇮',
  flagNetherlands: '🇳🇱',
  flagNorway: '🇳🇴',
  flagNepal: '🇳🇵',
  flagNauru: '🇳🇷',
  flagNiue: '🇳🇺',
  flagNewZealand: '🇳🇿',
  flagOman: '🇴🇲',
  flagPanama: '🇵🇦',
  flagPeru: '🇵🇪',
  flagFrenchPolynesia: '🇵🇫',
  flagPapuaNewGuinea: '🇵🇬',
  flagPhilippines: '🇵🇭',
  flagPakistan: '🇵🇰',
  flagPoland: '🇵🇱',
  flagStPierreAndMiquelon: '🇵🇲',
  flagPitcairnIslands: '🇵🇳',
  flagPuertoRico: '🇵🇷',
  flagPalestinianTerritories: '🇵🇸',
  flagPortugal: '🇵🇹',
  flagPalau: '🇵🇼',
  flagParaguay: '🇵🇾',
  flagQatar: '🇶🇦',
  flagRéunion: '🇷🇪',
  flagRomania: '🇷🇴',
  flagSerbia: '🇷🇸',
  flagRussia: '🇷🇺',
  flagRwanda: '🇷🇼',
  flagSaudiArabia: '🇸🇦',
  flagSolomonIslands: '🇸🇧',
  flagSeychelles: '🇸🇨',
  flagSudan: '🇸🇩',
  flagSweden: '🇸🇪',
  flagSingapore: '🇸🇬',
  flagStHelena: '🇸🇭',
  flagSlovenia: '🇸🇮',
  flagSvalbardAndJanMayen: '🇸🇯',
  flagSlovakia: '🇸🇰',
  flagSierraLeone: '🇸🇱',
  flagSanMarino: '🇸🇲',
  flagSenegal: '🇸🇳',
  flagSomalia: '🇸🇴',
  flagSuriname: '🇸🇷',
  flagSouthSudan: '🇸🇸',
  flagSãoToméAndPríncipe: '🇸🇹',
  flagElSalvador: '🇸🇻',
  flagSintMaarten: '🇸🇽',
  flagSyria: '🇸🇾',
  flagEswatini: '🇸🇿',
  flagTristanDaCunha: '🇹🇦',
  flagTurksAndCaicosIslands: '🇹🇨',
  flagChad: '🇹🇩',
  flagFrenchSouthernTerritories: '🇹🇫',
  flagTogo: '🇹🇬',
  flagThailand: '🇹🇭',
  flagTajikistan: '🇹🇯',
  flagTokelau: '🇹🇰',
  flagTimorLeste: '🇹🇱',
  flagTurkmenistan: '🇹🇲',
  flagTunisia: '🇹🇳',
  flagTonga: '🇹🇴',
  flagTurkey: '🇹🇷',
  flagTrinidadAndTobago: '🇹🇹',
  flagTuvalu: '🇹🇻',
  flagTaiwan: '🇹🇼',
  flagTanzania: '🇹🇿',
  flagUkraine: '🇺🇦',
  flagUganda: '🇺🇬',
  flagUSOutlyingIslands: '🇺🇲',
  flagUnitedNations: '🇺🇳',
  flagUnitedStates: '🇺🇸',
  flagUruguay: '🇺🇾',
  flagUzbekistan: '🇺🇿',
  flagVaticanCity: '🇻🇦',
  flagStVincentAndGrenadines: '🇻🇨',
  flagVenezuela: '🇻🇪',
  flagBritishVirginIslands: '🇻🇬',
  flagUSVirginIslands: '🇻🇮',
  flagVietnam: '🇻🇳',
  flagVanuatu: '🇻🇺',
  flagWallisAndFutuna: '🇼🇫',
  flagSamoa: '🇼🇸',
  flagKosovo: '🇽🇰',
  flagYemen: '🇾🇪',
  flagMayotte: '🇾🇹',
  flagSouthAfrica: '🇿🇦',
  flagZambia: '🇿🇲',
  flagZimbabwe: '🇿🇼',
  flagEngland: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
  flagScotland: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
  flagWales: '🏴󠁧󠁢󠁷󠁬󠁳󠁿',
  flagforTexasUSTX: '🏴󠁵󠁳󠁴󠁸󠁿'
};

export default flags;