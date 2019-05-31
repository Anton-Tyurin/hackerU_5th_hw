console.clear()
// Key
var KEY_ENTER = 13;

function getFocus() {
  if (INPUT_STRING.classList.contains("hidden")) {
    document.getElementById("textSentence").focus();
  } else {
    INPUT_STRING.focus();
  }
}

window.addEventListener("keydown", function(event) {
  if (event.keyCode === KEY_ENTER) {
    getFocus()
    HANDLE_BTN.click();
  }
});

function preventTextareaDefault(e) {
  if (e.keyCode === 13 && !e.shiftKey) {
    e.preventDefault();
  };
}

/*For render options*/
let OPTION_ID = "defaultOption";
const OPTIONS_CONTAINER = document.getElementById('optionsMenu')
const ADDITIONAL_INPUT = document.getElementById('additionalInput')
/*For render options - numbers*/
const ARRAY_OPTIONS_NUMBERS_ID = ["defaultOption", "lesserThanAverage", "evenVal", "notEvenVal",
  "maxVal", "minVal", "twoMinValues", "clearedByRange", "sumAfterNegative", "minByModule"
]
const ARRAY_OPTIONS_NUMBERS_LABLES = ["Default", "Get lesser than average", "Get even numbers",
  "Get not even numbers", "Get max value", "Get min value", "Get two min values", "Get cleared by range",
  "Get sum after negative", "Get min by module"
]
const ARRAY_OPTIONS_NUMBERS_LABLES_RUS = ["По умоланию", "Меньше среднего знач.", "Четные числа",
  "Нечетные числа", "Макс. значение", "Мин. значение", "Два мин. знач.", "Обнулить в пределах",
  "Сумма после отриц.", "Мин. по модулю"
]

/*For render options - strings*/
const ARRAY_OPTIONS_STRINGS_ID = ["defaultOption", "maxSentence", "findAndReplase", "delDubSeparator",
  "numbersArr", "palindrome", "amountOfCases", "maxWord"
]
const ARRAY_OPTIONS_STRINGS_LABLES = ["Default", "Get max sentence",
  "Find and replace", "Delete duplicate separator",
  "Get array of numbers", "Find is it palindrome", "Get amount of cases", "Get max word"
]

const ARRAY_OPTIONS_STRINGS_LABLES_RUS = ["По умолчанию", "Наибольшее предл.",
  "Найти и заменить", "Удалить повт. разделит.",
  "Массив чисел", "Провер. пандиломы", "Кол-во регистров", "Наибольшее слово"
]

/*For render result*/

const INPUT_STRING = document.getElementById('sampleInput');
const RESULT_STRING = document.createElement('span');
RESULT_STRING.style = "class=result";
let ARRAY_VALUES = [];
const RESULT_BOX = document.getElementById('resultBox');


/*For russian language*/

const MAIN_HEADER_TEXT = document.getElementById('mainHeader');
const INPUT_HEADER_TEXT = document.getElementById('inputHeader');
const STRING_MENU_TEXT = document.getElementById('stringFlagDescription');
const COUNT_LETTERS_TEXT = document.getElementById('countLettersDescription');
const MAX_WORD_TEXT = document.getElementById('maxWordDescription');
const NUMBERS_MENU_TEXT = document.getElementById('numbersMenuDescription');
const NUMBERS_MENU_HEADER_TEXT = document.getElementById('numbersMenuHeader');
const EVEN_TEXT = document.getElementById('evenDescription');
const NOT_EVEN_TEXT = document.getElementById('notEvenDescription');
const MIN_MAX_CHECKBOX_TEXT = document.getElementById('minMaxValDescription');
const MAX_VAL_TEXT = document.getElementById('maxValDescription');
const MIN_VAL_TEXT = document.getElementById('minValDescription');
const HANDLE_BTN = document.getElementById('hadleBtn');
const RESULT_TEXT = document.getElementById('resultHeader');
const PALLETE_CHECKBOX_TEXT = document.getElementById('changePalleteDescription');
const SWITCH_LANG_BTN = document.getElementById('switchBtn')
let LANG_STATE_ENG = true;
const NUMBERS_MENU_HEADER = document.getElementById('numbersMenuBox')
const NUMBERS_MENU_BOX = document.getElementById('numbersMenuBox')
const MIN_VAL_BOX = document.getElementById('minValBox');
const MAX_VAL_BOX = document.getElementById('maxValBox');

