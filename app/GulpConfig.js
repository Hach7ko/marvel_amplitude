/**
 * The url for the api Kiwapp you want use
 * @type {string}
 */
var urlApi = "https://api.kiwapp.com/nosecure/appInstance/";
/**
 * The application token for this application
 * You must have manualy uploaded on the Manager once
 * After that you find the application token in the interface
 * @type {string}
 */
var appToken = "123456";

/**
 * The destination folder you want yours built resources have been
 * @type {string}
 */
var dist = "../build/";

/**
 * The folder with your test
 * @type {string}
 */
var test = "../test/";

/**
 * The project sources folders
 * @type {string}
 */
var project = "../";

/**
 * Available var : babelfish or angular-translate
 * (choose to use angular-translate)
 * @type {string}
 */
var translator = 'angular-translate';

/**
 * The application name (in min case)
 * @type {string}
 */
var appName = "marvel_amplitude";

/**
 * List the project dependecies you want build
 * Is generally the microbackoffice dependencies
 * The order is important
 * @type {Array}
 */
var projectsDependencies = [
    {
        'dest': 'app-setup',
        'project' : '../../app-setup/build/',
        'projectGulp' : '../../app-setup/GulpFile.js',
        'task': 'prod'
    },
    {
        'dest': 'app-databrowser',
        'project' : '../../app-databrowser/build/',
        'projectGulp' : '../../app-databrowser/GulpFile.js',
        'task': 'prod'
    }
];

/**
 * The default port where the application is launched
 * @type {number}
 */
var defaultPort = 8080;

module.exports = {
    urlApi: urlApi,
    appToken: appToken,
    dist: dist,
    test: test,
    project: project,
    translator: translator,
    projectsDependencies: projectsDependencies,
    appName: appName,
    defaultPort: defaultPort
};
