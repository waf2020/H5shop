<template>
    <div class="box" @click="godetail(good_items.iid)">
        <div class="item-img">
        <img :src="good_items.show.img"  @load="isload"/>
        </div>
        <div class="info">
            <div class="title">{{good_items.title}}</div>
             <div class="info-other">
                 <span class="price">{{good_items.price}}</span>
                 <span class="cfav">{{good_items.cfav}}</span>
             </div>
        </div>
    </div>
</template>


<script>
export default {
    name:'goodsitem',
    props:{
        good_items:{
            type:Object,
            defaule(){
                return '222'
            }
        }
    },
    created(){
       
      
    },
    methods:{
        isload(){
            this.$emit('isload')
        },
        godetail(iid){
            this.$router.push('/detail/'+iid);
        }
    }
}
</script>

<style lang="scss" scoped>
.info .title {
    width: 180px; 
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;

}
.box {
    width: 100%;
}

.item-img {
    width: 100%;
}

.item-img img {
    width: 100%;
    border-radius: px(10);
}
.info-other {
    text-align:center;
}

.info-other .cfav::before{
    display:inline-block;
    content: '';
    width: 14px;
    height: 14px;
     background: url("../../../assets/img/common/favor.png") 0 0/14px 14px;
}
</style>