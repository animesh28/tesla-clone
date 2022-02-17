import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section
          title="Model S"
          description="Order online for touchless delivery!"
          backgroundImg="model-s.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />

        <Section
          title="Model Y"
          description="Order online for touchless delivery!"
          backgroundImg="model-y.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />

        <Section
          title="Model 3"
          description="Order online for touchless delivery!"
          backgroundImg="model-3.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />

        <Section
          title="Model X"
          description="Order online for touchless delivery!"
          backgroundImg="model-x.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />

        <Section
          title="Lowest Solar Panels in America"
          description="Cashback Guarantee!"
          backgroundImg="solar-panel.jpg"
          leftBtnText="Order Now"
          rightBtnText="Learn More"
        />

        <Section
          title="Solar for New Roofs"
          description="Solar Roofs Costs Less Than a New Roof Plus Solar Panels!"
          backgroundImg="solar-roof.jpg"
          leftBtnText="Order Now"
          rightBtnText="Learn More"
        />

        <Section
          title="Accessories"
          description="All you need for you!"
          backgroundImg="accessories.jpg"
          leftBtnText="Order Now"
        />
    </Container>
  )
}

export default Home


const Container = styled.div`
    height: 100vh;
`