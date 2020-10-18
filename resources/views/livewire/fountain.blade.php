<div>
    <nav class="flex flex-col w-full bg-white border-b mb-8">
        <div class="container max-w-6xl mx-auto flex justify-between px-8 py-3">
            <a href="/">
                <div class="flex items-center flex-shrink-0 mr-6 text-gray-700">
                    <span class="font-medium text-2xl inline-block py-2 px-1 tracking-tight">PHP Fountain Parser</span>
                </div>
            </a>
            <div class="w-full hidden lg:block flex-grow lg:flex lg:items-center lg:w-auto justify-end">

                {{-- <button wire:click="parse" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Parse Text</button> --}}
                <button wire:click="markup" class="flex border border-blue-500 hover:bg-blue-700 hover:text-white py-1 px-3 rounded">
                    {{ $raw ? 'Show markup' : 'Show raw HTML' }}
                </button>

            </div>
        </div>
    </nav>

    <main class="max-w-6xl mx-auto flex mb-8">
        {{-- If your happiness depends on money, you will never be happy with yourself. --}}
        <div class="flex w-1/2 pr-4">
            <textarea wire:model.debounce.1000ms="input" rows="20" class="border border-blue-300 bg-gray-100 rounded w-full p-4"></textarea>
        </div>
        <div class="flex w-1/2">
            {!! $output !!}
        </div>
    </main>

    <div class="max-w-6xl mx-auto flex mb-4">
        <span class="p-4">Learn more about <a href="https://fountain.io/syntax" target="_blank">Fountain</a>.</span>
    </div>
</div>
