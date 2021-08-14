









$("#btn_to_home").click( function(){
  go_to_home();
});



$(".all_items p").click(function( event ) {
	let sfn = window.location.href.split('/').pop();
	let num = parseInt(event.target.id);
	var sUrl = "tarot.html?caller=" + sfn + "&num=" + num;
	window.location.replace( sUrl );
});


if (snClient != "osho.co.kr") {
	$(".all_items p").hover(function( event ) {
		let sfn = window.location.href.split('/').pop();
		let num = parseInt(event.target.id);
		let sUrl = "tarot.html?caller=" + sfn + "&num=" + num;
		$('#log').html(sUrl);
	});
}







