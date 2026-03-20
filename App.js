import React, { useState } from 'react';

const FlowerGarden = () => {
  const [flowers, setFlowers] = useState([]);
  const [isForgiven, setIsForgiven] = useState(false);

  // Function to add a flower at a random-ish position
  const plantFlower = () => {
    const newFlower = {
      id: Date.now(),
      left: Math.random() * 80 + 10 + '%', // Keep away from extreme edges
      top: Math.random() * 50 + 20 + '%',
      size: Math.random() * 20 + 30 + 'px',
      color: ['#ff99c8', '#fcf6bd', '#d0f4de', '#a9def9', '#e4c1f9'][Math.floor(Math.random() * 5)],
      rotation: Math.random() * 45 + 'deg'
    };
    
    setFlowers([...flowers, newFlower]);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1>Our Garden of Forgiveness</h1>
        <p>بعرف اني كتير غلطت, بس بنفع نعمل فعالية حلوة؟</p>
        
        <button onClick={plantFlower} style={styles.button}>
          {flowers.length === 0 ? "🌱 بلشي اكبسي هون" : "💧 منسقي الزريعة عشان نكبر حديقتنا"}
        </button>
      </div>

      {/* The Garden Area */}
      <div style={styles.garden}>
        {flowers.map((f) => (
          <div
            key={f.id}
            style={{
              ...styles.flower,
              left: f.left,
              top: f.top,
              fontSize: f.size,
              color: f.color,
              transform: `rotate(${f.rotation}) scale(1)`,
            }}
            
          >
            🌸
          </div>
        ))}
      </div>

      {/* The "I'm Sorry" Trigger */}
      {flowers.length >= 12 && !isForgiven && (
        <div style={styles.overlay}>
          <div style={styles.card}>
            <h2>🌷شوفي محلاكي وأنت مبسوطة</h2>
            <p>متأسف انو عملت الي عملتو بنفع تسامحيني؟</p>
            <button 
              onClick={() => setIsForgiven(true)} 
              style={{...styles.button, backgroundColor: '#4CAF50'}}
            >
              🙂مسامح
            </button>
          </div>
        </div>
      )}

      {isForgiven && (
        <div style={styles.overlay}>
          <h1 style={{fontSize: '4rem', color: 'black', textShadow: '2px 2px 10px rgba(0,0,0,0.2)'}}>
            ❤️شكرا لمجرد كونك انت عنجد انك احسن حدا بحياتي. شكرا لوجودك معي
          </h1>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
  height: '100vh',
  // This uses a high-quality grass texture
  backgroundImage: 'src/Green-Grass.jpg',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  fontFamily: '"Quicksand", sans-serif',
  overflow: 'hidden',
  position: 'relative'
},
garden: {
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  // Creates a subtle "polka dot" grass texture
  backgroundColor: '#4CAF50',
  backgroundImage: 'radial-gradient(#dcedc8 2px, transparent 2px)',
  backgroundSize: '30px 30px',
  zIndex: 1
},
  header: {
    textAlign: 'center',
    padding: '40px',
    zIndex: 10,
    position: 'relative'
  },
  button: {
    padding: '15px 30px',
    fontSize: '18px',
    borderRadius: '30px',
    border: 'none',
    backgroundColor: '#ff8fab',
    color: 'white',
    cursor: 'pointer',
    transition: 'transform 0.2s',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
  },
  flower: {
    position: 'absolute',
    transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    animation: 'bloom 0.5s ease-out'
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
    textAlign: 'center'
  },
  card: {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    maxWidth: '400px'
  }
};

export default FlowerGarden;