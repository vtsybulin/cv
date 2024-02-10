import winston, { Logger } from 'winston';

const { combine, timestamp, prettyPrint } = winston.format;

const INFO_LOG_FILE_NAME ='info.log';
const ERROR_LOG_FILE_NAME = 'error.log';

export const logger = winston.createLogger({
  level: 'info',
  format: combine(timestamp({
    format: 'isoDateTime',
  }), prettyPrint()),
  transports: [
    new winston.transports.File({
      filename: INFO_LOG_FILE_NAME,
      level: 'info',
    }),
    new winston.transports.File({
      filename: ERROR_LOG_FILE_NAME,
      level: 'error',
    }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

export type { Logger };
