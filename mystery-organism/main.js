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

      if (this.dna[randomIndex] === generatedBase) {
        console.log(`New DNA base '${generatedBase}' is identical to current base '${this.dna[randomIndex]}'\n`);
        return this.dna;
      } else {
        console.log(`Original DNA base: ${this.dna[randomIndex]} at index: ${randomIndex}`);
        this.dna[randomIndex] = generatedBase;
        console.log(`Newly inserted DNA base: ${this.dna[randomIndex]} at index: ${randomIndex}\n`);
        return this.dna;
      }
    },

    // Compare two different DNAs and return percentage of identical bases.
    compareDNA (pAequorObj) {
      console.log(`\nDNA ${this.specimenNum} sequence: ${this.dna}`);
      console.log(`DNA ${pAequorObj.specimenNum} sequence: ${pAequorObj.dna}\n`);

      let identicalDNA = 0;     
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequorObj.dna[i]) {
          identicalDNA++;
        }
      };

      console.log(`Number of identical bases: ${identicalDNA}`);
      console.log(`Percentage of identical DNA bases between specimen ${this.specimenNum}`,
                  `and specimen ${pAequorObj.specimenNum}: ${((identicalDNA / this.dna.length) * 100).toFixed(2)}%`);
    },

    // Checks the percentage of P. Aequor surviving.
    willLikelySurvive () {
      const importantBases = this.dna.filter(base => base === 'C' || base ==='G');
      const survivalPercentage = (importantBases.length / this.dna.length).toFixed(2);
      if (survivalPercentage >= .6) {
        console.log(`Greater chance of survival. Percentage of C and G bases is ${survivalPercentage * 100}%`);
      } else {
        console.log(`Lesser chance of survival. Percentage of C and G bases is ${survivalPercentage * 100}%`);
      } 
    },

    // Returns the complement strand of a given DNA strand
    // 'A' to 'T' and 'C' to 'G"
    complementStrand () {
      let strandComplement = [];
      
      this.dna.forEach((element) => {
        switch (element) {
          case 'A':
            strandComplement.push('T');
            break;
          case 'T':
            strandComplement.push('A');
            break;
          case 'C':
            strandComplement.push('G');
            break;
          case 'G':
            strandComplement.push('C');
            break;
        }
      });

      return strandComplement;
    }
  }
};


// // Run test cases

// // Store 30 p. Aequor specimens in array.
// const storedSpecimen = [];
// for (i = 0; i < 30; i++) {
//   storedSpecimen.push(pAequorFactory(i, mockUpStrand()));
// };  

// storedSpecimen.forEach((pAequor) => {
//   // Testing the mutate() method.
//   console.log(`\npAequor BEFORE mutation\nSpecimen number: ${pAequor.specimenNum}\nDNA Strand: ${pAequor.dna}\n`);
//   pAequor.mutate();
//   console.log(`pAequor AFTER mutation\nSpecimen number: ${pAequor.specimenNum}\nDNA Strand: ${pAequor.dna}`);
//   console.log('-'.repeat(50));

//   // Test willLikelySurvive method
//   console.log(`\np. Aequor with specimen number ${pAequor.specimenNum}: `);
//   pAequor.willLikelySurvive();
//   console.log('-'.repeat(50));

//   // Test the complementStrand method.
//   console.log('\nComplement DNA: ');
//   console.log(pAequor.complementStrand().join(','));
//   console.log('\n', '*'.repeat(100), '\n');
// })

// // Test compareDNA method.
// const pAequor1 = pAequorFactory(999, mockUpStrand());
// const pAequor2 = pAequorFactory(1000, mockUpStrand());

// pAequor1.compareDNA(pAequor2);
// console.log('-'.repeat(50));


