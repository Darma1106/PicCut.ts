<template>
  <div class="vue-piccutter">
    <img src="../assets/Darma1.jpg" ref="rawImg">
    <canvas ref="canvas"></canvas>
    <button @click="cut()">剪切</button>
    <img v-for="(img,i) in picArr" :key="i" :src="img" alt="">
  </div>
</template>

<script>
import {PicCutter} from './PicCuter.js';

export default {
    name:'VuePiccutter',
    data(){
        return {
            imgUrl:'http://192.168.3.4/code/Darma1.jpg',
            piccutter:null,
            Cwidth:220,
            Cheight:220,
            picArr:[],
            picNum:3
        };
    },
    mounted(){
        this.piccutter = new PicCutter(this.$refs.canvas,this.$refs.rawImg);
        this.piccutter.createCanvas(this.Cwidth,this.Cheight);
    },
    methods:{
        cut(){
        this.picArr = this.piccutter.cutPicture(this.picNum);
    }
    }
}
</script>

<style >
.vue-piccutter canvas{
        display: none;
}
</style>