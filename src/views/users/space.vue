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
                    <p align="center">{{user.username}}</p>
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
                <!-- <div class="col-sm-1 col-md-1 col-lg-1" v-for="paper in this.papers">
                    <div class="well paper_item" align="center">
                        aaa
                    </div>
                </div> -->

                <div class="col-sm-1 col-md-1 col-lg-1"></div>
                <div class="col-sm-10 col-md-10 col-lg-10">
                    <ul class="list-group">
                        <li class="list-group-item" v-for="paper in this.papers">
                            <p><router-link :to="`academia/papers/detail?paper_id=${paper.id}`"><strong>{{paper.title}}</strong></router-link></p>
                            <p>作者：{{paper.authors}}</p>
                            <p>会议：{{paper.conference}}</p>
                        </li>
                    </ul>
                </div>
                <div class="col-sm-1 col-md-1 col-lg-1"></div>


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
                id: 123,
                username: "可达鸭",
                email: "aa@bb.cc",
                job: "学生",
                self_introduction: "Lorem ipsum dolor sit amet, ligula suspendisse nulla pretium, rhoncus tempor fermentum, enim integer ad vestibulum volutpat. Nisl rhoncus turpis est, vel elit, congue wisi enim nunc ultricies sit, magna tincidunt. Maecenas aliquam maecenas ligula nostra, accumsan taciti. Sociis mauris in integer, a dolor netus non dui aliquet, sagittis felis sodales, dolor sociis mauris, vel eu libero cras",
                avatar: "https://media.52poke.com/wiki/thumb/5/53/054Psyduck.png/240px-054Psyduck.png",
                contribution: "233"
            },
            papers: [
                {
                    id: 233,
                    title: "Benchmarking Data Curation Systems",
                    authors: "Patricia C. Arocena, Boris Glavic, Giansalvatore Mecca",
                    conference: "IEEE Special Issue 2016",
                    publish_date: null
                }, {
                    id: 234,
                    title: "Data Anamnesis: Admitting Raw Data into an Organization",
                    authors: "Sebastian Kruse, Thorsten Papenbrock, Hazar Harmouch, and Felix Naumann",
                    conference: "IEEE Special Issue 2016",
                    publish_date: null
                }, {
                    id: 235,
                    title: "Data Quality for Temporal Streams",
                    authors: "Tamraparni Dasu, Rong Duan, Divesh Srivastava",
                    conference: "IEEE Special Issue 2016",
                    publish_date: null
                }
            ]
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
