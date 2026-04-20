/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Phone, 
  MessageCircle, 
  ArrowRight, 
  Truck, 
  Sparkles, 
  Camera, 
  CheckCircle, 
  ChevronDown,
  Instagram,
  Facebook,
  MapPin,
  Clock
} from "lucide-react";
import { useState } from "react";

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-primary/5">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="text-xl font-bold font-serif tracking-tight text-primary">
        동국꽃집 <span className="font-normal text-sm opacity-60">(카리스플라워)</span>
      </div>
      <div className="hidden md:flex items-center space-x-8">
        {["Products", "Delivery", "Reviews", "Corporate", "FAQ"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-xs uppercase tracking-widest font-semibold text-secondary hover:text-primary transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
      <div className="flex items-center space-x-6">
        <button className="text-primary hover:scale-110 transition-transform">
          <MessageCircle className="w-5 h-5" />
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-20 overflow-hidden bg-primary">
    <div className="absolute inset-0 opacity-20 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuDdj-hbqbwEZIWD3ozKax94Ee-RShg_Ngmga6DlQQyLamXJVtpkz9hO1LASf9LTVErBb3dksTFBmVIFJuLi5XJEXc9KU_cq_EGWScWovLgWKx1v00fg8M2BDANYQ0555CIZbbhYtCKKNQvWpnOI4VaorA_zeLwDMkyfMrPUz1_Jco99qwKfIjMWgaGcb3kAiUwcOmKRMkNS1YQqlomxw0VchzfM5s5wX5CYM6ytLUq59mS1y3__h8YVxQ_CjoI47FbzF4b4hx5dkx20')] bg-cover bg-center" />
    <div className="max-w-7xl mx-auto px-6 py-32 relative z-10 editorial-grid items-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="col-span-12 lg:col-span-7 space-y-8"
      >
        <div className="inline-block px-4 py-1.5 bg-primary-container text-on-primary-container rounded-full text-[10px] font-bold uppercase tracking-[0.2em]">
          Premium Floral Service
        </div>
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-luxury text-surface leading-[0.9] font-light tracking-tighter whitespace-nowrap">
          Caris <span className="italic font-medium text-secondary-container">Flower</span>
          <div className="text-[28px] md:text-[36px] mt-8 font-sans font-normal text-[#fba70e] tracking-wide whitespace-normal">
            화환 전국 꽃배달 전문점
          </div>
          <div className="text-[30px] md:text-[37px] mt-6 font-sans font-medium tracking-[0.1em] uppercase text-[#f7a118] whitespace-normal">
            마음을 전하는 가장 품격 있는 방법
          </div>
        </h1>
        <p className="text-xl text-surface/80 max-w-2xl font-light leading-relaxed italic">
          "축하의 자리에는 아름다운 축복을, <br className="hidden md:block" /> 위로의 자리에는 정중한 마음을 담아 전해드립니다."
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <button className="px-10 py-5 bg-secondary-container text-primary font-bold rounded-2xl flex items-center gap-3 group hover:scale-110 hover:bg-white transition-all shadow-2xl animate-pulse hover:animate-none">
            온라인 바로 주문하기 <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
          <button className="px-8 py-5 bg-surface text-primary font-bold rounded-2xl flex items-center gap-3 hover:bg-surface-container-high transition-all shadow-lg group">
            <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" /> 전화 주문
          </button>
          <button className="px-8 py-5 bg-white/10 backdrop-blur-md text-surface font-semibold rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
            카카오톡 상담
          </button>
        </div>
      </motion.div>
      <div className="hidden lg:flex col-span-5 relative justify-center">
        <motion.div 
          initial={{ opacity: 0, rotate: 12, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 12, scale: 0.9 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-[85%] aspect-[4/5] bg-surface-container-low rounded-3xl overflow-hidden shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1676872718664-25dc528a9228?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fCVFQSVCMiVCMCVFRCU5OCVCQyVFQyU4QiU5RCUyMCVFRCU5OSU5NCVFRCU5OSU5OHxlbnwwfHwwfHx8MA%3D%3D" 
            alt="Feature arrangement"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

const BrandValues = () => (
  <section className="py-16 bg-surface floral-texture">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <span className="text-secondary font-bold tracking-[0.2em] uppercase text-[10px]">Our Philosophy</span>
        <h2 className="text-4xl font-serif mt-4 text-primary font-normal">신속, 전문성, 그리고 진심</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: Truck, title: "전국 3시간 배송", desc: "전국 어디든 주문 즉시 가장 가까운 전문 플로리스트가 제작하여 3시간 이내에 정확히 전달합니다." },
          { icon: Sparkles, title: "플로리스트의 수작업", desc: "단순한 상품이 아닙니다. 20년 경력의 수석 플로리스트들이 꽃 한 송이마다 정성을 다해 고귀함을 담습니다." },
          { icon: Camera, title: "실시간 안심 서비스", desc: "제작 완료 후와 배송 완료 후, 실제 상품 사진을 고객님께 즉시 전송하여 믿음을 드립니다." },
        ].map((value, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -10 }}
            className="p-8 bg-surface-container-low/50 rounded-3xl border border-primary/5 hover:bg-surface-container-low transition-colors duration-500"
          >
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
              <value.icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-serif mb-4 text-primary">{value.title}</h3>
            <p className="text-primary/60 leading-relaxed font-light">{value.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Products = () => {
  const [activeTab, setActiveTab] = useState("전체보기");
  const tabs = ["전체보기", "개업/이전 축하", "장례식 근조", "기업 대량 주문"];
  
  const items = [
    { id: 1, tag: "BEST", name: "축하 3단 화환", price: "90,000원~", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAxMzFfNzgg%2FMDAxNTgwNDU4NjEyNjY5.FPnh3KmfsAfEAol56llTy9Gk8ciJc3n0pxj25yJFchQg.7ICEA8GBZaY_D0AhkUvSf380V_02mk7_6QPlCjzJGVQg.JPEG.mazzo507%2F%25C3%25E0%25C7%25CF%25C8%25AD%25C8%25AF70-1.jpg" },
    { id: 2, name: "품격 근조 3단 화환", price: "120,000원~", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAyMTBfMjUy%2FMDAxNTgxMzAzNjU0OTI0.iDzIR_Pu2K12TYknpHq8KmknHDvvnU9FE6NmY3vlQuwg.obBuiNV3HJtuOjPiCx1SZuc4_S6BcijLlaxdOQHfAJIg.JPEG.mazzo507%2FKakaoTalk_20200210_115139863.jpg" },
    { id: 3, name: "공기정화 명품 금전수", price: "85,000원~", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRc1M0LpJuisO7B3JO5UIrD9xQfVNHmV0Mys9cb5rJ1BCQ2jfM_ZYmO-618hn-WbVNlHthsjXeaqQIH0COp9hpGKuS1aTbBr9NcaE__VGlMUDqDQCNzqq0lj_KFqvykjSFb2srOIlQlY-dBpNFUMzdsAXof3LbdUDquxrIBouDqMt2EbLSDTr9PwkjBLZsJ1BUZN9UrKef8C4PCWMNKtwcJWXMlxKwQMDb9g8Lr4sLGS5pGHP2MNG1eHjPAaMf6knI9vaT0J_GHbWf" },
    { id: 4, name: "축하꽃바구니", price: "100,000원~", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAxMjBfMjAy%2FMDAxNTc5NDg0NDQwMTYy.bntvdpmzhmKZkLRgdJe0qafUsr2HLTB1z0T5JXRBd3Ag.dY9n3G-LyBQ9nlMouLuNnw05mvnVZVvppzIOu3JoL44g.JPEG.caris9004%2F111.jpg" },
  ];

  return (
    <section id="products" className="py-32 bg-surface-container-low/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-[10px]">Collection</span>
            <h2 className="text-4xl font-serif mt-4 text-primary font-normal leading-tight">Best Masterpieces</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {tabs.map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                  activeTab === tab 
                    ? "bg-primary text-surface shadow-md" 
                    : "bg-white text-primary/40 hover:bg-white hover:text-primary border border-primary/5 shadow-sm"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map(item => (
            <motion.div 
              key={item.id}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6 bg-white shadow-sm border border-primary/5">
                <img 
                  src={item.img} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                {item.tag && (
                  <div className="absolute top-4 left-4 bg-primary text-surface px-3 py-1 text-[10px] font-bold tracking-widest uppercase">
                    {item.tag}
                  </div>
                )}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
              </div>
              <h4 className="text-lg font-serif text-primary mb-1 text-center">{item.name}</h4>
              <p className="text-primary font-bold text-sm tracking-tight text-center">{item.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DeliveryProcess = () => (
  <section id="delivery" className="py-16 bg-primary text-surface relative overflow-hidden">
    <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
      <h2 className="text-3xl font-serif mb-4 italic font-light opacity-90">How it Reaches You</h2>
      <p className="text-surface/50 font-light text-xs tracking-widest uppercase mb-12">가장 완벽한 상태로 전달되기 위한 카리스의 3단계 약속</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 relative">
        <div className="hidden md:block absolute top-[30px] left-0 w-full h-[1px] bg-white/20 z-0" />
        {[
          { num: "01", title: "간편 접수", desc: "전화, 온라인, 카톡을 통해 전문 상담원과 즉시 연결됩니다." },
          { num: "02", title: "즉시 제작", desc: "가장 싱싱한 소재를 엄선하여 전문 플로리스트가 디자인합니다." },
          { num: "03", title: "신속 배송", desc: "특수 배송 차량을 이용하여 약속한 시간에 안전하게 도착합니다." },
        ].map((step, idx) => (
          <div key={idx} className="flex flex-col items-center relative z-10">
            <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center text-primary font-bold text-xl mb-6 border-[4px] border-primary-container shadow-2xl">
              {step.num}
            </div>
            <h3 className="text-lg font-serif mb-3 text-secondary-container">{step.title}</h3>
            <p className="text-surface/60 font-light text-xs leading-relaxed max-w-[180px]">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const BentoReviews = () => (
  <section id="reviews" className="py-16 bg-surface">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-7 flex flex-col gap-6">
          <div className="p-6 bg-surface-container-low/40 rounded-[2rem] relative overflow-hidden group">
            <span className="text-primary/5 text-8xl font-serif absolute -top-6 -right-6 transition-transform group-hover:scale-110 duration-500 italic">“</span>
            <div className="relative z-10">
              <p className="text-lg font-serif text-primary mb-4 leading-relaxed font-light">
                "중요한 VIP 행사라 걱정이 많았는데, 사진으로 미리 보내주신 상품이 너무 훌륭해서 안심했습니다. 덕분에 제시간에 잘 도착했습니다."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-secondary-container rounded-full overflow-hidden border-2 border-white/50 shadow-sm">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzyPaYOXqHkNrqHHxSMoWpLqaaAnIMFlqJuARhKUMcWSgQ6Sb7kyWy1uLX74GUD1z_nxbTPr5QvZYqokzCWTAlWphKFAVpfbiMES6iuYSloRjwwkTAO6M9iNOHV0ea7ZgbBl7ULuShZ_FZoMOMdEWlIWQuqhNYE2i-Hf7P4y34N4pByYxI3QJrRip2EfJCt9ynr1XtNOtQqHc2v2_tBjkysca0vpCb58j8EMJMLuhNBtYzGQ4AxKzeQRLdhEOoPRVHXkJa1_bk-ywJ" alt="Client" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="font-bold text-primary text-xs">김태형 대표님</p>
                  <p className="text-[9px] text-primary/40 uppercase tracking-widest font-bold">T-Tech International</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 bg-surface-container-high/30 rounded-[2rem] relative overflow-hidden group">
            <div className="relative z-10">
              <p className="text-lg font-serif text-primary mb-4 leading-relaxed font-light">
                "항상 믿고 맡기는 곳입니다. 대량 주문도 오차 없이 정시 배송해주셔서 기업 담당자 입장에서 이보다 편할 수 없네요."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-secondary-container rounded-full overflow-hidden border-2 border-white/50 shadow-sm">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAubr8TwUvtL4rQs2NnylZNI5spEOStyODxFzNhT6OM6aAtBgMjTA-Yy_lAVyIIp8qVq-ySsglB27V4wuEXPYuIhZU4qzHrg0QBkhNQG4lZmJTnv3RS65SZS_zhKhp-lqj0l9Dyv25bjCvY7vyDNO2re_0vJjvmNa2f2VPETP9oWjAXqH2Cm-QIIcZNjkcRM_s-ZHLmJ-YjHCtyxESNOwQyyApWbJQEsVQevriJeizPgVoBQzrKIJ9HMG9Xca_BbiXa6Jokdr_fDA74" alt="Client" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="font-bold text-primary text-xs">이은주 팀장님</p>
                  <p className="text-[9px] text-primary/40 uppercase tracking-widest font-bold">Global Logistics PR Team</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 bg-surface-container-low/60 rounded-[2rem] relative overflow-hidden group">
            <div className="relative z-10">
              <p className="text-lg font-serif text-primary mb-4 leading-relaxed font-light">
                "어머니 생신 선물로 꽃바구니 주문했는데 정말 풍성하고 예뻤어요. 배송 문자도 바로 오고 서비스가 너무 좋아요."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-secondary-container rounded-full overflow-hidden border-2 border-white/50 shadow-sm">
                  <img src="https://picsum.photos/seed/customer3/100/100" alt="Client" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="font-bold text-primary text-xs">박수민 님</p>
                  <p className="text-[9px] text-primary/40 uppercase tracking-widest font-bold">네이버 예약 구매자</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="corporate" className="col-span-12 lg:col-span-5 p-8 bg-primary rounded-[2.5rem] text-surface flex flex-col justify-between shadow-2xl">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 bg-secondary-container rounded-full animate-pulse" /> Corporate Partner
            </div>
            <h2 className="text-2xl md:text-3xl font-serif mb-6 leading-tight font-light">기업 맞춤형 대량 주문<br />& 정기 배송</h2>
            <p className="text-surface/60 mb-8 leading-relaxed font-light">
              정기적인 화환 관리가 필요하신가요? <br className="hidden md:block" />
              기업 전담 매니저가 일대일 매칭되어 귀사의 격에 맞는 꽃배달 서비스를 설계해 드립니다.
            </p>
            <ul className="space-y-4 mb-10 text-left self-start">
              {[
                "법인 결제 및 후불 결제 지원",
                "분기별 리포트 및 통합 관리 시스템",
                "전담 고객 센터 우선 연결",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-sm text-surface/80 font-light">
                  <CheckCircle className="w-5 h-5 text-secondary-container opacity-80" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <button className="w-full py-5 bg-secondary-container text-primary font-bold rounded-2xl hover:bg-white transition-all transform hover:-translate-y-1 active:translate-y-0 shadow-lg">
            기업 제휴 문의하기
          </button>
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const questions = [
    { q: "당일 배송이 가능한가요?", a: "네, 전국 어디든 주문 완료 후 최대 3시간 이내에 배송이 가능합니다. (산간 도서 지역 제외)" },
    { q: "리본 문구는 어떻게 작성하나요?", a: "주문 시 옵션에서 선택하시거나, 원하시는 문구를 자유롭게 입력하실 수 있습니다. 축하/근조에 맞는 예시 문구도 함께 제공해 드립니다." },
    { q: "실제 배송되는 상품 사진을 볼 수 있나요?", a: "카리스의 '안심 배송 서비스'를 통해 배송 전 상품 사진과 배송 완료 후 현장 사진을 카카오톡이나 문자로 전송해 드립니다." },
  ];

  return (
    <section id="faq" className="py-16 bg-surface-container-low/30">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif text-primary font-normal">자주 묻는 질문</h2>
        </div>
        <div className="space-y-4">
          {questions.map((item, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-2 shadow-sm border border-primary/5">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex justify-between items-center px-6 py-5 text-left group"
              >
                <span className="font-bold text-lg text-primary/80 group-hover:text-primary transition-colors">{item.q}</span>
                <ChevronDown className={`w-5 h-5 text-primary/30 transition-transform duration-500 ${openIdx === idx ? 'rotate-180 text-primary' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIdx === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 py-6 pt-0 text-primary/60 font-light leading-relaxed text-base border-t border-primary/5 mx-2">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => (
  <section className="py-12 relative overflow-hidden bg-primary">
    <div className="absolute inset-0 opacity-20 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuDdj-hbqbwEZIWD3ozKax94Ee-RShg_Ngmga6DlQQyLamXJVtpkz9hO1LASf9LTVErBb3dksTFBmVIFJuLi5XJEXc9KU_cq_EGWScWovLgWKx1v00fg8M2BDANYQ0555CIZbbhYtCKKNQvWpnOI4VaorA_zeLwDMkyfMrPUz1_Jco99qwKfIjMWgaGcb3kAiUwcOmKRMkNS1YQqlomxw0VchzfM5s5wX5CYM6ytLUq59mS1y3__h8YVxQ_CjoI47FbzF4b4hx5dkx20')] bg-cover bg-center" />
    <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-serif text-surface mb-6 leading-tight font-light">지금 바로 당신의 <br />진심을 전달하세요.</h2>
        <h3 className="text-lg text-surface/60 mb-12 max-w-2xl mx-auto font-light italic">가장 빛나는 순간에 카리스플라워가 함께하겠습니다.</h3>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 mb-12">
          <div className="text-surface">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-surface/30 mb-2">Fast Order Hotline</p>
            <div className="flex flex-col gap-1">
              <a href="tel:0547712020" className="text-2xl md:text-3xl font-serif font-bold hover:text-secondary-container transition-colors tracking-tight">T. 054)771-2020</a>
              <a href="tel:01036367946" className="text-2xl md:text-3xl font-serif font-bold hover:text-secondary-container transition-colors tracking-tight">H. 010-3636-7946</a>
            </div>
          </div>
          <div className="w-[1px] h-12 bg-white/10 hidden md:block" />
          <div className="text-surface">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-surface/30 mb-2">Kakao Talk Support</p>
            <a href="#" className="text-3xl md:text-4xl font-serif font-bold hover:text-secondary-container transition-colors tracking-tight">@동국꽃집(카리스플라워)</a>
          </div>
        </div>
        
        <button className="px-10 py-5 bg-secondary-container text-primary text-base font-bold rounded-full hover:scale-110 transition-transform active:scale-95 shadow-2xl hover:bg-white">
          온라인 바로 주문하기
        </button>
      </motion.div>
    </div>
  </section>
);

const Location = () => (
  <section id="location" className="py-12 bg-surface">
    <div className="max-w-5xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <div>
            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-[10px]">Location</span>
            <h2 className="text-3xl font-serif mt-2 text-primary font-normal leading-tight">
              품격 있는 서비스를 위한 <br /> 오프라인 공간
            </h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-surface-container-low rounded-2xl border border-primary/5 shadow-sm">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm border border-primary/5">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary/30 mb-0.5">Address</p>
                <p className="text-base text-primary font-medium">경북 경주시 현곡면 가삼골2길 1-67</p>
                <p className="text-xs text-primary/60">동국꽃집 (카리스플라워)</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-surface-container-low rounded-2xl border border-primary/5 shadow-sm">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm border border-primary/5">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary/30 mb-0.5">Business Hours</p>
                <p className="text-base text-primary font-medium">08:00 - 20:00</p>
                <p className="text-xs text-primary/60">365일 연중무휴 (전국 3시간 배송)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative aspect-video lg:aspect-square rounded-[2rem] overflow-hidden shadow-xl border-4 border-white group max-h-[400px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.4893700025732!2d129.1764653152603!3d35.86146208015183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35664db13656093d%3A0xe67db0739c943806!2z6rK97Y6Y67aB64-EIOqyveyjvOyLnCDtmITqs6HrqbQg6rCA7IK86rOoMuuidC_msLggMS02Nw!5e0!3m2!1sko!2skr!4v1713618193821!5m2!1sko!2skr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-700"
          ></iframe>
          <div className="absolute inset-0 pointer-events-none border border-primary/10 rounded-[2rem]"></div>
          <a 
            href="https://www.google.com/maps/place/%EA%B2%BD%EC%83%81%EB%B6%81%EB%8F%84+%EA%B2%BD%EC%A3%BC%EC%8B%9C+%ED%98%84%EA%B3%A1%EB%A9%B4+%EA%B0%80%EC%82%BC%EA%B3%A82%EA%B8%B8+1-67/data=!4m6!3m5!1s0x35664e2ca041b07b:0x2db5b0b6b017141b!8m2!3d35.8686012!4d129.1971788!16s%2Fg%2F11jz7vhnp_!5m1!1e2?hl=ko&entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-primary px-4 py-2 rounded-xl text-xs font-bold shadow-lg flex items-center gap-2 hover:bg-white transition-all border border-primary/5 active:scale-95 z-20"
          >
            <MapPin className="w-3 h-3" />
            지도에서 열기
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-surface py-10 border-t border-primary/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
        <div className="space-y-6">
          <div className="text-2xl font-serif font-bold text-primary">동국꽃집 (카리스플라워)</div>
          <div className="text-sm text-primary/50 max-w-sm space-y-2">
            <p className="flex items-center gap-2"><MapPin className="w-4 h-4 opacity-40" /> 경북 경주시 현곡면 가삼골2길 1-67</p>
            <p className="flex items-center gap-2"><Phone className="w-4 h-4 opacity-40" /> 054-771-2020 / 010-3636-7946</p>
            <p className="leading-relaxed mt-4">
              Botanical Archivists & Premium Wreath Delivery.<br />
              당신의 특별한 순간을 가장 고귀하게 기억될 수 있도록 디자인합니다.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="p-2.5 rounded-full bg-primary/5 text-primary hover:bg-primary hover:text-surface transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-2.5 rounded-full bg-primary/5 text-primary hover:bg-primary hover:text-surface transition-all">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-primary/30">Shop</p>
            <ul className="space-y-3 text-sm font-medium text-primary/60">
              <li><a href="#" className="hover:text-primary transition-colors">Celebration</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Funeral</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Plant & Pot</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-primary/30">Support</p>
            <ul className="space-y-3 text-sm font-medium text-primary/60">
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Corporate Inquiry</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Delivery Trace</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-primary/30">Legal</p>
            <ul className="space-y-3 text-sm font-medium text-primary/60">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Use</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pt-8 border-t border-primary/5 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-primary/30">© 2024 동국꽃집(카리스플라워). All rights reserved.</p>
        <p className="text-xs text-primary/30 font-medium">Spark Your Moments with Bloom</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <BrandValues />
      <Products />
      <DeliveryProcess />
      <BentoReviews />
      <FAQ />
      <Location />
      <CTA />
      <Footer />
    </div>
  );
}
