import React from "react";
import Header from "./components/Header";

export default function App() {

  const [hex, setHex] = React.useState('111111')
  const [colorMode, setColorMode] = React.useState('')
  const [userColors, setUserColors] = React.useState([])

  function handleColor(e) {
    setHex(e.target.value.slice(1,7)) //hex without #
  }

  function handleMode(e) {
    setColorMode(e.target.value)
  }

  function getData() {
    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${colorMode}&count=5`)
    .then(r => r.json())
    .then(data => {
      let newColorArray = []
      data.colors.forEach((color) => {
        newColorArray.push(color)
      })
      setUserColors(newColorArray)
    })
  }

  
  function handleCopyHex(e) {
    navigator.clipboard.writeText(e.target.id)
    document.getElementById('clipboard').style.transform = 'translateY(20%)'
    setTimeout(()=>{
      document.getElementById('clipboard').style.transform = 'translateY(-150%)'
    },2000)
  }

  const colorElements = userColors.map((color) => {
    return (
      <div id={color.hex.value} onClick={handleCopyHex} className="color-item">
        <div id={color.hex.value} key={color.hex.value} style={ {backgroundColor : color.hex.value} } className="unique-color"></div>
        <h3 id={color.hex.value}>{color.hex.value}</h3>
      </div>
      
    )
  })

  React.useEffect(()=>{
    getData()
  },[])

  return (
      <>
        <Header  
          handleColor={handleColor}
          handleMode={handleMode}
          getData={getData}
        />
        <div className="color-display">
          {colorElements}
        </div>
      </>
    

  );
}

