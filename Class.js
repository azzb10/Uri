class Set{
  constructor(arr) {
    this.arr = arr;
  }

  add(val){
    if(!this.has(val)){
      this.arr.push(val)
    }
  }

  delete(val){
    this.arr = this.arr.filter(x => x !== val)
  }

  has(val){
    return this.arr.includes(val)
  }

  get size(){
    return this.arr.length
  }
}

const s = new Set([1, 2, 3, 4, 5])

s.add(1)
s.add(1)
s.add(1)
console.log('s deve ter 5 valores e tem: ' + s.size)
console.log('s tem que ter o valor 5 nele: ' + s.has(5))

s.add(6)
console.log('s deve ter o número 6: ' + s.has(6))
console.log('s deve ter 6 valores e tem: ' + s.size)

s.delete(6)
console.log('s não tem que ter o número 6 mais: ' + !s.has(6))
console.log('s não tem que ter 5 valores e tem: ' + s.size)

export default Set
