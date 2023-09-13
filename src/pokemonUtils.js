export const getHighResImageUrl = (id) => {
  const formattedId = String(id).padStart(3, "0");
  console.log(formattedId);
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formattedId}.png`;
};

export function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
