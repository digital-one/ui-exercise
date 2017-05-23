import normalize from './normalize.css';
import styles from './index.scss';
import $ from 'jquery';

$(function() {

    const
        sidebar = $('.sidebar'),
        sidebarInner = $('.sidebar__inner'),
        header = $('.header'),
        footer = $('.footer'),
        trigger = $('.primary-nav__link[data-trigger=sidebar]');

    const resizeSidebar = () => {
        const
            headerHeight = header.height(),
            sidebarHeight = $(document).height() - headerHeight,
            windowWidth = $(window).width(),
            sidebarInnerHeight = $(window).height() - headerHeight;
        sidebar.css({ height: `${sidebarHeight}px` });
        sidebarInner.css({ height: `${sidebarInnerHeight}px` });
        console.log(headerHeight);
    }

    const toggleSidebar = (e) => {
        e.preventDefault();
        if (trigger[0].hasAttribute("data-selected")) {
            trigger.removeAttr("data-selected")
            sidebar.removeAttr("data-active");
        } else {
            trigger.attr("data-selected", true)
            sidebar.attr("data-active", true);
        }
    }

    trigger.on('click', toggleSidebar);
    $(window).on('resize', resizeSidebar);
    resizeSidebar();

});