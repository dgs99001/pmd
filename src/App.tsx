import React from 'react';

const marqueeText = "长期招商，年入百万。添加（泡泡密语）客服号：227090165";

const apps = [
   
   { 
    id: 23, 
    name: "领航国际", 
    description: "", 
    iconUrl: "https://pic1.imgdb.cn/item/69f4835ec16184acf99e4245.jpg",
    url: "https://rsesra.hfjcl.com/app/register.php?site_id=1064&pt=FA9067F8-D104-5451-A6AB-960962BAB808",
  },{ 
    id: 1 , 
    name: "汇赢国际", 
    description: "", 
    iconUrl: "https://pic1.imgdb.cn/item/69da7d4e757fdade5eafac10.jpg",
    url: "https://ncgca.tprsmi.com/app/register.php?site_id=1062&topId=13593&selfPlanId=918",
  },
  { 
    id: 1, 
    name: "君临国际", 
    description: "", 
    iconUrl: "https://pic1.imgdb.cn/item/695248a74b4fb88febf26626.jpg",
    url: "https://tfajn.hcjwj.com/app/register.php?site_id=2081&topId=23647&selfPlanId=6413",
  },
     {
    id: 21,
    name: "梦想国际",
    description: "",
    iconUrl: "https://i.postimg.cc/hPT71YSf/meng-xiang-guo-ji.jpg",
    url: "https://mgokgd.jgqvji.com/app/register.php?site_id=1061&pt=08A0E1AF-96B3-A9C8-6E51-1D02FD14ABAC",
  },
     {
    id: 2,
    name: "新时代",
    description: "",
    iconUrl: "https://i.postimg.cc/t4SjcBzw/xin-shi-dai.jpg",
    url: "https://derear.fnbpsw.com/app/register.php?site_id=1059&topId=82351&selfPlanId=144338",
  },
  { 
    id: 3, 
    name: "胜天国际", 
    description: "", 
    iconUrl: "https://i.postimg.cc/D05BSg6D/xin-sheng-tian-guo-ji.jpg",
    url: "https://tfajn.hcjwj.com/app/register.php?site_id=1058&topId=26442&selfPlanId=1692",
  },
   { 
    id: 4, 
    name: "非凡娱乐", 
    description: "", 
    iconUrl: "https://pic1.imgdb.cn/item/68692e6658cb8da5c89176fd.jpg",
    url: "https://wcwx.paradisemall.net/app/register.php?site_id=1050&topId=880722&selfPlanId=855049",
  },
    { 
    id: 6, 
    name: "top1体育", 
    description: "", 
    iconUrl: "https://i.postimg.cc/FzGDYZpB/xin-TOP-ti-yu.jpg",
    url: "https://bakmry.gziasti.com/app/register.php?site_id=1051&topId=457911",
  },
  { 
    id: 10, 
    name: "NG体育", 
    description: "", 
    iconUrl: "https://pic1.imgdb.cn/item/68b3af8358cb8da5c8655b32.jpg",
    url: "https://nvjmce.hfjcl.com/app/register.php?site_id=1019&topId=10325130",
  },
   { 
    id: 11, 
    name: "旺财28", 
    description: "", 
    iconUrl: "https://pic1.imgdb.cn/item/68b3af7e58cb8da5c8655b00.png",
    url: "https://wlkyiy.paradisemall.net/app/register.php?site_id=1012&topId=3926701",
  },
   { 
    id: 12, 
    name: "赏金国际", 
    description: "", 
    iconUrl: "https://pic1.imgdb.cn/item/688c1d0e58cb8da5c8f69d23.jpg",
    url: "https://xjvueb.hefaship.com/app/register.php?site_id=1010&topId=3094701",
  },
   { 
    id: 13, 
    name: "问鼎娱乐", 
    description: "", 
    iconUrl: "https://i.postimg.cc/FR5hjNf0/wen-ding-guo-ji.webp",
    url: "https://onkrcy.hefaship.com/app/register.php?site_id=1020&topId=21543657",
  },
   { 
    id: 14, 
    name: "亿万28", 
    description: "", 
    iconUrl: "https://pic1.imgdb.cn/item/68a570b358cb8da5c83d12f9.jpg",
    url: "https://xjvueb.hefaship.com/app/register.php?site_id=1017&topId=7061046",
  },
  { 
    id: 15, 
    name: "征途国际", 
    description: "", 
    iconUrl: "https://pic1.imgdb.cn/item/68692e6658cb8da5c89176fc.jpg",
    url: "https://pkajim.hfjcl.com/app/register.php?site_id=1031&topId=1890399",
  },
  { 
    id: 16, 
    name: "壹号娱乐", 
    description: "", 
    iconUrl: "https://pic1.imgdb.cn/item/688c1d0e58cb8da5c8f69d21.webp",
    url: "https://gfvgx.jgqvji.com/app/register.php?site_id=800&pt=20784FBB-9EDA-E1C7-A955-C82CA771D0F3",
  },
  { 
    id: 17, 
    name: "多多28", 
    description: "", 
    iconUrl: "https://pic1.imgdb.cn/item/686f644658cb8da5c899de0b.png",
    url: "https://wlkyiy.paradisemall.net/app/register.php?site_id=1021&topId=5519693",
  },
{ 
    id: 18, 
    name: "巅峰国际", 
    description: "", 
    iconUrl: "https://pic1.imgdb.cn/item/68692e6658cb8da5c89176f8.jpg",
    url: "https://gfvgx.jgqvji.com/app/register.php?site_id=1030&topId=1744632",
  },
{ 
    id: 20, 
    name: "NG南宫", 
    description: "", 
    iconUrl: "https://pic1.imgdb.cn/item/689dd5ec58cb8da5c8251893.jpg",
    url: "https://149.30.163.235:32011/#/link?allwin=BT8jp798vc163kFA9xyh2g%3D%3D",
  },
    {
    id: 21,
    name: "28圈",
    description: "",
    iconUrl: "https://pic1.imgdb.cn/item/68692e6658cb8da5c89176f9.jpg",
    url: "https://149.30.210.144:35384/#/link?allwin=7qsbWl9437468",
  },
  { 
    id: 22, 
    name: "超凡国际", 
    description: "", 
    iconUrl: "https://pic1.imgdb.cn/item/68692e6558cb8da5c89176f7.jpg",
    url: "https://pkajim.hfjcl.com/app/register.php?site_id=1032&topId=1056008",
  },
];

