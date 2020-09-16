
import React from 'react';
import "./Works.css";

const Works = () => {

    return(


 <section id="works">
 <div className="section-inner">
   <div className="title">
     <div className="item-container">
       <a href="#">
         <h2>WORKS</h2>
       </a>
     </div>
   </div>
   <div className="works-items">
     <div className="row-1">
       <div className="item-container">
         <a href="#" onclick="if (!window.__cfRLUnblockHandlers) return false; return false">
           <div className="item">
             <video defaultmuted playsInline loop muted preload="none" poster="vf_happy_poster.jpg">
               <source src="vf_happy.mp4" type="video/mp4" />
             </video>
             <div className="text-container">
               <span>Vodafone Happy</span>
             </div>
           </div>
         </a>
       </div>
       <div className="item-container">
         <a href="#" onclick="if (!window.__cfRLUnblockHandlers) return false; return false">
           <div className="item">
             <video defaultmuted playsInline loop muted preload="none" poster="assets/videos/vf_new_id/vf_new_id.jpg">
               <source src="assets/videos/ti_je_nje_luledielli.m4v" type="video/mp4" />
             </video>
             <div className="text-container">
               <span>Vodafone New ID</span>
             </div>
           </div>
         </a>
       </div>
     </div>
     <div className="row-1">
       <div className="item-container">
         <a href="#" onclick="if (!window.__cfRLUnblockHandlers) return false; return false">
           <div className="item">
             <video defaultmuted playsInline loop muted preload="none" poster="assets/videos/policia/policia.jpg">
               <source src="assets/videos/golf_7.mp4" type="video/mp4" />
             </video>
             <div className="text-container">
               <span>Policia e Shtetit</span>
             </div>
           </div>
         </a>
       </div>
       <div className="item-container">
         <a href="#" onclick="if (!window.__cfRLUnblockHandlers) return false; return false">
           <div className="item">
             <video default muted playsInline loop preload="none" poster="assets/videos/vf_city/vf_city.jpg">
               <source src="assets/videos/vodafone city video.mp4" type="video/mp4" />
             </video>
             <div className="text-container">
               <span>Vodafone City</span>
             </div>
           </div>
         </a>
       </div>
     </div>
     <div className="row-3">
       <div className="item-container">
         <a href="#" onclick="if (!window.__cfRLUnblockHandlers) return false; return false">
           <div className="item">
             <video defaultmuted playsInline loop muted preload="none" poster="assets/videos/pepsi/pepsi.jpg">
               <source src="assets/videos/pepsi_smileys.mp4" type="video/mp4" />
             </video>
             <div className="text-container">
               <span>Pepsi</span>
             </div>
           </div>
         </a>
       </div>
       <div className="item-container">
         <a href="#" onclick="if (!window.__cfRLUnblockHandlers) return false; return false">
           <div className="item">
             <video id="test" defaultmuted playsInline loop muted preload="none" poster="assets/videos/vf_bazzar/vf_bazzar.jpg">
               <source src="assets/videos/vf_bazar2.mp4" type="video/mp4" />
             </video>
             <div className="text-container">
               <span>Vodafone Bazzar</span>
             </div>
           </div>
         </a>
       </div>
       <div className="item-container" id="testvideo">
         <a href="#" onclick="if (!window.__cfRLUnblockHandlers) return false; return false">
           <div className="item">
             <video defaultmuted playsInline loop muted preload="none" poster="assets/videos/vf_christmas_card/vf_christmas_card.jpg?t=1">
               <source src="assets/videos/xmas2.mp4" type="video/mp4" />
             </video>
             <div className="text-container">
               <span>Vodafone Christmas Card</span>
             </div>
           </div>
         </a>
       </div>
       <div className="item-container">
         <a href="#" onclick="if (!window.__cfRLUnblockHandlers) return false; return false">
           <div className="item">
             <video defaultmuted playsInline loop muted preload="none" poster="assets/videos/vf_happy_2/vf_happy_2.jpg">
               <source src="assets/videos/vodafone_happy_2.mp4" type="video/mp4" />
             </video>
             <div className="text-container">
               <span>Vodafone Happy</span>
             </div>
           </div>
         </a>
       </div>
     </div>
     <div className="row-3">
       <div className="item-container">
         <a href="#" onclick="if (!window.__cfRLUnblockHandlers) return false; return false">
           <div className="item">
             <video defaultmuted playsInline loop muted preload="none" poster="assets/videos/strongbow/strongbow.jpg">
               <source src="assets/videos/apple banak_new_2.mp4" type="video/mp4" />
             </video>
             <div className="text-container">
               <span>Strongbow</span>
             </div>
           </div>
         </a>
       </div>
       <div className="item-container">
         <a href="#" onclick="if (!window.__cfRLUnblockHandlers) return false; return false">
           <div className="item">
             <video defaultmuted playsInline loop muted preload="none" poster="assets/videos/strongbow_2/strongbow_2.jpg">
               <source src="assets/videos/christmas_lights_2.mp4" type="video/mp4" />
             </video>
             <div className="text-container">
               <span>Strongbow</span>
             </div>
           </div>
         </a>
       </div>
       <div className="item-container">
         <a href="#" onclick="if (!window.__cfRLUnblockHandlers) return false; return false">
           <div className="item">
             <div className="item">
               <img src="assets/images/works/square/Nata-e-Bardhe375.gif" alt="" />
               <div className="text-container">
                 <span>Nata e bardhë</span>
               </div>
             </div>
           </div>
         </a>
       </div>
       <div className="item-container">
         <a href="#" onclick="if (!window.__cfRLUnblockHandlers) return false; return false">
           <div className="item">
             <div className="item">
               <img src="assets/images/works/square/MyVodafone375.gif" alt="" />
               <div className="text-container">
                 <span>My Vodafone</span>
               </div>
             </div>
           </div>
         </a>
       </div>
     </div>
   </div>
 </div>
</section>
);
}

export default Works;