var main = new Vue({
    el: "#main",
    data: {
        all: [],
        route: "",
        is_lock: true,
        wait: [],
        search_name: ""
    },
    methods: {
        show: function (event) {
            document.getElementById("list").classList.toggle('non-display');
            document.getElementById("menu").getElementsByClassName("TaiChi")[0].classList.toggle('rotate');
        },
        click: function (event) {
            var page = event.target,
                num;
            // while (!page.classList.contains('page')) {
            //     page = page.parentElement;
            // }
            if (page.classList.contains('page')) {
                if (this.route === "") {
                    num = 0 + 1;
                }
                else {
                    for (var i = 0; i < this.all.length; i++) {
                        if (this.all[i].name === this.route) {
                            num = i + 1;
                            if (num >= this.all.length) {
                                num -= this.all.length;
                            }
                            break;
                        }
                    }
                }
                if (this.all[num] === undefined) {
                    return;
                }
                window.location.hash = this.all[num].name;
            }
        }
    },
    computed: {
        some: function () {
            var index = 0, list = [];
            if (this.route) {
                for (index = 0; index < this.all.length; index++) {
                    if (this.all[index].name === this.route) {
                        break;
                    }
                }
            }
            if (this.wait.length === 0) { // 页面刚加载
                list = this.all.slice(0, 2);
            }
            else {
                this.wait = list;
            }
            list[list.length - 1] = this.all[index];

            return list;
        },
        after_filter: function () {
            var s = this.search_name,
                list = this.all.filter(function (item) {
                    return item.name.indexOf(s) > -1;
                });
            return list;
        }
    },
    beforeCreate: function () {
        (function GetColors() {
            axios.get("./data.json")
                .then(function (rep) {
                    main.all = main.all.concat(rep.data);
                })
                .catch(function (error) {
                    GetColors();
                });
        })();
        setTimeout(function () {
            main.is_lock = false;
        }, 3000)
    }
});
// 路由
function onChangeRoute() {
    var route = window.location.hash.split("?")[0];
    var params = window.location.hash.split("?")[1];
    var newParams = {};
    if (params !== undefined) {
        for (var i = 0; i < params.split("&").length; i++) {
            var t = params.split("=");
            newParams[t[0]] = t[1];
        }
    }
    main.params = newParams;
    main.route = decodeURIComponent(route.slice(1));
}

onChangeRoute();
window.addEventListener('hashchange', onChangeRoute);
