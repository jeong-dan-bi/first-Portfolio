$(document).ready(function () {
    $('.menu-tab').click(function () {
        $('.menu-hide').toggleClass('show');
        $('.menu-tab').toggleClass('active');
    });
    $('a').click(function () {
        $('.menu-hide').removeClass('show');
        $('.menu-tab').removeClass('active');
    });
});

$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});
});

// modal1
$(document).ready(function(){
	$('.detail1').click(function(){
		$('.modal').show();
		$('.modal-bg').show();
	});
	$('.modal .close').click(function(){
		$('.modal').hide();
		$('.modal-bg').hide();
	})
})
// modal2
$(document).ready(function(){
	$('.detail2').click(function(){
		$('.modal2').show();
		$('.modal-bg2').show();
	});
	$('.modal2 .close').click(function(){
		$('.modal2').hide();
		$('.modal-bg2').hide();
	})
})
// modal3
$(document).ready(function(){
	$('.detail3').click(function(){
		$('.modal3').show();
		$('.modal-bg3').show();
	});
	$('.modal3 .close').click(function(){
		$('.modal3').hide();
		$('.modal-bg3').hide();
	})
})
// modal4
$(document).ready(function(){
	$('.detail4').click(function(){
		$('.modal4').show();
		$('.modal-bg4').show();
	});
	$('.modal4 .close').click(function(){
		$('.modal4').hide();
		$('.modal-bg4').hide();
	})
})
// modal5
$(document).ready(function(){
	$('.detail5').click(function(){
		$('.modal5').show();
		$('.modal-bg5').show();
	});
	$('.modal5 .close').click(function(){
		$('.modal5').hide();
		$('.modal-bg5').hide();
	})
})
// modal6
$(document).ready(function(){
	$('.detail6').click(function(){
		$('.modal6').show();
		$('.modal-bg6').show();
	});
	$('.modal6 .close').click(function(){
		$('.modal6').hide();
		$('.modal-bg6').hide();
	})
})
// modal7
$(document).ready(function(){
	$('.detail7').click(function(){
		$('.modal7').show();
		$('.modal-bg7').show();
	});
	$('.modal7 .close').click(function(){
		$('.modal7').hide();
		$('.modal-bg7').hide();
	})
})
// modal8
$(document).ready(function(){
	$('.detail8').click(function(){
		$('.modal8').show();
		$('.modal-bg8').show();
	});
	$('.modal8 .close').click(function(){
		$('.modal8').hide();
		$('.modal-bg8').hide();
	})
})
// modal9
$(document).ready(function(){
	$('.detail9').click(function(){
		$('.modal9').show();
		$('.modal-bg9').show();
	});
	$('.modal9 .close').click(function(){
		$('.modal9').hide();
		$('.modal-bg9').hide();
	})
})
// modal10
$(document).ready(function(){
	$('.detail10').click(function(){
		$('.modal10').show();
		$('.modal-bg10').show();
	});
	$('.modal10 .close').click(function(){
		$('.modal10').hide();
		$('.modal-bg10').hide();
	})
})
// modal_plus
$(document).ready(function(){
	$('.detail_plus').click(function(){
		$('.modal_plus').show();
		$('.modal-bg11').show();
	});
	$('.modal_plus .close').click(function(){
		$('.modal_plus').hide();
		$('.modal-bg11').hide();
	})
})