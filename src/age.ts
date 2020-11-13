enum AgeUnit {
  Months,
  Years,
}

interface DogAge {
  age: number;
  unit: string;
}

/**
 * Calculate a dog's age in human years.
 * @param {DogAge} dogAge Interface of age and unit.
 * @return {string} openess Boolean.
 */
function getAge(dogAge: DogAge): string {
  let humanAge: string;
  if (dogAge.unit == AgeUnit[0]) {
    humanAge = 'age in months';
  } else {
    humanAge = 'age in years';
  }
  return humanAge;
}

export { getAge };
