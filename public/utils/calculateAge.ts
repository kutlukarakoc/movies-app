export const calculateAge = (birthDate: string): number =>  {
  const today = new Date()

  const [birthYear, birthMonth, birthDay] = birthDate.split('-').map(Number)

  const currentYear = today.getFullYear()
  const currentMonth = today.getMonth() + 1
  const currentDay = today.getDate()

  let age = currentYear - birthYear
  if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
    age--
  }

  return age
}