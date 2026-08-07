const FISH = [
  { id: 'horse-mackerel', name: '전갱이', rarity: '희귀', price: 20, image: 'assets/horse-mackerel.png', group: 'common' },
  { id: 'mackerel', name: '고등어', rarity: '희귀', price: 10, image: 'assets/mackerel.png', group: 'common' },
  { id: 'halfbeak', name: '학꽁치', rarity: '희귀', price: 25, image: 'assets/halfbeak.png', group: 'common' },
  { id: 'seabass', name: '농어', rarity: '희귀', price: 30, image: 'assets/seabass.png', group: 'common' },
  { id: 'red-seabream', name: '참돔', rarity: '레어', price: 150, image: 'assets/red-seabream.png', group: 'rare' },
  { id: 'black-seabream', name: '감성돔', rarity: '레어', price: 100, image: 'assets/black-seabream.png', group: 'rare' },
  { id: 'filefish', name: '쥐치', rarity: '레어', price: 80, image: 'assets/filefish.png', group: 'rare' },
  { id: 'squid', name: '오징어', rarity: '레어', price: 70, image: 'assets/squid.png', group: 'rare' },
  { id: 'yellowtail', name: '방어', rarity: '전설', price: 500, image: 'assets/yellowtail.png', group: 'legendary' },
  { id: 'amberjack', name: '부시리', rarity: '전설', price: 750, image: 'assets/amberjack.png', group: 'legendary' },
  { id: 'tuna', name: '참치', rarity: '전설', price: 1000, image: 'assets/tuna.png', group: 'legendary' },
  { id: 'gold-mackerel', name: '황금 고등어', rarity: '황금', price: 200, image: 'assets/gold-mackerel.png', group: 'golden' },
  { id: 'gold-yellowtail', name: '황금 방어', rarity: '황금', price: 3000, image: 'assets/gold-yellowtail.png', group: 'golden' },
  { id: 'gold-tuna', name: '황금 참치', rarity: '황금', price: 10000, image: 'assets/gold-tuna.png', group: 'golden' },
  { id: 'gold-squid', name: '황금 오징어', rarity: '황금', price: 2000, image: 'assets/gold-squid.png', group: 'golden' },
];

const BOATS = [
  { id: 'starter', name: '초보 낚시꾼', price: 0, icon: '🛶', description: '희귀 어종과 황금 고등어를 만날 수 있어요.', groups: ['common'], golden: ['gold-mackerel'] },
  { id: 'small', name: '소형 낚시배', price: 1000, icon: '⛵', description: '희귀와 레어 어종, 황금 고등어를 만날 수 있어요.', groups: ['common', 'rare'], golden: ['gold-mackerel'] },
  { id: 'medium', name: '중형 낚시배', price: 3000, icon: '🚤', description: '희귀·레어·전설 어종, 황금 고등어를 만날 수 있어요.', groups: ['common', 'rare', 'legendary'], golden: ['gold-mackerel'] },
  { id: 'large', name: '대형 낚시배', price: 15000, icon: '🛥️', description: '모든 물고기가 잡히는 최고의 낚시배예요.', groups: ['common', 'rare', 'legendary'], golden: ['gold-mackerel', 'gold-yellowtail', 'gold-tuna', 'gold-squid'] },
];

