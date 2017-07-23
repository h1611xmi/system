
(function(win,doc){
	//浏览器缩放时
	win.onresize=function(){
		change();	
	};
	change();
	function change(){
		var oFs=doc.documentElement.clientWidth/(320/20);

		//设置根目录字体大小
		doc.documentElement.style.fontSize=oFs+'px';	
	}	
})(window,document);

$(function(){
	$(".YC").click(function(){
	//	alert(111);
		$(".YC").hide();
		$(".XS").show();
		$("input").attr({'value': "", 'type':'text',});
		
	});
	$(".XS").click(function(){
	//	alert(111);
		$(".XS").hide();
		$(".YC").show();
		
		$("input").attr("type","password");
	})
	$(".login").click(function(){
		$(".p11_p2").html($("input").val());
		$('.bodys').show();
		$(".alert").show();
	});
	
	$(".yhs").click(function(){
		alert(111);
		$("input").val(" ");
		
	})
	
		
	
})
index = 60;
	window.onload = function(){
		var time = setInterval(function(){
			index -- ;
			$(".djs").html(index + "s");
			if(index == 0){
//					alert(111);
				clearInterval(time);
			}
		},1000);
		
	}


