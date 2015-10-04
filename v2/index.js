var options = {
    progress: function (progress) {
        var value = var Math.round(100*progress);
        $('.progress-bar').css('width', value+'%').attr('aria-valuenow', value);
    }
};
$("#btn_save").click(function() {
    var url = $('#url').val();
    var filename = $('#name').val();
    Dropbox.save(url, filename, options);
});
$("#url").on("propertychange change keyup paste input", function(){
    var url = $('#url').val();
    if(url.indexOf("/") != -1){
        $('#name').val(url.substring(url.lastIndexOf("/")+1));
    }
    else{
        $('#name').val(url);
    }
});
