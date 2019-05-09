var INPUT_STRING = document.getElementById('sampleInput');
var RESULT_STRING = document.createElement('span');
RESULT_STRING.style = "class=result";
var ARRAY_VALUES = [];
var MAIN_CONTAINER = document.getElementById('mainContainer');
var BODY_CONTAINER = document.getElementById('bodyContainer');
var RESULT_BOX = document.getElementById('resultBox');
var STRING_MENU = document.getElementById('stringFlag');
var STRING_MENU_BOX = document.getElementById('stringMenu');
var EVEN_SELECT = document.getElementById('selectEven');
var NUMBERS_MENU = document.getElementById('numbersMenu')
var NUMBERS_MENU_HEADER = document.getElementById('numbersMenuBox')
var NUMBERS_MENU_BOX = document.getElementById('numbersMenuBox')
var MIN_VAL = document.getElementById('minVal');
var MAX_VAL = document.getElementById('maxVal');
var MIN_VAL_BOX = document.getElementById('minValBox');
var MAX_VAL_BOX = document.getElementById('maxValBox');
var MIN_MAX_CHECKBOX = document.getElementById('minMaxVal')
var COUNT_LETTERS = document.getElementById('countLetters')
var MAX_WORD = document.getElementById('maxWord')
var SWITCH_LANG_BTN = document.getElementById('switchBtn')
var LANG_STATE_ENG = true;
var PALLETE_BAR = document.getElementById('palleteBar');
var PALLETE_CHECKBOX = document.getElementById('changePallete');
/*For russian */
var MAIN_HEADER_TEXT = document.getElementById('mainHeader');
var INPUT_HEADER_TEXT = document.getElementById('inputHeader');
var STRING_MENU_TEXT = document.getElementById('stringFlagDescription');
var COUNT_LETTERS_TEXT = document.getElementById('countLettersDescription');
var MAX_WORD_TEXT = document.getElementById('maxWordDescription');
var NUMBERS_MENU_TEXT = document.getElementById('numbersMenuDescription');
var NUMBERS_MENU_HEADER_TEXT = document.getElementById('numbersMenuHeader');
var EVEN_TEXT = document.getElementById('evenDescription');
var NOT_EVEN_TEXT = document.getElementById('notEvenDescription');
var MIN_MAX_CHECKBOX_TEXT = document.getElementById('minMaxValDescription');
var MAX_VAL_TEXT = document.getElementById('maxValDescription');
var MIN_VAL_TEXT = document.getElementById('minValDescription');
var HANDLE_BTN = document.getElementById('hadleBtn');
var RESULT_TEXT = document.getElementById('resultHeader');
var PALLETE_CHECKBOX_TEXT = document.getElementById('changePalleteDescription');
/*For colors */
var THEME_DEFAULT = document.getElementById('themeDefault');
var THEME_BLUE = document.getElementById('themeBlue');
var THEME_GREEN = document.getElementById('themeGreen');
var THEME_YELLOW = document.getElementById('themeYellow');
var THEME_DARK = document.getElementById('themeDark');



function displayCountLetters() {
  if (COUNT_LETTERS.checked) {
    MAX_WORD.disabled = true;
  } else {
    MAX_WORD.disabled = false;
  }
}

function displayMaxWord() {
  if (MAX_WORD.checked) {
    COUNT_LETTERS.disabled = true;
  } else {
    COUNT_LETTERS.disabled = false;
  }
}

function displayNumbersMenu() {
  if (NUMBERS_MENU.checked) {
    NUMBERS_MENU_HEADER.classList.remove("hidden");
    NUMBERS_MENU_BOX.classList.remove("hidden");
    STRING_MENU.disabled = true;
  } else {
    NUMBERS_MENU_HEADER.classList.add("hidden")
    NUMBERS_MENU_BOX.classList.add("hidden")
    STRING_MENU.disabled = false;
  }
}

