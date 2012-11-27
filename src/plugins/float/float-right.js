Raptor.registerUi(new FilteredPreviewButton({
    name: 'floatRight',
    applyToElement: function(element) {
        element.css('float', 'right');
    },
    getElement: function(range) {
        var images = $(range.commonAncestorContainer).find('img');
        return images.length ? images : null;
    }
}));
