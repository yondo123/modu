<template>
    <div class="left-wrap md:col-span-3 lg:col-span-2">
        <header>
            <h2>
                <router-link to="/" class="modu">MoDU </router-link>
            </h2>

            <button class="menu-button" v-if="this.menuOpen" v-on:click="toggleMenu">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-chevrons-up"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#1dd1a1"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" x-show="open" />
                    <polyline points="7 11 12 6 17 11" />
                    <polyline points="7 17 12 12 17 17" />
                </svg>
            </button>
            <button class="close-button" v-else v-on:click="toggleMenu">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-menu-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#1dd1a1"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" x-show="!open" />
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
            </button>
        </header>

        <nav v-bind:class="{hide: $isMobile() && !this.menuOpen}">
            <ul>
                <!-- selected-menu -->
                <li v-for="(item, index) in this.menuList" :key="index">
                    <a v-bind:class="isActiveMenu(item.catId)" v-on:click="setSelectedMenu(item.catId)" v-bind:href="$router.resolve({name: 'board', params: {id: item.catId}}).href"
                        ><i v-bind:class="`fas ${menuIcon(item.catId)}`"></i> &nbsp;{{ item.name }}</a
                    >
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import {mapState, mapGetters, mapMutations} from 'vuex';
export default {
    data() {
        return {
            menuOpen: false
        };
    },
    computed: {
        ...mapGetters('style', {menuList: 'getMenuList'}),
        ...mapState('style', ['menuHeader', 'selectedMenuId'])
    },
    methods: {
        ...mapMutations('style', ['setSelectedMenu']),
        toggleMenu() {
            return (this.menuOpen = !this.menuOpen);
        },
        menuIcon(catId) {
            let iconClass = '';
            switch (catId) {
                case 'CAT0001':
                    iconClass = 'fa-comments';
                    break;
                case 'CAT0002':
                    iconClass = 'fa-paper-plane';
                    break;
            }
            return iconClass;
        },
        isActiveMenu(menuId) {
            return menuId === this.selectedMenuId ? 'active-menu' : '';
        }
    },
    created() {
        this.$store.dispatch('style/requestMenuList');
    }
};
</script>

<style scoped>
.modu {
    font-family: 'Mochiy Pop P One', sans-serif;
    max-width: 100vw;
}

.left-wrap {
    background: #fff;
    display: flex;
    width: 100vw;
    flex-direction: column;
    position: fixed;
    z-index: 1;
}

.left-wrap > header {
    display: flex;
    justify-content: space-between;
    padding: 1.6rem 3.2rem;
}

.left-wrap > header > h2 {
    padding: 0;
}

.left-wrap > header > h2 > a {
    font-size: 4rem;
    font-weight: bold;
    color: var(--main-color);
    text-align: center;
}

.left-wrap > .open {
    display: block;
}

.menu-button,
.close-button {
    border-style: none;
}

/* nav */
.left-wrap > nav {
    padding: 1.6rem;
    -webkit-box-shadow: 2px 6px 7px -5px rgba(0, 0, 0, 0.71);
    -moz-box-shadow: 2px 6px 7px -5px rgba(0, 0, 0, 0.71);
    box-shadow: 2px 6px 7px -5px rgba(0, 0, 0, 0.71);
}

.left-wrap ul li {
    margin-top: 0.8rem;
    padding: 0.8rem 1.6rem;
    cursor: pointer;
}

.left-wrap ul li a {
    height: 2rem;
    color: var(--sub-font-color);
    font-size: 1.4rem;
}

.selected-menu {
    opacity: 0.8;
    border: 0.1rem solid #fff;
    border-radius: 0.8rem;
}

.active-menu {
    color: var(--main-color) !important;
    font-weight: bold !important;
}

/* laptop */
@media screen and (min-width: 1024px) {
    .left-wrap > header {
        justify-content: center;
        margin-top: 15px;
    }
    .menu-button {
        display: none;
    }

    .left-wrap {
        border-right: 0.1rem solid var(--border-color);
        position: initial;
        width: auto;
    }

    .left-wrap ul li {
        height: 3.2rem;
        margin-top: 0.8rem;
        padding: 0.8rem 1.6rem;
    }

    .left-wrap > nav {
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
    }

    .left-wrap ul li a:hover {
        font-weight: bold;
        opacity: 0.8;
        border: 0.1rem solid #fff;
        border-radius: 0.8rem;
    }
}
</style>
