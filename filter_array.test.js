const arrayFilter = require('./task/task_02');

describe(
    'Фультрация массива',
    () => {
        const testCases = [
            {
                in: [0, 1, 2, 3, 4],
                expected: [0, 2, 4],
            },
            {
                in: [true, false, true, false, true, false],
                expected: [true, true, true],
            }
        ];
        testCases.forEach(test => {
            it (
                `Проверяю: ${test.in} | ожидаю: ${test.expected}`,
                () => {
                    const res = arrayFilter(test.in);
                    expect(res).toEqual(test.expected);
                }
            );
        });
    }
);