<!-- Component template -->
<template>
<div>
    <div class="row">
        <div class="col-sm-3 col-md-4 col-lg-4"></div>
        <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="well" align="center">
                <h1>Login</h1>
                <hr />
                <div class="alert alert-info">
                    Haven't got an account?
                    <router-link to="/users/register" class="alert-link">Register here</router-link>.
                </div>
                <form class="form-horizontal">
                    <input type="text" class="form-control" placeholder="Username" />
                    <input type="password" class="form-control" placeholder="Password" />
                    <div class="form-group">
                        <button class="btn btn-primary">Log In</button>&nbsp;
                        <button class="btn btn-default">I Forget Password</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="col-sm-3 col-md-4 col-lg-4"></div>
    </div>
</div>
</template>
<!-- Script -->
<script>
export default {
    data: () => ({})
};
</script>
