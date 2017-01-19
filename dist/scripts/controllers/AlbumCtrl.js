(function() {
    function AlbumCtrl() {
        this.albumData = albumExplosions;
    }
    angular
        .module('blocJams')
        .controller('AlbumCtrl', AlbumCtrl);
})();