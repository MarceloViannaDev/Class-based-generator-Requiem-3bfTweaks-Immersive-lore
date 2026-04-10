let globalData = null;
let currentLang = 'pt';

const DOM = {};

async function loadData() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        globalData = await response.json();
        populateDropdowns();
        attachEvents();
        updateUI();
        refreshNameAndLore();  // gera o primeiro nome
    } catch (err) {
        console.error(err);
        document.getElementById('subtitleText').innerText = 'Erro ao carregar data.json. Verifique o arquivo.';
        document.getElementById('displayName').innerText = 'Erro nos dados';
    }
}

function populateDropdowns() {
    // Raças
    DOM.raceSelect.innerHTML = '';
    globalData.races.forEach(race => {
        const option = document.createElement('option');
        option.value = race;
        option.text = race;
        DOM.raceSelect.appendChild(option);
    });
    // Classes
    DOM.classSelect.innerHTML = '';
    globalData.classes.forEach(cls => {
        const option = document.createElement('option');
        option.value = cls;
        option.text = cls;
        DOM.classSelect.appendChild(option);
    });
    // Define valores padrão (primeiro de cada lista)
    DOM.raceSelect.value = globalData.races[0];
    DOM.classSelect.value = globalData.classes[0];
    DOM.genderSelect.value = 'male';
}

function attachEvents() {
    DOM.langEn.addEventListener('click', () => {
        if (currentLang === 'en') return;
        currentLang = 'en';
        DOM.langEn.classList.add('active');
        DOM.langPt.classList.remove('active');
        updateUI();
        refreshNameAndLore();
    });
    DOM.langPt.addEventListener('click', () => {
        if (currentLang === 'pt') return;
        currentLang = 'pt';
        DOM.langPt.classList.add('active');
        DOM.langEn.classList.remove('active');
        updateUI();
        refreshNameAndLore();
    });
    DOM.generateBtn.addEventListener('click', refreshNameAndLore);
    DOM.raceSelect.addEventListener('change', refreshNameAndLore);
    DOM.genderSelect.addEventListener('change', refreshNameAndLore);
    DOM.classSelect.addEventListener('change', refreshNameAndLore);
}

function updateUI() {
    const texts = globalData.uiTexts[currentLang];
    DOM.subtitle.innerText = texts.subtitle;
    DOM.raceLabel.innerText = texts.race;
    DOM.genderLabel.innerText = texts.gender;
    DOM.classLabel.innerText = texts.class;
    DOM.genderSelect.options[0].text = texts.male;
    DOM.genderSelect.options[1].text = texts.female;
    DOM.genBtn.innerHTML = texts.generateBtn;
    DOM.footer.innerText = texts.footer;
    
    // Traduzir nomes das raças no dropdown
    const raceMap = globalData.raceNames?.[currentLang] || {};
    for (let i = 0; i < DOM.raceSelect.options.length; i++) {
        const opt = DOM.raceSelect.options[i];
        const originalRace = opt.value;
        opt.text = raceMap[originalRace] || originalRace;
    }
    // Traduzir nomes das classes
    const classMap = globalData.classNames?.[currentLang] || {};
    for (let i = 0; i < DOM.classSelect.options.length; i++) {
        const opt = DOM.classSelect.options[i];
        const originalClass = opt.value;
        opt.text = classMap[originalClass] || originalClass;
    }
}

function refreshNameAndLore() {
    const race = DOM.raceSelect.value;
    const gender = DOM.genderSelect.value;
    const classe = DOM.classSelect.value;
    const fullName = generateFullName(race, gender, classe);
    DOM.displayName.classList.remove('fade-name');
    void DOM.displayName.offsetHeight; // força reflow
    DOM.displayName.classList.add('fade-name');
    DOM.displayName.innerText = fullName;
    
    const loreBase = globalData.loreRacial[currentLang][race] || '';
    const classDesc = currentLang === 'en' ? ` · ${classe} path` : ` · Caminho ${classe}`;
    const prefix = globalData.uiTexts[currentLang].lorePrefix;
    DOM.loreNote.innerHTML = `<strong>${prefix}</strong> ${loreBase}${classDesc}`;
}

function generateFullName(race, gender, classe) {
    const firstNameList = globalData.firstNames[race]?.[gender];
    if (!firstNameList || firstNameList.length === 0) return '?Name?';
    const firstName = firstNameList[Math.floor(Math.random() * firstNameList.length)];
    const titleObj = globalData.classTitles[classe]?.[gender];
    if (!titleObj) return firstName;
    const title = titleObj[currentLang];
    if (!title) return firstName;
    
    if (currentLang === 'en') {
        if (title.toLowerCase().startsWith('the ')) return `${firstName} ${title}`;
        else return `${firstName} the ${title}`;
    } else {
        return `${firstName}, ${title}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    DOM.raceSelect = document.getElementById('raceSelect');
    DOM.genderSelect = document.getElementById('genderSelect');
    DOM.classSelect = document.getElementById('classSelect');
    DOM.displayName = document.getElementById('displayName');
    DOM.loreNote = document.getElementById('loreNote');
    DOM.subtitle = document.getElementById('subtitleText');
    DOM.raceLabel = document.getElementById('raceLabel');
    DOM.genderLabel = document.getElementById('genderLabel');
    DOM.classLabel = document.getElementById('classLabel');
    DOM.genBtn = document.getElementById('generateBtn');
    DOM.footer = document.getElementById('footerText');
    DOM.langEn = document.getElementById('langEnBtn');
    DOM.langPt = document.getElementById('langPtBtn');
    
    loadData();
});