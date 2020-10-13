let mix = require('laravel-mix');
let purgecss = require('laravel-mix-purgecss');
let tailwindcss = require('tailwindcss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.sass('resources/sass/site.scss', 'public/css')
    .options({
        processCssUrls: false,
        postCss: [
            tailwindcss('./tailwind.config.js'),
        ]
    });


if (mix.inProduction()) {
    mix
        .version()
        .purgeCss();
}

/*
 |--------------------------------------------------------------------------
 | Statamic Control Panel Assets
 |--------------------------------------------------------------------------
 |
 | Feel free to add your own JS or CSS to the Statamic Control Panel.
 | https://statamic.dev/extending/control-panel#adding-css-and-js-assets
 |
 */

mix.copy('resources/css/atom-one-dark.css', 'public/css/atom-one-dark.css')
    .copy('resources/css/atom-one-dark-reasonable.css', 'public/css/atom-one-dark-reasonable.css')
    .copy('resources/css/atom-one-light.css', 'public/css/atom-one-light.css');
