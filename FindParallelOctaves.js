function passOrFail(harmony) {
    const arr = harmony.map(el => el.split(' '));
    for(let i = 0; i < 3; i++){
      for(let j = 0; j < 3; j++){
        for(let n = j + 1; n < 4; n++){
          if(arr[i][j] != arr[i + 1][j] && arr[i][j] == arr[i][n] && arr[i + 1][j] == arr[i + 1][n]){
            return "Fail"
          }
        }
      }
    }
    return "Pass"
  
}