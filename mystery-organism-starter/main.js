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
        console.log(`New DNA base '${generatedBase}' is identical to current base '${this.dna[randomIndex]}\n'`);
        return this.dna;
      } else {
        console.log(`Original DNA base: ${this.dna[randomIndex]} at index: ${randomIndex}`);
        this.dna[randomIndex] = generatedBase;
        console.log(`Newly inserted DNA base: ${this.dna[randomIndex]} at index: ${randomIndex}\n----------------\n`);
        return this.dna;
      }
    },

    // Compare two different DNAs and return percentage of identical bases.
    compareDNA (pAequorObj) {
      console.log(`\nDNA ${this.specimenNum} strand: ${this.dna}`);
      console.log(`DNA ${pAequorObj.specimenNum} strand: ${pAequorObj.dna}\n`);

      if (this.dna === pAequorObj.dna) {
        console.log('Both specimens have identical DNA.')
      };

      let identicalDNA = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequorObj.dna[i]) {
          identicalDNA++;
        }
      };

      console.log(`Number of identical bases: ${identicalDNA}`)
      console.log(`Percentage of identical DNA bases between specimen ${this.specimenNum} and specimen ${pAequorObj.specimenNum}: ${((identicalDNA / this.dna.length) * 100).toFixed(2)}%`);
    }
  }
};

// let test = pAequorFactory(1, mockUpStrand());
// // console.log(test)
// console.log(test.dna)
// test.mutate()
// console.log(test.dna);

// const pAequor = pAequorFactory(1000, mockUpStrand());
// console.log(`pAequor BEFORE mutation\nSpecimen: ${pAequor.specimenNum}\nDNA Strand: ${pAequor.dna}\n`);
// pAequor.mutate();
// console.log(`pAequor AFTER mutation\nSpecimen: ${pAequor.specimenNum}\nDNA Strand: ${pAequor.dna}`);

// const pAequor1 = pAequorFactory(999, mockUpStrand());
// const pAequor2 = pAequorFactory(1000, mockUpStrand());

// pAequor1.compareDNA(pAequor2);








