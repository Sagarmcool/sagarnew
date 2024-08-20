import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch,  } from 'react-router-dom'
import Card from './Card'
import Details from './Details'

const App = () => {
  const [selectedCard, setSelectedCard] = useState(null)
  const cardData = [
    {
      id: 1,
      title: 'Card 1',
      pointers: 'Pointers for Card 1',
      description: 'Description for Card 1',
      path: 'card-1',
    },
    {
      id: 2,
      title: 'Card 2',
      pointers: 'Pointers for Card 2',
      description: 'Description for Card 2',
      path: 'card-2',
    },
    // Add more card data as needed
  ]

  const handleKnowMoreClick = (card) => {
    setSelectedCard(card)
  }

  return (
    <Router>
      <div className='app'>
        <h1>Cards</h1>
        <Switch>
          <Route exact path='/'>
            {cardData.map((card) => (
              <Card
                key={card.id}
                cardData={card}
                onKnowMoreClick={handleKnowMoreClick}
              />
            ))}
          </Route>
          <Route path='/:path'>
            <Details selectedCard={selectedCard} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
