<!-- Component template -->
<template>
<div>
    <div class="row">
        <div class="col-sm-1 col-md-1 col-lg-1"></div>
        <div class="col-sm-10 col-md-10 col-lg-10">
            <h1>离线模式</h1>
            <h3>您处于离线状态，暂时无法查看该页面。</h3>
        </div>
        <div class="col-sm-1 col-md-1 col-lg-1"></div>
    </div>
</div>
</template>
<!-- Script -->
<script>
import {urlsafe_b64decode} from "academia/util/core";

export default {
    mounted()
    {   //Next page; fallback to index page
        let next = this.$route.query.next;
        next = next?JSON.parse(urlsafe_b64decode(next)):"/";

        //Online checking
        let handle = setInterval(() => {
            if (navigator.onLine)
            {   clearInterval(handle);
                this.$router.replace(next);
            }
        }, 10000);
    }
}
</script>
