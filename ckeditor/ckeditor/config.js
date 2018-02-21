/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */
CKEDITOR.editorConfig = function( config ) {
	config.toolbarGroups = [
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
		{ name: 'links', groups: [ 'links' ] },
		{ name: 'insert', groups: [ 'insert' ] },
		{ name: 'forms', groups: [ 'forms' ] },
		{ name: 'tools', groups: [ 'tools' ] },
		{ name: 'document', groups: [ 'document' ] },
		{ name: 'others', groups: [ 'others' ] },
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
		{ name: 'styles', groups: [ 'styles' ] },
		{ name: 'colors', groups: [ 'colors' ] }
	];
	config.format_tags = 'p;h1;h2;h3;pre';
	config.ContentLangDirection = 'rtl'; 
	config.contentsLangDirection = 'rtl';
	//contentsLangDirection : 'rtl'
	config.language = "fa";
	config.defaultLanguage = 'en';
	config.contentsLangDirection = 'rtl';
	config.dialog_buttonsOrder = 'rtl';
	config.removeDialogTabs = 'image:advanced;link:advanced';
	config.removeButtons = 'Subscript,Superscript,PasteFromWord,PasteText,Scayt,Table,SpecialChar,Format,Styles';
};
	// Set the most common block elements.
	
