// Шифрувальна мапа
const cipherMap = {
    'а': '*',
    'б': '*_',
    'в': '**',
    'г': '*-',
    'д': '_-',
    'е': '-_',
    'є': '__-',
    'ж': '--_',
    'з': '*__-',
    'и': '***_',
    'і': '***',
    'ї': '**-',
    'й': '***-',
    'к': '/',
    'л': '//_',
    'м': '*/',
    'н': '*//',
    'о': '///*',
    'п': '*/*',
    'р': '/**',
    'с': '--/',
    'т': '//-',
    'у': '--/*',
    'ф': '//**/',
    'х': '**/_-',
    'ц': '//*/-',
    'ч': '***///*',
    'ш': '_',
    'щ': '-',
    'ь': '///_-*',
    'ю': '*_/*-',
    'я': '//*//_',
    ' ': '+' // Пробіл тепер шифрується як +
  };
  
  // Зворотна мапа
  const decipherMap = Object.fromEntries(
    Object.entries(cipherMap).map(([key, value]) => [value, key])
  );
  
  /**
   * Функція для шифрування тексту
   */
  function encryptText(text) {
    return text
      .split('')
      .map(char => cipherMap[char] || char)
      .join(' ');
  }
  
  /**
   * Функція для розшифрування тексту
   */
  function decryptText(text) {
    return text
      .split(' ') // Розділяємо за пробілом
      .map(symbol => (symbol === '+' ? ' ' : decipherMap[symbol] || symbol)) // Пробіл обробляється як окремий випадок
      .join(''); // Об'єднуємо результат
  }
  
  /**
   * Обробка шифрування
   */
  function handleEncrypt() {
    const passwordInput = document.getElementById('password').value;
    const inputText = document.getElementById('inputText').value;
    const output = document.getElementById('output');
  
    if (passwordInput === 'venomosok') {
      const encryptedText = encryptText(inputText);
      output.textContent = encryptedText || 'Текст не може бути зашифрований!';
    } else {
      output.textContent = 'Невірний пароль!';
    }
  }
  
  /**
   * Обробка розшифрування
   */
  function handleDecrypt() {
    const passwordInput = document.getElementById('password').value;
    const inputText = document.getElementById('inputText').value;
    const output = document.getElementById('output');
  
    if (passwordInput === 'venomosok') {
      const decryptedText = decryptText(inputText);
      output.textContent = decryptedText || 'Текст не може бути розшифрований!';
    } else {
      output.textContent = 'Невірний пароль!';
    }
  }
  