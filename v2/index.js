var options = {
    progress: function (progress) {
        var value = Math.round(100*progress);
        $('.progress').css('display', 'inherit');
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
