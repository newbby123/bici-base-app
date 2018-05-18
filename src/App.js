/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { ActionSheetProvider } from '@expo/react-native-action-sheet'
import store, { persistor } from './store'
import Bootstrap from './Bootstrap'
import Loading from './components/common/Loading'
import { Processing, Notice } from './components/common'


type Props = {};
export default class App extends Component<Props> {
  render () {
    return (
      <Provider store={store}>
        <ActionSheetProvider>
          <PersistGate persistor={persistor}>
            <Bootstrap />
            <Loading />
            <Processing />
            <Notice />
          </PersistGate>
        </ActionSheetProvider>
      </Provider>
    )
  }
}
