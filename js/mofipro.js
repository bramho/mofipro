$(document).ready(function() {

   var ratings = new Array();
   var selectedStar = 0;

   $('.rating-stars:radio').change(function() {
      selectedStar = $(this).data('star');
   });

   $('#submit-rating').on('click', function() {
      var rating = selectedStar;

      if (rating == 0) {
         alert('Please select a star');
      } else {
         ratings.push(rating);

         var sum = 0;

         for (var i = 0; i < ratings.length; i++) {
            sum += ratings[i];
         }

         var average = sum / ratings.length;

         if ( Math.round(average) !== average ) {
            average = average.toFixed(1);
         }

         $('.rating-number').html(average);
      }

   });
});
