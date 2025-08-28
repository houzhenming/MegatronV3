import { useState } from '@lynx-js/react'
import { Dashboard } from './Dashboard'

export function StreamerHub() {
  const [activeTab, setActiveTab] = useState('dashboard')

  return (
    <view style={{ flex: 1 }}>
      <view className="Content" style={{ flex: 1, paddingTop: '60px' }}>
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'stream' && <Stream />}
        {activeTab === 'settings' && <Settings />}
      </view>

      {/* Bottom nav bar */}
      <view style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: '20px',                 // 👈 set at very bottom
        height: '60px',
        alignItems: 'center',
        flexDirection: 'row',      // 👈 arrange children in a row
        borderTopWidth: '1px',
        borderTopColor: 'rgba(255,255,255,0.2)',
        backgroundColor: 'rgba(0,0,0,0.2)',
      }}>
        <view bindtap={() => setActiveTab('dashboard')} style={{ flex: 1 }}>
          <text>Dashboard</text>
        </view>
        <view bindtap={() => setActiveTab('stream')} style={{ flex: 1 }}>
          <text>Stream</text>
        </view>
        <view bindtap={() => setActiveTab('settings')} style={{ flex: 1 }}>
          <text>Settings</text>
        </view>
      </view>
    </view>
  )
}

function Stream()    { return <text>🎥 Stream page</text> }
function Settings()  { return <text>⚙️ Settings page</text> }