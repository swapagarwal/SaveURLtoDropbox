$("#btn_save").click(function() {
	Dropbox.save($('#url').val(),$('#name').val());
});
