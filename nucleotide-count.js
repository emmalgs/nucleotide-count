export function countNucleotides(strand) {
  const nucleotideCount = {
    'A': 0,
    'C': 0,
    'G': 0,
    'T': 0
  }
  strand.split("").forEach(nucelotide => {
    nucleotideCount[nucelotide] += 1;
  });

  const {A, C, G, T} = nucleotideCount;
  return `${A} ${C} ${G} ${T}`
}
