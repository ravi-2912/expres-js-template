import morgan from 'morgan';

const env = process.env.NODE_ENV;

export default (_req, _res, next) => {
    if (env !== 'test')
        return morgan('[:date[iso]] :method :url STATUS :status - :response-time ms - :res[content-length]');
    next();
};
