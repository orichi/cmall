if (typeof(webroot) == 'undefined'){
	var webroot = "/hany/";
}
var xmlhttp = null;
var BrowerType = 'IE';
if(window.XMLHttpRequest){
	xmlhttp = new XMLHttpRequest();
	var BrowerType = 'FF';
}else if(window.ActiveXObject){
	var msxml = new Array('MSXML2.XMLHTTP.5.0', 'MSXML2.XMLHTTP.4.0', 'MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP', 'Microsoft.XMLHTTP');
	for(var i=0; i<msxml.length; i++){
		try{
			xmlhttp = new ActiveXObject(msxml[i]); 
			break;
		}catch(e){}
	}
}
function checkform(obj){
	var errmsg = object('errormessage');
	if (errmsg!=null)errmsg.innerHTML = '';
	for (i=0; i<obj.length; i++){
		var cn = obj[i];
		if (cn.className == 'errbox'){
			cn.className = 'needbox';
		}
		if (cn.className == 'needbox' && cn.value == ''){
			cn.className = 'errbox';
			cn.focus();
			if (cn.getAttribute('hint') != null){
				if (errmsg!=null)errmsg.innerHTML = cn.getAttribute('hint');
				else alert(cn.getAttribute('hint'));
			}
			return false;
		}
		if (cn.getAttribute('match') != null){
			var m = cn.getAttribute('match');
			var r = new RegExp(m);
			if (!r.test(cn.value)){
				cn.className = 'errbox';
				cn.focus();
				if (cn.getAttribute('hint') != null){
					if (errmsg!=null)errmsg.innerHTML = cn.getAttribute('hint');
					else alert(cn.getAttribute('hint'));
				}
				return false;
			}
		}
	}
	return true;
}
function checkradio(radioname, message){
	var errmsg = object('errormessage');
	if (errmsg!=null)errmsg.innerHTML = '';
	var hascheck;
	hascheck = false;
	var rn = document.getElementsByName(radioname);
	for (var i=0; i<rn.length; i++){
		if (rn[i].checked){
			hascheck = true;
			break;
		}
	}
	if (!hascheck){
		if (errmsg!=null)errmsg.innerHTML = message;
		else alert(message);
		return false;
	}
	return true;
}
function object(objId){
	return document.getElementById(objId);
}
function message(msg, url){
	if (url!=''){
		if (confirm(msg)){
			window.location.href=url;
		}else{
			return false;
		}
	}else{
		alert(msg);
	}
}
function _location(url){
	window.location.href=url;
}
function addHandleEvent(obj, type, func){
	if (obj.attachEvent){
		obj.attachEvent('on'+type, func);
		return true;
	}else if (obj.addEventListener){
		obj.addEventListener(type, func, false);
		return true;
	}else{
		return false;
	}
}

function button(obj){
}

/* cookie class */
function cookie() {
	if (document.cookie.length) {
		this.cookies = ' ' + document.cookie;
	}
}
cookie.prototype.set = function (key, value) {
	var expdate = new Date();
	var argv = this.set.arguments;
	var argc = this.set.arguments.length;
	var expires = (argc > 2) ? argv[2] : null;
	var path    = (argc > 3) ? argv[3] : null;
	var domain  = (argc > 4) ? argv[4] : null;
	var secure  = (argc > 5) ? argv[5] : false;
	if(expires!=null) expdate.setTime(expdate.getTime() + ( expires * 1000 ));
	document.cookie = key + "=" + escape (value) + 
		((expires == null) ? "" : ("; expires="+ expdate.toGMTString())) +
		((path == null) ? "" : ("; path=" + path)) +((domain == null) ? "" : ("; domain=" + domain)) +
		((secure == true) ? "; secure" : "");
}
cookie.prototype.get = function (key) {
	if (this.cookies) {
		var start = this.cookies.indexOf(' ' + key + '=');
		if (start == -1) {
			return null;
		}
		var end = this.cookies.indexOf(";", start);
		if (end == -1) {
			end = this.cookies.length;
		}
		end -= start;
		var cookie = this.cookies.substr(start,end);
		return unescape(cookie.substr(cookie.indexOf('=') + 1, cookie.length - cookie.indexOf('=') + 1));
	}else {
		return null;
	}
}
cookie.prototype.remove = function (key) {
	var expdate = new Date();
	expdate.setTime (expdate.getTime() - 1);
	var cval = this.get(key);
	document.cookie = key + "=" + cval + "; expires="+ expdate.toGMTString();
}


