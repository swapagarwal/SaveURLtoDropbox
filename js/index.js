$(document).keypress(function(e) {
    if(e.which == 13) {
        $("#btn_save").click();
    }
});

$("#btn_save").click(function() {
	Dropbox.save($('#url').val(),$('#name').val());
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
