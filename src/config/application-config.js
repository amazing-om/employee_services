import Notification from "unity-components/react/components/NotificationMessage.jsx";

export default {
    info: {
        appName: "Unity Template",
        appKey: "app",
        appBaseUrl: "/app"
    },
    dropDowns: [
        {
            iconClass: "icon-bell",
            data: [
                {time: "just now", level: "success", iclass: "plus", content: "New user registered."},
                {time: "3 mins", level: "danger", iclass: "bolt", content: "Server #12 overloaded."},
            ],
            customRow: Notification,
            showBadge: 'true',
        },
        {
            iconClass: "icon-user",
            data: [
                {link: "/logout", icon: "icon-key", content: "Log Out"}
            ],
            label: "Profile"
        }
    ],
    nav: [
        {title: "Home", icon: "fa fa-home", path: "/home"},
        {title: "Samples", icon: "fa fa-building", path: "/samples",
            child: [
                {title: "Redux (Example)", icon: "fa fa-support", path: "/samples/counter"},
                {title: 'SmartGridComponent', icon: 'fa fa-line-chart', path: '/samples/smartGridComponent'},
                {title: 'LotPackingList', icon: 'fa fa-line-chart', path: '/samples/lotPackingList'},
            ]
        },
        {title: 'Lot', icon: 'fa fa-archive', path:'/lotItemsPage'},
        {title: 'Item Search', icon: 'fa fa-archive', path:'/itemSearch'}
    ]
}