/*For colors change*/

const PALLETE_BAR = document.getElementById('palleteBar');
const MAIN_CONTAINER = document.getElementById('mainContainer');
const BODY_CONTAINER = document.getElementById('bodyContainer');
const THEME_DEFAULT = document.getElementById('themeDefault');
const THEME_BLUE = document.getElementById('themeBlue');
const THEME_GREEN = document.getElementById('themeGreen');
const THEME_YELLOW = document.getElementById('themeYellow');
const THEME_DARK = document.getElementById('themeDark');

/*Flags and selected*/

const STRING_MENU = document.getElementById('stringFlag');
const MIN_VAL = document.getElementById('minVal');
const MAX_VAL = document.getElementById('maxVal');
const COUNT_LETTERS = document.getElementById('countLetters')
const MAX_WORD = document.getElementById('maxWord')
const PALLETE_CHECKBOX = document.getElementById('changePallete');
const NUMBERS_MENU = document.getElementById('numbersMenu');

/*String prototipes*/
String.prototype.reverse = function() {
  return this.split("").reverse().join("")
}

String.prototype.replaсeMy = function(targetString, replaceString) {
  let str = this;
  if (document.getElementById("targetInput").value.length === 0 ||
    document.getElementById("replaceInput").value.length === 0
  ) {
    if ((targetString === undefined && document.getElementById("targetInput").value.length === 0) &&
      (replaceString === undefined && document.getElementById("replaceInput").value.length === 0)) {
      LANG_STATE_ENG ? str = "You didn't write replace and target String" :
        str = "Вы не ввели строку для замены и новое значение";
    } else if (replaceString === undefined && document.getElementById("replaceInput").value.length === 0) {
      LANG_STATE_ENG ? str = "You didn't write replace String" :
        str = "Вы не ввели строку для замены";
    } else if (targetString === undefined && document.getElementById("targetInput").value.length === 0) {
      LANG_STATE_ENG ? str = "You didn't write target String" :
        str = "Вы не ввели новое значение";
    }
    return str;
  }
  let target = targetString === undefined ? document.getElementById("targetInput").value : targetString;
  let replace = replaceString === undefined ? document.getElementById("replaceInput").value : replaceString;
  let pos = 0;
  while (true) {
    var foundPos = this.indexOf(target, pos);
    if (foundPos == -1) break;
    str = str.split("");
    str.splice(foundPos, target.length, replace)
    str = str.join("");
    pos = foundPos + 1;
  }
  return str;
}

String.prototype.delDub = function(separators) {
  let str = this;
  let separatorsStr = separators === undefined ? document.getElementById("separatorInput").value : targetString;
  let dubCounter = 0;
  let start = 0;
  str = str.split("");
  separatorsStr = separatorsStr.split("");
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < separatorsStr.length; j++) {
      if (str[i] === separatorsStr[j]) {
        start = i;
        if (str[i + 1] === separatorsStr[j]) {
          while (str[i + 1] === separatorsStr[j]) {
            ++dubCounter;
            i++
          }
          str.splice(start, dubCounter + 1);
          dubCounter = 0;
          start = 0;
        }
      }
    }
  }
  str = str.join("")
  return str;
}


/*Render options*/

