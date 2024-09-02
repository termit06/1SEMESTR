using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Xml;

namespace WindowsFormsApp8
{
    public partial class Form1 : Form
    // Создание массива исходных данных:
    {
        // Входные и выходные данные
        public double[] b;
        int n;
        double sum = 0;
        double sr;
        
        // Название проэкта
        public Form1()
        {
            //Метод, который инициализирует все компоненты, расположенные на форме: поля, кнопки, меню, переключатели.
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            Input(textBox1);
            sum = Output(textBox2, sum);
            sr = dead (textBox3, sr);
            textBox3.Text = sr.ToString();
            gun(listBox2, b);
            
            textBox2.Text = sum.ToString();


        }
        // Метод заполнения массива исходными данными
        // Возвращается массив a типа double
        public double[] Input(TextBox TxBx)
        {
            // Определение количества строк в textbox (TxBx)
            this.n = TxBx.Lines.Count();
            // Объявление нового одномерного массива a []
            this.b = new double[n];
            // for выполняет текст, пока указанное логическое выражение вычисляется true
            // i – просто популярное название переменной. ++ – оператор инкремента.
            for (int i = 0; i < b.Length; i++)
                this.b[i] = double.Parse(TxBx.Lines[i]);
            return this.b;
        }
        // Метод вывода массива с результатом
        public double Output(TextBox TxBx, double sum)
        {
            TxBx.Lines.Count();

            for (int i = 0; i < b.Length; i++)
            {
                if (b[i] < 0)
                {
                    sum += b[i];
                }


            }
            listBox1.Items.Add(sum);

            return sum;


        }
        public void gun(ListBox LB, double[] array)
        {
           
            LB.Items.Clear();
            for (int i = 0; i < array.Length; i++)
                LB.Items.Add(array[i]);
        }
        // Метод, перебирающий элементы массива и заменяющий их, если они меньше среднего значения:
        public double dead(TextBox TxBx, double sr)
        {
            TxBx.Lines.Count();
            sr = sum / b.Length;
            for (int i = 0; i < b.Length; i++)
            {
                if (b[i] < sr)
                {
                    b[i] = sr;
                }


            }
            return sr;
        }

        private void listBox1_SelectedIndexChanged(object sender, EventArgs e)
        {

        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void textBox2_TextChanged(object sender, EventArgs e)
        {

        }

        private void textBox3_TextChanged(object sender, EventArgs e)
        {

        }

        private void listBox2_SelectedIndexChanged(object sender, EventArgs e)
        {

        }
    }
}
