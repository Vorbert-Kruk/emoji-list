const objects = {
  loveLetter: '💌',
  hole: '🕳',
  bomb: '💣',
  personTakingBath: '🛀',
  personInBed: '🛌',
  kitchenKnife: '🔪',
  amphora: '🏺',
  worldMap: '🗺',
  compass: '🧭',
  brick: '🧱',
  barberPole: '💈',
  manualWheelchair: '🦽',
  motorizedWheelchair: '🦼',
  oilDrum: '🛢',
  bellhopBell: '🛎',
  luggage: '🧳',
  hourglassDone: '⌛',
  hourglassNotDone: '⏳',
  watch: '⌚',
  alarmClock: '⏰',
  stopwatch: '⏱',
  timerClock: '⏲',
  mantelpieceClock: '🕰',
  thermometer: '🌡',
  umbrellaonGround: '⛱',
  firecracker: '🧨',
  balloon: '🎈',
  partyPopper: '🎉',
  confettiBall: '🎊',
  japaneseDolls: '🎎',
  carpStreamer: '🎏',
  windChime: '🎐',
  redEnvelope: '🧧',
  ribbon: '🎀',
  wrappedGift: '🎁',
  divingMask: '🤿',
  yoYo: '🪀',
  kite: '🪁',
  crystalBall: '🔮',
  nazarAmulet: '🧿',
  joystick: '🕹',
  teddyBear: '🧸',
  framedPicture: '🖼',
  thread: '🧵',
  yarn: '🧶',
  shoppingBags: '🛍',
  prayerBeads: '📿',
  gemStone: '💎',
  postalHorn: '📯',
  studioMicrophone: '🎙',
  levelSlider: '🎚',
  controlKnobs: '🎛',
  radio: '📻',
  banjo: '🪕',
  mobilePhone: '📱',
  mobilePhonewithArrow: '📲',
  telephone: '☎',
  telephoneReceiver: '📞',
  pager: '📟',
  faxMachine: '📠',
  battery: '🔋',
  electricPlug: '🔌',
  laptop: '💻',
  desktopComputer: '🖥',
  printer: '🖨',
  keyboard: '⌨',
  computerMouse: '🖱',
  trackball: '🖲',
  computerDisk: '💽',
  floppyDisk: '💾',
  opticalDisk: '💿',
  dVD: '📀',
  abacus: '🧮',
  movieCamera: '🎥',
  filmFrames: '🎞',
  filmProjector: '📽',
  television: '📺',
  camera: '📷',
  camerawithFlash: '📸',
  videoCamera: '📹',
  videocassette: '📼',
  magnifyingGlassTiltedLeft: '🔍',
  magnifyingGlassTiltedRight: '🔎',
  candle: '🕯',
  lightBulb: '💡',
  flashlight: '🔦',
  redPaperLantern: '🏮',
  diyaLamp: '🪔',
  notebookwithDecorativeCover: '📔',
  closedBook: '📕',
  openBook: '📖',
  greenBook: '📗',
  blueBook: '📘',
  orangeBook: '📙',
  books: '📚',
  notebook: '📓',
  pagewithCurl: '📃',
  scroll: '📜',
  pageFacingUp: '📄',
  newspaper: '📰',
  rolledUpNewspaper: '🗞',
  bookmarkTabs: '📑',
  bookmark: '🔖',
  label: '🏷',
  moneyBag: '💰',
  yenBanknote: '💴',
  dollarBanknote: '💵',
  euroBanknote: '💶',
  poundBanknote: '💷',
  moneywithWings: '💸',
  creditCard: '💳',
  receipt: '🧾',
  envelope: '✉',
  eMail: '📧',
  incomingEnvelope: '📨',
  envelopewithArrow: '📩',
  outboxTray: '📤',
  inboxTray: '📥',
  package: '📦',
  closedMailboxwithRaisedFlag: '📫',
  closedMailboxwithLoweredFlag: '📪',
  openMailboxwithRaisedFlag: '📬',
  openMailboxwithLoweredFlag: '📭',
  postbox: '📮',
  ballotBoxwithBallot: '🗳',
  pencil: '✏',
  blackNib: '✒',
  fountainPen: '🖋',
  pen: '🖊',
  paintbrush: '🖌',
  crayon: '🖍',
  memo: '📝',
  fileFolder: '📁',
  openFileFolder: '📂',
  cardIndexDividers: '🗂',
  calendar: '📅',
  tearOffCalendar: '📆',
  spiralNotepad: '🗒',
  spiralCalendar: '🗓',
  cardIndex: '📇',
  chartIncreasing: '📈',
  chartDecreasing: '📉',
  barChart: '📊',
  clipboard: '📋',
  pushpin: '📌',
  roundPushpin: '📍',
  paperclip: '📎',
  linkedPaperclips: '🖇',
  straightRuler: '📏',
  triangularRuler: '📐',
  scissors: '✂',
  cardFileBox: '🗃',
  fileCabinet: '🗄',
  wastebasket: '🗑',
  locked: '🔒',
  unlocked: '🔓',
  lockedwithPen: '🔏',
  lockedwithKey: '🔐',
  key: '🔑',
  oldKey: '🗝',
  hammer: '🔨',
  axe: '🪓',
  pick: '⛏',
  hammerAndPick: '⚒',
  hammerAndWrench: '🛠',
  dagger: '🗡',
  crossedSwords: '⚔',
  pistol: '🔫',
  shield: '🛡',
  wrench: '🔧',
  nutAndBolt: '🔩',
  gear: '⚙',
  clamp: '🗜',
  balanceScale: '⚖',
  whiteCane: '🦯',
  link: '🔗',
  chains: '⛓',
  toolbox: '🧰',
  magnet: '🧲',
  alembic: '⚗',
  testTube: '🧪',
  petriDish: '🧫',
  dNA: '🧬',
  microscope: '🔬',
  telescope: '🔭',
  satelliteAntenna: '📡',
  syringe: '💉',
  dropofBlood: '🩸',
  pill: '💊',
  adhesiveBandage: '🩹',
  stethoscope: '🩺',
  door: '🚪',
  bed: '🛏',
  couchAndLamp: '🛋',
  chair: '🪑',
  toilet: '🚽',
  shower: '🚿',
  bathtub: '🛁',
  razor: '🪒',
  lotionBottle: '🧴',
  safetyPin: '🧷',
  broom: '🧹',
  basket: '🧺',
  rollofPaper: '🧻',
  soap: '🧼',
  sponge: '🧽',
  fireExtinguisher: '🧯',
  shoppingCart: '🛒',
  cigarette: '🚬',
  coffin: '⚰',
  funeralUrn: '⚱',
  moai: '🗿',
  potableWater: '🚰',
  jackOLantern: '🎃',
};

export default objects;
