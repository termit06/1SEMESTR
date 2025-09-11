using System;  // Импорт базового пространства имен .NET

class Program
{
    static void Main()
    {
        // Установка русской локализации для корректного ввода/вывода чисел с запятой
        System.Globalization.CultureInfo.CurrentCulture = new System.Globalization.CultureInfo("ru-RU");

        int counterElement = 0;        // Счетчик для размера массива
        double elementArray = 0;       // Временная переменная для ввода элементов
        double checkElement = 0;       // Переменная для сравнения элементов
        int counterResultArray = 1;    // Счетчик для результирующего массива (начинается с 1)
        int j = 1;                     // Вспомогательный индекс для заполнения результирующего массива

        // Запрос размера последовательности у пользователя
        Console.Write("Введите размер входящей последовательности: ");
        counterElement = Convert.ToInt32(Console.ReadLine());  // Чтение и преобразование ввода в целое число

        // Создание основного массива заданного размера
        double[] array = new double[counterElement];

        // Цикл для заполнения массива значениями от пользователя
        for (int i = 0; i < counterElement; i++)
        {
            Console.Write($"Введите элемент {i + 1}: ");  // Приглашение для ввода элемента
            elementArray = Convert.ToDouble(Console.ReadLine());  // Чтение и преобразование в double
            array[i] = elementArray;  // Сохранение элемента в массив
        }

        // Первый проход: подсчет количества элементов для результирующего массива
        checkElement = array[0];  // Инициализация первым элементом массива
        for (int i = 1; i < counterElement; i++)
        {
            if (checkElement < array[i])  // Проверка на возрастание
            {
                counterResultArray++;     // Увеличение счетчика результирующего массива
                checkElement = array[i];  // Обновление проверочного элемента
            }
        }

        // Создание результирующего массива нужного размера
        double[] resultArray = new double[counterResultArray];

        // Инициализация для второго прохода
        checkElement = array[0];  // Снова начинаем с первого элемента
        resultArray[0] = array[0];  // Первый элемент всегда попадает в результат
        j = 1;  // Сброс индекса для заполнения результирующего массива

        // Второй проход: заполнение результирующего массива возрастающими элементами
        for (int i = 1; i < counterElement; i++)
        {
            if (checkElement < array[i])  // Проверка на возрастание
            {
                resultArray[j] = array[i];  // Добавление элемента в результат
                j++;                        // Увеличение индекса результата
                checkElement = array[i];    // Обновление проверочного элемента
            }
        }

        // Вывод результирующего массива
        for (int i = 0; i < counterResultArray; i++)
        {
            Console.Write(resultArray[i] + " ");  // Вывод каждого элемента с пробелом
        }
        Console.WriteLine();  // Переход на новую строку после вывода
    }
}