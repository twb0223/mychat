<template>
    <div class="header">
        <div class="logo">
            <img src="../assets/img/face.jpg" alt="">
        </div>
        <div id="menu">
            <!-- <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Products</a>
                </li>
                <li>
                    <a href="">Api</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>

            </ul> -->
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  clear: both;
  min-height: 50px;
  background: #f9fafc;
  top: 0;
  position: fixed;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 204, 204, 0.5);
}
.logo {
  margin-top: 5px;
  margin-left: 10px;
  float: left;
  text-align: left;
  vertical-align: middle;
}
.logo img {
  width: 40px;
  height: 40px;
  border-radius: 100px;
}

#menu {
  height: 30px;
  width: 300px;
  margin-top: 15px;
  margin-left: 100px;
  vertical-align: middle;
}

#menu ul {
  margin: 0, auto;
}

#menu li {
  margin: 0, auto;
  list-style: none;
  padding: 0;
  margin: 0;
  float: left;
}

#menu li a {
  color: black;
  display: block;
  margin-left: 10px;
  text-decoration-line: none;
  font-size: 20px;
}

#menu li a:hover {
  color: #8492a6;
  text-decoration: none;
}
</style>
