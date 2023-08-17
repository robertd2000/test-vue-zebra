import moment from 'moment'

/**
 * Массив с названиями месяцев
 */
const months = [
  'Января',
  'Февраля',
  'Марта',
  'Апреля',
  'Мая',
  'Июня',
  'Июля',
  'Августа',
  'Сентября',
  'Октября',
  'Ноября',
  'Декабря',
]

/**
 * Функция - преобразует число "date" в дату
 * Возвращает объект, сожержащий дату, месяц и год
 */
export const getDate = (date = 0) => {
  const base = moment(date * 1000)
  const day = base.date()
  const month = base.month()
  const year = base.year()

  return {
    day,
    month: months[month],
    year,
  }
}