function renderOptions(arrID, arrValues) {
  OPTIONS_CONTAINER.innerHTML = '';
  let strResult = '';

  if (arrID.length !== arrValues.length) {
    OPTIONS_CONTAINER.innerHTML = '<li class="list-group-item"><span class="text-secondary">Illegal values</span></li>';
    return false;
  }

  for (var i = 0; i < arrID.length; i++) {
    strResult += '<div class="options_item">' +
      '<input type="radio" class="options_radio" name="option" value="' + arrID[i] + '" id="' + arrID[i] + '" onclick="toogleOptionID(this)">' +
      '<label for="' + arrID[i] + '">' + arrValues[i] + '</label>' + '<span class="checkmark_options">' + '</span>' + '</div>'
  }
  OPTIONS_CONTAINER.innerHTML = strResult;
  document.getElementById("defaultOption").checked = true;
}

function renderAdditionalInput(type) {
  ADDITIONAL_INPUT.innerHTML = '';
  let strResult = '';
  if (type === "clearedByRange") {
    strResult = '<div class="input_a_range">' +
      '<label for="aRange">a: </label>' +
      '<input type="text" name="range" id="aRange">' +
      "</div>" +
      '<div class="input_b_range">' +
      '<label for="bRange">b: </label>' +
      '<input type="text" name="range" id="bRange">' +
      "</div>"
  } else if (type === "maxSentence") {
    INPUT_STRING.classList.add("hidden");
    strResult = '<textarea rows="8" cols="80" class="textSentence" id="textSentence">' + '</textarea>'
    document.addEventListener("keydown", function(event) {
      if (event.keyCode === KEY_ENTER && !event.shiftKey) {
        event.preventDefault();
      };
    })
  } else if (type === "findAndReplase") {
    LANG_STATE_ENG ? strResult = '<label for="targetInput" id="inputHeader" class="input_header">Enter target to replace:</label>' +
      '<input type="text" name="targetInput" class="main_input" id="targetInput">' +
      '<label for="replaceInput" id="inputHeader" class="input_header">Enter text to replace:</label>' +
      '<input type="text" name="replaceInput" class="main_input" id="replaceInput">' :
      strResult = '<label for="targetInput" id="inputHeader" class="input_header">Введите текст к замене:</label>' +
      '<input type="text" name="targetInput" class="main_input" id="targetInput">' +
      '<label for="replaceInput" id="inputHeader" class="input_header">Введите новый текст:</label>' +
      '<input type="text" name="replaceInput" class="main_input" id="replaceInput">'
  } else if (type === "delDubSeparator") {
    LANG_STATE_ENG ? strResult = '<label for="separatorInput" id="inputHeader" class="input_header">Enter separators:</label>' +
      '<input type="text" name="separatorInput" class="main_input" id="separatorInput">' :
      strResult = '<label for="separatorInput" id="inputHeader" class="input_header">Введите разделители:</label>' +
      '<input type="text" name="separatorInput" class="main_input" id="separatorInput">'
  }
  ADDITIONAL_INPUT.innerHTML = strResult;
  ADDITIONAL_INPUT.classList.remove("hidden");
}
/*Toogler for opitons ID*/

function toogleOptionID(elem) {
  INPUT_STRING.classList.remove("hidden");
  ADDITIONAL_INPUT.classList.add("hidden");
  OPTION_ID = elem.id;
  if (OPTION_ID === "clearedByRange" ||
    OPTION_ID === "maxSentence" ||
    OPTION_ID === "findAndReplase" ||
    OPTION_ID === "delDubSeparator") {
    renderAdditionalInput(OPTION_ID);
    changeBarHeight()
  }
  changeBarHeight()
}

/*Main handler*/

