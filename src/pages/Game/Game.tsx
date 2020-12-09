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
import { CANVAS } from '../../game/consts/size';
import { Meta } from '../../components/Meta';
import { Button } from '../../components';
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
        width: CANVAS.width,
        height: CANVAS.height,
        scale: 0.8,
      }),
    );
  }, [canvasRef]);

  return (
    <div>
      <Meta title="Game" />
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