function displayStringMenu() {
  if (STRING_MENU.checked) {
    STRING_MENU_BOX.classList.remove("hidden")
    NUMBERS_MENU.disabled = true;
  } else {
    STRING_MENU_BOX.classList.add("hidden")
    NUMBERS_MENU.disabled = false;
  }
}

function getMinMaxVal() {
  if (MIN_MAX_CHECKBOX.checked) {
    MIN_VAL_BOX.classList.remove("hidden")
    MAX_VAL_BOX.classList.remove("hidden")
  } else {
    MIN_VAL_BOX.classList.add("hidden")
    MAX_VAL_BOX.classList.add("hidden")
  }
}

function changeEven() {
  var selectedOption = EVEN_SELECT.value;
  if (selectedOption === "not_even") {
    EVEN_SELECT.selectedIndex = 1;
  } else {
    EVEN_SELECT.selectedIndex = 0;
  }
}

function handler() {
  if (STRING_MENU.checked) {
    validateString();
  } else if (NUMBERS_MENU.checked) {
    validateNumber();
  } else {

    ARRAY_VALUES = "You must choose an option to continue";
    renderResult()
  }
}


function validateString() {
  var stringToArr = INPUT_STRING.value.split("")
  var temp = [];
  for (var i = 0; i < stringToArr.length; i++) {
    if (stringToArr[i] === " " &&
      (temp !== []) &&
      stringToArr[i - 1] !== undefined &&
      stringToArr[i - 1] !== " ") {
      ARRAY_VALUES.push(temp.join(""))
      temp = [];
    } else {
      temp.push(stringToArr[i]);
    }
  }
  ARRAY_VALUES.push(temp.join(""));
  if (ARRAY_VALUES[0] === "") {
    if (LANG_STATE_ENG) {
      ARRAY_VALUES = 'Enter a string starts with symbol';
    } else {
      ARRAY_VALUES = 'Введите строку начинающуюся с символа';
    }
    renderResult();
  }
  if (COUNT_LETTERS.checked) {
    ARRAY_VALUES = letterCounter(ARRAY_VALUES.join(""))
    renderResult();
  } else if (MAX_WORD.checked) {
    ARRAY_VALUES = getMaxWord(ARRAY_VALUES)
    renderResult();
  }
}

function getMaxWord(arr) {
  var resultMaxWords = [];
  var maxLength;
  for (var i = 0; i < arr.length; i++) {
    maxLength = arr[0].length;
    if (arr[i].length > maxLength) {
      maxLength = arr[i].length;
      resultMaxWords = [];
      resultMaxWords.push(arr[i]);
    } else if (arr[i].length === maxLength)
      resultMaxWords.push(arr[i]);
  }
  return resultMaxWords;
}

function letterCounter(str) {
  var lowerCase = 0;
  var upperCase = 0;
  var alphabetLower;
  var aplhabetUpper;
  if (LANG_STATE_ENG) {
    alphabetLower = "abcdefghijklmnopqrstuvwxyz"
    aplhabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  } else {
    alphabetLower = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"
    aplhabetUpper = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ"
  }
  var arLow = alphabetLower.split("");
  var arUpp = aplhabetUpper.split("");
  for (var i = 0; i < str.length; i++) {
    if (arLow.indexOf(str[i]) > -1) {
      lowerCase = lowerCase + 1;
    } else if (arUpp.indexOf(str[i]) > -1) {
      upperCase = upperCase + 1;
    }
  }
  var result;
  if ((str.length > 0) && (lowerCase === 0) && (upperCase === 0)) {
    if (LANG_STATE_ENG) {
      result = 'You must use only English aplhabet';
    } else {
      result = 'Используйте только русский алфавит';
    }
    return result;
  }
  if (LANG_STATE_ENG) {
    result = "The amount of English lowerCases: " + lowerCase +
      "\<br\>" + "\<span class=result\>" + "The amount of English upperCases: " + upperCase + "\<\/span\>";
  } else {
    result = "Количество Русских строчных букв: " + lowerCase +
      "\<br\>" + "\<span class=result\>" + "Количество Русских прописных букв: " + upperCase + "\<\/span\>";
  }
  return result;
}