/*  car class */
function car(){
}
car.prototype.add = function(goodsid, modelid, nums){
	var rnd = new Date().getTime();
	var url = webroot+'setcookie.php?rnd='+rnd+'&goodsid='+goodsid+'&modelid='+ EncodeUtf8(modelid)+'&nums='+nums;
	xmlhttp.open('GET',url, false);
	xmlhttp.send(null);
	var text = xmlhttp.responseText;
	if(text=='true'){
		if(confirm('现在去结算中心吗？\n\n如要去结算中心点击“确定”，继续购物点击“取消”。')){
			window.location.href=webroot+'shopping.step.php';
		}
	}
	if(text=='exist'){
		alert('对不起！您的购物车中已经有相同的商品。');
	}
	if(text=='login')
	{
		alert('挑选积分兑换礼品请先登录');
	}
	if(text=="point")
	{
		if ( nums > 1)
		{
			alert('您的积分不够兑换这些商品');
		}
		else
		{
			alert('您的积分不够兑换此商品');
		}
	}
	if (text=="false")
	{
		alert('页面错误');
	}
}
car.prototype.clear = function(){
	var rnd = new Date().getTime();
	var url = webroot+'setcookie.php?rnd='+rnd+'&action=clear';
	xmlhttp.open('GET',url, false);
	xmlhttp.send(null);
}
car.prototype.remove = function(modelid,goodsid){
	if (confirm('确定删除该商品吗?'))
	{
		var rnd = new Date().getTime();
		var url = webroot+'setcookie.php?rnd='+rnd+'&action=remove&modelid='+EncodeUtf8(modelid)+'&goodsid='+goodsid;
		xmlhttp.open('GET',url, false);
		xmlhttp.send(null);
		var text = xmlhttp.responseText;
		if(text=='true'){
				//window.location.href=webroot+'shopping.step.php';
				object("shopping_form").submit();
		}
		if(text=='exist'){
			alert('删除商品出错');
		}
	}
}
var car = new car();

function add_goods()
{
  var gs = object("modelid");

  if (gs == null)
  {
    alert("页面错误");
    return;
  }
  
  if (gs.selectedIndex == 0)
  {
    alert("请选择尺寸");
    return;
  }

  car.add(object('goodsid').value,object('modelid').value,object('nums').value);
}


var fade_header_arr = new Array('品味，触手可及', '快乐，随身出发');
var fade_header_cur = 0;

var colorIn='#006378';		// 淡入颜色
var colorOut='#FFFFFF';	// 淡出颜色
var dur=100;				// 淡入淡出步数

function fade_header()
{
	fade_header_cur++;
	if (fade_header_cur >= fade_header_arr.length)
	{
		fade_header_cur = 0;
	}

	var fade_header_div = object("header_fade");

	fade_header_div.style.color= "#FFFFFF";
	fade_header_div.innerHTML = fade_header_arr[fade_header_cur];
	fade("header_fade", colorIn, colorOut, dur, false);
	
	//changebigpic();
	setTimeout("fade_header()", 8000);
}



// 淡入淡出函数
function fade(id, colorSource, colorFade, fadeStep, background)
{
	var element = document.getElementById(id);
	// 分解源色彩
	var rSource = sprRGB(colorSource, 0);    //红 R
	var bSource = sprRGB(colorSource, 1);    //绿 G
	var gSource = sprRGB(colorSource, 2);    //蓝 B
	
	// 分解渐变色彩
	var rFade = sprRGB(colorFade, 0);
	var bFade = sprRGB(colorFade, 1);
	var gFade = sprRGB(colorFade, 2);
	
	// 步数统计
	var step = 0;
	// 设置定时器
	var fadeTimer = setInterval(
	function()
	{
		var tmpStep = fadeStep - step;
		// 由于 floor() 计算不准确，当达到指定步数后直接赋值源色彩
		if(step < fadeStep)
		{
			with(Math)
			{
				var rStep = floor((rSource - rFade) / tmpStep);
				var gStep = floor((gSource - gFade) / tmpStep);
				var bStep = floor((bSource - bFade) / tmpStep);
			}
			rFade += rStep;
			gFade += gStep;
			bFade += bStep;
			
			if(background)
			{
				element.style.backgroundColor = 'rgb('+rFade+','+bFade+','+gFade+')';
			}
			else
			{
				element.style.color = 'rgb('+rFade+','+bFade+','+gFade+')';
			}
		}
		else
		{
			if(background)
			{
				element.style.backgroundColor = colorSource;
			}
			else
			{
				element.style.color = colorSource;
			}
			
			// 清除定时器
			clearInterval(fadeTimer);
		}
		step ++;
	}, 20);
} 	

