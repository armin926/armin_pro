<template>
<!-- 购物车 -->
    <div class="mena">
      <div class="menb">
        <input type="radio">
      </div>
      <div class="menc">
        <img src="../../../assets/024.png" alt="">
      </div>
      <div class="mend">
        <div>什么什么大米怎么怎么样</div>
        <div class="meng">限购10件</div>
        <div class="menf">
          <div>32.70</div>
          <div class="mene">
            <span>-</span>
            <span>1</span>
            <span>+</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
</script>

<style>
 body {
   background: #f0f0f0;
 }
 .mena {
   background: #fff;
   display: flex;
 }
 .menb {
   width: .5rem;
   height: 1.5rem;
   display: flex;
   align-items: center;
   justify-content: center;
 }
 .menb input{
   width: .3rem;
   height: .3rem;
 }
 .menc {
   width: 1.5rem;
   height: 1.5rem;
 }
 .menc img {
   width: 100%;
   height: 100%;
   border-radius: .1rem;
 }
 .mend {
   font-size: .26rem;
   flex: 1;
   padding-left: .3rem;
 }
 .mene {
   display: flex;
   width: 1.6rem;
   align-items: center;
   justify-content: space-around;
   border: .01rem solid;
 }
 .mene span:nth-child(2){
   border-left: .01rem solid;
   border-right: .01rem solid;
   padding: 0 .2rem;
 }
 .menf {
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: .6rem;
 }
 .meng {
   height: .8rem;
   line-height: .8rem;
 }
</style>
