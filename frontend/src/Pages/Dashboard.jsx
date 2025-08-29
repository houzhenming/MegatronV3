export function Dashboard() {
  return (
    <view
      className="Dashboard"
      style={{
        flex: 1,
        // scrollable container
        overflowY: 'auto',
        padding: '16px',
        paddingBottom: '88px', // keep above the BottomNav
      }}
    >
      {/* === Stats Bar (Top) === */}
      <view
        className="Card Card--stats"
        style={{
          backgroundColor: 'rgba(255,255,255,0.08)',
          borderRadius: '12px',
          padding: '16px',            // 60px was huge; 16px is cleaner
          marginBottom: '16px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <view style={{ display: 'flex', flex: 1 }}>
          <text style={{ opacity: 0.8, fontSize: '12px', color: '#fff' }}>Viewers</text>
          <text style={{ fontSize: '18px', color: '#fff' }}>1,284</text>
        </view>

        <view style={{ display: 'flex', flex: 1, alignItems: 'center' }}>
          <text style={{ opacity: 0.8, fontSize: '12px', color: '#fff' }}>Followers</text>
          <text style={{ fontSize: '18px', color: '#fff' }}>23,910</text>
        </view>

        <view style={{ display: 'flex', flex: 1, alignItems: 'flex-end' }}>
          <text style={{ opacity: 0.8, fontSize: '12px', color: '#fff' }}>Subs</text>
          <text style={{ fontSize: '18px', color: '#fff' }}>842</text>
        </view>
      </view>

      {/* === Graph Section (Middle) === */}
      <view
        className="Card Card--graph"
        style={{
          backgroundColor: 'rgba(255,255,255,0.08)',
          borderRadius: '12px',
          padding: '16px',
          marginBottom: '16px',
        }}
      >
        <text style={{ marginBottom: '12px', fontSize: '16px' }}>
          Performance (last 7 days)
        </text>

        {/* Graph placeholder area — plug in a chart later */}
        <view
          style={{
            height: '220px',
            borderRadius: '8px',
            backgroundColor: 'rgba(255,255,255,0.06)',
            borderWidth: '1px',
            borderColor: 'rgba(255,255,255,0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <text style={{ opacity: 0.8 }}>📈 Your chart goes here</text>
        </view>
      </view>

      {/* === Settings Section (Bottom) === */}
      <view
        className="Card Card--settings"
        style={{
          backgroundColor: 'rgba(255,255,255,0.08)',
          borderRadius: '12px',
          padding: '8px',
          marginBottom: '16px',
        }}
      >
        <Row title="Stream title" value="Chill Coding Session" />
        <Row title="Category" value="Science & Technology" />
        <Row title="Latency" value="Low" />
        <Row title="VOD retention" value="Enabled" />
        <Row title="Chat slow mode" value="5s" />
        <Row title="Auto-moderation" value="Medium" last />
      </view>
    </view>
  )
}

/** Simple reusable settings row */
function Row({ title, value, last }) {
  return (
    <view
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '12px 8px',
        borderBottomWidth: last ? '0px' : '1px',
        borderBottomColor: 'rgba(255,255,255,0.12)',
      }}
    >
      <text style={{ flex: 1 }}>{title}</text>
      <text style={{ opacity: 0.8 }}>{value}</text>
    </view>
  )
}