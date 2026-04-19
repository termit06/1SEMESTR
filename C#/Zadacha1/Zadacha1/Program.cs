namespace Zadacha1
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] a = {8, 4, 2, 1, 5, 6,  9, 3, 7 };
            int line = a.Length;
            int max = a[0];
            int min = a[0];
            for (int i = 0; i < line; i++) { 
            if(max < a[i])
                {
                    max = a[i];
                }
            }
            for (int i = 0; i < line; i++) {
                if (min > a[i]) { 
                min = a[i];
                }
            }
            Console.WriteLine("Максимальное: " + max);
            Console.WriteLine("Минимальное: " + min);
            for (int i = 0; i < line; i++) { 
            Console.WriteLine(a[i]);
            }
        }
    }
}