const reverseString = require('./task/task_01');

describe(
    "Проверка функции reverseString:",
    () => {
        const testCase = [
            {
                inString: 'hello',
                expected: 'olleh',
            },
            {
                inString: 'blin ha',
                expected: 'ah nilb',
            },
            {
                inString: 'Привет как дела?',
                expected: '?алед как тевирП'
            }
        ];
        testCase.forEach(test => {
            it (
                `Входящая строка: ${test.inString} ожидаю: ${test.expected}`,
                () => {
                    const res = reverseString(test.inString);
                    expect(res).toBe(test.expected)
                }
            )
        })
    });