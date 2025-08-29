import { useCallback, useEffect, useState } from '@lynx-js/react'

import './App.css'
import arrow from './assets/arrow.png'
import lynxLogo from './assets/lynx-logo.png'
import reactLynxLogo from './assets/react-logo.png'
import { StreamerHub } from './pages/StreamerHub'

export function App(props) {
  const [showHub, setShowHub] = useState(false)

  useEffect(() => {
    console.info('Hello, ReactLynx')
  }, [])
  props.onRender?.()

  const onTap = useCallback(() => {
    setShowHub(true)
  }, [])

  if (showHub) {
    return <StreamerHub />
  }

  return (
    <view>
      <view className='Background' />
      <view className='App'>
        <view className='Banner'>
          <view className='Logo' bindtap={onTap}>
            <image src={lynxLogo} className='Logo--lynx' />
          </view>
          <text className='Title'>React</text>
          <text className='Subtitle'>on Lynx</text>
        </view>
        <view className='Content'>
          <image src={arrow} className='Arrow' />
          <text className='Description'>Tap the logo and have fun!</text>
          <text className='Hint'>
            Edit <text style={{ fontStyle: 'italic', color: 'rgba(255, 255, 255, 0.85)' }}>
            {' src/App.jsx '}
          </text>
            to see updates!
          </text>
        </view>
        <view style={{ flex: 1 }} />
      </view>
    </view>
  )
}