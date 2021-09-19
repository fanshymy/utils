const icons = require.context('./', false, /\.svg$/)
icons.keys().map(item=>{
  icons(item)
})