// 分离RGB颜色 0:R | 1:G | 2:B
function sprRGB(color, type)
{
	var start, len, result;
	len = (color.length == 4)?1:2;
	start = type * len + 1;
	result = color.substr(start, len);
	if(result.length == 1)
	{
		result += result;
	}
	return parseInt(result, 16);
} 

//出处:网上搜集
//made by yaosansi 2005-12-02
//For more visit http://www.yaosansi.com
// Trim() , Ltrim() , RTrim()

String.prototype.Trim = function() 
{ 
return this.replace(/(^\s*)|(\s*$)/g, ""); 
} 

String.prototype.LTrim = function() 
{ 
return this.replace(/(^\s*)/g, ""); 
} 

String.prototype.RTrim = function() 
{ 
return this.replace(/(\s*$)/g, ""); 
} 

function go_check()
{
	var gto = object("goods_total");

	if (gto == null)
	{
		alert("页面错误");
		window.location.reload();
		return;
	}

	var gt = gto.innerHTML;
	if (gt != parseInt(gt))
	{
		alert("页面错误");
		window.location.reload();
		return;
	}

	if (gt == 0)
	{
		alert("您没有选择商品");
		return;
	}
	window.location.href = "profile.order.php";
}

var bigpic_cur = 0;
function changebigpic()
{
	var bp = object("bigpic");
	if (bp == null)
	{
		return;
	}
	bigpic_cur++;
	if (bigpic_cur >= bigpic_arr.length)
	{
		bigpic_cur = 0;
	}

	bp.innerHTML = bigpic_arr[bigpic_cur];
}

function viewbigpic(fileurl)
{
	var retbigpic = window.showModelessDialog(fileurl,"ddd","scroll:no;dialogTop:20;dialogLeft:20;dialogHeight:800px;dialogWidth:800px;status:no;help:no");
}


function check_address(f)
{
	if (f == null)
	{
		return false;
	}

	f.consignee.value = f.consignee.value.Trim();
	if (f.consignee.value == "")
	{
		alert("请输入收货人信息");
		f.consignee.focus();
		return false;
	}

	f.email.value = f.email.value.Trim();
	if (f.email.value == "")
	{
		alert("请输入正确的email信息");
		f.email.focus();
		return false;
	}

	//var myReg = /^[a-z]([a-z0-9]*[-_]?[a-z0-9]+)*@([a-z0-9]*[-_]?[a-z0-9]+)+[\.][a-z]{2,3}([\.][a-z]{2})?$/i;
	//var myReg = /^[a-z0-9._%-]+@[a-z0-9._%-]+\.[a-z]{2,4}$/
	//if(!/(\S)+[@]{1}(\S)+[.]{1}(\w)+/.test(f.email.value))
	//if( myReg.test(f.email.value) == false)
	//{
	//	alert("请输入正确的email信息");
		//email.focus();
	//	return false;
	//}

	if (f.province.selectedIndex == 0 || f.city.selectedIndex == 0)
	{
		alert("请选择地址");
		return false;
	}

	f.address.value = f.address.value.Trim();
	if (f.address.value == "")
	{
		alert("请输入详细地址");
		f.address.focus();
		return false;
	}

	f.zipcode.value = f.zipcode.value.Trim();
	//if (f.zipcode.value == "")
	//{
	//	alert("请输入邮编");
	//	f.zipcode.focus();
	//	return false;
	//}

	f.phone.value = f.phone.value.Trim();
	f.mobile.value = f.mobile.value.Trim();
	if (f.mobile.value == "")
	{
		alert("请输入手机号码");
		f.mobile.focus();
		return false;
	}

	f.signbuilding.value = f.signbuilding.value.Trim();
	f.besttime.value = f.besttime.value.Trim();

	return true;
}

