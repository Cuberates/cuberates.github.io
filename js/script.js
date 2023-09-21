function render_buttons() {
   const highlight_button = { opacity: '0.5', width: '51px', height: '51px' }; // For animating the buttons
   const unhighlight_button = { opacity: '1', width: '50px', height: '50px' };
   const navigation_links = {
      "#github-button": "https://github.com/Cuberates",// Github repo 
      "#linkedin-button": "https://www.linkedin.com/in/xuan-viet-duc-nguyen-27102014b", // Linkedin
      "#youtube-button": "https://www.youtube.com/c/Cuberates", // YouTube channel
   }; 
   var navigation_items = document.getElementsByClassName("icon");
   for (var i = 0; i < navigation_items.length; i++) {
      let navigation_id = "#" + navigation_items[i].id;
      $(navigation_id).mouseenter(function () {
         $('body').css('cursor', 'pointer');
         $(this).stop().animate(highlight_button, 100);
      });
      $(navigation_id).mouseleave(function () {
         $('body').css('cursor', 'default');
         $(this).stop().animate(unhighlight_button, 100);
      });
      $(navigation_id).on("click", function () {
         let navigate_url = navigation_links[navigation_id];
         window.open(navigate_url);
      });
   }
}
$(document).ready(function () {
   // Navigation buttons
   render_buttons();
})