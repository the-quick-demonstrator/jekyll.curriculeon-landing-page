const endpoint = 'https://curriculeon.sellfy.store/cart/subscription/636982d994795de620bd6f72/';
// Function to fetch the visitor_id and redirect to the checkout page
function redirectToCheckout() {
      $.ajax({
        type: "GET",
        crossDomain: true,
        url: endpoint,
        dataType: "JSON",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        success: function (response) {
            const visitorId = response.visitor_id;
            window.location.href = `https://curriculeon.sellfy.store/checkout/payment?visitor_id=${visitorId}&type=SubscriptionsCart`;    
        },
        error: function (error) {
            console.log(error);
        }
    });
  }