const RARITY_COLORS = { '희귀': '#519fc4', '레어': '#9a68cf', '전설': '#e67c50', '황금': '#d8a218' };
const TEMPERATURE_CATCHES = [
  { id: 'jellyfish', name: '해파리', rarity: '수온 상승', rarityLabel: '수온 상승 이벤트', price: -50, image: 'assets/jellyfish.jpg', color: '#cf6887', isTemperatureEvent: true, catchTitle: '해파리를 건져 올렸어요!' },
  { id: 'shark', name: '상어', rarity: '수온 상승', rarityLabel: '수온 상승 이벤트', price: -75, image: 'assets/shark.jpg', color: '#6078aa', isTemperatureEvent: true, catchTitle: '상어가 낚싯줄을 물었어요!' },
];
const TEMPERATURE_FACTS = [
  '1970년 이후 부산 앞바다의 수온 상승 추세가 지구 평균보다 최대 4배 빨라졌습니다. 국립수산과학원에 따르면 여름철 부산 앞바다 수온은 10년마다 평균 0.53도 올랐습니다.',
  '부산 기장 연안에는 아열대 종의 출현이 크게 늘었습니다. 총 212종의 어류 중 깃털제비활치와 황조어 등을 포함한 아열대 종은 151종으로 확인됐으며, 2007년 조사와 비교하면 약 71% 증가한 수치입니다.',
  '우리나라의 해파리는 주로 겨울과 봄에 번식하고 성장합니다. 지난 겨울과 봄의 따뜻한 수온은 해파리의 성장과 출현을 촉진했고, 노무라입깃해파리 같은 독성 해파리도 지난해보다 약 2주 빠르게 연안에 나타났습니다.',
  '바다 수온이 상승하면서 부산 앞바다에서 상어가 잇따라 출몰하고 있습니다. 방어·전갱이·삼치 등 난류성 어종이 늘면서 먹이를 쫓던 상어가 연안으로 유입된 것으로 추정됩니다.',
  '광어·우럭·참돔 등 주요 양식 어종은 수온이 28도를 넘으면 먹이 섭취가 줄고 스트레스가 급격히 증가합니다. 용존 산소량까지 감소하면 대규모 폐사로 이어질 가능성이 높습니다.',
];
const SAVE_KEY = 'blue-sea-fishing-save-v1';
const defaultState = { coins: 0, boat: 'starter', ownedBoats: ['starter'], discovered: [], log: [], totalCatches: 0, totalEarned: 0, castsByBoat: { starter: 0 }, temperatureShown: [], temperatureEventCasts: 0, temperatureFact: '', soundOn: true };
let state = loadState();
let pendingTemperature = false;
let pendingCatch = null;
let castInProgress = false;
let biteTimer = null;
let escapeTimer = null;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(SAVE_KEY));
    if (!saved) return structuredClone(defaultState);
    const log = (saved.log || []).map((entry) => ({ ...entry, image: entry.image || FISH.find((fish) => fish.name === entry.name)?.image }));
    return { ...defaultState, ...saved, log, castsByBoat: { starter: 0, ...(saved.castsByBoat || {}) } };
  }
  catch { return structuredClone(defaultState); }
}
function saveState() { localStorage.setItem(SAVE_KEY, JSON.stringify(state)); }
function formatCoins(value) { return `${value.toLocaleString('ko-KR')}전`; }
function formatSignedCoins(value) { return `${value > 0 ? '+' : value < 0 ? '−' : ''}${formatCoins(Math.abs(value))}`; }
function currentBoat() { return BOATS.find((boat) => boat.id === state.boat); }
function fishById(id) { return FISH.find((fish) => fish.id === id); }

function updateBalances() {
  document.querySelectorAll('#coinDisplay, #fishingCoins, #boatShopCoins, #storageCoins').forEach((element) => { element.textContent = formatCoins(state.coins); });
  document.querySelector('#fishingBoatName').textContent = currentBoat().name;
  const boatArt = document.querySelector('#boatArt');
  boatArt.className = `boat-art boat-${state.boat}`;
  boatArt.setAttribute('aria-label', `${currentBoat().name} 모습`);
  document.querySelector('#stageCastCount').textContent = state.castsByBoat[state.boat] || 0;
  document.querySelector('#collectionCount').textContent = `${state.discovered.length} / ${FISH.length}`;
  document.querySelector('#boatCount').textContent = `${state.ownedBoats.length} / ${BOATS.length}`;
}

function openScreen(name) {
  document.querySelectorAll('.screen').forEach((screen) => screen.classList.toggle('active', screen.dataset.screen === name));
  if (name === 'fishBook') renderFishBook();
  if (name === 'boats') renderBoatShop();
  if (name === 'boatBook') renderBoatBook();
  if (name === 'storage') renderStorage();
  updateBalances();
}

function goHome() { openScreen('home'); }

function renderFishBook() {
  document.querySelector('#fishBookList').innerHTML = FISH.map((fish) => {
    const known = state.discovered.includes(fish.id);
    return `<article class="fish-card ${known ? '' : 'unknown'}" style="--fish-color:${RARITY_COLORS[fish.rarity]}">
      <span class="fish-rarity">${known ? fish.rarity : '???'}</span>
      <div class="fish-info">${known ? `<img class="fish-photo" src="${fish.image}" alt="${fish.name} 사진" />` : '<span class="fish-icon unknown-icon">?</span>'}<div><h3 class="fish-name">${known ? fish.name : '비어 있음'}</h3><p class="fish-price">${known ? formatCoins(fish.price) : '아직 만나지 못한 물고기'}</p></div></div>
    </article>`;
  }).join('');
}

