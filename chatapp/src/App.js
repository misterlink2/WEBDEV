import React from 'react'
import MessageList from './components/MessageList'
import {default as Chatkit} from '@pusher/chatkit-server'
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import SendMessageForm from './components/SendMessageForm'
import RoomList from './components/RoomList'
import NewRoomForm from './components/NewRoomForm'

import {tokenUrl, instanceLocator} from './config'

class App extends React.Component {
  componentDidMount() {
    const chatManager = new ChatManager({
      instanceLocator,
      userID: 'admin',
      tokenProvider: new TokenProvider({
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
