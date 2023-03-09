export default function SupportTage() {
  function handleClick() {
    console.log('Button clicked!');
  }
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10vh',
      }}
    >
      <h3 style={{ marginBottom: '20px' }}>LiveScores</h3>
      <h1>
        <button
          style={{
            background: 'black',
            fontSize: '20px',
            padding: '10px 60px',
            color: 'white',
            borderRadius: '15px',
          }}
        >
          Live
        </button>
      </h1>
    </div>
  );
}
