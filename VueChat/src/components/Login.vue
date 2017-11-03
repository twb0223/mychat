<template>
    <div class="login_main">
        <div class="login_form">
            <div class="centerinput">
                <div>
                    <input type="text" name="account" v-model="userName" placeholder="输入账号">
                    <input type="password" name="password" v-model="pwd" placeholder="输入密码">
                </div>
            </div>
            <div class="thirdlogin">

            </div>
            <div class="login_btn">
                <button @click='login'>Login</button>
                <button @click='cancel'>Cancel</button>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            userName: "",
            pwd: ""
        }
    },
    methods: {
        login() {
            this.$router.push({ name: 'Main' });
        },
        cancel() {
            this.userName = "";
            this.pwd = "";
        }
    }
}
</script>
<style scoped>
.login_main {
    position: fixed;
    top: 50%;
    bottom: 50%;
    left: 50%;
    right: 50%;
    width: 0;
    height: 0;
}

.login_form {
    width: 450px;
    height: 300px;
    /*margin: 50px auto;*/
    margin-left: -225px;
    margin-top: -150px;
    box-shadow: 0px 0px 10px rgba(0, 204, 204, .5);
    border-radius: 10px;
}

.centerinput {
    width: 300px;
    height: 150px;
    padding-top: 90px;
    padding-left: 75px;
    vertical-align: middle;
}

.centerinput input {
    height: 30px;
    line-height: 30px;
    width: 100%;
    font-size: 16px;
    border: 0px solid #ddd;
    margin-bottom: 20px;
    outline: none;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
}

.login_btn {
    text-align: center;
    height: 35px;
    line-height: 35px;
}

.login_btn input {
    border-radius: 5px;
    width: 70px;
    height: 30px;
    margin-left: 15px;
    background-color: #ddd;
    border: 0px solid #eee;
    outline: none;
    cursor: pointer;
    text-shadow: 0 1px 1px rgba(0, 0, 0, .12);
    /*box-shadow: 0px 0px 10px rgba(0, 204, 204, .5);*/
}

.login_btn input:hover {
    box-shadow: 0 0 10px rgba(0, 204, 204, .5);
    background: linear-gradient(to bottom, #0e7bef, #0d73da);
    color: #fff;
}

.thirdlogin {
    text-align: center;
    margin-top: -40px;
}
</style>
