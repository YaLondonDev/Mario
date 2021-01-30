import React, { FC } from 'react';
import { TFeedbackPayload } from './types';
import { FeedbackForm } from './FeedbackForm';
import { addFeedback } from '../../api/feedback';

import styles from './feedback.module.scss';
import base from '../../styles/base.module.scss';

const Feedback: FC = () => {
  const handleSubmit = (data: TFeedbackPayload) => {
    addFeedback(data).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className={base.wrapper}>
      <div className={styles.feedback_form}>
        <div className={styles.feedback_form__content}>
          <h1 className={base.title}>Feedback</h1>
          <FeedbackForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
