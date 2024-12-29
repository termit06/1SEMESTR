using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
// подключение элементов формы
using System.Windows.Forms;

namespace DoubleM
{
    public class Operations
    {

        private double[,] a;
        private double[,] x;
        private int n;
        private int m;

        // количество строк и столбцов n*m
        public int N
        {
            get { return n; }
            set { n = value; }
        }
        // количество строк и столбцов (private)
        
        public int M
        {
            get { return m; }
            set { m = value; }
        }
        
        public double[,] A
        {
            get { return a; }
            set { a = value; }
        }
        
        public double[,] X
        {
            get { return x; }
            set { x = value; }
        }

        private void SwitchRows(int[,] array)
        {
            var iMax = array.GetLength(0);
            var jMax = array.GetLength(1);
            for (int i = 0; i < iMax; i = i + 2)
            {
                for (int j = 0; j < jMax; j++)
                {
                    var a = array[i, j];
                    array[i, j] = array[i + 1, j];
                    array[i + 1, j] = a;
                }
            }
        }
        private void Replays()
        {
            x = new double[n, m];

            for(int i = 0; i < N; i++)
            {
                for (int j = 0; j < M; j++)
                {
                    x[i, m - 1 - j] = a[i, j];
                }
            }

        }

        protected void PlayuReplays()
        {
            Replays();
        }
    }

    public class Test : Operations
    {
        Random rand = new Random();

        public double[,] InpMatrix(ListBox lb)
        {
            double[,] array = new double[N, M];
            for (int i = 0; i < N; i++)
            {
                for (int j = 0; j < M; j++)
                {
                    array[i, j] = Math.Round(rand.NextDouble() * 100, 2);
                }
            }

            OutMatrix(array, lb);

            return array;

        }
        // Метод вывода двумерной матрицы
        public void OutMatrix(double[,] array, ListBox lb)
        {
            lb.Items.Clear();
            for (int i = 0; i < N; i++)
            {
                string s = "";
                for (int j = 0; j < M; j++)
                {
                    s += array[i, j].ToString() + "  ";
                }
                lb.Items.Add(s);
            }

        }

        public void ChildrenPlayReplays()
        {
            PlayuReplays();
        }
    }
}