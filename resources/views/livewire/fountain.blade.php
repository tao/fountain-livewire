<div>
    <div class="flex justify-between items-center p-4 mb-12 bg-gray-700 rounded-b-lg mb-4 border border-t-0 border-blue-500">
        <span class="text-white text-2xl">PHP Fountain Parser</span>
        <span>
            {{-- <button wire:click="parse" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Parse Text</button> --}}
            <button wire:click="markup" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{{ $raw ? 'Show markup' : 'Show raw HTML' }}</button>
        </span>
    </div>

    <div class="flex mb-4">
        {{-- If your happiness depends on money, you will never be happy with yourself. --}}
        <div class="flex w-1/2 pr-4">
            <textarea wire:model.debounce.1000ms="input" rows="20" class="border border-blue-300 rounded w-full p-4"></textarea>
        </div>
        <div class="flex w-1/2 p-4">
            {!! $output !!}
        </div>
    </div>

    <div class="flex mb-4">
        <span class="p-4">Learn more about <a href="https://fountain.io/syntax" target="_blank">Fountain</a>.</span>
    </div>
</div>
