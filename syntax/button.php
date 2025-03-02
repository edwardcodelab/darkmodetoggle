<?php
if (!defined('DOKU_INC')) die();

class syntax_plugin_darkmodetoggle_button extends DokuWiki_Syntax_Plugin {

    public function getType() {
        return 'substition';
    }

    public function getSort() {
        return 150;
    }

    public function connectTo($mode) {
        $this->Lexer->addSpecialPattern('~~DARKMODE~~', $mode, 'plugin_darkmodetoggle_button');
    }

    public function handle($match, $state, $pos, Doku_Handler $handler) {
        return ['type' => 'darkmode_button'];
    }

    public function render($mode, Doku_Renderer $renderer, $data) {
        if ($mode !== 'xhtml') return false;

        if ($data['type'] === 'darkmode_button') {
            $renderer->doc .= '<button id="darkmode-toggle-btn" class="darkmode-btn" title="Toggle Dark Mode">🌙</button>';
           

        }
        return true;
    }
}