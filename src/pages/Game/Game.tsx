import React, {
  FC,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Game as WizardGame } from '../../game/core/Game';
import { UiContext } from '../../components/UiContext';
import { Meta } from '../../components/Meta';
import { Button } from '../../components';
import styles from './game.module.scss';
import ExpandIcon from './expand.svg';

const Game: FC = () => {
  const { uiSettings, setUiSettings } = useContext(UiContext);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [game, setGame] = useState<WizardGame | null>(null);
  const [started, setStarted] = useState(false);
  const urlParams = new URLSearchParams(window.location.search);
  const status = urlParams.get('status') || 'start';

  const startGame = useCallback(() => {
    setStarted(true);
    setUiSettings({
      ...uiSettings,
      showHeader: false,
    });
    game.start();
  }, [game]);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    setGame(new WizardGame(canvasRef.current));
  }, [canvasRef]);

  const handleFullScreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    }
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }, []);

  return (
    <div>
      <Meta title="Game" />
      {started && (
        <div className={styles.tools}>
          <Button onClick={handleFullScreen} className={styles.expandButton}>
            <ExpandIcon className={styles.expandIcon} />
          </Button>
        </div>
      )}
      {!started && (
        <div className={styles.wrapper}>
          {status !== 'start' && (<h1 className={styles.status}>Игра окончена</h1>) }
          <Button onClick={startGame} type="button">
            {status === 'start' ? 'Играть' : 'Играть заново'}
          </Button>
        </div>
      )}
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Game;
