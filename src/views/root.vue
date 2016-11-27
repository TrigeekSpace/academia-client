<!-- Component template -->
<template>
<body>
    <!-- Navigation bar -->
    <nav class="navbar navbar-default" role="navigation">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="/">Academia</a>
            </div>
            <!-- Menu -->
            <ul class="nav navbar-nav">
                <li class="active"><a href="#">test</a></li>
            </ul>
            <!-- Anonymous user -->
            <ul class="nav navbar-nav navbar-right">
                <li><router-link to="/users/register"><span class="glyphicon glyphicon-plus"></span>&nbsp;&nbsp;Register</router-link></li>
                <li><router-link to="/users/login"><span class="glyphicon glyphicon-log-in"></span>&nbsp;&nbsp;Log-in</router-link></li>
            </ul>
            <!-- Current user
            <ul class="nav navbar-nav navbar-right">
                <li></li>
            </ul>-->
        </div>
    </nav>
    <!-- Router view -->
    <router-view></router-view>
</body>
</template>
<!-- Script -->
<script>
export default {
    data: () => ({})
};
</script>
