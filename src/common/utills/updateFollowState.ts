import {Expectation} from "features/2-main/content/4-users/model/usersReducers";

export const namesStatusFollowed = {del: 'Unfriend', add: 'add Friend'}

/**
 * Функция для управления подписками на пользователей.
 *
 * @param {string} userId - Идентификатор пользователя.
 * @param {Object} name - Объект с двумя строками, представляющими действия "удалить" и "добавить".
 * @param {Array} expectation - Массив ожидаемых значений (Expectation) или строк.
 * @param {boolean} followed - Булево значение, указывающее, следует ли пользователь.
 * @param {function} fnUnFollow - Функция для отмены подписки на пользователя.
 * @param {function} fnFollow - Функция для подписки на пользователя.
 *
 * @returns {Object} Объект с результатами: disabled (булево значение, указывающее, отключено ли действие), addAndRemove (функция для добавления или удаления подписки), names (имя действия).
 */
export const updateFollowState = (
  userId: string | undefined,
  name: { del: string, add: string },
  expectation: (Expectation | string)[],
  followed: boolean | undefined,
  fnUnFollow: (id: string) => void,
  fnFollow: (id: string) => void,
): { disabled: boolean, addAndRemove: (id: string) => void, names: string } => {

  const disabled = expectation.some(id => id === userId);
  const addAndRemove = followed ? fnUnFollow : fnFollow;
  const names = followed ? name.del : name.add;

  return { disabled, addAndRemove, names };
};
