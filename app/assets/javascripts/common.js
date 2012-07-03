function ScreenCheck(){
	if (screen.width>=1280){
		/*首页*/
		document.write("<style type='text/css'>.w{width:1200px; margin:0 auto;}.middle{width:766px;}#KinSlideshow{ height:120px;width:766px; overflow:hidden; z-index:0; position:fixed;}.welcome{width:300px;}#KinSlideshow img{ height:120px;width:766px;}.xpzs_list li{ float:left; width:200px;}.xpzs_list1 li{ float:left; width:245px;}.xpzs_list1 .jj{ float:left; width:185px;}.mlist li{ float:left; width:240px;}.footlist{ width:200px;}.pro_info{width:975px;}.index_cont{width:975px;}.w500{width:750px;}.cont_1 .mlist li{ margin-right:55px;}</style>");
		/*二级分类*/
		document.write("<style type='text/css'>.pro_middle{width:955px;}.pro_listtop{width:955px;}.pro_listtop li{margin:0 22px; }.pro_listclass .title{ width:969px;}.pro_listclass .cont{width:967px;}.pro_listbaojia {width:967px; }.pro_listbaojia .left{width:746px;}.pro_listbaojia .left .title2{width:738px;}.footlist{ width:200px;}.pro_listbaojia .left .title2 ul li{margin-left:10px ;}.pro_listbaojia .left .cont ul{ width:700px;}.pro_listbaojia .left .cont ul li{ width:140px;}</style>");
		/*三级分类*/
		document.write("<style type='text/css'>.tab_listtop{width:965px;}.tab_listtop .cont ul{ width:300px;margin:10px 10px}.tab_listclass .tab_cont {width:965px;}.pro_listbaojia .left .contcj {width:734px;}.cont_bj{width:720px;}.contcj1{width:125px; } .contcj2 strong{width:125px; }.contcj3{width:100px;}.contcj4{width:260px;} </style>");
		/*产品内容页*/
		document.write("<style type='text/css'>.pro_jj{width:755px;}.pro_jieshao{ width:753px}.pro_jieshao .pro_jsr{width:500px;}.pro_jsr_title2{width:500px;}.pro_canshu{width:500px;}.pro_xg_list{width:975px; } .pro_xg_l_t{width:975px; }.pro_xg_l_t li{width:240px;}.pro_xg_l_n{width:975px; }.pro_xg_l_n li{width:240px;}.pro_qg .title2{width:965px;}.pro_qg {width:975px;}.pro_qg .contcj{width:975px;}.pro_qg .cont_bj{width:975px;}.pro_s_c{width:975px;}.pro_contcj,.pro_cont_bj{width:961px;}.pro_contcj1{width:200px;}.pro_contcj3{width:150px;}.pro_contcj4{width:240px;}.pj_cont,.pjx,.pj_jf{width:970px;}.pj_jf3{width:470px;}.pj_xx{width:970px;}.pj_xx .r2{width:840px;}.pj_xx .r2 .title,.pj_xx .r2 .boomt,.pj_xx .r2 .cont{width:840px;}.ri{width:720px;}</style>");
		/*展会页*/
		document.write("<style type='text/css'>.rt_cont{width:725px;}.rt_middle{ width:753px}.rt_middle_t {width:753px;}.rt_m_page{text-indent:420px; }.rt_middle ul li{width:733px;}</style>");
		/*招聘页*/
		document.write("<style type='text/css'>.rc_top{width:825px;}.rc_top span{ width:403px}.rc_middle {width:753px;}.rc_middle_t {width:753px;}.rc_m_cont_t .gsmc{width:419px;}.rc_m_cont_t .gsmcbcf{width:419px;}.rc_m_pic img{width:753px;}.rc_m_cont_t .byyx{width:359px;}.rc_m_cont_t .byyxbcf{width:359px;}.rc_gs_top{width:963px;}.rc_t_bj{width:963px;}</style>");
		/*直销店铺页*/
		document.write("<style type='text/css'>.dp_top{width:1200px;margin:10px 0;}.dp_top ul{width:966px;}.dp_right{ width:975px;}.dp_right_top{width:950px; height:140px;}.dp_r_l img{width:730px;}.dp_right_cont{ width:950px;}.dp_right_cont_r{width:660px; float:left;}}</style>");
		/*直销首页*/
		document.write("<style type='text/css'>.zx_middle{width:765px; margin:10px 0px 6px 5px; float:left; position:relative;}.zx_xpzs_list{width:765px;}.zx_xpzs_list2{ width:752px;}.zx_xpzs_list2 span{margin:10px 0px 0px 55px;}.zx_rqph{width:985px;}.zx_rqph2{ width:936px;}.zx_tl,.zx_tl1,.zx_tl2,.zx_tl3,.zx_tl4,.zx_tl5,.zx_tl6{width:1200px;}.tl_c{width:690px;}.tl_c ul li{width:210px;}.zx_adb img{width:1194px;}}</style>");
		/*幻灯*/
		document.write("<style type='text/css'>.main_center{width:765px;}.slides{width:765px;}.slide-pic img {width:805px;*width:775px;}.slide-pic{width:765px;}.slide-li li{width:151px;}}</style>");
		/*团购列表页*/
		document.write("<style type='text/css'>.main{width:1050px;}.top_title{width:1200px;}.tuan_search{width:1030px;}.nav_li{width:1200px; background:url(../images/images_3_1200.jpg) no-repeat; }.chanp_1,.chanp_2{margin:0px 27px 0px 0px;width:364px;}.chanp_cont{width:1200px;}.chanp_1,.chanp_2 p img{ width:337px;}.hd_zx{width:324px;}.hd_tz p img{ width:290px; }.hd_p {width:290px; }.hd_tz p{width:290px;}}</style>");
		/*团购帮助页*/
		document.write("<style type='text/css'>.old{width:1100px;}.old_tz p img{ width:290px; }.old_tz p{ width:290px; }}</style>");

		}
}

function selectTag(showContent,selfObj){
	// 操作标签
	var tag = document.getElementById("tabMenu").getElementsByTagName("a");
	var taglength = tag.length;
	/*for(i=0; i<taglength; i++){
		tag[i].className = "";
	}
	selfObj.parentNode.className = "selectTag";
	*/
	// 操作内容
	for(i=0; j=document.getElementById("tagContent"+i); i++){
		j.style.display = "none";
	}
	document.getElementById(showContent).style.display = "block";
	
}
function selectTag2(showContent2,selfObj2){
	// 操作标签
	var tag = document.getElementById("tabMenu2").getElementsByTagName("a");
	var taglength = tag.length;
	/*for(i=0; i<taglength; i++){
		tag[i].className = "";
	}
	selfObj.parentNode.className = "selectTag";
	*/
	// 操作内容
	for(i=0; j=document.getElementById("2tagContent"+i); i++){
		j.style.display = "none";
	}
	document.getElementById(showContent2).style.display = "block";
	
}

function selectTag3(showContent3,selfObj3){
	// 操作标签
	var tag = document.getElementById("tabMenu3").getElementsByTagName("a");
	var taglength = tag.length;
	/*for(i=0; i<taglength; i++){
		tag[i].className = "";
	}
	selfObj.parentNode.className = "selectTag";
	*/
	// 操作内容
	for(i=0; j=document.getElementById("3tagContent"+i); i++){
		j.style.display = "none";
	}
	document.getElementById(showContent3).style.display = "block";
	
}