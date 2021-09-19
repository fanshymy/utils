import Vue from 'vue'

let coms = require.context('./', false, /\.vue$/)

coms.keys().map(item=>{
  const onecom = coms(item).default
  console.log(onecom.name)
  Vue.component('Fan' + onecom.name, onecom)
})

//

