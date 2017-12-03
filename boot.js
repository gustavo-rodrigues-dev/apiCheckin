module.exports = app => {
    app.listen(app.get('port'), () => app.logger.info('Start api Customer'));
    app.listen(80, () => app.logger.info('Start api Customer'));
};