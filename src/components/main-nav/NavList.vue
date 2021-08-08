<template>
    <nav class="nav-list">
        <h3 class="nav-list__header"><slot></slot></h3>
        <ul class="nav-list__list" ref="list">
            <li
                class="nav-list__pointer"
                :style="{width:width, height:height, top:top, left:left}"    
            ></li>
            <li
                class="nav-list__item"
                v-for="(item, index) in items"
                :key="index"
                @click="setCurentPosition(index)"
                :class="{'nav-list__item--active': curentPosition === index}"
                :ref="setListItem"
            >
                <a class="nav-list__anchor" href="#">
                    <SvgSprite :symbol="item" size="0 0 24 24" class="nav-list__icon"></SvgSprite>
                    <!-- <svg><use xlink:href="#dashboard"></use></svg> -->
                    <span class="nav-list__text-title">{{item}}</span>
                </a>
            </li>

        </ul>
    </nav>
</template>

<script>
    import { SvgSprite } from 'vue-svg-sprite'
    export default {
        data() {
            return {
                curentPosition:0,
                pointerX: 0,
                pointerY: 0,
                pointerWidth: 0,
                pointerHeight: 0,
                itemRefs: [],
            };
        },
        name: "kebabCase",
        props: {

            items: {
                type:Array,
                required:true,
            },
        },
        components: {
            SvgSprite,
        },

        methods: {
            setListItem(el) {
                if (el) {
                    this.itemRefs.push(el)
                }
            },

            setCurentPosition(index) {
                console.log(index)
                this.curentPosition = index;
            },

            changeActive(index) {
                const parrent = this.$refs.list;
                const element = this.itemRefs[index];
                // console.log(parrent, element);
                // const element = event.currentTarget;
                // const parrent = element.parentNode;
                
                const elementPostition = element.getBoundingClientRect();
                const parrentPosition = parrent.getBoundingClientRect();
                this.pointerX = elementPostition.left - parrentPosition.left;
                this.pointerWidth = elementPostition.width;
                this.pointerHeight = elementPostition.height;
                this.pointerY = elementPostition.top - parrentPosition.top;

                this.$emit("switch", {
                    index,
                    position: this.items[index],
                });
            },
        },

        computed: {
            top() {
                return this.pointerY + "px";
            },

            left() {
                return this.pointerX + "px";
            },

            width() {
                return this.pointerWidth + "px";
            },

            height() {
                return this.pointerHeight + "px";
            },
        },

        beforeUpdate() {
            this.itemRefs = []
        },

        mounted() {
            this.changeActive(this.curentPosition);
            window.addEventListener("resize", ()=>this.changeActive(this.curentPosition));
        },

        // unmounted()

        // beforeMount() {
        //     this.curentPosition = 0;

        // },

        watch: {
            curentPosition (curent, prev) {
                console.log(curent, prev);
                this.changeActive(curent);
            }
        }
    }
</script>

<style lang="scss">
    .nav-list {
        width: 100%;

        &__header {
            font-size: 16 / 16 * 1rem;
            font-weight: 400;
            color: $menu-color;
            text-transform: capitalize;
            margin-bottom: 25px;
        }

        &__item {
            width: 100%;
            font-size: 18 / 16 * 1rem;
            position: relative;
        }

        &__pointer {
            position: absolute;
            background-color: $local-orange;
            opacity: 0.5;
            border-radius: 15px;
            transition: all 0.25s;
        }

        &__icon {
            display: inline;
            height: 1.5em;
        }

        &__list {
            position: relative;
        }

        &__text-title {
            margin-left: 10px;
        }

        &__anchor {
            text-transform: capitalize;
            text-decoration: none;
            color: $menu-color;
            display: flex;
            width: 100%;
            align-items: center;
            height: 60px;
            line-height: 3em;
            padding: 0 1em;
            transition: color 0.25s;
        }

        &__item:hover &__anchor, 
        &__item--active &__anchor{
            color: $local-orange;
        }

        @media screen and (max-width: 560px) {
            &__header {
                display: none;
            }

            &__list {
                display: flex;
            }

            &__text-title {
                display: none;
            }

            &__anchor {
                padding: 0;
            }

            &__icon {
                display: block;
                margin: auto;
                width: 75%;
            }
        }
    }
</style>