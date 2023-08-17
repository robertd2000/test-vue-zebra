export const removeSpecialCharacters = (text) => {
  return text?.replace(/\&nbsp;/g, ' ')
}