function checklogin()
{
  var errinfo = object("err_info");
  errinfo.innerHTML = "";

  var uname = object("i_username");
  uname.value = uname.value.Trim();
  if (uname.value == "")
  {
    errinfo.innerHTML = "请输入用户名";
    return false;
  }

  var aspam = object("i_antispamex");
  aspam.value = aspam.value.Trim();

  if (aspam.value == "" || aspam.value.length != 4)
  {
    errinfo.innerHTML = "请输入正确的验证码";
    return false;
  }

  return true;
}

function check_register(f)
{
	if (f == null)
	{
		return false;
	}

	errinfo = object("err_info");
	errinfo.innerHTML = "";
	
	f.username.value = f.username.value.Trim();
	if (f.username.value == "")
	{
		errinfo.innerHTML = "请输入用户名";
		f.username.focus();
		return false;
	}

	f.email.value = f.email.value.Trim();
	if (f.email.value == "")
	{
		errinfo.innerHTML = "请输入正确的email信息";
		f.email.focus();
		return false;
	}

	//var myReg = /^[a-z]([a-z0-9]*[-_]?[a-z0-9]+)*@([a-z0-9]*[-_]?[a-z0-9]+)+[\.][a-z]{2,3}([\.][a-z]{2})?$/i;
	//var myReg = /^[a-z0-9._%-]+@[a-z0-9._%-]+\.[a-z]{2,4}$/
	//if(!/(\S)+[@]{1}(\S)+[.]{1}(\w)+/.test(f.email.value))
	//if( myReg.test(f.email.value) == false)
	//{
	//	alert("请输入正确的email信息");
		//email.focus();
	//	return false;
	//}

	//if (!(f.province.selectedIndex > -1 && f.city.selectedIndex > -1))
	//{
	//	alert("请选择地址");
	//	return false;
	//}

	if (f.password.value == "" || f.password.value != f.confpass.value)
	{
		errinfo.innerHTML = "请输入正确的密码";
		f.password.focus();
		return false;
	}

	f.antispamex.value = f.antispamex.value.Trim();
	if (f.antispamex.value == "" || f.antispamex.value.length != 4)
	{
		errinfo.innerHTML = "请输入正确的验证码";
		f.antispamex.focus();
		return false;
	}

	return true;
}

function check_profile(f)
{
	if (f == null)
	{
		return false;
	}

	errinfo = object("err_info");
	errinfo.innerHTML = "";

	f.email.value = f.email.value.Trim();
	if (f.email.value == "")
	{
		errinfo.innerHTML = "请输入正确的email信息";
		f.email.focus();
		return false;
	}

	if (f.password.value != "")
	{
		if (f.oldpass.value == "")
		{
			errinfo.innerHTML = "请输入正确的旧密码";
			f.oldpass.focus();
			return false;
		}
		if (f.password.value != f.confpass.value)
		{
			errinfo.innerHTML = "请输入正确的新密码";
			f.password.focus();
			return false;
		}
	}

	f.antispamex.value = f.antispamex.value.Trim();
	if (f.antispamex.value == "" || f.antispamex.value.length != 4)
	{
		errinfo.innerHTML = "请输入正确的验证码";
		f.antispamex.focus();
		return false;
	}

	return true;
}

function check_profile_password(f)
{
	if (f == null)
	{
		return false;
	}

	errinfo = object("err_info");
	errinfo.innerHTML = " ";

	f.username.value = f.username.value.Trim();
	f.email.value = f.email.value.Trim();
	if (f.username.value == "" && f.email.value == "")
	{
		errinfo.innerHTML = "请输入注册时的用户名或电子邮件";
		f.email.focus();
		return false;
	}

	f.antispamex.value = f.antispamex.value.Trim();
	if (f.antispamex.value == "" || f.antispamex.value.length != 4)
	{
		errinfo.innerHTML = "请输入正确的验证码";
		f.antispamex.focus();
		return false;
	}

	return true;
}

