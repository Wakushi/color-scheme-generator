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

  const colorElements = userColors.map((color) => {
    return (
      <div className="color-item">
        <div key={color.hex.value} style={ {backgroundColor : color.hex.value} } className="unique-color"></div>
        <h3>{color.hex.value}</h3>
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

