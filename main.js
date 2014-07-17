define(function (require, exports, module) {
    var LanguageManager = brackets.getModule("language/LanguageManager");

    var language = LanguageManager.getLanguage("csharp");

    language.addFileExtension("m");
    language.addFileName("Objective C");
});