//
export const translate = (sequence = '') => {
  const sequenceToCodons = (sequence, codonSize = 3) => {
    const chunked = [];
    let index = 0;
    while (index < sequence.length) {
      chunked.push(sequence.slice(index, codonSize + index));
      index += codonSize;
    }

    const codons = chunked.map(item => item.join(''));
    return codons;
  };

  const codonsToProteins = (codons) => {
    const mapCodonToProtein = {
      AUG: 'Methionine',
      UUU: 'Phenylalanine',
      UUC: 'Phenylalanine',
      UUA: 'Leucine',
      UUG: 'Leucine',
      UCU: 'Serine',
      UCC: 'Serine',
      UCA: 'Serine',
      UCG: 'Serine',
      UAU: 'Tyrosine',
      UAC: 'Tyrosine',
      UGU: 'Cysteine',
      UGC: 'Cysteine',
      UGG: 'Tryptophan',
      UAA: 'STOP',
      UAG: 'STOP',
      UGA: 'STOP',
    };

    let terminate = false;
    let i = 0;
    const proteins = [];

    while (terminate === false && i < codons.length) {
      const codon = codons[i];
      const protein = mapCodonToProtein[codon];

      if (protein === undefined) {
        throw new Error('Invalid codon');
      } else if (protein === 'STOP') {
        terminate = true;
      } else {
        proteins.push(protein);
      }
      i++;
    }

    return proteins;
  };

  return codonsToProteins(sequenceToCodons(sequence.split('')));
};
