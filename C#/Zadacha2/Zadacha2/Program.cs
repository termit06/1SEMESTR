namespace Zadacha2
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Стандартный ввод: ");
            int N = int.Parse(Console.ReadLine());
            int[] a = new int[N];
            for (int i = 0; i < N; i++) { 
                a[i] = int.Parse(Console.ReadLine());
            }
            int[] otvet = new int[N];
            for (int i = 0; i < N; i++)
            {
                int k = a[i] - 1;
                otvet[k] = N - i;
            }
            Console.WriteLine("Стандартный вывод: ");
            Console.WriteLine(string.Join(" ", otvet));
        }
    }
}
