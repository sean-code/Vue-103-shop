<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white w-100 navigation" id="navbar">
       <div class="container">
         <router-link to="/" class="navbar-brand font-weight-bold" href="#">Online Shopping</router-link>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar"
           aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse " id="main-navbar">
           <ul class="navbar-nav mx-auto">
             <li class="nav-item active">
               <router-link to="/" class="nav-link" href="#">Home </router-link>
             </li>
     
             <li class="nav-item">
               <router-link to="/" class="nav-link" href="#">About Us</router-link>
             </li>
             <!-- Pages -->
             <li class="nav-item dropdown dropdown-slide">
               <router-link to='/' class="nav-link dropdown-toggle" href="#" id="navbarDropdown4" role="button" data-delay="350"
                 data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 Pages.
               </router-link>
               <ul class="dropdown-menu" aria-labelledby="navbarDropdown4">
                 <li><router-link to="/">About Us</router-link></li>
                 <li><router-link to="/">Blog</router-link></li>
                 <li><router-link to='/'>Blog Single</router-link></li>
                 <li><router-link to="/">Contact</router-link></li>
                 <li><router-link to="/">404 Page</router-link></li>
                 <li><router-link to="/">FAQ</router-link></li>
                 
               </ul>
             </li><!-- /Pages -->
             <!-- / Blog -->
     
             <li class="nav-item dropdown dropdown-slide">
               <router-link to="/" class="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-delay="350"
                 data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 Shop.
               </router-link>
               <ul class="dropdown-menu" aria-labelledby="navbarDropdown3">
                 <li><router-link to="/">Shop</router-link></li>
                 <li><router-link to="/">Product Details</router-link></li>
                 <li><router-link to="/">Checkout</router-link></li>
                 <li><router-link to="/">Cart</router-link></li>
                 <li><router-link to="/">Confirmation</router-link></li>
               </ul>
             </li><!-- / Blog -->
     
             <!-- Account -->
             <li class="nav-item dropdown dropdown-slide">
               <router-link to="/" class="nav-link dropdown-toggle" href="#" id="navbarDropdown5" role="button" data-delay="350"
                 data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 Account.
               </router-link>
               <ul class="dropdown-menu" aria-labelledby="navbarDropdown5">
                 <li><router-link to="/">Dashboard</router-link></li>
                 <li><router-link to="/">Orders</router-link></li>
                 <li><router-link to="/">Downloads</router-link></li>
                 <li><router-link to="/">Address</router-link></li>
                 <li><router-link to="/">Profile Details</router-link></li>
                 <li><router-link to="/">Login Page</router-link></li>
                 <li><router-link to="/">SignUp Page</router-link></li>
                 <li><router-link to="/">Forgot Password</router-link></li>
               </ul>
             </li><!-- / Account -->
     
             <li class="nav-item">
               <router-link class="nav-link" to="/contact">Contact Us</router-link>
             </li>
           </ul>
         </div>
         <!-- Navbar-collapse -->
     
         <ul class="top-menu list-inline mb-0 d-none d-lg-block" id="top-menu">
           <li class="list-inline-item">
             <router-link to="/" class="search_toggle" id="search-icon"><i class="tf-ion-android-search"></i></router-link>
           </li>
     
           <li class="dropdown cart-nav dropdown-slide list-inline-item">
             <router-link to="/" class="dropdown-toggle cart-icon" data-toggle="dropdown" data-hover="dropdown">
               <i class="tf-ion-android-cart"></i>
             </router-link>
             <div class="dropdown-menu cart-dropdown">
               <!-- Cart Item -->
               <div class="media">
                 <a href="#">
                   <img class="media-object img- mr-3" src="assets/images/cart-1.jpg" alt="image" />
                 </a>
                 <div class="media-body">
                   <h6>Ladies Bag</h6>
                   <div class="cart-price">
                     <span>1 x</span>
                     <span>1250.00</span>
                   </div>
                 </div>
                 <a href="#" class="remove"><i class="tf-ion-close"></i></a>
               </div><!-- / Cart Item -->
     
               <!-- Cart Item -->
               <div class="media">
                 <a href="#">
                   <img class="media-object img-fluid mr-3" src="assets/images/cart-2.jpg" alt="image" />
                 </a>
                 <div class="media-body">
                   <h6>Skinny Jeans</h6>
                   <div class="cart-price">
                     <span>1 x</span>
                     <span>1250.00</span>
                   </div>
                 </div>
                 <a href="#" class="remove"><i class="tf-ion-close"></i></a>
               </div><!-- / Cart Item -->
     
               <div class="cart-summary">
                 <span class="h6">Total</span>
                 <span class="total-price h6">$1799.00</span>
                 <div class="text-center cart-buttons mt-3">
                   <a href="#" class="btn btn-small btn-transparent btn-block">View Cart</a>
                   <a href="#" class="btn btn-small btn-main btn-block">Checkout</a>
                 </div>
               </div>
             </div>
           </li>
           <li class="list-inline-item"><a href="#"><i class="tf-ion-ios-person mr-3"></i></a></li>
         </ul>
       </div>
     </nav>
     <router-view />
   </template>