function validateNumber() {
  var stringToArr = INPUT_STRING.value.split("")
  var temp = [];
  var dotsCounter = null;
  for (var i = 0; i < stringToArr.length; i++) {
    if (isFinite(stringToArr[i]) ||
      stringToArr[i] === " " ||
      stringToArr[i] === ";" ||
      stringToArr[i] === "," ||
      stringToArr[i] === '.') {
      if (isFinite(stringToArr[i]) && (stringToArr[i] !== " ")) {
        temp.push(stringToArr[i])
      } else if (stringToArr[i] === '.') {

        if (dotsCounter < 1) {
          ++dotsCounter
          temp.push(stringToArr[i])

        } else {
          RESULT_BOX.style = "color: red";
          if (LANG_STATE_ENG) {
            renderResult("Additional dot at position: " + (i + 1));
          } else {
            renderResult("Лишняя точка на позиции: " + (i + 1));
          }
          dotsCounter = null;
          return false;
        }

      } else if ((temp !== []) &&

        (stringToArr[i - 1] !== " " &&
          stringToArr[i - 1] !== ";" &&
          stringToArr[i - 1] !== "," &&
          stringToArr[i - 1] !== undefined)) {
        ARRAY_VALUES.push(+temp.join(""))
        temp = [];
      }
    } else {
      if (LANG_STATE_ENG) {
        renderResult("Use only numbers");
      } else {
        renderResult("Вводите только числа");
      }
      return false;
    }
  }
  ARRAY_VALUES.push(temp.join(""));
  if (NUMBERS_MENU.checked && EVEN_SELECT.selectedIndex === 0) {
    ARRAY_VALUES = getEven(ARRAY_VALUES)
    if (MIN_MAX_CHECKBOX.checked) {
      if (MAX_VAL.checked) {
        ARRAY_VALUES = ARRAY_VALUES.sort(compareNumeric)[ARRAY_VALUES.length - 1]
      } else if (MIN_VAL.checked) {
        ARRAY_VALUES = ARRAY_VALUES.sort(compareNumeric)[0]
      }
    }

  } else if (NUMBERS_MENU.checked && EVEN_SELECT.selectedIndex === 1) {
    ARRAY_VALUES = getNotEven(ARRAY_VALUES);
    if (MIN_MAX_CHECKBOX.checked) {
      if (MAX_VAL.checked) {
        ARRAY_VALUES = ARRAY_VALUES.sort(compareNumeric)[ARRAY_VALUES.length - 1]
      } else if (MIN_VAL.checked) {
        ARRAY_VALUES = ARRAY_VALUES.sort(compareNumeric)[0]
      }
    }
  }
  renderResult();
}

function compareNumeric(a, b) {
  return a - b;
}

function getEven(arr) {
  return arr.filter(function(number) {
    return number % 2 === 0;
  });
}

function getNotEven(arr) {
  return arr.filter(function(number) {
    return number % 2 === 1;
  });
}

function renderResult(message) {
  if (ARRAY_VALUES[ARRAY_VALUES.length - 1] === '') {
    ARRAY_VALUES.pop()
  }
  RESULT_BOX.style = "color: black";
  RESULT_BOX.appendChild(RESULT_STRING);
  RESULT_STRING.className = "result";
  RESULT_STRING.innerHTML = message !== undefined ? message : ARRAY_VALUES;
  ARRAY_VALUES = [];
}