function handler() {
  ARRAY_VALUES = []
  if (STRING_MENU.checked) {

    if (validateString() === false) {
      return false;
    }
    switch (document.getElementById(OPTION_ID).checked) {
      case OPTION_ID === "maxSentence":
        ARRAY_VALUES = getMaxSentence(ARRAY_VALUES);
        renderResult()
        break;
      case OPTION_ID === "findAndReplase":
        ARRAY_VALUES = ARRAY_VALUES.join(" ");
        ARRAY_VALUES = ARRAY_VALUES.replaсeMy();
        renderResult();
        break;
      case OPTION_ID === "delDubSeparator":
        ARRAY_VALUES = ARRAY_VALUES.join(" ");
        ARRAY_VALUES = ARRAY_VALUES.delDub();
        renderResult();
        break;
      case OPTION_ID === "numbersArr":
        ARRAY_VALUES = getNumbersArr(ARRAY_VALUES)
        renderResult();
        break;
      case OPTION_ID === "palindrome":
        ARRAY_VALUES = checkPandilome(ARRAY_VALUES);
        renderResult();
        break;
      case OPTION_ID === "amountOfCases":
        ARRAY_VALUES = letterCounter(ARRAY_VALUES.join(""))
        renderResult()
        break;
      case OPTION_ID === "maxWord":
        ARRAY_VALUES = getMaxWord(ARRAY_VALUES);
        renderResult()
        break;
      case OPTION_ID === "defaultOption":
        renderResult()
    }
  } else if (NUMBERS_MENU.checked) {
    if (validateNumber() === false) {
      return false;
    }
    switch (document.getElementById(OPTION_ID).checked) {
      case OPTION_ID === "lesserThanAverage":
        ARRAY_VALUES = lesserThanAverage(ARRAY_VALUES)
        renderResult();
        break;
      case OPTION_ID === "evenVal":
        ARRAY_VALUES = getEven(ARRAY_VALUES);
        renderResult();
        break;
      case OPTION_ID === "notEvenVal":
        ARRAY_VALUES = getNotEven(ARRAY_VALUES);
        renderResult();
        break;
      case OPTION_ID === "maxVal":
        ARRAY_VALUES = ARRAY_VALUES.sort(compareNumeric)[ARRAY_VALUES.length - 1]
        renderResult()
        break;
      case OPTION_ID === "minVal":
        ARRAY_VALUES = ARRAY_VALUES.sort(compareNumeric)[0]
        renderResult()
        break;
      case OPTION_ID === "twoMinValues":
        if (ARRAY_VALUES.sort(compareNumeric)[1] !== undefined &&
          ARRAY_VALUES.sort(compareNumeric)[0] !== "") {
          ARRAY_VALUES = [ARRAY_VALUES.sort(compareNumeric)[0], ARRAY_VALUES.sort(compareNumeric)[1]]
          renderResult()
        } else {
          renderResult("You entered only one or Illegal numbers")
        }
        break;
      case OPTION_ID === "clearedByRange":
        let a = document.getElementById("aRange").value;
        let b = document.getElementById("bRange").value;
        ARRAY_VALUES = getClearedArr(ARRAY_VALUES, a, b);
        renderResult()
        break;
      case OPTION_ID === "sumAfterNegative":
        ARRAY_VALUES = sumAfterMinus(ARRAY_VALUES);
        renderResult()
        break;
      case OPTION_ID === "minByModule":
        ARRAY_VALUES = compareNumericAbs(ARRAY_VALUES);
        renderResult();
        break;
      case OPTION_ID === "defaultOption":
        renderResult()
    }
  } else {
    if (LANG_STATE_ENG) {
      ARRAY_VALUES = "You must choose an option to continue";
    } else {
      ARRAY_VALUES = 'Выберите опцию чтобы продолжить';
    }
    renderResult()
  }
}

/*Display content fucntions*/

function changeBarHeight() {
  PALLETE_BAR.style.height = MAIN_CONTAINER.clientHeight + "px";
}

function displayNumbersMenu() {
  if (NUMBERS_MENU.checked) {
    OPTIONS_CONTAINER.classList.remove("hidden");
    renderOptions(ARRAY_OPTIONS_NUMBERS_ID, (LANG_STATE_ENG ? ARRAY_OPTIONS_NUMBERS_LABLES : ARRAY_OPTIONS_NUMBERS_LABLES_RUS))
    changeBarHeight();
    STRING_MENU.checked = false;

  } else {
    INPUT_STRING.classList.remove("hidden");
    ADDITIONAL_INPUT.classList.add("hidden");
    OPTIONS_CONTAINER.classList.add("hidden")
  }
}

