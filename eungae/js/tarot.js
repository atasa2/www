// <div id="box_container_show" class="pos_relative "  style="position: absolute;">
//------------------------------------- globals	
const snGroup = "tarot";
const snClient = "goindol.com";


//------------------------------------- globals	
//------------------------------------- globals	
//------------------------------------- globals	
//--- swappable to local file BEGIN
//------------------------------------- globals	
//------------------------------------- globals	
//------------------------------------- globals	
const html_ways_g = [
'\
<div class="box_items pad_4 bdr3" id="box_items" style="">\n\
	<div class="box_item tca1_zr bdr_rad14 mar_2 " id="item1"  >\n\
		<img class="tc_img bdr_rad14" id="tca_i1"   src="__BGIMG__">\n\
		<p class="tc_title tca1_fzr" id="tca_p1">Card 1</p>\n\
	</div>\n\
</div> \n\
', 
'\
<div class="box_items pad_4 bdr3" id="box_items" style="">\n\
	<div class="box_item tca1_zr bdr_rad14 mar_2 " id="item1"  >\n\
		<img class="tc_img bdr_rad14" id="tca_i1"   src="__BGIMG__">\n\
		<p class="tc_title tca1_fzr" id="tca_p1">Card 1</p>\n\
	</div>\n\
	<div class="box_item tca1_zr bdr_rad14 mar_2 " id="item2" >\n\
		<img class="tc_img bdr_rad14" id="tca_i2"   src="__BGIMG__">\n\
		<p class="tc_title tca1_fzr" id="tca_p2">Card 2</p>\n\
	</div>\n\
  <br>\n\
	<div class="box_item tca1_zr bdr_rad14 mar_2 " id="item3"  >\n\
		<img class="tc_img bdr_rad14" id="tca_i3"   src="__BGIMG__">\n\
		<p class="tc_title tca1_fzr" id="tca_p3">Card 3</p>\n\
	</div>\n\
	<div class="box_item tca1_zr bdr_rad14 mar_2 " id="item4" >\n\
		<img class="tc_img bdr_rad14" id="tca_i4"   src="__BGIMG__">\n\
		<p class="tc_title tca1_fzr" id="tca_p4">Card 4</p>\n\
	</div>\n\
</div> \n\
', 

'\
<div class="box_items pad_4 bdr3" id="box_items" style="">\n\
	<div class="box_item tca2_zr bdr_rad14 mar_2 " id="item1"  >\n\
		<img class="tc_img bdr_rad14" id="tca_i1"   src="__BGIMG__">\n\
		<p class="tc_title tca2_fzr" id="tca_p1">Card 1</p>\n\
	</div><br>\n\
	<div class="box_item tca2_zr bdr_rad14 mar_2 " id="item2" >\n\
		<img class="tc_img bdr_rad14" id="tca_i2"   src="__BGIMG__">\n\
		<p class="tc_title tca2_fzr" id="tca_p2">Card 2</p>\n\
	</div>\n\
	\
	<div class="box_item_empty tca2_zr bdr_rad14 mar_2 " id="item2" ></div>\n\
	\
	<div class="box_item tca2_zr bdr_rad14 mar_2 " id="item3"  >\n\
		<img class="tc_img bdr_rad14" id="tca_i3"   src="__BGIMG__">\n\
		<p class="tc_title tca2_fzr" id="tca_p3">Card 3</p>\n\
	</div><br>\n\
	<div class="box_item tca2_zr bdr_rad14 mar_2 " id="item4" >\n\
		<img class="tc_img bdr_rad14" id="tca_i4"   src="__BGIMG__">\n\
		<p class="tc_title tca2_fzr" id="tca_p4">Card 4</p>\n\
	</div>\n\
</div> \n\
', 

'\
<div class="box_items pad_4 bdr3" id="box_items" style="">\n\
	<div class="box_item tca2_zr bdr_rad14 mar_2 " id="item1"  >\n\
		<img class="tc_img bdr_rad14" id="tca_i1"   src="__BGIMG__">\n\
		<p class="tc_title tca2_fzr" id="tca_p1">Card 1</p>\n\
	</div>\n\
	<div class="box_item tca2_zr bdr_rad14 mar_2 " id="item2" >\n\
		<img class="tc_img bdr_rad14" id="tca_i2"   src="__BGIMG__">\n\
		<p class="tc_title tca2_fzr" id="tca_p2">Card 2</p>\n\
	</div>\n\
	\
	<div class="box_item tca2_zr bdr_rad14 mar_2 " id="item3"  >\n\
		<img class="tc_img bdr_rad14" id="tca_i3"   src="__BGIMG__">\n\
		<p class="tc_title tca2_fzr" id="tca_p3">Card 3</p>\n\
	</div>\
</div> \n\
', 

];
//------------------------------------- globals	
//------------------------------------- globals	
//------------------------------------- globals	
//--- swappable to local file END
//------------------------------------- globals	
//------------------------------------- globals	
//------------------------------------- globals	