function handleSwitchLang() {
  if (LANG_STATE_ENG) {
    SWITCH_LANG_BTN.classList.add("switch-on");

    MAIN_HEADER_TEXT.innerText = "Обработчик для строк и чисел";
    INPUT_HEADER_TEXT.innerText = "Введите текст:";
    STRING_MENU_TEXT.innerText = "Активировать меню для строк";
    COUNT_LETTERS_TEXT.innerText = "Кол-во строчных и прописных";
    MAX_WORD_TEXT.innerText = "Самое длинное слово";
    NUMBERS_MENU_TEXT.innerText = "Активировать меню для чисел";
    NUMBERS_MENU_HEADER_TEXT.innerText = "Меню чисел:";
    EVEN_TEXT.innerText = "Четное";
    NOT_EVEN_TEXT.innerText = "Нечетное";
    MIN_MAX_CHECKBOX_TEXT.innerText = "Найти Макс/Мин значение";
    MAX_VAL_TEXT.innerText = "Макс. значение";
    MIN_VAL_TEXT.innerText = "Мин. значение";
    HANDLE_BTN.innerText = "Обработать";
    RESULT_TEXT.innerText = "Результат:"
    PALLETE_CHECKBOX_TEXT.innerText = "Изменить цветовой стиль";

    LANG_STATE_ENG = false;
  } else {
    SWITCH_LANG_BTN.classList.remove("switch-on");

    MAIN_HEADER_TEXT.innerText = "Handler for strings and numbers";
    INPUT_HEADER_TEXT.innerText = "Enter Text:";
    STRING_MENU_TEXT.innerText = "Activate strings menu";
    COUNT_LETTERS_TEXT.innerText = "Count letter cases";
    MAX_WORD_TEXT.innerText = "Get max word(s)";
    NUMBERS_MENU_TEXT.innerText = "Activate number menu";
    NUMBERS_MENU_HEADER_TEXT.innerText = "Number menu:";
    EVEN_TEXT.innerText = "Even";
    NOT_EVEN_TEXT.innerText = "Not even";
    MIN_MAX_CHECKBOX_TEXT.innerText = "Find Max/Min value";
    MAX_VAL_TEXT.innerText = "Max Value";
    MIN_VAL_TEXT.innerText = "Min Value";
    HANDLE_BTN.innerText = "Handle";
    RESULT_TEXT.innerText = "The result is:"
    PALLETE_CHECKBOX_TEXT.innerText = "Activate pallete bar";

    LANG_STATE_ENG = true;
  }
}

function activatePalleteBar() {
  if (PALLETE_CHECKBOX.checked) {
    PALLETE_BAR.classList.remove("hidden")
  } else {
    PALLETE_BAR.classList.add("hidden")
  }
}

function toogleColor(elem) {
  var value = elem.id;
  switch (document.getElementById(value).checked) {
    case value === "themeBlue":
      PALLETE_BAR.style = "background-color: lightblue"
      BODY_CONTAINER.style = "background-color: aliceblue"
      MAIN_CONTAINER.style = "background-color: lightskyblue"
      HANDLE_BTN.style = "background-color: #81b3d2"
      break;
    case value === "themeGreen":
      PALLETE_BAR.style = "background-color: #f58669"
      BODY_CONTAINER.style = "background-color: #20B2AA"
      MAIN_CONTAINER.style = "background-color: LIMEGREEN"
      HANDLE_BTN.style = "background-color: #6B8E23"
      break;
    case value === "themeYellow":
      PALLETE_BAR.style = "background-color: #D2691E"
      BODY_CONTAINER.style = "background-color: #FFE4B5"
      MAIN_CONTAINER.style = "background-color: #FFD700"
      HANDLE_BTN.style = "background-color: #DAA520"
      break;
    case value === "themeDark":
      PALLETE_BAR.style = "background-color: #483D8B"
      BODY_CONTAINER.style = "background-color: #A9A9A9"
      MAIN_CONTAINER.style = "background-color: #708090"
      HANDLE_BTN.style = "background-color: #C0C0C0"
      break;
    default:
      PALLETE_BAR.style = "background-color: mediumseagreen"
      BODY_CONTAINER.style = "background-color: LIGHTYELLOW"
      MAIN_CONTAINER.style = "background-color: LIGHTSALMON";
      HANDLE_BTN.style = "background-color: FIREBRICK"
  }
}

function changeEven() {
  var selectedOption = EVEN_SELECT.value;
  if (selectedOption === "not_even") {
    EVEN_SELECT.selectedIndex = 1;
  } else {
    EVEN_SELECT.selectedIndex = 0;
  }
}