﻿// vetvlenie.cpp : Этот файл содержит функцию "main". Здесь начинается и заканчивается выполнение программы.
//

#include <iostream> 
#include <cmath> 
using namespace std;

int main()
{
    //std::cout << "Hello World!\n";
    
    setlocale(LC_ALL, "Russian");

    int x;
    int c;
    int y;
    int z;

    int h;
    
    cout << "Введите x\n";
    cin >> x;
    cout << x << endl;

    cout << "Введите c\n";
    cin >> c;
    cout << c << endl;

    cout << "Введите y\n";
    cin >> y;
    cout << y << endl;

    cout << "Введите z\n";
    cin >> z;
    cout << z << endl;

    if (y * z > 0 && x > 0) {
        double minEL = y;
        if (minEL > z) {
            minEL = z;
        }
        int maxEL = c;

        if (maxEL < sqrt(x)) {
            maxEL = sqrt(x);
        }
        if (maxEL < minEL) {
            maxEL < minEL;
        }

        h = minEL;
    }
    else if (y * z < 0 && x > 0) {
        int minEL = pow(y, 2);
        if (minEL > x) {
            minEL = x;
        }
        h = minEL;
    }
    else {
        h = 1;
    }

    cout << "Результат вычеслений =";
    cout << h << endl;

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
