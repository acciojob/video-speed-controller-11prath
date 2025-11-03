body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #222;
  color: white;
  font-family: sans-serif;
}

.player {
  max-width: 750px;
  border: 2px solid #444;
  position: relative;
}

.viewer {
  width: 100%;
  max-height: 420px;
}

.player__controls {
  display: flex;
  align-items: center;
  background: #333;
  padding: 10px;
  gap: 8px;
}

.player__button {
  background: none;
  border: 1px solid #555;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 16px;
}

.player__slider {
  width: 100px;
}

.progress {
  flex: 1;
  background: #555;
  cursor: pointer;
  height: 10px;
  position: relative;
}

.progress__filled {
  width: 0;
  background: #ffc600;
  height: 100%;
  transition: width 0.1s;
}


