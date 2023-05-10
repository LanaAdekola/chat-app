import React from 'react'
import {ChatEngine} from 'react-chat-engine'
import './App.css'
import ChatFeed from './components/ChatFeed'


const App = () => {
  return (
    <ChatEngine 
        height='100vh'
        projectID='028e6a60-e796-4cf6-a7ab-fca673bacd92'
        userName='adekolaadelana@gmail.com'
        userSecret='Ayomide@1'
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}

export default App