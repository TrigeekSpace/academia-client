<template>
    <div>
        <div class="row center-vertical">
            <div class="col-sm-2 col-md-3 col-lg-3"></div>
            <div class="col-sm-8 col-md-6 col-lg-6">
                <div align="center">
                    <h1 class="big-title">Academia Search</h1>
                    <br>
                    <div class="input-group">
                        <input type="text" class="form-control" id="search_input" placeholder="在Academia上搜索论文" v-model="search_text" data-toggle="popover" data-placement="bottom" data-content="你至少需要一个关键词" data-trigger="manual" v-on:keyup.enter="search()">
                        <span class="input-group-btn">
                            <button class="btn btn-default" @click="search()">
                                Search!
                            </button>
                        </span>
                    </div>
                </div>
            </div>
            <div class="col-sm-2 col-md-3 col-lg-3"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            search_text: ""
        };
    },
    methods: {
        search() {
            if (this.search_text.length == 0) {
                $("#search_input").popover('show');
            } else {
                $("#search_input").popover('hide');
                this.$router.push({path: "papers/list", query: {query: encodeURIComponent(this.search_text)}});
            }
        }
    }
};
</script>

<style>

.center-vertical {
    display: block;
    position:absolute;
    top:50%;
    transform:translateY(-50%);
}
</style>
