const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // Проверяем, что аргумент является массивом
  if (!Array.isArray(members)) {
    return false;
  }
  
  // Отбираем только строки и первую букву каждой строки
  const firstLetters = members
    .filter((member) => typeof member === 'string')
    .map((member) => member.trim()[0].toUpperCase());
    
  // Сортируем первые буквы по алфавиту
  firstLetters.sort();
  
  // Объединяем первые буквы в строку
  return firstLetters.join('');
}

module.exports = {
  createDreamTeam
};