function displayStringMenu() {
  if (STRING_MENU.checked) {
    OPTIONS_CONTAINER.classList.remove("hidden");
    renderOptions(ARRAY_OPTIONS_STRINGS_ID, (LANG_STATE_ENG ? ARRAY_OPTIONS_STRINGS_LABLES : ARRAY_OPTIONS_STRINGS_LABLES_RUS))
    changeBarHeight();
    NUMBERS_MENU.checked = false;
  } else {
    INPUT_STRING.classList.remove("hidden");
    ADDITIONAL_INPUT.classList.add("hidden");
    OPTIONS_CONTAINER.classList.add("hidden")
  }
}

function activatePalleteBar() {
  if (PALLETE_CHECKBOX.checked) {
    PALLETE_BAR.classList.remove("hidden")
  } else {
    PALLETE_BAR.classList.add("hidden")
  }
}


/*Validator for stirngs*/

function validateString() {
  let stringToArr;
  if (INPUT_STRING.classList.contains("hidden")) {
    if (document.getElementById("textSentence") !== null && document.getElementById("textSentence").value.length >= 1) {
      stringToArr = document.getElementById("textSentence").value.split("")
    }
  } else {
    stringToArr = INPUT_STRING.value.split("")
  }
  if (stringToArr === undefined || stringToArr.length === 0) {
    LANG_STATE_ENG ? renderResult("Empty String") :
      renderResult("Пустая строка");
    return false;
  }
  let temp = [];
  for (var i = 0; i < stringToArr.length; i++) {
    if (stringToArr[i] === " ") {
      if (stringToArr[i - 1] === undefined) {
        temp.shift();
      } else if ((temp !== []) &&
        stringToArr[i - 1] !== undefined &&
        stringToArr[i - 1] !== " ") {
        ARRAY_VALUES.push(temp.join(""))
        temp = [];
      }
    } else {
      temp.push(stringToArr[i]);
    }
  }
  ARRAY_VALUES.push(temp.join(""));
}


/*Stirngs fucntions*/

function getMaxWord(arr) {
  console.clear();
  let resultMaxWords = [];
  let maxLength = arr[0].length;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > maxLength) {
      maxLength = arr[i].length;
      resultMaxWords = [];
      resultMaxWords.push(arr[i]);
    } else if (arr[i].length === maxLength) {
      resultMaxWords.push(arr[i]);
    }
  }
  return resultMaxWords;
}

function letterCounter(str) {
  let lowerCase = 0;
  let upperCase = 0;
  let alphabetLower;
  let aplhabetUpper;
  if (LANG_STATE_ENG) {
    alphabetLower = "abcdefghijklmnopqrstuvwxyz"
    aplhabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  } else {
    alphabetLower = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"
    aplhabetUpper = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ"
  }
  let arLow = alphabetLower.split("");
  let arUpp = aplhabetUpper.split("");
  for (var i = 0; i < str.length; i++) {
    if (arLow.indexOf(str[i]) > -1) {
      lowerCase = lowerCase + 1;
    } else if (arUpp.indexOf(str[i]) > -1) {
      upperCase = upperCase + 1;
    }
  }
  let result;
  if ((str.length > 0) && (lowerCase === 0) && (upperCase === 0)) {
    if (LANG_STATE_ENG) {
      result = 'You must use only English aplhabet';
    } else {
      result = 'Используйте только русский алфавит';
    }
    return result;
  }
  if (LANG_STATE_ENG) {
    result = "\<span class=result\>" + "The amount of English lowerCases: " + lowerCase + " \<\/span\>" +
      "\<br\>" + "\<span class=result\>" + "The amount of English upperCases: " + upperCase + "\<\/span\>";
  } else {
    result = "Количество Русских строчных букв: " + lowerCase +
      "\<br\>" + "\<span class=result\>" + "Количество Русских прописных букв: " + upperCase + "\<\/span\>";
  }
  return result;
}