function App() {
  const handleAppClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* 顶部跑马灯区域 */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 py-4 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative flex whitespace-nowrap">
          <div className="animate-marquee flex-shrink-0">
            <span className="text-white text-sm sm:text-base md:text-lg font-semibold tracking-wider">
              {marqueeText}
            </span>
          </div>
          <div className="animate-marquee flex-shrink-0">
            <span className="text-white text-sm sm:text-base md:text-lg font-semibold tracking-wider">
              {marqueeText}
            </span>
          </div>
          <div className="animate-marquee flex-shrink-0">
            <span className="text-white text-sm sm:text-base md:text-lg font-semibold tracking-wider">
              {marqueeText}
            </span>
          </div>
        </div>
      </div>

      {/* 中部文字描述区域 */}
      <div className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <img 
            src="https://i.postimg.cc/CMmj9KVF/pao-ma-deng-zhi-ding4.png" 
            alt="应用" 
            className="w-full max-w-2xl h-auto mx-auto rounded-lg shadow-lg object-cover mb-8"
          />
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* 底部APP展示区域 */}
      <div className="pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            {apps.map((app) => (
              <div
                key={app.id}
                onClick={() => handleAppClick(app.url)}
                className="group bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-2 sm:p-3 text-center cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-opacity-20 hover:shadow-2xl border border-white border-opacity-20"
              >
                <div className="rounded-xl mx-auto mb-1.5 w-10 h-10 sm:w-12 sm:h-12 overflow-hidden transform transition-transform group-hover:rotate-6 shadow-lg">
                  <img 
                    src={app.iconUrl} 
                    alt={app.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white font-semibold text-xs sm:text-sm mb-0.5 sm:mb-1 group-hover:text-blue-300 transition-colors leading-tight">
                  {app.name}
                </h3>
                <p className="text-gray-400 text-xs leading-tight px-0.5">
                  {app.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 横向广告区域 */}
      <div className="px-4 pb-4">
        <div className="max-w-6xl mx-auto">
          <a
            href="https://www.paopaomiyu.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full group"
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg bg-gradient-to-r from-purple-600 to-blue-600 p-1">
              <img
                src="https://i.postimg.cc/gk2xhyQZ/pao-pao-mi-yu222.webp"
                alt="旺旺商聊"
                className="w-full h-auto object-contain rounded-md"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 rounded-md transition-opacity duration-300 group-hover:bg-opacity-10"></div>
            </div>
          </a>
        </div>
      </div>

      {/* 底部装饰 */}
      <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
    </div>
  );
}

export default App;