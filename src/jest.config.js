module.exports = {
    moduleFileExtensions: ['ts', 'html', 'js', 'json'],
    transform: {
        '\\.[tj]s$': 'babel-jest',
    },
    rootDir:'/';
    coverageDirectory: '.qodana/code-coverage/',
    coverageReporters: ['lcovonly'],
    collectCoverageFrom: ['src/subtract.js', 
    'src/sum.js', 
    'src/divide.js']
};
