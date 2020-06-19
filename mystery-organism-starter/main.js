// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Factory function to create objects.
const pAequorFactory = (number, dnaBases) => {
  return {
    specimenNum: number,  // the specimen number with no two orgnasims having same number
    dna: dnaBases,        // array of 15 dna bases 

    // Mutates a random base in the dna strand to a new random base
    mutate () {
      const randomIndex = Math.floor(Math.random() * this.dna.length);
      const generatedBase = returnRandBase();

      if (this.dna[randomIndex] === generatedBase) {``
        console.log(`New DNA base '${generatedBase}' is identical to current base '${this.dna[randomIndex]}'`);
        return this.dna;
      } else {
        console.log(`----------------\nOriginal DNA base: ${this.dna[randomIndex]} at index: ${randomIndex}`);
        this.dna[randomIndex] = generatedBase;
        console.log(`Newly inserted DNA base: ${this.dna[randomIndex]} at index: ${randomIndex}\n----------------\n`);
        return this.dna;
      }
    }
  }
};

let test = pAequorFactory(1, mockUpStrand());
// console.log(test)
console.log(test.dna)
test.mutate()
console.log(test.dna);