function getMaxSentence(arr) {
  let positionOfMax = [];
  let maxLength;
  let parsedArr = arr.join("").split("");
  let result = [];
  let temp = [];
  for (var i = 0; i < parsedArr.length; i++) {
    if (parsedArr[i] === ".") {
      result.push(temp.join(""));
      temp = [];
    } else {
      temp.push(parsedArr[i]);
    }
  }
  if (temp.length > 0) {
    result.push(temp.join(""));
    temp = [];
  }
  maxLength = result[0].length;
  for (var i = 0; i < result.length; i++) {
    if (result[i].length > maxLength) {
      maxLength = result[i].length;
      positionOfMax = [];
      positionOfMax[0] = i + 1;
    } else if (result[i].length === maxLength && result.length > 1) {
      positionOfMax.push(i + 1)
    } else if (result.length === 1) {
      positionOfMax = i + 1;
    }
  }
  return LANG_STATE_ENG ? "position of max sentences: " + positionOfMax : "позиция самого длинного предложения (предложений): " + positionOfMax;
}

function checkPandilome(arr) {
  let middleOfArr;
  let parsedArr = arr.join("").split("");
  if (parsedArr.length % 2 === 1) {
    return LANG_STATE_ENG ? "Not pandilome!" : "Не пандилома!"
  }
  middleOfArr = parsedArr.length / 2;
  parsedArr = parsedArr.join("");
  let firstHalf = parsedArr.substring(0, middleOfArr)
  let secondHalf = parsedArr.substring(middleOfArr).reverse();
  if (firstHalf === secondHalf) {
    return LANG_STATE_ENG ? arr + " is pandilome!" : arr + " пандилома!"
  } else {
    return LANG_STATE_ENG ? arr + " is not pandilome!" : arr + " не пандилома!"
  }
}

function getNumbersArr(arr) {
  arr = arr.join("").split("");
  let result = [];
  let temp = [];
  let dotsCounter = 0;
  let minusCounter = 0;
  for (var i = 0; i < arr.length; i++) {
    if (isFinite(arr[i])) {
      temp.push(arr[i])
    } else if (arr[i] === "-" &&
      minusCounter < 1 &&
      arr[i + 1] !== undefined &&
      isFinite(arr[i + 1])) {
      temp.push(arr[i]);
      ++minusCounter;
    } else if (arr[i] === "." &&
      dotsCounter < 1 &&
      arr[i + 1] !== undefined &&
      isFinite(arr[i + 1]) &&
      arr[i - 1] !== undefined &&
      isFinite(arr[i - 1])
    ) {
      temp.push(arr[i]);
      ++dotsCounter;
    } else if (temp.length >= 1) {
      result.push(temp.join(""));
      temp = [];
      dotsCounter = 0;
      minusCounter = 0;
    }
    if (temp.length >= 1 && arr[i + 1] === undefined) {
      result.push(temp.join(""));
      temp = [];
      dotsCounter = 0;
      minusCounter = 0;
    }
  }
  if (result.length < 1) {
    return LANG_STATE_ENG ? "there is no numbers" : "нет чисел"
  }
  return result
}

/*Validator for numbers*/



