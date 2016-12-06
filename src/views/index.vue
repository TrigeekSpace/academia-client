<template>
    <div>
        <div class="row">
            <div class="col-sm-2 col-md-3 col-lg-3"></div>
            <div class="col-sm-8 col-md-6 col-lg-6">
                <div align="center">
                    <h1 class="big-title">Academia Search</h1>
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="在Academia上搜索论文" v-model="search_text">
                        <span class="input-group-btn">
                            <router-link class="btn btn-default" :to="`/papers/list?query=${encodeURIComponent(search_text)}`">
                                Search!
                            </router-link>
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
    }
};
</script>

<style>
</style>