function boatRequirements(boat) {
  const groups = { starter: '희귀 어종 + 황금 고등어', small: '희귀 + 레어 + 황금 고등어', medium: '희귀 + 레어 + 전설 + 황금 고등어', large: '희귀부터 황금까지 모든 어종' };
  return groups[boat.id];
}
function renderBoatShop() {
  document.querySelector('#boatShopList').innerHTML = BOATS.filter((boat) => boat.id !== 'starter').map((boat) => {
    const owned = state.ownedBoats.includes(boat.id);
    const canBuy = !owned && state.coins >= boat.price;
    return `<article class="boat-card ${state.boat === boat.id ? 'current' : ''}">
      <span class="boat-icon">${boat.icon}</span><div><h3>${boat.name}</h3><p>${boatRequirements(boat)}</p><strong class="boat-price">${formatCoins(boat.price)}</strong></div>
      ${owned ? `<span class="owned-label">${state.boat === boat.id ? '사용 중' : '보유 중'}</span>` : `<button class="purchase-button" type="button" data-purchase="${boat.id}" ${canBuy ? '' : 'disabled'}>${canBuy ? '구매하기' : '전 부족'}</button>`}
    </article>`;
  }).join('');
  document.querySelectorAll('[data-purchase]').forEach((button) => button.addEventListener('click', () => buyBoat(button.dataset.purchase)));
}
function renderBoatBook() {
  document.querySelector('#boatBookList').innerHTML = BOATS.map((boat) => {
    const owned = state.ownedBoats.includes(boat.id);
    return `<article class="boat-card ${owned ? '' : 'locked'} ${state.boat === boat.id ? 'current' : ''}">
      <span class="boat-icon">${owned ? boat.icon : '🔒'}</span><div><h3>${owned ? boat.name : '???'}</h3><p>${owned ? boat.description : '아직 구매하지 않은 낚시배입니다.'}</p><span class="unlock-state">${owned ? (state.boat === boat.id ? '현재 사용 중' : '보유 중') : `${formatCoins(boat.price)}에 구매 가능`}</span></div>
    </article>`;
  }).join('');
}
function renderStorage() {
  document.querySelector('#totalCatches').textContent = `${state.totalCatches.toLocaleString('ko-KR')}회`;
  document.querySelector('#totalEarned').textContent = formatCoins(state.totalEarned);
  const log = document.querySelector('#catchLog');
  if (!state.log.length) { log.innerHTML = '<div class="empty-log">아직 잡은 물고기가 없어요.<br />바다로 나가 첫 물고기를 낚아 보세요!</div>'; return; }
  log.innerHTML = state.log.map((entry) => `<article class="log-item">${entry.image ? `<img class="log-photo" src="${entry.image}" alt="${entry.name} 사진" />` : `<span class="log-icon">${entry.icon || '🐟'}</span>`}<div class="log-main"><strong>${entry.name}</strong><span>${entry.rarity} · ${entry.isTemperatureEvent ? '수온 상승 피해' : '자동 판매 완료'}</span></div><strong class="log-price ${entry.price < 0 ? 'loss' : ''}">${formatSignedCoins(entry.price)}</strong></article>`).join('');
}

function buyBoat(id) {
  const boat = BOATS.find((item) => item.id === id);
  if (!boat || state.ownedBoats.includes(id) || state.coins < boat.price) return;
  state.coins -= boat.price;
  state.ownedBoats.push(id);
  state.boat = id;
  state.castsByBoat[id] = 0;
  saveState();
  renderBoatShop();
  updateBalances();
}

function groupWeightsFor(boat) {
  if (boat.id === 'starter') return { common: 99 };
  if (boat.id === 'small') return { common: 66, rare: 33 };
  if (boat.id === 'medium') return { common: 50, rare: 32, legendary: 17 };
  return { rare: 60, legendary: 36 };
}
function pickFish() {
  const boat = currentBoat();
  const weights = [];
  const groupWeights = groupWeightsFor(boat);
  Object.entries(groupWeights).forEach(([group, total]) => {
    const fishInGroup = FISH.filter((fish) => fish.group === group);
    fishInGroup.forEach((fish) => weights.push({ fish, weight: total / fishInGroup.length }));
  });
  // Each available golden fish has a fixed 1% chance. The non-golden groups above use the remaining chance.
  boat.golden.forEach((id) => weights.push({ fish: fishById(id), weight: 1 }));
  const roll = Math.random() * weights.reduce((sum, item) => sum + item.weight, 0);
  let cursor = 0;
  return weights.find((item) => (cursor += item.weight) >= roll).fish;
}
function pickTemperatureCatch() { return TEMPERATURE_CATCHES[Math.floor(Math.random() * TEMPERATURE_CATCHES.length)]; }
function pickTemperatureFact() { return TEMPERATURE_FACTS[Math.floor(Math.random() * TEMPERATURE_FACTS.length)]; }
function pickCatch() { return state.temperatureEventCasts > 0 ? pickTemperatureCatch() : pickFish(); }

