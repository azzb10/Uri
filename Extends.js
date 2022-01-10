import Set from Class.js;

class MySet extends Set{
  constructor(arr){
    super(arr)
    this.OriginalArray = arr
  }

  add(val){
    super.add(val)
    console.log(`added ${val} to the set`)
  }

  toArray(){
    return Array.from(this)
  }

  reset(){
    return new MySet(this.OriginalArray)
  }
}
