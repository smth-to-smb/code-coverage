module.exports = {
    moduleFileExtensions: ['ts', 'html', 'js', 'json'],
    transform: {
        '\\.[tj]s$': 'babel-jest',
    },
    coverageDirectory: '.qodana/code-coverage/',
    coverageReporters: ['lcovonly'],
    collectCoverageFrom: ['subtract.js', 
    'sum.js', 
    'divide.js']
};
