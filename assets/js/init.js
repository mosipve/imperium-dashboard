/*-------------------
* MATM UI KIT js
-------------------*/

$(document).ready(function () {

/*---------------------------
Wave effect Init
---------------------------*/
(function(){
 Waves.attach('.btn:not(.btn-icon):not(.btn-float)');
 Waves.attach('.btn-icon, .btn-float', ['waves-circle', 'waves-float']);
 Waves.init();
})();


/*---------------------------
bootstrap 4 Init
---------------------------*/
(function(){
        // Select all elements with data-toggle="tooltips" in the document
        $('[data-toggle="tooltip"]').tooltip(); 

        // Select all tabs
        $('.nav-tabs a').click(function(){
          $(this).tab('show');
        })

        // $('.collapse').collapse();


        // scroll spy navbar
        $('body').scrollspy({target: ".navbar"})

        // Select all elements with data-toggle="popover" in the document
        $('[data-toggle="popover"]').popover(); 

        // Enable manually modal
        $("#myModal").modal();
        $('#theModal').on('shown.bs.modal', function () {
          $('.modal-btn').trigger('focus')
        });
        // $('#theModal').modal('toggle'); /* show dialog after page load */

        // dropdown
        $('.dropdown-toggle').dropdown();
        $().dropdown('toggle');
        // collapse
        $('.collapse').collapse();

        // button
        $('.btn').button();

        // alert
        $('.close').alert("close");

        // Activate Carousel
        $("#myCarousel").carousel();
        // Enable Carousel Indicators
        $(".item").click(function(){
          $("#myCarousel").carousel(1);
        });
        // Enable Carousel Controls
        $(".carousel-control-prev").click(function(){
          $("#myCarousel").carousel("prev");
        });

      })();


    });




/*---------------------------
Search full width Init
---------------------------*/
// FULL BERGER MENU
/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
} 


/*---------------------------
Right Panel Init
---------------------------*/
// SIDE BERGER MENU
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openTNav() {
  document.getElementById("mySidenav").style.width = "250px";
  // document.getElementById("main").style.marginRight = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeTNav() {
  document.getElementById("mySidenav").style.width = "0";
  // document.getElementById("main").style.marginRight = "0";
} 

/*---------------------------
Right Panel Accordion Init
---------------------------*/
/*-- sidebar toggle accordion sign --*/
document.addEventListener('DOMContentLoaded', function () {
  $('.minuser').on('click', function () {
    $(this)
    .find('[data-fa-i2svg]')
    .toggleClass('fa-plus')
    .toggleClass('fa-minus');
  });
});