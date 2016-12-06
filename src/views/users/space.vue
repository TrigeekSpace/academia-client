<!-- component template -->
<template>
<div>
    <div class="row">
        <div class="col-sm-1 col-md-1 col-lg-1"></div>
        <div class="col-sm-10 col-md-10 col-lg-10">
            <div class="row">
                <h3>个人信息</h3>
            </div>
            <div class="row">
                <div class="col-sm-3 col-md-3 col-lg-3">
                    <img class="portrait" :src="`${user.avatar}`" align="center"/>
                    <p>{{user.username}}</p>
                </div>
                <div class="col-sm-3 col-md-3 col-lg-3">
                    <p><strong>邮箱：</strong>{{user.email}}</p>
                    <p><strong>职业：</strong>{{user.job}}</p>
                    <p><strong>贡献值：</strong>{{user.contribution}}</p>
                </div>
                <div class="col-sm-6 col-md-6 col-lg-6">
                     <h4>个人简介</h4>
                     <p>{{ user.self_introduction }}</p>
                </div>
            </div>
            <hr />
            <div class="row">
                <h3>我收藏的论文</h3>
            </div>
            <div class="row">
                <div class="col-sm-2 col-md-2 col-lg-2" v-for="paper in this.papers">
                    <div class="well paper_item" align="center">
                        aaa
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-1 col-md-1 col-lg-1"></div>
    </div>
</div>
</template>
<!-- script -->
<script>
export default {
    data()
    {
        return {
            user: {
                username: "可达鸭",
                email: "aa@bb.cc",
                job: "学生",
                self_introduction: "Lorem ipsum dolor sit amet, ligula suspendisse nulla pretium, rhoncus tempor fermentum, enim integer ad vestibulum volutpat. Nisl rhoncus turpis est, vel elit, congue wisi enim nunc ultricies sit, magna tincidunt. Maecenas aliquam maecenas ligula nostra, accumsan taciti. Sociis mauris in integer, a dolor netus non dui aliquet, sagittis felis sodales, dolor sociis mauris, vel eu libero cras. Faucibus at. Arcu habitasse elementum est, ipsum purus pede porttitor class, ut adipiscing, aliquet sed auctor, imperdiet arcu per diam dapibus libero duis. Enim eros in vel, volutpat nec pellentesque leo, temporibus scelerisque nec.",
                avatar: "https://media.52poke.com/wiki/thumb/5/53/054Psyduck.png/240px-054Psyduck.png",
                contribution: "233"
            },
            papers: [1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        }
    },
    methods: {

    }
};
</script>

<style>
.paper_item {
    width: 70%;
}

.portrait {
    max-width: 90%;
    max-height: 90%;
    border: solid 1px grey;
    border-radius: 5px;
}
</style>
