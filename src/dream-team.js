module.exports = function createDreamTeam(arr) {
  let newName = '';    

  if (!Array.isArray(arr)) {
    return false;
  }

  for(let i = 0; i<arr.length; i++){
    if(typeof arr[i] === 'string'){
      newName += arr[i].trim().substr(0,1);
  }
}
  return newName.toLocaleLowerCase().split('').sort().join('').toUpperCase();
}