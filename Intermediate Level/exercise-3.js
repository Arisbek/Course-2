var pickle = {color:"color"}
pickle.weight = 2
delete pickle.color
console.log(Object.keys(pickle))
pickle.weight--
console.log(pickle.weight)