const html_show_card_inner_div = '\
<div class="box_container  wid_100 bdr2" id="box_container_show"  style=" ">\n\
	<div class="box_items pad_4 bdr3" id="box_items"  style="" >\n\
		<div class="box_item  tcb_zr bdr_rad24"  style="" >\n\
			<img class="tc_img bdr_rad24 " id="tcb_i" style="">\n\
			<p class="tc_title tcb_fzr"  id="tcb_p" style=""></p>\n\
		</div>\n\
	</div> 	\n\
</div> \
';		



var way_idx_g = 0;

var cards_of_way_g = [1, 4, 4, 3, ];
var chosen_nums_g = [0];

var description_shown_g = true;
var description_num_g = 0;

	
//------------------------------------- globals

function get_tarot_text(idx) {
	var sText = "";
	sText = sText + "\n\n" + "<p class='card_info'>" + get_card_info(idx) + "</p>";
	sText = sText + "\n\n" + get_tarot_text_1(idx);
	// sText = sText + "\\n\\\n\n" + get_tarot_text_2(idx);
	return sText;
}

function show_description(oImg, id, img_idx) {
	const num = chosen_nums_g[img_idx];
	const sNum   = pad_zero_num(num, 2);
	const sTitle = get_tarot_title(num);
	// -------------------------------- 
	$("#box_container").hide();
	// -------------------------------- 
	jQuery( html_show_card_inner_div, {}).insertAfter('#box_container');
	// -------------------------------- 
	let oImgNew = $('img#tcb_i');
	oImgNew.click(function(event){ on_hide_description(event); });
	oImgNew.attr("src", get_sf_card(num));
	$("#tcb_p").html(sTitle);
	// -------------------------------- 
	const sText = get_tarot_text(num);
	
	$("#tc_description").html(sText);
	description_shown_g = true;
	description_num_g = num;
	
	return img_idx;
}


function on_hide_description(event) {
	if (way_idx_g == 0) {
		$('#box_container').css('margin-top', '3em');
		$("#tc_description").html(OneCard_description);
	} else {
		$("#tc_description").html(FourCard_description);
	}
	
	// $("#tc_description").html("");
	// description_shown_g = false;
	description_num_g = 0;	

	
	$("#box_container_show").remove();
	$("#box_container").show();
}

	
function do_reset() {
	if (description_shown_g) {
		$("#box_container_show").remove();
		$("#box_container").show();
	}
	// description_shown_g = false;
	description_num_g = 0;
	
	$("#box_container").html("");
	$("#tc_description").html("");

	$("#sOut").html = "";
}



function set_way(way_idx) {
	do_reset();
	
	way_idx_g = way_idx;
	
	// chosen_nums_g = new Array(cards_of_way_g[way_idx]).fill(0);  // 0 : not yet chosen.
	chosen_nums_g = new Array(cards_of_way_g[way_idx]);  // 0 : not yet chosen.
	for(let i=0; i<chosen_nums_g.length;i++){chosen_nums_g[i] = 0; }
		
	var sHtml = html_ways_g[way_idx_g];
	sHtml = sHtml.replace(/__BGIMG__/g, "../" + snKind + "_cards/00.jpg");
	$("#box_container").html(sHtml);

	$('img.tc_img').click(function(event){
	    on_img_click(event);
	});

	$('#box_container').css('margin-top', '0em');
	
	show_usage(way_idx);
	
	img_enabled = true;
}	




