import { useState } from "react";


const LeapYearChecker: React.FC = () => {
  const [year, setYear] = useState<number | ''>('');
  const [isLeapYear, setIsLeapYear] = useState<boolean | null>(null);
  const [error, setError] = useState<string>('');

  const checkLeapYear = () => {
      setError('');
      if (year === '' || year < 0) {
          setError('Пожалуйста, введите положительный год.');
          setIsLeapYear(null);
          return;
      }

      const yearNumber = Number(year);
      const leap = (yearNumber % 4 === 0 && yearNumber % 100 !== 0) || (yearNumber % 400 === 0);
      setIsLeapYear(leap);
  };

  return (
      <div>
          <h1>Проверка високосного года</h1>
          <input
              type="number"
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
              placeholder="Введите год"
          />
          <button onClick={checkLeapYear}>Проверить</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {isLeapYear !== null && (
              <p>
                  {isLeapYear ? 'Год является високосным.' : 'Год не является високосным.'}
              </p>
          )}
      </div>
  );
};

export default LeapYearChecker;