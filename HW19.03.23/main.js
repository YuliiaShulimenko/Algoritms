 1 уровень сложности: 1) Проверьте, равны ли два массива или нет
Учитывая два массива, arr1 и arr2 одинаковой длины N , задача состоит в том, чтобы определить, равны ли данные массивы или нет. 

Два массива называются равными, если:
оба они содержат один и тот же набор элементов, 
расположение (или перестановки) элементов может/не может быть одинаковым.
Если есть повторения, то количество повторяющихся элементов также должно быть одинаковым, чтобы два массива были равны.


Ввод: arr1[] = {1, 2, 5, 4, 0}, arr2[] = {2, 4, 5, 0, 1}
Вывод: Да


Временная сложность - O(n)

// Функция для сравнения двух массивов
const compareArrays = (arr1, arr2) => {
// Сортировка массивов
let arr1Sorted = arr1.sort((a, b) => a - b);
let arr2Sorted = arr2.sort((a, b) => a - b);
// Сравнение элементов массива
if (arr1Sorted.length !== arr2Sorted.length) {
return false;
} 
for (let i = 0; i < arr1Sorted.length; i++) {
if (arr1Sorted[i] !== arr2Sorted[i]) {
return false;
}
}
return true;
}

// Вывод результата сравнения
console.log(compareArrays(arr1, arr2)); // true






2)
Сгруппируйте слова с одинаковым набором символов


Дан список слов со строчными буквами. Реализуйте функцию поиска всех слов с одинаковым уникальным набором символов. 


Input: String words[] = {"student", "students", "dog", "god", "cat", "act", "flow", "wolf"};
Output : 
student, students, 
cat, act, 
dog, god, 
flow, wolf, 


Идея состоит в том, чтобы использовать хеширование. Генерируем ключ для всех слов. Ключ содержит все уникальные символы (размер ключа не более 26 для строчных букв). Мы храним индексы слов как значения для ключа. После того, как мы заполнили все ключи и значения в хеш-таблице, мы можем распечатать результат, пройдя по таблице.




// Функция для поиска слов с одинаковым набором символов 
function FindSameSetWords(words) 
{ 
    // Объявляем хеш-таблицу 
    let hashTable = {}; 
  
    // Проходимся по каждому слову из массива words 
    words.forEach(function(word) { 
        // Создаем переменную для хранения уникального ключа 
        let dictionaryKey = ''; 
  
        // получаем уникальные символы из слова 
        let usedLetters = new Set(word); 
  
        // Составляем строку из символов 
        usedLetters.forEach(function(letter) { 
            dictionaryKey += letter; 
        }); 
  
        // Проверяем, существует ли уже ключ в хеш-таблице 
        if (hashTable[dictionaryKey] == undefined) { 
            // Если не существует, то создаем первый вход 
            hashTable[dictionaryKey] = [words.indexOf(word)]; 
        } else { 
            // Если существует, то добавляем наше слово в массив элементов 
            hashTable[dictionaryKey].push(words.indexOf(word)); 
        } 
  
    }); 
  
    // Возвращаем хеш-таблицу 
    return hashTable; 
} 
  
// Функция для печати результата 
function PrintResult(hashTable) { 
    // Проходим по каждому ключу в хеш-таблице 
    for (let dictKey in hashTable) { 
        // Для каждого ключа выводим последовательность слов, используя их индексы 
        for (let index of hashTable[dictKey]) 
            document.write(words[index] + ' '); 
  
        document.write('<br>'); 
    } 
} 
  
// Массив слов 
let words = ["student", "students", "dog", "god", "cat", "act", 
            "flow", "wolf"]; 
  
// Получаем хеш-таблицу с результатами 
let result = FindSameSetWords(words); 
  
// Выводим результат 
PrintResult(result);