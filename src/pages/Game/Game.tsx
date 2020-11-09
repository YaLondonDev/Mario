import React, {
  FC,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Button } from '../../components';
import { UiContext } from '../../components/UiContext';
import { Game as WizardGame } from '../../game/Game';
import styles from './game.module.scss';

const Game: FC = () => {
  const { uiSettings, setUiSettings } = useContext(UiContext);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [game, setGame] = useState<WizardGame | null>(null);
  const [started, setStarted] = useState(false);

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

    setGame(
      new WizardGame(canvasRef.current, {
        width: window.innerWidth,
        height: window.innerHeight,
      }),
    );
  }, [canvasRef]);

  return (
    <div>
      {!started && (
        <div className={styles.wrapper}>
          <Button onClick={startGame} type="button">
            Start
          </Button>
        </div>
      )}
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Game;