function playTone(frequency, duration = 0.1) {
  if (!state.soundOn || !window.AudioContext) return;
  const context = new AudioContext(); const oscillator = context.createOscillator(); const gain = context.createGain();
  oscillator.frequency.value = frequency; gain.gain.setValueAtTime(.04, context.currentTime); gain.gain.exponentialRampToValueAtTime(.001, context.currentTime + duration);
  oscillator.connect(gain).connect(context.destination); oscillator.start(); oscillator.stop(context.currentTime + duration);
}
function castLine() {
  const button = document.querySelector('#castButton');
  const reelButton = document.querySelector('#reelButton');
  if (button.disabled || castInProgress) return;
  castInProgress = true;
  button.disabled = true; button.hidden = true;
  reelButton.hidden = false; reelButton.disabled = false; reelButton.textContent = '릴 감기!';
  const bobber = document.querySelector('#bobber'); const prompt = document.querySelector('#fishingPrompt');
  bobber.classList.add('active'); prompt.innerHTML = '<p>찰랑, 찰랑…</p><strong>입질을 기다리고 있어요</strong>';
  playTone(390);
  biteTimer = window.setTimeout(() => {
    biteTimer = null;
    if (!castInProgress) return;
    pendingCatch = pickCatch();
    bobber.classList.add('bite');
    prompt.innerHTML = '<p>입질이다!</p><strong>1.5초 안에 릴 감기! 버튼을 누르세요</strong>';
    button.hidden = true;
    reelButton.hidden = false; reelButton.disabled = false; reelButton.focus();
    playTone(590, .14);
    escapeTimer = window.setTimeout(fishEscapes, 1500);
  }, 780);
}
function reelInFish() {
  const prompt = document.querySelector('#fishingPrompt');
  if (!pendingCatch) {
    if (castInProgress) {
      const button = document.querySelector('#castButton');
      const reelButton = document.querySelector('#reelButton');
      const bobber = document.querySelector('#bobber');
      if (biteTimer !== null) { window.clearTimeout(biteTimer); biteTimer = null; }
      castInProgress = false;
      bobber.classList.remove('active', 'bite');
      button.hidden = false; button.disabled = false; button.textContent = '낚싯대 던지기';
      reelButton.hidden = true; reelButton.disabled = true; reelButton.textContent = '릴 감기!';
      prompt.innerHTML = '<p>너무 빨리 릴을 감았어요!</p><strong>물고기를 잡지 못했어요. 낚싯줄을 회수했습니다.</strong>';
      playTone(250, .12);
    }
    return;
  }
  const fish = pendingCatch;
  const button = document.querySelector('#castButton');
  const reelButton = document.querySelector('#reelButton');
  const bobber = document.querySelector('#bobber');
  if (escapeTimer !== null) { window.clearTimeout(escapeTimer); escapeTimer = null; }
  if (biteTimer !== null) { window.clearTimeout(biteTimer); biteTimer = null; }
  pendingCatch = null;
  castInProgress = false;
  reelButton.disabled = true; reelButton.textContent = '끌어올리는 중…';
  bobber.classList.remove('active', 'bite');
  button.hidden = false; button.disabled = false; button.textContent = '낚싯대 던지기';
  reelButton.hidden = true; reelButton.textContent = '릴 감기!';
  prompt.innerHTML = '<p>물결이 잔잔해요</p><strong>낚싯대를 던져 보세요!</strong>';
  recordCatch(fish); openCatchModal(fish);
}
function fishEscapes() {
  if (!pendingCatch) return;
  const button = document.querySelector('#castButton');
  const reelButton = document.querySelector('#reelButton');
  const bobber = document.querySelector('#bobber'); const prompt = document.querySelector('#fishingPrompt');
  pendingCatch = null; castInProgress = false; biteTimer = null; escapeTimer = null;
  bobber.classList.remove('active', 'bite');
  button.hidden = false; button.disabled = false; button.textContent = '낚싯대 던지기';
  reelButton.hidden = true; reelButton.disabled = true; reelButton.textContent = '릴 감기!';
  prompt.innerHTML = '<p>너무 늦었어요!</p><strong>물고기가 도망갔어요. 다시 도전해 보세요.</strong>';
  playTone(180, .18);
}
function recordCatch(fish) {
  state.coins += fish.price; state.totalCatches += 1; state.totalEarned += fish.price;
  state.log.unshift({ id: fish.id, name: fish.name, rarity: fish.rarity, price: fish.price, image: fish.image, isTemperatureEvent: Boolean(fish.isTemperatureEvent) }); state.log = state.log.slice(0, 30);
  if (fish.isTemperatureEvent) state.temperatureEventCasts = Math.max(0, state.temperatureEventCasts - 1);
  else if (!state.discovered.includes(fish.id)) state.discovered.push(fish.id);
  state.castsByBoat[state.boat] = (state.castsByBoat[state.boat] || 0) + 1;
  if (state.castsByBoat[state.boat] === 10 && !state.temperatureShown.includes(state.boat) && state.temperatureEventCasts === 0) {
    state.temperatureShown.push(state.boat); state.temperatureEventCasts = 3; state.temperatureFact = pickTemperatureFact(); pendingTemperature = true;
  }
  saveState(); updateBalances(); playTone(fish.isTemperatureEvent ? 180 : fish.rarity === '황금' ? 860 : 700, .2);
}
function openModal(id) { document.querySelector('#modalBackdrop').hidden = false; document.querySelector(`#${id}`).hidden = false; }
function openTemperatureModal() {
  if (!state.temperatureFact) { state.temperatureFact = pickTemperatureFact(); saveState(); }
  document.querySelector('#temperatureFact').textContent = state.temperatureFact;
  openModal('temperatureModal');
}
function closeModal(id) {
  document.querySelector(`#${id}`).hidden = true;
  if (id === 'catchModal' && pendingTemperature) { pendingTemperature = false; openTemperatureModal(); return; }
  if (!document.querySelectorAll('.modal:not([hidden])').length) document.querySelector('#modalBackdrop').hidden = true;
}
function openCatchModal(fish) {
  const modal = document.querySelector('#catchModal');
  const fishColor = fish.color || RARITY_COLORS[fish.rarity];
  modal.style.setProperty('--rarity', fishColor);
  document.querySelector('#caughtFishIcon').src = fish.image;
  document.querySelector('#caughtFishIcon').alt = `${fish.name} 사진`;
  document.querySelector('#caughtRarity').textContent = fish.rarityLabel || `${fish.rarity} 등급`;
  document.querySelector('#caughtRarity').style.color = fishColor;
  document.querySelector('#catchTitle').textContent = fish.catchTitle || `${fish.name}을(를) 잡았어요!`;
  document.querySelector('#catchMessage').textContent = fish.isTemperatureEvent ? '수온 상승으로 전을 잃었어요' : '자동으로 판매했어요';
  const salePrice = document.querySelector('#salePrice');
  salePrice.textContent = formatSignedCoins(fish.price);
  salePrice.classList.toggle('loss', fish.price < 0);
  openModal('catchModal');
}

document.querySelectorAll('[data-open]').forEach((button) => button.addEventListener('click', () => openScreen(button.dataset.open)));
document.querySelectorAll('[data-back]').forEach((button) => button.addEventListener('click', goHome));
document.querySelector('#castButton').addEventListener('click', castLine);
document.querySelector('#reelButton').addEventListener('click', reelInFish);
document.querySelector('#temperatureInfoButton').addEventListener('click', () => openModal('temperatureInfoModal'));
document.querySelectorAll('[data-close]').forEach((button) => button.addEventListener('click', () => closeModal(button.dataset.close)));
document.querySelector('#soundButton').addEventListener('click', (event) => { state.soundOn = !state.soundOn; event.currentTarget.setAttribute('aria-pressed', String(state.soundOn)); event.currentTarget.textContent = state.soundOn ? '♪' : '×'; saveState(); });
document.querySelector('#soundButton').setAttribute('aria-pressed', String(state.soundOn));
document.querySelector('#soundButton').textContent = state.soundOn ? '♪' : '×';
updateBalances();
