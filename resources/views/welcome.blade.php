<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <meta name="description" content="Fountain PHP Parser">
        <meta property="og:title" content="Fountain">
        <meta property="og:type" content="website">
        <meta property="og:description" content="A demo site the a Fountain Markdown parser writted in PHP">

        <title>Fountain | Livewire</title>

        <!-- favicons -->
        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32">
        <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16">
        <link rel="icon" href="/favicon.ico">

        <link rel="stylesheet" href="/css/tailwind.css">
        <link href="/vendor/highlighter/atom-one-dark.css" rel="stylesheet">
        <script type="text/javascript" src="/js/app.js"></script>

        <!-- live wire -->
        @livewireStyles

    </head>
    <body class="antialiased bg-white">
        <livewire:fountain>

        @livewireScripts
    </body>
</html>
