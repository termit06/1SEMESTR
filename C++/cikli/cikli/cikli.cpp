﻿// cikli.cpp : Этот файл содержит функцию "main". Здесь начинается и заканчивается выполнение программы.
//

#include <iostream>
#include <cmath>
using namespace std;


int main()
{
    setlocale(LC_ALL, "Russian");
    double y;

    cout << "Использование цикла for" << endl;

    // C использованием цикла for
    for (double x = -1; x <= 1; x += 0.1)
    {
        y = (2, -x) * (x);
        cout << y << endl;
    }

    cout << "--------------------------" << endl << endl;

    cout << "Использование цикла while" << endl;

    // С использованием цикла while
    double a = -1;

    while (a <= 0.1)
    {
        y = (2, -a) * (a);
        a += 0.1;
        cout << y << endl;
    }

    cout << "--------------------------" << endl << endl;

    cout << "Использование цикла do while" << endl;

    // С использованием цикла do while
    a = -1;

    do
    {
        y = (2, -a) * (a);
        a += 0.1;
        cout << y << endl;
    } while (a <= 1);

    system("pause");
}

// Запуск программы: CTRL+F5 или меню "Отладка" > "Запуск без отладки"
// Отладка программы: F5 или меню "Отладка" > "Запустить отладку"

// Советы по началу работы 
//   1. В окне обозревателя решений можно добавлять файлы и управлять ими.
//   2. В окне Team Explorer можно подключиться к системе управления версиями.
//   3. В окне "Выходные данные" можно просматривать выходные данные сборки и другие сообщения.
//   4. В окне "Список ошибок" можно просматривать ошибки.
//   5. Последовательно выберите пункты меню "Проект" > "Добавить новый элемент", чтобы создать файлы кода, или "Проект" > "Добавить существующий элемент", чтобы добавить в проект существующие файлы кода.
//   6. Чтобы снова открыть этот проект позже, выберите пункты меню "Файл" > "Открыть" > "Проект" и выберите SLN-файл.
