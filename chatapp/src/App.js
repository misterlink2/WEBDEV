import React from 'react'
import MessageList from './components/MessageList'
import Chatkit from '@pusher/chatkit'
import SendMessageForm from './components/SendMessageForm'
import RoomList from './components/RoomList'
import NewRoomForm from './components/NewRoomForm'

import {tokenURL, instanceLocator} from './config'
class App extends React.Component {
  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userID: 'admin',
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })

    })
    chatManager.connect()
    .then(currentUser => {
      currentUser.subscribeToRoom({
        roomId: 19382493,
        hooks: {
            onNewMessage: message => {
                console.log('message.text: ', message.text);
            }
        }
      })
    })
  }
    render() {
        return (
            <div className="app">
                <RoomList />
                <MessageList />
                <SendMessageForm />
                <NewRoomForm />
            </div>
        );
    }
}

export default App
