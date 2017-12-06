
var goNative = false;
var base ='http://lingdao.spicu.com.cn/leaderApp133/';
// var base ='http://120.52.98.247:8080/leaderApp133/';
// var projectId="774061afc37f11e7ba00fa163e748df7";
//获取token
var token = '?token='+window.sessionStorage.getItem('token');
 // var token = '?token='+"C82C2C3C507F397EF9A27E5BDB792005";
//公益项目主键查询
getProById = base + '/wealPro/getProById' + token;
//发起机构主键查询
getSponById = base + '/commweal/getSponById' + token;
//爱心添加
cliclLove = base + '/weal/addUpvoteById'+ token;
//爱心取消
delLove = base+'/weal/delUpvoteById'+token;

//图片上传
fileUpload = base+'/weal/fileUpload'+ token;
//确定帮扶关系
addOrUpDonorAndUser = base+'/wealDurs/addOrUpDonorAndUser'+ token;

//获取捐助记录
getDonationRecordsById = base + '/wealRecord/getDonationRecordsById'+ token;

//查询留言列表
getCommentByProId = base +'/wealComment/getCommentByProId'+ token;

//捐款记录
donationRecord = base+ '/wealRecord/getDonationRecordsById'+ token;

//首页捐助信息轮播
swiper = base+ '/wealRecord/getDonationRecordsByProId'+ token;

//捐助对象列表
getDonListByPage = base +'/wealDonor/getDonListByPage'+ token;

//帮扶对象换一换
checkoutObject =  base + '/wealDonor/getDonById'+ token;


//查询项目进展
getProgressesByPage = base+'/wealProgress/getProgressesByPage'+ token;

addComment =base+'/wealComment/addComment'+ token;
//请求图片资源
imgFile = base+'/weal/file';
//图片上传
fileUpload = base+'/weal/fileUpload'+token;

//上传帮扶进展
addOrUpProgress = base+'/wealProgress/addOrUpProgress'+token;
//获取用户信息
getUserInfo = base+'/weal/getUserInfo'+token;

//上传凭证的金额
addOrUpDonationRecord = base+'/wealRecord/addOrUpDonationRecord'+token;

//捐赠记录
donationRecord1 = base+'/wealDurs/getProsByPage'+token;

getStatusHasContactedAll = base+'/wealPro/getStatusHasContactedAll'+token;

//项目列表
getProListByPage = base+'/wealPro/getProListByPage'+token;

//统计浏览记录
addWealProBrowser = base+'/wealPro/addWealProBrowser'+token;