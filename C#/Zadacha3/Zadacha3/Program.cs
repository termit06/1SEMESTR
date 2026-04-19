class Zadacha3
{
    static void Main(string[] args)
    {
        Console.WriteLine("Ввод вместимость лифта: ");
        int k = int.Parse(Console.ReadLine());
        Console.WriteLine("Ввод количество людей: ");
        int n = int.Parse(Console.ReadLine());
        int[] people = new int[n + 1];
        for (int i = 1; i <= n; i++)
        {
            people[i] = int.Parse(Console.ReadLine());
        }
        int total = 0;
        int time = 0;
        for(int i = n; i >= 1; i--)
        {
            total += people[i];
            int trips = (total + k - 1) / k;
            time += 2 * trips;
        }
        Console.WriteLine("Итоговое Время: " + time);
    }
}