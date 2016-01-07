# grunt-bump-version

> Bump version numbers for the specified files.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-bump-version --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-bump-version');
```
### Overview
In your project's Gruntfile, add a section named `bump_version` to the data object passed into `grunt.initConfig()`. This is a simple task, and does not conform to multi task options & files input types! All available configuration styles are described below.

```js
grunt.initConfig({
  bump_version: {
    options: {
      // Task-specific options go here.
    },
    files: [
      // Target-specific files go here.
    ],
  },
});
```

And now you can call it from CLI like this:
```shell
grunt bump_version:[version number]
```

### Usage Examples

#### Default Options
In this example the version number in the specfied files (depending on the file extension) are modified in place. With the default options the version number in js and json files are modified.

```js
grunt.initConfig({
  bump_version: {
    options: {},
    files: ['path/to/file'],
  },
});
```

#### Custom Options
In this example, custom options are used to change the regex match with the specified sub string in `.txt` files. The regular expression always needs a capturing parentheses to change the version number.

```js
grunt.initConfig({
  bump_version: {
    options: {
      txt: {
        regex: /version: '([0-9\.]*)'/g,
        substr: '%s'
      }
    },
    files: ['path/to/file'],
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
