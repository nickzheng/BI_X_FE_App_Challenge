import PropTypes from 'prop-types';
import React from 'react';
import styles from './index.less';

const StatusChecker = ({ server: { url }, checkStatus, status }) => {
  return (
    <div className={styles.statusChecker}>
      <button disabled={!url} onClick={checkStatus} data-testid="checkServerStatusButton">
        Check Server Status
      </button>
      <div className={styles.status} data-testid="status">
        STATUS: {status}
      </div>
    </div>
  );
};

StatusChecker.propTypes = {
  server: PropTypes.shape({
    url: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
  status: PropTypes.string.isRequired,
  checkStatus: PropTypes.func.isRequired,
};

export default StatusChecker;
