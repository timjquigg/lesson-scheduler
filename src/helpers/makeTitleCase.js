export default function makeTitleCase(input) {
  input = input.trim().split(" ");
  const titleCase = input.map((el) => {
    return el[0].toUpperCase() + el.slice(1).toLowerCase();
  });
  return titleCase.join(" ");
}