function validateNumber() {
  let stringToArr = INPUT_STRING.value.split("")
  let temp = [];
  let dotsCounter = 0;
  let minusCounter = 0;

  for (var i = 0; i < stringToArr.length; i++) {
    if (isFinite(stringToArr[i]) ||
      stringToArr[i] === " " ||
      stringToArr[i] === ";" ||
      stringToArr[i] === "," ||
      stringToArr[i] === '.' ||
      stringToArr[i] === '-') {
      if (isFinite(stringToArr[i]) && (stringToArr[i] !== " ")) {
        temp.push(stringToArr[i])
      } else if (stringToArr[i] === '.') {
        if ((isFinite(stringToArr[i - 1]) &&
            (stringToArr[i - 1] !== " ")) &&
          (isFinite(stringToArr[i + 1]) &&
            (stringToArr[i + 1] !== " ")) &&
          (dotsCounter < 1)) {
          ++dotsCounter
          temp.push(stringToArr[i])
        } else {
          RESULT_BOX.style = "color: red";
          if (LANG_STATE_ENG) {
            renderResult("Additional dot at position: " + (i + 1));
          } else {
            renderResult("Лишняя точка на позиции: " + (i + 1));
          }
          dotsCounter = 0;
          return false;
        }

      } else if ((stringToArr[i] === '-')) {
        if ((stringToArr[i - 1] === " " ||
            stringToArr[i - 1] === ";" ||
            stringToArr[i - 1] === "," ||
            stringToArr[i - 1] === undefined) &&
          (minusCounter < 1) &&
          (isFinite(stringToArr[i + 1]) &&
            (stringToArr[i + 1] !== " "))) {
          temp.push(stringToArr[i]);
          ++minusCounter
        } else {
          RESULT_BOX.style = "color: red";
          if (LANG_STATE_ENG) {
            renderResult("Additional minus at position: " + (i + 1));
          } else {
            renderResult("Лишний минус на позиции: " + (i + 1));
          }
          minusCounter = 0;
          return false;
        }
      } else if ((temp.length >= 1) &&

        (stringToArr[i - 1] !== " " &&
          stringToArr[i - 1] !== ";" &&
          stringToArr[i - 1] !== "," &&
          stringToArr[i - 1] !== undefined)) {
        ARRAY_VALUES.push(+temp.join(""))
        temp = [];
        dotsCounter = 0;
        minusCounter = 0;
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
  if ((temp.length >= 1 || ARRAY_VALUES.length >= 1) && temp[0] !== undefined) {
    ARRAY_VALUES.push(+temp.join(""));
  } else {
    renderResult(LANG_STATE_ENG ? "The array is empty or illegal symbol (check for additional space at the end of string)" :
      "Массив пуст или содержит запрещенные символы (проверьте наличие пробела в конце строки)");
    return false;
  }
}

/*Numbers functions*/

function compareNumeric(a, b) {
  return a - b;
}

function compareNumericAbs(array) {
  let position = 1;
  let min_elem = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i - 1] !== undefined && (Math.abs(array[i]) < Math.abs(min_elem))) {
      position = i + 1;
      min_elem = array[i];
    }
  }
  return LANG_STATE_ENG ? "position of minimal element (" + min_elem + ") is: " + position :
    "позиция наименьшего элемента (" + min_elem + "): " + position;
}


function getEven(arr) {
  return arr.filter(function(number) {
    return number % 2 === 0;
  });
}

function getNotEven(arr) {
  return arr.filter(function(number) {
    return Math.abs(number % 2) === 1;
  });
}


function arrSum(array) {
  return array.reduce(function(acc, item) {
    return acc + item;
  });
}

function arrMiddleValue(array) {
  return arrSum(array) / array.length;
};

function lesserThanAverage(array) {
  return array.filter(function(arrItem) {
    return arrItem < (arrMiddleValue(array));
  });
}

function sumAfterMinus(array) {
  let minusCounter = 0;
  let result = [];
  for (var i = 0; i < array.length; i++) {
    if (minusCounter >= 1) {
      result.push(array[i])
    } else if (array[i] < 0) {
      ++minusCounter
    }
  }
  if (result.length < 1) {
    return LANG_STATE_ENG ? renderResult("Result is empty. Probably you didn't use negative numbers or use only one.") :
      renderResult("Результат пуст. Возможно, Вы не использовали отрицательные числа или использовали только одно")
  }
  return result.reduce(function(acc, item) {
    return acc + Math.abs(item);
  });
}

