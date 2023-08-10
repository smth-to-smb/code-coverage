module.exports = {
    moduleFileExtensions: ['ts', 'html', 'js', 'json'],
    transform: {
        '\\.[tj]s$': 'babel-jest',
    },
    coverageDirectory: '.qodana/code-coverage/',
    coverageReporters: ['lcovonly'],
    collectCoverageFrom: ['src/subtract.js', 
    'src/sum.js', 
    'src/divide.js']

};
