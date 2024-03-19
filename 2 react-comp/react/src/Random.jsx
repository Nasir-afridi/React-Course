function Random() {
  let number = Math.random() * 100

  return <h1 style={{'background-color' : '#443355', 'color':'white'}}>
    Random Number is : {Math.round(number)}
  </h1>
}

export default Random;