function getClearedArr(array, a, b) {
  if (array.length === 0) {
    return LANG_STATE_ENG ? renderResult("The array is empty") :
      renderResult("Массив пуст")
  } else if (a === "" || a === " " || !(isFinite(a))) {
    return LANG_STATE_ENG ? renderResult("a range is illegal") :
      renderResult("Запрещенный символ а")
  } else if (b === "" || b === " " || !(isFinite(b))) {
    return LANG_STATE_ENG ? renderResult("b range is illegal") :
      renderResult("Запрещенный символ b")
  }
  for (var i = 0; i < array.length; i++) {
    if (array[i] >= a && array[i] <= b) {
      array[i] = 0;
    }
  }
  return array;
}

/*Render function*/

function renderResult(message) {
  if (ARRAY_VALUES[ARRAY_VALUES.length - 1] === '' || (ARRAY_VALUES[ARRAY_VALUES.length - 1]) === undefined) {
    ARRAY_VALUES[0];
  }
  RESULT_BOX.style = "color: black";
  RESULT_BOX.appendChild(RESULT_STRING);
  RESULT_STRING.className = "result";
  RESULT_STRING.innerHTML = message !== undefined ? message : ARRAY_VALUES;
  ARRAY_VALUES = [];
}

/*Switch lang function*/

function handleSwitchLang() {
  if (LANG_STATE_ENG) {
    SWITCH_LANG_BTN.classList.add("switch-on");

    MAIN_HEADER_TEXT.innerText = "Обработчик для строк и чисел";
    INPUT_HEADER_TEXT.innerText = "Введите текст:";
    STRING_MENU_TEXT.innerText = "Активировать строки";
    NUMBERS_MENU_TEXT.innerText = "Активировать числа";
    HANDLE_BTN.innerText = "Обработать";
    RESULT_TEXT.innerText = "Результат:"
    PALLETE_CHECKBOX_TEXT.innerText = "Изменить цветовой стиль";

    LANG_STATE_ENG = false;
  } else {
    SWITCH_LANG_BTN.classList.remove("switch-on");

    MAIN_HEADER_TEXT.innerText = "Handler for strings and numbers";
    INPUT_HEADER_TEXT.innerText = "Enter Text:";
    STRING_MENU_TEXT.innerText = "Activate strings menu";
    NUMBERS_MENU_TEXT.innerText = "Activate numbers menu";
    HANDLE_BTN.innerText = "Handle";
    RESULT_TEXT.innerText = "The result is:"
    PALLETE_CHECKBOX_TEXT.innerText = "Activate pallete bar";

    LANG_STATE_ENG = true;
  }
  if (NUMBERS_MENU.checked) {
    displayNumbersMenu()
  } else if (STRING_MENU.checked) {
    displayStringMenu()
  }
}

/*Change theme function*/

function toogleColor(elem) {
  let flag = elem.id;
  switch (document.getElementById(flag).checked) {
    case flag === "themeBlue":
      PALLETE_BAR.style = "background-color: lightblue"
      BODY_CONTAINER.style = "background-color: aliceblue"
      MAIN_CONTAINER.style = "background-color: lightskyblue"
      HANDLE_BTN.style = "background-color: #81b3d2"
      break;
    case flag === "themeGreen":
      PALLETE_BAR.style = "background-color: #f58669"
      BODY_CONTAINER.style = "background-color: #20B2AA"
      MAIN_CONTAINER.style = "background-color: LIMEGREEN"
      HANDLE_BTN.style = "background-color: #6B8E23"
      break;
    case flag === "themeYellow":
      PALLETE_BAR.style = "background-color: #D2691E"
      BODY_CONTAINER.style = "background-color: #FFE4B5"
      MAIN_CONTAINER.style = "background-color: #FFD700"
      HANDLE_BTN.style = "background-color: #DAA520"
      break;
    case flag === "themeDark":
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
  changeBarHeight()
}