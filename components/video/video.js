Application.View.Video = Backbone.View.extend({
    //el: '.video',

    events: {
        'click .video-placeholder': 'onClick'
    },

    initialize: function() {
        console.log('this', this);
        this.$el.css('cursor', 'pointer');
    },

    onClick: function() {
        var src = this.$el.find('.video-player').attr('src');

        if(src.indexOf('?') === -1) {
            this.$el.find('.video-player').attr('src', src+'?autoplay=1');
        }

        this.$el.addClass('video-active');
    }
});