function check_giftcard(f)
{
	if (f == null)
	{
		return false;
	}

	errinfo = object("err_info");
	errinfo.innerHTML = "";

	f.hash.value = f.hash.value.Trim();
	if (f.hash.value == "" || f.hash.value.length != 12)
	{
		errinfo.innerHTML = "请输入正确的礼品卡验证码";
		f.hash.focus();
		return false;
	}

	f.antispamex.value = f.antispamex.value.Trim();
	if (f.antispamex.value == "" || f.antispamex.value.length != 4)
	{
		errinfo.innerHTML = "请输入正确的图片验证码";
		f.antispamex.focus();
		return false;
	}

	return true;
}


function getAbsPoint(e)
{
	if (e == null)
	{
		return;
	}

	var x = e.offsetLeft, y = e.offsetTop;
	while(e=e.offsetParent){x += e.offsetLeft; y += e.offsetTop;}
	x = x + 2;
	y = y + 2;

	return {"x": x, "y": y};
}



function do_echo()
{
	if (xmlhttp.readyState == 4)
	{
		if (xmlhttp.status == 200)
		{
			if (xmlhttp.responseText != "")
			{
				alert(xmlhttp.responseText);
			}
		}
	}
}

function do_echo_reload()
{
	if (xmlhttp.readyState == 4)
	{
		if (xmlhttp.status == 200)
		{
			if (xmlhttp.responseText == "")
			{
				// maybe error
				location.reload();
			}
			else
			{
				var ret = xmlhttp.responseText;
				ret_arr = ret.split("|");
				if (ret_arr[0] == 0)
				{
					//do nothing
					return;
				}
				else if (ret_arr[0] == 1)
				{
					// do not reload
					alert(ret_arr[1]);
					return;
				}
				else if (ret_arr[0] == 2)
				{
					// alert and reload
					alert(ret_arr[1]);
					location.reload();
					return;
				}
				else
				{
					// reload only
					location.reload();
					return;
				}
			}
		}
	}
}


String.prototype.trim=function(){
        return this.replace(/(^\s*)|(\s*$)/g, "");
}
String.prototype.ltrim=function(){
        return this.replace(/(^\s*)/g,"");
}
String.prototype.rtrim=function(){
        return this.replace(/(\s*$)/g,"");
}

function select_init(select, init_str)
{
	var s = document.getElementById(select);

	s.selectedIndex = 0;

	for (i = 0; i < s.options.length; i++)
	{
		if (s.options[i].value == init_str)
		{
			s.selectedIndex = i;
		}
	}
}

function check_init(check, init_str)
{
	var cs = document.getElementsByName(check);
	var cl = cs.length;

	for (var i = 0; i < cl; i++)
	{
		cs[i].checked = false;
	}
	if (init_str == "")
	{
		return;
	}

	var ia = init_str.split(",");
	var il = ia.length;

	for (var i = 0; i < il; i++)
	{
		for (var j = 0; j < cl; j++)
		{
			if (ia[i] == cs[j].value)
			{
				cs[j].checked = true
			}
		}
	}
}

function shopping_pre_step()
{
	var step = object("step");
	step.value = parseInt(step.value) - 1;

	var f = object("shopping_form");
	f.submit();
}

function shopping_next_step()
{
	var f = object("shopping_form");

	var step = object("step");
	var v = step.value;
	if (v == 2)
	{
		// 验证地址
		if (check_address(f) == false)
		{
			return;
		}
	}
	else if (v == 4)
	{
		if (checkradio("paymentid", "请选择支付方式") == false)
		{
			return;
		}
	}
	step.value = parseInt(step.value) + 1;
	f.submit();
}

function shopping_save_car()
{
	var f = object("shopping_form");
	f.submit();
}

function shopping_check_step()
{
	var gpo = object("igp_total");
	if (gpo == null)
	{
		alert("参数错误");
		location.reload();
	}

	if (gpo.innerHTML == 0)
	{
		var bo = object("ibonus_total");
		if (bo == null || bo.innerHTML == 0)
		{
			alert("您没有选择商品");
		}
		else
		{
			if (confirm("单独兑换礼品，您还需要另付运费"))
			{
				shopping_next_step();
			}
		}
	}
	else
	{
		shopping_next_step();
	}
}