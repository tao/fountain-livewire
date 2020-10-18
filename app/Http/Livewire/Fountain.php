<?php

namespace App\Http\Livewire;

use Illuminate\Support\Facades\Storage;
use Livewire\Component;
use App\Fountain\FountainParser;
use App\Fountain\FountainTags;
use Highlight\Highlighter;

class Fountain extends Component
{
    public $input = "";
    public $output = "";
    public $raw = false;

    public function mount()
    {
        $this->output = "Type your text into the textarea on the left to get started.";
        $this->input = Storage::get('scripts/lotr.fountain');
    }

    public function markup() {
        $this->raw = !$this->raw;
    }

    public function parse()
    {
        // parse the raw text as fountain
        try {
            // determine fountain elements
            $fountainElements = (new FountainParser())->parse($this->input);
            // parse fountain elements into html
            $html = (new FountainTags())->parse($fountainElements);

            if ($this->raw) {
                try {
                    // Highlight some code.
                    $hl = new Highlighter();
                    $highlighted = $hl->highlight('html', $html);

                    $this->output = ''
                        . '<pre class="w-full">'
                        . '<code class="hljs rounded {$highlighted->language}">'
                        . $highlighted->value
                        . '</code>'
                        . '</pre>';
                }
                catch (\DomainException $e) {
                    // This is thrown if the specified language does not exist
                    $this->output = "<pre><code>" . $e->getMessage() . "</code></pre>";
                }
            } else {
                // render fountain markup
                $this->output = $html;
            }

        } catch (\ErrorException $e) {
            $this->output = $e->getMessage();
        }
    }

    public function render()
    {
        if ($this->input) {
            $this->parse();     // parse fountain
        }

        return view('livewire.fountain');
    }
}
