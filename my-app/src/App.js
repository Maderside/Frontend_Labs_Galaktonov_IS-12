import React from "react"

import Header from "./components/Header"
import Content from "./components/Content"
import ImageContainer from "./components/ImageContainer"
import GoodsCard from "./components/GoodsCard"

function App() {
    return (
    <div>
        <Header>Галактіонов Максим Олександрович</Header>
        <Content />

        
        <br/>
        <ImageContainer>
            
        </ImageContainer>
        <Header>Goods Section</Header>
        <GoodsCard src='https://uxwing.com/wp-content/themes/uxwing/download/fruits-vegetables/fruit-icon.png' price='39'>Apple</GoodsCard>
        <GoodsCard src='https://uxwing.com/wp-content/themes/uxwing/download/agriculture-farming-gardening/grain-wheat-color-icon.png' price='35'>Wheat</GoodsCard>
        <GoodsCard src='https://uxwing.com/wp-content/themes/uxwing/download/food-and-drinks/glass-drinks-color-icon.png' price='132'>Drinks</GoodsCard>

        <GoodsCard src='https://uxwing.com/wp-content/themes/uxwing/download/fruits-vegetables/blueberry-icon.png' price='42'>Blueberry</GoodsCard>
        <GoodsCard src='https://uxwing.com/wp-content/themes/uxwing/download/fruits-vegetables/peach-fruit-icon.png' price='24'>Peach</GoodsCard>
        <GoodsCard src='https://uxwing.com/wp-content/themes/uxwing/download/food-and-drinks/butter-piece-color-icon.png' price='22'>Butter</GoodsCard>
    </div>
    )
}
export default App;

