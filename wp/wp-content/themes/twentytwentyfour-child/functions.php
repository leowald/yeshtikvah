<?php
add_action( 'wp_enqueue_scripts', 'enqueue_parent_styles' );
//add_action('template_redirect', 'disable_wp_frontend');

function disable_wp_frontend() {
    // If it's an API request or an admin page, allow it
    if (is_admin() || strpos($_SERVER['REQUEST_URI'], '/wp-json/') === 0) {
        return;
    }

    // redirect  - anyone trying to access localhost:8000 will be shown a blank screen
    wp_redirect('');
    exit;
}

// ensure parent styles are available to child theme
function enqueue_parent_styles() {
   wp_enqueue_style( 'parent-style', get_template_directory_uri().'/style.css' );
}


