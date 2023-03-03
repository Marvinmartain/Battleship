//Damage output = Firepower * Accuracy (5*0.7=3.5 pershot)
//Damage inflicted = ufoFirepower * ussShip (4*0.7=2.8 damage inflicted)
// 2.8 points would reduce the hull 20 to 17.2

//Damage Per Turn (DPT) Firepower * Accuracy - ufoFirepower * ussShip (5*0.7 - 4*0.7=0.7)
// ussShip would deal with 0.7 points of damage per turn more than ufoFirepower

// ufoship1 Damage output = Firepower * Accuracy (3*0.7=2.1 point of damage per turn)
// Damage inflicted = hull (6-2=4 damage inflicted)
// DPT of UFO = Damage output -(ussFirepower * ussAccuracy) 2.1-(5*0.7)=-1.4 the uss would have more damage to win the fight


let ussShip = [
    {
        hull: 17.2,
        firepower: 3.5,
        accuracy: 2.8,
      }
];

console.log(ussShip[0].hull); 
console.log(ussShip[0].firepower); 
console.log(ussShip[0].accuracy);


let ufoShip = [
    {
      hull: 4,
      firepower: 2.1,
      accuracy: 1.4,
    }
  ];
  
  console.log(ufoShip[0].hull); 
  console.log(ufoShip[0].firepower); 
  console.log(ufoShip[0].accuracy); 

  let ufoShip2 = [
    {
      hull: 4,
      firepower: 2.1,
      accuracy: 1.4,
    }
  ];
  
  console.log(ufoShip2[0].hull); 
  console.log(ufoShip2[0].firepower); 
  console.log(ufoShip2[0].accuracy); 

  let ufoShip3 = [
    {
      hull: 4,
      firepower: 2.1,
      accuracy: 1.4,
    }
  ];
  
  console.log(ufoShip3[0].hull); 
  console.log(ufoShip3[0].firepower); 
  console.log(ufoShip3[0].accuracy); 

  let ufoShip4 = [
    {
      hull: 4,
      firepower: 2.1,
      accuracy: 1.4,
    }
  ];
  
  console.log(ufoShip4[0].hull); 
  console.log(ufoShip4[0].firepower); 
  console.log(ufoShip4[0].accuracy); 

  let ufoShip5 = [
    {
      hull: 4,
      firepower: 2.1,
      accuracy: 1.4,
    }
  ];
  
  console.log(ufoShip5[0].hull); 
  console.log(ufoShip5[0].firepower); 
  console.log(ufoShip5[0].accuracy); 

  let ufomothership = [
    {
      hull: 5,
      firepower: 4,
      accuracy: 4.4,
    }
  ];
  
  console.log(ufomothership[0].hull); 
  console.log(ufomothership[0].firepower); 
  console.log(ufomothership[0].accuracy); 