function show_usage(way_idx) {
	if (way_idx_g == 0) {
		$("#tc_description").html(OneCard_description);
	} else {
		$("#tc_description").html(FourCard_description);
	}
}


function on_img_click(event) {
	let oImg = $(event.target);
	let id = oImg.attr('id');
	let img_idx = parseInt( id.substr(-1) )-1;
	
	if (chosen_nums_g[img_idx] == 0 ) {
		do_get_card(oImg, id, img_idx);
		show_usage(way_idx_g);
	}else {
		show_description(oImg, id, img_idx);
	}
}



function has_value(arr, val) {
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] == val) return true;
	}
	return false;
	// body...
}


function get_sf_card(num) {
	return ("../" + snKind + "_cards/" + pad_zero_num(num, 2) + ".jpg");	
}


function do_get_card(oImg, id, img_idx) {
	let num    = get_random_number(60);
	while(chosen_nums_g.includes(num)) num = get_random_number(60);
	chosen_nums_g[img_idx] = num;
	
	if (description_shown_g && description_num_g != num) {
		$("#tc_description").html("");
		// description_shown_g = false;
		description_num_g = 0;
	} 
	
	// -------------------------------- 
	oImg.attr("src", get_sf_card(num));
	
	simg_idx = (img_idx+1).toString();
	$("#tca_p"+simg_idx).html(get_tarot_title(num));
	// -------------------------------- 
}




var caller_g = "";

function get_tarot_text_by_num(idx) {
	var sText = "";
	sText = sText + "\n\n" + "<p class='card_info'>" + get_card_info(idx) + "</p>";
	sText = sText + "\n\n" + get_tarot_text_1(idx);
	return sText;
}


function show_description_by_num(num) {
	const sNum   = pad_zero_num(num, 2);
	const sTitle = get_tarot_title(num);
	// -------------------------------- 
	$("#box_container").hide();
	// -------------------------------- 
	jQuery( html_show_card_inner_div, {}).insertAfter('#box_container');
	// -------------------------------- 
	let oImgNew = $('img#tcb_i');
	
	oImgNew.click(function(event){ window.location.replace( caller_g ); });
	
	oImgNew.attr("src", get_sf_card(num));
	$("#tcb_p").html(sTitle);
	// -------------------------------- 
	const sText = get_tarot_text_by_num(num);
	
	$('#tc_description').css("margin-top", '7pt');
	$("#tc_description").html(sText);
	// description_shown_g = true;
	// description_num_g = num;
}

	
	
// ---------------------------------------------------- 
// ---------------------------------------------------- 
function go_to_home() {
	var sUrl = "http://wooyunee.com";
	window.location.replace( sUrl );
	return false;
}
	
function buy() {
	var sUrl = "http://www.goldenflower.co.kr/new/index.php?modea=pd_view&id_no=1&tm_id=3";
	// window.location.replace( sUrl );
	return false;
}
	
function reservation() {
	var sUrl = "consulting.html";
	window.location.replace( sUrl );
	return false;
}
	
function to_main() {
	var sUrl = "main.html";
	// document.location.href = sUrl,true;
	window.location.replace( sUrl );
	return false;
}
	
function to_tarot(mode) {
	var sUrl = "tarot.html?mode=" + mode;
	window.location.assign( sUrl ); 
	return false;
}
// ---------------------------------------------------- 


// ---------------------------------------------------- 
function init() {
	do_reset();
}	



$( window ).load(function() {
	var rq = getRequests();  
	caller_g = rq["caller"];
	
	var num = rq["num"];
	if (typeof num != "undefined") {
		show_description_by_num(num);
		return;
	}
	
	var mode = rq["mode"]; if (typeof mode == "undefined") mode = default_mode;
	set_way(mode);
	
});
// ---------------------------------------------------- 








